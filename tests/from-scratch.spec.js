const path = require('path');
const ScoreCounter = require('score-tests');
const {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(() => {
    console.log.mockClear();
  });

  describe('makeIdFunc', () => {
    test('Each new call of the function starts back at 1', () => {
      const getId1 = makeIdFunc();
      expect(getId1()).toBe(1);
      expect(getId1()).toBe(2);
      expect(getId1()).toBe(3);

      const getId2 = makeIdFunc();
      expect(getId2()).toBe(1);
      expect(getId2()).toBe(2);
      expect(getId2()).toBe(3);

      const getId3 = makeIdFunc();
      expect(getId3()).toBe(1);
      expect(getId3()).toBe(2);
      expect(getId3()).toBe(3);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('increments counter by 1', () => {
      const getId = makeIdFunc();
      expect(getId()).toBe(1);
      expect(getId()).toBe(2);
      expect(getId()).toBe(3);
      expect(getId()).toBe(4);
      expect(getId()).toBe(5);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('makePasswordChecker', () => {
    test('returns the correct boolean based on the guess', () => {
      const checkPassword = makePasswordChecker('secret123');
      expect(checkPassword('secret123')).toBe(true);
      expect(checkPassword('wrong')).toBe(false);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
    test('returns Account Locked after 3 failed attempts', () => {
      const checkPassword = makePasswordChecker('secret123');
      expect(checkPassword('nope')).toBe(false);
      expect(checkPassword('nope')).toBe(false);
      expect(checkPassword('nope')).toBe(false);
      expect(checkPassword('secret123')).toBe('Account locked');
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('makeMultiplier', () => {
    test('returns the correct array with the numbers multiplied by the multiplier', () => {
      const double = makeMultiplier(2);
      expect(double([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
    test('returns the correct array with the numbers multiplied by the multiplier', () => {
      const double = makeMultiplier(2);
      expect(double([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('makeFilterByLength', () => {
    test('makeFilterByLength - returns a function that filters an array of strings by length', () => {
      const shorterThan5 = makeFilterByLength(5);
      const fruits = ['apple', 'banana', 'cherry', 'date'];
      expect(shorterThan5(fruits)).toEqual(['apple', 'date']);
      expect(shorterThan5(['aaaaaaa', 'bbbb', 'ccc'])).toEqual(['bbbb', 'ccc']);

      const shorterThan10 = makeFilterByLength(10);
      expect(shorterThan10(fruits)).toEqual(['apple', 'banana', 'cherry', 'date']);

      const noWords = makeFilterByLength(0);
      expect(noWords(fruits)).toEqual([]);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('makeGradeTracker', () => {
    test('returns an object', () => {
      const studentGrades = makeGradeTracker();
      expect(typeof studentGrades).toBe('object');
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.addGrade - adds a grade to the grades array and returns the number of grades in the list', () => {
      const studentGrades = makeGradeTracker();
      expect(studentGrades.addGrade(85)).toBe(true);
      expect(studentGrades.addGrade(85.5)).toBe(true);
      expect(studentGrades.addGrade(0)).toBe(true);
      expect(studentGrades.addGrade(100)).toBe(true);

      // invalid grades should return false
      expect(studentGrades.addGrade(105)).toBe(false);
      expect(studentGrades.addGrade(-5)).toBe(false);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.getAverage - returns the average of all grades in the list', () => {
      const studentGrades = makeGradeTracker();
      // if there are no grades, the average should be 0 (not NaN)
      expect(studentGrades.getAverage()).toBe(0);

      studentGrades.addGrade(1);
      expect(studentGrades.getAverage()).toBeCloseTo(1);
      studentGrades.addGrade(3);
      expect(studentGrades.getAverage()).toBeCloseTo(2);
      studentGrades.addGrade(8);
      expect(studentGrades.getAverage()).toBeCloseTo(4);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.getAverage - does not expose the grades array', () => {
      const studentGrades = makeGradeTracker();
      expect(studentGrades.grades).toBeUndefined();

      // only the specified methods should be available
      expect(Object.keys(studentGrades)).toEqual(['addGrade', 'getAverage']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('makeShoppingList', () => {
    test('returns an object', () => {
      const shoppingList = makeShoppingList();
      expect(typeof shoppingList).toBe('object');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.getItems - is a function that returns an array', () => {
      const shoppingList = makeShoppingList();

      //  The returned array should be empty if no items have been added)
      expect(shoppingList.getItems()).toEqual([]);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.getItems - always returns a copy of the items array', () => {
      const shoppingList = makeShoppingList();
      const items1 = shoppingList.getItems();
      const items2 = shoppingList.getItems();

      // getItems should always return a new copy of the items array, not the same array
      expect(items1 === items2).toBeFalsy();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.addItem - adds an item to the items array, returns the new length of the array, and logs the right message', () => {
      const shoppingList = makeShoppingList();

      const banana = 'Banana'; // storing the name in a variable to avoid typos
      const apple = 'Apple';
      const carrot = 'Carrot';

      expect(shoppingList.addItem(banana)).toBe(1);
      expect(shoppingList.getItems()).toEqual([banana]);
      expect(log).lastCalledWith(`${banana} successfully added! Now you have 1 item(s).`);

      expect(shoppingList.addItem(apple)).toBe(2);
      expect(shoppingList.getItems()).toEqual([banana, apple]);
      expect(log).lastCalledWith(`${apple} successfully added! Now you have 2 item(s).`);

      expect(shoppingList.addItem(carrot)).toBe(3);
      expect(shoppingList.getItems()).toEqual([banana, apple, carrot]);
      expect(log).lastCalledWith(`${carrot} successfully added! Now you have 3 item(s).`);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('.removeItem - removes an item from the items array, returns true, and logs the right message', () => {
      const shoppingList = makeShoppingList();
      const banana = 'Banana';
      shoppingList.addItem(banana);
      const apple = 'Apple';
      shoppingList.addItem(apple);
      const carrot = 'Carrot';
      shoppingList.addItem(carrot);

      expect(shoppingList.removeItem(apple)).toBe(true);
      expect(shoppingList.getItems()).toEqual([banana, carrot]);
      expect(log).lastCalledWith(`${apple} successfully removed. You now have 2 item(s).`);

      expect(shoppingList.removeItem(banana)).toBe(true);
      expect(shoppingList.getItems()).toEqual([carrot]);
      expect(log).lastCalledWith(`${banana} successfully removed. You now have 1 item(s).`);

      expect(shoppingList.removeItem(carrot)).toBe(true);
      expect(shoppingList.getItems()).toEqual([]);
      expect(log).lastCalledWith(`${carrot} successfully removed. You now have 0 item(s).`);

      const date = 'Date';
      expect(shoppingList.removeItem(date)).toBe(false);
      expect(log).lastCalledWith(`${date} not found.`);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    test('makeShoppingList - does not expose internal items array', () => {
      const shoppingList = makeShoppingList();
      expect(shoppingList.items).toBeUndefined();

      // You cannot mutate the internal items array from outside the object
      const gene = 'Gene';
      shoppingList.addItem(gene);

      const itemsCopy = shoppingList.getItems();
      expect(shoppingList.getItems()).toEqual([gene]);

      itemsCopy.push('Zo');
      expect(shoppingList.getItems()).toEqual([gene]);

      itemsCopy.length = 0;
      expect(shoppingList.getItems()).toEqual([gene]);

      // only the specified methods should be available
      expect(Object.keys(shoppingList).length).toBe(3);

      expect(typeof shoppingList.addItem).toBe('function');
      expect(typeof shoppingList.removeItem).toBe('function');
      expect(typeof shoppingList.getItems).toBe('function');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
