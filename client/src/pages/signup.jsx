function SignupPage() {
    return (
        <>
            <h1>Signup</h1>
            <form>
                <input id='email' placeholder="email"></input>
                <input id='password' placeholder="password"></input>
                <button type='submit'>Signup</button>
            </form>
            {/* use state and add user button see a list of users and friends */}
        </>
    )
}
export default SignupPage