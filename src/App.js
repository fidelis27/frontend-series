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
import EditSeries from './templates/components/EditSeries'

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
                  <img src="/images/logo.png" height="30" alt="" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" ></a>
                      
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
          <Route exact path='/series/:genre' component={Series} />
          <Route exact path='/series/edit/:id' component={EditSeries} />
          <Route exact path='/about' component={About} />
          <Route exact path='/new' component={NewSeries} />

        </div>

      </Router>
    )
  }
}

export default App;
 