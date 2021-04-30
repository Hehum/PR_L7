import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Home from "./components/home";
import NavBar from "./components/common/navbar";

function App() {
 return (
     <div className="container-fluid">
            <NavBar />
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                        component={Posts} />}
                        />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
          </div>

 );
}

export default App;

