import './App.css';

/*--------------- Importing Components ------------------- */
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Tagline from './components/Tagline'
import Form from './components/Form'
import WeatherForecast from './components/WeatherForecast';
import Footer from './components/Footer';
/*--------------- Importing Components ------------------- */

function App() {
  return (
    <div className="App">
      <Wrapper className="text-center">
        <Header />
        <Tagline />
        <Form />
        <WeatherForecast />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
