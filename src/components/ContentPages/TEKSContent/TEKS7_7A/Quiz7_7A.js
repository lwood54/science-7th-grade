import React from "react";

import Obj7_7A from "./Obj7_7A";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.7 A';
// });
const quiz7_7A = () => {
	return <QuizTemplate {...Obj7_7A} unitMain="/unit1_2" />;
};

export default quiz7_7A;
