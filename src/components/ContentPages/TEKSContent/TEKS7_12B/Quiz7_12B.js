import React from "react";

import Obj7_12B from "./Obj7_12B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.12 B';
// });
const quiz7_12B = () => {
	return <QuizTemplate {...Obj7_12B} unitMain="/unit2_2" />;
};

export default quiz7_12B;
