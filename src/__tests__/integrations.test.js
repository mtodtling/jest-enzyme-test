import React from 'react';
import {mount} from 'enzyme';
import Root from "../Root";
import App from "../components/App";
import moxios from 'moxios';

let wrapped;

beforeEach(() => {
    // intercepts requests to specific API and mocks response; used because we can't make API
    // calls outside test suite
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
});

afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
});

it('can fetch list of comments and display them', (done) => {
    wrapped = mount(<Root><App/></Root>);

    wrapped
        .find('.fetch-comments')
        .simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        // Jest doesn't handle timeouts so we added callback done and called it
        done();
    });
});