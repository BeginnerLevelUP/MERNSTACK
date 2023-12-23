import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
        <ul>
            <Link to='/'>
                    <li>Home</li>      
            </Link>
                <Link to='/login'>
            <li>Login</li>
            </Link>
                <Link to='/signup'>
            <li>SignUp</li>
                </Link>
        </ul>
        </>
    )
}
export default Navbar