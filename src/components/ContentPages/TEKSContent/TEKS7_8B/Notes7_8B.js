import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_8B from './Obj7_8B';

import NoteCard from '../../../Templates/NotesTemplate/NoteCard';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import weathering_rust from './images/weathering_rust.jpg';
import w_e_d from './images/w_e_d.jpg';
import ice_wedging from './images/ice_wedging.jpg';
import weathering from './images/weathering.jpg';
import erosion from './images/erosion.jpg';
import delta from './images/delta.jpg';
import himalayan_mountains from './images/himalayan_mountains.jpg';
import arbuckle_mountains from './images/arbuckle_mountains.jpg';

const notes7_8B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_8B.teksNum}
                        teksContent={Obj7_8B.teksContent}
                        teksQuiz={Obj7_8B.teksQuiz}
                        title={Obj7_8B.teksLabel}
                >
                        <NoteCard source={w_e_d} alt="weathering, erosion, deposition" imageDir="left">
                                Weathering, erosion, and deposition are all key players in shaping the face of
                                the Earth. We understand them as eaching having a specific role, but most
                                frequently, they overlap and interact in how they work. We will remember their
                                roles with a simple phrase: "Break It, Take It, Drop It"
                        </NoteCard>

                        <NoteCard source={weathering} alt="weathering" imageDir="right">
                                <em>Weathering</em> is the breakdown of materials of Earth's crust into
                                smaller and smaller pieces. So weathering is the <em>"Break It"</em>.
                        </NoteCard>

                        <NoteCard source={weathering_rust} alt="weathering rust" imageDir="right">
                                <em>Chemical Weathering</em> - which is the breaking down of rock while
                                changing its chemical make up. Like the rock in the image, we can obviously
                                see the mechanical split down the middle, but look closely at its color. The
                                red is iron oxide (rust) forming when water reacts with the iron in the rock.
                        </NoteCard>

                        <NoteCard source={ice_wedging} alt="ice wedging" imageDir="left">
                                <em>Mechanical Weathering</em> - which is the physical breaking of rock, such
                                as smashing, ice wedging, dropping, splitting, burrowing animals, etc.
                        </NoteCard>

                        <NoteCard source={erosion} altImgTitle={'erosion'} imageDir="left">
                                <em>Erosion</em> is the <em>"Take It"</em> from our simple phrase. This often
                                overlaps with weathering because as weathered items break apart, agents of
                                erosion act to take the pieces away. Erosion itself can sort of act like
                                agents of weathering in that the items they carry with them can weather and
                                wear down other rocks.
                        </NoteCard>

                        <NoteCard>
                                <em>Deposition</em> is what happens when agents of erosion run out of energy.
                                It is the <em>"Drop It"</em> of our simple phrase. There are interesting and
                                unique land formations that are created from deposition.
                        </NoteCard>

                        <NoteCard source={delta} alt="delta" imageDir="right">
                                <em>Deltas</em> are formed when large amounts of sediment are dropped at at
                                the mouth of a river where the kinetic energy runs out and the water dumps out
                                into a larget body of water.
                        </NoteCard>

                        <NoteCard source={himalayan_mountains} alt="hemalayan mountains" imageDir="left">
                                Younger mountains are much more jagged because they have faced the agents of
                                weathering and erosion over time. These Himalayan Mountains began forming
                                around 50 million years ago. That may sound like alot until we see the Arbucke
                                Mountains.
                        </NoteCard>

                        <NoteCard source={arbuckle_mountains} alt="arbuckle mountains" imageDir="right">
                                The Arbuckle Mountains found in Southern Oklahoma are not nearly as magnifcent
                                and sharp as the Himalayan Mountains. But the Arbuckle Mountains are about 525
                                millions years old! That is almost 10 times older than the Himalayan
                                Mountains!
                        </NoteCard>
                </NotesTemplate>
        );
};

export default notes7_8B;
