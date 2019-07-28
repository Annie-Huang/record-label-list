import React from 'react';

const Result = ({recordLabels}) => {
    console.log("recordLabels222=", recordLabels);

    return(
        <>
            {recordLabels.map(recordLabel =>
                <div key={recordLabel.name+recordLabel.band}>
                    {recordLabel.showName ? <div>{recordLabel.name}</div> : null}
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{recordLabel.band}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{recordLabel.festivals}</div>
                </div>
            )}
        </>
    )
};

export default Result;
