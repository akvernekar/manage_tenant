import styles from './loader.module.scss'

interface IProps {
    className:string;
}

function Loader(props:IProps):JSX.Element {
    const {className} = props;

    return(
        <div className={`${styles.container} ${className}`}>
        <div className={styles.loader}/>
        </div>
    )
}

export default Loader