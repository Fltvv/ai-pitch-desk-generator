export interface Question {
    id: string,
    question: string,
    answer: string,
    placeholder: string
    value: string
}
export interface Step {
    id: string,
    title: string,
    description: string,
    questions: Question[]
}

export interface FormJson {
    content: Step[]
}

export const formJson: FormJson = {
    content: [
        {
            id: "1",
            title: 'Название стартапа',
            description: 'Описание шага 1',
            questions: [
                {
                    id: '1_1',
                    value: 'name',
                    question: 'Как называется ваш стартап?',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "2",
            title: 'Проблема',
            description: 'Описание шага 2',
            questions: [
                {
                    id: '2_1',
                    value: 'problem',
                    question: 'Опишите существующую проблему на рынке',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "3",
            title: 'Описание и ценностное предложение',
            description: 'Описание шага 3',
            questions: [
                {
                    id: '3_1',
                    value: 'product',
                    question: 'Как называется ваш продукт?',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '3_2',
                    value: 'description',
                    question: 'Опишите свой продукт и его ценность для клиента ',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "4",
            title: 'Решение',
            description: 'Описание шага 4',
            questions: [
                {
                    id: '4_1',
                    value: 'solution',
                    question: 'Как ваш продукт решает существующую проблему для его потребителей?',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "5",
            title: 'Оценка рынка по системе som',
            description: 'Описание шага 5',
            questions: [
                {
                    id: '5_1',
                    value: 'tam',
                    question: 'Введите показатель tam',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '5_2',
                    value: 'som',
                    question: 'Введите показатель som',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '5_3',
                    value: 'sam',
                    question: 'Введите показатель sam',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "6",
            title: 'Конкуренция',
            description: 'Описание шага 6',
            questions: [
                {
                    id: '6_1',
                    value: '1opponent',
                    question: 'Опишите своего конкурента номер 1',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '6_2',
                    value: '2opponent',
                    question: 'Опишите своего конкурента номер 2',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '6_3',
                    value: '3opponent',
                    question: 'Опишите своего конкурента номер 3',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '6_4',
                    value: 'totalopponents',
                    question: 'Опишите общую конкуренуию на рынке и ваше место в ней',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "7",
            title: 'Бизнес-модель и рост',
            description: 'Описание шага 7',
            questions: [
                {
                    id: '7_1',
                    value: 'businessmodeltxt',
                    question: 'Расскажите о своей бизнес модели. Расскажите о ценнобразовании продукта, себестоимости и маржинальности',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "8",
            title: 'Трекшн и финансы',
            description: 'Описание шага 8',
            questions: [
                {
                    id: '8_1',
                    value: 'revenue',
                    question: 'Введите текущую выручку',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '8_2',
                    value: 'futurerevenue',
                    question: 'Введите планируюмую выручку',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "9",
            title: 'Команда',
            description: 'Описание шага 9',
            questions: [
                {
                    id: '9_1',
                    value: 'member1',
                    question: 'Укажите фамилию и имя члена команды',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '9_2',
                    value: 'member1txt',
                    question: 'Укажите роль члена команды',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '9_3',
                    value: 'photomember1',
                    question: 'Прикрепите фото члена команды  (и так 4 раза, так как максимум на салйде 4 члена команды)',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "10",
            title: 'Инвестиции и использование средств',
            description: 'Описание шага 10',
            questions: [
                {
                    id: '10_1',
                    value: 'size',
                    question: 'Укажите необходимую для инвестиуий сумму',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '10_2',
                    value: 'sizetxt',
                    question: 'Расскажите как формировалась эта сумма',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '10_3',
                    value: 'usingtxt',
                    question: 'Расскажите о том как будете использовать полученные средства',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: '11',
            title: 'Roadmap',
            description: 'Описание шага 11',
            questions: [
                {
                    id: '11_1',
                    value: 'roadmaptxt',
                    question: 'Расскажите о целях вашего проекта и дедлайнах их достижения',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: '12',
            title: 'Контакты',
            description: 'Описание шага 12',
            questions: [
                {
                    id: '12_1',
                    value: 'contacts',
                    question: `Укажите ссылки на соц сети, номер телефона, почту и ссылку на сайт проекта`,
                    answer: '',
                    placeholder: ''
                },
            ]
        },
    ]
}

export const HardJson = {
    name: '',
    problem: '',
    product: '',
    description: '',
    solution: '',
    tam: '',
    som: '',
    sam: '',
    '1opponent': '',
    '2opponent': '',
    '3opponent': '',
    totalopponents: '',
    businessmodeltxt: '',
    revenue: '',
    futurerevenue: '',
    ltv: '',
    cac: '',
    businessmodeldescription: '',
    photomember1: '',
    member1: '',
    member1txt: '',
    size: '',
    sizetxt: '',
    usingtxt: '',
    roadmaptxt: '',
    contacts: '',
}
