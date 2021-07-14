import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Projets from './components/Projects';
import ContactMe from './components/ContactMe';
import Particles from 'react-particles-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

      <Router>
        
        <div className="container-flex">
          <Particles
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enabled: true,
                    value_area: 900
                  }
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 30,
                    color: "#f9ab00"
                  }
                }
              }
            }}
          />

          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
            
            <Route path="/Projects" exact>
              <Projets />
            </Route>

            <Route path="/WorkExperience" exact>
              <WorkExperience />
            </Route>
            
            <Route path="/ContactMe" exact>
              <ContactMe />
            </Route>

          </Switch>
        </div>
      
      </Router>  
  );
}

export default App;
