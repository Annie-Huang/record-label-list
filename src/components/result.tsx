import React, {ReactFragment} from 'react';

const Result = ({records}) => {
    // const recordsA = [
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

    console.log('records=', records);
    // const indent = '    ';

    const bandList = (bands) => {
        return bands ? bands.map(band =><div>&nbsp;&nbsp;&nbsp;&nbsp;{band.name}: festivalList(band.festivals)</div>) : ''
    };
    const festivalList = (festivals) => {
        return festivals ? festivals.map(feastival => <div key={feastival}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feastival}</div>) : '';
    };

    return (
        <>
            { records && records.map(record =>
                <div key={record.name}>
                    {record.name}:
                    {record.bands && record.bands.map(band =>
                        <div key={band.name}>&nbsp;&nbsp;&nbsp;&nbsp;{band.name}: {festivalList(band.festivals)}</div>
                    )}
                </div>
            )}
        </>
    );
};

export default Result;
