import styles from './button.module.scss';

interface IProps {
    onClick:()=>void;
    name:string;
}

function Button(props:IProps):JSX.Element{
    const {onClick, name} = props;
    
    return (
        <div onClick={onClick} className={styles.buttonContent}>{name}</div>
    )
}

export default Button;