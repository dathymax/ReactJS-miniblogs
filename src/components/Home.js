import React, { useState } from 'react'
import { 
    BrowserRouter as Router,
    Link
 } from 'react-router-dom'
import posts from './posts'

const Home = () => {

    const [postsToShow, setPostsToShow] = useState(5)

    const handleMorePost = () => {
        setPostsToShow((prevValue) => prevValue + 3)
    }

    return ( posts ? 
        <div className="home">
            {posts.slice(0, postsToShow).map((post, index) =>(
                <div className="home__item" key={index}>
                    <img src={post.img} alt="home__img" className="home__img"/>
                    <div className="home__text">
                        <div className="text--heading">{post.heading}</div><div className="space__20"></div>
                        <span className="text--aaa text--time">
                            {post.date}
                        </span>
                        <span className="text--aaa">
                            {post.category}
                        </span>
                        <div className="text--aaa"> 
                            {post.details}
                            <Link 
                                to={"/postinfo/"+post.id}
                                className="home__link"
                            >Read more...
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            <button 
                onClick={handleMorePost}
                className="btn"
            >
                More posts
                <i className="fas fa-long-arrow-alt-right icon__arrow"></i>
            </button>
        </div> : <> </>
    )
}

export default Home
