import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.12 F';
});
const quiz7_12F = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_12F;
