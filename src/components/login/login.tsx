import * as React from "react";
import styles from "./login.module.scss";
import { NavLink } from "react-router-dom";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {}

class Login extends React.Component<IOwnProps & IStateProps, IState> {
  handleClick = () => {};
  public render() {
    let email = "";
    let password = "";
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Login below!</h1>
          <label>Email: </label>
          <input
            type="email"
            onChange={event => {
              email = event.target.value;
              console.log(email);
            }}
            className={styles.input}
            placeholder="*"
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={event => {
              password = event.target.value;
              console.log(password);
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <NavLink className={styles.link} to="/bl0gggg">
              <div className={styles.button} onClick={this.handleClick}>
                Login
              </div>
            </NavLink>
            <NavLink className={styles.link} to="/registation">
              <div className={`${styles.button} ${styles.secondary}`}>
                Register
              </div>
            </NavLink>
          </div>
          <NavLink className={styles.link} to="/forgotten-password">
            <div className={`${styles.button} ${styles.tertiary}`}>
              Forgot Password...
            </div>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default Login;
