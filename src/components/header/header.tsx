import * as React from "react";
import styles from "./header.module.scss";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <header className={styles["app-header"]}>
        {/*for links */}
        <h1># # #</h1>
      </header>
    );
  }
}

export default Header;
