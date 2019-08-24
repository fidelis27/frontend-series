import React, { Component } from 'react'
/* import boostrap from 'bo' */



/* function App(){
  return (<div>

  </div>)
}  novo forma de criar componente*/

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom'
import Home from './templates/components/Home'
import NewSeries from './templates/components/NewSeries'
import Series from './templates/components/Series'

//function stateless component
const About = () => <section className="intro-section"> <h1>Sobre</h1></section>
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                  <img src="images/logo.png" height="30" alt="" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/new">Nova Série</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/series/:genre' component={Series} />
          <Route path='/about' component={About} />
          <Route path='/new' component={NewSeries} />

        </div>

      </Router>
    )
  }
}

export default App;
 