import React, {Component } from 'react'

const statuses= {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assitir'
}

function NewSeries(){
    return (
    <section className="intro-section"> 
    <h1>Nova série</h1>
    <form>
        Nome: <input type="text" className="form-control"/>
        Comentários: <textarea type="text" className="form-control"/>
        Status: 
        <select type="text" className="form-control">
            {Object.keys(statuses).map(key => <option value={key}>{statuses[key]}</option>)}
        </select>
        Genero: <input type="text" className="form-control"/>


    </form>
    </section>)
}  
export default NewSeries