const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  createCourse,
} = require('../src/debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('createCourse - creates an object for managing a course', () => {
    const topic = 'computer science';
    const instructor = 'ada lovelace';
    const course = createCourse(topic, instructor);

    // basic properties are added
    expect(course.topic).toBe(topic);
    expect(course.instructor).toBe(instructor);

    // can add students and get updated students list
    course.addStudent('zo');
    course.addStudent('carmen');
    expect(course.getStudents()).toEqual(['zo', 'carmen']);

    // can remove students and get updated students list
    course.removeStudent('carmen');
    expect(course.getStudents()).toEqual(['zo']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createCourse - keeps the students array private using closure', () => {
    const topic = 'computer science';
    const instructor = 'ada lovelace';
    const course = createCourse(topic, instructor);

    // students is not a property that can be directly accessed
    expect(course.students).toBe(undefined);

    // adding students for the next test
    course.addStudent('zo');
    course.addStudent('carmen');
    const students = course.getStudents();
    students.push('ben'); // if this is a copy, the original will not be affected

    // getStudents returns a copy, not the original array
    expect(course.getStudents()).toEqual(['zo', 'carmen']);

    const otherCourse = createCourse('english', 'maya');

    // each course has its own students array
    expect(otherCourse.getStudents()).not.toBe(course.getStudents());

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
