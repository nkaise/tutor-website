import './cases.css';
import arrow from '../../assets/images/cases/arrow.png';

const Cases = () => {
    return ( 
        <section className="case-study">
        <div className="container">
            <div className="case-study-block">
                <h3 className="title lng-cases-title">successful cases</h3>
                <div className="case-block">
                    <div className="case-card">
                        <p className="case-a lng-case-a-1">The student can't read.</p>
                        <img src={arrow} alt="Arrow to right" height="60" width="60"></img>
                        <p className="case-b lng-case-b-1">We are reading a B1 book.</p>
                    </div>
                    <div className="case-card">
                        <p className="case-a lng-case-a-2">Student is not familiar with the format of the exam, can't do the exercises.</p>
                        <img src={arrow} alt="Arrow to right" height="60" width="60"></img>
                        <p className="case-b lng-case-b-2">Student is getting 86 out of 100 on her exams.</p>
                    </div>
                    <div className="case-card">
                        <p className="case-a lng-case-a-3">Student is shy when ordering a meal in a restaurant.</p>
                        <img src={arrow} alt="Arrow to right" height="60" width="60"></img>
                        <p className="case-b lng-case-b-3">Student is confident in communicating with the hotel manager.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Cases;