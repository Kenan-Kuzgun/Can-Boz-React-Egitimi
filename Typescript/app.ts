// **DataType**
// let employeeName: string = "John Doe";
// let employeeDept: string = "Finance";
// Pre-ES6
// let employeeDesc1: string =
//   employeeName + " works in the " + employeeDept + "department.";
// Post-ES6
// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
// console.log(employeeDesc1);
// console.log(employeeDesc2);
// export {};

//**DataType Array**
// let firstNames: Array<string> = ["Can", "Tuba"];
// let firstNames: string[] = ["Can", "Tuba"];

// Birden fazla tip içeren array
// let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4];
// console.log(values[1]);

//**DataType Tuple**
// let instructor : [number,string] = [1,"Can"];
// var employee: [number, string][];
// employee = [
//   [1, "Steve"],
//   [2, "Bill"],
// ];
// console.log(employee);

//**DataType Object**
//Interface
// type Person = {
//   firsName: string;
//   lastName: string;
//   age: number;
//   jobTitle: PerformanceServerTiming;
// };
// let instructor: Person;

// instructor = {
//   firstName: "Can",
//   lastName: "Boz",
//   age: 29,
//   jobTitle: "Software Engineer",
// };

// console.log(instructor.age);

//**DataType Enum**
// enum Media {
//   Newspaper = 5,
//   Newletter,
//   Magazine,
//   Book,
// }
// console.log(Media.Newletter);
// console.log(Media[3]);

// enum PrintMedia {
//   Newspaper = "Newspaper",
//   Newletter = "Newletter",
//   Magazine = "Magazine",
//   Book = "Book",
// }
// console.log(PrintMedia.Magazine);

//**DataType Union**
// let code: string | number = "123";
// console.log(code);

//**Ternary Operator**
// let x: number = 35;
// let y: number = 55;
// x > y ? console.log("x, y'den büyüktür") : console.log("y,x'den büyüktür");

//**Arrow Functions**
//  function carpim(a:number,b:number):number{
//  return a*b;
//  }

//  let carpim = (a:number,b:number):number => {
//  return a*b;
//  }

//  let carpim = (a:number,b:number):number => a*b;

//**Function Overloading**
//  function add(a:string,b:string):string;
//  function add(a:number,b:number):number;
//  function add(a:any,b:any):any{
//  return a+b;}

//**Rest parameters, TypeScript'de bir fonksiyonun değişken sayıda argümanları kabul etmesini sağlayan bir özelliktir. Rest parameters, fonksiyon parametre listesindeki son parametreye üç nokta (...) işareti ekleyerek tanımlanır. Bu üç nokta işareti, parametre listesindeki diğer parametrelerin sona gelmediğini ve değişken sayıda argümanın kabul edileceğini belirtir.

//  function birlestir(message:string, ...names: string[]) {
//  console.log(message + " " + names.join(","));
//  }
//  birlestir("Merhaba","Can","Osman","Tuba")

//**Class**
// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;

//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName}  ${this.lastName} `;
//   }
// }

//**Inheritence**

// class Employee extends Person {
//   constructor(id: number, firstName: string, lastName: string) {
//     super(id, firstName, lastName);
//   }
// }

// let person = new Person(43, "Can", "Boz");
// console.log(person);
// console.log(person.getFullName());

// let employee = new Employee(29, "Kenan", "Kuzgun");
// console.log(employee.getFullName());

//**Interface**
// interface Person {
//   firstName: string;
//   lastName: string;
//   middleName?: string;
// }

// function getFullName(person: Person) {
//   if (person.middleName) {
//     return `${person.firstName} ${person.middleName} ${person.lastName}`;
//   }
//   return `${person.firstName} ${person.lastName}`;
// }

// let person: Person = {
//   firstName: "Can",
//   middleName: "İbrahim",
//   lastName: "Boz",
// };

// console.log(getFullName(person));

// interface StringFormat {
//   (str: string, isUpper: boolean): string;
// }

// let format: StringFormat;
// format = function (str: string, isUpper: boolean) {
//   return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };

// console.log(format("Can Boz", true));

//**Type Intersection**
// interface Identity {
//   name: string;
//   id: number;
// }

// interface Contact {
//   email: string;
//   phone: string;
// }

// type Employee = Identity & Contact;

// let kisim: Employee = {
//   id: 54,
//   name: "Can Boz",
//   email: "skdfhgdj@gmail.com",
//   phone: "3123124124",
// };

// console.log(kisim);

//**Generics**

// let numbers = [0, 25, 56, 76];
// let names = ["Kenan", "Dogukan", "Kayra"];

// function getRandomElement<T>(items: T[]): T {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// console.log(getRandomElement(numbers));
//console.log(getRandomElement<number>(numbers)); (Şeklinde de dönen verinin tipi kontrol edilebilir.)
// console.log(getRandomElement(names));

//Generic Constraints
// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }

// let person = merge({ name: "Can" }, { age: 29 });

// console.log(person);

// Son 2 videoya tekrar bak.
