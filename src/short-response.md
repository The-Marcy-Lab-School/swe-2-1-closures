# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Is free of grammar and spelling mistakes (use grammarly!)
- [] Addresses all parts of the prompt
- [] Is easy to comprehend
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences.

## Prompt 1

What are the core principles of encapsulation in object-oriented programming?

## Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

## Prompt 3

Consider the code snippet below showing a factory function for creating animal objects.

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
betty.makeNoise(); // betty the cat says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // bugs the bunny says whatsup doc
```

First, define the `this` keyword in your own words and explain how this example demonstrates how it works.
