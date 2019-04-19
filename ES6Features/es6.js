//Template Literal

console.log(`hello! I'm a string`);

console.log("string text 1\n" + "string tex2");

console.log(`Hello i'm a string
continue son this line`);

const name = "Maurice"
const day = "Wednesday"
const instructor = {
    name: "Maurice",
    lesson: "ES6",
    greet: function () {
        return `Hello ${this.name} whatever lesson is ${this.lesson}`
    }
}

console.log("Hewwo" + name + "I hope you have a gwate day on" + day)

console.log(`hello ${name} i hope ${day} goes well!`)

console.log(`Hello ${instructor.name} whatever leson is ${instructor.lesson}`)

console.log(instructor.greet())

function foo() {
    let x = true;
    if (x) {
        var usingVar = "im using var";
    }
    console.log(usingVar)
}

foo(); // undefined

//Arrow Functions
const teacher = {
    name: "Jimm",
    speak: function () {

        let boundFunction = function(){
            console.log('Later my name is' + this.name);
        }
    };
    setTimeout(boundFunction, 1000);
};
teacher.speak();