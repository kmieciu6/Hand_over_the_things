import Home from './components/Home'
import {HashRouter, Route, Routes} from 'react-router-dom'
const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={"/"} element={<Home/>} />
                <Route exact path={"/login"} element={<Home/>} />
                <Route exact path={"/signup"} element={<Home/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;