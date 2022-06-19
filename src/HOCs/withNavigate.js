import React from "react";
import { Navigate } from 'react-router-dom'
import {connect} from "react-redux"

const mapStateToPropsForNavigate = (state) => {
    return { isAuth: state.authReducer.isAuth };
  };

export const withNavigate = Component => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {alert("Сначала войдите!")
            return <Navigate to="/"/>}
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForNavigate)(NavigateComponent)
}