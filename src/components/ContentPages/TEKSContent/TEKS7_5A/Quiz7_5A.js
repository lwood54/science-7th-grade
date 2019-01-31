import React from 'react';

import TEKS from '../TEKS';

import QuizTemplate from './QuizTemplate/QuizTemplate';
// import QuizTemplate2 from './QuizTemplate/QuizTemplate2';

const teksObj = TEKS.find(item => {
    return item['teksNum'] === '7.5 A';
});
const quiz7_5A = () => {
    return <QuizTemplate {...teksObj} />;
};

export default quiz7_5A;
