import {useState} from "react";
import validation from "./Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({

    })

    const [userData, setUserData]= useState({
        email: '',
        password: ''
    })

    const handleChange= ( event ) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }


return(
    <Form onSubmit={handleSubmit}>

        <label htmlForm="email" >Email: </label>
         <input type="text" name='email' value={userData.email} onchange={handleChange}/>
           {errors.email && <p style={{color: "grey"}} >{errors.email}</p>} 

        <label htmlForm="password">Password: </label>
        <input type="text" name="password" value={userData.password} onChange={handleChange
         }/>
         {errors.password && <p style={{color:"grey"}}>{errors.password}</p>}

        <button>Submit</button>

    </Form>
    )
    }
export default Form;