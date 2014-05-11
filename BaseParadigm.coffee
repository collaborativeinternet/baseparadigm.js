
class Edge 
  constructor: (data) ->
    @knowns =        data.knowns?[...]        ? []
    @labels =        data.labels?[...]        ? []
    @discoverables = data.discoverables?[...] ? []
    @authors =       data.authors?[...]       ? []
    @contexts =      data.contexts?[...]      ? []
    @sequences =     data.sequences?[...]     ? []
    @queries =       data.queries?[...]       ? []

  getBytes: ->
    # list = map {
      # for every edge field
        # for every value in that field
          # produce a pair of contentID for the field, and the contentID for the value
    # sort and deduplicate the list
    # reduce list to binary array
    # store it as this.bytes
    # return this.bytes
    return "the bytes"

  getContentID: ->
    @contentID = new CommonsContentID(@getBytes())
    return this.contentID

  save: ->
    console.log "saving"
    # for own key, value of @
    #   saveblob key
    #   saveblob value


CommonsContentID = (binaryArray) ->
  # hash the array (SHA384)
  # this.binaryID = "the hash"
  @binaryID = "hash of "+ binaryArray

module.exports = Edge

#var e = new Edge(['asdf'], ['is'], ['gibberish'])
#console.log(e)
#console.log(e.getContentID())
