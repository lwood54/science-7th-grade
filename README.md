## When adding new unit content:

-   make sure to
    -   create the Notes.js file in the TEKS specific folder
    -   copy paste from previous Notes.js file, then update with new TEKS objects and export name and title\
    -   import the Notes.js file for whatever TEKS will be used into the Unit.js file
    -   wrap the Notes.js component with the <UnitPageTemplate>

## Notes.js blueprint:

```
import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_5A from './Obj7_5A';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_5A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_5A.teksNum}
                        teksContent={Obj7_5A.teksContent}
                        teksQuiz={Obj7_5A.teksQuiz}
                        title="INPUT TITLE HERE"
                >
                        <h1>notes7_5A</h1>
                </NotesTemplate>
        );
};

export default notes7_5A;
```

## When adding quiz questions to the TEKS object:

In file like: Obj7_10A.js
inside the object, you have a questions key

```
questions: [
        {
                text: '',
                answers: [
                        {wrong1: ''},
                        {wrong2: ''},
                        {wrong3: ''},
                        {correct: ''}
                ],
                image: require('') // leave as an empty string if there is no image needed
        }
]
```

## Recirect for Netlify

good resource: https://stackoverflow.com/questions/55990467/catch-all-redirect-for-create-react-app-in-netlify
