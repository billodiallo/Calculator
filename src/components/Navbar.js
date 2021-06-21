import REACT from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    <div className = 'aa'>
        < Link className= "nav-item" to "/">Home </Link>
        <Link className = "nav-item" to "/calculator">Calculator </Link>
        <Link  className = "nav-item" to "/quote">Quote </Link>
    </div>
}

export default Navbar;