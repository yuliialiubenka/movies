import { useStyles } from './emptyBlockStyles';
import Image from "../../images/emptyBlock.png"

const EmptyBlock = () => {
    const classes = useStyles();       
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={Image} alt="Empty block" width={400} />
            <p className={classes.text}>Movie gallery is empty...</p>
        </div>
    );
}

export default EmptyBlock;