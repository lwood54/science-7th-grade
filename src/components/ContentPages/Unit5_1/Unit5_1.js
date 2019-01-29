import React from "react";
import Paper from "@material-ui/core/Paper";

import Unit5_1Obj from "./Unit5_1Obj";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";
import cls from "./Unit5_1.module.css";

const unit5_1 = props => {
  // search for keys this way instead of hard coding array index because I may change that in the future.
  const quizletLink = Unit5_1Obj.vertMenuItems
    .map(item => {
      return item["Quizlet"];
    })
    .join("");
  const gameLink = Unit5_1Obj.vertMenuItems
    .map(item => {
      return item["Game"];
    })
    .join("");
  const homeLink = Unit5_1Obj.vertMenuItems
    .map(item => {
      return item["Home"];
    })
    .join("");
  return (
    <React.Fragment>
      <NavigationBar
        title={Unit5_1Obj.title}
        gameLink={gameLink}
        quizletLink={quizletLink}
        homeLink={homeLink}
        TEKSArray={Unit5_1Obj.TEKS}
      />
      <Paper className={cls.ContentContainer}>
        <h1>{Unit5_1Obj.title}</h1>
        <p>It's probably better to just customize each page</p>
      </Paper>
    </React.Fragment>
  );
};

export default unit5_1;
