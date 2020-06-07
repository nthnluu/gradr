<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Gradius.js</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A simple and elegant library for creating and scoring assesments.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Gradius.js allows you to easily create, store, and score assesments.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them.

```
Give examples
```

### Installing
A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>
Explain how to run the automated tests for this system.

### Break down into end to end tests
Explain what these tests test and why

```
Give an example
```

### And coding style tests
Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>
### Items
Get started by creating an `Item`:
```
// Usage: Item(Question, Answer)
const questionOne = new Question('How many days are in a year?', 365);
```
An `Item` is the base unit for assignments. You can call various methods on the `Item` class, such as:
```
questionOne.Score(360);
// returns false
```
### Assignments
Once you have created your items, you can bundle them together into an `Assignment`:
```
const questionOne = new Item('How many days are in a year?', 365);
const questionTwo = new Item('What is the capital of the US?', 'Washington DC');
const questionThree = new Item('What is the derivative of a constant?', 0);

// Usage: Assignment([items])
const assignment = new Assignment([questionOne, questionTwo, questionThree]);
```
Now that we initialized our assignment, we can update it by using the `Answer()` method:
```
assignment.Answer(questionOne, 365)
//returns true or false depending on the correctness of the provided input.
```
The `Answer()` method not only checks if the provided input is correct, it also updates the `Assignment` object's `stats`:
```
console.log(assignment);
// returns
// [{  
//     ...
//     stats: {
//         score: 10,
//         possiblePoints: 30,
//         percentage: 33.33333333333333,
//         responses: [[Object]]
//     }
// }]
```
You can take a look at the documentation to see all of the properties that are contained within the `Assignment` object.

## 🚀 Deployment <a name = "deployment"></a>
TODO

## ✍️ Authors <a name = "authors"></a>
- [@nthnluu](https://github.com/nthnluu) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- hank
- Inspiration
- References
