import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return ( 
    <header className="header">
        <div className="container">
            <div className="header-block">
                <h1 className="header-title">{t('header.title')}</h1>
                <nav className="header-menu">
                    <ul>
                        <li><a href="#work">{t('header.link-work')}</a></li>
                        <li><a href="#education">{t('header.link-education')}</a></li>
                        <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {i18n.language === 'en' ? 'English' : 'Русский'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleLanguageChange('ru')}>Russian</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}
 
export default Header;