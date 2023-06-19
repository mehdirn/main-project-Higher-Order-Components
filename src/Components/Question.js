import React, { useState } from 'react';

// + or - icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import withShowToggle from './HOCs/withShowToggle';

const Question = ({title , info , showInfo , handleShowInfos}) => {


  return (
    <article className='question' onClick={handleShowInfos}>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default withShowToggle(Question);
