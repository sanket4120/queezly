import { v4 as uuid } from 'uuid';

export const quiz = [
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    category: 'programming',
    title: 'The React Quizz',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    duration: 3,
    questions: [
      {
        _id: uuid(),
        question: 'React is mainly used for building ___.',
        options: [
          { _id: uuid(), option: 'Database', isCorrect: false },
          { _id: uuid(), option: 'Connectivity', isCorrect: false },
          { _id: uuid(), option: 'User Interface', isCorrect: true },
          { _id: uuid(), option: 'Design Platform', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'The lifecycle methods are mainly used for ___.',
        options: [
          {
            _id: uuid(),
            option: 'keeping track of event history',
            isCorrect: true,
          },
          { _id: uuid(), option: 'enhancing components', isCorrect: false },
          { _id: uuid(), option: 'freeing up resources', isCorrect: false },
          { _id: uuid(), option: 'none of the above', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question:
          'Which of the following command is used to create react-js-app ?',
        options: [
          {
            _id: uuid(),
            option: 'npx create-react-app appname',
            isCorrect: true,
          },
          {
            _id: uuid(),
            option: 'npm install create-react-app',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'npx install create-react-app -g',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'install - l create-react-app',
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          'Which of the following is the correct syntax for a button click event handler foo?',
        options: [
          {
            _id: uuid(),
            option: '<button onclick={this.foo()}>',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: '<button onclick={this.foo}>',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: '<button onClick={this.foo()}>',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: '<button onClick={this.foo}>',
            isCorrect: true,
          },
        ],
      },
      {
        _id: uuid(),
        question: 'What is used to pass data to a component from outside?',
        options: [
          { _id: uuid(), option: 'setState', isCorrect: false },
          { _id: uuid(), option: 'render with arguments', isCorrect: false },
          { _id: uuid(), option: 'PropTypes', isCorrect: false },
          { _id: uuid(), option: 'props', isCorrect: true },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/svj/image/upload/v1654838781/virtual-reality_1_cevkug.jpg',
    category: 'technology',
    title: 'AR Quiz',
    description: 'How much do you really know about Augmented Reality?',
    duration: 3,
    questions: [
      {
        _id: uuid(),
        question:
          'A game based on which animated franchise propelled AR into the mainstream in recent years? ',
        options: [
          {
            _id: uuid(),
            option: 'Pokemon',
            isCorrect: true,
          },
          { _id: uuid(), option: 'Super Mario', isCorrect: false },
          {
            _id: uuid(),
            option: 'Legend of Zelda',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'Sonic the Hedgehog',
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question: 'Which definition best fits “augmented reality”?',
        options: [
          {
            _id: uuid(),
            option:
              'Technology that turns physical objects into digital objects',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option:
              'Technology that overlays digital information on top of real world items',
            isCorrect: true,
          },
          {
            _id: uuid(),
            option:
              'Technology that completely immerses users in a new digital environment',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option:
              'Technology that can achieve a human-level understanding of images',
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          'Which popular Netflix show also put AR on the mainstream map, with one particularly spooky episode featuring AR in gaming?',
        options: [
          { _id: uuid(), option: 'House of Cards', isCorrect: false },
          { _id: uuid(), option: 'Black Mirror', isCorrect: true },
          { _id: uuid(), option: 'Master of None', isCorrect: false },
          { _id: uuid(), option: 'Sense8', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'In immersive technology, what does MR stand for?',
        options: [
          { _id: uuid(), option: 'Mixed Reality', isCorrect: true },
          { _id: uuid(), option: 'Measured Reality', isCorrect: false },
          { _id: uuid(), option: 'More Reality', isCorrect: false },
          { _id: uuid(), option: 'Mirrored Reality', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'Which decade saw the debut of augmented reality technology?',
        options: [
          { _id: uuid(), option: '1960s', isCorrect: true },
          { _id: uuid(), option: '1970s', isCorrect: false },
          { _id: uuid(), option: '1980s', isCorrect: false },
          { _id: uuid(), option: '1990s', isCorrect: false },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/svj/image/upload/v1654837383/3-Idiots_ze3q15.jpg',
    category: 'movies',
    title: '3 idiots',
    description: "Are you Chatur Enough To Pass This Ultimate '3 idiots' Quiz?",
    duration: 3,
    rating: 4,
    questions: [
      {
        _id: uuid(),
        question:
          'What was the name of the college where Rancho and Chatur studied?',
        options: [
          {
            _id: uuid(),
            option: ' Imperial College of Engineering',
            isCorrect: true,
          },
          {
            _id: uuid(),
            option: 'Indian College of Engineering',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'Indian Institutes of Technology',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'Imperial Centre of Engineering',
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          'Rancho escapes ragging by employing a basic concept of physics. Which concept was it?',
        options: [
          {
            _id: uuid(),
            option:
              'An object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'Saltwater is a great conductor of electricity. ',
            isCorrect: true,
          },
          {
            _id: uuid(),
            option:
              'Electric current is proportional to voltage and inversely proportional to resistance.',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option:
              'Acceleration of an object depends on two things, force and mass.',
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          'Virus aka Viru Sahastrabuddhe took a power nap while listening to Opera. How long did the power nap last?',
        options: [
          { _id: uuid(), option: '7 minutes', isCorrect: false },
          { _id: uuid(), option: '8 minutes', isCorrect: false },
          { _id: uuid(), option: '7.5 minutes', isCorrect: true },
          { _id: uuid(), option: '8.5 minutes', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question:
          'What is the definition of books that Rancho shares with the professor in his class:',
        options: [
          {
            _id: uuid(),
            option:
              'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'A bound set of blank sheets for writing in',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option:
              'Instruments that record, analyse, and summarise information in either illustrated or non-illustrated form. ',
            isCorrect: false,
          },
          { _id: uuid(), option: 'none of the above', isCorrect: true },
        ],
      },
      {
        _id: uuid(),
        question:
          "Raju's mom shares the price of vegetables with him and his friends. Pick the prices she shares:",
        options: [
          {
            _id: uuid(),
            option: 'Okra: ₹10/- kilo, Cauliflower: ₹12/-kilo',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'I only remember khujli wali roti from that scene. ',
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: 'Okra: ₹12/- kilo, Cauliflower: ₹10/-kilo',
            isCorrect: true,
          },
          {
            _id: uuid(),
            option:
              'Paneer sunar ki dukan mein bik raha tha, baaki yaad nahi. ',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/svj/image/upload/v1654841102/taj_1_hz1wgy.jpg',
    category: 'history',
    title: 'Taj Mahal',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    duration: 3,
    rating: 4,
    questions: [
      {
        _id: uuid(),
        question: 'In which state of India is the Taj Mahal situated?',
        options: [
          { _id: uuid(), option: 'Maharashtra', isCorrect: false },
          { _id: uuid(), option: 'Uttar Pradesh', isCorrect: true },
          { _id: uuid(), option: 'Uttarakhand', isCorrect: false },
          { _id: uuid(), option: 'Madhya Pradesh', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question:
          'When was the Taj Mahal designated a UNESCO World Heritage Site?',
        options: [
          { _id: uuid(), option: '1980', isCorrect: false },
          { _id: uuid(), option: '1981', isCorrect: false },
          { _id: uuid(), option: '1982', isCorrect: false },
          { _id: uuid(), option: '1983', isCorrect: true },
        ],
      },
      {
        _id: uuid(),
        question: 'Who was the chief architect of the Taj Mahal?',
        options: [
          { _id: uuid(), option: 'Shah Jahan', isCorrect: false },
          { _id: uuid(), option: 'Ustad Aḥmad Lahawri', isCorrect: true },
          { _id: uuid(), option: 'Ustad Bismillah Khan', isCorrect: false },
          { _id: uuid(), option: 'Ustad Amjad Ali Khan', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question:
          'Which of the following is/are the principal element of the Taj Mahal complex?',
        options: [
          { _id: uuid(), option: 'Mosque', isCorrect: false },
          { _id: uuid(), option: 'Jawab', isCorrect: false },
          { _id: uuid(), option: 'Main gateway', isCorrect: false },
          { _id: uuid(), option: 'All the above', isCorrect: true },
        ],
      },
      {
        _id: uuid(),
        question: 'How many years did it take to complete the complex?',
        options: [
          { _id: uuid(), option: 'Approx 20 years', isCorrect: false },
          { _id: uuid(), option: 'Approx 21 years', isCorrect: false },
          { _id: uuid(), option: 'Approx 22 years', isCorrect: true },
          { _id: uuid(), option: 'Approx 23 years', isCorrect: false },
        ],
      },
    ],
  },
];
