import React from "react";

import Obj7_13A from "./Obj7_13A";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.13 A';
// });
const quiz7_13A = () => {
	return <QuizTemplate {...Obj7_13A} unitMain="/unit1_2" />;
};

export default quiz7_13A;
