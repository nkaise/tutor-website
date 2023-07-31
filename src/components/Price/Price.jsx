import { useTranslation } from 'react-i18next';
import priceArray from './priceArray.js';
import './price.css';

const priceList = priceArray;

const Price = () => {
    const { t, i18n } = useTranslation();
    const isRussian = i18n.language === 'ru';
    const priceList = isRussian ? priceArray : priceArray.slice(0, 2); // если рус, то обрезаем массив чтобы выводить только 2 карточки в англ версии

    return ( 
    <section className="prices" id="prices">
        <div className="container">
            <div className="prices-block">
                <h3 className="title">{t('price.title')}</h3>
                <div className='prices-cards'>
                {priceList.map(item => (
                        <div className="prices-card">
                            <img src={item.img}></img>
                            <p className="prices-title">{t(item.description)}</p>
                            {i18n.language === 'ru' && item.forRus === true && <span>{t(item.currency.rub)} </span> ||
                               i18n.language === 'ru' && item.forRus === false && <span>{t(item.currency.rub)} / {t(item.currency.usd)} / {t(item.currency.euro)} / {t(item.currency.gel)}</span> ||
                               i18n.language === 'en' && <span>{t(item.currency.usd)} / {t(item.currency.euro)} / {t(item.currency.gel)}</span>
                            }
                        </div>
                ))}
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Price;