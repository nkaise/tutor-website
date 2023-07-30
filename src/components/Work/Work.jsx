import { useTranslation } from 'react-i18next';
import './work.css';

const Work = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="work" id="work">
        <div className="container">
            <div className="work-block">
                <h3 className="work-title title">{t('work.title')}</h3>
                <ul className="work-list">
                    <li>{t('work.1-element')}</li>
                    <li>{t('work.2-element')}</li>
                    {i18n.language === 'ru' ? <li>{t('work.3-element')}</li> : null}
                </ul>
            </div>
        </div>
    </section>
    );
}
 
export default Work;