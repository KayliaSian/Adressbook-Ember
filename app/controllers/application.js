import Ember from 'ember';

export default Ember.Controller.extend({
        
    firstName: null,
    surName: null,
    phoneNumber: null,
    mobileNumber: null,
    
    //Action for the 'add-Contact'-Button
    actions:{
        addContact(){
            
            console.log("Hello");
          var contact = this.store.createRecord('contact', {
              
               firstName: "Walter",
               surName: "hello",
               phoneNumber: "Hi",
               mobileNumber: "Nice"
              
            /*this.get('firstName'),
              this.get('surName'),
              this.get('phoneNumber'),
              this.get('mobileNumber')*/
              
            })
            contact.save();
            
        }
    }
});
