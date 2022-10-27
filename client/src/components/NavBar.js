import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa'


function NavBar({ updateUser }) {
    const handleLogout = () => {
        axios.delete('/logout')
            .then(res => {
                updateUser(false)
            })
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/' onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </Link>
            </div>
            <ul>
                <li>
                    <Link to=''>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/destinations'>
                        Destinations
                    </Link>
                </li>
                <li>
                    <Link to='/bookings'>
                        Bookings
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </header>
    )

}


export default NavBar;