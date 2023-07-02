import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/RouteConfig";


export const AppRouter = ({}) => {
    return (
        <Suspense fallback={`Loading...`}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    )
                })}
            </Routes>
        </Suspense>
    );
}
