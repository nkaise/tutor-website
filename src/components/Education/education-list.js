import chinaUni from '../../assets/documents/chinese-university.jpg';
import rusUni from '../../assets/documents/chelyabinsk-university.pdf';
import pedagog from '../../assets/documents/pedagogical-education.jpg';
import tefl from '../../assets/documents/tefl-tesol.pdf';
import babelfish from '../../assets/documents/babelfish-academy.jpg';

const education = [
    {
        id: 0,
        year: "2016-2021",
        name: 'education.rus-uni',
        document: rusUni
    },
    {
        id: 1,
        year: 2019,
        name: "education.china-uni",
        document: chinaUni
    },
    {
        id: 2,
        year: 2021,
        name: 'education.course-1',
        document: pedagog
    },
    {
        id: 3,
        year: 2022,
        name: "education.course-2",
        document: tefl
    },
    {
        id: 4,
        year: 2023,
        name: "education.course-3",
        document: babelfish
    }
];

export default education;