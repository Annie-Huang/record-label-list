import {RecordLabelFormatUtils} from "./record-label-format-utils";
import {InputFestival} from "../model/input-festival";
import {OutputRecordLabel} from "../model/output-record-label";

declare var require: any;

describe('RecordLabelFormatUtils', () => {
    it('#getRecordLabels should convert input-festivals-1.json to output-record-labels-1.json', () => {
        const inputFestivals: InputFestival[] = require('../../fixtures/input-festivals-1.json');
        const expectedOutputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-1.json');
        const outputRecordLabel: OutputRecordLabel[] = RecordLabelFormatUtils.getRecordLabels(inputFestivals);
        expect(JSON.stringify(outputRecordLabel)).toEqual(JSON.stringify(expectedOutputRecordLabel));
    });

    it('#getRecordLabels should convert input-festivals-2.json to output-record-labels-2.json', () => {
        const inputFestivals: InputFestival[] = require('../../fixtures/input-festivals-2.json');
        const expectedOutputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-2.json');
        const outputRecordLabel: OutputRecordLabel[] = RecordLabelFormatUtils.getRecordLabels(inputFestivals);
        expect(JSON.stringify(outputRecordLabel)).toEqual(JSON.stringify(expectedOutputRecordLabel));
    });

    it('#getRecordLabels should convert input-festivals-3.json to output-record-labels-3.json', () => {
        const inputFestivals: InputFestival[] = require('../../fixtures/input-festivals-3.json');
        const expectedOutputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-3.json');
        const outputRecordLabel: OutputRecordLabel[] = RecordLabelFormatUtils.getRecordLabels(inputFestivals);
        expect(JSON.stringify(outputRecordLabel)).toEqual(JSON.stringify(expectedOutputRecordLabel));
    });

    it('#getRecordLabels should convert input-festivals-4.json to output-record-labels-4.json', () => {
        const inputFestivals: InputFestival[] = require('../../fixtures/input-festivals-4.json');
        const expectedOutputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-4.json');
        const outputRecordLabel: OutputRecordLabel[] = RecordLabelFormatUtils.getRecordLabels(inputFestivals);
        expect(JSON.stringify(outputRecordLabel)).toEqual(JSON.stringify(expectedOutputRecordLabel));
    });

    it('#getRecordLabels should convert input-festivals-5.json to output-record-labels-5.json', () => {
        const inputFestivals: InputFestival[] = require('../../fixtures/input-festivals-5.json');
        const expectedOutputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-5.json');
        const outputRecordLabel: OutputRecordLabel[] = RecordLabelFormatUtils.getRecordLabels(inputFestivals);
        expect(JSON.stringify(outputRecordLabel)).toEqual(JSON.stringify(expectedOutputRecordLabel));
    });
});
