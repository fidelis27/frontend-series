import React, {Component } from 'react'
import apis from '../../db'
import './NewSeries.css'
import {Redirect} from 'react-router-dom'

const statuses= {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assitir'
}


class NewSeries extends Component{
    constructor(props) {
        super(props)
        this.state = {
          isLoading: false,
          genres: [],
          series:[]
    
        }
        this.saveSeries = this.saveSeries.bind(this)
      }
      componentDidMount() {

        this.setState({ isLoading: true })
        apis.loadSeries()
          .then((res) => console.log(res.data))
        apis.loadSeries()
          .then((res) => {
            this.setState({
              isLoading: false,
              series: res.data
    
            })
          })
        apis.loadGenres()
          .then((res) => {
            this.setState({
              isLoading: false,
              genres: res.data,
              redirect:false
    
            })
          })
        console.log(this.genres)
      }
      saveSeries(){
          const newSeries={
          name: this.refs.name.value,
          status: this.refs.status.value,
          genre:this.refs.genre.value,
          comments:this.refs.comments.value
        }
        
        /* this.state.series.map(x => {
            if(x.name === this.refs.name.value){
            alert("serie já cadastrada!!!")

            }else{ */
                 apis.StoreSeries(newSeries)
                 .then((res)=>{
                     this.setState({
                         redirect:'/series/'+this.refs.genre.value
                     })
                 })
                
                /*  } 
           })  */
        
      }
    render(){
    return (
       
    <section className="intro-section"> 
     {this.state.redirect &&
        <Redirect to={this.state.redirect}/>
     }
      <h1>Nova série</h1>
       <form key="form" >
        Nome: <input type="text" ref="name" className="form-control"/><br/>
        Status: 
        <select type="text" ref="status" className="form-control">
            {Object
                .keys(statuses)
                .map(status => <option key={status} value={status}>{statuses[status]}</option>)}
        </select><br/>
        Gênero:
        <select type="text" ref="genre" className="form-control">
            {this.state.genres
                .map(genre => <option key={genre.name} value={genre.name}>{genre.name}</option>)}
        </select><br/>
        Comentários: <textarea ref="comments" type="text" className="form-control"/>
        <button  className="btn btn-success" key="button" type="button" onClick={this.saveSeries}>Salvar</button><br/>
       </form>
    </section>
    )}  
}  
export default NewSeries


//rua professor osvaldo martins cruz 276