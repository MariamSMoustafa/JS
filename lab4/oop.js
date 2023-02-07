// [1] Constructor functions
// function Person(fullName,money,sleepMood,healthRate){
//     this.fullName=fullName;
//     this.money=money;
//     this.sleepMood=sleepMood;
//     this.healthRate=healthRate;
//     this.sleep=function(hours){
//         if(hours === 7){
//             this.sleepMood=="Happy";   
//         }else if(hours < 7){
//           this.sleepMood=="Tired";
//         }else if(hours > 7){
//           this.sleepMood=="Lazy";
//         }
//         return this.sleepMood; 
//     };
//     this.eat=function(meals){
//         if(meals === 3){
//           this.healthRate==100;
//         }else if(meals === 2 ){
//           this.healthRate==75;
//         }else if(meals == 1){
//           this.healthRate==50;
//         }
//     };
//     this.buy=function(items){
//           for (let i = 0; i < items; i++) {
//                this.money -=10;
//           }
//           return this.money;
             
//     };
// }
// let person1=new Person("Mariam Saad Moustafa",6000,"Happy",50);

// console.log(person1);
// person1.sleep(9);
// person1.eat(2);
// person1.buy(5);
// console.log(person1);
/////////////////////////////////////////////////////////////////////////////////////////////////////

// //[2]Using Classes
// class Person{
//     constructor(fullName,money,sleepMood,healthRate){
//         this.fullName=fullName;
//         this.money=money;
//         this.sleepMood=sleepMood;
//         this.healthRate=healthRate;
//     }
//     sleep=function(hours){
//                 if(hours === 7){
//                     this.sleepMood=="Happy";   
//                 }else if(hours < 7){
//                   this.sleepMood=="Tired";
//                 }else if(hours > 7){
//                   this.sleepMood=="Lazy";
//                 }
//                 return this.sleepMood; 
//     }
//     eat=function(meals){
//                 if(meals === 3){
//                   this.healthRate==100;
//                 }else if(meals === 2 ){
//                   this.healthRate==75;
//                 }else if(meals == 1){
//                   this.healthRate==50;
//                 }
//      }
//      buy=function(items){
//                   for (let i = 0; i < items; i++) {
//                        this.money -=10;
//                   }
//                   return this.money;
                     
//     }
// }
// let person1=new Person("Mariam Saad Moustafa",6000,"Happy",50);

// console.log(person1);
// person1.sleep(9);
// person1.eat(2);
// person1.buy(5);
// console.log(person1);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//[3]Using Objects Linking to Other Objects (OLOO)

// const Person={
//     init(fullName,money,sleepMood,healthRate){
//         this.fullName=fullName;
//         this.money=money;
//         this.sleepMood=sleepMood;
//         this.healthRate=healthRate;
//         this.sleep=function(hours){
//         if(hours === 7){
//             this.sleepMood=="Happy";   
//         }else if(hours < 7){
//           this.sleepMood=="Tired";
//         }else if(hours > 7){
//           this.sleepMood=="Lazy";
//         }
//         return this.sleepMood; 
//     }
//         this.eat=function(meals){
//          if (meals==3) {
//          this.healthRate=100; 
//          }
//         else if(meals==2){
//         this.healthRate=75;
//          }
//         else if(meals==1){
//          this.healthRate=50;
//         }
//          return this.healthRate;
//     }
//         this.buy=function(items){
//           for (let i = 0; i < items; i++) {
//                this.money -=10;
//           }
//           return this.money;
             
//     }
//     }  
// }

// const person1=Object.create(Person);
// person1.init("Mariam Saad Moustafa",6000,"Happy",50);
// console.log(person1.fullName);
// console.log(person1);
// console.log(person1.sleep(8));
// console.log(person1.buy(20));
// console.log(person1.eat(1));
///////////////////////////////////////////////////////////////////////////

//[4]Using Factory functions
function Person(fullName,money,sleepMood,healthRate){
    return{
        fullName,
        money,
        sleepMood,
        healthRate,
    sleep(hours){
        if(hours === 7){
            this.sleepMood=="Happy";   
            }else if(hours < 7){
             this.sleepMood=="Tired";
            }else if(hours > 7){
             this.sleepMood=="Lazy";
            }
             return this.sleepMood; 
    },
    eat (meals){
            if (meals==3) {
            this.healthRate=100; 
            }
            else if(meals==2){
            this.healthRate=75;
            }
            else if(meals==1){
            this.healthRate=50;
            }
            return this.healthRate; 
    },
    buy(items){
        for (let i = 0; i < items; i++) {
            this.money -=10;
            }
            return this.money;      
    }
  }
}
const person1=Person("Mariam Saad Moustafa",6000,"Happy",50);
  console.log(person1);
  console.log(person1.sleepMood);
  console.log(person1.healthRate);
  console.log(person1.fullName) ;
  console.log(person1.buy(20));
  console.log(person1.sleep(20));
  console.log(person1.eat(1));


