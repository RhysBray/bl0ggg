import * as React from "react";
import styles from "./register.module.scss";
import { NavLink } from "react-router-dom";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {}

class Register extends React.Component<IOwnProps & IStateProps, IState> {
  handleClick = () => {};
  public render() {
    let email = "";
    let password = "";
    let confirmPassword = "";
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Register a new account!</h1>
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
          <label>Confirm Password: </label>
          <input
            type="password"
            onChange={event => {
              confirmPassword = event.target.value;
              console.log(confirmPassword);
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <NavLink className={styles.link} to="/bl0gggg">
              <div className={styles.button} onClick={this.handleClick}>
                Register
              </div>
            </NavLink>
            <NavLink className={styles.link} to="/login">
              <div className={`${styles.button} ${styles.secondary}`}>Back</div>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
