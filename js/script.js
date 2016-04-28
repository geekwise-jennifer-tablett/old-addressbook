var top_div;
var group_div;
var title_div;
var addContact_div;
var search_input;
var contact;
var contactlist_container;
var current_;
var new_contact;
var new_element;
//var input_element;

var contact = ['tiffany', 'khoa', 'veronica', 'nichole', 'alonzo'];



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


//create input so users can add contacts
// input_element = document.createElement('input');
// input_element.setAttribute('id','contact_display');
// input_element.setAttribute('placeholder','new contact');


//hit enter to add a new contact
// input_element.addEventListener('keydown',function(event){
//     if(event.keyCode === 13){
//         new_contact = this.value;
//         new_element = document.createElement('p');
//         contact.push(new_contact)
//         console.log(new_contact);
//         new_element.textContent = new_contact;
//         contactlist_container.appendChild(new_element);
//          contactlist_container.children[0].parentElement.insertBefore(new_contact, contactlist_container.children[0]);
//         this.value = null;
            
            
//         };
    
//     });



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
    
    
    
    
})









































//Groups link setup
// var a = document.createElement('a');
// a.setAttribute('href',where link goes);
// a.innerHTML = 'Groups';



 
 






 
 
  






//create input so users can add contacts
// input_element = document.createElement('input');
// input_element.setAttribute('id','contact_display');
// input_element.setAttribute('placeholder','new contact');


// //hit enter to add a new contact
// input_element.addEventListener('keydown',function(event){
//     if(event.keyCode === 13){
//         new_contact = this.value;
//         new_element = document.createElement('tr');
//         contact.push(new_contact)
//         console.log(new_contact);
//         new_element.textContent = new_contact;
//         contactlist_container.appendChild(new_element);
//         this.value = null;
            
            
//         };
    
//     });



//when webpage loads
//document.addEventListener('DOMContentLoaded',function(event){
    
    //append to body
//   document.body.appendChild(contactlist_container);

//    
//   contactlist_container.appendChild(list_div);
   
    

   
   
   
  
   //loop to create contact
    // for(var i=0; i<contact_list.length; i++){
    //     create_contact('p','contact_'+i);
    //     current_contact = document.getElementById('contact_list_'+i);
    //     current_contact.textContent = contact_list[i];
    // };
    
     //document.body.appendChild(input_element);
    //loop to create contact
    // for(var i=0; i<contact.length; i++){
    //     create_contact('tr','contact_'+i);
    //     current_contact = document.getElementById('contact_'+i);
    //     current_contact.textContent = contact[i];
        
        
        
    // };
    
    
    
    
//});

