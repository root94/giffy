

import "./App.css";
import Home from "./pages/home";
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Detail from './components/Details/Detail'
import { Route } from "wouter"

function App() {

 /* return (
    <div className="App">
      <section className="App-content">
        <h2>app</h2>
        <Link to='/gif/perros'>Ver perretes</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} /> 
      </section>
    </div>
  );*/
  return (
    <div className="App">
      <section className="App-content">
      {/* <Home></Home> */}
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={ListOfGifs} /> 
      <Route path="/gif/:id" component={Detail} />  
      </section>
    </div>
  );
  
}

export default App;
