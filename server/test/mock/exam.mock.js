module.exports = {
  teacher_id: '',
  subject_id: '',
  participant_ids: [],
  name: 'test exam',
  descriptions: 'this is a test',
  status: 'WAITING',
  duration: 12,
  startDate: '12/09/2019',
  dueDate: '13/09/2019',
  questions: [{
    question: '............to stay the night? – Oh, that\'s very kind of you.',
    a: 'Do you feel like',
    b: 'Would you like',
    c: 'Why don\'t you',
    d: 'Do you enjoy',
    yourAnswer: 'b',
    flag: true
  }, {
    question: 'Shall we have a farewell party next week? - Yes, let\'s make .........next Saturday evening.',
    a: 'on',
    b: 'it',
    c: 'ourselves',
    d: 'Ø',
    yourAnswer: 'a',
    flag: false
  }]
};
