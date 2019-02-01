import React from "react";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

//////////////////// REQUIRED PROPS /////////////////////////
// UnitObject --> can pass like {...ObjectName} //

const unitPageTemplate = props => {
	// search for keys this way instead of hard coding array index because I may change that in the future.
	const quizletLink = props.vertMenuItems
		.map(item => {
			return item["Quizlet"];
		})
		.join("");
	const gameLink = props.vertMenuItems
		.map(item => {
			return item["Game"];
		})
		.join("");
	const homeLink = props.vertMenuItems
		.map(item => {
			return item["Home"];
		})
		.join("");
	return (
		<div>
			<NavigationBar
				title={props.title}
				gameLink={gameLink}
				quizletLink={quizletLink}
				homeLink={homeLink}
				TEKSArray={props.TEKS}
			/>
			{props.children}
		</div>
	);
};

export default unitPageTemplate;
