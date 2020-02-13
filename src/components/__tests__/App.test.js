import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import App from '../App';

let wrapped;

beforeEach(() => {
    // renders just the given component and none of the children
    wrapped = shallow(<App/>);
});

it('shows the CommentBox', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows the CommentList', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});