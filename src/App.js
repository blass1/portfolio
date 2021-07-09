import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
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
      <Header />
    </>
  );
}

export default App;
