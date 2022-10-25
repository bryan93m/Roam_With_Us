import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function NavBar() {
    return (
        <nav className='nav'>
                <ul>
                    <CustomLink to='/'>Logout</CustomLink>
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