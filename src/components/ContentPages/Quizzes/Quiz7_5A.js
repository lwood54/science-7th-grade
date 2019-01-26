import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.5 A';
});
console.log('TEKS Object', teksObj);
const quiz7_5A = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_5A;
