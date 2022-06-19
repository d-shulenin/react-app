import classes from "./Teachers.module.css";
import Header from "./../Header/Header";
import TeacherBio from "./TeacherBio";
import TeacherInfo from "./TeacherInfo";

const Teachers = (props) => {
  let TeachersList = props.teachersInfo.map((teacher) => (
    <TeacherInfo
      name={teacher.name}
      discription={teacher.discription}
      src={teacher.src}
      id={teacher.id}
      setActive={props.setActive}
      setActiveModal={props.handleInput}
    />
  ));
  return (
    <section className={classes.teachers}>
      <Header />
      <div className={classes.teachers__wrapper}>
        <div className={classes.teachers__header}>
          <img
            className={classes.teachers__headerLogo}
            src="Teachers/ellipse.png"
          ></img>
          <h1>Ваши преподаватели</h1>
        </div>
        <div className={classes.teachers__content}>{TeachersList}</div>
      </div>
      <TeacherBio
        setActive={props.setActive}
        isActive={props.isActive}
        activeModal={props.activeModal}
        teachersInfo={props.teachersInfo}
      />
    </section>
  );
};

export default Teachers;
