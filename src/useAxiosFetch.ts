import {useState, useEffect, useReducer} from "react";
import axios from "axios";
import {State} from "./model/state";
import {Action} from "./model/action";

const dataFetchReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return {...state, isLoading: true, isError: false};
        case "FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                hasErrored: false,
                errorMessage: "",
                data: action.payload
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                hasErrored: true,
                errorMessage: "Server ERROR. Refresh this page to try to connect again."
            };
        default:
            throw new Error();
    }
};

const useAxiosFetch = (initialUrl: string, initialData: any) => {
    const [url] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: initialData
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({type: "FETCH_INIT"});

            try {
                let result = await axios.get(url);
                console.log('Success - result=', result);
                if (!didCancel) {
                    dispatch({type: "FETCH_SUCCESS", payload: result.data});
                }
            } catch (err) {
                console.log('Failed - error=', err);
                if (!didCancel) {
                    dispatch({type: "FETCH_FAILURE"});
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);

    return {...state};
};

export default useAxiosFetch;
