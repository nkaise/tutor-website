import decoration1 from '../../assets/images/main/decoration-1.png';
import decoration2 from '../../assets/images/main/decoration-2.png';
import galya from '../../assets/images/main/galya.jpg';
import telegram from '../../assets/images/icons/telegram.png';
import email from '../../assets/images/icons/email.png';
import './main.css';

const Main = () => {
    return ( 
    <main>
        <div className="container">
            <div className="main-block">
                <div className="main-text">
                    <h2 className="main-text-title lng-main-title">Hello, I'm Galya,</h2>
                    <span className="main-text-subtitle main-word lng-main-word">English tutor</span>
                    <p className="main-text-location lng-main-location">based in Tbilisi.</p>
                    <ul className="main-text-social">
                        <li><img src={telegram}></img><a href="https://gdrbshv.t.me" target="_blank">@gdrbshv</a></li>
                        <li><img src={email}></img><a href="mailto:galyaa.30@gmail.com">galyaa.30@gmail.com</a></li>
                        <li><a href="#prices" className="lng-header-el-3">Prices</a></li>
                    </ul>
                </div>
                <div className='main-photo'>
                    <img src={decoration1} className='main-dec-1'></img>
                    <img src={decoration2} className='main-dec-2'></img>
                    <img src={galya} className='main-pic'></img>
                </div>
            </div>
        </div>
    </main>
    );
}
 
export default Main;