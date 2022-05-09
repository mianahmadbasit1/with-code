import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Name from './Name/name';
import Mycomp from './mycomp';
 function App() {
  return (
  <>
  <Mycomp/>
  <Header/>
  <Footer><Mycomp/>
  </Footer>   
  
  <Name name={2+2}/>
  </> 
  );
}

export default App;
