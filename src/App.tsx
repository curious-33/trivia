import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomeView = lazy(() => import("views/home"));

function App() {
  return (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
          <Route index element={<HomeView />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
