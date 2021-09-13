function data(input){

console.log(input.match(/\w+/g).join(", ").toLocaleUpperCase());
}

data("Hi, how are you?");
