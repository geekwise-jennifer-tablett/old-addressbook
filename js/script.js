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
var current_letter

//for new contact when + is clicked
var new_contact_div;
var new_contact_top;
var cancel_div;
var title_two_div;
var done_div;
var new_contact_bottom
var photo_container_div;
var name_group_div;

//for organizing names
 var abc_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



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
       
		   
		   
//creating new contact container
new_contact_div = document.createElement('div');
new_contact_div.setAttribute('id','new_contact_div');
		    
new_contact_top = document.createElement('div');
new_contact_top.setAttribute('id','new_contact_top');

//inside new_contact_top
cancel_div  = document.createElement('div');
cancel_div.setAttribute('id','cancel_div');
cancel_div.innerHTML = 'Cancel';

title_two_div = document.createElement('div');
title_two_div.setAttribute('id','title_div');
title_two_div.innerHTML = 'New Contacts';

done_div = document.createElement('div');
done_div.setAttribute('id','cancel_div');
done_div.innerHTML = 'Done';






new_contact_bottom = document.createElement('div');
new_contact_bottom.setAttribute('id','new_contact_bottom');

photo_container_div = document.createElement('div'); 
photo_container_div.setAttribute('id','photo_container_div');
 
name_group_div = document.createElement('div');
name_group_div.setAttribute('id','name_group_div')


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
    
  //for now appended eventualy on click display
  document.body.appendChild(new_contact_div);
  new_contact_div.appendChild(new_contact_top);
  
  new_contact_top.appendChild(cancel_div);
  new_contact_top.appendChild(title_two_div);
  new_contact_top.appendChild(done_div);
  
  new_contact_div.appendChild(new_contact_bottom);
  new_contact_bottom.appendChild(photo_container_div);
  new_contact_bottom.appendChild(name_group_div);
    
    // created abc divs for organization 
    for(var i=0; i<26; i++){
    
       create_contact('div','nav_div_' + i);
        nav_div = document.getElementById('nav_div_' + i);
        new_abc = document.createElement('p');
        new_abc.setAttribute('id','letter_container_'+i);
        new_abc.textContent = abc_array[i];
        
        nav_div.appendChild(new_abc); 
    };
       
       
   //organization of names
    for(i in abc_array){
       var current_letter = abc_array[i];
    //   console.log(current_letter);
       var current_new_abc = document.getElementById('nav_div_' +i);
    //   console.log(current_new_abc);
       
       //grabbing letters in name
       for(i in contact){
           current_letter = current_letter.toLowerCase();
    //       console.log(current_letter);
           var regex_pattern = new RegExp('^' + current_letter + '.*|\w','gi');
           
           if(contact[i].first_name.match(regex_pattern)){
           var inner_contact = document.createElement('p');
           inner_contact.setAttribute('class','inner_contact');
           inner_contact.textContent = contact[i].first_name + ' ' + contact[i].last_name;
           current_new_abc.appendChild(inner_contact);
           
           };
       
       }; 
       
    };
    
    //abc_nav.addEventListener('click',function(event){});
    
  
    
});    
