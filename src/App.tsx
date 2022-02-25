import { ApolloClient } from '@apollo/client';
import {Route, Routes , BrowserRouter} from 'react-router-dom';
import TenantListing from './components/TenantListing/TenantListing';
import TenantDetails  from './components/TenantDetails/TenantDetails';

interface IProps {
  client:ApolloClient<any>
}

function App(props: IProps) {
  const {client} = props;

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='tenant/:id' element={<TenantDetails client={client} />} />
        <Route path='/' element={<TenantListing client={client}/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
