import { useState,useEffect } from "react";
import Character from "./Character";

function CharacterList() {
    let page = 1;
    const [characters, setcharacters] = useState([]);

    useEffect(()=>{
        async function fetchData(){
          const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
          const data = await respuesta.json();
          setcharacters(data.results);
        }
    
        fetchData();

        document.querySelector(".btn-next").addEventListener("click",()=>{
          if(page<100){
            page += 1
            fetchData();
          }
        })

        document.querySelector(".btn-prev").addEventListener("click",()=>{
          if(page>1){
            page -= 1
            fetchData();
          }
        })
      },[])
  
    return (
    <div className="container">
      
        {
        characters.map((character)=>{
          return (
            <Character key ={character.id} character={character}/>
          )
        })
      }
    </div>
  )
}

export default CharacterList