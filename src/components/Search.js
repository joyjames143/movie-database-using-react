import React from "react";

function Search({handleInput,search}){
  return(
    <section className='searchbox-wrap'>
      <input 
        type= 'Text' 
        className='searchbox' 
        placeholder= "search movies here ..."
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
    
  )
}

export default Search