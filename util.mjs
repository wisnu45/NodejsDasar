import util from "util";

const firstName = "Saya";
const lastName = "Budi";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Saya",
    lastName: "Budi"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));