import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header.component";
import Home from "./pages/Home";
import Footer from "./layout/footer.component";
import TaskWizard from "./pages/TaskWizard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-wizard" element={<TaskWizard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
