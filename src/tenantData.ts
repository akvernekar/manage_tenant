import { ApolloClient } from '@apollo/client';
import {getAllTenant, getTenantById} from './graphql/query';
import { ITenant } from './types/tenant';

export async function getAllTenants(client: ApolloClient<any>, variables:{page:number, limit:number}){
    try{
        const res = await client.query({query:getAllTenant, variables})
        if(res.data){
            return res.data.tenants.filter((item:ITenant)=>item.name) as ITenant[]
        }
    }catch(error){
        console.log('error', error);
    }
    return [] as ITenant[];
}

export async function tenantById(client: ApolloClient<any>, variables:{id:string}){
    try{
        const res = await client.query({query:getTenantById, variables})
        if(res.data){
            return res.data.tenantById as ITenant
        }
    }catch(error){
        console.log('error', error);
    }
    return {} as ITenant;
}