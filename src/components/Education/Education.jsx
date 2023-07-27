import education from './education-list';
import Table from 'react-bootstrap/Table';
import './education.css';

const educationList = education;

const Education = () => {
    return ( 
        <section className="education" id="education">
        <div className="container">
            <div className='education-block'>
            <h3 className="title lng-education">education</h3>
            <Table className='custom-table' id='my-custom-table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {educationList.map(item => (
                        <tr key={item.id}>
                            <td>{item.year}</td>
                            <td>{item.name}</td>
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