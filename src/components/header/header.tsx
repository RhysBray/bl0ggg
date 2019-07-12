import * as React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { toggleMakePost } from "../../reducers/generalReducer";

export interface IOwnProps {}

export interface IStateProps {
  toggleMakePost: () => void;
  isHidden: boolean;
}

export interface IState {}

class Header extends React.Component<IOwnProps & IStateProps, IState> {
  render() {
    let showOrNot;
    this.props.isHidden ? (showOrNot = "") : (showOrNot = styles.show);
    return (
      <header className={styles["app-header"]}>
        <NavLink to="login">
          <div className={styles.logout}>LogOut</div>
        </NavLink>
        <h1>BL0GGGG</h1>
        <div
          className={`${styles["make-post-button"]} ${showOrNot}`}
          onClick={this.props.toggleMakePost}
        >
          Post!
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return { isHidden: state.storeState.isHidden };
};

const mapDispatchToProps = { toggleMakePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
