import React from 'react';
import './App.css';
import Result from "./components/result";
import useAxiosFetch from "./useAxiosFetch";
import {InputFestival} from "./model/input-festival";


const App: React.FC = () => {
    const records = [
        {
            name: "Record Label 1",
            bands: [
                {
                    name: "Band X",
                    festivals: ["Omega Festival"]
                },
                {
                    name: "Band Y",
                    festivals: [],
                }
            ]
        },
        {
            name: "Record Label 2",
            bands: [
                {
                    name: "Band A",
                    festivals: ["Alpha Festival", "Beta Festival"],
                }
            ]
        }
    ];

    const {
        data,
        isLoading,
        hasErrored,
        errorMessage,
    } = useAxiosFetch("/api/v1/festivals", []);

    const handleFetchData = () => {
        const festivals = data as InputFestival[];
        console.log('festivals=', festivals);
        console.log('get to handleFetchData');
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="App">
            <button onClick={handleFetchData}>Fetch data</button>
            <Result records={records}></Result>
        </div>
    );
};

export default App;
