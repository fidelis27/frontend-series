
import React, { Component } from 'react'
import apis from '../../db'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoading: false,
          genres: []
    
        }
      }
      componentDidMount() {

        this.setState({ isLoading: true })
        apis.loadSeries()
          .then((res) => console.log(res.data))
        apis.loadGenres()
          .then((res) => {
            this.setState({
              isLoading: false,
              genres: res.data
    
            })
          })
        console.log(this.genres)
      }
    
    
      renderGenreLink(genre) {
        return (
          <span>&nbsp;<a href="">{genre.name}</a>&nbsp;</span>
        )
    
      }
    render(){
        return(<div>
            <section id="intro" className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1><img src="images/logo.png" alt="" /></h1>
                            <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {this.state.isLoading && <span>aguarde, carregando.....</span>}
                {!this.state.isLoading &&
                    <div>
                        Ver séries do genêro:{this.state.genres.map(this.renderGenreLink)}
                    </div>}
        
            </section>
        </div>)
    }
    

}
export default Home


