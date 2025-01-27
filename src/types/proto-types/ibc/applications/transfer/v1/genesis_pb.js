// source: ibc/applications/transfer/v1/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var ibc_applications_transfer_v1_transfer_pb = require('../../../../ibc/applications/transfer/v1/transfer_pb.js');
goog.object.extend(proto, ibc_applications_transfer_v1_transfer_pb);
goog.exportSymbol('proto.ibc.applications.transfer.v1.GenesisState', null, global);
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
proto.ibc.applications.transfer.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.transfer.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.transfer.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.transfer.v1.GenesisState.displayName = 'proto.ibc.applications.transfer.v1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.transfer.v1.GenesisState.repeatedFields_ = [2];



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
proto.ibc.applications.transfer.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.transfer.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.transfer.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    portId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    denomTracesList: jspb.Message.toObjectList(msg.getDenomTracesList(),
    ibc_applications_transfer_v1_transfer_pb.DenomTrace.toObject, includeInstance),
    params: (f = msg.getParams()) && ibc_applications_transfer_v1_transfer_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.ibc.applications.transfer.v1.GenesisState}
 */
proto.ibc.applications.transfer.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.transfer.v1.GenesisState;
  return proto.ibc.applications.transfer.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.transfer.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.transfer.v1.GenesisState}
 */
proto.ibc.applications.transfer.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortId(value);
      break;
    case 2:
      var value = new ibc_applications_transfer_v1_transfer_pb.DenomTrace;
      reader.readMessage(value,ibc_applications_transfer_v1_transfer_pb.DenomTrace.deserializeBinaryFromReader);
      msg.addDenomTraces(value);
      break;
    case 3:
      var value = new ibc_applications_transfer_v1_transfer_pb.Params;
      reader.readMessage(value,ibc_applications_transfer_v1_transfer_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.ibc.applications.transfer.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.transfer.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.transfer.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDenomTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ibc_applications_transfer_v1_transfer_pb.DenomTrace.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ibc_applications_transfer_v1_transfer_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional string port_id = 1;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.getPortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.GenesisState} returns this
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.setPortId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DenomTrace denom_traces = 2;
 * @return {!Array<!proto.ibc.applications.transfer.v1.DenomTrace>}
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.getDenomTracesList = function() {
  return /** @type{!Array<!proto.ibc.applications.transfer.v1.DenomTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_applications_transfer_v1_transfer_pb.DenomTrace, 2));
};


/**
 * @param {!Array<!proto.ibc.applications.transfer.v1.DenomTrace>} value
 * @return {!proto.ibc.applications.transfer.v1.GenesisState} returns this
*/
proto.ibc.applications.transfer.v1.GenesisState.prototype.setDenomTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.DenomTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.transfer.v1.DenomTrace}
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.addDenomTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ibc.applications.transfer.v1.DenomTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.transfer.v1.GenesisState} returns this
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.clearDenomTracesList = function() {
  return this.setDenomTracesList([]);
};


/**
 * optional Params params = 3;
 * @return {?proto.ibc.applications.transfer.v1.Params}
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.ibc.applications.transfer.v1.Params} */ (
    jspb.Message.getWrapperField(this, ibc_applications_transfer_v1_transfer_pb.Params, 3));
};


/**
 * @param {?proto.ibc.applications.transfer.v1.Params|undefined} value
 * @return {!proto.ibc.applications.transfer.v1.GenesisState} returns this
*/
proto.ibc.applications.transfer.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.applications.transfer.v1.GenesisState} returns this
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.applications.transfer.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.ibc.applications.transfer.v1);
