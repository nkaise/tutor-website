import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './classes.css';

import one from '../../assets/images/classes/1.jpg';
import two from '../../assets/images/classes/2.jpg';
import three from '../../assets/images/classes/3.jpg';
import four from '../../assets/images/classes/4.jpg';

function MyVerticallyCenteredModal(props) {
    const { t, i18n } = useTranslation();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {t('classes.modal-title')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.picture}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>{t('classes.modal-close')}</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Classes = () => {
    const { t, i18n } = useTranslation();
    const [picture, setPicture] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleShowModal = (e) => {
        const src = e.currentTarget.getAttribute('src');
        setPicture(src);
        setModalShow(true);
    }

    return ( 
        <section className="my-classes" id='classes'>
        <div className="container">
            <div className="my-classes-block">
                <h3 className="title lng-classes">{t('classes.title')}</h3>
                <div className="my-classes-pics">
                    <img src={one} alt="My class" className="my-classes-pic" id="1" onClick={(e) => handleShowModal(e)}></img>
                    <img src={two} alt="My class" className="my-classes-pic" id="2" onClick={(e) => handleShowModal(e)}></img>
                    <img src={three} alt="My class" className="my-classes-pic" id="3" onClick={(e) => handleShowModal(e)}></img>
                    <img src={four} alt="My class" className="my-classes-pic" id="4" onClick={(e) => handleShowModal(e)}></img>
                </div>
            </div>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        picture={picture} />
    </section>
    );
}

export default Classes;