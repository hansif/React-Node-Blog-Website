import React from 'react'
import './About.css'


export default function About() {
    return (
        <>
            <h2 className="about-title">About Us</h2>
            <div id="about">

                <div className="about-data">
                    <div className="about-img">
                        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.webp" alt="" />
                    </div>
                    <div>
                        <h2 className="about-subtitle">Blog Website</h2>
                        <p className="about-text">
                            At its most basic, blogs can help you develop an online presence, prove yourself an expert in an industry, and attract more quality leads to all pages of your site. If you're contemplating creating a blog for your business, or simply want to know what one is, keep reading.
                        </p>
                        <p className="about-text">
                           Our website Provide you the platform to express your ideas, feelings , experiences through your Blog.  </p>
                        
                        <p><b>Languages and tools known:</b> </p>
                        <p>
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt='react' />

                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt='javascript' />
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt='html' />
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt='css' />

                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" />
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git" />
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" alt="mongo" />
                            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="node.js" />

                        </p>
                    </div>
                </div>
                <div className="contact">
                    <h1 className='contactheading'> Contact Us</h1>
                    <p className='contactpara'><h3 className='contactinfo'>Email</h3><h3> : xxxxxx@gmail.com</h3></p>
                    <p className='contactpara'><h3 className='contactinfo'>Phone Number</h3><h3>  : +91 XXXXX XXXXX</h3></p>
                </div>
            </div>
        </>
    )
}