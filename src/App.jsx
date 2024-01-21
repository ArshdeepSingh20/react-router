import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Github, { githubInfoLoader } from "./components/github/Github";
import User from "./components/user/User";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
              loader={githubInfoLoader}
              path="github"
              element={<Github />}
            />
            <Route path="/user/:id" element={<User />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
