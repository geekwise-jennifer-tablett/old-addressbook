var top_div;
var group_div;
var title_div;
var addContact_div;
var search_input;
var contactlist_container;
var current_contact;
var new_contact;
var new_element;
//var input_element;
var contact = [
{
    firsnName: 'tiffany',
    lastName: 'ranish',
    phoneNumber: '555-452-3212',
    email:'blb@fun.com',
},
{
    firsnName: 'khoa',
    lastName: 'thoa',
    phoneNumber: '555-456-1231',
    email:'jljdj@great.com',
},
{
    firsnName: 'alonzo',
    lastName: 'yrigollen',
    phoneNumber: '555-785-4525',
    email:'',
}];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

contact = sortByKey(contact, 'lastName');


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




//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
 //append to body
    contactlist_container.appendChild(top_div);
    document.body.appendChild(contactlist_container);
    
    top_div.appendChild(group_div);
    top_div.appendChild(title_div); 
    top_div.appendChild(addContact_div);
    
    contactlist_container.appendChild(search_input);
    
    //loop to create contact
    for(var i=0; i<contact.length; i++){
        create_contact('p','contact_'+i);
        current_contact = document.getElementById('contact_'+i);
        current_contact.textContent = contact[i];
    };  
});    

