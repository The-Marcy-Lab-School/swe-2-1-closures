const path = require('path');
const ScoreCounter = require('score-tests');
const {
  makeIdFunc,
  makeFriendList,
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

  it('makeIdFunc - starts on 1', () => {
    const getId = makeIdFunc();
    expect(getId()).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeIdFunc - increments counter by 1', () => {
    const getId = makeIdFunc();
    expect(getId()).toBe(1);
    expect(getId()).toBe(2);
    expect(getId()).toBe(3);
    expect(getId()).toBe(4);
    expect(getId()).toBe(5);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeIdFunc - Each new call of the function starts back at 1', () => {
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

  it('sumOfMultiples - returns the sum of all numbers in the array that are multiples of the given factor', () => {

    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

  it('sumOfMultiples - returns null if the given multiple is 0', () => {
    expect(sumOfMultiples([1, 2, 3], 0)).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sumOfMultiples - returns 0 if no multiples are found, or no numbers array is empty', () => {
    expect(sumOfMultiples([1, 2, 3], 12)).toBe(0);
    expect(sumOfMultiples([], 4)).toBe(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sumOfMultiples - uses reduce and not a for loop', () => {
    const sumOfMultiplesStr = sumOfMultiples.toString();
    expect(sumOfMultiplesStr.includes('for')).toBe(false);
    expect(sumOfMultiplesStr.includes('reduce')).toBe(true);

    // test copies to prevent auto pass
    expect(sumOfMultiples([1, 2, 3], 4)).toBe(0);
    expect(sumOfMultiples([], 4)).toBe(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList - returns an object', () => {
    const friendDataObj = makeFriendList();
    expect(friendDataObj).toBeInstanceOf(Object);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.getFriends - is a function that returns an array', () => {
    const friendDataObj = makeFriendList();

    //  The returned array should be empty if no friends have been added)
    expect(friendDataObj.getFriends()).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.addFriend - adds a friend to the friends array and returns the new length of the array', () => {
    const friendDataObj = makeFriendList();

    const bob = 'Bob'; // storing the name in a variable to avoid typos
    expect(friendDataObj.addFriend(bob)).toBe(1);
    expect(friendDataObj.getFriends()).toEqual([bob]);

    const alice = 'Alice';
    expect(friendDataObj.addFriend(alice)).toBe(2);
    expect(friendDataObj.getFriends()).toEqual([bob, alice]);

    const charlie = 'Charlie';
    expect(friendDataObj.addFriend(charlie)).toBe(3);
    expect(friendDataObj.getFriends()).toEqual([bob, alice, charlie]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.addFriend - logs the right message when adding a friend', () => {
    const friendDataObj = makeFriendList();
    const bob = 'Bob';
    friendDataObj.addFriend(bob);
    expect(log).lastCalledWith(`${bob} successfully added!`);

    const alice = 'Alice';
    friendDataObj.addFriend(alice);
    expect(log).lastCalledWith(`${alice} successfully added!`);

    const charlie = 'Charlie';
    friendDataObj.addFriend(charlie);
    expect(log).lastCalledWith(`${charlie} successfully added!`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.getFriends - adding friends adds them to the tail of the array', () => {
    const friendDataObj = makeFriendList();
    const bob = 'Bob';
    friendDataObj.addFriend(bob);
    expect(friendDataObj.getFriends()).toEqual([bob]);

    const alice = 'Alice';
    friendDataObj.addFriend(alice);
    expect(friendDataObj.getFriends()).toEqual([bob, alice]);

    const charlie = 'Charlie';
    friendDataObj.addFriend(charlie);
    expect(friendDataObj.getFriends()).toEqual([bob, alice, charlie]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.removeFriend - removes a friend from the friends array and returns the removed friend', () => {
    const friendDataObj = makeFriendList();
    const bob = 'Bob';
    friendDataObj.addFriend(bob);
    const alice = 'Alice';
    friendDataObj.addFriend(alice);
    const charlie = 'Charlie';
    friendDataObj.addFriend(charlie);

    expect(friendDataObj.removeFriend(alice)).toBe(alice);
    expect(friendDataObj.getFriends()).toEqual([bob, charlie]);

    expect(friendDataObj.removeFriend(bob)).toBe(bob);
    expect(friendDataObj.getFriends()).toEqual([charlie]);

    expect(friendDataObj.removeFriend(charlie)).toBe(charlie);
    expect(friendDataObj.getFriends()).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.removeFriend - logs the right message', () => {
    const friendDataObj = makeFriendList();
    const bob = 'Bob';
    friendDataObj.addFriend(bob);
    friendDataObj.removeFriend(bob);
    expect(log).lastCalledWith(`${bob} successfully removed.`);

    const ben = 'Ben';
    friendDataObj.addFriend(ben);
    friendDataObj.removeFriend(ben);
    expect(log).lastCalledWith(`${ben} successfully removed.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.removeFriend - logs the right message if a friend does not exist and returns undefined', () => {
    const friendDataObj = makeFriendList();

    const dennis = 'Dennis';
    expect(friendDataObj.removeFriend(dennis)).toBe(undefined);
    expect(log).lastCalledWith(`${dennis} not found.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.displayFriends - logs the right message for no friends', () => {
    const friendDataObj = makeFriendList();

    friendDataObj.displayFriends();
    expect(log).lastCalledWith('You have not added any friends.');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.displayFriends - logs the right message for 1 friend', () => {
    const friendDataObj = makeFriendList();

    friendDataObj.displayFriends();
    expect(log).lastCalledWith('You have not added any friends.');

    const bob = 'Bob';
    friendDataObj.addFriend(bob);
    friendDataObj.displayFriends();
    expect(log).lastCalledWith(`${bob} is your friend.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList.displayFriends - logs a message with proper oxford comma, and correct use of "and"', () => {
    const friendDataObj = makeFriendList();

    const bob = 'Bob';
    const alice = 'Alice';
    friendDataObj.addFriend(bob);
    friendDataObj.addFriend(alice);

    friendDataObj.displayFriends();
    expect(log).lastCalledWith(`${bob} and ${alice} are your friends.`);

    const charlie = 'Charlie';
    friendDataObj.addFriend(charlie);
    friendDataObj.displayFriends();
    expect(log).lastCalledWith(`${bob}, ${alice}, and ${charlie} are your friends.`);

    const dennis = 'Dennis';
    friendDataObj.addFriend(dennis);
    friendDataObj.displayFriends();
    expect(log).lastCalledWith(`${bob}, ${alice}, ${charlie}, and ${dennis} are your friends.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList - does not expose internal friends array', () => {
    const friendDataObj = makeFriendList();
    expect(friendDataObj.friends).toBe(undefined);

    // only the specified methods should be available
    expect(Object.keys(friendDataObj).length).toBe(4);
    expect(friendDataObj.getFriends).toBeInstanceOf(Function);
    expect(friendDataObj.addFriend).toBeInstanceOf(Function);
    expect(friendDataObj.removeFriend).toBeInstanceOf(Function);
    expect(friendDataObj.displayFriends).toBeInstanceOf(Function);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeFriendList - is not possible to manipulate the internal friends array from outside the object', () => {
    const friendDataObj = makeFriendList();

    const gene = 'Gene';
    friendDataObj.addFriend(gene);

    const outsideFriends = friendDataObj.getFriends();
    expect(friendDataObj.getFriends()).toEqual([gene]);

    outsideFriends.push('Zo');
    expect(friendDataObj.getFriends()).toEqual([gene]);

    outsideFriends.length = 0;
    expect(friendDataObj.getFriends()).toEqual([gene]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
