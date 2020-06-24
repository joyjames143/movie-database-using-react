import React,{useState} from "react";
import "./styles.css";
import Search from "./components/Search"
import axios from 'axios'
import Results from './components/Results'
import Popup from "./components/Popup"

export default function App() {
const [state,setState] = useState({
  s:"",
  results:[],
  selected:{}
})

  const apiurl ='https://www.omdbapi.com/?i=tt3896198&apikey=c55cd48c';

  const search = (e) =>{
    if(e.key === 'Enter'){
      axios(apiurl+'&s='+state.s).then(({data}) => {
        let results = data.Search

        setState(prevState =>{
          return{...prevState,results: results}
        })
      })
    }
  }


  const handleInput = (event)=>{
    let s = event.target.value

      setState(prevState =>{
        return{...prevState, s: s}
    })
  }

  const openPopup = title =>{
    axios(apiurl+'&t='+title).then(({data})=>{
      let result=data
      setState(prevState =>{
        return{...prevState,selected:result}
      })
    })
  }

  const closePopup = () =>{
    setState(prevState =>{
      return{...prevState,selected:{}}
    })
  }

  return (
    <div className="App">
      <header >
        <h1> movie db </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title !== 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}/> :false}
      </main>
    </div>
  );
}
