import {useState, useEffect} from "react";

function Validation(){
    const initialValues = {username : "", email : "", password : "" };
    const[fValues, setFValues] = useState(initialValues);
    const[fErrors,setFErrors] = useState({});
    const[isSubmit , setIsSubmit] = useState(false);

    const handleChange = (e)=>{
        const {name , value} = e.target;
        setFValues({...fValues, [name]:value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFErrors(validate(fValues));
        setIsSubmit(true);
    };

    const handleClear = ()=>{
        setFValues(initialValues);
        setIsSubmit(false);
        
    }

    useEffect(()=>{
        console.log(fErrors);
        if(Object.keys(fErrors).length === 0 && isSubmit){
          console.log(fValues);
        }
      },[fErrors]);

    const validate = (values)=>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username = "user name is required😒";
        }
        if(!values.email){
            errors.email = "emial is required😏";
        }else if(!regex.test(values.email)){
            errors.email = "enter valid emial id!😵‍💫";
        }
        if(!values.password){
            errors.password = "password is required🫣";
        }
        else if(values.password.length<4){
            errors.password = "password must be greater than 4 characters!😑"
        }
        return errors;
    };

    return(
        <div className="container-wrapper">
    {Object.keys(fErrors).length === 0 && isSubmit && (
        <div className="ui message success">Signed in Successfully😀</div>
    )}
        <div className = "container">
            <div className="div2">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <div className = "feild">
                        <label>Username :</label>
                        <input type="text"
                        name = "username"
                        placeholder="Enter username"
                        value = {fValues.username}
                        onChange  = {handleChange}
                        ></input>
                    </div>
                    <p>{fErrors.username}</p>
                    <div className = "feild">
                        <label>Email :</label>
                            <input type = "text"
                            name = "email"
                            placeholder="Enter email"
                            value = {fValues.email}
                            onChange = {handleChange}>
                            </input>
                    </div>
                    <p>{fErrors.email}</p>
                    <div className="feild">
                        <label>Password :</label>
                        <input type="password"
                        name = "password"
                        placeholder="Enter password"
                        value={fValues.password}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <p>{fErrors.password}</p>
                    <button>Submit</button>
                    <button onClick={handleClear} id="clear">Clear</button>
                </form>
            </div>
        </div>
        </div>
    );
}
export default Validation;