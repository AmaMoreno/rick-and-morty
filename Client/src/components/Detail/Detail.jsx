import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY ='d06492db9bc4.175bd6e882fba2439d7f';

const Detail = ()=>{
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
    axios (`http://localhost301/rickandmorty/character/${id}`)
    .then(response=>response.data)
      .then(( data ) =>{
         if(data.name){
            setCharacter(data);
         } else{
            window.alert('¡No hay personajes con este ID!');
         }
      });
      return setCharacter({});
    },[id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.staus}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail;