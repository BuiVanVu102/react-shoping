import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
