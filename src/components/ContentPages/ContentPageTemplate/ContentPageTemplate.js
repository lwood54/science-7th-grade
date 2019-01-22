import React from 'react';

const ContentPageTemplate = props => {
    // I want to put this Component into each page and pass the title to the top navbar when it loads
    // If I put the nav bar in here and make it similar to the home page and simply put this at the top of each page and
    // add the props.title based on the page that I'm on.
    return (
        <div>
            <h1>NavBar will go here...this may work for all pages.</h1>
        </div>
    );
};

export default ContentPageTemplate;
