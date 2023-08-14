import { useTranslation } from 'react-i18next';
import classesLinks from './classesLinks';
import './classes.css';

const Classes = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <section className="my-classes" id='classes'>
        <div className="container">
            <div className="my-classes-block">
                <h3 className="title">{t('classes.title')}</h3>
                <span>{t('classes.subtitle')}</span>
                <div className='my-classes-btns'>
                    {classesLinks.map(item => (
                        <div className='my-classes-btns-a'><a href={item.url} target='_blank'>{t(item.name)}</a></div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}

export default Classes;


