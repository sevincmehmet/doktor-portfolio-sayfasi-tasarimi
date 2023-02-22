
import React, { Fragment, useState } from "react";
import Main from "./component/Main";



import AllQuestions from "./component/AllQuestions";
import { Routes, Route, Link, NavLink } from "react-router-dom"

import "./App.css";

const App = () => {
  const [scroolActive, setScroolActive] = useState(false);



  return (<>

    <div style={{ position: 'relative' }}>

      <div className="App">

        <Routes>
          <Route exact path="/" element={
            <Main scroolActive={scroolActive} setScroolActive={setScroolActive} />
          }>
          </Route>
          <Route path="/allQuestions" element={
            <AllQuestions scroolActive={scroolActive} setScroolActive={setScroolActive} />
          } />

        </Routes>

      </div>

    </div>


  </>)
}

export default App;