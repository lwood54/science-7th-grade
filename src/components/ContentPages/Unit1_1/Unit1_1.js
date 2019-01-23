import React from "react";

import Unit1_1Obj from "./Unit1_1Obj";
import ContentPageTemplate from "../ContentPageTemplate/ContentPageTemplate";
import TEKS from "../TEKS";

// Custom identify specific TEKS that will be connected to this Unit Object
// SUBJECT TO CHANGE
// this variable may need to be changed in the future if they TEKS get rearranged by unit
console.log("TEKS: ", TEKS);
const TEKSArray = [TEKS[18], TEKS[20]];

const unit1_1 = props => {
  // search for keys this way instead of hard coding array index because I may change that in the future.
  const quizletLink = Unit1_1Obj.vertMenuItems
    .map(item => {
      return item["Quizlet"];
    })
    .join("");
  const gameLink = Unit1_1Obj.vertMenuItems
    .map(item => {
      return item["Game"];
    })
    .join("");
  const homeLink = Unit1_1Obj.vertMenuItems
    .map(item => {
      return item["Home"];
    })
    .join("");
  return (
    <React.Fragment>
      <ContentPageTemplate
        title={Unit1_1Obj.title}
        gameLink={gameLink}
        quizletLink={quizletLink}
        homeLink={homeLink}
        TEKSArray={TEKSArray}
      />
    </React.Fragment>
  );
};

export default unit1_1;
