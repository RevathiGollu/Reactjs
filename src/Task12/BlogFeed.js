import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: page, _limit: 10 }, // Pagination parameters
      });

      const data = response.data;

    
      if (data.length < 10) {
        setHasMore(false); 
      }

      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      setError('Error fetching posts.');
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  
  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ height: '80vh', overflowY: 'auto' }}
    >
      <h1>Blog Feed</h1>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {loading && <div>Loading...</div>}

      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {loading && <div>Loading more posts...</div>}
      {!hasMore && <div>No more posts available.</div>}
    </div>
  );
};

export default BlogFeed;
