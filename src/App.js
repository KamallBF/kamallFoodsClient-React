import './assets/scss/index.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./Views/Login/Login";
import {useEffect} from "react";
import Home from "./Views/Home/Home";

function App() {

    useEffect(() => {

    }, [])

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route>
                    <Route path="/login">
                        {
                            <Login />
                        }
                    </Route>
                    <Route path="/" exact component={Home}>
                        {
                            <Home />
                        }
                    </Route>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
