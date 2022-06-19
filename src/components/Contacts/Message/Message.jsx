import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.question}>
            <div className={classes.question__header}>
                <h5>{props.user}</h5>
                <span>{props.date}</span>
            </div>
            <div className={classes.question__content}>
                {props.content}
            </div>
        </div>
    )
}

export default Message