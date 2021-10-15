import Profile from './Profile'
import Posts from "./Home";
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Contact from './Contact';
import PostInfo from './PostInfo';

const Container = () => {
    return (
        <div className="container">
            <div className="content">
                <Profile></Profile>
                    
                <div>
                    <Switch>
                        <Route  exact path="/">
                            <Posts/>
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/postinfo/:id">
                            <PostInfo />
                        </Route>
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default Container
