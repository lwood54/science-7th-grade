import React from "react";
import Paper from "@material-ui/core/Paper";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

const ContentPageTemplate = props => {
  //  TODO: LOOK IN TO HOW TO MORE EASILY MANIPULATE build in Material-UI classes

  const listOfCards = props.TEKSArray.map(teksObj => {
    console.log("INSIDE ContentPageTemplate: ", teksObj);
    return (
      <div key={teksObj.teksNum}>
        <Paper>
          <h2>{teksObj.teksNum}</h2>
          <h3>{teksObj.teksLabel}</h3>
          {props.children}
        </Paper>
      </div>
    );
  });
  return (
    <div>
      <NavigationBar
        title={props.title}
        gameLink={props.gameLink}
        quizletLink={props.quizletLink}
        homeLink={props.homeLink}
      />
      {listOfCards}
    </div>
  );
};

export default ContentPageTemplate;
