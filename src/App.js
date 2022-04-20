import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import {CreateClient} from './pages/CreateClient'
import {ClientsList} from './pages/ClientList';
import { Visit } from "./pages/Visit";
import Header from "./pages/Header";
import { Questions } from "./pages/Question";
import {ShowUserVisits} from "./pages/showUserVisits";
function App() {
  return (
    <div className="App">
     <Header />
        <Switch>
          <Route path="/add-client"><CreateClient /></Route>
          <Route path="/clients"><ClientsList /></Route>
          <Route path="/questions"><Questions/></Route>
          <Route path="/visit/:id"><Visit/></Route>
          <Route path="/showvisits/:id"><ShowUserVisits/></Route>
          <Route ></Route>
        </Switch>
      
      
    </div>
  );
}

export default App;
