import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import store from "./store";
import "./App.css";

import Home from "./Components/home";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
