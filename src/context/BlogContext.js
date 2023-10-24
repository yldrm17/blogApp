import React, { useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPost, setblogPost] = useState([]);

  const addBlogPost = () => {
    setblogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost: addBlogPost  }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext; 