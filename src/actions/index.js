import {FETCH_COMMENTS, SAVE_COMMENT} from './types';
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}