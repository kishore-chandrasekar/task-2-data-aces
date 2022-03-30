import logo from './logo.svg';
import './App.css';
import image from "./images/leftlogo.svg"
import { useState, useEffect } from 'react';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='app'>
      

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className='app__left'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div style={{color:"whitesmoke"}}>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
        <img src={image} />
        
      </div>
      <form className='app__right'onSubmit={handleSubmit} >
        <div >
          <div className='app__rightform'>
            <h3>Log In</h3>
            <label name="Email">Email</label><br />
            <input className='input' type="text" name="email"
              value={formValues.email}
              onChange={handleChange}></input><br /><p>{formErrors.email}</p><br />
            <label name="Password">Password</label><br />
            <input className='input' type="Password" value={formValues.password}
              onChange={handleChange} name="password"></input><i style={{ marginLeft: "-50px" }} class="fa fa-eye" ></i><br />
            <p>{formErrors.password}</p>
            <a style={{ marginLeft: "45%", color: "blue"}} onClick={() => {
              setModalOpen(true);
            }} className="anchor">Forgot Password</a><br />
            <input type="checkbox" id="Checkbox" />
            <label for="Checkbox">Remember me</label>
            <br />

          </div>
          <div className='app__rightlogin' >
            <button className='btn btn-success' >Login</button>
            <p>New User?<a href=''>Sign Up</a></p>
          </div>
          <div class="divider"><span></span><span>Or Login With</span><span></span></div>
          <div className='app__socialmedia'>
            <a href='' style={{color:"black"}}><span> <i class="fab fa-facebook-square fa-5x"></i></span></a>
            <a href='' style={{color:"black"}}><span> <i class="fab fa-github fa-5x"></i></span></a>
            <a href='' style={{color:"black"}}><span> <i class="fab fa-google-plus fa-5x"></i></span></a>
          </div>


        </div>
      </form>



    </div>

  );
}

export default App;


