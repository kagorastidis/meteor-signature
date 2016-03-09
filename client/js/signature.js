if (Meteor.isClient) {

  Template.signature.helpers({

    'signature':function(){
      return signatures.find();
    }

  });

  Template.signature.events({
    'click .reset':function(e){
      e.preventDefault();
      $("#signature").jSignature('reset');
    },

    'click .submit':function(e){
      e.preventDefault();
      var url="data:".concat($('#signature').jSignature("getData", "svgbase64"));
      Meteor.call('saveSignature',url);
    },

    'click .thumb':function(){
      Meteor.call('deleteImg',this._id);
    }


  });

  Template.signature.onRendered(function(){
   $("#signature").jSignature()  
 })
  
}

