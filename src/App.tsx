import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./layout";

const HomeView = lazy(() => import("views/home"));
const QuizView = lazy(() => import("views/quiz"));
const ResultView = lazy(() => import("views/result"));

function App() {
  return (
    <Router>
      <Layout.Error>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/quizzes" element={<HomeView />} />
            <Route path="/quizzes/:id" element={<QuizView />} />
            <Route path="/quizzes/result" element={<ResultView />} />
            <Route path="*" element={<Navigate to="/quizzes" replace />} />
          </Routes>
        </Suspense>
      </Layout.Error>
    </Router>
  );
}

export default App;
