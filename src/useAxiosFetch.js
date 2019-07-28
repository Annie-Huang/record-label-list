import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
    const myData = [
        {
            "name": "LOL-palooza",
            "bands": [
                {
                    "name": "Jill Black",
                    "recordLabel": "Fourth Woman Records"
                },
                {
                    "name": "Werewolf Weekday",
                    "recordLabel": "XS Recordings"
                },
                {
                    "name": "Frank Jupiter",
                    "recordLabel": "Pacific Records"
                },
                {
                    "name": "Winter Primates",
                    "recordLabel": ""
                }
            ]
        },
        {
            "name": "Small Night In",
            "bands": [
                {
                    "name": "Yanke East",
                    "recordLabel": "MEDIOCRE Music"
                },
                {
                    "name": "Green Mild Cold Capsicum",
                    "recordLabel": "Marner Sis. Recording"
                },
                {
                    "name": "Wild Antelope",
                    "recordLabel": "Marner Sis. Recording"
                },
                {
                    "name": "The Black Dashes",
                    "recordLabel": "Fourth Woman Records"
                },
                {
                    "name": "Squint-281",
                    "recordLabel": "Outerscope"
                }
            ]
        },
        {
            "bands": [
                {
                    "name": "Propeller",
                    "recordLabel": "Pacific Records"
                },
                {
                    "name": "Critter Girls",
                    "recordLabel": "ACR"
                }
            ]
        },
        {
            "name": "Twisted Tour",
            "bands": [
                {
                    "name": "Squint-281"
                },
                {
                    "name": "Auditones",
                    "recordLabel": "Marner Sis. Recording"
                },
                {
                    "name": "Summon",
                    "recordLabel": "Outerscope"
                }
            ]
        },
        {
            "name": "Trainerella",
            "bands": [
                {
                    "name": "Adrian Venti",
                    "recordLabel": "Monocracy Records"
                },
                {
                    "name": "YOUKRANE",
                    "recordLabel": "Anti Records"
                },
                {
                    "name": "Manish Ditch",
                    "recordLabel": "ACR"
                },
                {
                    "name": "Wild Antelope",
                    "recordLabel": "Still Bottom Records"
                }
            ]
        }
    ];
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
                // data: myData
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                hasErrored: true,
                errorMessage: "An Error is encountered when collecting to server, refresh this page again."
            };
        default:
            throw new Error();
    }
};

const useAxiosFetch = (initialUrl, initialData) => {
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
