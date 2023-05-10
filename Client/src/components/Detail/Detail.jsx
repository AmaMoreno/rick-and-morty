/*import axios from "axios";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY ='d06492db9bc4.175bd6e882fba2439d7f';

const Detail = ()=>{
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
    axios(`http://localhost301/rickandmorty/character/${id}`)
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

export default Detail;*/
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const Detail = () => {
    const [character, setCharacter] = useState({})
    // console.log('soy el character detail', character);
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <>
        <h1>Detail</h1>
        {
            character ? (
                <div>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Species: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            )
             :  (
                ""
             )
        }
        </>
    )
}

export default Detail;