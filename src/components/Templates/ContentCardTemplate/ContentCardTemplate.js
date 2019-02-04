import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Notes from "@material-ui/icons/Notes";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

import contentCardTemplateClasses from "./ContentCardTemplate.module.css";

const styles = theme => ({
	card: {
		maxWidth: 450
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	actions: {
		display: "flex"
	}
});

export class ContentCardTemplate extends Component {
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
		const { classes, vertMenuItems } = this.props; // extract from props

		// create menuItems to render in vertical menu drop
		const menuItems = vertMenuItems.map(item => {
			const k = Object.keys(item)[0]; // access key for the object in this array
			if (item[k].includes("http")) {
				// check for external address and use <a> or <Link>
				return (
					<a href={item[k]} key={k} className={contentCardTemplateClasses.Link}>
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

		// create list of teks to render
		const teks = this.props.TEKS.map(item => {
			return (
				<div style={{ marginBottom: "15px" }} key={item.teksNum}>
					<div style={{ width: "100%" }}>
						<em>{item.teksNum}</em>
					</div>
					<Link
						to={item.teksQuiz}
						className={contentCardTemplateClasses.ExternalLink}
					>
						{item.teksContent}
					</Link>
				</div>
			);
		});

		// create list of vocab words to render
		const vocabList = this.props.vocabList.map(word => {
			return <ListItem key={word}>{word}</ListItem>;
		});
		return (
			<React.Fragment>
				<Card
					className={[
						contentCardTemplateClasses.Card,
						this.state.expandedCard
							? contentCardTemplateClasses.ExpandedLock
							: null
					].join(" ")}
				>
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
						title={
							<Link
								to={this.props.pageExtension}
								className={
									contentCardTemplateClasses.PageLink
								}
							>
								{this.props.title}
							</Link>
						}
						subheader={this.props.subtitle}
					/>
					<CardMedia
						className={classes.media}
						image={this.props.imageLocation}
						title={this.props.imgTitle}
					/>
					<CardContent>
						<Typography variant="body2">{this.props.summary}</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
						<Fab
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expandedCard}
							aria-label="Show more"
							color="primary"
							size="small"
						>
							<Notes />
						</Fab>
					</CardActions>

					<Dialog
						open={this.state.expandedCard}
						onClose={this.handleExpandClick}
						onClick={this.handleExpandClick}
						scroll="paper"
						aria-labelledby="scroll-dialog-title"
					>
						<DialogTitle id="scroll-dialog-title">
							{this.props.title} - Details
						</DialogTitle>
						<DialogContent>
							<div>
								<h3>TEKS:</h3>
								{teks}
								<div>
									<em>Essential Vocabulary</em>
									<List>{vocabList}</List>
								</div>
							</div>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={this.handleExpandClick}
								color="primary"
							>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</Card>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(ContentCardTemplate);
