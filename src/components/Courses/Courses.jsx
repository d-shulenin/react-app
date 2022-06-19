import classes from './Courses.module.css'
import Header from './../Header/Header'

const Courses = () => {
    return (
        <section className={classes.courses}>
            <Header />
            <div className={classes.courses__wrapper}>
                <div className={classes.courses__quickStart}>
                    <header className={classes.topicHeader}>
                        <img className={classes.courses__quickStartHeaderLogo} src='Courses/ellipse.png'></img>
                        <h1>Быстрый старт</h1>
                    </header>
                    <p className={classes.courses__quickStartSubtitle}>
                        Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
                    </p>
                    <div className={classes.courses__quickStartContent}>
                        <div className={classes.quickStartBlock}>
                            <h2>100%</h2>
                            <div className={classes.quickStartBlock__rectangle100}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Netus eget velit quisque accumsan amet tortor. 
                                 Velit, volutpat egestas fringilla mi porttitor tempus. 
                                 Placerat dui.
                            </p>
                        </div>
                        <div className={classes.quickStartBlock}>
                            <h2>75%</h2>
                            <div className={classes.quickStartBlock__rectangle75}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Netus eget velit quisque accumsan amet tortor. 
                                 Velit, volutpat egestas fringilla mi porttitor tempus. 
                                 Placerat dui.
                            </p>
                        </div>
                        <div className={classes.quickStartBlock}>
                            <h2>50%</h2>
                            <div className={classes.quickStartBlock__rectangle50}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Netus eget velit quisque accumsan amet tortor. 
                                 Velit, volutpat egestas fringilla mi porttitor tempus. 
                                 Placerat dui.
                            </p>
                        </div>
                        <div className={classes.quickStartBlock}>
                            <h2>Итог</h2>
                            <div className={classes.quickStartBlock__rectangleSum}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Netus eget velit quisque accumsan amet tortor. 
                                 Velit, volutpat egestas fringilla mi porttitor tempus. 
                                 Placerat dui.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.courses__getJob}>
                    <h1>Получите профессию прямо сейчас</h1>
                    <div className={classes.courses__getJobContent}>
                        <div className={classes.getJobBlock}>
                            <img src='Courses/icon-1.png'></img>
                            <h3>Только практические навыки в работе</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                        <div className={classes.getJobBlock}>
                            <img src='Courses/icon-2.png'></img>
                            <h3>Работа на самом современном оборудовании</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                        <div className={classes.getJobBlock}>
                            <img src='Courses/icon-3.png'></img>
                            <h3>Сертификация по окончании обучения</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.courses__partners}>
                    <div className={classes.topicHeader}>
                        <img className={classes.courses__partnersHeaderLogo} src='Courses/ellipse.png'></img>
                        <h1>Партнеры - топовые бренды</h1>
                    </div>
                    <img className={classes.courses__partnersContent} src="/Courses/partners__logos.png"></img>
                </div>
            </div>
        </section>
    )
}

export default Courses