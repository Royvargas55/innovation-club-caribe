import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button';

// Styles
import '../styles/components/PeopleAnswerSelloPage.scss';
import LogoUlacit from '../assets/LogoUlacit.png';
let db = firebase.firestore();
let db_id = null;

const PeopleAnswerSelloPage = () => {
  const inputEmail = useRef('');
  const [mail, setMail] = useState(false);
  const [studentObject, setStudentObject] = useState({});

  const handleClick = () => {
    let student = window.localStorage.getItem('student');
    let parsedStudent = JSON.parse(student);
    student = {
      ...parsedStudent,
      mail: inputEmail.current.value,
    };
    window.localStorage.removeItem('student');
    window.localStorage.setItem('student', JSON.stringify(student));
    db.collection('data')
      .doc(db_id)
      .update(student)
      .then((docRef) => setMail(true));
  };

  useEffect(() => {
    let student = window.localStorage.getItem('student');
    let parsedStudent = JSON.parse(student);
    if (student != null && !parsedStudent.mail) {
      db.collection('data')
        .add(parsedStudent)
        .then((docRef) => (db_id = docRef.id));
    } else {
      setMail(true);
    }
  }, []);

  return (
    <>
      <div className="final">
        <div className="final__title">
          <div className="final__title__rect"></div>
          <h1>¡Felicidades!</h1>
        </div>
        <div className="final__subtitle">
          <p>
            {mail
              ? 'Gracias, te estaremos contactando.'
              : 'Completaste un sello azul. ¿Gustas que te enviemos confirmación a tu correo? Ingrésalo aquí:'}
          </p>
        </div>
        {mail ? (
          ''
        ) : (
          <div className="final__confirm">
            <Input reference={inputEmail} placeholder="Tu respuesta..." />
            <Button method={handleClick} text="Continuar"></Button>
          </div>
        )}
        <footer className="final__footer">
          <p>
            Programador por:
            <br />
            Karl Aase
            <br />
            Alek Castillo
            <br />
            Andre Lopez
            <br />
            Roy Vargas
          </p>
          <img src={LogoUlacit} alt="Logo Ulacit" />
        </footer>
      </div>
    </>
  );
};

export default PeopleAnswerSelloPage;
