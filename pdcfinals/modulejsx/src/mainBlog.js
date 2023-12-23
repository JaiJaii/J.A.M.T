import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import logo from './logo.png';
import Blog from "./Blog/BlogPage";
import LoginForm from "./Login";
import Contact from "./Contact";
import About from "./About";

class App extends Component {
  render() {
    const { username } = this.props;
    return (
      <Router>
        <div>
          <header>
            <img src={logo} alt="Logo" />
            <h1>Blog Website</h1>
            <p>Welcome, {username}</p>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main>
            {/* Use React Router to navigate between different sections */}
            <Routes>
              <Route exact path="/" element={<LoginForm />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;