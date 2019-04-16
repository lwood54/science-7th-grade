import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import Button from '@material-ui/core/Button';

const linkStyle = {
        textDecoration: 'none',
        fontSize: '1.2rem',
        color: '#e0f2f1'
};
const buttonStyle = {
        margin: '0px 5px'
};

const ComingSoon = () => {
        return (
                <div>
                        <NavigationBar
                                title="Coming Soon"
                                gameLink={null}
                                quizletLink={null}
                                homeLink={'/'}
                                TEKSArray={null}
                        />
                        <h1>The content for this unit is not yet finished.</h1>
                        <h3>The following units are ready for use:</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" style={buttonStyle}>
                                        <Link to="/unit1_1" style={linkStyle}>
                                                Unit 1.1
                                        </Link>
                                </Button>
                                <Button variant="contained" color="primary" style={buttonStyle}>
                                        <Link to="unit4_2" style={linkStyle}>
                                                Unit 4.2
                                        </Link>
                                </Button>
                                <Button variant="contained" color="primary" style={buttonStyle}>
                                        <Link to="unit5_1" style={linkStyle}>
                                                Unit 5.1
                                        </Link>
                                </Button>
                                <Button variant="contained" color="primary" style={buttonStyle}>
                                        <Link to="unit5_2" style={linkStyle}>
                                                Unit 5.2
                                        </Link>
                                </Button>
                                <Button variant="contained" color="primary" style={buttonStyle}>
                                        <Link to="unit6_1" style={linkStyle}>
                                                Unit 6.1
                                        </Link>
                                </Button>
                        </div>
                </div>
        );
};

export default ComingSoon;
