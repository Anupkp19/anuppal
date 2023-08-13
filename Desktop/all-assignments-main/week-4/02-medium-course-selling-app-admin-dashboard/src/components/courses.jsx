import React from 'react';
import MyComponent from './about';

function Courses(props) {
return (
    <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>{props.description}</dd>
    <button className = "button" > <span>Buy</span> </button>
    <br></br>
    <button className = "atttr"><span>Add to courseList</span> </button>
  </div>  
);

}

export default Courses;