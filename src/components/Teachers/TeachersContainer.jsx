import { connect } from "react-redux";
import React from "react";
import Teachers from "./Teachers";
import { setActive, setActiveModal } from "./../../redux/teachersReducer";
import { withNavigate } from "../../HOCs/withNavigate";
import { compose } from "redux";

class TeachersComponent extends React.Component {
  setActive = (bool) => {
    this.props.setActive(bool);
  };
  handleInput = (e) => {
    this.props.setActiveModal(e.target.value);
  };
  render() {
    return (
      <Teachers
        TeachersList={this.TeachersList}
        teachersInfo={this.props.teachersInfo}
        isActive={this.props.isActive}
        setActive={this.setActive}
        activeModal={this.props.activeModal}
        handleInput={this.handleInput}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isActive: state.teachersReducer.isActive,
    teachersInfo: state.teachersReducer.teachersInfo,
    activeModal: state.teachersReducer.activeModal,
  };
};

export default compose(
  connect(mapStateToProps, { setActive, setActiveModal }),
  withNavigate
)(TeachersComponent);
