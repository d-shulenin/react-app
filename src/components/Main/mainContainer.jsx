import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Rectangle from "./__rectangle/mainSection__rectangle";

class Main extends React.Component {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  render() {
    return (
      <section className="mainSection">
        <Header />
        <h1>
          Первый курс
          <br /> по компьютерной сборке
        </h1>
        <div className="mainSection__timeLeft">
          <Rectangle value="Дней" number={this.getRandomInt(0, 31)} />
          <Rectangle value="Часов" number={this.getRandomInt(0, 24)} />
          <Rectangle value="Минут" number={this.getRandomInt(0, 60)} />
          <Rectangle value="Секунд" number={this.getRandomInt(0, 60)} />
        </div>
      </section>
    );
  }
}

export default Main;
