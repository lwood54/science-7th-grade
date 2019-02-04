import React from "react";

import Obj7_12F from "./Obj7_12F";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.12 F';
// });
const quiz7_12F = () => {
	return <QuizTemplate {...Obj7_12F} unitMain="/unit1_1" />;
};

export default quiz7_12F;
