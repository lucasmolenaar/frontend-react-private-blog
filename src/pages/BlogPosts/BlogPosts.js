import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';
import posts from '../../data/posts.json';

const BlogPosts = () => {
    return (
        <div className="blogposts-page">
            <h2>Er zijn {posts.length} posts gevonden</h2>

            <ul className="list-items">
                {posts.map(( post ) => {
                    return <li key={post.id}><Link  className="list-item" to={`/blogposts/${post.id}`}>{`${post.id}. ${post.title}`}</Link></li>
                })}
            </ul>
        </div>
    );
};

export default BlogPosts;