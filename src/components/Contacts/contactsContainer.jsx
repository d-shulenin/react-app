import Contacts from "./Contacts";
import {
  askQuestion,
  questionTextUpdate,
  setPage,
  getQuestions,
} from "./../../redux/contactsReducer";
import { connect } from "react-redux";
import React from "react";

let today = new Date();
let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let currentTime = date + " " + time;

class ContactsAPIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.QuestionRef = React.createRef();
    this.options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "4ebc9c3e17msh4a7c323683873e5p11ce60jsn28ad425b17ed",
      },
    };
  }
  componentDidMount() {
    this.props.getQuestions(this.options);
  }
  askQuestion = () => {
    this.props.askQuestion(
      this.props.usersList.filter((user) => user.id === this.props.authedID)[0]
        .login,
      this.QuestionRef.current.value,
      currentTime,
      this.props.totalCount
    );
    this.QuestionRef.current.value = "";
  };
  questionTextUpdate = () => {
    this.props.questionTextUpdate(this.QuestionRef.current.value);
  };
  setPage = (value) => {
    this.props.setPage(value);
  };
  render() {
    let pages =
      this.props.totalCount % this.props.pageSize === 0
        ? this.props.totalCount / this.props.pageSize
        : this.props.totalCount / this.props.pageSize + 1;
    let pagesCount = [];
    for (let i = 1; i <= pages; i++) {
      pagesCount.push(i);
    }
    return (
      <Contacts
        QuestionRef={this.QuestionRef}
        newQuestionText={this.props.newQuestionText}
        questionTextUpdate={this.questionTextUpdate}
        askQuestion={this.askQuestion}
        pagesCount={pagesCount}
        setPage={this.setPage}
        questions={this.props.questions}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        isFetching={this.props.isFetching}
        isAuth={this.props.isAuth}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    questions: state.contactsReducer.questions,
    newQuestionText: state.contactsReducer.newQuestionText,
    pageSize: state.contactsReducer.pageSize,
    totalCount: state.contactsReducer.totalCount,
    currentPage: state.contactsReducer.currentPage,
    isFetching: state.contactsReducer.isFetching,
    isAuth: state.authReducer.isAuth,
    usersList: state.authReducer.usersList,
    authedID: state.authReducer.authedID,
  };
};

const ContactsContainer = connect(mapStateToProps, {
  askQuestion,
  questionTextUpdate,
  setPage,
  getQuestions,
})(ContactsAPIComponent);

export default ContactsContainer;
