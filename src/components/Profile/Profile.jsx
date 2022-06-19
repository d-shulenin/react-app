import "./Profile.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { showProfile } from "./../../redux/profileReducer";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    for (let user of this.props.usersList) {
      if (user.id === this.props.authedID) {
        this.authedUser = user;
      }
    }
  }
  componentDidMount() {
    setTimeout(() => this.props.showProfile(), 1000);
  }
  render() {
    return (
      <section className="profile">
        <NavLink to="/" className="profile__backButton">
          <img src="Profile/back.png" alt=""></img>
        </NavLink>
        <div
          className={
            this.props.isProfileShown
              ? "profile__wrapper shown"
              : "profile__wrapper"
          }
        >
          <div className="profile__ava">
            <img src="Header/user.png" alt=""></img>
          </div>
          <div className="profile__info">
            <h2>Имя пользователя:&emsp;{this.authedUser.login}</h2>
            <h2>Почта:&emsp;{this.authedUser.email}</h2>
            <h2>О себе:&emsp;{this.authedUser.about}</h2>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isProfileShown: state.profileReducer.isProfileShown,
    usersList: state.authReducer.usersList,
    authedID: state.authReducer.authedID,
  };
};

export default connect(mapStateToProps, { showProfile })(Profile);
