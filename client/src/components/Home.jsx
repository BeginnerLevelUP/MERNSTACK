import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
function Home(){
    const { loading,error, data } = useQuery(QUERY_USER);
    const user = data?.users[0].name|| 'yo';
    // console.log(data)
    return(
        <>
            <h2>{user}</h2>
        </>
    )
}
export default Home