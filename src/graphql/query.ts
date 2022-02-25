import {gql} from '@apollo/client';

export const getAllTenant = gql`
    query tenants($page:number, $limit:number){
        tenants(_page:$page, _limit:$limit) @rest(type: "Tenant", path:"tenants/?{args}"){
            id
            name
            description
            status
        }
    } 
`;

export const getTenantById = gql`
    query tenantById($id:String){
      tenantById(id:$id) @rest(type: "Tenant", path:"tenants/{args.id}"){
            id
            name
            description
            status
            code
            type
        }
    } 
`;