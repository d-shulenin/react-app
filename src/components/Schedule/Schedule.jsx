import classes from "./Schedule.module.css";
import Header from "./../Header/Header";
import { withNavigate } from "../../HOCs/withNavigate";
import React from "react";

class Schedule extends React.Component {
  render() {
    return (
      <section className={classes.schedule}>
        <Header />
        <div className={classes.schedule__wrapper}>
          <img
            className={classes.schedule__logo}
            src="Schedule/ellipse.png"
          ></img>
          <h1>Программа обучения</h1>
          <p>
            Больше 90% учеников прошли полный курс и смогли собрать свой первый
            компьютер
          </p>
          <div className={classes.schedule__content}>
            <div className={classes.schedule__leftSide}>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__leftText}>
                  <h5>Неделя №1</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
                <div className={classes.scheduleBlock__leftDash}></div>
              </div>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__leftText}>
                  <h5>Неделя №3</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
                <div className={classes.scheduleBlock__leftDash}></div>
              </div>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__leftText}>
                  <h5>Неделя №5</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
                <div className={classes.scheduleBlock__leftDash}></div>
              </div>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__leftText}>
                  <h5>Неделя №7</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
                <div className={classes.scheduleBlock__leftDash}></div>
              </div>
            </div>
            <div className={classes.schedule__center}></div>
            <div className={classes.schedule__rightSide}>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__rightDash}></div>
                <div className={classes.scheduleBlock__rightText}>
                  <h5>Неделя №2</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
              </div>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__rightDash}></div>
                <div className={classes.scheduleBlock__rightText}>
                  <h5>Неделя №4</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
              </div>
              <div className={classes.scheduleBlock}>
                <div className={classes.scheduleBlock__rightDash}></div>
                <div className={classes.scheduleBlock__rightText}>
                  <h5>Неделя №6</h5>
                  <p>Красивая часть курса, которая помогает в успехе</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withNavigate(Schedule);
