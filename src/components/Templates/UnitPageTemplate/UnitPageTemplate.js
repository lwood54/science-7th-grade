import React, { Component } from "react";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

//////////////////// REQUIRED PROPS /////////////////////////
// UnitObject --> can pass like {...ObjectName} //

class unitPageTemplate extends Component {
	// this ensures that unit page will load with user viewing the top instead
	// of viewing where the page was when the linnk was clicked on the home page.
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		// search for keys this way instead of hard coding array index because I may change that in the future.
		const quizletLink = this.props.vertMenuItems
			.map(item => {
				return item["Quizlet"];
			})
			.join("");
		const gameLink = this.props.vertMenuItems
			.map(item => {
				return item["Game"];
			})
			.join("");
		const homeLink = this.props.vertMenuItems
			.map(item => {
				return item["Home"];
			})
			.join("");
		return (
			<div>
				<NavigationBar
					title={this.props.title}
					gameLink={gameLink}
					quizletLink={quizletLink}
					homeLink={homeLink}
					TEKSArray={this.props.TEKS}
				/>
				{this.props.children}
			</div>
		);
	}
}

export default unitPageTemplate;
