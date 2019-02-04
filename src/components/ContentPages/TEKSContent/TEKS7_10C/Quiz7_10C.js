import React from "react";

import Obj7_10C from "./Obj7_10C";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.10 C';
// });
const quiz7_10C = () => {
	return <QuizTemplate {...Obj7_10C} unitMain="/unit4_2" />;
};

export default quiz7_10C;
