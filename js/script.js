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
var nav_div;
var new_abc;

 var abc_nav = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



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

//alphabet navigation
nav_div = document.createElement('div');
nav_div.setAttribute('id','nav_div');




//container to hold contact
contactlist_container = document.createElement('div');
contactlist_container.setAttribute('id','contactlist');

var create_contact = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    contactlist_container.appendChild(element);
};


//Create a search function

// function search(last_name) {
//      var contactLength = contact.length;
//         for (var i = 0; i < contactLength; i++) {
//              if(search_input.value.match('^' + contact[i].firstname[0] + '.*|\w','gi') === contact[i].first_name ){
// 		        console.log(contact[i]);
// 		    };
//         };
// };

 
// contactlist =  function ( settings, searchData ) {
//     if ( !contact_  ) { 
//         return true;
//     }
 
//     if ( searchData[0].charAt(0) === contact_ ) {
//         return true;
//     }
 
//     return false;
// } );
       
		   
		    


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
    
    contactlist_container.appendChild(nav_div);
    
    
     //loop to create contact
    for(var i=0; i<contact.length; i++){
        create_contact('p','contact_'+i);
        current_contact = document.getElementById('contact_'+i);
        current_contact.textContent = contact[i].first_name + ' ' + contact[i].last_name;
    };  
    
    // created abc divs for organization 
    for(var i=0; i<26; i++){
    
       create_contact('div','nav_div_' + i);
        nav_div = document.getElementById('nav_div_' + i);
        new_abc = document.createElement('p');
        new_abc.setAttribute('id','letter_container_'+i);
        new_abc.textContent = abc_nav[i];
        
        // var letter_container = document.getElementById('letter_container_'+i);
        
        nav_div.appendChild(new_abc); 
    };
    
   
    
    //abc_nav.addEventListener('click',function(event){});
    
   
    
});    
