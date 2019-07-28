import React, {useState} from 'react';
import './App.css';
import Result from "./components/result";
import useAxiosFetch from "./useAxiosFetch";
import {InputFestival} from "./model/input-festival";
import {OutputRecordLabel} from "./model/output-record-label";
import {RecordLabelFormatUtils} from "./util/record-label-format-utils";


const App: React.FC = () => {
    const [recordLabels, setRecordLabels]  = useState<OutputRecordLabel[]>([]);

    const {
        data,
        isLoading,
        hasErrored,
        errorMessage,
    } = useAxiosFetch("/api/v1/festivals", []);

    const handleFetchData = () => {
        console.log('get to handleFetchData');
        console.log('data=', data);

        if (data !== '') {
            const festivals = data as InputFestival[];
            setRecordLabels(RecordLabelFormatUtils.getRecordLabels(festivals));
            console.log("recordLabels=", recordLabels);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (data === '') return <div>Server RUNNING. But records retrieved from database. Refresh this page again.</div>;
    if (hasErrored) return <div>{errorMessage}</div>;

    return (
        <div className="App">
            Server RUNNING. Data is Fetched, click button to show data: <br/>
            <button onClick={handleFetchData}>Show data</button>
            <Result recordLabels={recordLabels} />
        </div>
    );
};

export default App;
