import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import axios from 'axios';


function NavBar({updateUser}) {
    const handleLogout = () => {
        axios.delete('/logout')
            .then(res => {
                updateUser(false)
            })
    }

    return (
        <nav className='nav'>
                <ul>
                    <CustomLink to='/' onClick={handleLogout}>Logout</CustomLink>
                    <CustomLink to='/destinations'>Destinations</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    <CustomLink to='/bookings'>Bookings</CustomLink>
                </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default NavBar;