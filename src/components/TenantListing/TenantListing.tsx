import {useEffect, useState, useCallback} from 'react';
import {ITenant} from '../../types/tenant';
import { ApolloClient } from '@apollo/client';
import {getAllTenants} from '../../tenantData';
import TenantCard from './TenantCard/TenantCard';
import Button from '../Button/Button';
import styles from './tenantListing.module.scss';
import Loader from '../Loader/Loader';

interface IProps {
    client : ApolloClient<any>
}

function TenantListing(props:IProps):JSX.Element {
    const {client} = props;
    const [tenantData, setTenantData] = useState([] as ITenant[]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const callTenants = useCallback(async (pageNo:number, buttonKey:string)=>{
        setLoading(true);
        const res = await getAllTenants(client, {page:pageNo, limit:20});
            setLoading(false);
            if(res.length){
                setTenantData(res);
                if(buttonKey === 'PREV' ){
                    setPage(p=>p-1);
                }else if(buttonKey === 'NEXT'){
                    setPage(p=>p+1);
                }
            }
    }, [client]);

useEffect(()=>{
  callTenants(page, '')
}, [callTenants, page]);

const handlePrevClick = useCallback(()=>{
    if(page !== 1){
        callTenants(page-1, 'PREV');
    } 
}, [callTenants, page]);

const handleNextClick = useCallback(()=>{
    callTenants(page+1, 'NEXT');  
}, [callTenants, page]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>
                <p className={styles.headingName}>Tenants</p>
                <p className={styles.headingName}>{`${tenantData?.[0]?.id.slice(1) || 0} - ${tenantData?.[tenantData.length-1]?.id.slice(1) || 0}`}</p>
            </div>
    
        {loading ? <Loader className={styles.loadingContent} /> : <div className={styles.listingContainer}>
            {tenantData?.map((item : ITenant)=>{
                return (
                    <TenantCard key={item.id} data={item} />
                )
            })}
        </div>}

        <div className={styles.navigateButton}>
            <Button onClick={handlePrevClick} name='Prev' />
            <Button onClick={handleNextClick} name='Next' />
        </div>
        </div>
    )
}

export default TenantListing;