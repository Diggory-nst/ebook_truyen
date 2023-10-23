
import header_img from '../assets/images/header_img.jpg'

import { Div } from '../assets/styles/header.css';

const Header = () => {
    return (
        <Div className='header'>
            <div>
                <img src={header_img} />
            </div>
        </Div>
    )
}

export default Header;