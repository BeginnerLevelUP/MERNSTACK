import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js"

function Signup() {
    const [name, setName] = useState('');

    const [addUser, { error, data }] = useMutation(ADD_USER, {
        refetchQueries: [{ query: QUERY_USER }],
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: {
                    name,
                },
            });

            // Ensure the response structure matches the expected format
            const { token } = data.addUser; // Access the token if it exists in the response

            if (token) {
                Auth.login(token);
            }

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
            {data ? (
                <p>
                    User added successfully. <Link to="/">Back to the homepage</Link>
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user">Name</label>
                    <input
                        id="user"
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <button type="submit">Signup</button>
                </form>
            )}
        </>
    );
}
export default Signup;