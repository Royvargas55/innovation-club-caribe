import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components
import { Carousel } from '../components/Carousel';
import Button from '../components/Button/Button';

// Styles
import '../styles/components/PeopleAnswerQuestionsPage.scss';

// TO DO: Consume API
let db = firebase.firestore();
import { QuestionData } from '../assets/QuestionData';

const MockData = [];

const PeopleAnswerQuestionsPage = () => {
  let [data, setData] = useState([
    {
      question: 'Cargando...',
      answer: 'Cargando....',
    },
  ]);
  useEffect(() => {
    db.collection('preguntas')
      .where('pregunta', '<', 6)
      .limit(10)
      .get()
      .then((docs) => {
        let new_data = [];
        docs.forEach((doc) => {
          let temp_doc = doc.data();
          if (temp_doc.pregunta != 1 && new_data.length < 6) {
            new_data.push({
              question: QuestionData[temp_doc.pregunta].question,
              answer: temp_doc.respuesta,
            });
          }
        });
        setData(new_data);
      });
  });
  return (
    <>
      <div className="peoplequestion">
        <div className="peoplequestion__content">
          <Carousel questions={data} />
        </div>
        <div className="peoplequestion__button">
          <Link to="/people-answer/entrepreneurships">
            <Button text="Continuar"></Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PeopleAnswerQuestionsPage;
