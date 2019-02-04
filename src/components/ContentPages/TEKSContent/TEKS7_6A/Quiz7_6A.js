import React from "react";

import Obj7_6A from "./Obj7_6A";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.6 A';
// });
const quiz7_6A = () => {
	return <QuizTemplate {...Obj7_6A} unitMain="/unit1_2" />;
};

export default quiz7_6A;
