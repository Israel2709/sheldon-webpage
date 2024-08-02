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
            <nav className="flex justify-between p-4 items-center border-b border-gray-400 shadow">
              <img src={logo} alt="" className="w-16 rounded-lg" />
              <ul className="flex capitalize">
                {links.map((link) =>
                  link === "home" ? (
                    <Link
                      to="/"
                      className="px-2 py-4 hover:underline hover:bg-gray-100"
                    >
                      {link}
                    </Link>
                  ) : (
                    <Link
                      to={`/${link}`}
                      className="px-2 py-4 hover:underline hover:bg-gray-100"
                    >
                      {link}
                    </Link>
                  )
                )}
              </ul>
            </nav>
            <div className="container mx-auto py-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/illustration" element={<Illustration />} />
              </Routes>
            </div>
          </>
        )}
      </MainContext.Provider>
    </>
  );
}

export default App;
