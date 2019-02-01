import React from "react";

import Notes10C from "../../TEKSContent/TEKS7_10C/Notes7_10C";
import Notes8A from "../../TEKSContent/TEKS7_8A/Notes7_8A";

import Unit4_2Obj from "./Unit4_2Obj";
import UnitPageTemplate from "../../../Templates/UnitPageTemplate/UnitPageTemplate";

const unit4_2 = props => {
	return (
		<UnitPageTemplate {...Unit4_2Obj}>
			<Notes8A />
			<Notes10C />
		</UnitPageTemplate>
	);
};

export default unit4_2;
