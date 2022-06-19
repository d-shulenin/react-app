import classes from './About.module.css'
import Header from './../Header/Header'

const About = () => {
    return (
        <section className={classes.about}>
            <Header />
            <div className={classes.aboutWrapper}>
                <img className={classes.aboutImage} src='About/about__img.png'></img>
                <div className={classes.aboutDiscr}>
                    <h2>Чем мы занимаемся?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eget neque, dignissim et feugiat elit augue in suspendisse egestas. 
                        Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. 
                        Et neque, adipiscing sapien sem senectus praesent aenean consequat. 
                        Aenean facilisi turpis aliquet fringilla.
                        Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. 
                        Quam pharetra rhoncus risus, cursus id elementum aliquet. 
                        Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                </div>
            </div>
        </section>
    )
}

export default About