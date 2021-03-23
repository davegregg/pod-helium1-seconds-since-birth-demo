let birthYearInput = 1983 //prompt("What year were you born?")
let birthYear = parseInt(birthYearInput)

let currentYear = new Date().getFullYear()
let secondsInAYear = 365 * 24 * 60 * 60
let yearsSinceBirth = currentYear - birthYear
let approxSecondsSinceBirth = yearsSinceBirth * secondsInAYear

document.write(approxSecondsSinceBirth.toLocaleString())

let userInput = prompt("Huh?")
let surname = "Banks"
let firstName = "Teddy"
let fullName = "Mr. " + surname
    fullName = `Mr. ${surname}`

let message = `<p>Lorem ipsum dolor sit ${userInput} consectetur, adipisicing elit. Vero, reiciendis! Eum est aliquam, velit ${firstName} quibusdam totam ea fugiat, libero accusamus, consequuntur molestias ut? Sequi explicabo ${firstName} velit consectetur ullam!</p>`
// 👆 template string OR template literal
//         👆 that bit, is called "string interpolation"
message += "<p>Commodi perferendis " + firstName + " facis ut aspernatur quia. Et molestiae corporis libero sed. Minima mollitia " + Math.PI + " quisquam qui cum harum. Commodi qui odit enim illum non. Et doloremque qui voluptatem et fuga.</p>"
console.log(message)
document.write(message)