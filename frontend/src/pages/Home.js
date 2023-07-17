import React from "react";
import './Home.css';
const Home = () => {
  const externalImage='./background.jpg';
  return (
    <div style={{height: '100vh'}}>
        <div className="first" >
              <ul class="nav nav-pills">
              <li class="nav-item pills_mar">
                <a class="nav-link btn btn-secondary btn-lg active " aria-current="page" href="#">LOGIN</a>
              </li>
              <li class="nav-item pills_mar">
                <a class="nav-link btn btn-secondary btn-lg active " href="#">REGISTER</a>
              </li>
            </ul>
            <form>
            <div class="form-group enter">
              <label for="exampleInputEmail1" >Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group enter">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div class="form-check enter">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        
        {/* <div className="second" ></div> */}
    </div>
  );
};

export default Home;
