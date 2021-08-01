import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
import Main from "./Pages/Main/Main";
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const storage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(storage.getItem("user"))
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         {currentUser ? <Redirect to="/home" /> : <RegisterLogin storage = {storage} setCurrentUser={setCurrentUser}/>}
       </Route>
       <Route exact path="/home">
         {currentUser ? <Main currentUser= {currentUser} storage={storage} setCurrentUser={setCurrentUser}/> : <Redirect to="/" />}
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
