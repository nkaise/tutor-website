import { useTranslation } from 'react-i18next';
import casesList from './casesList.js';
import './cases.css';
import arrow from '../../assets/images/cases/arrow.png';

const Cases = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <section className="case-study">
        <div className="container">
            <div className="case-study-block">
                <h3 className="title">{t('cases.title')}</h3>
                <div className="case-block">
                    {casesList.map(item => (
                        <div className="case-card">
                            <p className="case-a">{t(item.keyA)}</p>
                            <img src={arrow} alt="Arrow to right" height="60" width="60"></img>
                            <p className="case-b">{t(item.keyB)}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Cases;



