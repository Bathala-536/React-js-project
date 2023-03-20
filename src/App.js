import LinearStepper from "./LinearStepper";
import React, { useState } from "react";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PersistentDrawerLeft from "./SideNavbar"


function App() {
  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setData(childdata);
    console.log(data)
  }

  const childToParenta = (childdata) => {
    setData(childdata);
    console.log(data)
  }
  return (
    <><div>
      <CssBaseline />
      <PersistentDrawerLeft />
      {/* <Navbar />
      <LinearStepper /> */}

    </div>             <Footer />
</>
    
  )
}

export default App;
