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

class Item {
    constructor(question, answer, pointValue) {
        this.question = question;
        this.answer = answer;
        this.pointValue = pointValue;
    }

    // check if the input is the correct answer
    Score(input) {
        return this.answer.includes(input);
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
            this.percentage = calculatePercentage(this.score, this.possiblePoints);
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

class Assignment {
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
