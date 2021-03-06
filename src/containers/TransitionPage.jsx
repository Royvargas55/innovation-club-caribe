import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BeachSVG from '../components/BeachSVG';

// Styles
import '../styles/components/TransitionPage.scss';

const TransitionPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/real-answer');
    }, 3500);
  }, []);

  return (
    <>
      <div className="transition page">
        <h1 className="transition__title">¿Tienes la respuesta correcta?</h1>
      </div>
      <BeachSVG />
    </>
  );
};

export default TransitionPage;
