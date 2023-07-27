import Card from 'react-bootstrap/Card';
import priceArray from './priceArray.js';
import './price.css';

const priceList = priceArray;

const Price = () => {
    return ( 
    <section className="prices" id="prices">
        <div className="container">
            <div className="prices-block">
                <h3 className="title lng-price">prices</h3>
                <div className='prices-cards'>
                {priceList.map(item => (
                        <div className="prices-card">
                        <img src={item.img}></img>
                        <p className="prices-title lng-price-ind-title">{item.description}</p>
                        <span className="prices-price lng-price-ind"></span>
                        </div>
                ))}
                </div>

            </div>
        </div>
    </section>
     );
}
 
export default Price;

