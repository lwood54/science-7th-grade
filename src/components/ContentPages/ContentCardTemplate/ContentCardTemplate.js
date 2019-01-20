import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
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

import contentCardTemplateClasses from './ContentCardTemplate.module.css';

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

export class ContentBase extends Component {
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
        this.setState({
            expandedVertMenu: !vertMenuStatus,
            anchorEl: currentAnchorEl ? null : event.currentTarget
        });
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    render() {
        const { classes, vertMenuItems } = this.props;
        const menuItems = vertMenuItems.map(item => {
            const k = Object.keys(item)[0]; // access key for the object in this array
            if (item[k].includes('http')) {
                // check for external address and use <a> or <Link>
                return (
                    <a
                        href={item[k]}
                        key={k}
                        className={contentCardTemplateClasses.Link}
                    >
                        {k}
                    </a>
                );
            } else {
                return (
                    <Link
                        to={item[k]}
                        className={contentCardTemplateClasses.Link}
                        key={k}
                    >
                        {k}
                    </Link>
                );
            }
        });
        const teks = this.props.TEKS.map(item => {
            return (
                <div style={{ marginBottom: '15px' }} key={item.teksNum}>
                    <div style={{ width: '100%' }}>
                        <em>{item.teksNum}</em>
                    </div>
                    <a
                        href={item.ssLink}
                        target="blank"
                        className={contentCardTemplateClasses.ExternalLink}
                    >
                        {item.teksContent}
                    </a>
                </div>
            );
        });
        const vocabList = this.props.vocabList.map(word => {
            return <ListItem key={word}>{word}</ListItem>;
        });
        return (
            <React.Fragment>
                <Card className={contentCardTemplateClasses.BaseGap}>
                    <CardHeader
                        action={
                            // allows placement of content in header
                            <IconButton onClick={this.vertMenuHandler}>
                                <MoreVertIcon />
                                <Menu
                                    anchorEl={this.state.anchorEl}
                                    open={this.state.expandedVertMenu}
                                    onClose={this.vertMenuHandler}
                                    className={
                                        contentCardTemplateClasses.VertMenu
                                    }
                                >
                                    {menuItems}
                                </Menu>
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={this.props.subtitle}
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.imageLocation}
                        title={this.props.imgTitle}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {this.props.summary}
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
                            {teks}
                            <Typography component="h5">
                                <em>Essential Vocabulary</em>
                                <List>{vocabList}</List>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContentBase);
