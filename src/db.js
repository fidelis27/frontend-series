import axios from 'axios'

 const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const apis ={
    loadGenres:()=> api.get('genre'),
    StoreSeries:(serie)=> api.post('serie',serie),
    UpdateSeries:(serie)=>api.put('serie/'+serie.id,serie),
    loadSeries:()=> api.get('serie'),
    loadSeriesByGenre:(genre)=> api.get('serie/'+genre),
    deleteSeries: (serieId) => api.delete('serie/'+serieId),
    loadSeriesById:(id)=> api.get('serie/edit/'+id),
    Series: (serieId) => api.delete('serie/'+serieId),

       
}

export default apis  

 
  /* ola */
