import Person from './person';

class Teacher extends Person {
    constructor(id, name, age, classes) {
        super(id, name, age);
        this.classes = classes
    }

    introduce() {
        const classNumbers = this.classes ? `Class ${this.classes.map(klass => klass.number).join(', ')}` : 'No Class'
        return super.introduce() + ` I am a Teacher. I teach ${classNumbers}.`
    }

    notify(notifyFun) {
        notifyFun.call()
    }
}

export default Teacher;