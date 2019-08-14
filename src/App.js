import React, {Component} from 'react'
import apis from './db' 

/* function App(){
  return (<div>

  </div>)
}  novo forma de criar componente*/ 

class App extends Component{
constructor(props){
  super(props)
  this.state = {
    isLoading:false,
   
  }
 }
 
 componentDidMount(){
   
   this.setState({isLoading:true})
   apis.loadSeries()
   .then((res)=>console.log(res.data))
   apis.loadGenres()
   .then((res)=>console.log(res.data))
   
  }
 
  render(){
  return (
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
          <li>
            <a href="http://localhost:3000">Menu item </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>


  <section id="intro" className="intro-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1><img src="images/logo.png"  alt=""/></h1>
          <p>{this.state.serieById}Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    {this.state.isLoading && <span>aguarde, carregando.....</span>}
    {!this.state.isLoading && <div>
      Ver séries do genêro:{JSON.stringify(this.state.genres)}
    </div>}
    
  </section>
  </div>
  )}
}

export default App;
