
import React, { Fragment, useEffect, useState } from "react";
import Main from "./component/Main";
import AllQuestions from "./component/AllQuestions";
import AllVideos from "./component/AllVideos"
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom"
import WOW from 'wowjs'

import "./App.css";

const App = () => {
  const [scroolActive, setScroolActive] = useState(false);

  useEffect(() => {
    new WOW.WOW({
        live: false
    }).init();
}, [])

  return (<>

    <div style={{ position: 'relative' }}>

      <div className="App">

        <Routes>
          <Route exact path="/" element={
            <Main scroolActive={scroolActive} setScroolActive={setScroolActive} />
          }>
          </Route>

          <Route exact path="/allQuestions" element={
            <AllQuestions scroolActive={scroolActive} setScroolActive={setScroolActive} />
          } />
          <Route path="*" element={<Navigate to={"/"} />} />

          <Route exact path="/allVideos" element={
            <AllVideos scroolActive={scroolActive} setScroolActive={setScroolActive}/>
          } />
        </Routes>

      </div>

    </div>


  </>)
}

export default App;