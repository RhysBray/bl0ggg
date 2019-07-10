import React from "react";
import "./App.scss";
import Header from "./components/header";
import PostContainer from "./containers/postContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <PostContainer />
      </main>
    </div>
  );
};

export default App;
