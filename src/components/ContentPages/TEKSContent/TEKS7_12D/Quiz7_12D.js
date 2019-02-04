import React from "react";

import Obj7_12D from "./Obj7_12D";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.12 D';
// });
const quiz7_12D = () => {
	return <QuizTemplate {...Obj7_12D} unitMain="/unit2_1" />;
};

export default quiz7_12D;
