import React from "react";

import Obj7_9A from "./Obj7_9A";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.9 A';
// });
const quiz7_9A = () => {
	return <QuizTemplate {...Obj7_9A} unitMain="/unit6_2" />;
};

export default quiz7_9A;
