import React from 'react';

import Obj7_10B from './Obj7_10B';

import QuizTemplate from '../../../Templates/QuizTemplate/QuizTemplate';

// const teksObj = TEKS.find(item => {
//         return item['teksNum'] === '7.10 B';
// });
const quiz7_10B = () => {
        return <QuizTemplate {...Obj7_10B} unitMain="/unit5_1" />;
};

export default quiz7_10B;
