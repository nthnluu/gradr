function calculatePercent(number, total) {
    return (number / total) * 100;
}

function calculateTotalPoints(items) {
    let totalPoints;
    if (items.length === 1) {
        totalPoints = items[0].pointValue;
    } else {
        const pointsArray = items.map((item) => item.pointValue);
        totalPoints = pointsArray.reduce((a, b) => a + b, 0);
    }
    return totalPoints;
}

export class Item {
    constructor(question, answer, pointValue) {
        this.question = question;
        this.answer = answer;
        this.pointValue = pointValue;
    }

    // check if the input is the correct answer
    Score(input) {
        return this.answer === input;
    }
}

class Stats {
    constructor(items) {
        this.score = 0;
        this.possiblePoints = calculateTotalPoints(items);
        this.percentage = 0;
        this.responses = [];
    }

    Update(Item, input, correct) {
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
}

export class Assignment {
    constructor(items) {
        this.items = items;
        this.stats = new Stats(this.items);
    }

    Answer(Item, input) {
        if (Item.Score(input)) {
            this.stats.Update(Item, input, true);
            return true;
        } else {
            this.stats.Update(Item, input, false);
            return true;
        }
    }
}

// const questionOne = new Item('How many days are in a year?', 365, 10);
// const questionTwo = new Item('What is the capital of the US?', 'Washington DC', 10);
// const questionThree = new Item('What is the derivative of a constant?', 0, 10);
// const assignment = new Assignment([questionOne, questionTwo, questionThree]);
//
// assignment.Answer(questionOne, 365)
// console.log(JSON.stringify(assignment));

