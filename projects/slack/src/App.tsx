import "./App.css";
// react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                </>
              }
            />
          </Routes>
        </>
      </Router>
    </div>
  );
};

export default App;
