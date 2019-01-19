import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

import ContentBase from '../ContentBase/ContentBase';
import contentBaseClasses from '../ContentBase/ContentBase.module.css';
import cls from './HomePage.module.css';

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    actions: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
});

class HomePage extends Component {
    state = {
        expandedCard: false,
        expandedVertMenu: false,
        anchorEl: null
    };

    handleExpandClick = () => {
        const expandedCardStatus = this.state.expandedCard;
        this.setState({
            expandedCard: !expandedCardStatus
        });
    };

    vertMenuHandler = event => {
        const vertMenuStatus = this.state.expandedVertMenu;
        const currentAnchorEl = this.state.anchorEl;
        console.log(currentAnchorEl);
        this.setState({
            expandedVertMenu: !vertMenuStatus,
            anchorEl: currentAnchorEl ? null : event.currentTarget
        });
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ContentBase pageTitle={'Home Page'} />
                <Card>
                    <CardHeader
                        action={
                            // allows placement of content in header
                            <IconButton onClick={this.vertMenuHandler}>
                                <MoreVertIcon />
                                <Menu
                                    anchorEl={this.state.anchorEl}
                                    open={this.state.expandedVertMenu}
                                    onClose={this.vertMenuHandler}
                                    className={cls.Menu}
                                >
                                    <Link to="/" className={cls.Link}>
                                        <Button>Home</Button>
                                    </Link>
                                    <Link to="/unit1_1" className={cls.Link}>
                                        <Button>Unit 1.1 Page</Button>
                                    </Link>
                                </Menu>
                            </IconButton>
                        }
                        title="Unit 1.1"
                        subheader="Cell Theory and Levels of Organization"
                    />
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/dividing_cells.jpg"
                        title="cell division"
                    />
                    <CardContent>
                        <Typography variant="body2">
                            In this unit we will cover the 3 main pars of cell
                            theory and observe the levels of organization that
                            make up cells in living things.
                        </Typography>
                    </CardContent>
                    <CardActions
                        className={classes.actions}
                        disableActionSpacing
                    >
                        <IconButton
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expandedCard}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse
                        in={this.state.expandedCard}
                        timeout="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <h3>TEKS:</h3>
                            <Typography paragraph>
                                <em>7.12 C (supporting standard)</em>
                                <a
                                    href="https://docs.google.com/document/d/13mI59xChv-9YyWHQKEKkewQ9UqlIJcVQn6ZLZVXiylo/edit#bookmark=id.ujaoy51l0ke4"
                                    target="blank"
                                    className={contentBaseClasses.ExternalLink}
                                >
                                    recognize levels of organization in plants
                                    and animals, including cells, tissues,
                                    organs, organ systems, and organisms
                                </a>
                            </Typography>
                            <Typography paragraph>
                                <em>7.12 C (supporting standard)</em>
                                <a
                                    href="https://docs.google.com/document/d/13mI59xChv-9YyWHQKEKkewQ9UqlIJcVQn6ZLZVXiylo/edit#bookmark=id.iuaa2z98c576"
                                    target="blank"
                                    className={contentBaseClasses.ExternalLink}
                                >
                                    recognize the components of cell theory
                                </a>
                            </Typography>
                            <Typography component="h5">
                                <em>Essential Vocabulary</em>
                                <List>
                                    <ListItem>Cell Theory</ListItem>
                                    <ListItem>Prokaryotic</ListItem>
                                    <ListItem>Eukaryotic</ListItem>
                                    <ListItem>Energy</ListItem>
                                    <ListItem>DNA</ListItem>
                                    <ListItem>Nucleus</ListItem>
                                    <ListItem>Cell</ListItem>
                                    <ListItem>Tissue</ListItem>
                                    <ListItem>Organ</ListItem>
                                    <ListItem>Organ System</ListItem>
                                    <ListItem>Organism</ListItem>
                                </List>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
