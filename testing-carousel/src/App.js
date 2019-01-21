import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Login from "./containers/Login";
import TitleScreen from "./containers/TitleScreen";
import SettingsScreen from "./containers/SettingsScreen";
import MyProvider from "./containers/MyProvider";
import store from "./redux/store/store";
import "./App.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <MyProvider>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/titleScreen" component={TitleScreen} />
          <Route path="/settingsScreen" component={SettingsScreen} />
        </MyProvider>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// import React, { Component } from "react";
// import CarouselItems from "./Carousel-Items";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <section>
//           <h1>kaichiro</h1>
//         </section>
//         <CarouselItems />
//       </div>
//     );
//   }
// }

// export default App;
