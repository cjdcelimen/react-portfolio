import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Preload from "./components/Preload";

function App() {

  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadPage(true)
    }, 3000)
  }, [setLoadPage])

  return (
    <>
    { loadPage ? (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/signin" component={Signin} exact /> */}
      </Switch>
    </Router>
    ) : <Preload />}
    </>
  );
}

export default App;