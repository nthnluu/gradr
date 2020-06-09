"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assignment = exports.Item = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function calculatePercent(number, total) {
  return number / total * 100;
}

function calculateTotalPoints(items) {
  var totalPoints;

  if (items.length === 1) {
    totalPoints = items[0].pointValue;
  } else {
    var pointsArray = items.map(function (item) {
      return item.pointValue;
    });
    totalPoints = pointsArray.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  return totalPoints;
}

var Item = /*#__PURE__*/function () {
  function Item(question, answer, pointValue) {
    _classCallCheck(this, Item);

    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
  } // check if the input is the correct answer


  _createClass(Item, [{
    key: "Score",
    value: function Score(input) {
      return this.answer === input;
    }
  }]);

  return Item;
}();

exports.Item = Item;

var Stats = /*#__PURE__*/function () {
  function Stats(items) {
    _classCallCheck(this, Stats);

    this.score = 0;
    this.possiblePoints = calculateTotalPoints(items);
    this.percentage = 0;
    this.responses = [];
  }

  _createClass(Stats, [{
    key: "Update",
    value: function Update(Item, input, correct) {
      this.responses.push({
        item: Item,
        input: input,
        correct: correct,
        correctAnswer: Item.answer
      });

      if (correct) {
        this.score = this.score + Item.pointValue;
        this.percentage = calculatePercent(this.score, this.possiblePoints);
      } else {
        if (this.score === 0 || this.score < Item.pointValue) {
          return;
        } else {
          this.score = this.score - Item.pointValue;
        }

        this.percentage = calculatePercent(this.score, this.possiblePoints);
      }
    }
  }]);

  return Stats;
}();

var Assignment = /*#__PURE__*/function () {
  function Assignment(items) {
    _classCallCheck(this, Assignment);

    this.items = items;
    this.stats = new Stats(this.items);
  }

  _createClass(Assignment, [{
    key: "Answer",
    value: function Answer(Item, input) {
      if (Item.Score(input)) {
        this.stats.Update(Item, input, true);
        return true;
      } else {
        this.stats.Update(Item, input, false);
        return true;
      }
    }
  }]);

  return Assignment;
}(); // const questionOne = new Item('How many days are in a year?', 365, 10);
// const questionTwo = new Item('What is the capital of the US?', 'Washington DC', 10);
// const questionThree = new Item('What is the derivative of a constant?', 0, 10);
// const assignment = new Assignment([questionOne, questionTwo, questionThree]);
//
// assignment.Answer(questionOne, 365)
// console.log(JSON.stringify(assignment));


exports.Assignment = Assignment;