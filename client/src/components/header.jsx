import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <h1>Headeezy</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </>
    );
}

export default Header;
