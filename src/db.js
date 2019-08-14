import axios from 'axios'

 const api = axios.create({
    baseURL:'process.env.REACT_APP_API_URL'
})

const apis ={
    loadGenres:()=> api.get('genre'),
    loadSeries:()=> api.get('serie')
}

export default apis  

 
  