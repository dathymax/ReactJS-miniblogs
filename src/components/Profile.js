import React from 'react'
import { Link } from 'react-router-dom'
import posts from './posts'

const AuthorInfo = () => {
    return (
        <div className="profile">
            <img src="./images/profile.jpg" className="profile__img"/>
            <div className="text--333">
                Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
            </div>
            <hr className="hr__1px"/>
            <div className="text--333">
                Featured Posts:
            </div>
            <Link 
                to="/postinfo/3"
                className="text--aaa link-to-post">
                According a funnily until pre-set or arrogant well cheerful
            </Link>
            <Link 
                to="/postinfo/4"
                className="text--aaa link-to-post">
                Overlaid the jeepers uselessly much excluding
            </Link>
            <hr className="hr__2px"/>
            <div className="text--aaa">
                <a href=" #">
                    <i className="fab fa-facebook-square icon"></i>
                    </a>
                <a href=" #">
                    <i className="fab fa-instagram icon"></i>
                    </a>
                <a href=" #">
                    <i className="fab fa-twitter icon"></i>
                </a>
                <a href=" #">
                    <i className="fab fa-linkedin-in icon"></i>
                </a>
            </div>
            <div className="text--aaa">
                BUILD WITH WEBFLOW
            </div>
        </div>
    )
}

export default AuthorInfo
