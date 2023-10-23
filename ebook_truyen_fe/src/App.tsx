
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import { Page404 } from "./pages";

function App() {

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}
        <Route path="*" element={< Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
