

import "./App.css";
import Home from "./pages/home";
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Detail from './components/Details/Detail'
import { Route } from "wouter"
import ResultadoSearch from "./components/ResultadoSearch";
import {GifsContextProvider} from "./context/GifsContext"

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
      <GifsContextProvider> 
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={ResultadoSearch} /> 
      <Route path="/gif/:id" component={Detail} />  
    </GifsContextProvider>
      </section>
    </div>
  );
  
}

export default App;
