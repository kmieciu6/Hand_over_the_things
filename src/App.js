import Home from './components/Home'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Login from "./components/Login_SignUp/Login";
import SignUp from "./components/Login_SignUp/SignUp";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={"/Home"} element={<Home/>} />
                <Route exact path={"/Login"} element={<Login/>} />
                <Route exact path={"/SignUp"} element={<SignUp/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;