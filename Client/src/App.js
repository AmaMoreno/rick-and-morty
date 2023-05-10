import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { removeComponentFavorites } from './redux/actions';


function App() {
   let [ characters, setCharacters ] = useState([]);
   const dispatch = useDispatch()
   const [ access, setAccess ] = useState(false);
   //const EMAIL= 'ama@gmail.com';
   //const PASSWORD = '1234asd';

   const { pathname } = useLocation();
   const navigate = useNavigate();

   async function onSearch (id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(( {data} ) =>{
         
         const char = characters?.find(e => e.id === Number(data.id))
         
         if(char){
           alert("Already in the list")
         } 
         else if(data.id !== undefined){
            setCharacters(characters=>[...characters, data])
         }
         else{
            alert('Character not found')
         }
      })
   }  

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(()=> {
      !access && navigate('/')
    }, [access])
   

   const onClose = (id) =>{
      setCharacters(
         characters.filter((character)=>character.id !== Number(id))
         )
         //Despachamos la action 
  dispatch(removeComponentFavorites(id))
   
   }

   return (
      <div className='container'>
      
      { pathname !=='/' &&
          <Nav 
          onSearch={onSearch}
          setAccess={setAccess}
          />}
        

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element= {
            <Cards 
            characters={characters} 
            onClose={onClose}/> }/>

            <Route path="/about" element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>} />

            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         
            
        </Routes>
         
      </div>
   )
}
   

export default App;
