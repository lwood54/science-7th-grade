import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_10B from './Obj7_10B';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import biodiversity from './images/biodiversity.jpg';
import desert_roots from './images/desert_roots.jpg';
import camel from './images/camel.jpg';
import pitcher_plant from './images/pitcher_plant.jpg';
import camouflaged from './images/camouflaged.jpg';

const notes7_10B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_10B.teksNum}
                        teksContent={Obj7_10B.teksContent}
                        teksQuiz={Obj7_10B.teksQuiz}
                        title={Obj7_10B.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Biodiversity</em> is the variety of life in the world or
                                                in a given environment. High biodiversity helps ensure the
                                                sustainability of an ecosystem.
                                        </p>
                                        <p>
                                                <em>Sustainability</em> is when an ecosystem can be maintined
                                                at a healthy level. Resources are provided and consumed by
                                                living things at a rate that is in balance. The system is in
                                                homeostasis.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={biodiversity} alt="biodiversity" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                When an ecosystem has higher biodiversity, then there are a
                                                greater variety of genes in that ecosystem. If there are minor
                                                or major changes to an ecosystem, having a greater variety of
                                                organisms increases the likelihood that some organisms are
                                                able to adapt over time.
                                        </p>
                                        <p>
                                                The problem currently facing many ecosystems is that humans
                                                are both decreasing the biodiversity by poaching, habitat
                                                destruction, or environmental degradation, while also
                                                affecting things like climate, nutrients, toxic chemicals in
                                                the groundwater, and water pH.
                                        </p>
                                        <p>
                                                This combination reduces the chanced that an ecosystem can
                                                recover in the longterm. There may not be enough variety in
                                                genes to allow for organisms to adapt to the rapid changes
                                                they face. The fear is that this threat could cause mass
                                                extinctions.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Desert plants</em> have to survive high heat and low
                                                moisture. Some plants evolved to have spines instead of
                                                leaves, a waxy surface to prevent water loss, and long roots
                                                to absorb as much water as possible.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={desert_roots} alt="desert roots" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={camel} alt="camel" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Desert animals</em> adapt to survive the same conditions.
                                                Some did this with behavioral changes like coming out at night
                                                and hunting. Others did this with physical adaptations like
                                                camels storing extra fat in their hump or having kidneys that
                                                produce much more concentrated urine in order for the camel to
                                                use water more efficiently.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img src={pitcher_plant} alt="pitcher plant" className={cls.Image} />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Tropical rainforest plants</em> get plenty of energy and
                                                water, so they have evolved for extreme competition with each
                                                other. They are very specialized. Plants often have broad
                                                leaves, grow really tall, or have evolved to attract very
                                                specific animals.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                <em>Tropical rainforest animals</em> have plenty of food and
                                                water, so their adaptations came as a result of competing over
                                                space, mates, and protection.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img src={camouflaged} alt="camouflaged" className={cls.Image} />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_10B;
