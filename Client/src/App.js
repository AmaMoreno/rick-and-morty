import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY ='d06492db9bc4.175bd6e882fba2439d7f';


const email= 'ama@gmail.com';
const password = '1234asd';

function App() {


   const location = useLocation();
   const navigate = useNavigate();
   const[characters, setCharacters] = useState([]);
   const [access, setAccess ] = useState(false);

   const login =(userData)=> {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
      useEffect(() => {
         !access && navigate('/')
      }, [access])


   const onSearch =(id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response=> response.data)
      .then(( data ) =>{
         if(data.name){
            setCharacters((oldChars)=>[...oldChars, data]);
         } else{
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character=> character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
      
      {//renderizado condicional
         location.pathname !=='/'
         ? <Nav onSearch={onSearch}/>
         : null
      }
        

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element= {<Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            
        </Routes>
         
      </div>

      
   );
}

export default App;
