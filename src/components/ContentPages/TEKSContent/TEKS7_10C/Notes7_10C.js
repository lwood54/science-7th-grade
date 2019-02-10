import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_10C from './Obj7_10C';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import overgrown from './images/overgrown.jpg';
import primary_succession from './images/primary_succession.jpg';
import lichens_on_rock from './images/lichens_on_rock.jpg';
import lichens2 from './images/lichens2.jpg';
import lichens_symbiosis from './images/lichens_symbiosis.gif';
import secondary_succession from './images/secondary_succession.jpg';

const notes7_10C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_10C.teksNum}
                        teksQuiz={Obj7_10C.teksQuiz}
                        teksContent={Obj7_10C.teksContent}
                        title="Ecological Succession"
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={overgrown} alt="overgrown building" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p className={cls.paragraphContent}>
                                                <em>Ecological succession</em> occurs whenever an ecosystem is
                                                not in homeostasis. How long and at what starting point depend
                                                on the nature of the disturbance.
                                        </p>
                                </div>
                        </div>

                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <h3 className={cls.Subheading}>
                                                There are two main types of ecological succession.
                                        </h3>
                                        <ul>
                                                <li>Primary Succession</li>
                                                <li>Secondary Succession</li>
                                        </ul>
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                The simplest way to think about the difference is that primary
                                                succession starts with bare rock and secondary succesison
                                                starts with soil.
                                        </p>
                                </div>
                        </div>

                        <h3 className={cls.Subheading}>Primary Succession</h3>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Primary succession</em> occurs when an ecosystem is
                                                starting from bare rock. Whether the bare rock is due to human
                                                causes or natural events, such as lava flow or earthquakes,
                                                primary succession must begin by breaking down bare rock.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={primary_succession}
                                                alt="primary succession"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={lichens_on_rock} alt="lichens" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Pioneer Species</em> are those species that are the first
                                                organisms to establish an ecosystem.
                                        </p>
                                        <p>
                                                In <em>primary succession</em>, the most important type of
                                                pioneer species are called <em>lichens</em>.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <p className={cls.Notes}>
                                        Lichens have a unique ability to grow on rock, along with many other
                                        surfaces. They can release chemicals that help dissolve rock so that
                                        the lichens can absorb minerals.
                                </p>
                                <div className={cls.ImageContainer}>
                                        <img src={lichens2} alt="lichens" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={lichens_symbiosis}
                                                alt="lichens symbiosis"
                                                className={cls.Image}
                                        />
                                </div>
                                <p className={cls.Notes}>
                                        Lichens are technically a combination of algae and fungi living in a
                                        symbiotic relationship. It is their unique ability to convert radiant
                                        energy to sugar, while also being able to get nutrients from breaking
                                        down organic matter, that allows them to thrive in otherwise
                                        inhospitable environments.
                                </p>
                        </div>
                        <h3 className={cls.Subheading}>Secondary Succession</h3>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Secondary succession</em> occurs when an event causes an
                                                ecosystem to restart, but when soil is already present.
                                                Pioneer species for secondary succession may include{' '}
                                                <em>ferns, mosses, and small weeds</em>. It really depends on
                                                the environment, but a common characteristic is that these
                                                pioneer species can grow in shallow possibly low nutrient
                                                soil.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={secondary_succession}
                                                alt="secondary succession"
                                                className={cls.Image}
                                        />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_10C;
