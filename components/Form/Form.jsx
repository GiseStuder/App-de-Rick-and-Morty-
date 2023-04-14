import { useState } from "react";
import validation from "../Validation/Validation";
import style from "../Form/Form.module.css"


const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.container}>
       
        <form onSubmit={handleSubmit}>
            <label className={style.label} htmlFor="email" style={{ color: "white"}}>Email: </label>
            <input className={style.input} type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            <hr />
            <label className={style.label} htmlFor="password" style={{ color: "white"}}>Password: </label>
            <input className={style.input} type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
<hr />
            <button className={style.btn}>Submit</button>
        </form>
        </div>
    )
}

export default Form;