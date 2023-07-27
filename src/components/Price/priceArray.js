import individ from '../../assets/images/icons/face-to-face.png';
import pair from '../../assets/images/icons/pair-2.png';
import exam from '../../assets/images/icons/grade-exam.png';

const priceArray = [
    {
        id: 0,
        forRus: false,
        img: individ,
        description: "Individual lesson (General English / English for speaking)",
        currency: {
            usd: 13,
            euro: 11,
            rub: 1400
        }
    },
    {
        id: 1,
        forRus: false,
        img: pair,
        description: "Pair lesson in a group of two students (General English / English for speaking)",
        currency: {
            usd: 19,
            euro: 16,
            rub: 1000
        }
    },
    {
        id: 2,
        forRus: true,
        img: exam,
        description: "Подготовка к ОГЭ / ЕГЭ",
        currency: {
            rub: 1200
        }
    }
];

export default priceArray;