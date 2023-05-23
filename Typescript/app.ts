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
