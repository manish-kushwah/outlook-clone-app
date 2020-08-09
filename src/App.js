import React from "react";
import { FilterButtons, EmailList, EmailBody } from "./components/export";
import store from "./state/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterButtons />
        <section className="dashboard">
          <EmailList />
          <EmailBody />
        </section>
      </div>
    </Provider>
  );
}

export default App;
