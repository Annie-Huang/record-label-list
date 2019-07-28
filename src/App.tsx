import React, {useState} from 'react';
import './App.css';
import Result from "./components/result";
import useAxiosFetch from "./useAxiosFetch";
import {InputFestival} from "./model/input-festival";
import {OutputRecordLabel} from "./model/output-record-label";
import {RecordLabelFormatUtils} from "./util/record-label-format-utils";


const App: React.FC = () => {
    const [recordLabels, setRecordLabels]  = useState<OutputRecordLabel[]>([]);
    const [noDataRetrieved, setNoDataRetrieved]  = useState(false);

    // const records = [
    //     {
    //         name: "Record Label 1",
    //         bands: [
    //             {
    //                 name: "Band X",
    //                 festivals: ["Omega Festival"]
    //             },
    //             {
    //                 name: "Band Y",
    //                 festivals: [],
    //             }
    //         ]
    //     },
    //     {
    //         name: "Record Label 2",
    //         bands: [
    //             {
    //                 name: "Band A",
    //                 festivals: ["Alpha Festival", "Beta Festival"],
    //             }
    //         ]
    //     }
    // ];

    const {
        data,
        isLoading,
        hasErrored,
        errorMessage,
    } = useAxiosFetch("/api/v1/festivals", []);

    // setRecordLabels(RecordLabelFormatUtils.getRecordLabels(data as InputFestival[]));

    // let recordLabels: OutputRecordLabel[] = [];
    const handleFetchData = () => {
        // useAxiosFetch("/api/v1/festivals", []);

        console.log('get to handleFetchData');
        console.log('data=', data);

        if (data === '') {
            setNoDataRetrieved(true);

        } else {
            const festivals = data as InputFestival[];
            // recordLabels = RecordLabelFormatUtils.getRecordLabels(festivals);
            setRecordLabels(RecordLabelFormatUtils.getRecordLabels(festivals));
            console.log("recordLabels=", recordLabels);
        }

    };

    if (isLoading) return <div>Loading...</div>;
    if (noDataRetrieved) return <div>No records retrieved from database, refresh this page again.</div>;
    if (hasErrored) return <div>{errorMessage}</div>;

    return (
        <div className="App">
            <button onClick={handleFetchData}>Fetch data</button>
            <Result recordLabels={recordLabels} />
        </div>
    );
};

export default App;
