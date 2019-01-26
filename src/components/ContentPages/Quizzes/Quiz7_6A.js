import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.6 A';
});
const quiz7_6A = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_6A;
