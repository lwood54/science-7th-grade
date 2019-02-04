import React from "react";
import Paper from "@material-ui/core/Paper";

import Unit2_2Obj from "./Unit2_2Obj";
import NavigationBar from "../../../Navigation/NavigationBar/NavigationBar";
import UnitPageTemplate from "../../../Templates/UnitPageTemplate/UnitPageTemplate";
import cls from "./Unit2_2.module.css";

const unit2_2 = props => {
	// search for keys this way instead of hard coding array index because I may change that in the future.
	const quizletLink = Unit2_2Obj.vertMenuItems
		.map(item => {
			return item["Quizlet"];
		})
		.join("");
	const gameLink = Unit2_2Obj.vertMenuItems
		.map(item => {
			return item["Game"];
		})
		.join("");
	const homeLink = Unit2_2Obj.vertMenuItems
		.map(item => {
			return item["Home"];
		})
		.join("");
	return (
		<React.Fragment>
			<NavigationBar
				title={Unit2_2Obj.title}
				gameLink={gameLink}
				quizletLink={quizletLink}
				homeLink={homeLink}
				TEKSArray={Unit2_2Obj.TEKS}
			/>
			<UnitPageTemplate {...Unit2_2Obj}>
				<p>Content coming soon!</p>
			</UnitPageTemplate>
		</React.Fragment>
	);
};

export default unit2_2;
