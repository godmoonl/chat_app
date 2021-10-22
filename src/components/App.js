import React ,{useState} from "react";
import AppRouter from "./Router"
import fbase from "../fbase";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
  <AppRouter isLoggedIn={isLoggedIn}/>
  );
}

export default App;
