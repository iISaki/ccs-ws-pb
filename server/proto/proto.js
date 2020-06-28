/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");
// var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.grace = (function() {

    /**
     * Namespace grace.
     * @exports grace
     * @namespace
     */
    var grace = {};

    grace.proto = (function() {

        /**
         * Namespace proto.
         * @memberof grace
         * @namespace
         */
        var proto = {};

        proto.msg = (function() {

            /**
             * Namespace msg.
             * @memberof grace.proto
             * @namespace
             */
            var msg = {};

            /**
             * ActionCode enum.
             * @name grace.proto.msg.ActionCode
             * @enum {number}
             * @property {number} EnterRoot=1 EnterRoot value
             * @property {number} SendMessage=2 SendMessage value
             * @property {number} RecvMessage=3 RecvMessage value
             */
            msg.ActionCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "EnterRoot"] = 1;
                values[valuesById[2] = "SendMessage"] = 2;
                values[valuesById[3] = "RecvMessage"] = 3;
                return values;
            })();

            /**
             * PushCode enum.
             * @name grace.proto.msg.PushCode
             * @enum {number}
             * @property {number} PlayerEnter=1 PlayerEnter value
             * @property {number} PlayerMessage=2 PlayerMessage value
             */
            msg.PushCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "PlayerEnter"] = 1;
                values[valuesById[2] = "PlayerMessage"] = 2;
                return values;
            })();

            msg.PBMessage = (function() {

                /**
                 * Properties of a PBMessage.
                 * @memberof grace.proto.msg
                 * @interface IPBMessage
                 * @property {number|null} [actionCode] PBMessage actionCode
                 * @property {number|null} [sequence] PBMessage sequence
                 * @property {Uint8Array|null} [data] PBMessage data
                 */

                /**
                 * Constructs a new PBMessage.
                 * @memberof grace.proto.msg
                 * @classdesc Represents a PBMessage.
                 * @implements IPBMessage
                 * @constructor
                 * @param {grace.proto.msg.IPBMessage=} [properties] Properties to set
                 */
                function PBMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PBMessage actionCode.
                 * @member {number} actionCode
                 * @memberof grace.proto.msg.PBMessage
                 * @instance
                 */
                PBMessage.prototype.actionCode = 0;

                /**
                 * PBMessage sequence.
                 * @member {number} sequence
                 * @memberof grace.proto.msg.PBMessage
                 * @instance
                 */
                PBMessage.prototype.sequence = 0;

                /**
                 * PBMessage data.
                 * @member {Uint8Array} data
                 * @memberof grace.proto.msg.PBMessage
                 * @instance
                 */
                PBMessage.prototype.data = $util.newBuffer([]);

                /**
                 * Creates a new PBMessage instance using the specified properties.
                 * @function create
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {grace.proto.msg.IPBMessage=} [properties] Properties to set
                 * @returns {grace.proto.msg.PBMessage} PBMessage instance
                 */
                PBMessage.create = function create(properties) {
                    return new PBMessage(properties);
                };

                /**
                 * Encodes the specified PBMessage message. Does not implicitly {@link grace.proto.msg.PBMessage.verify|verify} messages.
                 * @function encode
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {grace.proto.msg.IPBMessage} message PBMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PBMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.actionCode != null && Object.hasOwnProperty.call(message, "actionCode"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.actionCode);
                    if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sequence);
                    if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                    return writer;
                };

                /**
                 * Encodes the specified PBMessage message, length delimited. Does not implicitly {@link grace.proto.msg.PBMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {grace.proto.msg.IPBMessage} message PBMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PBMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PBMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {grace.proto.msg.PBMessage} PBMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PBMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grace.proto.msg.PBMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.actionCode = reader.int32();
                            break;
                        case 2:
                            message.sequence = reader.int32();
                            break;
                        case 3:
                            message.data = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PBMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {grace.proto.msg.PBMessage} PBMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PBMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PBMessage message.
                 * @function verify
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PBMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.actionCode != null && message.hasOwnProperty("actionCode"))
                        if (!$util.isInteger(message.actionCode))
                            return "actionCode: integer expected";
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        if (!$util.isInteger(message.sequence))
                            return "sequence: integer expected";
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    return null;
                };

                /**
                 * Creates a PBMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {grace.proto.msg.PBMessage} PBMessage
                 */
                PBMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.grace.proto.msg.PBMessage)
                        return object;
                    var message = new $root.grace.proto.msg.PBMessage();
                    if (object.actionCode != null)
                        message.actionCode = object.actionCode | 0;
                    if (object.sequence != null)
                        message.sequence = object.sequence | 0;
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length)
                            message.data = object.data;
                    return message;
                };

                /**
                 * Creates a plain object from a PBMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof grace.proto.msg.PBMessage
                 * @static
                 * @param {grace.proto.msg.PBMessage} message PBMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PBMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.actionCode = 0;
                        object.sequence = 0;
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                    }
                    if (message.actionCode != null && message.hasOwnProperty("actionCode"))
                        object.actionCode = message.actionCode;
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        object.sequence = message.sequence;
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    return object;
                };

                /**
                 * Converts this PBMessage to JSON.
                 * @function toJSON
                 * @memberof grace.proto.msg.PBMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PBMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PBMessage;
            })();

            /**
             * ChatMsgType enum.
             * @name grace.proto.msg.ChatMsgType
             * @enum {number}
             * @property {number} ALL=1 ALL value
             * @property {number} P2P=2 P2P value
             */
            msg.ChatMsgType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "ALL"] = 1;
                values[valuesById[2] = "P2P"] = 2;
                return values;
            })();

            msg.ChatMsg = (function() {

                /**
                 * Properties of a ChatMsg.
                 * @memberof grace.proto.msg
                 * @interface IChatMsg
                 * @property {grace.proto.msg.IPlayer|null} [playerInfo] ChatMsg playerInfo
                 * @property {grace.proto.msg.ChatMsgType|null} [type] ChatMsg type
                 * @property {string|null} [message] ChatMsg message
                 * @property {number|Long|null} [timestamp] ChatMsg timestamp
                 */

                /**
                 * Constructs a new ChatMsg.
                 * @memberof grace.proto.msg
                 * @classdesc Represents a ChatMsg.
                 * @implements IChatMsg
                 * @constructor
                 * @param {grace.proto.msg.IChatMsg=} [properties] Properties to set
                 */
                function ChatMsg(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ChatMsg playerInfo.
                 * @member {grace.proto.msg.IPlayer|null|undefined} playerInfo
                 * @memberof grace.proto.msg.ChatMsg
                 * @instance
                 */
                ChatMsg.prototype.playerInfo = null;

                /**
                 * ChatMsg type.
                 * @member {grace.proto.msg.ChatMsgType} type
                 * @memberof grace.proto.msg.ChatMsg
                 * @instance
                 */
                ChatMsg.prototype.type = 1;

                /**
                 * ChatMsg message.
                 * @member {string} message
                 * @memberof grace.proto.msg.ChatMsg
                 * @instance
                 */
                ChatMsg.prototype.message = "";

                /**
                 * ChatMsg timestamp.
                 * @member {number|Long} timestamp
                 * @memberof grace.proto.msg.ChatMsg
                 * @instance
                 */
                ChatMsg.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new ChatMsg instance using the specified properties.
                 * @function create
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {grace.proto.msg.IChatMsg=} [properties] Properties to set
                 * @returns {grace.proto.msg.ChatMsg} ChatMsg instance
                 */
                ChatMsg.create = function create(properties) {
                    return new ChatMsg(properties);
                };

                /**
                 * Encodes the specified ChatMsg message. Does not implicitly {@link grace.proto.msg.ChatMsg.verify|verify} messages.
                 * @function encode
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {grace.proto.msg.IChatMsg} message ChatMsg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChatMsg.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                        $root.grace.proto.msg.Player.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                    if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
                    return writer;
                };

                /**
                 * Encodes the specified ChatMsg message, length delimited. Does not implicitly {@link grace.proto.msg.ChatMsg.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {grace.proto.msg.IChatMsg} message ChatMsg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ChatMsg message from the specified reader or buffer.
                 * @function decode
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {grace.proto.msg.ChatMsg} ChatMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChatMsg.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grace.proto.msg.ChatMsg();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.playerInfo = $root.grace.proto.msg.Player.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        case 4:
                            message.timestamp = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ChatMsg message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {grace.proto.msg.ChatMsg} ChatMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChatMsg.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChatMsg message.
                 * @function verify
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChatMsg.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                        var error = $root.grace.proto.msg.Player.verify(message.playerInfo);
                        if (error)
                            return "playerInfo." + error;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                            return "timestamp: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a ChatMsg message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {grace.proto.msg.ChatMsg} ChatMsg
                 */
                ChatMsg.fromObject = function fromObject(object) {
                    if (object instanceof $root.grace.proto.msg.ChatMsg)
                        return object;
                    var message = new $root.grace.proto.msg.ChatMsg();
                    if (object.playerInfo != null) {
                        if (typeof object.playerInfo !== "object")
                            throw TypeError(".grace.proto.msg.ChatMsg.playerInfo: object expected");
                        message.playerInfo = $root.grace.proto.msg.Player.fromObject(object.playerInfo);
                    }
                    switch (object.type) {
                    case "ALL":
                    case 1:
                        message.type = 1;
                        break;
                    case "P2P":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    if (object.message != null)
                        message.message = String(object.message);
                    if (object.timestamp != null)
                        if ($util.Long)
                            (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                        else if (typeof object.timestamp === "string")
                            message.timestamp = parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a ChatMsg message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof grace.proto.msg.ChatMsg
                 * @static
                 * @param {grace.proto.msg.ChatMsg} message ChatMsg
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChatMsg.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.playerInfo = null;
                        object.type = options.enums === String ? "ALL" : 1;
                        object.message = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timestamp = options.longs === String ? "0" : 0;
                    }
                    if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                        object.playerInfo = $root.grace.proto.msg.Player.toObject(message.playerInfo, options);
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.grace.proto.msg.ChatMsgType[message.type] : message.type;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (typeof message.timestamp === "number")
                            object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                        else
                            object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                    return object;
                };

                /**
                 * Converts this ChatMsg to JSON.
                 * @function toJSON
                 * @memberof grace.proto.msg.ChatMsg
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChatMsg.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ChatMsg;
            })();

            msg.Player = (function() {

                /**
                 * Properties of a Player.
                 * @memberof grace.proto.msg
                 * @interface IPlayer
                 * @property {number|null} [id] Player id
                 * @property {string|null} [name] Player name
                 * @property {number|Long|null} [enterTime] Player enterTime
                 */

                /**
                 * Constructs a new Player.
                 * @memberof grace.proto.msg
                 * @classdesc Represents a Player.
                 * @implements IPlayer
                 * @constructor
                 * @param {grace.proto.msg.IPlayer=} [properties] Properties to set
                 */
                function Player(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Player id.
                 * @member {number} id
                 * @memberof grace.proto.msg.Player
                 * @instance
                 */
                Player.prototype.id = 0;

                /**
                 * Player name.
                 * @member {string} name
                 * @memberof grace.proto.msg.Player
                 * @instance
                 */
                Player.prototype.name = "";

                /**
                 * Player enterTime.
                 * @member {number|Long} enterTime
                 * @memberof grace.proto.msg.Player
                 * @instance
                 */
                Player.prototype.enterTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new Player instance using the specified properties.
                 * @function create
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {grace.proto.msg.IPlayer=} [properties] Properties to set
                 * @returns {grace.proto.msg.Player} Player instance
                 */
                Player.create = function create(properties) {
                    return new Player(properties);
                };

                /**
                 * Encodes the specified Player message. Does not implicitly {@link grace.proto.msg.Player.verify|verify} messages.
                 * @function encode
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {grace.proto.msg.IPlayer} message Player message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Player.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.enterTime != null && Object.hasOwnProperty.call(message, "enterTime"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.enterTime);
                    return writer;
                };

                /**
                 * Encodes the specified Player message, length delimited. Does not implicitly {@link grace.proto.msg.Player.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {grace.proto.msg.IPlayer} message Player message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Player.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Player message from the specified reader or buffer.
                 * @function decode
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {grace.proto.msg.Player} Player
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Player.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.grace.proto.msg.Player();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.uint32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.enterTime = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Player message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {grace.proto.msg.Player} Player
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Player.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Player message.
                 * @function verify
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Player.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.enterTime != null && message.hasOwnProperty("enterTime"))
                        if (!$util.isInteger(message.enterTime) && !(message.enterTime && $util.isInteger(message.enterTime.low) && $util.isInteger(message.enterTime.high)))
                            return "enterTime: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a Player message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {grace.proto.msg.Player} Player
                 */
                Player.fromObject = function fromObject(object) {
                    if (object instanceof $root.grace.proto.msg.Player)
                        return object;
                    var message = new $root.grace.proto.msg.Player();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.enterTime != null)
                        if ($util.Long)
                            (message.enterTime = $util.Long.fromValue(object.enterTime)).unsigned = true;
                        else if (typeof object.enterTime === "string")
                            message.enterTime = parseInt(object.enterTime, 10);
                        else if (typeof object.enterTime === "number")
                            message.enterTime = object.enterTime;
                        else if (typeof object.enterTime === "object")
                            message.enterTime = new $util.LongBits(object.enterTime.low >>> 0, object.enterTime.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a Player message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof grace.proto.msg.Player
                 * @static
                 * @param {grace.proto.msg.Player} message Player
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Player.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = 0;
                        object.name = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.enterTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.enterTime = options.longs === String ? "0" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.enterTime != null && message.hasOwnProperty("enterTime"))
                        if (typeof message.enterTime === "number")
                            object.enterTime = options.longs === String ? String(message.enterTime) : message.enterTime;
                        else
                            object.enterTime = options.longs === String ? $util.Long.prototype.toString.call(message.enterTime) : options.longs === Number ? new $util.LongBits(message.enterTime.low >>> 0, message.enterTime.high >>> 0).toNumber(true) : message.enterTime;
                    return object;
                };

                /**
                 * Converts this Player to JSON.
                 * @function toJSON
                 * @memberof grace.proto.msg.Player
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Player.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Player;
            })();

            return msg;
        })();

        return proto;
    })();

    return grace;
})();

module.exports = $root;
