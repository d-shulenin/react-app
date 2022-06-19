import classes from './mainSection__rectangle.module.css'

const Rectangle = (props) => {
    return (
        <div className={classes.mainSection__rectangle}>
            <h4>{props.number}</h4>
            <span>{props.value}</span>
        </div>
    )
}

export default Rectangle