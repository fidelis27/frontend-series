import axios from 'axios'

 const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const apis ={
    loadGenres:()=> api.get('genre'),
    StoreSeries:(serie)=> api.post('serie',serie),
    UpdateStories:(serie)=>api.put('serie',serie),
    loadSeries:()=> api.get('serie'),
    loadSeriesByGenre:(genre)=> api.get('serie/'+genre)
    
    
}

export default apis  

 
  /* ola */