import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
