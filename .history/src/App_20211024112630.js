import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header form 'components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch/>
          {/* <Route path="/products" exact component={ ProductFeature }></Route> */}
          {/* <Route path="/" component={ CounterFeature } ></Route> */}
          {/* <Route path="/todos" component={ TodoFeature }></Route> */}
          {/* <Route path="/albums" component={ AlbumFeature }></Route> */}
          

          <Route component={ NotFound }></Route>
      
    </BrowserRouter>
  );
}

export default App;
