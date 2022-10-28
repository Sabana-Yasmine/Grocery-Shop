import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home(props) {

    const navigate =useNavigate();
    
    return (
        <div>
            <h1>WELCOME !!!</h1>

           <div>
           
           <p>Are you new here?</p>
          <button className="welcome-page" type='text'  onClick={()=>{navigate("/Register")}} href="/">
          Register
        </button>

           </div>
      
            <div>
      
             <p>Already have an account?</p>
         <button className="welcome-page" type='text'  onClick={()=>{navigate("/Login")}} href="/">
         Login
         </button>
      
       </div>

        <div>
        <p>Signin as a Admin?</p>

<button className="welcome-page" type='text'  onClick={()=>{navigate("/Signin")}} href="/">
 Signin
</button>
        </div>

        </div>

     
    );
}

export default Home;