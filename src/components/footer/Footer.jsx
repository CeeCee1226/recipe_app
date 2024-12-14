import './footer.css'
import { FooterImg } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content' >
          <div className="social-icons">
            <img src={FooterImg.facebook_1} alt="Facebook" />
            <img src={FooterImg.instagram_1} alt="Instagram" />
            <img src={FooterImg.twitter} alt="Twitter" />
            <img src={FooterImg.youtube} alt="Youtube" />
            </div>
            <p className='footer-text'>Follow us on Facebook Instagram Twitter and Youtube</p>
       </div>
      
    </div>
  )
}

export default Footer

