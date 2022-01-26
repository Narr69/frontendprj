function say_hello(__person: string): string {
    return "Hello" + __person;
}
let user: string = "Jane User";

document.body.textContent = say_hello(user);


 