import { useState, useEffect, useCallback} from 'react';
import {tenantById} from '../../tenantData';
import { ApolloClient } from '@apollo/client';
import {ITenant} from '../../types/tenant';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import DetailComponent from './DetailComponent/DetailComponent';
import styles from './tenantDetails.module.scss';

interface IProps {
    client:ApolloClient<any>
}


function TenantDetails(props:IProps):JSX.Element {
    const {client} = props;
    const { id = '' } = useParams();
    const [tenantDetails, setTenantDetails] = useState({} as ITenant);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getGetTenantDetailById = useCallback(async ()=>{
        setIsLoading(true);
        const res = await tenantById(client, {id});
        setIsLoading(false);
        if(res.id){
            setTenantDetails(res)
        }
    }, [client, id]);

    useEffect(()=>{
        getGetTenantDetailById()
        return(()=>{
            setTenantDetails({} as ITenant)
        })
    }, [getGetTenantDetailById])

    
    return (
        <div className={styles.detailsMainContent}>
        <p className={styles.heading}>{`Details of ${tenantDetails.name || '...'}`}</p>

        {isLoading ? <Loader className={styles.loadingContent} /> : 
            <div className={styles.detailsContent}>
            <DetailComponent title='Name' >
                <p className={styles.value}>{tenantDetails.name}</p>
            </DetailComponent>
            <DetailComponent title='description' >
                <p className={styles.value}>{tenantDetails.description}</p>
            </DetailComponent>
            <div className={styles.statusTypeCode}>
            <DetailComponent title='Status' >
                <p className={`${styles.statusValue} ${tenantDetails.status === 'ACTIVE' ? styles.active : styles.inActive}`}>{tenantDetails.status}</p>
            </DetailComponent>
            <DetailComponent title='Type' >
                <p className={styles.value}>{tenantDetails.type}</p>
            </DetailComponent>
            <DetailComponent title='Code' >
                <p className={styles.value}>{tenantDetails.code}</p>
            </DetailComponent>
            </div>
        </div>}
        </div>
    )
}

export default TenantDetails;