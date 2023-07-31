import { useTranslation } from 'react-i18next';
import { reviewsArrayEN, reviewsArrayRU } from './reviewsArray.js';
import Carousel from 'react-bootstrap/Carousel';
import './reviews.css';

const Reviews = () => {
    const { t, i18n } = useTranslation();
    return ( 
    <section className="reviews" id='reviews'>
        <div className="container">
        <h3 className="title lng-reviews">{t('reviews.title')}</h3>
        <Carousel className="d-flex justify-content-center align-items-center carousel">
            {i18n.language === 'ru' ? reviewsArrayRU.map(item => (
                <Carousel.Item className='reviews-carousel-item' key={item}>
                    <div className="reviews-box d-flex justify-content-center align-items-center">
                        <img src={item} className='reviews-img' />
                    </div>
                </Carousel.Item>
                ))
                :
                reviewsArrayEN.map(item => (
                    <Carousel.Item className='reviews-carousel-item' key={item}>
                        <div className="reviews-box d-flex justify-content-center align-items-center">
                            <img src={item} className='reviews-img' />
                        </div>
                    </Carousel.Item>
            ))}
        </Carousel>
        </div>
    </section>
    );
}

export default Reviews;