import React from 'react';
import {OutputRecordLabel} from "../model/output-record-label";

const Result: React.FC<{ recordLabels: OutputRecordLabel[] }> = ({recordLabels}) => {
    return(
        <>
            {recordLabels.map(recordLabel =>
                <div key={recordLabel.name+recordLabel.band}>
                    {recordLabel.showName ? <div>{recordLabel.name}</div> : null}
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{recordLabel.band}</div>
                    {recordLabel.festivals.map(festival =>
                        <div key={festival}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{festival}</div>)}
                </div>
            )}
        </>
    )
};

export default Result;
