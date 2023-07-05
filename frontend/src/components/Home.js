import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="Home-div">
            <div className="home-header">
                <h1>Welcome to UxerDL</h1>
                <p>A place to explore</p>
            </div>
            <div className="home-content">
                
                <div className="about-div">
                    <h2>About</h2>
                    <div className="about-home">
                        <p>Lorem...</p>
                    </div>
                </div>
                
                <div className="Features-div">
                    <h2>Library Features</h2>
                    <div className="features-home">
                        <div className="feature">
                            <img alt="Search Books"/>
                            <p>Lorem...</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                        <div className="feature">
                            <img alt="Download Books"/>
                            <p>Lorem...</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                        <div className="feature">
                            <img alt="Upload Books"/>
                            <p>Lorem...</p>
                            <Link className="explore-button">Explore</Link>
                        </div>
                    </div>
                </div>

                <div className="developer-div">
                    <h2>Developer</h2>
                    <div className="developer-home">
                        <div className="developer-content">
                            <img className="developer-image" alt="Developer"/>
                            <div className="developer-intro">
                                <p>Lorem...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="employ-me">
                    <h1>Employ me</h1>
                    <p>Lorem....</p>
                    <div className="message-platform">
                        <Link className ="explore-button" to="muhammadhamza162003@gmail.com">Email Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default  Home;
