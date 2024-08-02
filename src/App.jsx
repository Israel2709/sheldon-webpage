import { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import MainContext from "./Context/MainContext";
import "./App.css";

import logo from "./assets/logo.webp";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Illustration from "./Pages/Illustration";

function App() {
  const [sections, setSections] = useState(null);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const sectionsRef = database.ref("sections");

    sectionsRef.on("value", (snapshot) => {
      const sectionsData = snapshot.val();
      const links = Object.keys(sectionsData);
      setLinks(links);
      setSections(sectionsData);
    });

    return () => {
      sectionsRef.off("value");
    };
  }, []);
  return (
    <>
      <MainContext.Provider value={sections}>
        {sections && (
          <>
            <nav>
              <img src={logo} alt="" />
              <ul>
                {links.map((link) =>
                  link === "home" ? (
                    <Link to="/">{link}</Link>
                  ) : (
                    <Link to={`/${link}`}>{link}</Link>
                  )
                )}
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/illustration" element={<Illustration />} />
            </Routes>
          </>
        )}
      </MainContext.Provider>
    </>
  );
}

export default App;
