import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import posts from './posts'

const PostInfo = () => {
    
    const {id} = useParams();
    console.log(posts);
    const result = posts.find(post => post.id == id);
    console.log(result);
    return ( 
        <div className="post">
            <div className="post-info">
                <img src={result.img} alt="home__img" className="img--big"/>
                <div className="post-info__content">
                    <div className="home__text">
                        <div className="text--heading">{result.heading}</div>
                        <div className="space__20"></div>
                        <span className="text--aaa text--time">
                            {result.date}
                        </span>
                        <span className="text--aaa">
                            {result.category}
                        </span>
                        <div className="text--aaa"> 
                            {result.details}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space__30"></div>
            <Link
                to="/"
                className="btn"
            >
                <i className="fas fa-long-arrow-alt-left icon__arrow"></i>
                All post
            </Link>
        </div>
    )
}

export default PostInfo
