import React from 'react';
import {mount} from 'enzyme';
import Root from "../../Root";
import CommentBox from "../CommentBox";


let wrapped;

beforeEach(() => {
    // mounts the full DOM (component + children -> not needed in this test (shallow would be enough),
    // added just for testing out options
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    // needed after mounting full DOM to clean up and prevent test interactions
    wrapped.unmount();
});

it('has a textarea and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped
            .find('textarea')
            // simulates change event with mocked event object
            .simulate('change', {target: {value: 'new comment'}})
            // forces component to re-render; needed because setState function is asynchronous!
            .update();
    });

    it('has a textarea users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('empties out textarea after input is submitted', () => {
        wrapped
            .find('form')
            .simulate('submit')
            .update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});