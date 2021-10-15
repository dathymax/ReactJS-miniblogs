import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <div className="text--heading-big">
                About me
            </div>
            <div className="text--333">
                The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
            </div>
            <div className="space__20"></div>
            <div className="text--heading">
                Something else here
            </div>
            <div className="text--333">
                Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrun faucibus dolor auctor. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum id ligula porta felis euismod semper.
            </div>
            <div className="text--333">
                Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla.
            </div>
            <div className="space__30"></div>
            <Link 
                to = "/contact"
                className="btn"
            > Get in touch
            </Link>
            <div className="space__20"></div>
        </div>
    )
}

export default About
