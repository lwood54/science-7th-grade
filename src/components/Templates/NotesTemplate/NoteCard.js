import React from 'react';

import cls from './NotesTemplate.module.css';

const NoteCard = props => {
        if (props.source) {
                if (props.imageDir === 'left') {
                        return (
                                <div className={cls.NotesContainer}>
                                        <div className={cls.ImageContainer}>
                                                <img
                                                        className={cls.Image}
                                                        src={props.source}
                                                        alt={props.altImgTitle}
                                                />
                                        </div>
                                        <div className={cls.Notes}>
                                                <p>{props.children}</p>
                                        </div>
                                </div>
                        );
                } else if (props.imageDir === 'right') {
                        return (
                                <div className={cls.NotesContainer}>
                                        <div className={cls.Notes}>
                                                <p>{props.children}</p>
                                        </div>
                                        <div className={cls.ImageContainer}>
                                                <img
                                                        className={cls.Image}
                                                        src={props.source}
                                                        alt={props.altImgTitle}
                                                />
                                        </div>
                                </div>
                        );
                }
        } else {
                return (
                        <div className={cls.NotesContainer}>
                                <div className={cls.textOnly}>
                                        <div>{props.children}</div>
                                </div>
                        </div>
                );
        }
};

export default NoteCard;
