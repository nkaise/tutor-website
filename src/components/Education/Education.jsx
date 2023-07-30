import { useTranslation } from 'react-i18next';
import education from './education-list';
import Table from 'react-bootstrap/Table';
import './education.css';

const educationList = education;

const Education = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <section className="education" id="education">
        <div className="container">
            <div className='education-block'>
            <h3 className="title lng-education">{t('education.title')}</h3>
            <Table className='custom-table' id='my-custom-table' striped bordered hover>
                <thead>
                    <tr>
                        <th id='education-th'>{t('education.year')}</th>
                        <th id='education-th'>{t('education.name')}</th>
                    </tr>
                </thead>
                <tbody>
                    {educationList.map(item => (
                        <tr key={item.id}>
                            <td id='education-td'>{item.year}</td>
                            <td id='education-td'>{t(item.name)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>
    </section>
    );
}


 
export default Education;