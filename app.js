// class Year {
//     #number

//     constructor(number) {
//         this.#number = number;
//     }

//     isLeapYear() {
//         return (this.#number % 4 === 0 && this.#number % 100 !== 0) || (this.#number % 400 === 0);
//     }
// }


class Month {
    #monthIndex;
    #year;

    constructor(monthIndex, year) {
        this.#monthIndex = monthIndex % 12;
        this.#year = year
        this.days = [];
    }

    getMonthIndex() {
        return this.#monthIndex;
    }

    nextMonth() {
        let added = this.#monthIndex + 1;

        if(added > 11) {
            this.#monthIndex = added % 12;
            this.#year++;
        }else{
            this.#monthIndex = added; // para o caso de o índice exceder 11
        }
        
        return this.#monthIndex;
    }

    previousMonth(index) {
        let subtracted = this.#monthIndex - 1;
        
        if(subtracted < 0) {
            this.#monthIndex = 11;
            this.#year--;
        }else{
            this.#monthIndex = subtracted; // para o caso de o índice exceder 11
        }
        
        return this.#monthIndex;
    }

    getYear(){
        return this.#year;
    }

    getNumberOfDays() {
        pass
    }

    getNumberOfWeeks() {
        pass
    }

}

// let mo = new Month(0, 2025)

// for(let i=0 ; i < 24; i++) {
//     console.log(mo.previousMonth(),mo.getYear())
// }

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

    createAppointment(appointment) {
        this.#appointments.push(appointment)
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
    // implentar verificação de ano bissexto?
    constructor() {
        this.todayDate = new Date();
        this.month = new Month(this.todayDate.getMonth(), this.todayDate.getFullYear());
        this.months_of_the_year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    }

    getTodayDate() {
        return this.todayDate;
    }

    getPresentMonth() {
        return this.month.getMonthIndex();
    }

    goToNextMonth() {
        return this.month.nextMonth()
    }

    goToPreviousMonth() {
        return this.month.previousMonth()
    } 

    getPresentYear() {
        return this.month.getYear();
    }


    goToDate(date) {
        pass
    }

    drawCalendar() {
        pass
    }

}



let calendar = new Calendar();

for(let i=0 ; i < 24; i++) {
    console.log(calendar.goToPreviousMonth(),calendar.getPresentYear())
}