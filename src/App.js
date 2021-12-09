import './assets/scss/index.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./views/Home/Home";
import {AuthProvider} from "./api/auth"

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
