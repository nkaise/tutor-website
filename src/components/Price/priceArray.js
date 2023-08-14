import individ from '../../assets/images/icons/face-to-face.png';
import pair from '../../assets/images/icons/pair-2.png';
import exam from '../../assets/images/icons/grade-exam.png';

const priceArray = [
    {
        id: 0,
        forRus: false,
        img: individ,
        description: "price.individ-description",
        currency: {
            usd: "price.usd-currency-individ",
            euro: "price.euro-currency-individ",
            gel: "price.gel-currency-individ",
            rub: "price.rub-currency-individ"
        }
    },
    {
        id: 1,
        forRus: false,
        img: pair,
        description: "price.pair-description",
        currency: {
            usd: "price.usd-currency-pair",
            euro: "price.euro-currency-pair",
            gel: "price.gel-currency-pair",
            rub: "price.rub-currency-pair"
        }
    },
    {
        id: 2,
        forRus: false,
        img: exam,
        description: "Подготовка к ОГЭ / ЕГЭ",
        currency: {
            usd: "price.usd-currency-exam",
            euro: "price.euro-currency-exam",
            gel: "price.gel-currency-exam",
            rub: "price.rub-currency-exam"
        }
    }
];

export default priceArray;