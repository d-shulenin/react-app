import "./Header.css";
import { NavLink } from "react-router-dom";
import { setLoginForm, login, logout } from "./../../redux/authReducer";
import { connect } from "react-redux";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  setLoginForm(value) {
    this.props.setLoginForm(value);
  }
  login() {
    let flag = false;
    let temp = {
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    };
    for (let user of this.props.usersList) {
      let tempo = {
        login: user.login,
        password: user.password,
      };
      if (JSON.stringify(tempo) === JSON.stringify(temp)) {
        this.props.login(user.id);
        flag = true;
      }
    }
    if (!flag) alert("Неправильный логин или пароль");
  }
  logout() {
    this.props.logout();
  }
  render() {
    return (
      <header className="header">
        <img className="header__logo" src="Header/logo.png" alt="logo"></img>
        <nav className="header__navbar">
          <ul className="header__links">
            <li className="header__link">
              <NavLink to="/" activeClassName="active">
                Главная
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/courses" activeStyle={{ color: "red" }}>
                Курсы
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/schedule" activeClassName="active">
                Расписание
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/teachers" activeClassName="active">
                Преподаватели
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/about" activeClassName="active">
                О нас
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/contacts" activeClassName="active">
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        {this.props.isAuth ? (
          <div className="user">
            <img src="Header/user.png" alt=""></img>
            <NavLink to="/profile">
              <img src="Header/info.png" alt=""></img>
            </NavLink>
            <button onClick={() => this.logout()}>
              <img src="Header/exit.png" alt=""></img>
            </button>
          </div>
        ) : (
          <button
            className="button"
            onClick={() => {
              this.setLoginForm(true);
            }}
          >
            Зайти в кабинет
          </button>
        )}
        <div
          className={
            this.props.isLoginFormActive ? "login activeLogin" : "login"
          }
          onClick={() => this.setLoginForm(false)}
        >
          <form className="loginForm" onClick={(e) => e.stopPropagation()}>
            <div className="loginFormWrapper">
              <h2>Войдите в свой кабинет</h2>
              <input
                ref={this.loginRef}
                type="text"
                name="login"
                placeholder="Логин"
              ></input>
              <input
                ref={this.passwordRef}
                type="text"
                name="password"
                placeholder="Пароль"
              ></input>
              <NavLink to="" className="forgottenPassword">
                Забыли пароль?
              </NavLink>
              <button
                className="loginFormButton"
                type="button"
                onClick={() => {
                  this.login();
                }}
              >
                Войти
              </button>
              <NavLink to="/registration" className="registration">
                Зарегистрироваться
              </NavLink>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginFormActive: state.authReducer.isLoginFormActive,
    isAuth: state.authReducer.isAuth,
    usersList: state.authReducer.usersList,
  };
};

export default connect(mapStateToProps, { setLoginForm, login, logout })(
  Header
);
