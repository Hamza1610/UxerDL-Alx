
import './Home.css';
import me from './me.png';
import {Link} from 'react-router-dom';

import searchIcon from './icons/search2.avif';
import downloadIcon from './icons/download1.avif';
import uploadIcon from './icons/upload5.avif';

const Home = () => {
    return (
        <div className="Home-div">
            <div className="home-header">
                <h1>Welcome to UxerDL</h1>
                <p>A place to explore</p>
            </div>
            <div className="home-content">
                
                <div className="about-div">
                    <h2>Introducing UxerDL: Your Ultimate Digital Book Library</h2>
                    <div className="about-home">
                        <p>
                            UxerDL is a revolutionary digital website that brings the world 
                            of books right at your fingertips. With its user-friendly interface 
                            and innovative features, UxerDL offers a seamless experience for 
                            book lovers to explore, download, upload, and search books across 
                            various categories.
                            <ul>
                                <li>
                                Extensive Book Collection: UxerDL boasts a vast collection of 
                                books, covering a wide range of genres and categories. From classic 
                                literature to contemporary novels, educational textbooks to self-help 
                                guides, there is something for every reader's taste.
                                </li>

                                <li>
                                    Easy Download and Upload: With UxerDL, users can effortlessly download 
                                    their favorite books to enjoy offline. Moreover, UxerDL encourages book 
                                    enthusiasts to contribute to the community by allowing them to upload their 
                                    own books, creating a collaborative environment for sharing knowledge and 
                                    literary works.
                                </li>

                            </ul>
                        </p>
                    </div>
                </div>
                
                <div className="features-div">
                    <h2>Library Features</h2>
                    <div className="features-home">
                        <div className="feature">
                            <img className="feature-image" src={searchIcon} alt="Search Books"/>
                            <p>Search books</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                        <div className="feature">
                            <img className="feature-image" src={downloadIcon} alt="Download Books"/>
                            <p>Download books</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                        <div className="feature">
                            <img className="feature-image" src={uploadIcon} alt="Upload Books"/>
                            <p>Upload books</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                    </div>
                </div>

                <div className="developer-div">
                    <h2>Developer</h2>
                    <div className="developer-home">
                        <div className="developer-content">
                            <img className="developer-image" src={me} alt="Developer"/>
                            <div className="developer-intro">
                                <div>
                                    <p>
                                        Hello, I'm Muhammad Hamza, a highly skilled software engineer 
                                        with a strong track record in developing robust and efficient 
                                        software solutions. With extensive experience in various programming 
                                        languages such as HTML, CSS, Python, JavaScript, MySQL, and C, 
                                        I possess a diverse skill set that enables me to tackle a wide range 
                                        of projects.
                                    </p>

                                    <p>
                                        I am particularly proficient in backend programming, leveraging 
                                        frameworks such as Node.js, Express, and MongoDB to build scalable 
                                        and performant web applications. Additionally, I have a deep understanding 
                                        of frontend technologies like React, jQuery, and Bootstrap, allowing me to 
                                        create engaging user interfaces and seamless user experiences.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="employ-me">
                    <h2>Employ me</h2>
                    <p>
                        I am a meticulous problem-solver delivering clean, maintainable 
                        code. With deep software engineering understanding and strong 
                        analytical skills, I provide top-notch solutions, continuously 
                        learning and adapting to industry trends. I am confident in 
                        making valuable contributions to any project.
                    </p>
                    <p>
                        Let's connect and discuss how I can help drive your software 
                        development initiatives forward.
                    </p>
                    <div className="message-platform">
                        <Link className ="explore-button" to="muhammadhamza162003@gmail.com">Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default  Home;
