import React from 'react';
import { useParams } from "react-router-dom";
import posts from '../../data/posts.json';
import './BlogPost.css';

const BlogPost = () => {
    const { blogId } = useParams();

    return (
        <div className="blogpost-page">
            <h2>Blog {blogId}</h2>
            <h1 className="title">{posts[blogId].title}</h1>
            <p>{posts[blogId].content}</p>
        </div>
    );
};

export default BlogPost;