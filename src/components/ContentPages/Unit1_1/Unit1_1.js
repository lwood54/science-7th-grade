import React from "react";
import Paper from "@material-ui/core/Paper";

import Unit1_1Obj from "./Unit1_1Obj";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

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
      <NavigationBar
        title={Unit1_1Obj.title}
        gameLink={gameLink}
        quizletLink={quizletLink}
        homeLink={homeLink}
        TEKSArray={Unit1_1Obj.TEKS}
      />
      <Paper>
        <h1>{Unit1_1Obj.title}</h1>
        <p>It's probably better to just customize each page</p>
      </Paper>
    </React.Fragment>
  );
};

export default unit1_1;
