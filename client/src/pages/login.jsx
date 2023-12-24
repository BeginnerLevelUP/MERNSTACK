import UserList from "../components/userlist"
function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <form>
                <input id='email' placeholder="email"></input>
                <input id='password' placeholder="password"></input>
                <button type='submit'>Login</button>
            </form>
            {/* use state and add user button see a list of users and friends */}
        </>
    )
}
export default LoginPage