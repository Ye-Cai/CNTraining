class Class {
    constructor(number) {
        this.number = number
        this.leader = null
    }

    assignLeader(student) {
        if (student.klass === this) {
            student.leader = true
            this.leader = student
            this.leaderListener && this.leaderListener.notify(
                () => console.log(`I am ${this.leaderListener.name}. I know ${student.name} become Leader of Class ${this.number}.`))
        }
    }

    appendMember(student) {
        student.klass = this
        this.joinListener && this.joinListener.notify(
            () => console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined Class ${this.number}.`))
    }

    registerAssignLeaderListener(teacher) {
        this.leaderListener = teacher
    }

    registerJoinListener(teacher) {
        this.joinListener = teacher
    }

    getDisplayName() {
        return `Class ${this.number}`
    }
}

module.exports = Class;