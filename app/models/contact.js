import DS from 'ember-data';

//giving the Contact-Model its attributes
export default DS.Model.extend({
    firstName: DS.attr(),
    surName: DS.attr(),
    phoneNumber: DS.attr(),
    mobileNumber: DS.attr()
});
