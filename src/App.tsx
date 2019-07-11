import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import Header from "./components/header";
import MakePost from "./components/makePost";
import PostContainer from "./containers/postContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <MakePost />
          <PostContainer />
        </main>
      </div>
    </Provider>
  );
};

export default App;
