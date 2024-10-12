//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}
	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log('${this.name} is studying');
	}
}

class Teacher extends Person {
	teach(){
		console.log('${this.name} is teching');
	}
}

function createStudent(){
	let student = new student('santo, 20');
	student.study();
}
function createTeacher(){
	let teacher = new Teacher('santos, 25');
	teacher.teach();
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
