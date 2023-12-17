import { useQuery } from '@apollo/client';
import { QUERY_USER} from '../../utils/queries';
import UserList from '../components/UserList';
import UserForm from '../components/userForm';
function Home(){
    const { loading,error,data } = useQuery(QUERY_USER);
    const users= data?.users|| [];
    return(
        <>
        <UserForm></UserForm>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <UserList user={users}></UserList>
            )}
        </>
    )
}

export default Home