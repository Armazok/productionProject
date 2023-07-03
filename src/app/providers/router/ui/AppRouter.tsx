import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/RouteConfig";


export const AppRouter = ({}) => {
    return (
        <Suspense fallback="Loading...">
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
}
