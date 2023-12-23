import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
}   from 'react-router-dom';
import Blogs from './Blog/BlogPage';
import PropsAct from './ClassProject/ClassProps';
import EventAct from './ReactEvent/Activity01-Event';
import DataAct1 from './DataFlow/Activity1-usestate';
import DataAct2 from './DataFlow/Activity3-dataflow-parent';
 
 
class App extends Component {
    render(){
        const {username} = this.props;
        return (
            <Router>
                <div>
                    {/*<h1>React Router</h1>
                    <ul>
                        <li>
                            <Link to="/myblog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/myprops">Class Props</Link>
                        </li>
                        <li>
                            <Link to="/myevent">React Event</Link>
                        </li>
                    </ul>*/}
                    <h1>MainPage</h1>
                    <p>Welcome, {username}</p>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
 
         <li class="nav-item">
        <Link to="/myblog" class="nav-link">Blog</Link>
        </li>
        <li class="nav-item">
        <Link to="/myprops" class="nav-link">Class Props</Link>
        </li>
 
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMuneLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            React Event
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/myevent" class="dropdown-item">Activity 1</Link>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
          </div>
        </li>
 
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMuneLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            React Data Flow
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/dataflowact1" class="dropdown-item">Data Flow Activity 1</Link>
            <Link to="/dataflowact2" class="dropdown-item">Data Flow Activity 2</Link>
          </div>
        </li>
      </ul>
  </div>
</nav>
                    <Routes>
                        <Route
                            exact
                            path="/myblog"
                            element={<Blogs/>}
                        ></Route>
                        <Route
                            exact
                            path="/myprops"
                            element={<PropsAct/>}
                        ></Route>
                        <Route
                            exact
                            path="/myevent"
                            element={<EventAct/>}
                        ></Route>
                        <Route
                            exact
                            path="/dataflowact1"
                            element={<DataAct1/>}
                        ></Route>
                        <Route
                            exact
                            path="/dataflowact2"
                            element={<DataAct2/>}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    };
};
 
export default App;