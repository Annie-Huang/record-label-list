import React from 'react';
import './App.css';
import Result from "./components/result";

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

    return (
        <div className="App">
            <Result records={records}></Result>
        </div>
    );
};

export default App;
