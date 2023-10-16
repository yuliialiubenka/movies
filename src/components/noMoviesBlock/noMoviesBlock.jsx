import { useStyles } from './noMoviesBlockStyles';
import Image from "../../images/anonymous.svg"

const NoMoviesBlock = () => {
    const classes = useStyles();       
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={Image} alt="Empty block" width={400} />
            <p className={classes.text}>There is no movies with this request.</p>
            <p className={classes.text}>Please, try again.</p>
        </div>
    );
}

export default NoMoviesBlock;