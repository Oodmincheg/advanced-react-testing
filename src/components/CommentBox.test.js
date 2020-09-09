import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

it('comment box mounts without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('should contain form with textarea and button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox />, div);

  const form = div.querySelector('form');
  expect(!!form).toBe(true);

  const textarea = div.querySelector('textarea');
  expect(!!textarea).toBe(true);

  const button = div.querySelector('button');
  expect(!!button).toBe(true);
});
