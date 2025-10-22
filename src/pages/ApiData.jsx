import React, { useState, useEffect } from 'react';
import { jsonPlaceholderApi } from '../api/jsonPlaceholder';
import Card, { CardBody, CardHeader } from '../components/Card';
import Button from '../components/Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await jsonPlaceholderApi.getPosts(currentPage, postsPerPage);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      // Reset to normal posts if search is empty
      const data = await jsonPlaceholderApi.getPosts(1, postsPerPage);
      setPosts(data);
      setCurrentPage(1);
      return;
    }

    try {
      setLoading(true);
      const data = await jsonPlaceholderApi.searchPosts(searchTerm);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError('Failed to search posts. Please try again later.');
      console.error('Error searching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = 10; // JSONPlaceholder has 100 posts total

  if (loading && posts.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          API Data Explorer
        </h2>
        
        {/* Search */}
        <div className="flex gap-2 w-full sm:w-auto items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button onClick={handleSearch} variant="primary">
            Search
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
                {post.title}
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {post.body}
              </p>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-mono">Post ID: {post.id}</span>
                <span className="font-mono">User ID: {post.userId}</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {!searchTerm && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts found. Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiData;