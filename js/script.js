//initial page
 var contactlist_container;
 var top_div;
 var wifi_div;
 var time_div;
 var battery_div;
 var group_div;
 var title_div;
 var addContact_div;
 var search_input;
 var list_div;
 
 
var create_contact = function(element_type,element_id){
    
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    contactlist_container.appendChild(element);
    
}; 
 
 
 //creating initial page
contactlist_container = document.createElement('div');
contactlist_container.setAttribute('id','contactlist');

top_div = document.createElement('div');
top_div.setAttribute('id','top_div');

search_input = document.createElement('input');
search_input.setAttribute('id','search_display');
search_input.setAttribute('placeholder','search');

list_div = document.createElement('div');
list_div.setAttribute('id','list');

 
 //creating content inside top_div
wifi_div = document.createElement('div');
wifi_div.setAttribute('id','wifi_div');
  
time_div = document.createElement('div');
time_div.setAttribute('id','time_div');
 
battery_div  = document.createElement('div');
battery_div.setAttribute('id','battery_div');
 
group_div  = document.createElement('div');
group_div.setAttribute('id','group_div');

title_div = document.createElement('div');
title_div.setAttribute('id','title_div');

addContact_div = document.createElement('div');
addContact_div.setAttribute('id','addContact_div');
 
 // var contact = ['tiffany', 'khoa', 'veronica', 'nichole', 'alonzo'];






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
document.addEventListener('DOMContentLoaded',function(event){
    
    //append to body
   document.body.appendChild(contactlist_container);
   contactlist_container.appendChild(top_div);
   contactlist_container.appendChild(search_input); 
   contactlist_container.appendChild(list_div);
   
   top_div.appendChild(wifi_div); 
   top_div.appendChild(time_div);
   top_div.appendChild(battery_div); 
   top_div.appendChild(group_div);
   top_div.appendChild(title_div); 
   top_div.appendChild(addContact_div);
    
    
     //document.body.appendChild(input_element);
    //loop to create contact
    // for(var i=0; i<contact.length; i++){
    //     create_contact('tr','contact_'+i);
    //     current_contact = document.getElementById('contact_'+i);
    //     current_contact.textContent = contact[i];
        
        
        
    // };
    
    
    
    
});

