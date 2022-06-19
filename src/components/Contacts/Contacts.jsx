import classes from "./Contacts.module.css";
import Header from "../Header/Header";
import Message from "./Message/Message";

const Contacts = (props) => {
  return (
    <section className={classes.contacts}>
      <Header />
      <div className={classes.contacts__wrapper}>
        <h1>Статьи каждую неделю</h1>
        <p>
          Больше 90% учеников прошли полный курс и смогли собрать свой первый
          компьютер
        </p>
        <form className={classes.contacts__form}>
          <input
            className={classes.contacts__input}
            type="text"
            name="message"
            placeholder="Задайте свой вопрос"
            size="30"
            ref={props.QuestionRef}
            value={props.newQuestionText}
            onChange={props.questionTextUpdate}
          ></input>
          <button
            className={
              props.isAuth
                ? classes.contacts__button
                : classes.contacts__disabledButton
            }
            onClick={props.newQuestionText ? props.askQuestion : null}
            type="button"
            disabled={props.isAuth ? "" : "disabled"}
          >
            Опубликовать
          </button>
        </form>
        <div className={classes.contacts__sm}>
          <div className={classes.contacts__smContainer}>
            <a href="#">
              <img src="/SM/vk.png"></img>
            </a>
          </div>
          <div className={classes.contacts__smContainer}>
            <a href="#">
              <img src="/SM/youtube.png"></img>
            </a>
          </div>
          <div className={classes.contacts__smContainer}>
            <a href="#">
              <img src="/SM/facebook.png"></img>
            </a>
          </div>
          <div className={classes.contacts__smContainer}>
            <a href="#">
              <img src="/SM/instagram.png"></img>
            </a>
          </div>
        </div>
        {props.isFetching ? (
          <img className={classes.isFetchingImg} src="preloader.svg" />
        ) : null}
        <div className={classes.pageButtons}>
          {props.pagesCount.map((i) => {
            return (
              <button
                className={
                  props.currentPage === i
                    ? classes.selectedPage
                    : classes.pageButton
                }
                type="button"
                onClick={() => props.setPage(i)}
              >
                {i}
              </button>
            );
          })}
        </div>
        <div>
          {props.questions
            .slice(
              props.currentPage * props.pageSize - props.pageSize,
              props.currentPage * props.pageSize
            )
            .map((question) => (
              <Message
                user={question.user}
                date={question.date}
                content={question.content}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
