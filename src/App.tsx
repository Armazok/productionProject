import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная станица</Link>
            <Link to={'/about'}>Не главная страница</Link>
            <Suspense fallback={`Loading...`}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}/>
                    <Route path='/' element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
}
export default App