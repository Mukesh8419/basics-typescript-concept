"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// //1. Variable declarations
// //declare new varible
// // ex1.
// let message='Welcom back';
// console.log(message);
// //ex2.
// let x=10;
// const y=20;
// //let x=30;//Error
// //ex3.
// let sum;
// //const title;//Error
// const title='Codevolution';
// //2.Varible Types
//  let isBeginner:boolean =true;
//  let total:number=0;
//  let name:string='Priya';
//  let sentence:string=`My name is ${name}
//  I am a beginner in Typescript`;
//   console.log(sentence);
//   //2 more type null and undefined in typescript
//   let n:null=null;
//   let u:undefined=undefined;
//   let list1:number[]=[1,2,3];
//   let list2:Array<number>=[1,2,3];
//   let person1:[string,number]=['Chris',22];
//  enum Color {Red=5,Green,Blue};
//  let c:Color=Color.Green;
//  console.log(c);
// // data type of :-any
//  let randomValue:any=10;
//  randomValue=true;
//  randomValue='Priya';
// //  let myVariable:any=10;
// //  console.log(myVariable.name)
// //  myVariable();//call fn
// //  myVariable.toUpperCase();
//  //unknown type
//  //functions
//  let myVariable:unknown=10;
//  function hasName(obj:any):obj is {name:string}{
//      return !!obj &&
//      typeof obj==='object' &&
//      'name' in obj
//  }
//  if (hasName(myVariable)) {
//      console.log(myVariable.name);
//      }
//      (myVariable as string).toUpperCase();
// //Type inference
// // ex.1
// // let a;
// // a=10;
// // a=true;
// // ex.2
// let b=20;
// //b=true; //can't possible number=true(boolean)
// //solution:- MultiType define through pipeline(|)symbol
// let multiType:number|boolean;
// multiType=20;
// multiType=true;//IntelliSense Support
// //ex.3
// let anyType:any;
// anyType=20;
// anyType=true;//no IntelliSense support
// //there are 2 reason:1st.:- The union type restrict to specified type where's anytype no restriction.ex. i could assign string value to anytype of variable but not multitype variable because its show error.
// // 2nd reason:IntelliSense support:-for ex.:-after assigning a value 20 ->(Ex.2 multiType=20;multiType.show hereto list of method for no. type) when a try intellisense we can see list of method which supported a number type
// //***********finished Varible Types */
// //3.Functions
// //let create simple fn.
//  function add(num1:number,num2:number):number{
//     if(num2)//b reuired parameter
//      return num1+num2;
//      else
//      return num1;
//  }
//  add(5,10);//15
//  add(5);//15(because it takes default parameter value) always b required parameter<--soln//undefined
// // define 2 of them 1.optional parameter,2.Default parameter
// //in typescript end of parameter assign ? marks-->are optional
// //ex.(num1?:number,num2?:number)-->?marks optional
//4.Interface:-
//ex1. object have 2 properties->fname,lname
// function fullName(person:{fName:string,lName:string}){
//     console.log(`${person.fName} ${person.lName}`);
// }
// let p={
//     fName:'Bruce',
//     lName:'Wayne'
// };
// fullName(p);//fn calling//Bruce Wayne
//ex.2. interface
// interface Person{
//     fName:string;
//     lName:string;
// }
// function fullName(person:Person}){//pass the interface name
//     console.log(`${person.fName} ${person.lName}`);
// }
// let p={
//     fName:'Bruce',
//     lName:'Wayne'
// };
// fullName(p);//fn calling//Bruce Wayne
//5.Class and 6.access modifier:- public,private or protected
//how to create class
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}()); //add protected access modifier public
//protectecd access modifier create error    constructor(name:string) {
this.employeeName = name;
greet();
{
    console.log("Good Morning " + this.employeeName);
}
var emp1 = new Employee('vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce'); //child class name
m1.delegateWork(); //m1.childclass method
m1.greet(); //m1.parentclass method
console.log(m1.employeeName);
//protectecd access modifier create error
