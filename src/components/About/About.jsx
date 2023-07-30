import { useTranslation } from 'react-i18next';
import './about.css';

const AboutMe = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="about-me">
        <div className="container">
            <div className="about-block">
                <div className="about-me-block">
                    <h3 className="about-title main-word title">{t('about.title')}</h3>
                    <p className="about-text">{t('about.1-paragraph-about')}</p>
                    <p className="about-text">{t('about.2-paragraph-about')}</p>
                </div>
                <div className="about-methods-block">
                    <h3 className="about-title main-word title">{t('about.methods-title')}</h3>
                    <p className="about-text">{t('about.1-paragraph-methods')}</p>
                    <p className="about-text">{t('about.2-paragraph-methods')}</p>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default AboutMe;