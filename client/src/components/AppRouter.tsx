import { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GraphQL from "../pages/GraphQL/GraphQL.tsx";
import RESTCon from "../pages/REST/REST.tsx";

const AppRouter = () => {

  const routes: {path: string, element: ReactNode}[] = [
    {
      path: "/", 
      element: <>Check other pages</>
    },
    {
      path: "/graphql", 
      element: <RESTCon />
    },
    {
      path: "/rest", 
      element: <GraphQL />
    },

  ]

  return (
    <Router>
        <Routes>
         {routes.map((route) => {
          return <Route path={route.path} element={route.element} />
         })}
        </Routes>
    </Router>
  );
}


export default AppRouter