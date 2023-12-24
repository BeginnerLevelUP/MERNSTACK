import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../../utils/query';

function UserList({ username }) {
    const { loading, data } = useQuery(QUERY_USER);

    if (loading) {
        return <p>Loading...</p>;
    }

    const usernames = data?.username || []; // Ensure data exists and extract usernames

    return (
        <>
            <ul>
                {usernames.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
