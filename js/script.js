var addressbook;
var top_div;
var group_div;
var title_div;
var addContact_div;
var search_input_container;
var search_input;
var contactlist_container;
var current_contact;
var new_contact;
var new_element;
//var input_element;


var contact = [
{
    first_name: 'tiffany',
    last_name:'ranish',
    phoneNumber: '555-452-3212',
    email:'blb@fun.com',
},
{
    first_name: 'khoa',
    last_name:'thoa',
    phoneNumber: '',
    email:'jljdj@great.com',
},
{
    first_name: 'alonzo',
    last_name: 'yrigollen',
    phoneNumber: '555-785-4525',
    email:'',
}];







contact.sort(function(smaller_value, larer_value) {
    return smaller_value.lastName > larer_value.lastName
        
    });



addressbook = document.createElement('div');
addressbook.setAttribute('id','addressbook');


top_div = document.createElement('div');
top_div.setAttribute('id','top_div');

//creating content inside top_div
group_div  = document.createElement('div');
group_div.setAttribute('id','group_div');
group_div.innerHTML = 'Groups';

title_div = document.createElement('div');
title_div.setAttribute('id','title_div');
title_div.innerHTML = 'All Contacts';

addContact_div = document.createElement('div');
addContact_div.setAttribute('id','addContact_div');
addContact_div.innerHTML = '+';

search_input_container = document.createElement('div');
search_input_container.setAttribute('id','search_input_container');

search_input = document.createElement('input');
search_input.setAttribute('id','search_display');
search_input.setAttribute('placeholder','search');



//container to hold contact
contactlist_container = document.createElement('div');
contactlist_container.setAttribute('id','contactlist');

var create_contact = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    contactlist_container.appendChild(element);
};


//Create a search function

function search(last_name) {
     var contactLength = contact.length;
        for (var i = 0; i < contactLength; i++) {
             if(contact[i].last_name == last_name){
		        contact(contact[i]);
		    };
        };
};
       
		   
		    


//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
 //append to body
    document.body.appendChild(addressbook);
    addressbook.appendChild(top_div);
    
    
    top_div.appendChild(group_div);
    top_div.appendChild(title_div); 
    top_div.appendChild(addContact_div);
    
    addressbook.appendChild(search_input_container);
    search_input_container.appendChild(search_input);
    
    addressbook.appendChild(contactlist_container);
    
     //loop to create contact
    for(var i=0; i<contact.length; i++){
        create_contact('p','contact_'+i);
        current_contact = document.getElementById('contact_'+i);
        current_contact.textContent = contact[i].first_name + ' ' + contact[i].last_name;
    };  
    
    
    
});    
