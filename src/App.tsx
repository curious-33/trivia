import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomeView = lazy(() => import("views/home"));
const QuizView = lazy(() => import("views/quiz"));
const ResultView = lazy(() => import("views/result"));

function App() {
  return (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/quizzes/:id" element={<QuizView />} />
          <Route path="/result" element={<ResultView />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
