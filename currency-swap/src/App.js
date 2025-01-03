import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrencySwapForm from "./problem2/script"; // Đảm bảo import đúng

const App = () => {
  return (
    <Router>
      <div>
        <a
          href="http://127.0.0.1:5500/currency-swap/src/problem1/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Problem 1
        </a>
        <br />
        <a
          href="http://localhost:3000/problem2" // Đường dẫn dẫn tới biểu mẫu Currency Swap
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Problem 2 (Currency Swap)
        </a>

        <Routes>
          <Route path="/problem2" element={<CurrencySwapForm />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
