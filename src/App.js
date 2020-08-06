import React from "react";
import "./App.scss";
import { FilterButtons, EmailList, EmailBody } from "./components/export";

function App() {
  return (
    <div className="App">
      <FilterButtons />
      <EmailList />
      <EmailBody />
    </div>
  );
}

export default App;
