import './assets/scss/index.scss';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {useEffect} from "react";
import Home from "./Views/Home/Home";

function App() {

    useEffect(() => {

    }, [])

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
