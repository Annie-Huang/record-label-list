import * as React from 'react';
import { shallow } from 'enzyme';
import Result from "./result";
import {OutputRecordLabel} from "../model/output-record-label";
import toJson from "enzyme-to-json";

test('Result should render property when passing the record label list', () => {
    const outputRecordLabel: OutputRecordLabel[] = require('../../fixtures/output-record-labels-1.json');
    const result = shallow(<Result recordLabels={outputRecordLabel} />);

    // Snapshot demo
    expect(toJson(result)).toMatchSnapshot();
});
