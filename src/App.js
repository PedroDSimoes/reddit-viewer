import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const openPostInNewTab = (permalink) => {
    const redditPostUrl = `https://www.reddit.com${permalink}`;
    window.open(redditPostUrl, '_blank');
  };

  const renderMedia = (post) => {
    if (post.data.media && post.data.media.reddit_video) {
      const { fallback_url, width, height } = post.data.media.reddit_video;
      return (
        <div className="video-container">
          <video src={fallback_url} width={width} height={height} controls muted>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      );
    }

    if (post.data.url && post.data.url.endsWith('.jpg')) {
      return (
        <div className="image-container">
          <img src={post.data.url} alt="Thumbnail" className="thumbnail-image" />
        </div>
      );
    }

    if (post.data.url && post.data.url.includes('imgur')) {
      const imageUrl = `${post.data.url}.jpg`;
      return (
        <div className="image-container">
          <img src={imageUrl} alt="Thumbnail" className="thumbnail-image" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app-container">
      <h1>Reddit Viewer!</h1>
      <h2>Reddit's top and most popular posts for you as they happen</h2>
      <ul className="post-list">
        {loading ? (
          <li className="loading-text">Loading...</li>
        ) : error ? (
          <li>Error: {error}</li>
        ) : (
          posts.map((post) => (
            <li key={post.data.id} className="post-item">
              <h3
                className="post-title"
                onClick={() => openPostInNewTab(post.data.permalink)}
                style={{ cursor: 'pointer' }}
              >
                {post.data.title}
              </h3>
              {renderMedia(post)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;