import classes from "./Teachers.module.css";

const TeacherInfo = (props) => {
  return (
    <div className={classes.teachers__contentItem}>
      <img className={classes.teachers__photo} src={props.src}></img>
      <h2>{props.name}</h2>
      <p>{props.discription}</p>
      <button
        className={classes.biographyButton}
        value={props.id}
        onClick={(e) => {
          props.setActive(true);
          props.setActiveModal(e);
        }}
      >
        Биография
      </button>
    </div>
  );
};

export default TeacherInfo;
