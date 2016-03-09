if (Meteor.isServer) {

  Meteor.methods({
    'saveSignature':function(url){
      return signatures.insert({signature:url});
    },

    'empty':function(){
    	return signatures.remove({});

    },

    'deleteImg':function(id){
    	return signatures.remove({_id:id});
    }
  })
 
}