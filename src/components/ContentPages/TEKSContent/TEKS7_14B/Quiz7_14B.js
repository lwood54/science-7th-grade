import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.14 B';
});
const quiz7_14B = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_14B;
