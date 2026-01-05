// class Student extends Person {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//   }

//   canStudyArchery() {
//     return this.#year > 1;
//   }
// }

class Calendar {
    
    construtor() {
        this.presentMonth = new Month();
        this.presentYear = new Year();
        this.months_of_the_year = [];
    }
}
class Year {
    #number

    constructor(number) {
        this.#number = number;
    }

    isLeapYear() {
        return (this.#number % 4 === 0 && this.#number % 100 !== 0) || (this.#number % 400 === 0);
    }
}


class Month {
    #monthIndex;
    #year;
    constructor(monthIndex) {
        this.#monthIndex = monthIndex;
        this.days = [];
    }
    getNumberOfDays() {
        pass
    }

    getNumberOfWeeks() {
        pass
    }
}

class Day {
    pass
}

class Appointment {
    pass
}

class Singer {
    pass
}