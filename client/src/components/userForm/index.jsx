import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../../utils/mutations";
import { QUERY_USER } from "../../../utils/queries";
import Auth from '../../../utils/auth';

function UserForm() {
    const [name, setName] = useState('');

    const [addUser, { error }] = useMutation(ADD_USER, {
        refetchQueries: [{ query: QUERY_USER }],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addUser({
                variables: {
                    name //because of the same name name:name would have work 
                },
            });
            setName(''); // Clear the input after successful submission
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <>
            <h1>User Creation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Name</label>
                <input
                    id="user"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleChange}
                ></input>
                <button type="submit">Add User</button>
            </form>
        </>
    );
}

export default UserForm;
