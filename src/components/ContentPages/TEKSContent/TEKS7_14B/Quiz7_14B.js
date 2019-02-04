import React from "react";

import Obj7_14B from "./Obj7_14B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.14 B';
// });
const quiz7_14B = () => {
	return <QuizTemplate {...Obj7_14B} unitMain="/unit3_1" />;
};

export default quiz7_14B;
