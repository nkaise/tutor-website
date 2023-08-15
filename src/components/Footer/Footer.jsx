import { useTranslation } from 'react-i18next';
import './footer.css';
import inst from '../../assets/images/footer/instagram.png';
import vk from '../../assets/images/footer/vk.png';

const Footer = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <section className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-block-head">
                        <h4>{t('header.title')}</h4>
                        <span>2023</span>
                        <a href="https://nkaise.me/" target='_blanket' className='footer-block-made-by'>made by nkaise</a>
                    </div>
                    <div className="footer-block-a">
                        <ul>
                            <li><a href="#about-me">{t('about.title')}</a></li>
                            <li><a href="#work">{t('work.title')}</a></li>
                            <li><a href="#classes">{t('classes.title')}</a></li>
                            <li><a href="#reviews">{t('reviews.title')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-block-icons">
                            <a href="https://www.instagram.com/gdrbshv/" target='_blanket'><img src={inst} alt="" width="32px" height="32px" /></a>
                            <a href="https://vk.com/id280345683" target='_blanket'><img src={vk} alt="" width="32px" height="32px" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;