import React from "react";

import Obj7_11B from "./Obj7_11B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.11 B';
// });
const quiz7_11B = () => {
	return <QuizTemplate {...Obj7_11B} unitMain="/unit4_1" />;
};

export default quiz7_11B;
