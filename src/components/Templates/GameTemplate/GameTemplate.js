import React, { Component } from "react";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

import cls from "./GameTemplate.module.css";

// need to import game object that will be passed in the props
// and used for rendering the cards and column headings.

class DragNDrop extends Component {
	render() {
		const quizletLink = this.props.vertMenuItems
			.map(item => {
				return item["Quizlet"];
			})
			.join("");
		const homeLink = this.props.vertMenuItems
			.map(item => {
				return item["Home"];
			})
			.join("");
		const unitMain = this.props.vertMenuItems
			.map(item => {
				return item["Unit Page"];
			})
			.join("");
		// get the object to be rendered with heading at the top of a column
		// eventually i will need to have a stack of cards that include all of the
		// other parts of the clumn objects that will also have to be
		// drag n drop enabled, the targets will have to be a grid of empty boxes
		const col1 = Object.entries(this.props.game.gameColumn1).map(item => item);
		console.log(col1);
		return (
			<div>
				<NavigationBar
					title={this.props.title}
					quizletLink={quizletLink}
					homeLink={homeLink}
					unitMain={unitMain}
				/>
				<h1 className={cls.Title}>Game Review 4.2</h1>
				<div className={cls.Target}>
					<p>{this.props.game.gameColumn1.heading}</p>
				</div>
			</div>
		);
	}
}

export default DragNDrop;
