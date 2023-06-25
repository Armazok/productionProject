import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная станица</Link>
            <Link to={'/about'}>Не главная страница</Link>
            <Suspense fallback={`Loading...`}>
                <Routes>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/' element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
}
export default App