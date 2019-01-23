import React from "react";
import Paper from "@material-ui/core/Paper";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

const ContentPageTemplate = props => {
  // I want to put this Component into each page and pass the title to the top navbar when it loads
  // If I put the nav bar in here and make it similar to the home page and simply put this at the top of each page and
  // add the props.title based on the page that I'm on.

  const listOfCards = props.TEKSArray.map(teksObj => {
    const { classes } = props;
    console.log(classes);
    // LOOK IN TO HOW TO MORE EASILY MANIPULATE build in Material-UI classes
    return (
      <div>
        <Paper>
          <h2>{teksObj.teksNum}</h2>
          <h3>{teksObj.teksLabel}</h3>
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
