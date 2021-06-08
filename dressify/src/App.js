
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/home/Home';
import ItemDetails from './components/itemDetails/ItemDetails'
import './components/FontAwesomeIcon'
import AllUsers from './components/allUsers';
import Protect from './components/Protect';
import ResetPassword from './components/ResetPassword'
import NewPassword from './components/NewPassword'
import {
  BrowserRouter  as Router ,
  Route,
  Switch,
} from "react-router-dom"

import Login from './pages/user/registration/Login';
import Register from './/pages/user/registration/Register';
import { isExpired, decodeToken } from "react-jwt";
import {useEffect, useState} from "react"



function App() {
const [user , setUser]=useState({})
const[isLogin,setIsLogin] =useState(false)


useEffect(()=>{
loginFunction()
Aos.init({});

},[])// its empty and will run one time


const loginFunction = ()=>{
  let token = localStorage.getItem("token")
  let decodeuser = decodeToken(token)
  if (decodeuser?.user && !isExpired(token)){
    setUser(decodeuser.user)
    setIsLogin(true)
  }else{
    setUser({})
    setIsLogin(false)
  }
}

console.log(user)

  return (
    <Router>

    <div className="App">
   <Navigation isLogin={isLogin}></Navigation>
      <div className="outer">
        <div className="inner">
          <Switch>
          <Route exact path="/login" 
    render={ () => <Login loginFunction={loginFunction}  />} />
            <Route path="/signIn" component={Register} />
            <Route exact path="/allusers" 
 render={()=> <AllUsers /> } />
 <Route path="/ResetPassword" component={ResetPassword} />

 <Route exact path="/reset/:token">
 <NewPassword/>
 
 </Route>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Allitems/:id" component={ItemDetails} />

      <Footer/>
        </div>
      </div>
    </div></Router>
  );
}



export default App;
