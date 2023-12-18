import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js"

function Login() {
    const [name, setName] = useState('');

    const [login, { error, data }] = useMutation(LOGIN, {
        refetchQueries: [{ query: QUERY_USER }],
    });

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login({
                variables: {
                    name,
                },
            });

            // Ensure the response structure matches the expected format
            const { token } = response.data.login; // Access the token if it exists in the response
            if (token) {
                Auth.login(token);
            }

            setName(''); // Clear the input after successful submission
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <>
            <h1>User Creation</h1>
            {data ? (
                <p>
                   welcome back {data.auth} <Link to="/">Back to the homepage</Link>
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
                    <button type="submit">Login</button>
                </form>
            )}
        </>
    );
}
export default Login;