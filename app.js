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

    getMonthIndex() {
        return this.#monthIndex;
    }

    getNumberOfDays() {
        pass
    }

    getNumberOfWeeks() {
        pass
    }
}







class Day {
    #day_number;
    #month_name;
    #year_number;
    #day_of_week;
    #appointments;

    constructor(day_number, month_name, year_number, day_of_week) {
        this.#day_number = day_number;
        this.#month_name = month_name;
        this.#year_number = year_number;
        this.#day_of_week = day_of_week;
        this.#appointments = [];
    }

    getAppointments() {
        return this.#appointments;
    }

    createAppointment() {
        pass
    }
}

class Appointment {
    #singer;
    #inviter;
    #date;

    constructor(singer, inviter, date) {
        this.#singer = singer;
        this.#inviter = inviter;
        this.#date = date;
    }

    updateDetails() {
        pass
    }

    deleteAppointment() {
        pass
    }
}

class Singer {
    #name;
    #number;
    #church;

    constructor(name, number, church) {
        this.#name = name;
        this.#number = number;
        this.#church = church;
    }

    updateDetails() {
        pass
    }

    deleteSinger() {
        pass
    }
}


class Calendar {
    
    constructor() {
        this.todayDate = new Date();
        this.presentMonth = new Month(this.todayDate.getMonth());
        this.presentYear = new Year(this.todayDate.getFullYear())
        this.months_of_the_year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    }

    getTodayDate() {
        return this.todayDate;
    }

    getPresentMonth() {
        return this.presentMonth;
    }

    getPresentYear() {
        return this.presentYear;
    }

    nextMonth() {
        pass
    }

    previousMonth() {
        pass
    }   

    goToDate(date) {
        pass
    }

    drawCalendar() {
        pass
    }

}



let calendar = new Calendar();
console.log(calendar.presentMonth.getMonthIndex());