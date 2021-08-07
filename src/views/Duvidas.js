import React from 'react'
import {ReactComponent as Question} from '../assets/darkQuestion.svg'
import { Questions } from '../components/Questions'

function Duvidas() {
  return (
    <div>
    <div className='title'>
      <Question className='icon'/>
      <h1>dúvidas frequentes</h1>
    </div>
    <Questions title='Quais as atividades extra-curriculares que são consideradas atividades complementares?'
     content= 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with'/>
    </div>
  );
}

export default Duvidas
