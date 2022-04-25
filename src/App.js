import Home from './components/Home'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Login from "./components/Login_SignUp/Login";
import SignUp from "./components/Login_SignUp/SignUp";
import LogOut from "./components/LogOut";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={"/"} element={<Home/>} />
                <Route exact path={"/Home"} element={<Home/>} />
                <Route exact path={"/Login"} element={<Login/>} />
                <Route exact path={"/SignUp"} element={<SignUp/>} />
                <Route exact path={"/LogOut"} element={<LogOut/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;