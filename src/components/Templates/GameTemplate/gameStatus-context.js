import React from 'react';

const gameStatusContext = React.createContext({ roundStatus: false, handleRoundOver: () => {} });

export default gameStatusContext;
