import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const completeScreen = props => {
    return (
        <div>
            <React.Fragment>
                <h2>
                    {
                        "Great job, you've gotten all the practice questions correct!"
                    }
                </h2>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        width: '100%'
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        style={{
                            width: '75%',
                            margin: 'auto'
                        }}
                    >
                        Home
                    </Button>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default completeScreen;
