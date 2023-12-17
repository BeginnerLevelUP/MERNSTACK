function UserList({ user }) {
    return (
        <>
            <ul>
                {user.map((users) => (
                    <li key={users._id}>{users.name}</li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
