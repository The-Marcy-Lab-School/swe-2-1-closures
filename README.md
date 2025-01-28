# Assignment

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
  - [npm test](#npm-test)
- [Before You Begin](#before-you-begin)
  - [More tests, less prompts](#more-tests-less-prompts)
  - [Tickets](#tickets)
- [Question 1: makeIdFunc](#question-1-makeidfunc)
- [Question 2: sumOfMultiples](#question-2-sumofmultiples)
- [Question 3: makeFriendList](#question-3-makefriendlist)
- [Debug Tickets](#debug-tickets)
- [Good luck!](#good-luck)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files. 

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

## Before You Begin
Welcome to Mod 5, Object-Oriented Programming (OOP)! To kick us off, this assignment is all about closures! But you may notice something's a little different about this assignment: it's so short! Where are the prompts??

### More tests, less prompts
The fact is, you'll have to become fluent at reading the tests on the job. So start practicing now! We'll still give you brief explanations about what we're asking you to build, but edge cases and crucial information (like function signatures) will not be given to you anymore. Checking the tests is not optional anymore.

It's challenging, but we know you can do it!

We've tried to write easy to understand tests with Jest. But if you don't know what a "matcher" or "assertion" does, feel free to check online at `https://jestjs.io/docs/getting-started`.

### Tickets
We're also going to set up mock "tickets" for your debug or modify work. A ticket is basically a request for work. Tickets are how work is requested and tracked in most tech companies. You'll learn much more about them later, but at their core they have:
  - name or number
  - description
  - status
  - comments

Your job is to use the tickets and tests to get the functions back to working order.

## Question 1: makeIdFunc
This function should create and return an "inner" function. 
* The inner function that is returned should return a different integer each time it is invoked, starting at `1` and incrementing each time it is invoked. 
* This kind of function is used to generate unique number IDs for things.

It should be able to be used like this:

```js
const idMaker = makeIdFunc();
const firstId = idMaker(); // 1
const secondId = idMaker(); // 2
const thirdId = idMaker(); // 3
```

This is a *classic* closure example, check the tests for what we're expecting. And if you need a hint, check out this [article on closures from W3](https://www.w3schools.com/js/js_function_closures.asp).

## Question 2: sumOfMultiples
Let's get some `.reduce` practice. (No `for` loops allowed, use `.reduce`!).

Write a function that returns the sum of all numbers that are multiples of the given factor. (Check the tests to see how we expect the function to behave!)

> In Math, a number `A` is a "multiple" of another number `B` if the number `A` can be evenly divided by the number `B`. For example, 9 is a multiple of 3 because 9 can be divided by 3 with no remainder. We call the smaller number the "factor", as in "3 is a factor of 9".

It may not be obvious why this is utilizing closures, but it is! Think about how!

## Question 3: makeFriendList
Ok, this is a fun one. Write a "factory" function called `makeFriendList`. 
* It should return an object
* It should use closure to encapsulate a private `friends` array of names (strings)
* The returned object should have methods that act on the `friends` array.

The methods we need are:
  - `addFriend()`
    - add a new friend
  - `removeFriend()`
    - find and remove an existing friend
  - `getFriends()`
    - return an array of friends
  - `displayFriends()`
    - log a specially formatted message

What should they return? What args do they take? Check those tests!

## Debug Tickets

| Ticket          | Name                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DBG-312         | Fix broken createCourse please                                                                                                                                                                                      |
| **Description** | We were looking at the API yesterday to prep for the deploy and it looks like we've exposed the student data in the `createCourse` function. Please restore functionality ASAP so we can deploy. This is a blocker! |
| **priority**    | High                                                                                                                                                                                                                |
| **Status**      | Open                                                                                                                                                                                                                |
| **Assignee**    | YOU!                                                                                                                                                                                                                |

And then the comments would look something like:

| Commenter | Message                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| Dean SE2  | Just checked into it, one of the new devs blew away changes with a rebase. It looks like the closure was removed |
| Jane SE3  | Yeah, it looks like the rest of the function logic is mostly okay though.                                        |
| Jo SE2    | They are passing most of the tests for functionality but they are failing the tests for privacy.                 |
| Jane SE3  | Ah gotcha. Can someone pick this up?                                                                             |
| **YOU**   | On it!                                                                                                           |

Notice how there's a little too much info? Getting good at reading tickets is filtering out the less important parts! In the real world, there may not be perfect tests, so you may need to ask questions about exactly the desired behavior. However, here all you have to do is get the tests to pass in `debug.spec.js` as usual!

## Good luck!
This is definitely a step up, but you can do it!
