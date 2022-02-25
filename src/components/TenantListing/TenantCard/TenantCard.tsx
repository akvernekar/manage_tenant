import {Link} from 'react-router-dom';
import {ITenant} from '../../../types/tenant';
import styles from './tenantCard.module.scss';


interface IProps {
    data:ITenant
}

function TenantCard(props:IProps):JSX.Element {
    const {id, name, description, status} = props.data;

    return (
        <div className={`${styles.cardContainer} ${status === 'ACTIVE' ? styles.activeCard : styles.inActiveCard}`}>
                        <p className={styles.title}>{name}</p>
                        <p className={styles.description}>{description}</p>
                            <Link to={`/tenant/${id}`}>
                                <div className={styles.details} > 
                                    More info
                                </div>
                            </Link> 
                    </div>
    )
}

export default TenantCard;