import React from "react";
import Paper from "@material-ui/core/Paper";

import Unit4_1Obj from "./Unit4_1Obj";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

import cls from "./Unit4_1.module.css";
import dichot_leaves from "./images/dichot_leaves.jpg";

const unit4_1 = props => {
  // search for keys this way instead of hard coding array index because I may change that in the future.
  const quizletLink = Unit4_1Obj.vertMenuItems
    .map(item => {
      return item["Quizlet"];
    })
    .join("");
  const gameLink = Unit4_1Obj.vertMenuItems
    .map(item => {
      return item["Game"];
    })
    .join("");
  const homeLink = Unit4_1Obj.vertMenuItems
    .map(item => {
      return item["Home"];
    })
    .join("");
  return (
    <div className={cls.ContentContainer}>
      <NavigationBar
        title={Unit4_1Obj.title}
        gameLink={gameLink}
        quizletLink={quizletLink}
        homeLink={homeLink}
        TEKSArray={Unit4_1Obj.TEKS}
      />
      <Paper className={cls.ContentContainer}>
        <h1 className={cls.TEKSTitle}>{Unit4_1Obj.TEKS[0].teksNum}</h1>
        <Link to={Unit4_1Obj.TEKS[0].teksQuiz} className={cls.TEKS}>
          <p style={{ marginTop: "0" }}>{Unit4_1Obj.TEKS[0].teksContent}</p>
        </Link>
        <div className={cls.NotesContainer}>
          <div className={cls.ImageContainerVertical}>
            <img
              src={dichot_leaves}
              alt="Darwin's Finches"
              className={cls.ImageVertical}
            />
          </div>

          <div className={cls.Notes}>
            <h3 style={{ textAlign: "center" }}>
              <em>Dichotomous Keys</em>
            </h3>
            <p>
              A dichotomous key is a tool that a person can use to identify
              organisms in the natural world. Really, they can be created to
              group any set of items, however it is most commonly used for
              identifying things like trees, fish, insects, etc.
            </p>
            <p>"Dichotomous" means dividing into two parts.</p>
          </div>
          <div className={cls.Notes}>
            <p>
              So, at for each pair of identifying characteristics, you must
              choose one that best fits the object and continue on with those
              instructions.
            </p>
            <p>
              A few important things to remember:
              <ul>
                <li>ALWAYS start at 1a when identifying something.</li>
                <li>
                  Only one identifying statment in a pair can be true or you
                  have messed up someone previously.
                </li>
                <li>
                  Continue all steps until you have found the name of the
                  object.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default unit4_1;
