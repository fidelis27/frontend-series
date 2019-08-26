import React, {Component} from 'react'
import apis from '../../db'
import {Link} from 'react-router-dom'

const statuses= {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assitir'
}

class Series extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading:false,
            series:[]
        }
        this.renderSeries = this.renderSeries.bind(this)
        this.deleteSeries= this.deleteSeries.bind(this)
    }
    componentDidMount(){
        this.setState({isLoading:true})
      
       apis.loadSeriesByGenre(this.props.match.params.genre)
       .then((res)=>{
           this.setState({
               isLoading:false,
               series:res.data
           })
           
          
       })
    }
    deleteSeries(id){
        console.log("id da serie",id)
        apis.deleteSeries(id)
        .then((res)=>console.log("serie excluida com sucesso!!!"))

    }
    renderSeries(series){
        return(<div key={series._id}>
            <div className="item  col-xs-4 col-lg-4">
              <div className="thumbnail">
                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                <div className="caption">
                  <h4 className="group inner list-group-item-heading">
                     {series.name}</h4>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">
                       {series.genre}/{statuses[series.status]}</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <Link  className="btn btn-success" to={'/series/edit/'+series._id}>Editar</Link>
                      <a className="btn btn-danger" onClick={()=>this.deleteSeries(series._id)} href="">Excluir</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        </div>)
    }
    render(){
        return (
        <section id="intro" className="intro-section">
            <h1> 
                Série {this.props.match.params.genre}
            </h1>
           {this.state.isLoading && <p>Carregando, aguarde....</p> }
           {!this.state.isLoading && this.state.series.length === 0 &&
            <div className='alert alert-info'>Nenhuma série Cadastrada</div>
            }
        <div id="series" className="row list-group">
            {!this.state.isLoading &&
              this.state.series.map(this.renderSeries)
              }
        </div>
        </section>
        )}
}
export default Series