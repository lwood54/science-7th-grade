import React from 'react';

import Obj7_10A from './Obj7_10A';

import QuizTemplate from '../../../Templates/QuizTemplate/QuizTemplate';

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.10 A';
// });
const quiz7_10A = () => {
        return <QuizTemplate {...Obj7_10A} unitMain="/unit5_1" />;
};

export default quiz7_10A;
