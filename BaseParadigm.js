var Edge = function (edge) {
  this.knowns = edge.knowns
  this.labels = edge.labels
  this.discoverables = edge.discoverables
  this.authors = edge.authors
  this.contexts = edge.contexts
  this.sequences = edge.sequences
  this.queries = edge.queries
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

module.exports = Edge

//var e = new Edge(['asdf'], ['is'], ['gibberish'])
//console.log(e)
//console.log(e.getContentID())
