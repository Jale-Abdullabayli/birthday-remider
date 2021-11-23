import React, { useState } from "react";
import './birthday.scss'
import {BirthdayLists} from './Birthday';



function BirthdayList() {
  const [birthday, setBirthday] = useState(BirthdayLists);
  const clear = ()=>{
    setBirthday([])
  }
  return (
    <div>
      <h3 className='countOfBirthday'>{birthday.length} birthdays today</h3>
      {birthday.map((person) => (
        <div key={person.name} className="person">
          <img src={person.imgUrl} />
          <div className="content">
            <h4>{person.name}</h4>
            <span>{person.age} years</span>
          </div>
        </div>
      ))}

      <button className='clearButton' onClick={clear}>Clear All</button>
    </div>
  );
}

export default BirthdayList;
