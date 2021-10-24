import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound'
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
