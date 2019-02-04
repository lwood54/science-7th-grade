import React from "react";

import Obj7_8B from "./Obj7_8B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.8 B';
// });
const quiz7_8B = () => {
	return <QuizTemplate {...Obj7_8B} unitMain="/unit6_1" />;
};

export default quiz7_8B;
