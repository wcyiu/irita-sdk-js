// source: irismod/htlc/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var irismod_htlc_htlc_pb = require('../../irismod/htlc/htlc_pb.js');
goog.object.extend(proto, irismod_htlc_htlc_pb);
goog.exportSymbol('proto.irismod.htlc.QueryHTLCRequest', null, global);
goog.exportSymbol('proto.irismod.htlc.QueryHTLCResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.htlc.QueryHTLCRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.htlc.QueryHTLCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.htlc.QueryHTLCRequest.displayName = 'proto.irismod.htlc.QueryHTLCRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.htlc.QueryHTLCResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.htlc.QueryHTLCResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.htlc.QueryHTLCResponse.displayName = 'proto.irismod.htlc.QueryHTLCResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.htlc.QueryHTLCRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.htlc.QueryHTLCRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.htlc.QueryHTLCRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.QueryHTLCRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hashLock: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.htlc.QueryHTLCRequest}
 */
proto.irismod.htlc.QueryHTLCRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.htlc.QueryHTLCRequest;
  return proto.irismod.htlc.QueryHTLCRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.htlc.QueryHTLCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.htlc.QueryHTLCRequest}
 */
proto.irismod.htlc.QueryHTLCRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHashLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.htlc.QueryHTLCRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.htlc.QueryHTLCRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.htlc.QueryHTLCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.QueryHTLCRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHashLock();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string hash_lock = 1;
 * @return {string}
 */
proto.irismod.htlc.QueryHTLCRequest.prototype.getHashLock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.htlc.QueryHTLCRequest} returns this
 */
proto.irismod.htlc.QueryHTLCRequest.prototype.setHashLock = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.htlc.QueryHTLCResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.htlc.QueryHTLCResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.htlc.QueryHTLCResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.QueryHTLCResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    htlc: (f = msg.getHtlc()) && irismod_htlc_htlc_pb.HTLC.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.htlc.QueryHTLCResponse}
 */
proto.irismod.htlc.QueryHTLCResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.htlc.QueryHTLCResponse;
  return proto.irismod.htlc.QueryHTLCResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.htlc.QueryHTLCResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.htlc.QueryHTLCResponse}
 */
proto.irismod.htlc.QueryHTLCResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new irismod_htlc_htlc_pb.HTLC;
      reader.readMessage(value,irismod_htlc_htlc_pb.HTLC.deserializeBinaryFromReader);
      msg.setHtlc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.htlc.QueryHTLCResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.htlc.QueryHTLCResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.htlc.QueryHTLCResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.QueryHTLCResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHtlc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      irismod_htlc_htlc_pb.HTLC.serializeBinaryToWriter
    );
  }
};


/**
 * optional HTLC htlc = 1;
 * @return {?proto.irismod.htlc.HTLC}
 */
proto.irismod.htlc.QueryHTLCResponse.prototype.getHtlc = function() {
  return /** @type{?proto.irismod.htlc.HTLC} */ (
    jspb.Message.getWrapperField(this, irismod_htlc_htlc_pb.HTLC, 1));
};


/**
 * @param {?proto.irismod.htlc.HTLC|undefined} value
 * @return {!proto.irismod.htlc.QueryHTLCResponse} returns this
*/
proto.irismod.htlc.QueryHTLCResponse.prototype.setHtlc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.htlc.QueryHTLCResponse} returns this
 */
proto.irismod.htlc.QueryHTLCResponse.prototype.clearHtlc = function() {
  return this.setHtlc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.htlc.QueryHTLCResponse.prototype.hasHtlc = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.irismod.htlc);
