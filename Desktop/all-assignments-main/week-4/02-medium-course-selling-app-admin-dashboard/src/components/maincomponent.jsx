import React from "react";
import Courses from "./courses";
import emojipedia from "../coursesdetails";

function MainComponent() {
  return (
    <div className="main">
<h1>welcome to SkillSpire</h1>
<dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <Courses
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );

  }

  export default MainComponent;