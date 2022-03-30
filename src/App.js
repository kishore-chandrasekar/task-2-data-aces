import logo from './logo.svg';
import './App.css';
import image from "./images/leftlogo.svg"

function App() {
  return (
    <div className="app">
      
        <div className='app__left'>
          <img src={image} />
        </div>
        <div className='app__right'>
          <div className='app__rightform'>
            <h3>Log In</h3>
            <label name="Email">Email</label><br />
            <input className='input' type="text"></input><br /><br/>
            <label name="Password">Password</label><br/>
            <input  className='input' type="Password" ></input><i style={{marginLeft:"-45px"}}  class="fa fa-eye" ></i><br />
            <a href='' style={{marginLeft:"45%"}}>Forgot Password</a><br />
            <input  type="checkbox" id="Checkbox" />
            <label for="Checkbox">Remember me</label>
            <br />
          </div>
          <div className='app__rightlogin' >
            <input type="button" value="Login" class="btn btn-success" />
            <p>New User?<a href=''>Sign Up</a></p>
          </div>
          <div class="divider"><span></span><span>Or Login With</span><span></span></div>
          <div className='app__socialmedia'>
            <span> <i class="fab fa-facebook-square fa-5x"></i></span>
            <span> <i class="fab fa-github fa-5x"></i></span>
            <span> <i class="fab fa-google-plus fa-5x"></i></span>
          </div>

        </div>
      </div>
    
  );
}

export default App;
