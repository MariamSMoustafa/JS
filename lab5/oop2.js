class Person{
    #healthRate=50;
    constructor(fullName,money,sleepMood){
                this.fullName=fullName;
                this.money=money;
                this.sleepMood=sleepMood;
               // this.#healthRate=healthRate;
                }
            sleep=function(hours){
                if(hours === 7){
                this.sleepMood=="Happy";   
                }else if(hours < 7){
                this.sleepMood=="Tired";
                }else if(hours > 7){
                this.sleepMood=="Lazy";
                }
                return this.sleepMood; 
              }
            eat=function(meals){
                if(meals === 3){
                this.healthRate==100;
                }else if(meals === 2 ){
                this.healthRate==75;
                }else if(meals == 1){
                this.healthRate==50;
                }
                return this.gethealthRate();
             }
             buy=function(items){
                for (let i = 0; i < items; i++) {
                this.money -=10;
                }
                return this.money;               
             }
            get healthRate(){
                return this.#healthRate=50;
            }
            set healthRate(value){
                this.#healthRate = value
                if ( value > 100)
                this.#healthRate= 100;
            }   
}
class Employee extends Person{
  #salary=1000;
  constructor(fullName,money,sleepMood,id,email,workMood,isManager){
    super(fullName,money,sleepMood)
    this.id=id;
    this.email=email;
    this.workMood=workMood;
    this.isManager=isManager;
  }
  get salary(){
    return this.#salary=1000;
  }
  set salary(value){
    this.#salary=value;
    if(value <1000)
    this.#salary=1000;
  }
  work=function(hours){
    if(hours === 8){
    this.workMood="happy";
    }else if(meals > 8 ){
      this.workMood="lazy";
    }else if(meals <8){
      this.workMood="tired";
    }
    return this.workMood;
  }
}


class Office {
  constructor(officeName,employees){
    this.name=officeName;
    this.employees=employees;
  }
  getAllEmployees=function(){
    return this.employees;
  }
  getEmployee=function(empId){
    var employees=0;
    this.employees.forEach(element => {
      if(element.id ==empId){
       employees=element;
      }
    });
       return employees;
  }
  hire=function(Employee){
    this.employees.push(Employee);
    return this.employees;
    console.log("The employee is hired");
  }
  fire=function(empId){
    var employees=0;
    this.employees.forEach(element => {
      if(element.id ==empId){
        console.log(element)
        var index=this.employees.indexOf(element);
        this.employees.splice(index,1);
      }
    });
    console.log("this employee is fired");
    return this.employees;
  }
}
const emp1=new Employee("Mariam Saad Moustafa",6000,"Happy",1,"mmm@.com","happy","Yes");
const emp2=new Employee("Ahmed Mohamed",5000,"Tired",2,"aaa@5","lazy","No");
const  arr=[emp1,emp2];
const off1=new Office("The Office",arr);
// console.log(arr);
// console.log(off1);

var stop=false;
while(!stop){
  var x=prompt("Enter the number of method:\n 1-add Employee \n 2-delete employee \n 3-get all current employees \n 4-get spcified employee");
   //Hire function
   if(x=='1'){
      var a=prompt("Enter ID:");
      var b=prompt("Enter FullName:");
      var c=prompt("Enter Email:");
      var d=prompt("Enter Salary(Money):");
      var e=prompt("Enter SleepMood(Happy , Tired ,Lazy):");
      var f=prompt("Enter HealthRate:");
      var g=prompt("Enter WorkMood(Happy , Tired ,Lazy):");
      var h=prompt("The Employee is Manager or not");
      const Mariam=new Employee(a,b,c,d,e,f,g,h);
      off1.hire(Mariam);
      alert("Mariam is hired succesfully");
      //console.log("Mariam is hired succesfully")
   }
      else if(x=='2'){ //fire function
        let n=Number(prompt("Enter Employee ID:"));
        off1.fire(n);
        alert("The Employee is fired succesfully");
      }

      else if(x=='3'){
        let y=off1.getAllEmployees();
        for (let i = 0; i < y.length; i++) {
          alert("Employee number : "+(i+1)+"\nName: "+y[i].fullName+"\nSleep Mood: "+y[i].sleepMood+"\nHealth Rate: "+y[i].healthRate+ "\nID: "+y[i].id+"\nemail: "+y[i].email+"\nWork Mood: "+y[i].workMood+"\nsalary:"+y[i].salary+"\nIs Manger: "+y[i].isManager+"\n");
        }
      }
       else if(x=='4'){
        let z=Number(prompt("enter the ID of employee : "));
        let x= off1.getEmployee(z); 
        alert("Employee information : \nName: "+x.fullName+"\nSleep Mood: "+x.sleepMood+"\nHealth Rate: "+x.gethealthRate+"\nID: "+x.id+"\nemail: "+x.email+"\nWork Mood: "+x.workMood+"\nsalary:"+x.salary+"\nIs Manger: "+x.isManager+"\n");      }
      
        var answer = prompt("do you want to exit (yes,no)");
        if(answer=="yes")
        {
            stop = true;
        }
        
}


