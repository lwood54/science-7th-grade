import React from "react";

import Obj7_11C from "./Obj7_11C";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.11 C';
// });
const quiz7_11C = () => {
	return <QuizTemplate {...Obj7_11C} unitMain="/unit4_1" />;
};

export default quiz7_11C;
