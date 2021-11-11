import './assets/scss/index.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useEffect} from "react";
import Home from "./views/Home/Home";
import {useCookies} from "react-cookie";

function App() {
    const [cookies, setCookie] = useCookies(["user"]);

    useEffect(() => {

    }, [])

    const cookieHandler = () => {
        setCookie("user")
    }

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
