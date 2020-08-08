import React from "react";
import { FilterButtons, EmailList, EmailBody } from "./components/export";

function App() {
  return (
    <div className="App">
      <FilterButtons />
      <section className="dashboard">
        <EmailList />
        <EmailBody />
      </section>
    </div>
  );
}

export default App;
