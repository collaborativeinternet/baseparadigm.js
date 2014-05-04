var Edge = function (knowns, labels, discoverables, authors, contexts, sequences, queries) {
  this.knowns = knowns
  this.labels = labels
  this.discoverables = discoverables
  this.authors = authors
  this.contexts = contexts
  this.sequences = sequences
  this.queries = queries
}

Edge.prototype = {
  getBytes: function () {
    // list = map {
      // for every edge field
        // for every value in that field
          // produce a pair of contentID for the field, and the contentID for the value
    // sort and deduplicate the list
    // reduce list to binary array
    // store it as this.bytes
    // return this.bytes
    return "the bytes"
  },
  getContentID: function () {
    this.contentID = new CommonsContentID(this.getBytes())
    return this.contentID
  },
}

CommonsContentID = function (binaryArray) {
  // hash the array (SHA384)
  // this.binaryID = "the hash"
  this.binaryID = "hash of "+ binaryArray
}


var e = new Edge(['asdf'], ['is'], ['gibberish'])
console.log(e)
console.log(e.getContentID())
