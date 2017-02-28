export default class conjugation {
    constructor(conjugationObject) {
        this.conjugationObject = conjugationObject
        this.name = null

        this.init()
    }

    init() {
        this.setName(this.getConjugationObject()['-name'])
    }

    getTimes() {
        let times = {}
        for(let categoryKey in this.getConjugationObject()) {
            if(categoryKey !== '-name') {
                if(times[categoryKey] === undefined) {
                    times[categoryKey] = []
                }
                for(let timeKey in this.getConjugationObject()[categoryKey]) {
                    times[categoryKey].push(timeKey)
                }
            }
        }

        return times
    }

    getTerminaisonsByTimes(timesObject = {}) {
        let returned = {}
        let formatTime = (time) => {
            let tmp = []
            if(time.p !== undefined) {
                time.p.forEach(value => {
                    tmp.push(value.i)
                })
            }
            return tmp
        }

        for(let categoryName in timesObject) {
            let category = this.getConjugationObject()[categoryName],
                times = timesObject[categoryName]
            returned[categoryName] = {}

            if(Array.isArray(times)) {
                times.forEach(time => {
                    returned[categoryName][time] = formatTime(category[time])
                })
            } else {
                returned[categoryName][times] = formatTime(category[times])
            }
        }

        return returned
    }

    getName() {
        return this.name
    }

    setName(value) {
        this.name = value
        return this
    }

    getConjugationObject() {
        return this.conjugationObject
    }

    setConjugationObject(value) {
        this.conjugationObject = value
        return this
    }

}