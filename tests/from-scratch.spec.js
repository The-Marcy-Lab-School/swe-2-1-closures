const path = require('path');
const ScoreCounter = require('score-tests');
const {
  makeIdFunc,
  makeShoppingList,
  sumOfMultiples,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(() => {
    console.log.mockClear();
  });

  test('makeIdFunc - starts on 1', () => {
    const getId = makeIdFunc();
    expect(getId()).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeIdFunc - increments counter by 1', () => {
    const getId = makeIdFunc();
    expect(getId()).toBe(1);
    expect(getId()).toBe(2);
    expect(getId()).toBe(3);
    expect(getId()).toBe(4);
    expect(getId()).toBe(5);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeIdFunc - Each new call of the function starts back at 1', () => {
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

  test('sumOfMultiples - returns the sum of all numbers in the array that are multiples of the given factor', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const factor1 = 3;
    expect(sumOfMultiples(arr1, factor1)).toBe(18);
    // 3 + 6 + 9 === 18

    const factor2 = 2;
    expect(sumOfMultiples(arr1, factor2)).toBe(20);
    // 2 + 4 + 6 + 8 === 20

    expect(sumOfMultiples([9, 9, 9], 9)).toBe(27);
    expect(sumOfMultiples([1, 4, 3], 1)).toBe(8);
    expect(sumOfMultiples([1, 4, 1, 3, 13], 2)).toBe(4);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('sumOfMultiples - returns null if the given multiple is 0', () => {
    expect(sumOfMultiples([1, 2, 3], 0)).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('sumOfMultiples - returns 0 if no multiples are found, or the numbers array is empty', () => {
    expect(sumOfMultiples([1, 2, 3], 12)).toBe(0);
    expect(sumOfMultiples([], 4)).toBe(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('sumOfMultiples - uses the correct higher-order method and not a for or while loop', () => {
    const functionContentString = sumOfMultiples.toString();
    // Check that the function does not use a for or while loop
    // Remove comments that contain for or while!
    expect(functionContentString).not.toContain('for');
    expect(functionContentString).not.toContain('while');
    expect(functionContentString).toContain('reduce');

    // test copies to prevent auto pass
    expect(sumOfMultiples([1, 2, 3], 4)).toBe(0);
    expect(sumOfMultiples([], 4)).toBe(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList - returns an object', () => {
    const shoppingList = makeShoppingList();
    expect(typeof shoppingList).toBe('object');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.getItems - is a function that returns an array', () => {
    const shoppingList = makeShoppingList();

    //  The returned array should be empty if no items have been added)
    expect(shoppingList.getItems()).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.getItems - always returns a copy of the items array', () => {
    const shoppingList = makeShoppingList();
    const items1 = shoppingList.getItems();
    const items2 = shoppingList.getItems();

    // getItems should always return a new copy of the items array, not the same array
    expect(items1 === items2).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.addItem - adds an item to the items array and returns the new length of the array', () => {
    const shoppingList = makeShoppingList();

    const banana = 'Banana'; // storing the name in a variable to avoid typos
    const apple = 'Apple';
    const carrot = 'Carrot';

    expect(shoppingList.addItem(banana)).toBe(1);
    expect(shoppingList.getItems()).toEqual([banana]);

    expect(shoppingList.addItem(apple)).toBe(2);
    expect(shoppingList.getItems()).toEqual([banana, apple]);

    expect(shoppingList.addItem(carrot)).toBe(3);
    expect(shoppingList.getItems()).toEqual([banana, apple, carrot]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.addItem - logs the right message when adding an item', () => {
    const shoppingList = makeShoppingList();
    const banana = 'Banana';
    const apple = 'Apple';
    const carrot = 'Carrot';

    shoppingList.addItem(banana);
    expect(log).lastCalledWith(`${banana} successfully added!`);

    shoppingList.addItem(apple);
    expect(log).lastCalledWith(`${apple} successfully added!`);

    shoppingList.addItem(carrot);
    expect(log).lastCalledWith(`${carrot} successfully added!`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.removeItem - removes an item from the items array and returns true', () => {
    const shoppingList = makeShoppingList();
    const banana = 'Banana';
    shoppingList.addItem(banana);
    const apple = 'Apple';
    shoppingList.addItem(apple);
    const carrot = 'Carrot';
    shoppingList.addItem(carrot);

    expect(shoppingList.removeItem(apple)).toBe(true);
    expect(shoppingList.getItems()).toEqual([banana, carrot]);

    expect(shoppingList.removeItem(banana)).toBe(true);
    expect(shoppingList.getItems()).toEqual([carrot]);

    expect(shoppingList.removeItem(carrot)).toBe(true);
    expect(shoppingList.getItems()).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.removeItem - logs the right message when removing an item in the list that exists', () => {
    const shoppingList = makeShoppingList();
    const banana = 'Banana';
    shoppingList.addItem(banana);
    shoppingList.removeItem(banana);
    expect(log).lastCalledWith(`${banana} successfully removed.`);

    const date = 'Date';
    shoppingList.addItem(date);
    shoppingList.removeItem(date);
    expect(log).lastCalledWith(`${date} successfully removed.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList.removeItem - logs the right message if an item does not exist and returns false', () => {
    const shoppingList = makeShoppingList();

    const dennis = 'Dennis';
    expect(shoppingList.removeItem(dennis)).toBe(false);
    expect(log).lastCalledWith(`${dennis} not found.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList - does not expose internal items array', () => {
    const shoppingList = makeShoppingList();
    expect(shoppingList.items).toBeUndefined();

    // only the specified methods should be available
    expect(Object.keys(shoppingList).length).toBe(3);

    expect(typeof shoppingList.addItem).toBe('function');
    expect(typeof shoppingList.removeItem).toBe('function');
    expect(typeof shoppingList.getItems).toBe('function');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('makeShoppingList - is not possible to manipulate the internal items array from outside the object', () => {
    const shoppingList = makeShoppingList();

    const gene = 'Gene';
    shoppingList.addItem(gene);

    const outsideitems = shoppingList.getItems();
    expect(shoppingList.getItems()).toEqual([gene]);

    outsideitems.push('Zo');
    expect(shoppingList.getItems()).toEqual([gene]);

    outsideitems.length = 0;
    expect(shoppingList.getItems()).toEqual([gene]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
