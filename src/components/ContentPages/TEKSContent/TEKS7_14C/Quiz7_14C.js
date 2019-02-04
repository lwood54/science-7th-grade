import React from "react";

import Obj7_14C from "./Obj7_14C";

import QuizTemplate from "../../../Templates/QuizTemplate/QuizTemplate";

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.14 C';
// });
const quiz7_14C = () => {
	return <QuizTemplate {...Obj7_14C} unitMain="/unit3_1" />;
};

export default quiz7_14C;
