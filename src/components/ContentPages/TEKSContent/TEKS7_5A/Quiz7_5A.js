import React from "react";

import Obj7_5A from "./Obj7_5A";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";
// import QuizTemplate2 from './QuizTemplate/QuizTemplate2';

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.5 A';
// });
const quiz7_5A = () => {
	return <QuizTemplate {...Obj7_5A} unitMain="/unit1_2" />;
};

export default quiz7_5A;
