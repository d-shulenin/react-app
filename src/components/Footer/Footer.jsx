import classes from './Footer.module.css'

const Footer = () => {
    return (
    <footer className={classes.footer}>
        <button className={classes.button}>Заказать курс</button>
        <div className={classes.footer__statistics}>
            <div className={classes.footer__studentsStatistics}>
                <p>Учеников всего:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;200</p>
                <p>Успешно закончили курс:&emsp;&emsp;&nbsp;&nbsp;190</p>
            </div> 
            <div className={classes.footer__moneyStatistics}>
                <p>Заработано учениками:&emsp;&emsp;400 000₽</p>
                <div className={classes.footer__moneyStatisticsLine}>
                    <div className={classes.footer__moneyStatisticsLineRed}></div>
                    <div className={classes.footer__moneyStatisticsLineWhite}></div>
                </div>
                <div className={classes.footer__moneyStatisticsDigits}>
                    <p>0</p>
                    <p>1 000 000₽</p>
                </div>
            </div>
        </div>
    </footer>
    )
  }

export default Footer