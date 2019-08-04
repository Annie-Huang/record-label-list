import sortBy from 'lodash.sortby';
import {InputFestival} from '../model/input-festival';
import {OutputRecordLabel} from '../model/output-record-label';

const UNKNOWN_FESTICAL_NAME = 'Unknown Festival Name';
const UNKNOWN_RECORD_LABEL_NAME = 'Unknown Record Label Name';

export class RecordLabelFormatUtils {
    public static getRecordLabels(inputFestivals: InputFestival[]): OutputRecordLabel[] {
        // With intended structure of: {name+band: {name, band, festivals, showName}} so we can loop through
        // insertion faster. name is the record label name.
        const tempRecordLabelObj: {
            [key: string]: {
                name: string,
                band: string,
                festivals: string[],
                showName: boolean,
            }} = {};

        // Create recordLabels with each item contains: {name+band: {name, band, festivals, showName}}.
        inputFestivals.forEach((festival) => {
            const festivalName = festival.name ? festival.name : UNKNOWN_FESTICAL_NAME;
            festival.bands.forEach((band) => {
                const key = band.recordLabel + band.name;

                if (tempRecordLabelObj[key]) {
                    // Only add festivalName if it doesn't exist.
                    if (!tempRecordLabelObj[key].festivals.includes(festivalName)) {
                        tempRecordLabelObj[key].festivals.push(festivalName);
                    }

                } else {
                    tempRecordLabelObj[key] = {
                        name: (!band.recordLabel || band.recordLabel === '') ?
                            UNKNOWN_RECORD_LABEL_NAME : band.recordLabel,
                        band: band.name,
                        festivals: [festivalName],
                        // set to show record label name initial.
                        showName: true,
                    };
                }

            });
        });

        // Create RecordLabels[] and sorted by make and model
        const recordLabels: OutputRecordLabel[] =
            Object.keys(tempRecordLabelObj).map((key) => tempRecordLabelObj[key]);

        // Sort record label list by alphabetically
        recordLabels.forEach((recordLabel) => recordLabel.festivals.sort());
        const newRecordLabels: OutputRecordLabel[] = sortBy(recordLabels, ['name', 'band']);

        // Set showName = false, if it matches the previous item
        newRecordLabels.forEach((recordLabel, index) => {
            if (index < 1) {
                return;
            }

            if (recordLabel.name === newRecordLabels[index - 1].name) {
                recordLabel.showName = false;
            }
        });

        return newRecordLabels;
    }
}
