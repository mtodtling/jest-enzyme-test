import React from 'react';
import {mount} from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;
let initialState = {
    comments: []
};

beforeEach(() => {
    initialState = {
        ...initialState,
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(<Root initialState={initialState}><CommentList/></Root>);
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain(initialState.comments[0]);
    expect(wrapped.render().text()).toContain(initialState.comments[1]);
});