const Dragon = require('./dragon')

class FriendlyDragon extends Dragon {
    constructor (name, color, lifeGoals, friend) {
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend

    }

    hasLifeGoals() {
        this.lifeGoals.forEach( e => {
            return `${this.name} likes to ${this.lifeGoals}.`
        })
    }

    helpsPeople() {
        return `${this.name} helps their friend ${friend}.`
    }


}

module.exports = FriendlyDragon
