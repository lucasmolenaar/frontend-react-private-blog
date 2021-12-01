import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';
import posts from '../../data/posts.json';

const BlogPosts = () => {

    console.log(posts);

    return (
        <div className="blogposts-page">
            <h2>Er zijn {posts.length} posts gevonden</h2>

            <ul className="list-items">
                {posts.map(( post ) => {
                    return <li className="list-item" key={post.id}><Link to={`/blogposts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    );
};

export default BlogPosts;