import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "./components/Context/ThemeContext";
import NavBar from "./components/NavBar";

import Details from "./components/Details";
import SearchParams from "./components/SearchParams";

// const Details = lazy(() => import("./components/Details"));
// const SearchParams = lazy(() => import("./components/SearchParams"));

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      {/* <Suspense fallback={<h1>Loading route...</h1>}> */}
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
      {/* </Suspense> */}
    </ThemeProvider>
  );
};

export default App;
