import { useTranslation } from 'react-i18next';
import casesList from './casesList.js';
import { useState, useEffect } from 'react';
import './cases.css';
import arrow from '../../assets/images/cases/arrow-2.png';
import arrowDown from '../../assets/images/cases/arrow-down.png';

const Cases = () => {
    const { t, i18n } = useTranslation();

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    return ( 
        <section className="case-study">
        <div className="container">
            <div className="case-study-block">
                <h3 className="title">{t('cases.title')}</h3>
                <div className="case-block">
                    {casesList.map(item => (
                        <div className="case-card">
                            <p className="case-a">{t(item.keyA)}</p>
                            <img 
                                src={isMobileView ? arrowDown : arrow}
                                alt={isMobileView ? 'Arrow down' : 'Arrow to right'}
                                height="60"
                                width="60"
                            ></img>
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

