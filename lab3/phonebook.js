var contacts = [ 
    {
    name:"Mariam",
    phone:"01126615029"
    }
];
function addNewContact(){
var newContact = {};
newContact.name = prompt("enter contact name");
newContact.phone = prompt("enter contact phone");
contacts.push(newContact);
} 

function searchForContact(){
    var searchKeyword = prompt("enter name or phone")
    for(var i =0;i<contacts.length;i++){
        var currentContact = contacts[i];
        if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
            alert("name = "+currentContact.name +" & phone = "+currentContact.phone);
            break;
        }
    }
}
function runPhoneBook(){
    var stop = false;
    do{
        var op = prompt("what do you want (add,search,exit)");
        switch(op){
                case "add":
                    addNewContact();
                    break;
                case "search":
                    searchForContact();
                    break;
                case "exit":
                    stop = true;
                    break;

        }
    }while(!stop)
} 
runPhoneBook();