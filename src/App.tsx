import React, {useState} from 'react';
import './App.css';
import Result from './components/result';
import {InputFestival} from './model/input-festival';
import {OutputRecordLabel} from './model/output-record-label';
import useAxiosFetch from './useAxiosFetch';
import {RecordLabelFormatUtils} from './util/record-label-format-utils';

const App: React.FC = () => {
    const [recordLabels, setRecordLabels]  = useState<OutputRecordLabel[]>([]);

    const {
        data,
        isLoading,
        hasErrored,
        errorMessage,
    } = useAxiosFetch('/api/v1/festivals', []);

    const handleFetchData = () => {
        setRecordLabels(RecordLabelFormatUtils.getRecordLabels(data as InputFestival[]));
    };

    if (isLoading) {
        return <h5>Loading...</h5>;
    }
    if (data === '') {
        return <h5>Server RUNNING. But NO records retrieved from database. Refresh this page again.</h5>;
    }
    if (hasErrored) {
        return <h5>{errorMessage}</h5>;
    }

    return (
        <div className='App'>
            <h5>Server RUNNING. Data is Fetched, click button to show data, Or refresh the page to fetch data
                from backend again:</h5>
            <button className='btn btn-primary btn-sm' onClick={handleFetchData}>Show data</button>
            <Result recordLabels={recordLabels} />
        </div>
    );
};

export default App;
