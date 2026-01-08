class Day {
    #day_number;
    #month_index;
    #year_number;
    #day_of_week;
    #appointments;
    #date;

    constructor(day_number, month_index, year_number, day_of_week) {
        this.#day_number = day_number;
        this.#month_index = month_index;
        this.#year_number = year_number;
        this.#day_of_week = day_of_week;
        this.#appointments = [];
        this.#date = new Date(this.#year_number,this.#month_index,this.#day_number)
    }

    getDate() {
        return this.#date;
    }
    getAppointments() {
        return this.#appointments;
    }

    addAppointment(appointment) {
        this.#appointments.push(appointment);
    }

    getDayNumber() {
        return this.#day_number;
    }
}


export class Month {
    #monthIndex;
    #year;
    #days;
    #weeks;

    constructor(monthIndex=new Date().getMonth(), year=new Date().getFullYear()) {
        this.#monthIndex = monthIndex % 12;
        this.#year = year
        this.#days = [];
        this.#weeks = [];
        this.months_of_the_year = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        this.#buildWeeks();
    }

    getMonthIndex() {
        return this.#monthIndex;
    }

    getYear(){
        return this.#year;
    }

    getNumberOfDays() {
        return new Date(this.#year,this.#monthIndex + 1,0).getDate()
    }

    getWeekDayStart() {
        return new Date(this.#year,this.#monthIndex,1).getDay()
    }

    getNumberOfWeeks() {
        
        return Math.ceil((this.getNumberOfDays() + this.getWeekDayStart()) / 7)
    }

    getMonthName() {
        return this.months_of_the_year[this.#monthIndex]
    }

    setMonthIndex(index) {
        this.#monthIndex = index;
    }

    setYear(year) {
        this.#year = year;
    }

    nextMonth() {
        let added = this.#monthIndex + 1;

        if(added > 11) {
            this.#monthIndex = added % 12;
            this.#year++;
        }else{
            this.#monthIndex = added; // para o caso de o índice exceder 11
        }
        this.#buildWeeks()
        return this.#monthIndex;
    }

    previousMonth() {
        let subtracted = this.#monthIndex - 1;
        
        if(subtracted < 0) {
            this.#monthIndex = 11;
            this.#year--;
        }else{
            this.#monthIndex = subtracted; // para o caso de o índice exceder 11
        }
        this.#buildWeeks()
        return this.#monthIndex;
    }


    #buildWeeks() {
        
        let weeks = [];
        let counterDays = 1;

        for (let i=0; i<this.getNumberOfWeeks(); i++) {
            weeks.push([]);
        }

        for (let i=0; i<weeks.length; i++) { // Exemplo: i<5 semanas
            for (let j=0; j<7; j++) {
                if (i === 0){  // verifica se é a primeira semana
                    if (j >= this.getWeekDayStart()){
                        weeks[i].push(new Day(counterDays, this.getMonthIndex(), this.getYear(), j))
                        counterDays++;
                    } else {
                        weeks[i].push(null);
                    }
                } else if (counterDays <= this.getNumberOfDays()) {
                    weeks[i].push(new Day(counterDays, this.getMonthIndex(), this.getYear(), j))
                    counterDays++;
                } else {
                    weeks[i].push(null);
                }

            }
        }
        this.#weeks = weeks;
    }

    getWeeks() {
        return this.#weeks;
    }

}

// let mo = new Month(0,2026)
// console.log(mo.getWeeks())




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


export default class Calendar {
    // implentar verificação de ano bissexto?
    #month;

    constructor() {
        this.todayDate = new Date();
        this.#month = new Month(this.todayDate.getMonth(), this.todayDate.getFullYear()); 
    }

    getTodayDate() {
        return this.todayDate;
    }

    getPresentMonth() {
        return this.#month.getMonthIndex();
    }

    goToNextMonth() {
        return this.#month.nextMonth()
    }

    goToPreviousMonth() {
        return this.#month.previousMonth()
    } 

    getPresentYear() {
        return this.#month.getYear();
    }

    goToDate(date) {
        pass
    }

    getMonthName() {
        console.log(this.#month.getMonthName())
        return this.#month.getMonthName();
    }

    drawCalendar(month=this.todayDate.getMonth(),year=this.todayDate.getFullYear()) {
        this.#month.setMonthIndex(month);
        this.#month.setYear(year);
        let monthString = this.#month.getMonthName() + "\n";

        for (let i=0; i<this.#month.getWeekDayStart(); i++) {
            monthString = monthString + "__ ";
        }

        for(let i=1; i<=this.#month.getNumberOfDays(); i++) {
           const dayOfWeek = new Date(year,month,i).getDay();
           if(dayOfWeek === 6) {
            monthString = monthString + String(i).padStart(2,"0") + "\n";
           }else{
            monthString = monthString + String(i).padStart(2,"0") + " ";
           }
        }
        console.log(monthString);
        return monthString;
    }

}

