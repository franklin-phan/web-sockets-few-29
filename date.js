class D {
    constructor(...args) {
        this.date = new Date(...args)
    }

    get year() {
        return this.date.getFullYear()
    }

    get month() {
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        const index = this.date.getMonth()
        return months[index]
    }

    get day() {
        let day = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
        const index = this.date.getDay()
        return day[index]
    }
    get mins() {
        return this.date.getMinutes()
    }
    get secs() {
        return this.date.getSeconds()
    }

    get when(){
        const now = new Date()
        const ms = now - this.date
        // const d_year = time/1000/60/60/24/365.25
        // const d_month = Math.floor(d_year*12)
        // const d_day = Math.floor(time/1000/60/60/24)

        const d_year = Math.abs(now.getFullYear() - this.year)
        const d_month =Math.abs((this.date.getMonth() - now.getMonth() + (d_year*12)) ) 
        const d_day = Math.abs(Math.floor(ms/1000/60/60/24))

        console.log(d_year, d_month, d_day, ms)
        let index = 0
        var delta = d_month
        if (d_year < 1 & d_month > 0) {
            delta = `${d_month} months`
        }
        if (d_year >1) {
            const new_d_year = d_year - 1
            const new_d_month = d_month % 12
            delta = `${new_d_year} year${d_year > 2? 's' : ''} and ${new_d_month} month${d_month > 2? 's' : ''}`
        }
        if (d_year <1 & 0 === d_month & d_day < 7) {
            delta = `${d_day} day${d_day > 2? 's' : ''}`
        }
        
        if (ms < 0) {
            index = 2
        }
        if (new Date(this.date) === now) {
            index = 1
        }
        if (ms > 0) {
            index = 0
        } 
        let condition = ['ago','Today','from now']
        return (`${delta} ${condition[index]}`)
    }

}


// const d = new D('11/10/2020') 
// const y = new D('3/9/2021')
// const yy = new D('3/9/2024')
// const yyy = new D('11/18/2020')

// // console.log(d)
// // console.log(d.year)
// // console.log(d.month)
// // console.log(d.day)
// console.log(d.mins)
// console.log(d.secs)
// console.log(y.when)
// console.log(yy.when)
// console.log(yyy.when)