# Assignment

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
- [From Scratch](#from-scratch)
  - [Question 1: makeIdFunc](#question-1-makeidfunc)
  - [Question 2: sumOfMultiples](#question-2-sumofmultiples)
  - [Question 3: makeShoppingList](#question-3-makeshoppinglist)
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

### Question 2: sumOfMultiples

Write a function called `sumOfMultiples` that returns the sum of all numbers in the given array `nums`, but only for the numbers that are multiples of the given number `factor`.

No `for` loops allowed: use the appropriate array higher-order method! To pass the tests you cannot have `"for"` or `"while"` anywhere in your code (event comments).

Example Usage:

```js
sumOfMultiples([1,2,3,4,5,6,7,8,9], 2); // returns 20 (2 + 4 + 6 + 8)
sumOfMultiples([1,2,3,4,5,6,7,8,9], 3); // returns 18 (3 + 6 + 9)
sumOfMultiples([1,2,3,4,5,6,7,8,9], 4); // returns 12 (4 + 8)
```

### Question 3: makeShoppingList

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
