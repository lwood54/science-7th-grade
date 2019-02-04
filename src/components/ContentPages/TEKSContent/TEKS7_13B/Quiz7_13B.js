import React from "react";

import Obj7_13B from "./Obj7_13B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.13 B';
// });
const quiz7_13B = () => {
	return <QuizTemplate {...Obj7_13B} unitMain="/unit2_2" />;
};

export default quiz7_13B;
