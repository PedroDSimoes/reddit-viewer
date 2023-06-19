import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('displays loading message when loading is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: true });
    expect(wrapper.find('.loading-text')).toHaveLength(1);
  });

  it('displays error message when error is present', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: 'Something went wrong' });
    expect(wrapper.find('.error-text')).toHaveLength(1);
    expect(wrapper.find('.error-text').text()).toEqual('Error: Something went wrong');
  });

  it('displays post titles when posts are present', () => {
    const mockPosts = [
      { data: { id: 1, title: 'Post 1' } },
      { data: { id: 2, title: 'Post 2' } },
      { data: { id: 3, title: 'Post 3' } },
    ];
    const wrapper = shallow(<App />);
    wrapper.setState({ posts: mockPosts });

    expect(wrapper.find('.post-item')).toHaveLength(3);
    expect(wrapper.find('.post-title').at(0).text()).toEqual('Post 1');
    expect(wrapper.find('.post-title').at(1).text()).toEqual('Post 2');
    expect(wrapper.find('.post-title').at(2).text()).toEqual('Post 3');
  });
});