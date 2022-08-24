import React, {useState} from 'react'
import './stylesheets/mainContent.css';
import CardList from './cardList';
import Slide from './slide';


function MainContent({setFooter}) {
  const [genere, setGenere] = useState('1');

  const handleClick = (i) =>{
    setGenere(i);
  }

  return (
    <div className='mainContent'>
        <Slide />
        <div className='genereContainer'>
          <div className='genereMenu'>
              <span onClick={() => handleClick('1')} className='genereTabs' >Action</span>
              <span onClick={() => handleClick('4')} className='genereTabs' >Comedy</span>
              <span onClick={() => handleClick('10')} className='genereTabs'>Fantasy</span>
              <span onClick={() => handleClick('27')} className='genereTabs'>Shounen</span>
              <span onClick={() => handleClick('30')} className='genereTabs'>Sports</span>
              <span onClick={() => handleClick('36')} className='genereTabs SOL'>Slice of Life</span>
          </div>
        </div>
        <CardList genere={genere} setFooter={setFooter}/>
    </div>
  )
}

export default MainContent