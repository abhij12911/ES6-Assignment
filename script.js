// Using MultiLevel Inheritance-class :
class Cars
{
      constructor(name) // class with constructor and object -
      {
            this.carname = name;
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
      info() // Method
      {
            document.write("I have a " + this.carname +"," + " it is a Mustang");
      }

}
//inherited child-class :
class Car extends Cars
{
      info() // Method
      {
            super.info();
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
} 
let a = new Car("Ford");
a.info();

// Second Example WithOut Child Class
// class Cars {
//       constructor(){
//             let name;
//             console.log("Constructor function");
//       }
//       Output(name){
//             document.write("I have a " + name +"," + " it is a Mustang");
//       }
// }
// let a = new Cars();
// // a.name = "Ford";
// // a.Output();
// // document.write('<br>');
// // a.name = "Thor";
// // a.Output();
// // document.write('<br>');
// a.Output("Ford");