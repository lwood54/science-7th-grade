import React from "react";

import Unit2_1Obj from "./Unit2_1Obj";
import NavigationBar from "../../../Navigation/NavigationBar/NavigationBar";
import UnitPageTemplate from "../../../Templates/UnitPageTemplate/UnitPageTemplate";
import cls from "./Unit2_1.module.css";

const unit2_1 = props => {
	// search for keys this way instead of hard coding array index because I may change that in the future.
	const quizletLink = Unit2_1Obj.vertMenuItems
		.map(item => {
			return item["Quizlet"];
		})
		.join("");
	const gameLink = Unit2_1Obj.vertMenuItems
		.map(item => {
			return item["Game"];
		})
		.join("");
	const homeLink = Unit2_1Obj.vertMenuItems
		.map(item => {
			return item["Home"];
		})
		.join("");
	return (
		<React.Fragment>
			<NavigationBar
				title={Unit2_1Obj.title}
				gameLink={gameLink}
				quizletLink={quizletLink}
				homeLink={homeLink}
				TEKSArray={Unit2_1Obj.TEKS}
			/>
			<UnitPageTemplate {...Unit2_1Obj}>
				<p>Content coming soon!</p>
			</UnitPageTemplate>
		</React.Fragment>
	);
};

export default unit2_1;
