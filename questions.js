// Quizdata
const quizData = [
    [
        // pipes And Cisterns
        {
            num: 1,
            question: 'Two inlet pipes a and b together can fill a tank in 24min, and it takes 6 min more then one leak is developed in the tank. find the time taken by leak alone to empty the tank.',
            options: [
                '8 hours',
                '4 hours',
                '2 hours',
                '10 hours'
            ],
            answer: '2 hours',
        },
        {
            num: 2,
            question: '  A cistern has two taps attached to it. Tap B can empty the cistern in 45 minutes. But Tap A can fill the cistern in just 30 minutes. Rohit started both taps unknowingly but realized his mistake after 30 minutes. He immediately closed Tap B. Now after this, in how much time will the cistern be filled?',
            options: [
                '10 minutes',
                '30 minutes',
                '25 minutes',
                '20 minutes',
            ],
            answer: '20 minutes',
        },
        {
            num: 3,
            question: ' Pipe R can empty a full tank in 30 hours. But two pipes P and Q can fill a tank in 15 hours and 10 hours respectively. Ram unknowingly opened all three taps. After 2 hours Shyam realized it and closed Pipe R. Due to this mistake how much time more would it take to fill the tank?',
            options: [
                '34 minutes',
                '44 minutes',
                '29 minutes',
                '24 minutes',
            ],
            answer: '24 minutes',
        },
        {
            num: 4,
            question: 'There is a leak at the bottom of a cistern. Due to this it takes 8 hours to fill the cistern. Had there not been a leak, it would take one hour less to fill the cistern. How much time does it take for the leak to completely empty the cistern?',
            options: [
                '66 hours',
                '89 hours',
                '56 hours',
                '44 hours',
            ],
            answer: '56 hours',
        },
        {
            num: 5,
            question: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
        {
            num: 6,
            question: 'A storage has a hole which would exhaust it in 8 hours. A tap is transformed on which concedes 6 liters a moment into the reservoir and it is currently purged in 12 hours. What number of liters does the reservoir hold?',
            options: [
                '7580 ltr',
                '1580 ltr',
                '5080 ltr',
                '8640 ltr',
            ],
            answer: '8640 ltr',
        },
        {
            num: 7,
            question: 'Two pipes A and B can ill a tank in 36 hours and 45 hours respectively. If both the pipes are opened simultaneously, how much time will be taken to fill the tank?',
            options: [
                '10 hours',
                '15 hours',
                '20 hours',
                '12 hours',
            ],
            answer: '20 hours',
        },
        {
            num: 8,
            question: 'Tap P alone fills a cistern in 2 hours; while tap Q alone fills the same cistern in 3 hours. A new tap R is attached to the bottom of the cistern which can empty the completely filled cistern in 6 hours. Sunny started all three taps together at 9am. When will the tank be full?',
            options: [
                ' 10.45 am',
                ' 10.35 am',
                '10.30 am',
                ' 9.55 am',
            ],
            answer: '10.30 am',
        },
        {
            num: 9,
            question: 'Taps A, B and C are connected to a water tank and the rate of flow of water is 42 ltr/hr, 56 ltr/hr and 48 ltr/hr respectively. A and ill fill the tank while tap C empties the tank. If the three taps are opened simultaneously, the tank gets filled up completely in 16 hours. What is the capacity of the tank?',
            options: [
                '800 ltr',
                '650 ltr',
                '700 ltr',
                '200 ltr',
            ],
            answer: '800 ltr',
        },
        {
            num: 10,
            question: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
    ],
    [
        // probability
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ],
    [
        // Problems On Age
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ],
    [
        // Profit And Loss
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ]
];