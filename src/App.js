import React, {useState} from 'react';
import questions from './data';
import Question from './Components/Question';

function App() {

  const [infos , setInfos] = useState(questions)
  
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {infos.map(info => (
            <Question key={info.id} {...info} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
