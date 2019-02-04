import React from "react";

import Obj7_5B from "./Obj7_5B";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.5 B';
// });
const quiz7_5B = () => {
	return <QuizTemplate {...Obj7_5B} unitMain="/unit5_2" />;
};

export default quiz7_5B;
