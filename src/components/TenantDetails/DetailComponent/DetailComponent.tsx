import styles from './detailComponent.module.scss';

interface IProps {
    title:string;
    children:React.ReactNode
}

function DetailComponent(props:IProps):JSX.Element {
    const {title, children} = props;

    return (
        <div className={styles.detail}>
        <p className={styles.title}>{title}</p>
        {children}
        </div>  
    )
}

export default DetailComponent;