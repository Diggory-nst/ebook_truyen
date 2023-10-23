import logo_img from '../assets/images/logo/logo_img.png'
import logo_text from '../assets/images/logo/logo_text.png'

import icon_facebook from '../assets/images/icons/facebook.png'
import icon_gmail from '../assets/images/icons/gmail.png'
import icon_telegram from '../assets/images/icons/telegram.png'

import { Div } from '../assets/styles/footer.css'

const Footer = () => {
    return (
        <Div>
            <div className="logo">
                <img src={logo_img} className='logo_img' />
                <img src={logo_text} className='logo_text' />
            </div>
            <div className="social_media">
                <a href='/'>
                    <img src={icon_facebook} />
                </a>
                <a href='/'>
                    <img src={icon_gmail} />
                </a>
                <a href="/">
                    <img src={icon_telegram} />
                </a>
            </div>
            <h1>Copyright © 2023 TÀNG KINH CÁC</h1>
        </Div>
    )
}

export default Footer;