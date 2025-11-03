# Assignment

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
  - [Prompt 1](#prompt-1)
  - [Prompt 2](#prompt-2)
  - [Prompt 3](#prompt-3)
- [From Scratch](#from-scratch)
  - [Question 1: makeIdFunc](#question-1-makeidfunc)
  - [Question 2: makePasswordChecker](#question-2-makepasswordchecker)
  - [Question 3: makeMultiplier](#question-3-makemultiplier)
  - [Question 4: makeFilterByLength](#question-4-makefilterbylength)
  - [Question 5: makeGradeTracker](#question-5-makegradetracker)
  - [Question 6: makeShoppingList](#question-6-makeshoppinglist)
- [Debug](#debug)
- [Good luck!](#good-luck)

## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

## Short Response Questions

Short response questions can be found in the `src/short-response.md` file. Write your responses directly in that file! Do not forget to complete this part of the assignment.

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

## From Scratch

### Question 1: makeIdFunc

Create a higher-order function called `makeIdFunc` that returns an "inner" function with a closure. Here is what the returned inner function should do:
* The first time it is invoked, it should return `1`
* The second time it is invoked, it should return `2`
* The third time it is invoked, it should return `3`
* And so on...

(This kind of function can be used to generate unique number IDs for things)

Example Usage:

```js
const idMaker1 = makeIdFunc();
const idMaker2 = makeIdFunc();

console.log(idMaker1()); // 1
console.log(idMaker1()); // 2
console.log(idMaker1()); // 3

console.log(idMaker2()); // 1
console.log(idMaker2()); // 2
console.log(idMaker2()); // 3
```

This is a *classic* closure example, check the tests for what we're expecting.

### Question 2: makePasswordChecker

Create a higher-order function called `makePasswordChecker` that takes a `correctPassword` (string) as an argument and returns an "inner" function with a closure. The returned inner function should:
* Take a `guess` (string) as an argument
* Keep track of how many attempts have been made
* Return `true` if the guess matches the correct password
* Return `false` if the guess is incorrect
* After 3 failed attempts, return the string `"Account locked"`

Example Usage:
```js
const checkPassword = makePasswordChecker("secret123");

console.log(checkPassword("wrong")); // false
console.log(checkPassword("incorrect")); // false
console.log(checkPassword("secret123")); // true

const anotherChecker = makePasswordChecker("pass456");
console.log(anotherChecker("wrong1")); // false
console.log(anotherChecker("wrong2")); // false
console.log(anotherChecker("wrong3")); // false
console.log(anotherChecker("pass456")); // "Account locked"
```

### Question 3: makeMultiplier

Write a function called `makeMultiplier` that takes a number called `multiplier` and returns a function. 

The returned function should:
* Take an array of numbers as an argument
* Return a new array with each number multiplied by the `multiplier`
* Aim to solve this using the `map` method, not a `for` loop!

Example Usage:
```js
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double([1, 2, 3, 4])); // [2, 4, 6, 8]
console.log(triple([1, 2, 3, 4])); // [3, 6, 9, 12]
console.log(double([5, 10, 15])); // [10, 20, 30]
```

### Question 4: makeFilterByLength

Write a function called `makeFilterByLength` that takes a number called `maxLength` and returns a function. The returned function should:
* Take an array of strings as an argument
* Return a new array containing only the strings that have a length *less than or equal* to `maxLength`
* Aim to solve this using the `filter` method, not a `for` loop!

Example Usage:
```js
const getShorterThan4 = makeFilterByLength(4);
const getShorterThan6 = makeFilterByLength(6);

const animals = ['cat', 'dog', 'elephant', 'bird', 'llama'];
console.log(getShorterThan4(animals)); // ['cat', 'dog', 'bird']
console.log(getShorterThan6(animals)); // ['cat', 'dog', 'bird', 'llama']
```

### Question 5: makeGradeTracker

Write a "factory" function called `makeGradeTracker()`. 
* It should return an object that lets you track student grades
* It should use closure to encapsulate a private `grades` array of numbers. You should NOT be able to directly access `grades`.
* The returned object should have methods that act on the `grades` array

The methods we need are:
  - `addGrade(grade)`
    - add a new grade (a number between 0-100) to the list and returns true
    - if the grade is not between 0-100, returns false
  - `getAverage()`
    - calculate and return the average of all grades (return 0 if there are no grades)

Example Usage:
```js
const studentGrades = makeGradeTracker();

console.log(studentGrades.addGrade(90)); // true
console.log(studentGrades.addGrade(85)); // true
console.log(studentGrades.addGrade(80)); // true

console.log(studentGrades.getAverage()); // 85

console.log(studentGrades.addGrade(150)); // false
console.log(studentGrades.getAverage()); // 85 (still the same)

console.log(studentGrades.grades); // undefined
```

### Question 6: makeShoppingList

Write a "factory" function called `makeShoppingList()`. 
* It should return an object that lets you manage a shopping list
* It should use closure to encapsulate a private `items` array of grocery items (strings)
* The returned object should have methods that act on the `items` array.

The methods we need are:
  - `getItems()`
    - return a copy of the list
  - `addItem(item)`
    - add a new shopping cart item (a string), prints a message, and return the new length of the list
  - `removeItem(item)`
    - find and remove an existing item (look for the matching item), prints a message, and returns either `true` or `false` depending on whether or not the value was removed.

Example Usage:

```js
const myList = makeShoppingList();

console.log(myList.getItems()); // []

myList.addItem('eggs'); // prints "eggs successfully added! Now you have 1 item(s)."
myList.addItem('milk'); // prints "milk successfully added! Now you have 2 item(s)."
myList.addItem('bread'); // prints "bread successfully added! Now you have 3 item(s)."

console.log(myList.getItems()); // ['eggs', 'milk', 'bread']

myList.removeItem('milk'); // prints "milk successfully removed. You now have 2 item(s).
console.log(myList.getItems()); // ['eggs', 'bread']

const wasRemoved = myList.removeItem('apples'); // prints "apples not found."
console.log(wasRemoved); // false
```

## Debug

In the `src/debug.js` file, you can see the following factory function `createCourse` that creates an object for managing a course and student roster:

```js
const createCourse = (topic, instructor) => {
  return {
    topic,
    instructor,
    students: [],
    addStudent(name) {
      this.students.push(name);
    },
    removeStudent(name) {
      this.students.splice(this.students.indexOf(name), 1);
    },
    getStudents() {
      return this.students;
    }
  }
}
```

As you can see from the tests, this function produces objects with the correct functionality, but it exposes the `students` array which we want to be private. Refactor the code such that it uses a closure to encapsulate the `students` array and prevent it from being accessed. 

Use the provided tests to ensure that your code meets the requirements!

## Good luck!
This is definitely a step up, but you can do it!
