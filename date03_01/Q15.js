let sentenceBuilder = {
  subject: "I",
  verb: "am",
  object: "coding",
  buildSentence: function() {
    if(this.subject && this.verb && this.object){
      console.log(`${this.subject} ${this.verb} ${this.object}`)  
    }
    else this.throwError();
  },
  updateProperty: function(property, value) {
    if(this[property]) this[property] = value;
    else this.throwError();
  },
  throwError : function(){
    console.log("Invalid property");
  }
};

// Example 1:
sentenceBuilder.buildSentence()


// Example 2:
sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.buildSentence()

// Example 3:
sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.updateProperty("verb", "is learning");
sentenceBuilder.buildSentence();

// Example 4:
sentenceBuilder.updateProperty("mood", "happy");

// Example 5:
sentenceBuilder.updateProperty("verb", "");
sentenceBuilder.buildSentence();