import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.8 A';
});
const quiz7_8A = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_8A;
