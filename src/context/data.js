// STUDENT
export const enrollList = [
    {
        name: "Sketch Prototyping",
        subject: "UI UX",
        duedate: "Mar 12, 2018",
        duration: "12 mins",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        participants: 23,
        teacher: "Node"
    }, {
        name: 'NodeJS - Express',
        subject: 'Web development',
        teacher: 'Master',
        duration: '15 mins',
        duedate: 'Mar 26, 2018',
        participants: 24,
        description: 'Lorem ipsum is simple ....',
    }
];

export const historyList = [
    {
        name: "Material Design",
        subject: "UI UX",
        duedate: "Mar 12, 2018",
        duration: "12 mins",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        teacher: "Node",
        score: '12/15'
    }, {
        name: "Typography",
        subject: "UI UX",
        duedate: "Mar 03, 2018",
        duration: "25 mins",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        teacher: "Master",
        score: '18/20'
    }
];

export const examing = {
    questions: [
        {
            question: 'That\'s a very nice dress you\'re wearing. - ............',
            a: 'I\'m glad you like it',
            b: 'That\'s all right',
            c: 'That\' nice',
            d: 'You\'re quite right',
            yourAnswer: '',
            flag: true
        },
        {
            question: '............to stay the night? – Oh, that\'s very kind of you.',
            a: 'Do you feel like',
            b: 'Would you like',
            c: 'Why don\'t you',
            d: 'Do you enjoy',
            yourAnswer: 'b',
            flag: false,
            fileAttach: 'hello.png'
        },
        {
            question: 'Shall we have a farewell party next week? - Yes, let\'s make .........next Saturday evening.',
            a: 'on',
            b: 'it',
            c: 'ourselves',
            d: 'Ø',
            yourAnswer: 'a',
            flag: false
        },
        {
            question: '. Does Tommy like hamburgers? - Yes ............He eats them almost everyday.',
            a: 'So much',
            b: 'So many',
            c: 'So few',
            d: 'So little',
            yourAnswer: 'd',
            flag: true
        },
        {
            question: 'Don\'t you remember ............this film star on TV last year?',
            a: 'seeing',
            b: 'to see',
            c: 'that you see',
            d: 'saw',
            yourAnswer: '',
            flag: false
        },
        {
            question: 'Is this the first time that you ............to this country?',
            a: 'will came',
            b: 'have come',
            c: 'came',
            d: 'had come',
            yourAnswer: 'b',
            flag: true
        }
    ]
}

// TEACHER
export const examList = [
    {
        name: "Layout",
        subject: "UI UX",
        duedate: "Mar 12, 2018",
        duration: "12 mins",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        participants: 23,
        status: 'EXAMING'
    }, {
        name: 'Web scrapping',
        subject: 'Web development',
        duration: '30 mins',
        duedate: 'Mar 26, 2018',
        participants: 24,
        description: 'Lorem ipsum is simple ....',
        status: 'CLOSED'
    }
];

export const questions = [
    {
        question: 'That\'s a very nice dress you\'re wearing. - ............',
        a: 'I\'m glad you like it',
        b: 'That\'s all right',
        c: 'That\' nice',
        d: 'You\'re quite right',
        rightAnswer: 'a'
    },
    {
        question: '............to stay the night? – Oh, that\'s very kind of you.',
        a: 'Do you feel like',
        b: 'Would you like',
        c: 'Why don\'t you',
        d: 'Do you enjoy',
        rightAnswer: 'b',
        fileAttach: 'hello.png'
    },
    {
        question: 'Shall we have a farewell party next week? - Yes, let\'s make .........next Saturday evening.',
        a: 'on',
        b: 'it',
        c: 'ourselves',
        d: 'Ø',
        rightAnswer: 'a'
    },
    {
        question: '. Does Tommy like hamburgers? - Yes ............He eats them almost everyday.',
        a: 'So much',
        b: 'So many',
        c: 'So few',
        d: 'So little',
        rightAnswer: 'a'
    },
    {
        question: 'Don\'t you remember ............this film star on TV last year?',
        a: 'seeing',
        b: 'to see',
        c: 'that you see',
        d: 'saw',
        rightAnswer: 'a'
    },
    {
        question: 'Is this the first time that you ............to this country?',
        a: 'will came',
        b: 'have come',
        c: 'came',
        d: 'had come',
        rightAnswer: 'b'
    },
    {
        question: 'Would you like some beer? – Yes, just............',
        a: 'a little',
        b: 'little',
        c: 'few',
        d: 'a few',
        rightAnswer: 'a'
    },
    {
        question: 'Have you brought my umbrella? – Oh, no! I ............again. That is stupid of me.',
        a: 'forgot',
        b: 'have forgotten',
        c: 'had forgotten',
        d: 'forget',
        rightAnswer: 'b'
    }
]
