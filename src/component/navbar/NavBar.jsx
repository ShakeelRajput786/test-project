
import './NavBar.css'
import img2 from '../../assets/images/logontdc.jpg'
import { Link } from 'react-router-dom';
let NavBar = () => {
    return (
        <div className='navbar'>
            <div className='menu'>Home</div>
            <div className='menu'>Bakery</div>
            <Link to="/">
                 <img src={img2} alt='ntdc logo image' />
            </Link>
            <Link to="/productPage">
                <div className='menu'>Product</div>
            </Link>
            <Link to="/conctactUs">
             <div className='menu'>Contact Us</div>
            </Link>
        </div>      
          
    );
}

export default NavBar;


