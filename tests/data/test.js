/*eslint-disable block-scoped-var, no-redeclare, no-control-regex*/
"use strict";

var $protobuf = require("../../runtime");

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util   = $protobuf.util;

// Lazily resolved type references
var $lazyTypes = [];

// Exported root namespace
var $root = {};

$root.jspb = (function() {

    /**
     * Namespace jspb.
     * @exports jspb
     * @namespace
     */
    var jspb = {};

    jspb.test = (function() {

        /**
         * Namespace test.
         * @exports jspb.test
         * @namespace
         */
        var test = {};

        test.Empty = (function() {

            /**
             * Constructs a new Empty.
             * @exports jspb.test.Empty
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message.
             * @param {jspb.test.Empty|Object} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited.
             * @param {jspb.test.Empty|Object} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Empty} Empty
             */
            Empty.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.Empty} Empty
             */
            Empty.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an Empty message.
             * @param {jspb.test.Empty|Object} message Empty message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify() {
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Empty} Empty
             */
            Empty.fromObject = function fromObject() {
                return new $root.jspb.test.Empty();
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.Empty.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Empty} Empty
             */
            Empty.from = Empty.fromObject;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param {jspb.test.Empty} message Empty
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this Empty message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Empty to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        /**
         * OuterEnum enum.
         * @name OuterEnum
         * @memberof jspb.test
         * @enum {number}
         * @property {number} FOO=1 FOO value
         * @property {number} BAR=2 BAR value
         */
        test.OuterEnum = (function() {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[1] = "FOO"] = 1;
            values[valuesById[2] = "BAR"] = 2;
            return values;
        })();

        test.EnumContainer = (function() {

            /**
             * Constructs a new EnumContainer.
             * @exports jspb.test.EnumContainer
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumContainer(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * EnumContainer outerEnum.
             * @type {number}
             */
            EnumContainer.prototype.outerEnum = 1;

            // Lazily resolved type references
            var $types = {
                0: "jspb.test.OuterEnum"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumContainer instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.EnumContainer} EnumContainer instance
             */
            EnumContainer.create = function create(properties) {
                return new EnumContainer(properties);
            };

            /**
             * Encodes the specified EnumContainer message.
             * @param {jspb.test.EnumContainer|Object} message EnumContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumContainer.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.outerEnum !== undefined && message.outerEnum !== 1) {
                    writer.uint32(8).uint32(message.outerEnum);
                }
                return writer;
            };

            /**
             * Encodes the specified EnumContainer message, length delimited.
             * @param {jspb.test.EnumContainer|Object} message EnumContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumContainer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumContainer message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.EnumContainer} EnumContainer
             */
            EnumContainer.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.EnumContainer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.outerEnum = reader.uint32();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumContainer message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.EnumContainer} EnumContainer
             */
            EnumContainer.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an EnumContainer message.
             * @param {jspb.test.EnumContainer|Object} message EnumContainer message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumContainer.verify = function verify(message) {
                if (message.outerEnum !== undefined) {
                    switch (message.outerEnum) {
                    default:
                        return "outerEnum: enum value expected";

                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumContainer message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.EnumContainer} EnumContainer
             */
            EnumContainer.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.EnumContainer();
                switch (object.outerEnum) {
                case "FOO":
                case 1:
                    message.outerEnum = 1;
                    break;

                case "BAR":
                case 2:
                    message.outerEnum = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates an EnumContainer message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.EnumContainer.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.EnumContainer} EnumContainer
             */
            EnumContainer.from = EnumContainer.fromObject;

            /**
             * Creates a plain object from an EnumContainer message. Also converts values to other types if specified.
             * @param {jspb.test.EnumContainer} message EnumContainer
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumContainer.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.outerEnum = options.enums === String ? "FOO" : 1;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "outerEnum":
                        if (message.outerEnum !== undefined && message.outerEnum !== null) {
                            object.outerEnum = options.enums === String ? $types[0][message.outerEnum] : message.outerEnum;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumContainer message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumContainer.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumContainer to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumContainer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumContainer;
        })();

        test.Simple1 = (function() {

            /**
             * Constructs a new Simple1.
             * @exports jspb.test.Simple1
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Simple1(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Simple1 aString.
             * @type {string}
             */
            Simple1.prototype.aString = "";

            /**
             * Simple1 aRepeatedString.
             * @type {Array.<string>}
             */
            Simple1.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Simple1 aBoolean.
             * @type {boolean}
             */
            Simple1.prototype.aBoolean = false;

            /**
             * Creates a new Simple1 instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.Simple1} Simple1 instance
             */
            Simple1.create = function create(properties) {
                return new Simple1(properties);
            };

            /**
             * Encodes the specified Simple1 message.
             * @param {jspb.test.Simple1|Object} message Simple1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple1.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                writer.uint32(10).string(message.aString);
                if (message.aRepeatedString) {
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        writer.uint32(18).string(message.aRepeatedString[i]);
                    }
                }
                if (message.aBoolean !== undefined && message.aBoolean !== false) {
                    writer.uint32(24).bool(message.aBoolean);
                }
                return writer;
            };

            /**
             * Encodes the specified Simple1 message, length delimited.
             * @param {jspb.test.Simple1|Object} message Simple1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple1.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Simple1 message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Simple1} Simple1
             */
            Simple1.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Simple1();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aString = reader.string();
                        break;

                    case 2:
                        if (!(message.aRepeatedString && message.aRepeatedString.length)) {
                            message.aRepeatedString = [];
                        }
                        message.aRepeatedString.push(reader.string());
                        break;

                    case 3:
                        message.aBoolean = reader.bool();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Simple1 message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.Simple1} Simple1
             */
            Simple1.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a Simple1 message.
             * @param {jspb.test.Simple1|Object} message Simple1 message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Simple1.verify = function verify(message) {
                if (!$util.isString(message.aString)) {
                    return "aString: string expected";
                }
                if (message.aRepeatedString !== undefined) {
                    if (!Array.isArray(message.aRepeatedString)) {
                        return "aRepeatedString: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        if (!$util.isString(message.aRepeatedString[i])) {
                            return "aRepeatedString: string[] expected";
                        }
                    }
                }
                if (message.aBoolean !== undefined) {
                    if (typeof message.aBoolean !== "boolean") {
                        return "aBoolean: boolean expected";
                    }
                }
                return null;
            };

            /**
             * Creates a Simple1 message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple1} Simple1
             */
            Simple1.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.Simple1();
                if (object.aString !== undefined && object.aString !== null) {
                    message.aString = String(object.aString);
                }
                if (object.aRepeatedString) {
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i) {
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                    }
                }
                if (object.aBoolean !== undefined && object.aBoolean !== null) {
                    message.aBoolean = Boolean(object.aBoolean);
                }
                return message;
            };

            /**
             * Creates a Simple1 message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.Simple1.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple1} Simple1
             */
            Simple1.from = Simple1.fromObject;

            /**
             * Creates a plain object from a Simple1 message. Also converts values to other types if specified.
             * @param {jspb.test.Simple1} message Simple1
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple1.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                    object.aBoolean = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "aString":
                        if (message.aString !== undefined && message.aString !== null) {
                            object.aString = message.aString;
                        }
                        break;

                    case "aRepeatedString":
                        if (message.aRepeatedString.length) {
                            object.aRepeatedString = [];
                            for (var j = 0; j < message.aRepeatedString.length; ++j) {
                                object.aRepeatedString[j] = message.aRepeatedString[j];
                            }
                        }
                        break;

                    case "aBoolean":
                        if (message.aBoolean !== undefined && message.aBoolean !== null) {
                            object.aBoolean = message.aBoolean;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this Simple1 message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple1.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Simple1 to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Simple1.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Simple1;
        })();

        test.Simple2 = (function() {

            /**
             * Constructs a new Simple2.
             * @exports jspb.test.Simple2
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Simple2(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Simple2 aString.
             * @type {string}
             */
            Simple2.prototype.aString = "";

            /**
             * Simple2 aRepeatedString.
             * @type {Array.<string>}
             */
            Simple2.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Creates a new Simple2 instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.Simple2} Simple2 instance
             */
            Simple2.create = function create(properties) {
                return new Simple2(properties);
            };

            /**
             * Encodes the specified Simple2 message.
             * @param {jspb.test.Simple2|Object} message Simple2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple2.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                writer.uint32(10).string(message.aString);
                if (message.aRepeatedString) {
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        writer.uint32(18).string(message.aRepeatedString[i]);
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified Simple2 message, length delimited.
             * @param {jspb.test.Simple2|Object} message Simple2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Simple2 message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Simple2} Simple2
             */
            Simple2.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Simple2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aString = reader.string();
                        break;

                    case 2:
                        if (!(message.aRepeatedString && message.aRepeatedString.length)) {
                            message.aRepeatedString = [];
                        }
                        message.aRepeatedString.push(reader.string());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Simple2 message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.Simple2} Simple2
             */
            Simple2.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a Simple2 message.
             * @param {jspb.test.Simple2|Object} message Simple2 message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Simple2.verify = function verify(message) {
                if (!$util.isString(message.aString)) {
                    return "aString: string expected";
                }
                if (message.aRepeatedString !== undefined) {
                    if (!Array.isArray(message.aRepeatedString)) {
                        return "aRepeatedString: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        if (!$util.isString(message.aRepeatedString[i])) {
                            return "aRepeatedString: string[] expected";
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a Simple2 message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple2} Simple2
             */
            Simple2.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.Simple2();
                if (object.aString !== undefined && object.aString !== null) {
                    message.aString = String(object.aString);
                }
                if (object.aRepeatedString) {
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i) {
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a Simple2 message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.Simple2.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple2} Simple2
             */
            Simple2.from = Simple2.fromObject;

            /**
             * Creates a plain object from a Simple2 message. Also converts values to other types if specified.
             * @param {jspb.test.Simple2} message Simple2
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple2.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "aString":
                        if (message.aString !== undefined && message.aString !== null) {
                            object.aString = message.aString;
                        }
                        break;

                    case "aRepeatedString":
                        if (message.aRepeatedString.length) {
                            object.aRepeatedString = [];
                            for (var j = 0; j < message.aRepeatedString.length; ++j) {
                                object.aRepeatedString[j] = message.aRepeatedString[j];
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this Simple2 message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple2.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Simple2 to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Simple2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Simple2;
        })();

        test.SpecialCases = (function() {

            /**
             * Constructs a new SpecialCases.
             * @exports jspb.test.SpecialCases
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function SpecialCases(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * SpecialCases normal.
             * @type {string}
             */
            SpecialCases.prototype.normal = "";

            /**
             * SpecialCases default.
             * @name jspb.test.SpecialCases#default
             * @type {string}
             */
            SpecialCases.prototype["default"] = "";

            /**
             * SpecialCases function.
             * @name jspb.test.SpecialCases#function
             * @type {string}
             */
            SpecialCases.prototype["function"] = "";

            /**
             * SpecialCases var.
             * @name jspb.test.SpecialCases#var
             * @type {string}
             */
            SpecialCases.prototype["var"] = "";

            /**
             * Creates a new SpecialCases instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.SpecialCases} SpecialCases instance
             */
            SpecialCases.create = function create(properties) {
                return new SpecialCases(properties);
            };

            /**
             * Encodes the specified SpecialCases message.
             * @param {jspb.test.SpecialCases|Object} message SpecialCases message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpecialCases.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                writer.uint32(10).string(message.normal);
                writer.uint32(18).string(message["default"]);
                writer.uint32(26).string(message["function"]);
                writer.uint32(34).string(message["var"]);
                return writer;
            };

            /**
             * Encodes the specified SpecialCases message, length delimited.
             * @param {jspb.test.SpecialCases|Object} message SpecialCases message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpecialCases.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SpecialCases message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.SpecialCases} SpecialCases
             */
            SpecialCases.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.SpecialCases();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.normal = reader.string();
                        break;

                    case 2:
                        message["default"] = reader.string();
                        break;

                    case 3:
                        message["function"] = reader.string();
                        break;

                    case 4:
                        message["var"] = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SpecialCases message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.SpecialCases} SpecialCases
             */
            SpecialCases.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a SpecialCases message.
             * @param {jspb.test.SpecialCases|Object} message SpecialCases message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SpecialCases.verify = function verify(message) {
                if (!$util.isString(message.normal)) {
                    return "normal: string expected";
                }
                if (!$util.isString(message["default"])) {
                    return "default: string expected";
                }
                if (!$util.isString(message["function"])) {
                    return "function: string expected";
                }
                if (!$util.isString(message["var"])) {
                    return "var: string expected";
                }
                return null;
            };

            /**
             * Creates a SpecialCases message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.SpecialCases} SpecialCases
             */
            SpecialCases.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.SpecialCases();
                if (object.normal !== undefined && object.normal !== null) {
                    message.normal = String(object.normal);
                }
                if (object["default"] !== undefined && object["default"] !== null) {
                    message["default"] = String(object["default"]);
                }
                if (object["function"] !== undefined && object["function"] !== null) {
                    message["function"] = String(object["function"]);
                }
                if (object["var"] !== undefined && object["var"] !== null) {
                    message["var"] = String(object["var"]);
                }
                return message;
            };

            /**
             * Creates a SpecialCases message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.SpecialCases.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.SpecialCases} SpecialCases
             */
            SpecialCases.from = SpecialCases.fromObject;

            /**
             * Creates a plain object from a SpecialCases message. Also converts values to other types if specified.
             * @param {jspb.test.SpecialCases} message SpecialCases
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SpecialCases.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.normal = "";
                    object["default"] = "";
                    object["function"] = "";
                    object["var"] = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "normal":
                        if (message.normal !== undefined && message.normal !== null) {
                            object.normal = message.normal;
                        }
                        break;

                    case "default":
                        if (message["default"] !== undefined && message["default"] !== null) {
                            object["default"] = message["default"];
                        }
                        break;

                    case "function":
                        if (message["function"] !== undefined && message["function"] !== null) {
                            object["function"] = message["function"];
                        }
                        break;

                    case "var":
                        if (message["var"] !== undefined && message["var"] !== null) {
                            object["var"] = message["var"];
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this SpecialCases message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SpecialCases.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SpecialCases to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SpecialCases.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SpecialCases;
        })();

        test.OptionalFields = (function() {

            /**
             * Constructs a new OptionalFields.
             * @exports jspb.test.OptionalFields
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OptionalFields(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * OptionalFields aString.
             * @type {string}
             */
            OptionalFields.prototype.aString = "";

            /**
             * OptionalFields aBool.
             * @type {boolean}
             */
            OptionalFields.prototype.aBool = false;

            /**
             * OptionalFields aNestedMessage.
             * @type {jspb.test.OptionalFields.Nested}
             */
            OptionalFields.prototype.aNestedMessage = null;

            /**
             * OptionalFields aRepeatedMessage.
             * @type {Array.<jspb.test.OptionalFields.Nested>}
             */
            OptionalFields.prototype.aRepeatedMessage = $util.emptyArray;

            /**
             * OptionalFields aRepeatedString.
             * @type {Array.<string>}
             */
            OptionalFields.prototype.aRepeatedString = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                2: "jspb.test.OptionalFields.Nested",
                3: "jspb.test.OptionalFields.Nested"
            }; $lazyTypes.push($types);

            /**
             * Creates a new OptionalFields instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.OptionalFields} OptionalFields instance
             */
            OptionalFields.create = function create(properties) {
                return new OptionalFields(properties);
            };

            /**
             * Encodes the specified OptionalFields message.
             * @param {jspb.test.OptionalFields|Object} message OptionalFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionalFields.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.aString !== undefined && message.aString !== "") {
                    writer.uint32(10).string(message.aString);
                }
                writer.uint32(16).bool(message.aBool);
                if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                    $types[2].encode(message.aNestedMessage, writer.uint32(26).fork()).ldelim();
                }
                if (message.aRepeatedMessage) {
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        $types[3].encode(message.aRepeatedMessage[i], writer.uint32(34).fork()).ldelim();
                    }
                }
                if (message.aRepeatedString) {
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        writer.uint32(42).string(message.aRepeatedString[i]);
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified OptionalFields message, length delimited.
             * @param {jspb.test.OptionalFields|Object} message OptionalFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionalFields.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OptionalFields message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.OptionalFields} OptionalFields
             */
            OptionalFields.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.OptionalFields();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aString = reader.string();
                        break;

                    case 2:
                        message.aBool = reader.bool();
                        break;

                    case 3:
                        message.aNestedMessage = $types[2].decode(reader, reader.uint32());
                        break;

                    case 4:
                        if (!(message.aRepeatedMessage && message.aRepeatedMessage.length)) {
                            message.aRepeatedMessage = [];
                        }
                        message.aRepeatedMessage.push($types[3].decode(reader, reader.uint32()));
                        break;

                    case 5:
                        if (!(message.aRepeatedString && message.aRepeatedString.length)) {
                            message.aRepeatedString = [];
                        }
                        message.aRepeatedString.push(reader.string());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OptionalFields message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.OptionalFields} OptionalFields
             */
            OptionalFields.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an OptionalFields message.
             * @param {jspb.test.OptionalFields|Object} message OptionalFields message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OptionalFields.verify = function verify(message) {
                if (message.aString !== undefined) {
                    if (!$util.isString(message.aString)) {
                        return "aString: string expected";
                    }
                }
                if (typeof message.aBool !== "boolean") {
                    return "aBool: boolean expected";
                }
                if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                    var err = $types[2].verify(message.aNestedMessage);
                    if (err) {
                        return "aNestedMessage." + err;
                    }
                }
                if (message.aRepeatedMessage !== undefined) {
                    if (!Array.isArray(message.aRepeatedMessage)) {
                        return "aRepeatedMessage: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        var err = $types[3].verify(message.aRepeatedMessage[i]);
                        if (err) {
                            return "aRepeatedMessage." + err;
                        }
                    }
                }
                if (message.aRepeatedString !== undefined) {
                    if (!Array.isArray(message.aRepeatedString)) {
                        return "aRepeatedString: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        if (!$util.isString(message.aRepeatedString[i])) {
                            return "aRepeatedString: string[] expected";
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an OptionalFields message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OptionalFields} OptionalFields
             */
            OptionalFields.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.OptionalFields();
                if (object.aString !== undefined && object.aString !== null) {
                    message.aString = String(object.aString);
                }
                if (object.aBool !== undefined && object.aBool !== null) {
                    message.aBool = Boolean(object.aBool);
                }
                if (object.aNestedMessage !== undefined && object.aNestedMessage !== null) {
                    message.aNestedMessage = $types[2].fromObject(object.aNestedMessage);
                }
                if (object.aRepeatedMessage) {
                    message.aRepeatedMessage = [];
                    for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                        message.aRepeatedMessage[i] = $types[3].fromObject(object.aRepeatedMessage[i]);
                    }
                }
                if (object.aRepeatedString) {
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i) {
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an OptionalFields message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.OptionalFields.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OptionalFields} OptionalFields
             */
            OptionalFields.from = OptionalFields.fromObject;

            /**
             * Creates a plain object from an OptionalFields message. Also converts values to other types if specified.
             * @param {jspb.test.OptionalFields} message OptionalFields
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionalFields.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedMessage = [];
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                    object.aBool = false;
                    object.aNestedMessage = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "aString":
                        if (message.aString !== undefined && message.aString !== null) {
                            object.aString = message.aString;
                        }
                        break;

                    case "aBool":
                        if (message.aBool !== undefined && message.aBool !== null) {
                            object.aBool = message.aBool;
                        }
                        break;

                    case "aNestedMessage":
                        if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                            object.aNestedMessage = $types[2].toObject(message.aNestedMessage, options);
                        }
                        break;

                    case "aRepeatedMessage":
                        if (message.aRepeatedMessage.length) {
                            object.aRepeatedMessage = [];
                            for (var j = 0; j < message.aRepeatedMessage.length; ++j) {
                                object.aRepeatedMessage[j] = $types[3].toObject(message.aRepeatedMessage[j], options);
                            }
                        }
                        break;

                    case "aRepeatedString":
                        if (message.aRepeatedString.length) {
                            object.aRepeatedString = [];
                            for (var j = 0; j < message.aRepeatedString.length; ++j) {
                                object.aRepeatedString[j] = message.aRepeatedString[j];
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this OptionalFields message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionalFields.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OptionalFields to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OptionalFields.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OptionalFields.Nested = (function() {

                /**
                 * Constructs a new Nested.
                 * @exports jspb.test.OptionalFields.Nested
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Nested anInt.
                 * @type {number}
                 */
                Nested.prototype.anInt = 0;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.OptionalFields.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message.
                 * @param {jspb.test.OptionalFields.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.anInt !== undefined && message.anInt !== 0) {
                        writer.uint32(8).int32(message.anInt);
                    }
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited.
                 * @param {jspb.test.OptionalFields.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 */
                Nested.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.OptionalFields.Nested();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.anInt = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 */
                Nested.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a Nested message.
                 * @param {jspb.test.OptionalFields.Nested|Object} message Nested message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (message.anInt !== undefined) {
                        if (!$util.isInteger(message.anInt)) {
                            return "anInt: integer expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.OptionalFields.Nested();
                    if (object.anInt !== undefined && object.anInt !== null) {
                        message.anInt = object.anInt | 0;
                    }
                    return message;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.OptionalFields.Nested.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 */
                Nested.from = Nested.fromObject;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param {jspb.test.OptionalFields.Nested} message Nested
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.anInt = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "anInt":
                            if (message.anInt !== undefined && message.anInt !== null) {
                                object.anInt = message.anInt;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Nested message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Nested to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Nested;
            })();

            return OptionalFields;
        })();

        test.HasExtensions = (function() {

            /**
             * Constructs a new HasExtensions.
             * @exports jspb.test.HasExtensions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function HasExtensions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * HasExtensions str1.
             * @type {string}
             */
            HasExtensions.prototype.str1 = "";

            /**
             * HasExtensions str2.
             * @type {string}
             */
            HasExtensions.prototype.str2 = "";

            /**
             * HasExtensions str3.
             * @type {string}
             */
            HasExtensions.prototype.str3 = "";

            /**
             * HasExtensions .jspb.test.IsExtension.extField.
             * @name jspb.test.HasExtensions#.jspb.test.IsExtension.extField
             * @type {jspb.test.IsExtension}
             */
            HasExtensions.prototype[".jspb.test.IsExtension.extField"] = null;

            /**
             * HasExtensions .jspb.test.IndirectExtension.simple.
             * @name jspb.test.HasExtensions#.jspb.test.IndirectExtension.simple
             * @type {jspb.test.Simple1}
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.simple"] = null;

            /**
             * HasExtensions .jspb.test.IndirectExtension.str.
             * @name jspb.test.HasExtensions#.jspb.test.IndirectExtension.str
             * @type {string}
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.str"] = "";

            /**
             * HasExtensions .jspb.test.IndirectExtension.repeatedStr.
             * @name jspb.test.HasExtensions#.jspb.test.IndirectExtension.repeatedStr
             * @type {Array.<string>}
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.repeatedStr"] = $util.emptyArray;

            /**
             * HasExtensions .jspb.test.IndirectExtension.repeatedSimple.
             * @name jspb.test.HasExtensions#.jspb.test.IndirectExtension.repeatedSimple
             * @type {Array.<jspb.test.Simple1>}
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.repeatedSimple"] = $util.emptyArray;

            /**
             * HasExtensions .jspb.test.simple1.
             * @name jspb.test.HasExtensions#.jspb.test.simple1
             * @type {jspb.test.Simple1}
             */
            HasExtensions.prototype[".jspb.test.simple1"] = null;

            // Lazily resolved type references
            var $types = {
                3: "jspb.test.IsExtension",
                4: "jspb.test.Simple1",
                7: "jspb.test.Simple1",
                8: "jspb.test.Simple1"
            }; $lazyTypes.push($types);

            /**
             * Creates a new HasExtensions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.HasExtensions} HasExtensions instance
             */
            HasExtensions.create = function create(properties) {
                return new HasExtensions(properties);
            };

            /**
             * Encodes the specified HasExtensions message.
             * @param {jspb.test.HasExtensions|Object} message HasExtensions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HasExtensions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.str1 !== undefined && message.str1 !== "") {
                    writer.uint32(10).string(message.str1);
                }
                if (message.str2 !== undefined && message.str2 !== "") {
                    writer.uint32(18).string(message.str2);
                }
                if (message.str3 !== undefined && message.str3 !== "") {
                    writer.uint32(26).string(message.str3);
                }
                if (message[".jspb.test.IsExtension.extField"] !== undefined && message[".jspb.test.IsExtension.extField"] !== null) {
                    $types[3].encode(message[".jspb.test.IsExtension.extField"], writer.uint32(802).fork()).ldelim();
                }
                if (message[".jspb.test.IndirectExtension.simple"] !== undefined && message[".jspb.test.IndirectExtension.simple"] !== null) {
                    $types[4].encode(message[".jspb.test.IndirectExtension.simple"], writer.uint32(810).fork()).ldelim();
                }
                if (message[".jspb.test.IndirectExtension.str"] !== undefined && message[".jspb.test.IndirectExtension.str"] !== "") {
                    writer.uint32(818).string(message[".jspb.test.IndirectExtension.str"]);
                }
                if (message[".jspb.test.IndirectExtension.repeatedStr"]) {
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i) {
                        writer.uint32(826).string(message[".jspb.test.IndirectExtension.repeatedStr"][i]);
                    }
                }
                if (message[".jspb.test.IndirectExtension.repeatedSimple"]) {
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                        $types[7].encode(message[".jspb.test.IndirectExtension.repeatedSimple"][i], writer.uint32(834).fork()).ldelim();
                    }
                }
                if (message[".jspb.test.simple1"] !== undefined && message[".jspb.test.simple1"] !== null) {
                    $types[8].encode(message[".jspb.test.simple1"], writer.uint32(842).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified HasExtensions message, length delimited.
             * @param {jspb.test.HasExtensions|Object} message HasExtensions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HasExtensions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HasExtensions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.HasExtensions} HasExtensions
             */
            HasExtensions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.HasExtensions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.str1 = reader.string();
                        break;

                    case 2:
                        message.str2 = reader.string();
                        break;

                    case 3:
                        message.str3 = reader.string();
                        break;

                    case 100:
                        message[".jspb.test.IsExtension.extField"] = $types[3].decode(reader, reader.uint32());
                        break;

                    case 101:
                        message[".jspb.test.IndirectExtension.simple"] = $types[4].decode(reader, reader.uint32());
                        break;

                    case 102:
                        message[".jspb.test.IndirectExtension.str"] = reader.string();
                        break;

                    case 103:
                        if (!(message[".jspb.test.IndirectExtension.repeatedStr"] && message[".jspb.test.IndirectExtension.repeatedStr"].length)) {
                            message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                        }
                        message[".jspb.test.IndirectExtension.repeatedStr"].push(reader.string());
                        break;

                    case 104:
                        if (!(message[".jspb.test.IndirectExtension.repeatedSimple"] && message[".jspb.test.IndirectExtension.repeatedSimple"].length)) {
                            message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                        }
                        message[".jspb.test.IndirectExtension.repeatedSimple"].push($types[7].decode(reader, reader.uint32()));
                        break;

                    case 105:
                        message[".jspb.test.simple1"] = $types[8].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HasExtensions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.HasExtensions} HasExtensions
             */
            HasExtensions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a HasExtensions message.
             * @param {jspb.test.HasExtensions|Object} message HasExtensions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            HasExtensions.verify = function verify(message) {
                if (message.str1 !== undefined) {
                    if (!$util.isString(message.str1)) {
                        return "str1: string expected";
                    }
                }
                if (message.str2 !== undefined) {
                    if (!$util.isString(message.str2)) {
                        return "str2: string expected";
                    }
                }
                if (message.str3 !== undefined) {
                    if (!$util.isString(message.str3)) {
                        return "str3: string expected";
                    }
                }
                if (message[".jspb.test.IsExtension.extField"] !== undefined && message[".jspb.test.IsExtension.extField"] !== null) {
                    var err = $types[3].verify(message[".jspb.test.IsExtension.extField"]);
                    if (err) {
                        return ".jspb.test.IsExtension.extField." + err;
                    }
                }
                if (message[".jspb.test.IndirectExtension.simple"] !== undefined && message[".jspb.test.IndirectExtension.simple"] !== null) {
                    var err = $types[4].verify(message[".jspb.test.IndirectExtension.simple"]);
                    if (err) {
                        return ".jspb.test.IndirectExtension.simple." + err;
                    }
                }
                if (message[".jspb.test.IndirectExtension.str"] !== undefined) {
                    if (!$util.isString(message[".jspb.test.IndirectExtension.str"])) {
                        return ".jspb.test.IndirectExtension.str: string expected";
                    }
                }
                if (message[".jspb.test.IndirectExtension.repeatedStr"] !== undefined) {
                    if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedStr"])) {
                        return ".jspb.test.IndirectExtension.repeatedStr: array expected";
                    }
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i) {
                        if (!$util.isString(message[".jspb.test.IndirectExtension.repeatedStr"][i])) {
                            return ".jspb.test.IndirectExtension.repeatedStr: string[] expected";
                        }
                    }
                }
                if (message[".jspb.test.IndirectExtension.repeatedSimple"] !== undefined) {
                    if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedSimple"])) {
                        return ".jspb.test.IndirectExtension.repeatedSimple: array expected";
                    }
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                        var err = $types[7].verify(message[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                        if (err) {
                            return ".jspb.test.IndirectExtension.repeatedSimple." + err;
                        }
                    }
                }
                if (message[".jspb.test.simple1"] !== undefined && message[".jspb.test.simple1"] !== null) {
                    var err = $types[8].verify(message[".jspb.test.simple1"]);
                    if (err) {
                        return ".jspb.test.simple1." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.HasExtensions} HasExtensions
             */
            HasExtensions.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.HasExtensions();
                if (object.str1 !== undefined && object.str1 !== null) {
                    message.str1 = String(object.str1);
                }
                if (object.str2 !== undefined && object.str2 !== null) {
                    message.str2 = String(object.str2);
                }
                if (object.str3 !== undefined && object.str3 !== null) {
                    message.str3 = String(object.str3);
                }
                if (object[".jspb.test.IsExtension.extField"] !== undefined && object[".jspb.test.IsExtension.extField"] !== null) {
                    message[".jspb.test.IsExtension.extField"] = $types[3].fromObject(object[".jspb.test.IsExtension.extField"]);
                }
                if (object[".jspb.test.IndirectExtension.simple"] !== undefined && object[".jspb.test.IndirectExtension.simple"] !== null) {
                    message[".jspb.test.IndirectExtension.simple"] = $types[4].fromObject(object[".jspb.test.IndirectExtension.simple"]);
                }
                if (object[".jspb.test.IndirectExtension.str"] !== undefined && object[".jspb.test.IndirectExtension.str"] !== null) {
                    message[".jspb.test.IndirectExtension.str"] = String(object[".jspb.test.IndirectExtension.str"]);
                }
                if (object[".jspb.test.IndirectExtension.repeatedStr"]) {
                    message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedStr"].length; ++i) {
                        message[".jspb.test.IndirectExtension.repeatedStr"][i] = String(object[".jspb.test.IndirectExtension.repeatedStr"][i]);
                    }
                }
                if (object[".jspb.test.IndirectExtension.repeatedSimple"]) {
                    message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                    for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                        message[".jspb.test.IndirectExtension.repeatedSimple"][i] = $types[7].fromObject(object[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                    }
                }
                if (object[".jspb.test.simple1"] !== undefined && object[".jspb.test.simple1"] !== null) {
                    message[".jspb.test.simple1"] = $types[8].fromObject(object[".jspb.test.simple1"]);
                }
                return message;
            };

            /**
             * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.HasExtensions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.HasExtensions} HasExtensions
             */
            HasExtensions.from = HasExtensions.fromObject;

            /**
             * Creates a plain object from a HasExtensions message. Also converts values to other types if specified.
             * @param {jspb.test.HasExtensions} message HasExtensions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HasExtensions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                }
                if (options.defaults) {
                    object.str1 = "";
                    object.str2 = "";
                    object.str3 = "";
                    object[".jspb.test.IsExtension.extField"] = null;
                    object[".jspb.test.IndirectExtension.simple"] = null;
                    object[".jspb.test.IndirectExtension.str"] = "";
                    object[".jspb.test.simple1"] = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "str1":
                        if (message.str1 !== undefined && message.str1 !== null) {
                            object.str1 = message.str1;
                        }
                        break;

                    case "str2":
                        if (message.str2 !== undefined && message.str2 !== null) {
                            object.str2 = message.str2;
                        }
                        break;

                    case "str3":
                        if (message.str3 !== undefined && message.str3 !== null) {
                            object.str3 = message.str3;
                        }
                        break;

                    case ".jspb.test.IsExtension.extField":
                        if (message[".jspb.test.IsExtension.extField"] !== undefined && message[".jspb.test.IsExtension.extField"] !== null) {
                            object[".jspb.test.IsExtension.extField"] = $types[3].toObject(message[".jspb.test.IsExtension.extField"], options);
                        }
                        break;

                    case ".jspb.test.IndirectExtension.simple":
                        if (message[".jspb.test.IndirectExtension.simple"] !== undefined && message[".jspb.test.IndirectExtension.simple"] !== null) {
                            object[".jspb.test.IndirectExtension.simple"] = $types[4].toObject(message[".jspb.test.IndirectExtension.simple"], options);
                        }
                        break;

                    case ".jspb.test.IndirectExtension.str":
                        if (message[".jspb.test.IndirectExtension.str"] !== undefined && message[".jspb.test.IndirectExtension.str"] !== null) {
                            object[".jspb.test.IndirectExtension.str"] = message[".jspb.test.IndirectExtension.str"];
                        }
                        break;

                    case ".jspb.test.IndirectExtension.repeatedStr":
                        if (message[".jspb.test.IndirectExtension.repeatedStr"].length) {
                            object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                            for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++j) {
                                object[".jspb.test.IndirectExtension.repeatedStr"][j] = message[".jspb.test.IndirectExtension.repeatedStr"][j];
                            }
                        }
                        break;

                    case ".jspb.test.IndirectExtension.repeatedSimple":
                        if (message[".jspb.test.IndirectExtension.repeatedSimple"].length) {
                            object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                            for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++j) {
                                object[".jspb.test.IndirectExtension.repeatedSimple"][j] = $types[7].toObject(message[".jspb.test.IndirectExtension.repeatedSimple"][j], options);
                            }
                        }
                        break;

                    case ".jspb.test.simple1":
                        if (message[".jspb.test.simple1"] !== undefined && message[".jspb.test.simple1"] !== null) {
                            object[".jspb.test.simple1"] = $types[8].toObject(message[".jspb.test.simple1"], options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this HasExtensions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HasExtensions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this HasExtensions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            HasExtensions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HasExtensions;
        })();

        test.Complex = (function() {

            /**
             * Constructs a new Complex.
             * @exports jspb.test.Complex
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Complex(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Complex aString.
             * @type {string}
             */
            Complex.prototype.aString = "";

            /**
             * Complex anOutOfOrderBool.
             * @type {boolean}
             */
            Complex.prototype.anOutOfOrderBool = false;

            /**
             * Complex aNestedMessage.
             * @type {jspb.test.Complex.Nested}
             */
            Complex.prototype.aNestedMessage = null;

            /**
             * Complex aRepeatedMessage.
             * @type {Array.<jspb.test.Complex.Nested>}
             */
            Complex.prototype.aRepeatedMessage = $util.emptyArray;

            /**
             * Complex aRepeatedString.
             * @type {Array.<string>}
             */
            Complex.prototype.aRepeatedString = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                2: "jspb.test.Complex.Nested",
                3: "jspb.test.Complex.Nested"
            }; $lazyTypes.push($types);

            /**
             * Creates a new Complex instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.Complex} Complex instance
             */
            Complex.create = function create(properties) {
                return new Complex(properties);
            };

            /**
             * Encodes the specified Complex message.
             * @param {jspb.test.Complex|Object} message Complex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Complex.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                writer.uint32(10).string(message.aString);
                writer.uint32(72).bool(message.anOutOfOrderBool);
                if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                    $types[2].encode(message.aNestedMessage, writer.uint32(34).fork()).ldelim();
                }
                if (message.aRepeatedMessage) {
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        $types[3].encode(message.aRepeatedMessage[i], writer.uint32(42).fork()).ldelim();
                    }
                }
                if (message.aRepeatedString) {
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        writer.uint32(58).string(message.aRepeatedString[i]);
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified Complex message, length delimited.
             * @param {jspb.test.Complex|Object} message Complex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Complex.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Complex message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Complex} Complex
             */
            Complex.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Complex();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aString = reader.string();
                        break;

                    case 9:
                        message.anOutOfOrderBool = reader.bool();
                        break;

                    case 4:
                        message.aNestedMessage = $types[2].decode(reader, reader.uint32());
                        break;

                    case 5:
                        if (!(message.aRepeatedMessage && message.aRepeatedMessage.length)) {
                            message.aRepeatedMessage = [];
                        }
                        message.aRepeatedMessage.push($types[3].decode(reader, reader.uint32()));
                        break;

                    case 7:
                        if (!(message.aRepeatedString && message.aRepeatedString.length)) {
                            message.aRepeatedString = [];
                        }
                        message.aRepeatedString.push(reader.string());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Complex message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.Complex} Complex
             */
            Complex.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a Complex message.
             * @param {jspb.test.Complex|Object} message Complex message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Complex.verify = function verify(message) {
                if (!$util.isString(message.aString)) {
                    return "aString: string expected";
                }
                if (typeof message.anOutOfOrderBool !== "boolean") {
                    return "anOutOfOrderBool: boolean expected";
                }
                if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                    var err = $types[2].verify(message.aNestedMessage);
                    if (err) {
                        return "aNestedMessage." + err;
                    }
                }
                if (message.aRepeatedMessage !== undefined) {
                    if (!Array.isArray(message.aRepeatedMessage)) {
                        return "aRepeatedMessage: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        var err = $types[3].verify(message.aRepeatedMessage[i]);
                        if (err) {
                            return "aRepeatedMessage." + err;
                        }
                    }
                }
                if (message.aRepeatedString !== undefined) {
                    if (!Array.isArray(message.aRepeatedString)) {
                        return "aRepeatedString: array expected";
                    }
                    for (var i = 0; i < message.aRepeatedString.length; ++i) {
                        if (!$util.isString(message.aRepeatedString[i])) {
                            return "aRepeatedString: string[] expected";
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a Complex message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Complex} Complex
             */
            Complex.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.Complex();
                if (object.aString !== undefined && object.aString !== null) {
                    message.aString = String(object.aString);
                }
                if (object.anOutOfOrderBool !== undefined && object.anOutOfOrderBool !== null) {
                    message.anOutOfOrderBool = Boolean(object.anOutOfOrderBool);
                }
                if (object.aNestedMessage !== undefined && object.aNestedMessage !== null) {
                    message.aNestedMessage = $types[2].fromObject(object.aNestedMessage);
                }
                if (object.aRepeatedMessage) {
                    message.aRepeatedMessage = [];
                    for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                        message.aRepeatedMessage[i] = $types[3].fromObject(object.aRepeatedMessage[i]);
                    }
                }
                if (object.aRepeatedString) {
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i) {
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a Complex message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.Complex.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Complex} Complex
             */
            Complex.from = Complex.fromObject;

            /**
             * Creates a plain object from a Complex message. Also converts values to other types if specified.
             * @param {jspb.test.Complex} message Complex
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Complex.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedMessage = [];
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                    object.anOutOfOrderBool = false;
                    object.aNestedMessage = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "aString":
                        if (message.aString !== undefined && message.aString !== null) {
                            object.aString = message.aString;
                        }
                        break;

                    case "anOutOfOrderBool":
                        if (message.anOutOfOrderBool !== undefined && message.anOutOfOrderBool !== null) {
                            object.anOutOfOrderBool = message.anOutOfOrderBool;
                        }
                        break;

                    case "aNestedMessage":
                        if (message.aNestedMessage !== undefined && message.aNestedMessage !== null) {
                            object.aNestedMessage = $types[2].toObject(message.aNestedMessage, options);
                        }
                        break;

                    case "aRepeatedMessage":
                        if (message.aRepeatedMessage.length) {
                            object.aRepeatedMessage = [];
                            for (var j = 0; j < message.aRepeatedMessage.length; ++j) {
                                object.aRepeatedMessage[j] = $types[3].toObject(message.aRepeatedMessage[j], options);
                            }
                        }
                        break;

                    case "aRepeatedString":
                        if (message.aRepeatedString.length) {
                            object.aRepeatedString = [];
                            for (var j = 0; j < message.aRepeatedString.length; ++j) {
                                object.aRepeatedString[j] = message.aRepeatedString[j];
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this Complex message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Complex.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Complex to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Complex.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Complex.Nested = (function() {

                /**
                 * Constructs a new Nested.
                 * @exports jspb.test.Complex.Nested
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Nested anInt.
                 * @type {number}
                 */
                Nested.prototype.anInt = 0;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.Complex.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message.
                 * @param {jspb.test.Complex.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    writer.uint32(16).int32(message.anInt);
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited.
                 * @param {jspb.test.Complex.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.Complex.Nested} Nested
                 */
                Nested.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Complex.Nested();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.anInt = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.Complex.Nested} Nested
                 */
                Nested.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a Nested message.
                 * @param {jspb.test.Complex.Nested|Object} message Nested message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (!$util.isInteger(message.anInt)) {
                        return "anInt: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Complex.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.Complex.Nested();
                    if (object.anInt !== undefined && object.anInt !== null) {
                        message.anInt = object.anInt | 0;
                    }
                    return message;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.Complex.Nested.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Complex.Nested} Nested
                 */
                Nested.from = Nested.fromObject;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param {jspb.test.Complex.Nested} message Nested
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.anInt = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "anInt":
                            if (message.anInt !== undefined && message.anInt !== null) {
                                object.anInt = message.anInt;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Nested message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Nested to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Nested;
            })();

            return Complex;
        })();

        test.OuterMessage = (function() {

            /**
             * Constructs a new OuterMessage.
             * @exports jspb.test.OuterMessage
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OuterMessage(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Creates a new OuterMessage instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.OuterMessage} OuterMessage instance
             */
            OuterMessage.create = function create(properties) {
                return new OuterMessage(properties);
            };

            /**
             * Encodes the specified OuterMessage message.
             * @param {jspb.test.OuterMessage|Object} message OuterMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OuterMessage.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                return writer;
            };

            /**
             * Encodes the specified OuterMessage message, length delimited.
             * @param {jspb.test.OuterMessage|Object} message OuterMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OuterMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OuterMessage message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.OuterMessage} OuterMessage
             */
            OuterMessage.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.OuterMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OuterMessage message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.OuterMessage} OuterMessage
             */
            OuterMessage.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an OuterMessage message.
             * @param {jspb.test.OuterMessage|Object} message OuterMessage message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OuterMessage.verify = function verify() {
                return null;
            };

            /**
             * Creates an OuterMessage message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OuterMessage} OuterMessage
             */
            OuterMessage.fromObject = function fromObject() {
                return new $root.jspb.test.OuterMessage();
            };

            /**
             * Creates an OuterMessage message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.OuterMessage.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OuterMessage} OuterMessage
             */
            OuterMessage.from = OuterMessage.fromObject;

            /**
             * Creates a plain object from an OuterMessage message. Also converts values to other types if specified.
             * @param {jspb.test.OuterMessage} message OuterMessage
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OuterMessage.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this OuterMessage message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OuterMessage.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OuterMessage to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OuterMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OuterMessage.Complex = (function() {

                /**
                 * Constructs a new Complex.
                 * @exports jspb.test.OuterMessage.Complex
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Complex(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Complex innerComplexField.
                 * @type {number}
                 */
                Complex.prototype.innerComplexField = 0;

                /**
                 * Creates a new Complex instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.OuterMessage.Complex} Complex instance
                 */
                Complex.create = function create(properties) {
                    return new Complex(properties);
                };

                /**
                 * Encodes the specified Complex message.
                 * @param {jspb.test.OuterMessage.Complex|Object} message Complex message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Complex.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.innerComplexField !== undefined && message.innerComplexField !== 0) {
                        writer.uint32(8).int32(message.innerComplexField);
                    }
                    return writer;
                };

                /**
                 * Encodes the specified Complex message, length delimited.
                 * @param {jspb.test.OuterMessage.Complex|Object} message Complex message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Complex.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Complex message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 */
                Complex.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.OuterMessage.Complex();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.innerComplexField = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Complex message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 */
                Complex.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a Complex message.
                 * @param {jspb.test.OuterMessage.Complex|Object} message Complex message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Complex.verify = function verify(message) {
                    if (message.innerComplexField !== undefined) {
                        if (!$util.isInteger(message.innerComplexField)) {
                            return "innerComplexField: integer expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Complex message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 */
                Complex.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.OuterMessage.Complex();
                    if (object.innerComplexField !== undefined && object.innerComplexField !== null) {
                        message.innerComplexField = object.innerComplexField | 0;
                    }
                    return message;
                };

                /**
                 * Creates a Complex message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.OuterMessage.Complex.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 */
                Complex.from = Complex.fromObject;

                /**
                 * Creates a plain object from a Complex message. Also converts values to other types if specified.
                 * @param {jspb.test.OuterMessage.Complex} message Complex
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Complex.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.innerComplexField = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "innerComplexField":
                            if (message.innerComplexField !== undefined && message.innerComplexField !== null) {
                                object.innerComplexField = message.innerComplexField;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Complex message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Complex.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Complex to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Complex.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Complex;
            })();

            return OuterMessage;
        })();

        test.IsExtension = (function() {

            /**
             * Constructs a new IsExtension.
             * @exports jspb.test.IsExtension
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function IsExtension(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * IsExtension ext1.
             * @type {string}
             */
            IsExtension.prototype.ext1 = "";

            /**
             * Creates a new IsExtension instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.IsExtension} IsExtension instance
             */
            IsExtension.create = function create(properties) {
                return new IsExtension(properties);
            };

            /**
             * Encodes the specified IsExtension message.
             * @param {jspb.test.IsExtension|Object} message IsExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IsExtension.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.ext1 !== undefined && message.ext1 !== "") {
                    writer.uint32(10).string(message.ext1);
                }
                return writer;
            };

            /**
             * Encodes the specified IsExtension message, length delimited.
             * @param {jspb.test.IsExtension|Object} message IsExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IsExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IsExtension message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.IsExtension} IsExtension
             */
            IsExtension.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.IsExtension();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ext1 = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IsExtension message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.IsExtension} IsExtension
             */
            IsExtension.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an IsExtension message.
             * @param {jspb.test.IsExtension|Object} message IsExtension message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            IsExtension.verify = function verify(message) {
                if (message.ext1 !== undefined) {
                    if (!$util.isString(message.ext1)) {
                        return "ext1: string expected";
                    }
                }
                return null;
            };

            /**
             * Creates an IsExtension message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IsExtension} IsExtension
             */
            IsExtension.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.IsExtension();
                if (object.ext1 !== undefined && object.ext1 !== null) {
                    message.ext1 = String(object.ext1);
                }
                return message;
            };

            /**
             * Creates an IsExtension message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.IsExtension.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IsExtension} IsExtension
             */
            IsExtension.from = IsExtension.fromObject;

            /**
             * Creates a plain object from an IsExtension message. Also converts values to other types if specified.
             * @param {jspb.test.IsExtension} message IsExtension
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IsExtension.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.ext1 = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "ext1":
                        if (message.ext1 !== undefined && message.ext1 !== null) {
                            object.ext1 = message.ext1;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this IsExtension message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IsExtension.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this IsExtension to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            IsExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IsExtension;
        })();

        test.IndirectExtension = (function() {

            /**
             * Constructs a new IndirectExtension.
             * @exports jspb.test.IndirectExtension
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function IndirectExtension(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Creates a new IndirectExtension instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.IndirectExtension} IndirectExtension instance
             */
            IndirectExtension.create = function create(properties) {
                return new IndirectExtension(properties);
            };

            /**
             * Encodes the specified IndirectExtension message.
             * @param {jspb.test.IndirectExtension|Object} message IndirectExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndirectExtension.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                return writer;
            };

            /**
             * Encodes the specified IndirectExtension message, length delimited.
             * @param {jspb.test.IndirectExtension|Object} message IndirectExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndirectExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IndirectExtension message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             */
            IndirectExtension.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.IndirectExtension();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IndirectExtension message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             */
            IndirectExtension.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an IndirectExtension message.
             * @param {jspb.test.IndirectExtension|Object} message IndirectExtension message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            IndirectExtension.verify = function verify() {
                return null;
            };

            /**
             * Creates an IndirectExtension message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             */
            IndirectExtension.fromObject = function fromObject() {
                return new $root.jspb.test.IndirectExtension();
            };

            /**
             * Creates an IndirectExtension message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.IndirectExtension.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             */
            IndirectExtension.from = IndirectExtension.fromObject;

            /**
             * Creates a plain object from an IndirectExtension message. Also converts values to other types if specified.
             * @param {jspb.test.IndirectExtension} message IndirectExtension
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IndirectExtension.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this IndirectExtension message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IndirectExtension.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this IndirectExtension to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            IndirectExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IndirectExtension;
        })();

        test.DefaultValues = (function() {

            /**
             * Constructs a new DefaultValues.
             * @exports jspb.test.DefaultValues
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function DefaultValues(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * DefaultValues stringField.
             * @type {string}
             */
            DefaultValues.prototype.stringField = "default<>'\"abc";

            /**
             * DefaultValues boolField.
             * @type {boolean}
             */
            DefaultValues.prototype.boolField = true;

            /**
             * DefaultValues intField.
             * @type {number|$protobuf.Long}
             */
            DefaultValues.prototype.intField = $util.Long ? $util.Long.fromBits(11,0,false) : 11;

            /**
             * DefaultValues enumField.
             * @type {number}
             */
            DefaultValues.prototype.enumField = undefined;

            /**
             * DefaultValues emptyField.
             * @type {string}
             */
            DefaultValues.prototype.emptyField = "";

            /**
             * DefaultValues bytesField.
             * @type {Uint8Array}
             */
            DefaultValues.prototype.bytesField = $util.newBuffer([109,111,111]);

            // Lazily resolved type references
            var $types = {
                3: "jspb.test.DefaultValues.Enum"
            }; $lazyTypes.push($types);

            /**
             * Creates a new DefaultValues instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.DefaultValues} DefaultValues instance
             */
            DefaultValues.create = function create(properties) {
                return new DefaultValues(properties);
            };

            /**
             * Encodes the specified DefaultValues message.
             * @param {jspb.test.DefaultValues|Object} message DefaultValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultValues.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.stringField !== undefined && message.stringField !== "default<>'\"abc") {
                    writer.uint32(10).string(message.stringField);
                }
                if (message.boolField !== undefined && message.boolField !== true) {
                    writer.uint32(16).bool(message.boolField);
                }
                if (message.intField !== undefined && message.intField !== null && $util.longNe(message.intField, 11, 0)) {
                    writer.uint32(24).int64(message.intField);
                }
                if (message.enumField !== undefined && message.enumField !== undefined) {
                    writer.uint32(32).uint32(message.enumField);
                }
                if (message.emptyField !== undefined && message.emptyField !== "") {
                    writer.uint32(50).string(message.emptyField);
                }
                if (message.bytesField && message.bytesField.length && $util.arrayNe(message.bytesField, [ 109, 111, 111 ])) {
                    writer.uint32(66).bytes(message.bytesField);
                }
                return writer;
            };

            /**
             * Encodes the specified DefaultValues message, length delimited.
             * @param {jspb.test.DefaultValues|Object} message DefaultValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultValues.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DefaultValues message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.DefaultValues} DefaultValues
             */
            DefaultValues.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.DefaultValues();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stringField = reader.string();
                        break;

                    case 2:
                        message.boolField = reader.bool();
                        break;

                    case 3:
                        message.intField = reader.int64();
                        break;

                    case 4:
                        message.enumField = reader.uint32();
                        break;

                    case 6:
                        message.emptyField = reader.string();
                        break;

                    case 8:
                        message.bytesField = reader.bytes();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DefaultValues message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.DefaultValues} DefaultValues
             */
            DefaultValues.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a DefaultValues message.
             * @param {jspb.test.DefaultValues|Object} message DefaultValues message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DefaultValues.verify = function verify(message) {
                if (message.stringField !== undefined) {
                    if (!$util.isString(message.stringField)) {
                        return "stringField: string expected";
                    }
                }
                if (message.boolField !== undefined) {
                    if (typeof message.boolField !== "boolean") {
                        return "boolField: boolean expected";
                    }
                }
                if (message.intField !== undefined) {
                    if (!$util.isInteger(message.intField) && !(message.intField && $util.isInteger(message.intField.low) && $util.isInteger(message.intField.high))) {
                        return "intField: integer|Long expected";
                    }
                }
                if (message.enumField !== undefined) {
                    switch (message.enumField) {
                    default:
                        return "enumField: enum value expected";

                    case 13:
                    case 77:
                        break;
                    }
                }
                if (message.emptyField !== undefined) {
                    if (!$util.isString(message.emptyField)) {
                        return "emptyField: string expected";
                    }
                }
                if (message.bytesField !== undefined) {
                    if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField))) {
                        return "bytesField: buffer expected";
                    }
                }
                return null;
            };

            /**
             * Creates a DefaultValues message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.DefaultValues} DefaultValues
             */
            DefaultValues.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.DefaultValues();
                if (object.stringField !== undefined && object.stringField !== null) {
                    message.stringField = String(object.stringField);
                }
                if (object.boolField !== undefined && object.boolField !== null) {
                    message.boolField = Boolean(object.boolField);
                }
                if (object.intField !== undefined && object.intField !== null) {
                    if ($util.Long) {
                        (message.intField = $util.Long.fromValue(object.intField)).unsigned = false;
                    } else {
                        if (typeof object.intField === "string") {
                            message.intField = parseInt(object.intField, 10);
                        } else {
                            if (typeof object.intField === "number") {
                                message.intField = object.intField;
                            } else {
                                if (typeof object.intField === "object") {
                                    message.intField = new $util.LongBits(object.intField.low, object.intField.high).toNumber();
                                }
                            }
                        }
                    }
                }
                switch (object.enumField) {
                case "E1":
                case 13:
                    message.enumField = 13;
                    break;

                case "E2":
                case 77:
                    message.enumField = 77;
                    break;
                }
                if (object.emptyField !== undefined && object.emptyField !== null) {
                    message.emptyField = String(object.emptyField);
                }
                if (object.bytesField !== undefined && object.bytesField !== null) {
                    if (typeof object.bytesField === "string") {
                        $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
                    } else {
                        if (object.bytesField && object.bytesField.length) {
                            message.bytesField = object.bytesField;
                        }
                    }
                }
                return message;
            };

            /**
             * Creates a DefaultValues message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.DefaultValues.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.DefaultValues} DefaultValues
             */
            DefaultValues.from = DefaultValues.fromObject;

            /**
             * Creates a plain object from a DefaultValues message. Also converts values to other types if specified.
             * @param {jspb.test.DefaultValues} message DefaultValues
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DefaultValues.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.stringField = "default<>'\"abc";
                    object.boolField = true;
                    if ($util.Long) {
                        var long = new $util.Long(11, 0, false);
                        object.intField = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else {
                        object.intField = options.longs === String ? "11" : 11;
                    }
                    object.enumField = options.enums === String ? undefined : undefined;
                    object.emptyField = "";
                    object.bytesField = options.bytes === String ? "moo" : [ 109, 111, 111 ];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "stringField":
                        if (message.stringField !== undefined && message.stringField !== null) {
                            object.stringField = message.stringField;
                        }
                        break;

                    case "boolField":
                        if (message.boolField !== undefined && message.boolField !== null) {
                            object.boolField = message.boolField;
                        }
                        break;

                    case "intField":
                        if (message.intField !== undefined && message.intField !== null) {
                            if (typeof message.intField === "number") {
                                object.intField = options.longs === String ? String(message.intField) : message.intField;
                            } else {
                                object.intField = options.longs === String ? $util.Long.prototype.toString.call(message.intField) : options.longs === Number ? new $util.LongBits(message.intField.low, message.intField.high).toNumber() : message.intField;
                            }
                        }
                        break;

                    case "enumField":
                        if (message.enumField !== undefined && message.enumField !== null) {
                            object.enumField = options.enums === String ? $types[3][message.enumField] : message.enumField;
                        }
                        break;

                    case "emptyField":
                        if (message.emptyField !== undefined && message.emptyField !== null) {
                            object.emptyField = message.emptyField;
                        }
                        break;

                    case "bytesField":
                        if (message.bytesField !== undefined && message.bytesField !== null) {
                            object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this DefaultValues message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DefaultValues.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DefaultValues to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DefaultValues.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Enum enum.
             * @name Enum
             * @memberof jspb.test.DefaultValues
             * @enum {number}
             * @property {number} E1=13 E1 value
             * @property {number} E2=77 E2 value
             */
            DefaultValues.Enum = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[13] = "E1"] = 13;
                values[valuesById[77] = "E2"] = 77;
                return values;
            })();

            return DefaultValues;
        })();

        test.FloatingPointFields = (function() {

            /**
             * Constructs a new FloatingPointFields.
             * @exports jspb.test.FloatingPointFields
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FloatingPointFields(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FloatingPointFields optionalFloatField.
             * @type {number}
             */
            FloatingPointFields.prototype.optionalFloatField = 0;

            /**
             * FloatingPointFields requiredFloatField.
             * @type {number}
             */
            FloatingPointFields.prototype.requiredFloatField = 0;

            /**
             * FloatingPointFields repeatedFloatField.
             * @type {Array.<number>}
             */
            FloatingPointFields.prototype.repeatedFloatField = $util.emptyArray;

            /**
             * FloatingPointFields defaultFloatField.
             * @type {number}
             */
            FloatingPointFields.prototype.defaultFloatField = 2;

            /**
             * FloatingPointFields optionalDoubleField.
             * @type {number}
             */
            FloatingPointFields.prototype.optionalDoubleField = 0;

            /**
             * FloatingPointFields requiredDoubleField.
             * @type {number}
             */
            FloatingPointFields.prototype.requiredDoubleField = 0;

            /**
             * FloatingPointFields repeatedDoubleField.
             * @type {Array.<number>}
             */
            FloatingPointFields.prototype.repeatedDoubleField = $util.emptyArray;

            /**
             * FloatingPointFields defaultDoubleField.
             * @type {number}
             */
            FloatingPointFields.prototype.defaultDoubleField = 2;

            /**
             * Creates a new FloatingPointFields instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields instance
             */
            FloatingPointFields.create = function create(properties) {
                return new FloatingPointFields(properties);
            };

            /**
             * Encodes the specified FloatingPointFields message.
             * @param {jspb.test.FloatingPointFields|Object} message FloatingPointFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatingPointFields.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.optionalFloatField !== undefined && message.optionalFloatField !== 0) {
                    writer.uint32(13).float(message.optionalFloatField);
                }
                writer.uint32(21).float(message.requiredFloatField);
                if (message.repeatedFloatField) {
                    for (var i = 0; i < message.repeatedFloatField.length; ++i) {
                        writer.uint32(29).float(message.repeatedFloatField[i]);
                    }
                }
                if (message.defaultFloatField !== undefined && message.defaultFloatField !== 2) {
                    writer.uint32(37).float(message.defaultFloatField);
                }
                if (message.optionalDoubleField !== undefined && message.optionalDoubleField !== 0) {
                    writer.uint32(41).double(message.optionalDoubleField);
                }
                writer.uint32(49).double(message.requiredDoubleField);
                if (message.repeatedDoubleField) {
                    for (var i = 0; i < message.repeatedDoubleField.length; ++i) {
                        writer.uint32(57).double(message.repeatedDoubleField[i]);
                    }
                }
                if (message.defaultDoubleField !== undefined && message.defaultDoubleField !== 2) {
                    writer.uint32(65).double(message.defaultDoubleField);
                }
                return writer;
            };

            /**
             * Encodes the specified FloatingPointFields message, length delimited.
             * @param {jspb.test.FloatingPointFields|Object} message FloatingPointFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatingPointFields.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             */
            FloatingPointFields.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.FloatingPointFields();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.optionalFloatField = reader.float();
                        break;

                    case 2:
                        message.requiredFloatField = reader.float();
                        break;

                    case 3:
                        if (!(message.repeatedFloatField && message.repeatedFloatField.length)) {
                            message.repeatedFloatField = [];
                        }
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.repeatedFloatField.push(reader.float());
                            }
                        } else {
                            message.repeatedFloatField.push(reader.float());
                        }
                        break;

                    case 4:
                        message.defaultFloatField = reader.float();
                        break;

                    case 5:
                        message.optionalDoubleField = reader.double();
                        break;

                    case 6:
                        message.requiredDoubleField = reader.double();
                        break;

                    case 7:
                        if (!(message.repeatedDoubleField && message.repeatedDoubleField.length)) {
                            message.repeatedDoubleField = [];
                        }
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.repeatedDoubleField.push(reader.double());
                            }
                        } else {
                            message.repeatedDoubleField.push(reader.double());
                        }
                        break;

                    case 8:
                        message.defaultDoubleField = reader.double();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             */
            FloatingPointFields.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FloatingPointFields message.
             * @param {jspb.test.FloatingPointFields|Object} message FloatingPointFields message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FloatingPointFields.verify = function verify(message) {
                if (message.optionalFloatField !== undefined) {
                    if (typeof message.optionalFloatField !== "number") {
                        return "optionalFloatField: number expected";
                    }
                }
                if (typeof message.requiredFloatField !== "number") {
                    return "requiredFloatField: number expected";
                }
                if (message.repeatedFloatField !== undefined) {
                    if (!Array.isArray(message.repeatedFloatField)) {
                        return "repeatedFloatField: array expected";
                    }
                    for (var i = 0; i < message.repeatedFloatField.length; ++i) {
                        if (typeof message.repeatedFloatField[i] !== "number") {
                            return "repeatedFloatField: number[] expected";
                        }
                    }
                }
                if (message.defaultFloatField !== undefined) {
                    if (typeof message.defaultFloatField !== "number") {
                        return "defaultFloatField: number expected";
                    }
                }
                if (message.optionalDoubleField !== undefined) {
                    if (typeof message.optionalDoubleField !== "number") {
                        return "optionalDoubleField: number expected";
                    }
                }
                if (typeof message.requiredDoubleField !== "number") {
                    return "requiredDoubleField: number expected";
                }
                if (message.repeatedDoubleField !== undefined) {
                    if (!Array.isArray(message.repeatedDoubleField)) {
                        return "repeatedDoubleField: array expected";
                    }
                    for (var i = 0; i < message.repeatedDoubleField.length; ++i) {
                        if (typeof message.repeatedDoubleField[i] !== "number") {
                            return "repeatedDoubleField: number[] expected";
                        }
                    }
                }
                if (message.defaultDoubleField !== undefined) {
                    if (typeof message.defaultDoubleField !== "number") {
                        return "defaultDoubleField: number expected";
                    }
                }
                return null;
            };

            /**
             * Creates a FloatingPointFields message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             */
            FloatingPointFields.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.FloatingPointFields();
                if (object.optionalFloatField !== undefined && object.optionalFloatField !== null) {
                    message.optionalFloatField = Number(object.optionalFloatField);
                }
                if (object.requiredFloatField !== undefined && object.requiredFloatField !== null) {
                    message.requiredFloatField = Number(object.requiredFloatField);
                }
                if (object.repeatedFloatField) {
                    message.repeatedFloatField = [];
                    for (var i = 0; i < object.repeatedFloatField.length; ++i) {
                        message.repeatedFloatField[i] = Number(object.repeatedFloatField[i]);
                    }
                }
                if (object.defaultFloatField !== undefined && object.defaultFloatField !== null) {
                    message.defaultFloatField = Number(object.defaultFloatField);
                }
                if (object.optionalDoubleField !== undefined && object.optionalDoubleField !== null) {
                    message.optionalDoubleField = Number(object.optionalDoubleField);
                }
                if (object.requiredDoubleField !== undefined && object.requiredDoubleField !== null) {
                    message.requiredDoubleField = Number(object.requiredDoubleField);
                }
                if (object.repeatedDoubleField) {
                    message.repeatedDoubleField = [];
                    for (var i = 0; i < object.repeatedDoubleField.length; ++i) {
                        message.repeatedDoubleField[i] = Number(object.repeatedDoubleField[i]);
                    }
                }
                if (object.defaultDoubleField !== undefined && object.defaultDoubleField !== null) {
                    message.defaultDoubleField = Number(object.defaultDoubleField);
                }
                return message;
            };

            /**
             * Creates a FloatingPointFields message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.FloatingPointFields.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             */
            FloatingPointFields.from = FloatingPointFields.fromObject;

            /**
             * Creates a plain object from a FloatingPointFields message. Also converts values to other types if specified.
             * @param {jspb.test.FloatingPointFields} message FloatingPointFields
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatingPointFields.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedFloatField = [];
                    object.repeatedDoubleField = [];
                }
                if (options.defaults) {
                    object.optionalFloatField = 0;
                    object.requiredFloatField = 0;
                    object.defaultFloatField = 2;
                    object.optionalDoubleField = 0;
                    object.requiredDoubleField = 0;
                    object.defaultDoubleField = 2;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "optionalFloatField":
                        if (message.optionalFloatField !== undefined && message.optionalFloatField !== null) {
                            object.optionalFloatField = message.optionalFloatField;
                        }
                        break;

                    case "requiredFloatField":
                        if (message.requiredFloatField !== undefined && message.requiredFloatField !== null) {
                            object.requiredFloatField = message.requiredFloatField;
                        }
                        break;

                    case "repeatedFloatField":
                        if (message.repeatedFloatField.length) {
                            object.repeatedFloatField = [];
                            for (var j = 0; j < message.repeatedFloatField.length; ++j) {
                                object.repeatedFloatField[j] = message.repeatedFloatField[j];
                            }
                        }
                        break;

                    case "defaultFloatField":
                        if (message.defaultFloatField !== undefined && message.defaultFloatField !== null) {
                            object.defaultFloatField = message.defaultFloatField;
                        }
                        break;

                    case "optionalDoubleField":
                        if (message.optionalDoubleField !== undefined && message.optionalDoubleField !== null) {
                            object.optionalDoubleField = message.optionalDoubleField;
                        }
                        break;

                    case "requiredDoubleField":
                        if (message.requiredDoubleField !== undefined && message.requiredDoubleField !== null) {
                            object.requiredDoubleField = message.requiredDoubleField;
                        }
                        break;

                    case "repeatedDoubleField":
                        if (message.repeatedDoubleField.length) {
                            object.repeatedDoubleField = [];
                            for (var j = 0; j < message.repeatedDoubleField.length; ++j) {
                                object.repeatedDoubleField[j] = message.repeatedDoubleField[j];
                            }
                        }
                        break;

                    case "defaultDoubleField":
                        if (message.defaultDoubleField !== undefined && message.defaultDoubleField !== null) {
                            object.defaultDoubleField = message.defaultDoubleField;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FloatingPointFields message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatingPointFields.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FloatingPointFields to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FloatingPointFields.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatingPointFields;
        })();

        test.TestClone = (function() {

            /**
             * Constructs a new TestClone.
             * @exports jspb.test.TestClone
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestClone(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestClone str.
             * @type {string}
             */
            TestClone.prototype.str = "";

            /**
             * TestClone simple1.
             * @type {jspb.test.Simple1}
             */
            TestClone.prototype.simple1 = null;

            /**
             * TestClone simple2.
             * @type {Array.<jspb.test.Simple1>}
             */
            TestClone.prototype.simple2 = $util.emptyArray;

            /**
             * TestClone bytesField.
             * @type {Uint8Array}
             */
            TestClone.prototype.bytesField = $util.newBuffer([]);

            /**
             * TestClone unused.
             * @type {string}
             */
            TestClone.prototype.unused = "";

            /**
             * TestClone .jspb.test.CloneExtension.extField.
             * @name jspb.test.TestClone#.jspb.test.CloneExtension.extField
             * @type {jspb.test.CloneExtension}
             */
            TestClone.prototype[".jspb.test.CloneExtension.extField"] = null;

            // Lazily resolved type references
            var $types = {
                1: "jspb.test.Simple1",
                2: "jspb.test.Simple1",
                5: "jspb.test.CloneExtension"
            }; $lazyTypes.push($types);

            /**
             * Creates a new TestClone instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestClone} TestClone instance
             */
            TestClone.create = function create(properties) {
                return new TestClone(properties);
            };

            /**
             * Encodes the specified TestClone message.
             * @param {jspb.test.TestClone|Object} message TestClone message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestClone.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.str !== undefined && message.str !== "") {
                    writer.uint32(10).string(message.str);
                }
                if (message.simple1 !== undefined && message.simple1 !== null) {
                    $types[1].encode(message.simple1, writer.uint32(26).fork()).ldelim();
                }
                if (message.simple2) {
                    for (var i = 0; i < message.simple2.length; ++i) {
                        $types[2].encode(message.simple2[i], writer.uint32(42).fork()).ldelim();
                    }
                }
                if (message.bytesField && message.bytesField.length) {
                    writer.uint32(50).bytes(message.bytesField);
                }
                if (message.unused !== undefined && message.unused !== "") {
                    writer.uint32(58).string(message.unused);
                }
                if (message[".jspb.test.CloneExtension.extField"] !== undefined && message[".jspb.test.CloneExtension.extField"] !== null) {
                    $types[5].encode(message[".jspb.test.CloneExtension.extField"], writer.uint32(802).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified TestClone message, length delimited.
             * @param {jspb.test.TestClone|Object} message TestClone message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestClone.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestClone message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestClone} TestClone
             */
            TestClone.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestClone();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.str = reader.string();
                        break;

                    case 3:
                        message.simple1 = $types[1].decode(reader, reader.uint32());
                        break;

                    case 5:
                        if (!(message.simple2 && message.simple2.length)) {
                            message.simple2 = [];
                        }
                        message.simple2.push($types[2].decode(reader, reader.uint32()));
                        break;

                    case 6:
                        message.bytesField = reader.bytes();
                        break;

                    case 7:
                        message.unused = reader.string();
                        break;

                    case 100:
                        message[".jspb.test.CloneExtension.extField"] = $types[5].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestClone message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestClone} TestClone
             */
            TestClone.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestClone message.
             * @param {jspb.test.TestClone|Object} message TestClone message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestClone.verify = function verify(message) {
                if (message.str !== undefined) {
                    if (!$util.isString(message.str)) {
                        return "str: string expected";
                    }
                }
                if (message.simple1 !== undefined && message.simple1 !== null) {
                    var err = $types[1].verify(message.simple1);
                    if (err) {
                        return "simple1." + err;
                    }
                }
                if (message.simple2 !== undefined) {
                    if (!Array.isArray(message.simple2)) {
                        return "simple2: array expected";
                    }
                    for (var i = 0; i < message.simple2.length; ++i) {
                        var err = $types[2].verify(message.simple2[i]);
                        if (err) {
                            return "simple2." + err;
                        }
                    }
                }
                if (message.bytesField !== undefined) {
                    if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField))) {
                        return "bytesField: buffer expected";
                    }
                }
                if (message.unused !== undefined) {
                    if (!$util.isString(message.unused)) {
                        return "unused: string expected";
                    }
                }
                if (message[".jspb.test.CloneExtension.extField"] !== undefined && message[".jspb.test.CloneExtension.extField"] !== null) {
                    var err = $types[5].verify(message[".jspb.test.CloneExtension.extField"]);
                    if (err) {
                        return ".jspb.test.CloneExtension.extField." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestClone} TestClone
             */
            TestClone.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestClone();
                if (object.str !== undefined && object.str !== null) {
                    message.str = String(object.str);
                }
                if (object.simple1 !== undefined && object.simple1 !== null) {
                    message.simple1 = $types[1].fromObject(object.simple1);
                }
                if (object.simple2) {
                    message.simple2 = [];
                    for (var i = 0; i < object.simple2.length; ++i) {
                        message.simple2[i] = $types[2].fromObject(object.simple2[i]);
                    }
                }
                if (object.bytesField !== undefined && object.bytesField !== null) {
                    if (typeof object.bytesField === "string") {
                        $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
                    } else {
                        if (object.bytesField && object.bytesField.length) {
                            message.bytesField = object.bytesField;
                        }
                    }
                }
                if (object.unused !== undefined && object.unused !== null) {
                    message.unused = String(object.unused);
                }
                if (object[".jspb.test.CloneExtension.extField"] !== undefined && object[".jspb.test.CloneExtension.extField"] !== null) {
                    message[".jspb.test.CloneExtension.extField"] = $types[5].fromObject(object[".jspb.test.CloneExtension.extField"]);
                }
                return message;
            };

            /**
             * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestClone.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestClone} TestClone
             */
            TestClone.from = TestClone.fromObject;

            /**
             * Creates a plain object from a TestClone message. Also converts values to other types if specified.
             * @param {jspb.test.TestClone} message TestClone
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestClone.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.simple2 = [];
                }
                if (options.defaults) {
                    object.str = "";
                    object.simple1 = null;
                    object.bytesField = options.bytes === String ? "" : [];
                    object.unused = "";
                    object[".jspb.test.CloneExtension.extField"] = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "str":
                        if (message.str !== undefined && message.str !== null) {
                            object.str = message.str;
                        }
                        break;

                    case "simple1":
                        if (message.simple1 !== undefined && message.simple1 !== null) {
                            object.simple1 = $types[1].toObject(message.simple1, options);
                        }
                        break;

                    case "simple2":
                        if (message.simple2.length) {
                            object.simple2 = [];
                            for (var j = 0; j < message.simple2.length; ++j) {
                                object.simple2[j] = $types[2].toObject(message.simple2[j], options);
                            }
                        }
                        break;

                    case "bytesField":
                        if (message.bytesField !== undefined && message.bytesField !== null) {
                            object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
                        }
                        break;

                    case "unused":
                        if (message.unused !== undefined && message.unused !== null) {
                            object.unused = message.unused;
                        }
                        break;

                    case ".jspb.test.CloneExtension.extField":
                        if (message[".jspb.test.CloneExtension.extField"] !== undefined && message[".jspb.test.CloneExtension.extField"] !== null) {
                            object[".jspb.test.CloneExtension.extField"] = $types[5].toObject(message[".jspb.test.CloneExtension.extField"], options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestClone message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestClone.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestClone to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestClone.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestClone;
        })();

        test.CloneExtension = (function() {

            /**
             * Constructs a new CloneExtension.
             * @exports jspb.test.CloneExtension
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function CloneExtension(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * CloneExtension ext.
             * @type {string}
             */
            CloneExtension.prototype.ext = "";

            /**
             * Creates a new CloneExtension instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.CloneExtension} CloneExtension instance
             */
            CloneExtension.create = function create(properties) {
                return new CloneExtension(properties);
            };

            /**
             * Encodes the specified CloneExtension message.
             * @param {jspb.test.CloneExtension|Object} message CloneExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloneExtension.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.ext !== undefined && message.ext !== "") {
                    writer.uint32(18).string(message.ext);
                }
                return writer;
            };

            /**
             * Encodes the specified CloneExtension message, length delimited.
             * @param {jspb.test.CloneExtension|Object} message CloneExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloneExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CloneExtension message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.CloneExtension} CloneExtension
             */
            CloneExtension.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.CloneExtension();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.ext = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CloneExtension message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.CloneExtension} CloneExtension
             */
            CloneExtension.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a CloneExtension message.
             * @param {jspb.test.CloneExtension|Object} message CloneExtension message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            CloneExtension.verify = function verify(message) {
                if (message.ext !== undefined) {
                    if (!$util.isString(message.ext)) {
                        return "ext: string expected";
                    }
                }
                return null;
            };

            /**
             * Creates a CloneExtension message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.CloneExtension} CloneExtension
             */
            CloneExtension.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.CloneExtension();
                if (object.ext !== undefined && object.ext !== null) {
                    message.ext = String(object.ext);
                }
                return message;
            };

            /**
             * Creates a CloneExtension message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.CloneExtension.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.CloneExtension} CloneExtension
             */
            CloneExtension.from = CloneExtension.fromObject;

            /**
             * Creates a plain object from a CloneExtension message. Also converts values to other types if specified.
             * @param {jspb.test.CloneExtension} message CloneExtension
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloneExtension.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.ext = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "ext":
                        if (message.ext !== undefined && message.ext !== null) {
                            object.ext = message.ext;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this CloneExtension message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloneExtension.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this CloneExtension to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            CloneExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CloneExtension;
        })();

        test.TestGroup = (function() {

            /**
             * Constructs a new TestGroup.
             * @exports jspb.test.TestGroup
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestGroup(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestGroup repeatedGroup.
             * @type {Array.<jspb.test.TestGroup.RepeatedGroup>}
             */
            TestGroup.prototype.repeatedGroup = $util.emptyArray;

            /**
             * TestGroup requiredGroup.
             * @type {jspb.test.TestGroup.RequiredGroup}
             */
            TestGroup.prototype.requiredGroup = null;

            /**
             * TestGroup optionalGroup.
             * @type {jspb.test.TestGroup.OptionalGroup}
             */
            TestGroup.prototype.optionalGroup = null;

            /**
             * TestGroup id.
             * @type {string}
             */
            TestGroup.prototype.id = "";

            /**
             * TestGroup requiredSimple.
             * @type {jspb.test.Simple2}
             */
            TestGroup.prototype.requiredSimple = null;

            /**
             * TestGroup optionalSimple.
             * @type {jspb.test.Simple2}
             */
            TestGroup.prototype.optionalSimple = null;

            // Lazily resolved type references
            var $types = {
                0: "jspb.test.TestGroup.RepeatedGroup",
                1: "jspb.test.TestGroup.RequiredGroup",
                2: "jspb.test.TestGroup.OptionalGroup",
                4: "jspb.test.Simple2",
                5: "jspb.test.Simple2"
            }; $lazyTypes.push($types);

            /**
             * Creates a new TestGroup instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestGroup} TestGroup instance
             */
            TestGroup.create = function create(properties) {
                return new TestGroup(properties);
            };

            /**
             * Encodes the specified TestGroup message.
             * @param {jspb.test.TestGroup|Object} message TestGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.repeatedGroup) {
                    for (var i = 0; i < message.repeatedGroup.length; ++i) {
                        $types[0].encode(message.repeatedGroup[i], writer.uint32(11)).uint32(12);
                    }
                }
                $types[1].encode(message.requiredGroup, writer.uint32(19)).uint32(20);
                if (message.optionalGroup !== undefined && message.optionalGroup !== null) {
                    $types[2].encode(message.optionalGroup, writer.uint32(27)).uint32(28);
                }
                if (message.id !== undefined && message.id !== "") {
                    writer.uint32(34).string(message.id);
                }
                $types[4].encode(message.requiredSimple, writer.uint32(42).fork()).ldelim();
                if (message.optionalSimple !== undefined && message.optionalSimple !== null) {
                    $types[5].encode(message.optionalSimple, writer.uint32(50).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified TestGroup message, length delimited.
             * @param {jspb.test.TestGroup|Object} message TestGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestGroup message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestGroup} TestGroup
             */
            TestGroup.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestGroup();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.repeatedGroup && message.repeatedGroup.length)) {
                            message.repeatedGroup = [];
                        }
                        message.repeatedGroup.push($types[0].decode(reader));
                        break;

                    case 2:
                        message.requiredGroup = $types[1].decode(reader);
                        break;

                    case 3:
                        message.optionalGroup = $types[2].decode(reader);
                        break;

                    case 4:
                        message.id = reader.string();
                        break;

                    case 5:
                        message.requiredSimple = $types[4].decode(reader, reader.uint32());
                        break;

                    case 6:
                        message.optionalSimple = $types[5].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestGroup message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestGroup} TestGroup
             */
            TestGroup.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestGroup message.
             * @param {jspb.test.TestGroup|Object} message TestGroup message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestGroup.verify = function verify(message) {
                if (message.repeatedGroup !== undefined) {
                    if (!Array.isArray(message.repeatedGroup)) {
                        return "repeatedGroup: array expected";
                    }
                    for (var i = 0; i < message.repeatedGroup.length; ++i) {
                        var err = $types[0].verify(message.repeatedGroup[i]);
                        if (err) {
                            return "repeatedGroup." + err;
                        }
                    }
                }
                var err = $types[1].verify(message.requiredGroup);
                if (err) {
                    return "requiredGroup." + err;
                }
                if (message.optionalGroup !== undefined && message.optionalGroup !== null) {
                    var err = $types[2].verify(message.optionalGroup);
                    if (err) {
                        return "optionalGroup." + err;
                    }
                }
                if (message.id !== undefined) {
                    if (!$util.isString(message.id)) {
                        return "id: string expected";
                    }
                }
                var err = $types[4].verify(message.requiredSimple);
                if (err) {
                    return "requiredSimple." + err;
                }
                if (message.optionalSimple !== undefined && message.optionalSimple !== null) {
                    var err = $types[5].verify(message.optionalSimple);
                    if (err) {
                        return "optionalSimple." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a TestGroup message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup} TestGroup
             */
            TestGroup.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestGroup();
                if (object.repeatedGroup) {
                    message.repeatedGroup = [];
                    for (var i = 0; i < object.repeatedGroup.length; ++i) {
                        message.repeatedGroup[i] = $types[0].fromObject(object.repeatedGroup[i]);
                    }
                }
                if (object.requiredGroup !== undefined && object.requiredGroup !== null) {
                    message.requiredGroup = $types[1].fromObject(object.requiredGroup);
                }
                if (object.optionalGroup !== undefined && object.optionalGroup !== null) {
                    message.optionalGroup = $types[2].fromObject(object.optionalGroup);
                }
                if (object.id !== undefined && object.id !== null) {
                    message.id = String(object.id);
                }
                if (object.requiredSimple !== undefined && object.requiredSimple !== null) {
                    message.requiredSimple = $types[4].fromObject(object.requiredSimple);
                }
                if (object.optionalSimple !== undefined && object.optionalSimple !== null) {
                    message.optionalSimple = $types[5].fromObject(object.optionalSimple);
                }
                return message;
            };

            /**
             * Creates a TestGroup message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestGroup.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup} TestGroup
             */
            TestGroup.from = TestGroup.fromObject;

            /**
             * Creates a plain object from a TestGroup message. Also converts values to other types if specified.
             * @param {jspb.test.TestGroup} message TestGroup
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedGroup = [];
                }
                if (options.defaults) {
                    object.requiredGroup = null;
                    object.optionalGroup = null;
                    object.id = "";
                    object.requiredSimple = null;
                    object.optionalSimple = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "repeatedGroup":
                        if (message.repeatedGroup.length) {
                            object.repeatedGroup = [];
                            for (var j = 0; j < message.repeatedGroup.length; ++j) {
                                object.repeatedGroup[j] = $types[0].toObject(message.repeatedGroup[j], options);
                            }
                        }
                        break;

                    case "requiredGroup":
                        if (message.requiredGroup !== undefined && message.requiredGroup !== null) {
                            object.requiredGroup = $types[1].toObject(message.requiredGroup, options);
                        }
                        break;

                    case "optionalGroup":
                        if (message.optionalGroup !== undefined && message.optionalGroup !== null) {
                            object.optionalGroup = $types[2].toObject(message.optionalGroup, options);
                        }
                        break;

                    case "id":
                        if (message.id !== undefined && message.id !== null) {
                            object.id = message.id;
                        }
                        break;

                    case "requiredSimple":
                        if (message.requiredSimple !== undefined && message.requiredSimple !== null) {
                            object.requiredSimple = $types[4].toObject(message.requiredSimple, options);
                        }
                        break;

                    case "optionalSimple":
                        if (message.optionalSimple !== undefined && message.optionalSimple !== null) {
                            object.optionalSimple = $types[5].toObject(message.optionalSimple, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestGroup message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestGroup to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestGroup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TestGroup.RepeatedGroup = (function() {

                /**
                 * Constructs a new RepeatedGroup.
                 * @exports jspb.test.TestGroup.RepeatedGroup
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function RepeatedGroup(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * RepeatedGroup id.
                 * @type {string}
                 */
                RepeatedGroup.prototype.id = "";

                /**
                 * RepeatedGroup someBool.
                 * @type {Array.<boolean>}
                 */
                RepeatedGroup.prototype.someBool = $util.emptyArray;

                /**
                 * Creates a new RepeatedGroup instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup instance
                 */
                RepeatedGroup.create = function create(properties) {
                    return new RepeatedGroup(properties);
                };

                /**
                 * Encodes the specified RepeatedGroup message.
                 * @param {jspb.test.TestGroup.RepeatedGroup|Object} message RepeatedGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RepeatedGroup.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    writer.uint32(10).string(message.id);
                    if (message.someBool) {
                        for (var i = 0; i < message.someBool.length; ++i) {
                            writer.uint32(16).bool(message.someBool[i]);
                        }
                    }
                    return writer;
                };

                /**
                 * Encodes the specified RepeatedGroup message, length delimited.
                 * @param {jspb.test.TestGroup.RepeatedGroup|Object} message RepeatedGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RepeatedGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 */
                RepeatedGroup.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestGroup.RepeatedGroup();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if ((tag & 7) === 4) {
                            break;
                        }
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;

                        case 2:
                            if (!(message.someBool && message.someBool.length)) {
                                message.someBool = [];
                            }
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    message.someBool.push(reader.bool());
                                }
                            } else {
                                message.someBool.push(reader.bool());
                            }
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 */
                RepeatedGroup.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a RepeatedGroup message.
                 * @param {jspb.test.TestGroup.RepeatedGroup|Object} message RepeatedGroup message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RepeatedGroup.verify = function verify(message) {
                    if (!$util.isString(message.id)) {
                        return "id: string expected";
                    }
                    if (message.someBool !== undefined) {
                        if (!Array.isArray(message.someBool)) {
                            return "someBool: array expected";
                        }
                        for (var i = 0; i < message.someBool.length; ++i) {
                            if (typeof message.someBool[i] !== "boolean") {
                                return "someBool: boolean[] expected";
                            }
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RepeatedGroup message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 */
                RepeatedGroup.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.TestGroup.RepeatedGroup();
                    if (object.id !== undefined && object.id !== null) {
                        message.id = String(object.id);
                    }
                    if (object.someBool) {
                        message.someBool = [];
                        for (var i = 0; i < object.someBool.length; ++i) {
                            message.someBool[i] = Boolean(object.someBool[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a RepeatedGroup message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.TestGroup.RepeatedGroup.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 */
                RepeatedGroup.from = RepeatedGroup.fromObject;

                /**
                 * Creates a plain object from a RepeatedGroup message. Also converts values to other types if specified.
                 * @param {jspb.test.TestGroup.RepeatedGroup} message RepeatedGroup
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RepeatedGroup.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.someBool = [];
                    }
                    if (options.defaults) {
                        object.id = "";
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "id":
                            if (message.id !== undefined && message.id !== null) {
                                object.id = message.id;
                            }
                            break;

                        case "someBool":
                            if (message.someBool.length) {
                                object.someBool = [];
                                for (var j = 0; j < message.someBool.length; ++j) {
                                    object.someBool[j] = message.someBool[j];
                                }
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this RepeatedGroup message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RepeatedGroup.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this RepeatedGroup to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RepeatedGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RepeatedGroup;
            })();

            TestGroup.RequiredGroup = (function() {

                /**
                 * Constructs a new RequiredGroup.
                 * @exports jspb.test.TestGroup.RequiredGroup
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function RequiredGroup(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * RequiredGroup id.
                 * @type {string}
                 */
                RequiredGroup.prototype.id = "";

                /**
                 * Creates a new RequiredGroup instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup instance
                 */
                RequiredGroup.create = function create(properties) {
                    return new RequiredGroup(properties);
                };

                /**
                 * Encodes the specified RequiredGroup message.
                 * @param {jspb.test.TestGroup.RequiredGroup|Object} message RequiredGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequiredGroup.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    writer.uint32(10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified RequiredGroup message, length delimited.
                 * @param {jspb.test.TestGroup.RequiredGroup|Object} message RequiredGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequiredGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 */
                RequiredGroup.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestGroup.RequiredGroup();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if ((tag & 7) === 4) {
                            break;
                        }
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 */
                RequiredGroup.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a RequiredGroup message.
                 * @param {jspb.test.TestGroup.RequiredGroup|Object} message RequiredGroup message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RequiredGroup.verify = function verify(message) {
                    if (!$util.isString(message.id)) {
                        return "id: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a RequiredGroup message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 */
                RequiredGroup.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.TestGroup.RequiredGroup();
                    if (object.id !== undefined && object.id !== null) {
                        message.id = String(object.id);
                    }
                    return message;
                };

                /**
                 * Creates a RequiredGroup message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.TestGroup.RequiredGroup.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 */
                RequiredGroup.from = RequiredGroup.fromObject;

                /**
                 * Creates a plain object from a RequiredGroup message. Also converts values to other types if specified.
                 * @param {jspb.test.TestGroup.RequiredGroup} message RequiredGroup
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequiredGroup.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "id":
                            if (message.id !== undefined && message.id !== null) {
                                object.id = message.id;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this RequiredGroup message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequiredGroup.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this RequiredGroup to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RequiredGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RequiredGroup;
            })();

            TestGroup.OptionalGroup = (function() {

                /**
                 * Constructs a new OptionalGroup.
                 * @exports jspb.test.TestGroup.OptionalGroup
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function OptionalGroup(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * OptionalGroup id.
                 * @type {string}
                 */
                OptionalGroup.prototype.id = "";

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup instance
                 */
                OptionalGroup.create = function create(properties) {
                    return new OptionalGroup(properties);
                };

                /**
                 * Encodes the specified OptionalGroup message.
                 * @param {jspb.test.TestGroup.OptionalGroup|Object} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    writer.uint32(10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified OptionalGroup message, length delimited.
                 * @param {jspb.test.TestGroup.OptionalGroup|Object} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestGroup.OptionalGroup();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if ((tag & 7) === 4) {
                            break;
                        }
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies an OptionalGroup message.
                 * @param {jspb.test.TestGroup.OptionalGroup|Object} message OptionalGroup message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                OptionalGroup.verify = function verify(message) {
                    if (!$util.isString(message.id)) {
                        return "id: string expected";
                    }
                    return null;
                };

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.fromObject = function fromObject(object) {
                    var message = new $root.jspb.test.TestGroup.OptionalGroup();
                    if (object.id !== undefined && object.id !== null) {
                        message.id = String(object.id);
                    }
                    return message;
                };

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.TestGroup.OptionalGroup.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.from = OptionalGroup.fromObject;

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @param {jspb.test.TestGroup.OptionalGroup} message OptionalGroup
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OptionalGroup.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "id":
                            if (message.id !== undefined && message.id !== null) {
                                object.id = message.id;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this OptionalGroup message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OptionalGroup.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                OptionalGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return OptionalGroup;
            })();

            return TestGroup;
        })();

        test.TestGroup1 = (function() {

            /**
             * Constructs a new TestGroup1.
             * @exports jspb.test.TestGroup1
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestGroup1(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestGroup1 group.
             * @type {jspb.test.TestGroup.RepeatedGroup}
             */
            TestGroup1.prototype.group = null;

            // Lazily resolved type references
            var $types = {
                0: "jspb.test.TestGroup.RepeatedGroup"
            }; $lazyTypes.push($types);

            /**
             * Creates a new TestGroup1 instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestGroup1} TestGroup1 instance
             */
            TestGroup1.create = function create(properties) {
                return new TestGroup1(properties);
            };

            /**
             * Encodes the specified TestGroup1 message.
             * @param {jspb.test.TestGroup1|Object} message TestGroup1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup1.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.group !== undefined && message.group !== null) {
                    $types[0].encode(message.group, writer.uint32(11)).uint32(12);
                }
                return writer;
            };

            /**
             * Encodes the specified TestGroup1 message, length delimited.
             * @param {jspb.test.TestGroup1|Object} message TestGroup1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup1.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestGroup1 message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestGroup1} TestGroup1
             */
            TestGroup1.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestGroup1();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.group = $types[0].decode(reader);
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestGroup1 message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestGroup1} TestGroup1
             */
            TestGroup1.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestGroup1 message.
             * @param {jspb.test.TestGroup1|Object} message TestGroup1 message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestGroup1.verify = function verify(message) {
                if (message.group !== undefined && message.group !== null) {
                    var err = $types[0].verify(message.group);
                    if (err) {
                        return "group." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a TestGroup1 message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup1} TestGroup1
             */
            TestGroup1.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestGroup1();
                if (object.group !== undefined && object.group !== null) {
                    message.group = $types[0].fromObject(object.group);
                }
                return message;
            };

            /**
             * Creates a TestGroup1 message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestGroup1.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup1} TestGroup1
             */
            TestGroup1.from = TestGroup1.fromObject;

            /**
             * Creates a plain object from a TestGroup1 message. Also converts values to other types if specified.
             * @param {jspb.test.TestGroup1} message TestGroup1
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup1.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.group = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "group":
                        if (message.group !== undefined && message.group !== null) {
                            object.group = $types[0].toObject(message.group, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestGroup1 message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup1.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestGroup1 to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestGroup1.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestGroup1;
        })();

        test.TestReservedNames = (function() {

            /**
             * Constructs a new TestReservedNames.
             * @exports jspb.test.TestReservedNames
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestReservedNames(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestReservedNames extension.
             * @type {number}
             */
            TestReservedNames.prototype.extension = 0;

            /**
             * TestReservedNames .jspb.test.TestReservedNamesExtension.foo.
             * @name jspb.test.TestReservedNames#.jspb.test.TestReservedNamesExtension.foo
             * @type {number}
             */
            TestReservedNames.prototype[".jspb.test.TestReservedNamesExtension.foo"] = 0;

            /**
             * Creates a new TestReservedNames instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestReservedNames} TestReservedNames instance
             */
            TestReservedNames.create = function create(properties) {
                return new TestReservedNames(properties);
            };

            /**
             * Encodes the specified TestReservedNames message.
             * @param {jspb.test.TestReservedNames|Object} message TestReservedNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNames.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.extension !== undefined && message.extension !== 0) {
                    writer.uint32(8).int32(message.extension);
                }
                if (message[".jspb.test.TestReservedNamesExtension.foo"] !== undefined && message[".jspb.test.TestReservedNamesExtension.foo"] !== 0) {
                    writer.uint32(80).int32(message[".jspb.test.TestReservedNamesExtension.foo"]);
                }
                return writer;
            };

            /**
             * Encodes the specified TestReservedNames message, length delimited.
             * @param {jspb.test.TestReservedNames|Object} message TestReservedNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNames.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestReservedNames message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             */
            TestReservedNames.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestReservedNames();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.extension = reader.int32();
                        break;

                    case 10:
                        message[".jspb.test.TestReservedNamesExtension.foo"] = reader.int32();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestReservedNames message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             */
            TestReservedNames.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestReservedNames message.
             * @param {jspb.test.TestReservedNames|Object} message TestReservedNames message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestReservedNames.verify = function verify(message) {
                if (message.extension !== undefined) {
                    if (!$util.isInteger(message.extension)) {
                        return "extension: integer expected";
                    }
                }
                if (message[".jspb.test.TestReservedNamesExtension.foo"] !== undefined) {
                    if (!$util.isInteger(message[".jspb.test.TestReservedNamesExtension.foo"])) {
                        return ".jspb.test.TestReservedNamesExtension.foo: integer expected";
                    }
                }
                return null;
            };

            /**
             * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             */
            TestReservedNames.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestReservedNames();
                if (object.extension !== undefined && object.extension !== null) {
                    message.extension = object.extension | 0;
                }
                if (object[".jspb.test.TestReservedNamesExtension.foo"] !== undefined && object[".jspb.test.TestReservedNamesExtension.foo"] !== null) {
                    message[".jspb.test.TestReservedNamesExtension.foo"] = object[".jspb.test.TestReservedNamesExtension.foo"] | 0;
                }
                return message;
            };

            /**
             * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestReservedNames.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             */
            TestReservedNames.from = TestReservedNames.fromObject;

            /**
             * Creates a plain object from a TestReservedNames message. Also converts values to other types if specified.
             * @param {jspb.test.TestReservedNames} message TestReservedNames
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNames.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.extension = 0;
                    object[".jspb.test.TestReservedNamesExtension.foo"] = 0;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "extension":
                        if (message.extension !== undefined && message.extension !== null) {
                            object.extension = message.extension;
                        }
                        break;

                    case ".jspb.test.TestReservedNamesExtension.foo":
                        if (message[".jspb.test.TestReservedNamesExtension.foo"] !== undefined && message[".jspb.test.TestReservedNamesExtension.foo"] !== null) {
                            object[".jspb.test.TestReservedNamesExtension.foo"] = message[".jspb.test.TestReservedNamesExtension.foo"];
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestReservedNames message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNames.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestReservedNames to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestReservedNames.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestReservedNames;
        })();

        test.TestReservedNamesExtension = (function() {

            /**
             * Constructs a new TestReservedNamesExtension.
             * @exports jspb.test.TestReservedNamesExtension
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestReservedNamesExtension(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Creates a new TestReservedNamesExtension instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension instance
             */
            TestReservedNamesExtension.create = function create(properties) {
                return new TestReservedNamesExtension(properties);
            };

            /**
             * Encodes the specified TestReservedNamesExtension message.
             * @param {jspb.test.TestReservedNamesExtension|Object} message TestReservedNamesExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNamesExtension.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                return writer;
            };

            /**
             * Encodes the specified TestReservedNamesExtension message, length delimited.
             * @param {jspb.test.TestReservedNamesExtension|Object} message TestReservedNamesExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNamesExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             */
            TestReservedNamesExtension.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestReservedNamesExtension();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             */
            TestReservedNamesExtension.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestReservedNamesExtension message.
             * @param {jspb.test.TestReservedNamesExtension|Object} message TestReservedNamesExtension message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestReservedNamesExtension.verify = function verify() {
                return null;
            };

            /**
             * Creates a TestReservedNamesExtension message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             */
            TestReservedNamesExtension.fromObject = function fromObject() {
                return new $root.jspb.test.TestReservedNamesExtension();
            };

            /**
             * Creates a TestReservedNamesExtension message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestReservedNamesExtension.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             */
            TestReservedNamesExtension.from = TestReservedNamesExtension.fromObject;

            /**
             * Creates a plain object from a TestReservedNamesExtension message. Also converts values to other types if specified.
             * @param {jspb.test.TestReservedNamesExtension} message TestReservedNamesExtension
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNamesExtension.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this TestReservedNamesExtension message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNamesExtension.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestReservedNamesExtension to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestReservedNamesExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestReservedNamesExtension;
        })();

        test.TestMessageWithOneof = (function() {

            /**
             * Constructs a new TestMessageWithOneof.
             * @exports jspb.test.TestMessageWithOneof
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestMessageWithOneof(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestMessageWithOneof pone.
             * @type {string}
             */
            TestMessageWithOneof.prototype.pone = "";

            /**
             * TestMessageWithOneof pthree.
             * @type {string}
             */
            TestMessageWithOneof.prototype.pthree = "";

            /**
             * TestMessageWithOneof rone.
             * @type {jspb.test.TestMessageWithOneof}
             */
            TestMessageWithOneof.prototype.rone = null;

            /**
             * TestMessageWithOneof rtwo.
             * @type {string}
             */
            TestMessageWithOneof.prototype.rtwo = "";

            /**
             * TestMessageWithOneof normalField.
             * @type {boolean}
             */
            TestMessageWithOneof.prototype.normalField = false;

            /**
             * TestMessageWithOneof repeatedField.
             * @type {Array.<string>}
             */
            TestMessageWithOneof.prototype.repeatedField = $util.emptyArray;

            /**
             * TestMessageWithOneof aone.
             * @type {number}
             */
            TestMessageWithOneof.prototype.aone = 1234;

            /**
             * TestMessageWithOneof atwo.
             * @type {number}
             */
            TestMessageWithOneof.prototype.atwo = 0;

            /**
             * TestMessageWithOneof bone.
             * @type {number}
             */
            TestMessageWithOneof.prototype.bone = 0;

            /**
             * TestMessageWithOneof btwo.
             * @type {number}
             */
            TestMessageWithOneof.prototype.btwo = 1234;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TestMessageWithOneof partialOneof.
             * @name jspb.test.TestMessageWithOneof#partialOneof
             * @type {string|undefined}
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "partialOneof", {
                get: $util.oneOfGetter($oneOfFields = ["pone", "pthree"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof recursiveOneof.
             * @name jspb.test.TestMessageWithOneof#recursiveOneof
             * @type {string|undefined}
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "recursiveOneof", {
                get: $util.oneOfGetter($oneOfFields = ["rone", "rtwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof defaultOneofA.
             * @name jspb.test.TestMessageWithOneof#defaultOneofA
             * @type {string|undefined}
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "defaultOneofA", {
                get: $util.oneOfGetter($oneOfFields = ["aone", "atwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof defaultOneofB.
             * @name jspb.test.TestMessageWithOneof#defaultOneofB
             * @type {string|undefined}
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "defaultOneofB", {
                get: $util.oneOfGetter($oneOfFields = ["bone", "btwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Lazily resolved type references
            var $types = {
                2: "jspb.test.TestMessageWithOneof"
            }; $lazyTypes.push($types);

            /**
             * Creates a new TestMessageWithOneof instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof instance
             */
            TestMessageWithOneof.create = function create(properties) {
                return new TestMessageWithOneof(properties);
            };

            /**
             * Encodes the specified TestMessageWithOneof message.
             * @param {jspb.test.TestMessageWithOneof|Object} message TestMessageWithOneof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessageWithOneof.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.normalField !== undefined && message.normalField !== false) {
                    writer.uint32(64).bool(message.normalField);
                }
                if (message.repeatedField) {
                    for (var i = 0; i < message.repeatedField.length; ++i) {
                        writer.uint32(74).string(message.repeatedField[i]);
                    }
                }
                switch (message.partialOneof) {
                case "pone":
                    writer.uint32(26).string(message.pone);
                    break;

                case "pthree":
                    writer.uint32(42).string(message.pthree);
                    break;
                }
                switch (message.recursiveOneof) {
                case "rone":
                    $types[2].encode(message.rone, writer.uint32(50).fork()).ldelim();
                    break;

                case "rtwo":
                    writer.uint32(58).string(message.rtwo);
                    break;
                }
                switch (message.defaultOneofA) {
                case "aone":
                    writer.uint32(80).int32(message.aone);
                    break;

                case "atwo":
                    writer.uint32(88).int32(message.atwo);
                    break;
                }
                switch (message.defaultOneofB) {
                case "bone":
                    writer.uint32(96).int32(message.bone);
                    break;

                case "btwo":
                    writer.uint32(104).int32(message.btwo);
                    break;
                }
                return writer;
            };

            /**
             * Encodes the specified TestMessageWithOneof message, length delimited.
             * @param {jspb.test.TestMessageWithOneof|Object} message TestMessageWithOneof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessageWithOneof.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMessageWithOneof message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             */
            TestMessageWithOneof.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestMessageWithOneof();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3:
                        message.pone = reader.string();
                        break;

                    case 5:
                        message.pthree = reader.string();
                        break;

                    case 6:
                        message.rone = $types[2].decode(reader, reader.uint32());
                        break;

                    case 7:
                        message.rtwo = reader.string();
                        break;

                    case 8:
                        message.normalField = reader.bool();
                        break;

                    case 9:
                        if (!(message.repeatedField && message.repeatedField.length)) {
                            message.repeatedField = [];
                        }
                        message.repeatedField.push(reader.string());
                        break;

                    case 10:
                        message.aone = reader.int32();
                        break;

                    case 11:
                        message.atwo = reader.int32();
                        break;

                    case 12:
                        message.bone = reader.int32();
                        break;

                    case 13:
                        message.btwo = reader.int32();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestMessageWithOneof message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             */
            TestMessageWithOneof.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestMessageWithOneof message.
             * @param {jspb.test.TestMessageWithOneof|Object} message TestMessageWithOneof message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestMessageWithOneof.verify = function verify(message) {
                if (message.pone !== undefined) {
                    if (!$util.isString(message.pone)) {
                        return "pone: string expected";
                    }
                }
                if (message.pthree !== undefined) {
                    if (!$util.isString(message.pthree)) {
                        return "pthree: string expected";
                    }
                }
                if (message.rone !== undefined && message.rone !== null) {
                    var err = $types[2].verify(message.rone);
                    if (err) {
                        return "rone." + err;
                    }
                }
                if (message.rtwo !== undefined) {
                    if (!$util.isString(message.rtwo)) {
                        return "rtwo: string expected";
                    }
                }
                if (message.normalField !== undefined) {
                    if (typeof message.normalField !== "boolean") {
                        return "normalField: boolean expected";
                    }
                }
                if (message.repeatedField !== undefined) {
                    if (!Array.isArray(message.repeatedField)) {
                        return "repeatedField: array expected";
                    }
                    for (var i = 0; i < message.repeatedField.length; ++i) {
                        if (!$util.isString(message.repeatedField[i])) {
                            return "repeatedField: string[] expected";
                        }
                    }
                }
                if (message.aone !== undefined) {
                    if (!$util.isInteger(message.aone)) {
                        return "aone: integer expected";
                    }
                }
                if (message.atwo !== undefined) {
                    if (!$util.isInteger(message.atwo)) {
                        return "atwo: integer expected";
                    }
                }
                if (message.bone !== undefined) {
                    if (!$util.isInteger(message.bone)) {
                        return "bone: integer expected";
                    }
                }
                if (message.btwo !== undefined) {
                    if (!$util.isInteger(message.btwo)) {
                        return "btwo: integer expected";
                    }
                }
                return null;
            };

            /**
             * Creates a TestMessageWithOneof message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             */
            TestMessageWithOneof.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestMessageWithOneof();
                if (object.pone !== undefined && object.pone !== null) {
                    message.pone = String(object.pone);
                }
                if (object.pthree !== undefined && object.pthree !== null) {
                    message.pthree = String(object.pthree);
                }
                if (object.rone !== undefined && object.rone !== null) {
                    message.rone = $types[2].fromObject(object.rone);
                }
                if (object.rtwo !== undefined && object.rtwo !== null) {
                    message.rtwo = String(object.rtwo);
                }
                if (object.normalField !== undefined && object.normalField !== null) {
                    message.normalField = Boolean(object.normalField);
                }
                if (object.repeatedField) {
                    message.repeatedField = [];
                    for (var i = 0; i < object.repeatedField.length; ++i) {
                        message.repeatedField[i] = String(object.repeatedField[i]);
                    }
                }
                if (object.aone !== undefined && object.aone !== null) {
                    message.aone = object.aone | 0;
                }
                if (object.atwo !== undefined && object.atwo !== null) {
                    message.atwo = object.atwo | 0;
                }
                if (object.bone !== undefined && object.bone !== null) {
                    message.bone = object.bone | 0;
                }
                if (object.btwo !== undefined && object.btwo !== null) {
                    message.btwo = object.btwo | 0;
                }
                return message;
            };

            /**
             * Creates a TestMessageWithOneof message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestMessageWithOneof.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             */
            TestMessageWithOneof.from = TestMessageWithOneof.fromObject;

            /**
             * Creates a plain object from a TestMessageWithOneof message. Also converts values to other types if specified.
             * @param {jspb.test.TestMessageWithOneof} message TestMessageWithOneof
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessageWithOneof.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedField = [];
                }
                if (options.defaults) {
                    object.pone = "";
                    object.pthree = "";
                    object.rone = null;
                    object.rtwo = "";
                    object.normalField = false;
                    object.aone = 1234;
                    object.atwo = 0;
                    object.bone = 0;
                    object.btwo = 1234;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "pone":
                        if (message.pone !== undefined && message.pone !== null) {
                            object.pone = message.pone;
                        }
                        break;

                    case "pthree":
                        if (message.pthree !== undefined && message.pthree !== null) {
                            object.pthree = message.pthree;
                        }
                        break;

                    case "rone":
                        if (message.rone !== undefined && message.rone !== null) {
                            object.rone = $types[2].toObject(message.rone, options);
                        }
                        break;

                    case "rtwo":
                        if (message.rtwo !== undefined && message.rtwo !== null) {
                            object.rtwo = message.rtwo;
                        }
                        break;

                    case "normalField":
                        if (message.normalField !== undefined && message.normalField !== null) {
                            object.normalField = message.normalField;
                        }
                        break;

                    case "repeatedField":
                        if (message.repeatedField.length) {
                            object.repeatedField = [];
                            for (var j = 0; j < message.repeatedField.length; ++j) {
                                object.repeatedField[j] = message.repeatedField[j];
                            }
                        }
                        break;

                    case "aone":
                        if (message.aone !== undefined && message.aone !== null) {
                            object.aone = message.aone;
                        }
                        break;

                    case "atwo":
                        if (message.atwo !== undefined && message.atwo !== null) {
                            object.atwo = message.atwo;
                        }
                        break;

                    case "bone":
                        if (message.bone !== undefined && message.bone !== null) {
                            object.bone = message.bone;
                        }
                        break;

                    case "btwo":
                        if (message.btwo !== undefined && message.btwo !== null) {
                            object.btwo = message.btwo;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestMessageWithOneof message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessageWithOneof.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestMessageWithOneof to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestMessageWithOneof.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestMessageWithOneof;
        })();

        test.TestEndsWithBytes = (function() {

            /**
             * Constructs a new TestEndsWithBytes.
             * @exports jspb.test.TestEndsWithBytes
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestEndsWithBytes(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestEndsWithBytes value.
             * @type {number}
             */
            TestEndsWithBytes.prototype.value = 0;

            /**
             * TestEndsWithBytes data.
             * @type {Uint8Array}
             */
            TestEndsWithBytes.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new TestEndsWithBytes instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes instance
             */
            TestEndsWithBytes.create = function create(properties) {
                return new TestEndsWithBytes(properties);
            };

            /**
             * Encodes the specified TestEndsWithBytes message.
             * @param {jspb.test.TestEndsWithBytes|Object} message TestEndsWithBytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestEndsWithBytes.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.value !== undefined && message.value !== 0) {
                    writer.uint32(8).int32(message.value);
                }
                if (message.data && message.data.length) {
                    writer.uint32(18).bytes(message.data);
                }
                return writer;
            };

            /**
             * Encodes the specified TestEndsWithBytes message, length delimited.
             * @param {jspb.test.TestEndsWithBytes|Object} message TestEndsWithBytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestEndsWithBytes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestEndsWithBytes message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             */
            TestEndsWithBytes.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestEndsWithBytes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;

                    case 2:
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
             * Decodes a TestEndsWithBytes message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             */
            TestEndsWithBytes.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestEndsWithBytes message.
             * @param {jspb.test.TestEndsWithBytes|Object} message TestEndsWithBytes message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestEndsWithBytes.verify = function verify(message) {
                if (message.value !== undefined) {
                    if (!$util.isInteger(message.value)) {
                        return "value: integer expected";
                    }
                }
                if (message.data !== undefined) {
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data))) {
                        return "data: buffer expected";
                    }
                }
                return null;
            };

            /**
             * Creates a TestEndsWithBytes message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             */
            TestEndsWithBytes.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestEndsWithBytes();
                if (object.value !== undefined && object.value !== null) {
                    message.value = object.value | 0;
                }
                if (object.data !== undefined && object.data !== null) {
                    if (typeof object.data === "string") {
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    } else {
                        if (object.data && object.data.length) {
                            message.data = object.data;
                        }
                    }
                }
                return message;
            };

            /**
             * Creates a TestEndsWithBytes message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestEndsWithBytes.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             */
            TestEndsWithBytes.from = TestEndsWithBytes.fromObject;

            /**
             * Creates a plain object from a TestEndsWithBytes message. Also converts values to other types if specified.
             * @param {jspb.test.TestEndsWithBytes} message TestEndsWithBytes
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestEndsWithBytes.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.value = 0;
                    object.data = options.bytes === String ? "" : [];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "value":
                        if (message.value !== undefined && message.value !== null) {
                            object.value = message.value;
                        }
                        break;

                    case "data":
                        if (message.data !== undefined && message.data !== null) {
                            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestEndsWithBytes message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestEndsWithBytes.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestEndsWithBytes to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestEndsWithBytes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestEndsWithBytes;
        })();

        test.TestMapFieldsNoBinary = (function() {

            /**
             * Constructs a new TestMapFieldsNoBinary.
             * @exports jspb.test.TestMapFieldsNoBinary
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function TestMapFieldsNoBinary(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * TestMapFieldsNoBinary mapStringString.
             * @type {Object.<string,string>}
             */
            TestMapFieldsNoBinary.prototype.mapStringString = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringInt32.
             * @type {Object.<string,number>}
             */
            TestMapFieldsNoBinary.prototype.mapStringInt32 = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringInt64.
             * @type {Object.<string,number|$protobuf.Long>}
             */
            TestMapFieldsNoBinary.prototype.mapStringInt64 = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringBool.
             * @type {Object.<string,boolean>}
             */
            TestMapFieldsNoBinary.prototype.mapStringBool = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringDouble.
             * @type {Object.<string,number>}
             */
            TestMapFieldsNoBinary.prototype.mapStringDouble = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringEnum.
             * @type {Object.<string,number>}
             */
            TestMapFieldsNoBinary.prototype.mapStringEnum = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringMsg.
             * @type {Object.<string,jspb.test.MapValueMessageNoBinary>}
             */
            TestMapFieldsNoBinary.prototype.mapStringMsg = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapInt32String.
             * @type {Object.<string,string>}
             */
            TestMapFieldsNoBinary.prototype.mapInt32String = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapInt64String.
             * @type {Object.<string,string>}
             */
            TestMapFieldsNoBinary.prototype.mapInt64String = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapBoolString.
             * @type {Object.<string,string>}
             */
            TestMapFieldsNoBinary.prototype.mapBoolString = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary testMapFields.
             * @type {jspb.test.TestMapFieldsNoBinary}
             */
            TestMapFieldsNoBinary.prototype.testMapFields = null;

            /**
             * TestMapFieldsNoBinary mapStringTestmapfields.
             * @type {Object.<string,jspb.test.TestMapFieldsNoBinary>}
             */
            TestMapFieldsNoBinary.prototype.mapStringTestmapfields = $util.emptyObject;

            // Lazily resolved type references
            var $types = {
                5: "jspb.test.MapValueEnumNoBinary",
                6: "jspb.test.MapValueMessageNoBinary",
                10: "jspb.test.TestMapFieldsNoBinary",
                11: "jspb.test.TestMapFieldsNoBinary"
            }; $lazyTypes.push($types);

            /**
             * Creates a new TestMapFieldsNoBinary instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary instance
             */
            TestMapFieldsNoBinary.create = function create(properties) {
                return new TestMapFieldsNoBinary(properties);
            };

            /**
             * Encodes the specified TestMapFieldsNoBinary message.
             * @param {jspb.test.TestMapFieldsNoBinary|Object} message TestMapFieldsNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMapFieldsNoBinary.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.mapStringString && message.mapStringString !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringString), i = 0; i < keys.length; ++i) {
                        writer.uint32(10).fork().uint32(10).string(keys[i]).uint32(18).string(message.mapStringString[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringInt32 && message.mapStringInt32 !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringInt32), i = 0; i < keys.length; ++i) {
                        writer.uint32(18).fork().uint32(10).string(keys[i]).uint32(16).int32(message.mapStringInt32[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringInt64 && message.mapStringInt64 !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringInt64), i = 0; i < keys.length; ++i) {
                        writer.uint32(26).fork().uint32(10).string(keys[i]).uint32(16).int64(message.mapStringInt64[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringBool && message.mapStringBool !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringBool), i = 0; i < keys.length; ++i) {
                        writer.uint32(34).fork().uint32(10).string(keys[i]).uint32(16).bool(message.mapStringBool[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringDouble && message.mapStringDouble !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringDouble), i = 0; i < keys.length; ++i) {
                        writer.uint32(42).fork().uint32(10).string(keys[i]).uint32(17).double(message.mapStringDouble[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringEnum && message.mapStringEnum !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringEnum), i = 0; i < keys.length; ++i) {
                        writer.uint32(50).fork().uint32(10).string(keys[i]).uint32(16).uint32(message.mapStringEnum[keys[i]]).ldelim();
                    }
                }
                if (message.mapStringMsg && message.mapStringMsg !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringMsg), i = 0; i < keys.length; ++i) {
                        writer.uint32(58).fork().uint32(10).string(keys[i]);
                        $types[6].encode(message.mapStringMsg[keys[i]], writer.uint32(18).fork()).ldelim().ldelim();
                    }
                }
                if (message.mapInt32String && message.mapInt32String !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapInt32String), i = 0; i < keys.length; ++i) {
                        writer.uint32(66).fork().uint32(8).int32(keys[i]).uint32(18).string(message.mapInt32String[keys[i]]).ldelim();
                    }
                }
                if (message.mapInt64String && message.mapInt64String !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapInt64String), i = 0; i < keys.length; ++i) {
                        writer.uint32(74).fork().uint32(8).int64(keys[i]).uint32(18).string(message.mapInt64String[keys[i]]).ldelim();
                    }
                }
                if (message.mapBoolString && message.mapBoolString !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapBoolString), i = 0; i < keys.length; ++i) {
                        writer.uint32(82).fork().uint32(8).bool(keys[i]).uint32(18).string(message.mapBoolString[keys[i]]).ldelim();
                    }
                }
                if (message.testMapFields !== undefined && message.testMapFields !== null) {
                    $types[10].encode(message.testMapFields, writer.uint32(90).fork()).ldelim();
                }
                if (message.mapStringTestmapfields && message.mapStringTestmapfields !== $util.emptyObject) {
                    for (var keys = Object.keys(message.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                        writer.uint32(98).fork().uint32(10).string(keys[i]);
                        $types[11].encode(message.mapStringTestmapfields[keys[i]], writer.uint32(18).fork()).ldelim().ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified TestMapFieldsNoBinary message, length delimited.
             * @param {jspb.test.TestMapFieldsNoBinary|Object} message TestMapFieldsNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMapFieldsNoBinary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             */
            TestMapFieldsNoBinary.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.TestMapFieldsNoBinary();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.mapStringString === $util.emptyObject) {
                            message.mapStringString = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringString[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;

                    case 2:
                        reader.skip().pos++;
                        if (message.mapStringInt32 === $util.emptyObject) {
                            message.mapStringInt32 = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringInt32[typeof key === "object" ? $util.longToHash(key) : key] = reader.int32();
                        break;

                    case 3:
                        reader.skip().pos++;
                        if (message.mapStringInt64 === $util.emptyObject) {
                            message.mapStringInt64 = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringInt64[typeof key === "object" ? $util.longToHash(key) : key] = reader.int64();
                        break;

                    case 4:
                        reader.skip().pos++;
                        if (message.mapStringBool === $util.emptyObject) {
                            message.mapStringBool = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringBool[typeof key === "object" ? $util.longToHash(key) : key] = reader.bool();
                        break;

                    case 5:
                        reader.skip().pos++;
                        if (message.mapStringDouble === $util.emptyObject) {
                            message.mapStringDouble = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringDouble[typeof key === "object" ? $util.longToHash(key) : key] = reader.double();
                        break;

                    case 6:
                        reader.skip().pos++;
                        if (message.mapStringEnum === $util.emptyObject) {
                            message.mapStringEnum = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringEnum[typeof key === "object" ? $util.longToHash(key) : key] = reader.uint32();
                        break;

                    case 7:
                        reader.skip().pos++;
                        if (message.mapStringMsg === $util.emptyObject) {
                            message.mapStringMsg = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringMsg[typeof key === "object" ? $util.longToHash(key) : key] = $types[6].decode(reader, reader.uint32());
                        break;

                    case 8:
                        reader.skip().pos++;
                        if (message.mapInt32String === $util.emptyObject) {
                            message.mapInt32String = {};
                        }
                        var key = reader.int32();
                        reader.pos++;
                        message.mapInt32String[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;

                    case 9:
                        reader.skip().pos++;
                        if (message.mapInt64String === $util.emptyObject) {
                            message.mapInt64String = {};
                        }
                        var key = reader.int64();
                        reader.pos++;
                        message.mapInt64String[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;

                    case 10:
                        reader.skip().pos++;
                        if (message.mapBoolString === $util.emptyObject) {
                            message.mapBoolString = {};
                        }
                        var key = reader.bool();
                        reader.pos++;
                        message.mapBoolString[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;

                    case 11:
                        message.testMapFields = $types[10].decode(reader, reader.uint32());
                        break;

                    case 12:
                        reader.skip().pos++;
                        if (message.mapStringTestmapfields === $util.emptyObject) {
                            message.mapStringTestmapfields = {};
                        }
                        var key = reader.string();
                        reader.pos++;
                        message.mapStringTestmapfields[typeof key === "object" ? $util.longToHash(key) : key] = $types[11].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             */
            TestMapFieldsNoBinary.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a TestMapFieldsNoBinary message.
             * @param {jspb.test.TestMapFieldsNoBinary|Object} message TestMapFieldsNoBinary message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TestMapFieldsNoBinary.verify = function verify(message) {
                if (message.mapStringString !== undefined) {
                    if (!$util.isObject(message.mapStringString)) {
                        return "mapStringString: object expected";
                    }
                    var key = Object.keys(message.mapStringString);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.isString(message.mapStringString[key[i]])) {
                            return "mapStringString: string{key:string} expected";
                        }
                    }
                }
                if (message.mapStringInt32 !== undefined) {
                    if (!$util.isObject(message.mapStringInt32)) {
                        return "mapStringInt32: object expected";
                    }
                    var key = Object.keys(message.mapStringInt32);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.isInteger(message.mapStringInt32[key[i]])) {
                            return "mapStringInt32: integer{key:string} expected";
                        }
                    }
                }
                if (message.mapStringInt64 !== undefined) {
                    if (!$util.isObject(message.mapStringInt64)) {
                        return "mapStringInt64: object expected";
                    }
                    var key = Object.keys(message.mapStringInt64);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.isInteger(message.mapStringInt64[key[i]]) && !(message.mapStringInt64[key[i]] && $util.isInteger(message.mapStringInt64[key[i]].low) && $util.isInteger(message.mapStringInt64[key[i]].high))) {
                            return "mapStringInt64: integer|Long{key:string} expected";
                        }
                    }
                }
                if (message.mapStringBool !== undefined) {
                    if (!$util.isObject(message.mapStringBool)) {
                        return "mapStringBool: object expected";
                    }
                    var key = Object.keys(message.mapStringBool);
                    for (var i = 0; i < key.length; ++i) {
                        if (typeof message.mapStringBool[key[i]] !== "boolean") {
                            return "mapStringBool: boolean{key:string} expected";
                        }
                    }
                }
                if (message.mapStringDouble !== undefined) {
                    if (!$util.isObject(message.mapStringDouble)) {
                        return "mapStringDouble: object expected";
                    }
                    var key = Object.keys(message.mapStringDouble);
                    for (var i = 0; i < key.length; ++i) {
                        if (typeof message.mapStringDouble[key[i]] !== "number") {
                            return "mapStringDouble: number{key:string} expected";
                        }
                    }
                }
                if (message.mapStringEnum !== undefined) {
                    if (!$util.isObject(message.mapStringEnum)) {
                        return "mapStringEnum: object expected";
                    }
                    var key = Object.keys(message.mapStringEnum);
                    for (var i = 0; i < key.length; ++i) {
                        switch (message.mapStringEnum[key[i]]) {
                        default:
                            return "mapStringEnum: enum value{key:string} expected";

                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    }
                }
                if (message.mapStringMsg !== undefined) {
                    if (!$util.isObject(message.mapStringMsg)) {
                        return "mapStringMsg: object expected";
                    }
                    var key = Object.keys(message.mapStringMsg);
                    for (var i = 0; i < key.length; ++i) {
                        var err = $types[6].verify(message.mapStringMsg[key[i]]);
                        if (err) {
                            return "mapStringMsg." + err;
                        }
                    }
                }
                if (message.mapInt32String !== undefined) {
                    if (!$util.isObject(message.mapInt32String)) {
                        return "mapInt32String: object expected";
                    }
                    var key = Object.keys(message.mapInt32String);
                    for (var i = 0; i < key.length; ++i) {
                        if (!/^-?(?:0|[1-9][0-9]*)$/.test(key[i])) {
                            return "mapInt32String: integer key{key:int32} expected";
                        }
                        if (!$util.isString(message.mapInt32String[key[i]])) {
                            return "mapInt32String: string{key:int32} expected";
                        }
                    }
                }
                if (message.mapInt64String !== undefined) {
                    if (!$util.isObject(message.mapInt64String)) {
                        return "mapInt64String: object expected";
                    }
                    var key = Object.keys(message.mapInt64String);
                    for (var i = 0; i < key.length; ++i) {
                        if (!/^(?:[\x00-\xff]{8}|-?(?:0|[1-9][0-9]*))$/.test(key[i])) {
                            return "mapInt64String: integer|Long key{key:int64} expected";
                        }
                        if (!$util.isString(message.mapInt64String[key[i]])) {
                            return "mapInt64String: string{key:int64} expected";
                        }
                    }
                }
                if (message.mapBoolString !== undefined) {
                    if (!$util.isObject(message.mapBoolString)) {
                        return "mapBoolString: object expected";
                    }
                    var key = Object.keys(message.mapBoolString);
                    for (var i = 0; i < key.length; ++i) {
                        if (!/^true|false|0|1$/.test(key[i])) {
                            return "mapBoolString: boolean key{key:bool} expected";
                        }
                        if (!$util.isString(message.mapBoolString[key[i]])) {
                            return "mapBoolString: string{key:bool} expected";
                        }
                    }
                }
                if (message.testMapFields !== undefined && message.testMapFields !== null) {
                    var err = $types[10].verify(message.testMapFields);
                    if (err) {
                        return "testMapFields." + err;
                    }
                }
                if (message.mapStringTestmapfields !== undefined) {
                    if (!$util.isObject(message.mapStringTestmapfields)) {
                        return "mapStringTestmapfields: object expected";
                    }
                    var key = Object.keys(message.mapStringTestmapfields);
                    for (var i = 0; i < key.length; ++i) {
                        var err = $types[11].verify(message.mapStringTestmapfields[key[i]]);
                        if (err) {
                            return "mapStringTestmapfields." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a TestMapFieldsNoBinary message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             */
            TestMapFieldsNoBinary.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.TestMapFieldsNoBinary();
                if (object.mapStringString) {
                    message.mapStringString = {};
                    for (var keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i) {
                        message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
                    }
                }
                if (object.mapStringInt32) {
                    message.mapStringInt32 = {};
                    for (var keys = Object.keys(object.mapStringInt32), i = 0; i < keys.length; ++i) {
                        message.mapStringInt32[keys[i]] = object.mapStringInt32[keys[i]] | 0;
                    }
                }
                if (object.mapStringInt64) {
                    message.mapStringInt64 = {};
                    for (var keys = Object.keys(object.mapStringInt64), i = 0; i < keys.length; ++i) {
                        if ($util.Long) {
                            (message.mapStringInt64[keys[i]] = $util.Long.fromValue(object.mapStringInt64[keys[i]])).unsigned = false;
                        } else {
                            if (typeof object.mapStringInt64[keys[i]] === "string") {
                                message.mapStringInt64[keys[i]] = parseInt(object.mapStringInt64[keys[i]], 10);
                            } else {
                                if (typeof object.mapStringInt64[keys[i]] === "number") {
                                    message.mapStringInt64[keys[i]] = object.mapStringInt64[keys[i]];
                                } else {
                                    if (typeof object.mapStringInt64[keys[i]] === "object") {
                                        message.mapStringInt64[keys[i]] = new $util.LongBits(object.mapStringInt64[keys[i]].low, object.mapStringInt64[keys[i]].high).toNumber();
                                    }
                                }
                            }
                        }
                    }
                }
                if (object.mapStringBool) {
                    message.mapStringBool = {};
                    for (var keys = Object.keys(object.mapStringBool), i = 0; i < keys.length; ++i) {
                        message.mapStringBool[keys[i]] = Boolean(object.mapStringBool[keys[i]]);
                    }
                }
                if (object.mapStringDouble) {
                    message.mapStringDouble = {};
                    for (var keys = Object.keys(object.mapStringDouble), i = 0; i < keys.length; ++i) {
                        message.mapStringDouble[keys[i]] = Number(object.mapStringDouble[keys[i]]);
                    }
                }
                if (object.mapStringEnum) {
                    message.mapStringEnum = {};
                    for (var keys = Object.keys(object.mapStringEnum), i = 0; i < keys.length; ++i) {
                        switch (object.mapStringEnum[keys[i]]) {
                        case "MAP_VALUE_FOO_NOBINARY":
                        case 0:
                            message.mapStringEnum[keys[i]] = 0;
                            break;

                        case "MAP_VALUE_BAR_NOBINARY":
                        case 1:
                            message.mapStringEnum[keys[i]] = 1;
                            break;

                        case "MAP_VALUE_BAZ_NOBINARY":
                        case 2:
                            message.mapStringEnum[keys[i]] = 2;
                            break;
                        }
                    }
                }
                if (object.mapStringMsg) {
                    message.mapStringMsg = {};
                    for (var keys = Object.keys(object.mapStringMsg), i = 0; i < keys.length; ++i) {
                        message.mapStringMsg[keys[i]] = $types[6].fromObject(object.mapStringMsg[keys[i]]);
                    }
                }
                if (object.mapInt32String) {
                    message.mapInt32String = {};
                    for (var keys = Object.keys(object.mapInt32String), i = 0; i < keys.length; ++i) {
                        message.mapInt32String[keys[i]] = String(object.mapInt32String[keys[i]]);
                    }
                }
                if (object.mapInt64String) {
                    message.mapInt64String = {};
                    for (var keys = Object.keys(object.mapInt64String), i = 0; i < keys.length; ++i) {
                        message.mapInt64String[keys[i]] = String(object.mapInt64String[keys[i]]);
                    }
                }
                if (object.mapBoolString) {
                    message.mapBoolString = {};
                    for (var keys = Object.keys(object.mapBoolString), i = 0; i < keys.length; ++i) {
                        message.mapBoolString[keys[i]] = String(object.mapBoolString[keys[i]]);
                    }
                }
                if (object.testMapFields !== undefined && object.testMapFields !== null) {
                    message.testMapFields = $types[10].fromObject(object.testMapFields);
                }
                if (object.mapStringTestmapfields) {
                    message.mapStringTestmapfields = {};
                    for (var keys = Object.keys(object.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                        message.mapStringTestmapfields[keys[i]] = $types[11].fromObject(object.mapStringTestmapfields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a TestMapFieldsNoBinary message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.TestMapFieldsNoBinary.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             */
            TestMapFieldsNoBinary.from = TestMapFieldsNoBinary.fromObject;

            /**
             * Creates a plain object from a TestMapFieldsNoBinary message. Also converts values to other types if specified.
             * @param {jspb.test.TestMapFieldsNoBinary} message TestMapFieldsNoBinary
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMapFieldsNoBinary.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.objects || options.defaults) {
                    object.mapStringString = {};
                    object.mapStringInt32 = {};
                    object.mapStringInt64 = {};
                    object.mapStringBool = {};
                    object.mapStringDouble = {};
                    object.mapStringEnum = {};
                    object.mapStringMsg = {};
                    object.mapInt32String = {};
                    object.mapInt64String = {};
                    object.mapBoolString = {};
                    object.mapStringTestmapfields = {};
                }
                if (options.defaults) {
                    object.testMapFields = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "mapStringString":
                        if (message.mapStringString && message.mapStringString !== $util.emptyObject) {
                            object.mapStringString = {};
                            for (var keys2 = Object.keys(message.mapStringString), j = 0; j < keys2.length; ++j) {
                                object.mapStringString[keys2[j]] = message.mapStringString[keys2[j]];
                            }
                        }
                        break;

                    case "mapStringInt32":
                        if (message.mapStringInt32 && message.mapStringInt32 !== $util.emptyObject) {
                            object.mapStringInt32 = {};
                            for (var keys2 = Object.keys(message.mapStringInt32), j = 0; j < keys2.length; ++j) {
                                object.mapStringInt32[keys2[j]] = message.mapStringInt32[keys2[j]];
                            }
                        }
                        break;

                    case "mapStringInt64":
                        if (message.mapStringInt64 && message.mapStringInt64 !== $util.emptyObject) {
                            object.mapStringInt64 = {};
                            for (var keys2 = Object.keys(message.mapStringInt64), j = 0; j < keys2.length; ++j) {
                                if (typeof message.mapStringInt64[keys2[j]] === "number") {
                                    object.mapStringInt64[keys2[j]] = options.longs === String ? String(message.mapStringInt64[keys2[j]]) : message.mapStringInt64[keys2[j]];
                                } else {
                                    object.mapStringInt64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapStringInt64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapStringInt64[keys2[j]].low, message.mapStringInt64[keys2[j]].high).toNumber() : message.mapStringInt64[keys2[j]];
                                }
                            }
                        }
                        break;

                    case "mapStringBool":
                        if (message.mapStringBool && message.mapStringBool !== $util.emptyObject) {
                            object.mapStringBool = {};
                            for (var keys2 = Object.keys(message.mapStringBool), j = 0; j < keys2.length; ++j) {
                                object.mapStringBool[keys2[j]] = message.mapStringBool[keys2[j]];
                            }
                        }
                        break;

                    case "mapStringDouble":
                        if (message.mapStringDouble && message.mapStringDouble !== $util.emptyObject) {
                            object.mapStringDouble = {};
                            for (var keys2 = Object.keys(message.mapStringDouble), j = 0; j < keys2.length; ++j) {
                                object.mapStringDouble[keys2[j]] = message.mapStringDouble[keys2[j]];
                            }
                        }
                        break;

                    case "mapStringEnum":
                        if (message.mapStringEnum && message.mapStringEnum !== $util.emptyObject) {
                            object.mapStringEnum = {};
                            for (var keys2 = Object.keys(message.mapStringEnum), j = 0; j < keys2.length; ++j) {
                                object.mapStringEnum[keys2[j]] = options.enums === String ? $types[5][message.mapStringEnum[keys2[j]]] : message.mapStringEnum[keys2[j]];
                            }
                        }
                        break;

                    case "mapStringMsg":
                        if (message.mapStringMsg && message.mapStringMsg !== $util.emptyObject) {
                            object.mapStringMsg = {};
                            for (var keys2 = Object.keys(message.mapStringMsg), j = 0; j < keys2.length; ++j) {
                                object.mapStringMsg[keys2[j]] = $types[6].toObject(message.mapStringMsg[keys2[j]], options);
                            }
                        }
                        break;

                    case "mapInt32String":
                        if (message.mapInt32String && message.mapInt32String !== $util.emptyObject) {
                            object.mapInt32String = {};
                            for (var keys2 = Object.keys(message.mapInt32String), j = 0; j < keys2.length; ++j) {
                                object.mapInt32String[keys2[j]] = message.mapInt32String[keys2[j]];
                            }
                        }
                        break;

                    case "mapInt64String":
                        if (message.mapInt64String && message.mapInt64String !== $util.emptyObject) {
                            object.mapInt64String = {};
                            for (var keys2 = Object.keys(message.mapInt64String), j = 0; j < keys2.length; ++j) {
                                object.mapInt64String[keys2[j]] = message.mapInt64String[keys2[j]];
                            }
                        }
                        break;

                    case "mapBoolString":
                        if (message.mapBoolString && message.mapBoolString !== $util.emptyObject) {
                            object.mapBoolString = {};
                            for (var keys2 = Object.keys(message.mapBoolString), j = 0; j < keys2.length; ++j) {
                                object.mapBoolString[keys2[j]] = message.mapBoolString[keys2[j]];
                            }
                        }
                        break;

                    case "testMapFields":
                        if (message.testMapFields !== undefined && message.testMapFields !== null) {
                            object.testMapFields = $types[10].toObject(message.testMapFields, options);
                        }
                        break;

                    case "mapStringTestmapfields":
                        if (message.mapStringTestmapfields && message.mapStringTestmapfields !== $util.emptyObject) {
                            object.mapStringTestmapfields = {};
                            for (var keys2 = Object.keys(message.mapStringTestmapfields), j = 0; j < keys2.length; ++j) {
                                object.mapStringTestmapfields[keys2[j]] = $types[11].toObject(message.mapStringTestmapfields[keys2[j]], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this TestMapFieldsNoBinary message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMapFieldsNoBinary.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TestMapFieldsNoBinary to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TestMapFieldsNoBinary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestMapFieldsNoBinary;
        })();

        /**
         * MapValueEnumNoBinary enum.
         * @name MapValueEnumNoBinary
         * @memberof jspb.test
         * @enum {number}
         * @property {number} MAP_VALUE_FOO_NOBINARY=0 MAP_VALUE_FOO_NOBINARY value
         * @property {number} MAP_VALUE_BAR_NOBINARY=1 MAP_VALUE_BAR_NOBINARY value
         * @property {number} MAP_VALUE_BAZ_NOBINARY=2 MAP_VALUE_BAZ_NOBINARY value
         */
        test.MapValueEnumNoBinary = (function() {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "MAP_VALUE_FOO_NOBINARY"] = 0;
            values[valuesById[1] = "MAP_VALUE_BAR_NOBINARY"] = 1;
            values[valuesById[2] = "MAP_VALUE_BAZ_NOBINARY"] = 2;
            return values;
        })();

        test.MapValueMessageNoBinary = (function() {

            /**
             * Constructs a new MapValueMessageNoBinary.
             * @exports jspb.test.MapValueMessageNoBinary
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MapValueMessageNoBinary(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * MapValueMessageNoBinary foo.
             * @type {number}
             */
            MapValueMessageNoBinary.prototype.foo = 0;

            /**
             * Creates a new MapValueMessageNoBinary instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary instance
             */
            MapValueMessageNoBinary.create = function create(properties) {
                return new MapValueMessageNoBinary(properties);
            };

            /**
             * Encodes the specified MapValueMessageNoBinary message.
             * @param {jspb.test.MapValueMessageNoBinary|Object} message MapValueMessageNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapValueMessageNoBinary.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.foo !== undefined && message.foo !== 0) {
                    writer.uint32(8).int32(message.foo);
                }
                return writer;
            };

            /**
             * Encodes the specified MapValueMessageNoBinary message, length delimited.
             * @param {jspb.test.MapValueMessageNoBinary|Object} message MapValueMessageNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapValueMessageNoBinary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             */
            MapValueMessageNoBinary.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.MapValueMessageNoBinary();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.foo = reader.int32();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             */
            MapValueMessageNoBinary.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a MapValueMessageNoBinary message.
             * @param {jspb.test.MapValueMessageNoBinary|Object} message MapValueMessageNoBinary message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MapValueMessageNoBinary.verify = function verify(message) {
                if (message.foo !== undefined) {
                    if (!$util.isInteger(message.foo)) {
                        return "foo: integer expected";
                    }
                }
                return null;
            };

            /**
             * Creates a MapValueMessageNoBinary message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             */
            MapValueMessageNoBinary.fromObject = function fromObject(object) {
                var message = new $root.jspb.test.MapValueMessageNoBinary();
                if (object.foo !== undefined && object.foo !== null) {
                    message.foo = object.foo | 0;
                }
                return message;
            };

            /**
             * Creates a MapValueMessageNoBinary message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.MapValueMessageNoBinary.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             */
            MapValueMessageNoBinary.from = MapValueMessageNoBinary.fromObject;

            /**
             * Creates a plain object from a MapValueMessageNoBinary message. Also converts values to other types if specified.
             * @param {jspb.test.MapValueMessageNoBinary} message MapValueMessageNoBinary
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapValueMessageNoBinary.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.foo = 0;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "foo":
                        if (message.foo !== undefined && message.foo !== null) {
                            object.foo = message.foo;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this MapValueMessageNoBinary message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapValueMessageNoBinary.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MapValueMessageNoBinary to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MapValueMessageNoBinary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MapValueMessageNoBinary;
        })();

        test.Deeply = (function() {

            /**
             * Constructs a new Deeply.
             * @exports jspb.test.Deeply
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Deeply(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Creates a new Deeply instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {jspb.test.Deeply} Deeply instance
             */
            Deeply.create = function create(properties) {
                return new Deeply(properties);
            };

            /**
             * Encodes the specified Deeply message.
             * @param {jspb.test.Deeply|Object} message Deeply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deeply.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                return writer;
            };

            /**
             * Encodes the specified Deeply message, length delimited.
             * @param {jspb.test.Deeply|Object} message Deeply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deeply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Deeply message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Deeply} Deeply
             */
            Deeply.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Deeply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Deeply message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {jspb.test.Deeply} Deeply
             */
            Deeply.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a Deeply message.
             * @param {jspb.test.Deeply|Object} message Deeply message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Deeply.verify = function verify() {
                return null;
            };

            /**
             * Creates a Deeply message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Deeply} Deeply
             */
            Deeply.fromObject = function fromObject() {
                return new $root.jspb.test.Deeply();
            };

            /**
             * Creates a Deeply message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link jspb.test.Deeply.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Deeply} Deeply
             */
            Deeply.from = Deeply.fromObject;

            /**
             * Creates a plain object from a Deeply message. Also converts values to other types if specified.
             * @param {jspb.test.Deeply} message Deeply
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deeply.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this Deeply message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deeply.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Deeply to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Deeply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Deeply.Nested = (function() {

                /**
                 * Constructs a new Nested.
                 * @exports jspb.test.Deeply.Nested
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {jspb.test.Deeply.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message.
                 * @param {jspb.test.Deeply.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited.
                 * @param {jspb.test.Deeply.Nested|Object} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.Deeply.Nested} Nested
                 */
                Nested.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Deeply.Nested();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {jspb.test.Deeply.Nested} Nested
                 */
                Nested.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a Nested message.
                 * @param {jspb.test.Deeply.Nested|Object} message Nested message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify() {
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Deeply.Nested} Nested
                 */
                Nested.fromObject = function fromObject() {
                    return new $root.jspb.test.Deeply.Nested();
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link jspb.test.Deeply.Nested.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Deeply.Nested} Nested
                 */
                Nested.from = Nested.fromObject;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param {jspb.test.Deeply.Nested} message Nested
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject() {
                    return {};
                };

                /**
                 * Creates a plain object from this Nested message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Nested to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Nested.Message = (function() {

                    /**
                     * Constructs a new Message.
                     * @exports jspb.test.Deeply.Nested.Message
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Message(properties) {
                        if (properties) {
                            var keys = Object.keys(properties);
                            for (var i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                        }
                    }

                    /**
                     * Message count.
                     * @type {number}
                     */
                    Message.prototype.count = 0;

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {jspb.test.Deeply.Nested.Message} Message instance
                     */
                    Message.create = function create(properties) {
                        return new Message(properties);
                    };

                    /**
                     * Encodes the specified Message message.
                     * @param {jspb.test.Deeply.Nested.Message|Object} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encode = function encode(message, writer) {
                        if (!writer) {
                            writer = $Writer.create();
                        }
                        if (message.count !== undefined && message.count !== 0) {
                            writer.uint32(8).int32(message.count);
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Message message, length delimited.
                     * @param {jspb.test.Deeply.Nested.Message|Object} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     */
                    Message.decode = function decode(reader, len) {
                        if (!(reader instanceof $Reader)) {
                            reader = $Reader.create(reader);
                        }
                        var end = len === undefined ? reader.len : reader.pos + len, message = new $root.jspb.test.Deeply.Nested.Message();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.count = reader.int32();
                                break;

                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     */
                    Message.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                        readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                        return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                    };

                    /**
                     * Verifies a Message message.
                     * @param {jspb.test.Deeply.Nested.Message|Object} message Message message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Message.verify = function verify(message) {
                        if (message.count !== undefined) {
                            if (!$util.isInteger(message.count)) {
                                return "count: integer expected";
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     */
                    Message.fromObject = function fromObject(object) {
                        var message = new $root.jspb.test.Deeply.Nested.Message();
                        if (object.count !== undefined && object.count !== null) {
                            message.count = object.count | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link jspb.test.Deeply.Nested.Message.fromObject}.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     */
                    Message.from = Message.fromObject;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param {jspb.test.Deeply.Nested.Message} message Message
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Message.toObject = function toObject(message, options) {
                        if (!options) {
                            options = {};
                        }
                        var object = {};
                        if (options.defaults) {
                            object.count = 0;
                        }
                        for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                            switch (keys[i]) {
                            case "count":
                                if (message.count !== undefined && message.count !== null) {
                                    object.count = message.count;
                                }
                                break;
                            }
                        }
                        return object;
                    };

                    /**
                     * Creates a plain object from this Message message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Message.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this Message to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Message.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Message;
                })();

                return Nested;
            })();

            return Deeply;
        })();

        return test;
    })();

    return jspb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @exports google.protobuf
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Constructs a new FileDescriptorSet.
             * @exports google.protobuf.FileDescriptorSet
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FileDescriptorSet file.
             * @type {Array.<google.protobuf.FileDescriptorProto>}
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.FileDescriptorProto"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.file) {
                    for (var i = 0; i < message.file.length; ++i) {
                        $types[0].encode(message.file[i], writer.uint32(10).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length)) {
                            message.file = [];
                        }
                        message.file.push($types[0].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (message.file !== undefined) {
                    if (!Array.isArray(message.file)) {
                        return "file: array expected";
                    }
                    for (var i = 0; i < message.file.length; ++i) {
                        var err = $types[0].verify(message.file[i]);
                        if (err) {
                            return "file." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        message.file[i] = $types[0].fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorSet.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.from = FileDescriptorSet.fromObject;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.file = [];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "file":
                        if (message.file.length) {
                            object.file = [];
                            for (var j = 0; j < message.file.length; ++j) {
                                object.file[j] = $types[0].toObject(message.file[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorSet message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Constructs a new FileDescriptorProto.
             * @exports google.protobuf.FileDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FileDescriptorProto name.
             * @type {string}
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @name google.protobuf.FileDescriptorProto#package
             * @type {string}
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @type {Array.<string>}
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @type {Array.<google.protobuf.DescriptorProto>}
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @type {Array.<google.protobuf.EnumDescriptorProto>}
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @type {Array.<google.protobuf.ServiceDescriptorProto>}
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @type {google.protobuf.FileOptions}
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @type {google.protobuf.SourceCodeInfo}
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @type {string}
             */
            FileDescriptorProto.prototype.syntax = "";

            // Lazily resolved type references
            var $types = {
                5: "google.protobuf.DescriptorProto",
                6: "google.protobuf.EnumDescriptorProto",
                7: "google.protobuf.ServiceDescriptorProto",
                8: "google.protobuf.FieldDescriptorProto",
                9: "google.protobuf.FileOptions",
                10: "google.protobuf.SourceCodeInfo"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message["package"] !== undefined && message["package"] !== "") {
                    writer.uint32(18).string(message["package"]);
                }
                if (message.dependency) {
                    for (var i = 0; i < message.dependency.length; ++i) {
                        writer.uint32(26).string(message.dependency[i]);
                    }
                }
                if (message.publicDependency) {
                    for (var i = 0; i < message.publicDependency.length; ++i) {
                        writer.uint32(80).int32(message.publicDependency[i]);
                    }
                }
                if (message.weakDependency) {
                    for (var i = 0; i < message.weakDependency.length; ++i) {
                        writer.uint32(88).int32(message.weakDependency[i]);
                    }
                }
                if (message.messageType) {
                    for (var i = 0; i < message.messageType.length; ++i) {
                        $types[5].encode(message.messageType[i], writer.uint32(34).fork()).ldelim();
                    }
                }
                if (message.enumType) {
                    for (var i = 0; i < message.enumType.length; ++i) {
                        $types[6].encode(message.enumType[i], writer.uint32(42).fork()).ldelim();
                    }
                }
                if (message.service) {
                    for (var i = 0; i < message.service.length; ++i) {
                        $types[7].encode(message.service[i], writer.uint32(50).fork()).ldelim();
                    }
                }
                if (message.extension) {
                    for (var i = 0; i < message.extension.length; ++i) {
                        $types[8].encode(message.extension[i], writer.uint32(58).fork()).ldelim();
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[9].encode(message.options, writer.uint32(66).fork()).ldelim();
                }
                if (message.sourceCodeInfo !== undefined && message.sourceCodeInfo !== null) {
                    $types[10].encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
                }
                if (message.syntax !== undefined && message.syntax !== "") {
                    writer.uint32(98).string(message.syntax);
                }
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        message["package"] = reader.string();
                        break;

                    case 3:
                        if (!(message.dependency && message.dependency.length)) {
                            message.dependency = [];
                        }
                        message.dependency.push(reader.string());
                        break;

                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length)) {
                            message.publicDependency = [];
                        }
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.publicDependency.push(reader.int32());
                            }
                        } else {
                            message.publicDependency.push(reader.int32());
                        }
                        break;

                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length)) {
                            message.weakDependency = [];
                        }
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.weakDependency.push(reader.int32());
                            }
                        } else {
                            message.weakDependency.push(reader.int32());
                        }
                        break;

                    case 4:
                        if (!(message.messageType && message.messageType.length)) {
                            message.messageType = [];
                        }
                        message.messageType.push($types[5].decode(reader, reader.uint32()));
                        break;

                    case 5:
                        if (!(message.enumType && message.enumType.length)) {
                            message.enumType = [];
                        }
                        message.enumType.push($types[6].decode(reader, reader.uint32()));
                        break;

                    case 6:
                        if (!(message.service && message.service.length)) {
                            message.service = [];
                        }
                        message.service.push($types[7].decode(reader, reader.uint32()));
                        break;

                    case 7:
                        if (!(message.extension && message.extension.length)) {
                            message.extension = [];
                        }
                        message.extension.push($types[8].decode(reader, reader.uint32()));
                        break;

                    case 8:
                        message.options = $types[9].decode(reader, reader.uint32());
                        break;

                    case 9:
                        message.sourceCodeInfo = $types[10].decode(reader, reader.uint32());
                        break;

                    case 12:
                        message.syntax = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message["package"] !== undefined) {
                    if (!$util.isString(message["package"])) {
                        return "package: string expected";
                    }
                }
                if (message.dependency !== undefined) {
                    if (!Array.isArray(message.dependency)) {
                        return "dependency: array expected";
                    }
                    for (var i = 0; i < message.dependency.length; ++i) {
                        if (!$util.isString(message.dependency[i])) {
                            return "dependency: string[] expected";
                        }
                    }
                }
                if (message.publicDependency !== undefined) {
                    if (!Array.isArray(message.publicDependency)) {
                        return "publicDependency: array expected";
                    }
                    for (var i = 0; i < message.publicDependency.length; ++i) {
                        if (!$util.isInteger(message.publicDependency[i])) {
                            return "publicDependency: integer[] expected";
                        }
                    }
                }
                if (message.weakDependency !== undefined) {
                    if (!Array.isArray(message.weakDependency)) {
                        return "weakDependency: array expected";
                    }
                    for (var i = 0; i < message.weakDependency.length; ++i) {
                        if (!$util.isInteger(message.weakDependency[i])) {
                            return "weakDependency: integer[] expected";
                        }
                    }
                }
                if (message.messageType !== undefined) {
                    if (!Array.isArray(message.messageType)) {
                        return "messageType: array expected";
                    }
                    for (var i = 0; i < message.messageType.length; ++i) {
                        var err = $types[5].verify(message.messageType[i]);
                        if (err) {
                            return "messageType." + err;
                        }
                    }
                }
                if (message.enumType !== undefined) {
                    if (!Array.isArray(message.enumType)) {
                        return "enumType: array expected";
                    }
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var err = $types[6].verify(message.enumType[i]);
                        if (err) {
                            return "enumType." + err;
                        }
                    }
                }
                if (message.service !== undefined) {
                    if (!Array.isArray(message.service)) {
                        return "service: array expected";
                    }
                    for (var i = 0; i < message.service.length; ++i) {
                        var err = $types[7].verify(message.service[i]);
                        if (err) {
                            return "service." + err;
                        }
                    }
                }
                if (message.extension !== undefined) {
                    if (!Array.isArray(message.extension)) {
                        return "extension: array expected";
                    }
                    for (var i = 0; i < message.extension.length; ++i) {
                        var err = $types[8].verify(message.extension[i]);
                        if (err) {
                            return "extension." + err;
                        }
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[9].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                if (message.sourceCodeInfo !== undefined && message.sourceCodeInfo !== null) {
                    var err = $types[10].verify(message.sourceCodeInfo);
                    if (err) {
                        return "sourceCodeInfo." + err;
                    }
                }
                if (message.syntax !== undefined) {
                    if (!$util.isString(message.syntax)) {
                        return "syntax: string expected";
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object["package"] !== undefined && object["package"] !== null) {
                    message["package"] = String(object["package"]);
                }
                if (object.dependency) {
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i) {
                        message.dependency[i] = String(object.dependency[i]);
                    }
                }
                if (object.publicDependency) {
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i) {
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                }
                if (object.weakDependency) {
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i) {
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                }
                if (object.messageType) {
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        message.messageType[i] = $types[5].fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        message.enumType[i] = $types[6].fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        message.service[i] = $types[7].fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        message.extension[i] = $types[8].fromObject(object.extension[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[9].fromObject(object.options);
                }
                if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
                    message.sourceCodeInfo = $types[10].fromObject(object.sourceCodeInfo);
                }
                if (object.syntax !== undefined && object.syntax !== null) {
                    message.syntax = String(object.syntax);
                }
                return message;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.from = FileDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "package":
                        if (message["package"] !== undefined && message["package"] !== null) {
                            object["package"] = message["package"];
                        }
                        break;

                    case "dependency":
                        if (message.dependency.length) {
                            object.dependency = [];
                            for (var j = 0; j < message.dependency.length; ++j) {
                                object.dependency[j] = message.dependency[j];
                            }
                        }
                        break;

                    case "publicDependency":
                        if (message.publicDependency.length) {
                            object.publicDependency = [];
                            for (var j = 0; j < message.publicDependency.length; ++j) {
                                object.publicDependency[j] = message.publicDependency[j];
                            }
                        }
                        break;

                    case "weakDependency":
                        if (message.weakDependency.length) {
                            object.weakDependency = [];
                            for (var j = 0; j < message.weakDependency.length; ++j) {
                                object.weakDependency[j] = message.weakDependency[j];
                            }
                        }
                        break;

                    case "messageType":
                        if (message.messageType.length) {
                            object.messageType = [];
                            for (var j = 0; j < message.messageType.length; ++j) {
                                object.messageType[j] = $types[5].toObject(message.messageType[j], options);
                            }
                        }
                        break;

                    case "enumType":
                        if (message.enumType.length) {
                            object.enumType = [];
                            for (var j = 0; j < message.enumType.length; ++j) {
                                object.enumType[j] = $types[6].toObject(message.enumType[j], options);
                            }
                        }
                        break;

                    case "service":
                        if (message.service.length) {
                            object.service = [];
                            for (var j = 0; j < message.service.length; ++j) {
                                object.service[j] = $types[7].toObject(message.service[j], options);
                            }
                        }
                        break;

                    case "extension":
                        if (message.extension.length) {
                            object.extension = [];
                            for (var j = 0; j < message.extension.length; ++j) {
                                object.extension[j] = $types[8].toObject(message.extension[j], options);
                            }
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[9].toObject(message.options, options);
                        }
                        break;

                    case "sourceCodeInfo":
                        if (message.sourceCodeInfo !== undefined && message.sourceCodeInfo !== null) {
                            object.sourceCodeInfo = $types[10].toObject(message.sourceCodeInfo, options);
                        }
                        break;

                    case "syntax":
                        if (message.syntax !== undefined && message.syntax !== null) {
                            object.syntax = message.syntax;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Constructs a new DescriptorProto.
             * @exports google.protobuf.DescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * DescriptorProto name.
             * @type {string}
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @type {Array.<google.protobuf.DescriptorProto>}
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @type {Array.<google.protobuf.EnumDescriptorProto>}
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @type {Array.<google.protobuf.DescriptorProto.ExtensionRange>}
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @type {Array.<google.protobuf.OneofDescriptorProto>}
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @type {google.protobuf.MessageOptions}
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @type {Array.<google.protobuf.DescriptorProto.ReservedRange>}
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @type {Array.<string>}
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.FieldDescriptorProto",
                2: "google.protobuf.FieldDescriptorProto",
                3: "google.protobuf.DescriptorProto",
                4: "google.protobuf.EnumDescriptorProto",
                5: "google.protobuf.DescriptorProto.ExtensionRange",
                6: "google.protobuf.OneofDescriptorProto",
                7: "google.protobuf.MessageOptions",
                8: "google.protobuf.DescriptorProto.ReservedRange"
            }; $lazyTypes.push($types);

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.field) {
                    for (var i = 0; i < message.field.length; ++i) {
                        $types[1].encode(message.field[i], writer.uint32(18).fork()).ldelim();
                    }
                }
                if (message.extension) {
                    for (var i = 0; i < message.extension.length; ++i) {
                        $types[2].encode(message.extension[i], writer.uint32(50).fork()).ldelim();
                    }
                }
                if (message.nestedType) {
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        $types[3].encode(message.nestedType[i], writer.uint32(26).fork()).ldelim();
                    }
                }
                if (message.enumType) {
                    for (var i = 0; i < message.enumType.length; ++i) {
                        $types[4].encode(message.enumType[i], writer.uint32(34).fork()).ldelim();
                    }
                }
                if (message.extensionRange) {
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        $types[5].encode(message.extensionRange[i], writer.uint32(42).fork()).ldelim();
                    }
                }
                if (message.oneofDecl) {
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        $types[6].encode(message.oneofDecl[i], writer.uint32(66).fork()).ldelim();
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[7].encode(message.options, writer.uint32(58).fork()).ldelim();
                }
                if (message.reservedRange) {
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        $types[8].encode(message.reservedRange[i], writer.uint32(74).fork()).ldelim();
                    }
                }
                if (message.reservedName) {
                    for (var i = 0; i < message.reservedName.length; ++i) {
                        writer.uint32(82).string(message.reservedName[i]);
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        if (!(message.field && message.field.length)) {
                            message.field = [];
                        }
                        message.field.push($types[1].decode(reader, reader.uint32()));
                        break;

                    case 6:
                        if (!(message.extension && message.extension.length)) {
                            message.extension = [];
                        }
                        message.extension.push($types[2].decode(reader, reader.uint32()));
                        break;

                    case 3:
                        if (!(message.nestedType && message.nestedType.length)) {
                            message.nestedType = [];
                        }
                        message.nestedType.push($types[3].decode(reader, reader.uint32()));
                        break;

                    case 4:
                        if (!(message.enumType && message.enumType.length)) {
                            message.enumType = [];
                        }
                        message.enumType.push($types[4].decode(reader, reader.uint32()));
                        break;

                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length)) {
                            message.extensionRange = [];
                        }
                        message.extensionRange.push($types[5].decode(reader, reader.uint32()));
                        break;

                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length)) {
                            message.oneofDecl = [];
                        }
                        message.oneofDecl.push($types[6].decode(reader, reader.uint32()));
                        break;

                    case 7:
                        message.options = $types[7].decode(reader, reader.uint32());
                        break;

                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length)) {
                            message.reservedRange = [];
                        }
                        message.reservedRange.push($types[8].decode(reader, reader.uint32()));
                        break;

                    case 10:
                        if (!(message.reservedName && message.reservedName.length)) {
                            message.reservedName = [];
                        }
                        message.reservedName.push(reader.string());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.field !== undefined) {
                    if (!Array.isArray(message.field)) {
                        return "field: array expected";
                    }
                    for (var i = 0; i < message.field.length; ++i) {
                        var err = $types[1].verify(message.field[i]);
                        if (err) {
                            return "field." + err;
                        }
                    }
                }
                if (message.extension !== undefined) {
                    if (!Array.isArray(message.extension)) {
                        return "extension: array expected";
                    }
                    for (var i = 0; i < message.extension.length; ++i) {
                        var err = $types[2].verify(message.extension[i]);
                        if (err) {
                            return "extension." + err;
                        }
                    }
                }
                if (message.nestedType !== undefined) {
                    if (!Array.isArray(message.nestedType)) {
                        return "nestedType: array expected";
                    }
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        var err = $types[3].verify(message.nestedType[i]);
                        if (err) {
                            return "nestedType." + err;
                        }
                    }
                }
                if (message.enumType !== undefined) {
                    if (!Array.isArray(message.enumType)) {
                        return "enumType: array expected";
                    }
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var err = $types[4].verify(message.enumType[i]);
                        if (err) {
                            return "enumType." + err;
                        }
                    }
                }
                if (message.extensionRange !== undefined) {
                    if (!Array.isArray(message.extensionRange)) {
                        return "extensionRange: array expected";
                    }
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        var err = $types[5].verify(message.extensionRange[i]);
                        if (err) {
                            return "extensionRange." + err;
                        }
                    }
                }
                if (message.oneofDecl !== undefined) {
                    if (!Array.isArray(message.oneofDecl)) {
                        return "oneofDecl: array expected";
                    }
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        var err = $types[6].verify(message.oneofDecl[i]);
                        if (err) {
                            return "oneofDecl." + err;
                        }
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[7].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                if (message.reservedRange !== undefined) {
                    if (!Array.isArray(message.reservedRange)) {
                        return "reservedRange: array expected";
                    }
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        var err = $types[8].verify(message.reservedRange[i]);
                        if (err) {
                            return "reservedRange." + err;
                        }
                    }
                }
                if (message.reservedName !== undefined) {
                    if (!Array.isArray(message.reservedName)) {
                        return "reservedName: array expected";
                    }
                    for (var i = 0; i < message.reservedName.length; ++i) {
                        if (!$util.isString(message.reservedName[i])) {
                            return "reservedName: string[] expected";
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.field) {
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        message.field[i] = $types[1].fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        message.extension[i] = $types[2].fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        message.nestedType[i] = $types[3].fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        message.enumType[i] = $types[4].fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        message.extensionRange[i] = $types[5].fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        message.oneofDecl[i] = $types[6].fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[7].fromObject(object.options);
                }
                if (object.reservedRange) {
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        message.reservedRange[i] = $types[8].fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i) {
                        message.reservedName[i] = String(object.reservedName[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.DescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.from = DescriptorProto.fromObject;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.extension = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "field":
                        if (message.field.length) {
                            object.field = [];
                            for (var j = 0; j < message.field.length; ++j) {
                                object.field[j] = $types[1].toObject(message.field[j], options);
                            }
                        }
                        break;

                    case "extension":
                        if (message.extension.length) {
                            object.extension = [];
                            for (var j = 0; j < message.extension.length; ++j) {
                                object.extension[j] = $types[2].toObject(message.extension[j], options);
                            }
                        }
                        break;

                    case "nestedType":
                        if (message.nestedType.length) {
                            object.nestedType = [];
                            for (var j = 0; j < message.nestedType.length; ++j) {
                                object.nestedType[j] = $types[3].toObject(message.nestedType[j], options);
                            }
                        }
                        break;

                    case "enumType":
                        if (message.enumType.length) {
                            object.enumType = [];
                            for (var j = 0; j < message.enumType.length; ++j) {
                                object.enumType[j] = $types[4].toObject(message.enumType[j], options);
                            }
                        }
                        break;

                    case "extensionRange":
                        if (message.extensionRange.length) {
                            object.extensionRange = [];
                            for (var j = 0; j < message.extensionRange.length; ++j) {
                                object.extensionRange[j] = $types[5].toObject(message.extensionRange[j], options);
                            }
                        }
                        break;

                    case "oneofDecl":
                        if (message.oneofDecl.length) {
                            object.oneofDecl = [];
                            for (var j = 0; j < message.oneofDecl.length; ++j) {
                                object.oneofDecl[j] = $types[6].toObject(message.oneofDecl[j], options);
                            }
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[7].toObject(message.options, options);
                        }
                        break;

                    case "reservedRange":
                        if (message.reservedRange.length) {
                            object.reservedRange = [];
                            for (var j = 0; j < message.reservedRange.length; ++j) {
                                object.reservedRange[j] = $types[8].toObject(message.reservedRange[j], options);
                            }
                        }
                        break;

                    case "reservedName":
                        if (message.reservedName.length) {
                            object.reservedName = [];
                            for (var j = 0; j < message.reservedName.length; ++j) {
                                object.reservedName[j] = message.reservedName[j];
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this DescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Constructs a new ExtensionRange.
                 * @exports google.protobuf.DescriptorProto.ExtensionRange
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * ExtensionRange start.
                 * @type {number}
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @type {number}
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.start !== undefined && message.start !== 0) {
                        writer.uint32(8).int32(message.start);
                    }
                    if (message.end !== undefined && message.end !== 0) {
                        writer.uint32(16).int32(message.end);
                    }
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;

                        case 2:
                            message.end = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (message.start !== undefined) {
                        if (!$util.isInteger(message.start)) {
                            return "start: integer expected";
                        }
                    }
                    if (message.end !== undefined) {
                        if (!$util.isInteger(message.end)) {
                            return "end: integer expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start !== undefined && object.start !== null) {
                        message.start = object.start | 0;
                    }
                    if (object.end !== undefined && object.end !== null) {
                        message.end = object.end | 0;
                    }
                    return message;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ExtensionRange.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.from = ExtensionRange.fromObject;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "start":
                            if (message.start !== undefined && message.start !== null) {
                                object.start = message.start;
                            }
                            break;

                        case "end":
                            if (message.end !== undefined && message.end !== null) {
                                object.end = message.end;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this ExtensionRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Constructs a new ReservedRange.
                 * @exports google.protobuf.DescriptorProto.ReservedRange
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * ReservedRange start.
                 * @type {number}
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @type {number}
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.start !== undefined && message.start !== 0) {
                        writer.uint32(8).int32(message.start);
                    }
                    if (message.end !== undefined && message.end !== 0) {
                        writer.uint32(16).int32(message.end);
                    }
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;

                        case 2:
                            message.end = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (message.start !== undefined) {
                        if (!$util.isInteger(message.start)) {
                            return "start: integer expected";
                        }
                    }
                    if (message.end !== undefined) {
                        if (!$util.isInteger(message.end)) {
                            return "end: integer expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start !== undefined && object.start !== null) {
                        message.start = object.start | 0;
                    }
                    if (object.end !== undefined && object.end !== null) {
                        message.end = object.end | 0;
                    }
                    return message;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ReservedRange.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.from = ReservedRange.fromObject;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "start":
                            if (message.start !== undefined && message.start !== null) {
                                object.start = message.start;
                            }
                            break;

                        case "end":
                            if (message.end !== undefined && message.end !== null) {
                                object.end = message.end;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this ReservedRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Constructs a new FieldDescriptorProto.
             * @exports google.protobuf.FieldDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FieldDescriptorProto name.
             * @type {string}
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @type {number}
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @type {number}
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @type {number}
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @type {string}
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @type {string}
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @type {string}
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @type {number}
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @type {string}
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @type {google.protobuf.FieldOptions}
             */
            FieldDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.FieldDescriptorProto.Label",
                3: "google.protobuf.FieldDescriptorProto.Type",
                9: "google.protobuf.FieldOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.number !== undefined && message.number !== 0) {
                    writer.uint32(24).int32(message.number);
                }
                if (message.label !== undefined && message.label !== 1) {
                    writer.uint32(32).uint32(message.label);
                }
                if (message.type !== undefined && message.type !== 1) {
                    writer.uint32(40).uint32(message.type);
                }
                if (message.typeName !== undefined && message.typeName !== "") {
                    writer.uint32(50).string(message.typeName);
                }
                if (message.extendee !== undefined && message.extendee !== "") {
                    writer.uint32(18).string(message.extendee);
                }
                if (message.defaultValue !== undefined && message.defaultValue !== "") {
                    writer.uint32(58).string(message.defaultValue);
                }
                if (message.oneofIndex !== undefined && message.oneofIndex !== 0) {
                    writer.uint32(72).int32(message.oneofIndex);
                }
                if (message.jsonName !== undefined && message.jsonName !== "") {
                    writer.uint32(82).string(message.jsonName);
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[9].encode(message.options, writer.uint32(66).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 3:
                        message.number = reader.int32();
                        break;

                    case 4:
                        message.label = reader.uint32();
                        break;

                    case 5:
                        message.type = reader.uint32();
                        break;

                    case 6:
                        message.typeName = reader.string();
                        break;

                    case 2:
                        message.extendee = reader.string();
                        break;

                    case 7:
                        message.defaultValue = reader.string();
                        break;

                    case 9:
                        message.oneofIndex = reader.int32();
                        break;

                    case 10:
                        message.jsonName = reader.string();
                        break;

                    case 8:
                        message.options = $types[9].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.number !== undefined) {
                    if (!$util.isInteger(message.number)) {
                        return "number: integer expected";
                    }
                }
                if (message.label !== undefined) {
                    switch (message.label) {
                    default:
                        return "label: enum value expected";

                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.type !== undefined) {
                    switch (message.type) {
                    default:
                        return "type: enum value expected";

                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                }
                if (message.typeName !== undefined) {
                    if (!$util.isString(message.typeName)) {
                        return "typeName: string expected";
                    }
                }
                if (message.extendee !== undefined) {
                    if (!$util.isString(message.extendee)) {
                        return "extendee: string expected";
                    }
                }
                if (message.defaultValue !== undefined) {
                    if (!$util.isString(message.defaultValue)) {
                        return "defaultValue: string expected";
                    }
                }
                if (message.oneofIndex !== undefined) {
                    if (!$util.isInteger(message.oneofIndex)) {
                        return "oneofIndex: integer expected";
                    }
                }
                if (message.jsonName !== undefined) {
                    if (!$util.isString(message.jsonName)) {
                        return "jsonName: string expected";
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[9].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.number !== undefined && object.number !== null) {
                    message.number = object.number | 0;
                }
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;

                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;

                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;

                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;

                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;

                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;

                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;

                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;

                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;

                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;

                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;

                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;

                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;

                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;

                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;

                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;

                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;

                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;

                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;

                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName !== undefined && object.typeName !== null) {
                    message.typeName = String(object.typeName);
                }
                if (object.extendee !== undefined && object.extendee !== null) {
                    message.extendee = String(object.extendee);
                }
                if (object.defaultValue !== undefined && object.defaultValue !== null) {
                    message.defaultValue = String(object.defaultValue);
                }
                if (object.oneofIndex !== undefined && object.oneofIndex !== null) {
                    message.oneofIndex = object.oneofIndex | 0;
                }
                if (object.jsonName !== undefined && object.jsonName !== null) {
                    message.jsonName = String(object.jsonName);
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[9].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.from = FieldDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.extendee = "";
                    object.defaultValue = "";
                    object.oneofIndex = 0;
                    object.jsonName = "";
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "number":
                        if (message.number !== undefined && message.number !== null) {
                            object.number = message.number;
                        }
                        break;

                    case "label":
                        if (message.label !== undefined && message.label !== null) {
                            object.label = options.enums === String ? $types[2][message.label] : message.label;
                        }
                        break;

                    case "type":
                        if (message.type !== undefined && message.type !== null) {
                            object.type = options.enums === String ? $types[3][message.type] : message.type;
                        }
                        break;

                    case "typeName":
                        if (message.typeName !== undefined && message.typeName !== null) {
                            object.typeName = message.typeName;
                        }
                        break;

                    case "extendee":
                        if (message.extendee !== undefined && message.extendee !== null) {
                            object.extendee = message.extendee;
                        }
                        break;

                    case "defaultValue":
                        if (message.defaultValue !== undefined && message.defaultValue !== null) {
                            object.defaultValue = message.defaultValue;
                        }
                        break;

                    case "oneofIndex":
                        if (message.oneofIndex !== undefined && message.oneofIndex !== null) {
                            object.oneofIndex = message.oneofIndex;
                        }
                        break;

                    case "jsonName":
                        if (message.jsonName !== undefined && message.jsonName !== null) {
                            object.jsonName = message.jsonName;
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[9].toObject(message.options, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name Type
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name Label
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Constructs a new OneofDescriptorProto.
             * @exports google.protobuf.OneofDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * OneofDescriptorProto name.
             * @type {string}
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @type {google.protobuf.OneofOptions}
             */
            OneofDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.OneofOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[1].encode(message.options, writer.uint32(18).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        message.options = $types[1].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[1].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[1].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.from = OneofDescriptorProto.fromObject;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[1].toObject(message.options, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Constructs a new EnumDescriptorProto.
             * @exports google.protobuf.EnumDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * EnumDescriptorProto name.
             * @type {string}
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @type {Array.<google.protobuf.EnumValueDescriptorProto>}
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @type {google.protobuf.EnumOptions}
             */
            EnumDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.EnumValueDescriptorProto",
                2: "google.protobuf.EnumOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.value) {
                    for (var i = 0; i < message.value.length; ++i) {
                        $types[1].encode(message.value[i], writer.uint32(18).fork()).ldelim();
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[2].encode(message.options, writer.uint32(26).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        if (!(message.value && message.value.length)) {
                            message.value = [];
                        }
                        message.value.push($types[1].decode(reader, reader.uint32()));
                        break;

                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.value !== undefined) {
                    if (!Array.isArray(message.value)) {
                        return "value: array expected";
                    }
                    for (var i = 0; i < message.value.length; ++i) {
                        var err = $types[1].verify(message.value[i]);
                        if (err) {
                            return "value." + err;
                        }
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[2].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.value) {
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        message.value[i] = $types[1].fromObject(object.value[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.from = EnumDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.value = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "value":
                        if (message.value.length) {
                            object.value = [];
                            for (var j = 0; j < message.value.length; ++j) {
                                object.value[j] = $types[1].toObject(message.value[j], options);
                            }
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[2].toObject(message.options, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @exports google.protobuf.EnumValueDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * EnumValueDescriptorProto name.
             * @type {string}
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @type {number}
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @type {google.protobuf.EnumValueOptions}
             */
            EnumValueDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.EnumValueOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.number !== undefined && message.number !== 0) {
                    writer.uint32(16).int32(message.number);
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[2].encode(message.options, writer.uint32(26).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        message.number = reader.int32();
                        break;

                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.number !== undefined) {
                    if (!$util.isInteger(message.number)) {
                        return "number: integer expected";
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[2].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.number !== undefined && object.number !== null) {
                    message.number = object.number | 0;
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.from = EnumValueDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "number":
                        if (message.number !== undefined && message.number !== null) {
                            object.number = message.number;
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[2].toObject(message.options, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @exports google.protobuf.ServiceDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * ServiceDescriptorProto name.
             * @type {string}
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @type {Array.<google.protobuf.MethodDescriptorProto>}
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @type {google.protobuf.ServiceOptions}
             */
            ServiceDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.MethodDescriptorProto",
                2: "google.protobuf.ServiceOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.method) {
                    for (var i = 0; i < message.method.length; ++i) {
                        $types[1].encode(message.method[i], writer.uint32(18).fork()).ldelim();
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[2].encode(message.options, writer.uint32(26).fork()).ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        if (!(message.method && message.method.length)) {
                            message.method = [];
                        }
                        message.method.push($types[1].decode(reader, reader.uint32()));
                        break;

                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.method !== undefined) {
                    if (!Array.isArray(message.method)) {
                        return "method: array expected";
                    }
                    for (var i = 0; i < message.method.length; ++i) {
                        var err = $types[1].verify(message.method[i]);
                        if (err) {
                            return "method." + err;
                        }
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[2].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.method) {
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        message.method[i] = $types[1].fromObject(object.method[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.from = ServiceDescriptorProto.fromObject;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.method = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "method":
                        if (message.method.length) {
                            object.method = [];
                            for (var j = 0; j < message.method.length; ++j) {
                                object.method[j] = $types[1].toObject(message.method[j], options);
                            }
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[2].toObject(message.options, options);
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Constructs a new MethodDescriptorProto.
             * @exports google.protobuf.MethodDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * MethodDescriptorProto name.
             * @type {string}
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @type {string}
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @type {string}
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @type {google.protobuf.MethodOptions}
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            // Lazily resolved type references
            var $types = {
                3: "google.protobuf.MethodOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name !== undefined && message.name !== "") {
                    writer.uint32(10).string(message.name);
                }
                if (message.inputType !== undefined && message.inputType !== "") {
                    writer.uint32(18).string(message.inputType);
                }
                if (message.outputType !== undefined && message.outputType !== "") {
                    writer.uint32(26).string(message.outputType);
                }
                if (message.options !== undefined && message.options !== null) {
                    $types[3].encode(message.options, writer.uint32(34).fork()).ldelim();
                }
                if (message.clientStreaming !== undefined && message.clientStreaming !== false) {
                    writer.uint32(40).bool(message.clientStreaming);
                }
                if (message.serverStreaming !== undefined && message.serverStreaming !== false) {
                    writer.uint32(48).bool(message.serverStreaming);
                }
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;

                    case 2:
                        message.inputType = reader.string();
                        break;

                    case 3:
                        message.outputType = reader.string();
                        break;

                    case 4:
                        message.options = $types[3].decode(reader, reader.uint32());
                        break;

                    case 5:
                        message.clientStreaming = reader.bool();
                        break;

                    case 6:
                        message.serverStreaming = reader.bool();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!$util.isString(message.name)) {
                        return "name: string expected";
                    }
                }
                if (message.inputType !== undefined) {
                    if (!$util.isString(message.inputType)) {
                        return "inputType: string expected";
                    }
                }
                if (message.outputType !== undefined) {
                    if (!$util.isString(message.outputType)) {
                        return "outputType: string expected";
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var err = $types[3].verify(message.options);
                    if (err) {
                        return "options." + err;
                    }
                }
                if (message.clientStreaming !== undefined) {
                    if (typeof message.clientStreaming !== "boolean") {
                        return "clientStreaming: boolean expected";
                    }
                }
                if (message.serverStreaming !== undefined) {
                    if (typeof message.serverStreaming !== "boolean") {
                        return "serverStreaming: boolean expected";
                    }
                }
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name !== undefined && object.name !== null) {
                    message.name = String(object.name);
                }
                if (object.inputType !== undefined && object.inputType !== null) {
                    message.inputType = String(object.inputType);
                }
                if (object.outputType !== undefined && object.outputType !== null) {
                    message.outputType = String(object.outputType);
                }
                if (object.options !== undefined && object.options !== null) {
                    message.options = $types[3].fromObject(object.options);
                }
                if (object.clientStreaming !== undefined && object.clientStreaming !== null) {
                    message.clientStreaming = Boolean(object.clientStreaming);
                }
                if (object.serverStreaming !== undefined && object.serverStreaming !== null) {
                    message.serverStreaming = Boolean(object.serverStreaming);
                }
                return message;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodDescriptorProto.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.from = MethodDescriptorProto.fromObject;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name !== undefined && message.name !== null) {
                            object.name = message.name;
                        }
                        break;

                    case "inputType":
                        if (message.inputType !== undefined && message.inputType !== null) {
                            object.inputType = message.inputType;
                        }
                        break;

                    case "outputType":
                        if (message.outputType !== undefined && message.outputType !== null) {
                            object.outputType = message.outputType;
                        }
                        break;

                    case "options":
                        if (message.options !== undefined && message.options !== null) {
                            object.options = $types[3].toObject(message.options, options);
                        }
                        break;

                    case "clientStreaming":
                        if (message.clientStreaming !== undefined && message.clientStreaming !== null) {
                            object.clientStreaming = message.clientStreaming;
                        }
                        break;

                    case "serverStreaming":
                        if (message.serverStreaming !== undefined && message.serverStreaming !== null) {
                            object.serverStreaming = message.serverStreaming;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Constructs a new FileOptions.
             * @exports google.protobuf.FileOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FileOptions javaPackage.
             * @type {string}
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @type {string}
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @type {boolean}
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @type {boolean}
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @type {boolean}
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @type {number}
             */
            FileOptions.prototype.optimizeFor = undefined;

            /**
             * FileOptions goPackage.
             * @type {string}
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @type {boolean}
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @type {boolean}
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @type {string}
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @type {string}
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                5: "google.protobuf.FileOptions.OptimizeMode",
                14: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.javaPackage !== undefined && message.javaPackage !== "") {
                    writer.uint32(10).string(message.javaPackage);
                }
                if (message.javaOuterClassname !== undefined && message.javaOuterClassname !== "") {
                    writer.uint32(66).string(message.javaOuterClassname);
                }
                if (message.javaMultipleFiles !== undefined && message.javaMultipleFiles !== false) {
                    writer.uint32(80).bool(message.javaMultipleFiles);
                }
                if (message.javaGenerateEqualsAndHash !== undefined && message.javaGenerateEqualsAndHash !== false) {
                    writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
                }
                if (message.javaStringCheckUtf8 !== undefined && message.javaStringCheckUtf8 !== false) {
                    writer.uint32(216).bool(message.javaStringCheckUtf8);
                }
                if (message.optimizeFor !== undefined && message.optimizeFor !== undefined) {
                    writer.uint32(72).uint32(message.optimizeFor);
                }
                if (message.goPackage !== undefined && message.goPackage !== "") {
                    writer.uint32(90).string(message.goPackage);
                }
                if (message.ccGenericServices !== undefined && message.ccGenericServices !== false) {
                    writer.uint32(128).bool(message.ccGenericServices);
                }
                if (message.javaGenericServices !== undefined && message.javaGenericServices !== false) {
                    writer.uint32(136).bool(message.javaGenericServices);
                }
                if (message.pyGenericServices !== undefined && message.pyGenericServices !== false) {
                    writer.uint32(144).bool(message.pyGenericServices);
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(184).bool(message.deprecated);
                }
                if (message.ccEnableArenas !== undefined && message.ccEnableArenas !== false) {
                    writer.uint32(248).bool(message.ccEnableArenas);
                }
                if (message.objcClassPrefix !== undefined && message.objcClassPrefix !== "") {
                    writer.uint32(290).string(message.objcClassPrefix);
                }
                if (message.csharpNamespace !== undefined && message.csharpNamespace !== "") {
                    writer.uint32(298).string(message.csharpNamespace);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[14].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;

                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;

                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;

                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;

                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;

                    case 9:
                        message.optimizeFor = reader.uint32();
                        break;

                    case 11:
                        message.goPackage = reader.string();
                        break;

                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;

                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;

                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;

                    case 23:
                        message.deprecated = reader.bool();
                        break;

                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;

                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;

                    case 37:
                        message.csharpNamespace = reader.string();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[14].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (message.javaPackage !== undefined) {
                    if (!$util.isString(message.javaPackage)) {
                        return "javaPackage: string expected";
                    }
                }
                if (message.javaOuterClassname !== undefined) {
                    if (!$util.isString(message.javaOuterClassname)) {
                        return "javaOuterClassname: string expected";
                    }
                }
                if (message.javaMultipleFiles !== undefined) {
                    if (typeof message.javaMultipleFiles !== "boolean") {
                        return "javaMultipleFiles: boolean expected";
                    }
                }
                if (message.javaGenerateEqualsAndHash !== undefined) {
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean") {
                        return "javaGenerateEqualsAndHash: boolean expected";
                    }
                }
                if (message.javaStringCheckUtf8 !== undefined) {
                    if (typeof message.javaStringCheckUtf8 !== "boolean") {
                        return "javaStringCheckUtf8: boolean expected";
                    }
                }
                if (message.optimizeFor !== undefined) {
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";

                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.goPackage !== undefined) {
                    if (!$util.isString(message.goPackage)) {
                        return "goPackage: string expected";
                    }
                }
                if (message.ccGenericServices !== undefined) {
                    if (typeof message.ccGenericServices !== "boolean") {
                        return "ccGenericServices: boolean expected";
                    }
                }
                if (message.javaGenericServices !== undefined) {
                    if (typeof message.javaGenericServices !== "boolean") {
                        return "javaGenericServices: boolean expected";
                    }
                }
                if (message.pyGenericServices !== undefined) {
                    if (typeof message.pyGenericServices !== "boolean") {
                        return "pyGenericServices: boolean expected";
                    }
                }
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.ccEnableArenas !== undefined) {
                    if (typeof message.ccEnableArenas !== "boolean") {
                        return "ccEnableArenas: boolean expected";
                    }
                }
                if (message.objcClassPrefix !== undefined) {
                    if (!$util.isString(message.objcClassPrefix)) {
                        return "objcClassPrefix: string expected";
                    }
                }
                if (message.csharpNamespace !== undefined) {
                    if (!$util.isString(message.csharpNamespace)) {
                        return "csharpNamespace: string expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[14].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage !== undefined && object.javaPackage !== null) {
                    message.javaPackage = String(object.javaPackage);
                }
                if (object.javaOuterClassname !== undefined && object.javaOuterClassname !== null) {
                    message.javaOuterClassname = String(object.javaOuterClassname);
                }
                if (object.javaMultipleFiles !== undefined && object.javaMultipleFiles !== null) {
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                }
                if (object.javaGenerateEqualsAndHash !== undefined && object.javaGenerateEqualsAndHash !== null) {
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                }
                if (object.javaStringCheckUtf8 !== undefined && object.javaStringCheckUtf8 !== null) {
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                }
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;

                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;

                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage !== undefined && object.goPackage !== null) {
                    message.goPackage = String(object.goPackage);
                }
                if (object.ccGenericServices !== undefined && object.ccGenericServices !== null) {
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                }
                if (object.javaGenericServices !== undefined && object.javaGenericServices !== null) {
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                }
                if (object.pyGenericServices !== undefined && object.pyGenericServices !== null) {
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                }
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.ccEnableArenas !== undefined && object.ccEnableArenas !== null) {
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                }
                if (object.objcClassPrefix !== undefined && object.objcClassPrefix !== null) {
                    message.objcClassPrefix = String(object.objcClassPrefix);
                }
                if (object.csharpNamespace !== undefined && object.csharpNamespace !== null) {
                    message.csharpNamespace = String(object.csharpNamespace);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[14].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.from = FileOptions.fromObject;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.javaMultipleFiles = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.javaStringCheckUtf8 = false;
                    object.optimizeFor = options.enums === String ? undefined : undefined;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.deprecated = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "javaPackage":
                        if (message.javaPackage !== undefined && message.javaPackage !== null) {
                            object.javaPackage = message.javaPackage;
                        }
                        break;

                    case "javaOuterClassname":
                        if (message.javaOuterClassname !== undefined && message.javaOuterClassname !== null) {
                            object.javaOuterClassname = message.javaOuterClassname;
                        }
                        break;

                    case "javaMultipleFiles":
                        if (message.javaMultipleFiles !== undefined && message.javaMultipleFiles !== null) {
                            object.javaMultipleFiles = message.javaMultipleFiles;
                        }
                        break;

                    case "javaGenerateEqualsAndHash":
                        if (message.javaGenerateEqualsAndHash !== undefined && message.javaGenerateEqualsAndHash !== null) {
                            object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                        }
                        break;

                    case "javaStringCheckUtf8":
                        if (message.javaStringCheckUtf8 !== undefined && message.javaStringCheckUtf8 !== null) {
                            object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                        }
                        break;

                    case "optimizeFor":
                        if (message.optimizeFor !== undefined && message.optimizeFor !== null) {
                            object.optimizeFor = options.enums === String ? $types[5][message.optimizeFor] : message.optimizeFor;
                        }
                        break;

                    case "goPackage":
                        if (message.goPackage !== undefined && message.goPackage !== null) {
                            object.goPackage = message.goPackage;
                        }
                        break;

                    case "ccGenericServices":
                        if (message.ccGenericServices !== undefined && message.ccGenericServices !== null) {
                            object.ccGenericServices = message.ccGenericServices;
                        }
                        break;

                    case "javaGenericServices":
                        if (message.javaGenericServices !== undefined && message.javaGenericServices !== null) {
                            object.javaGenericServices = message.javaGenericServices;
                        }
                        break;

                    case "pyGenericServices":
                        if (message.pyGenericServices !== undefined && message.pyGenericServices !== null) {
                            object.pyGenericServices = message.pyGenericServices;
                        }
                        break;

                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "ccEnableArenas":
                        if (message.ccEnableArenas !== undefined && message.ccEnableArenas !== null) {
                            object.ccEnableArenas = message.ccEnableArenas;
                        }
                        break;

                    case "objcClassPrefix":
                        if (message.objcClassPrefix !== undefined && message.objcClassPrefix !== null) {
                            object.objcClassPrefix = message.objcClassPrefix;
                        }
                        break;

                    case "csharpNamespace":
                        if (message.csharpNamespace !== undefined && message.csharpNamespace !== null) {
                            object.csharpNamespace = message.csharpNamespace;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[14].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FileOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name OptimizeMode
             * @memberof google.protobuf.FileOptions
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Constructs a new MessageOptions.
             * @exports google.protobuf.MessageOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MessageOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @type {boolean}
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @type {boolean}
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @type {boolean}
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @type {boolean}
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                4: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.messageSetWireFormat !== undefined && message.messageSetWireFormat !== false) {
                    writer.uint32(8).bool(message.messageSetWireFormat);
                }
                if (message.noStandardDescriptorAccessor !== undefined && message.noStandardDescriptorAccessor !== false) {
                    writer.uint32(16).bool(message.noStandardDescriptorAccessor);
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(24).bool(message.deprecated);
                }
                if (message.mapEntry !== undefined && message.mapEntry !== false) {
                    writer.uint32(56).bool(message.mapEntry);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[4].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;

                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;

                    case 3:
                        message.deprecated = reader.bool();
                        break;

                    case 7:
                        message.mapEntry = reader.bool();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[4].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (message.messageSetWireFormat !== undefined) {
                    if (typeof message.messageSetWireFormat !== "boolean") {
                        return "messageSetWireFormat: boolean expected";
                    }
                }
                if (message.noStandardDescriptorAccessor !== undefined) {
                    if (typeof message.noStandardDescriptorAccessor !== "boolean") {
                        return "noStandardDescriptorAccessor: boolean expected";
                    }
                }
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.mapEntry !== undefined) {
                    if (typeof message.mapEntry !== "boolean") {
                        return "mapEntry: boolean expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[4].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat !== undefined && object.messageSetWireFormat !== null) {
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                }
                if (object.noStandardDescriptorAccessor !== undefined && object.noStandardDescriptorAccessor !== null) {
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                }
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.mapEntry !== undefined && object.mapEntry !== null) {
                    message.mapEntry = Boolean(object.mapEntry);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[4].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MessageOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.from = MessageOptions.fromObject;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "messageSetWireFormat":
                        if (message.messageSetWireFormat !== undefined && message.messageSetWireFormat !== null) {
                            object.messageSetWireFormat = message.messageSetWireFormat;
                        }
                        break;

                    case "noStandardDescriptorAccessor":
                        if (message.noStandardDescriptorAccessor !== undefined && message.noStandardDescriptorAccessor !== null) {
                            object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                        }
                        break;

                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "mapEntry":
                        if (message.mapEntry !== undefined && message.mapEntry !== null) {
                            object.mapEntry = message.mapEntry;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[4].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this MessageOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MessageOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Constructs a new FieldOptions.
             * @exports google.protobuf.FieldOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FieldOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * FieldOptions ctype.
             * @type {number}
             */
            FieldOptions.prototype.ctype = undefined;

            /**
             * FieldOptions packed.
             * @type {boolean}
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @type {number}
             */
            FieldOptions.prototype.jstype = undefined;

            /**
             * FieldOptions lazy.
             * @type {boolean}
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @type {boolean}
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @type {boolean}
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.FieldOptions.CType",
                2: "google.protobuf.FieldOptions.JSType",
                6: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.ctype !== undefined && message.ctype !== undefined) {
                    writer.uint32(8).uint32(message.ctype);
                }
                if (message.packed !== undefined && message.packed !== false) {
                    writer.uint32(16).bool(message.packed);
                }
                if (message.jstype !== undefined && message.jstype !== undefined) {
                    writer.uint32(48).uint32(message.jstype);
                }
                if (message.lazy !== undefined && message.lazy !== false) {
                    writer.uint32(40).bool(message.lazy);
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(24).bool(message.deprecated);
                }
                if (message.weak !== undefined && message.weak !== false) {
                    writer.uint32(80).bool(message.weak);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[6].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.uint32();
                        break;

                    case 2:
                        message.packed = reader.bool();
                        break;

                    case 6:
                        message.jstype = reader.uint32();
                        break;

                    case 5:
                        message.lazy = reader.bool();
                        break;

                    case 3:
                        message.deprecated = reader.bool();
                        break;

                    case 10:
                        message.weak = reader.bool();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[6].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (message.ctype !== undefined) {
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";

                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (message.packed !== undefined) {
                    if (typeof message.packed !== "boolean") {
                        return "packed: boolean expected";
                    }
                }
                if (message.jstype !== undefined) {
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";

                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (message.lazy !== undefined) {
                    if (typeof message.lazy !== "boolean") {
                        return "lazy: boolean expected";
                    }
                }
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.weak !== undefined) {
                    if (typeof message.weak !== "boolean") {
                        return "weak: boolean expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[6].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;

                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;

                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed !== undefined && object.packed !== null) {
                    message.packed = Boolean(object.packed);
                }
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;

                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;

                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy !== undefined && object.lazy !== null) {
                    message.lazy = Boolean(object.lazy);
                }
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.weak !== undefined && object.weak !== null) {
                    message.weak = Boolean(object.weak);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[6].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.from = FieldOptions.fromObject;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.ctype = options.enums === String ? undefined : undefined;
                    object.packed = false;
                    object.jstype = options.enums === String ? undefined : undefined;
                    object.lazy = false;
                    object.deprecated = false;
                    object.weak = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "ctype":
                        if (message.ctype !== undefined && message.ctype !== null) {
                            object.ctype = options.enums === String ? $types[0][message.ctype] : message.ctype;
                        }
                        break;

                    case "packed":
                        if (message.packed !== undefined && message.packed !== null) {
                            object.packed = message.packed;
                        }
                        break;

                    case "jstype":
                        if (message.jstype !== undefined && message.jstype !== null) {
                            object.jstype = options.enums === String ? $types[2][message.jstype] : message.jstype;
                        }
                        break;

                    case "lazy":
                        if (message.lazy !== undefined && message.lazy !== null) {
                            object.lazy = message.lazy;
                        }
                        break;

                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "weak":
                        if (message.weak !== undefined && message.weak !== null) {
                            object.weak = message.weak;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[6].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this FieldOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name CType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name JSType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Constructs a new OneofOptions.
             * @exports google.protobuf.OneofOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OneofOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * OneofOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[0].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[0].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[0].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[0].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.from = OneofOptions.fromObject;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[0].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this OneofOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Constructs a new EnumOptions.
             * @exports google.protobuf.EnumOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * EnumOptions allowAlias.
             * @type {boolean}
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @type {boolean}
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumOptions .jspb.test.IsExtension.simpleOption.
             * @name google.protobuf.EnumOptions#.jspb.test.IsExtension.simpleOption
             * @type {string}
             */
            EnumOptions.prototype[".jspb.test.IsExtension.simpleOption"] = "";

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.allowAlias !== undefined && message.allowAlias !== false) {
                    writer.uint32(16).bool(message.allowAlias);
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(24).bool(message.deprecated);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[2].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                if (message[".jspb.test.IsExtension.simpleOption"] !== undefined && message[".jspb.test.IsExtension.simpleOption"] !== "") {
                    writer.uint32(336904306).string(message[".jspb.test.IsExtension.simpleOption"]);
                }
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;

                    case 3:
                        message.deprecated = reader.bool();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[2].decode(reader, reader.uint32()));
                        break;

                    case 42113038:
                        message[".jspb.test.IsExtension.simpleOption"] = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (message.allowAlias !== undefined) {
                    if (typeof message.allowAlias !== "boolean") {
                        return "allowAlias: boolean expected";
                    }
                }
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[2].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                if (message[".jspb.test.IsExtension.simpleOption"] !== undefined) {
                    if (!$util.isString(message[".jspb.test.IsExtension.simpleOption"])) {
                        return ".jspb.test.IsExtension.simpleOption: string expected";
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias !== undefined && object.allowAlias !== null) {
                    message.allowAlias = Boolean(object.allowAlias);
                }
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[2].fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".jspb.test.IsExtension.simpleOption"] !== undefined && object[".jspb.test.IsExtension.simpleOption"] !== null) {
                    message[".jspb.test.IsExtension.simpleOption"] = String(object[".jspb.test.IsExtension.simpleOption"]);
                }
                return message;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.from = EnumOptions.fromObject;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                    object[".jspb.test.IsExtension.simpleOption"] = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "allowAlias":
                        if (message.allowAlias !== undefined && message.allowAlias !== null) {
                            object.allowAlias = message.allowAlias;
                        }
                        break;

                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[2].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;

                    case ".jspb.test.IsExtension.simpleOption":
                        if (message[".jspb.test.IsExtension.simpleOption"] !== undefined && message[".jspb.test.IsExtension.simpleOption"] !== null) {
                            object[".jspb.test.IsExtension.simpleOption"] = message[".jspb.test.IsExtension.simpleOption"];
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Constructs a new EnumValueOptions.
             * @exports google.protobuf.EnumValueOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * EnumValueOptions deprecated.
             * @type {boolean}
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(8).bool(message.deprecated);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[1].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[1].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[1].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[1].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.from = EnumValueOptions.fromObject;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.deprecated = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[1].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumValueOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Constructs a new ServiceOptions.
             * @exports google.protobuf.ServiceOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * ServiceOptions deprecated.
             * @type {boolean}
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(264).bool(message.deprecated);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[1].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[1].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[1].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[1].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.from = ServiceOptions.fromObject;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.deprecated = false;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[1].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this ServiceOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Constructs a new MethodOptions.
             * @exports google.protobuf.MethodOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MethodOptions(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * MethodOptions deprecated.
             * @type {boolean}
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotencyLevel.
             * @type {number}
             */
            MethodOptions.prototype.idempotencyLevel = undefined;

            /**
             * MethodOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.MethodOptions.IdempotencyLevel",
                2: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.deprecated !== undefined && message.deprecated !== false) {
                    writer.uint32(264).bool(message.deprecated);
                }
                if (message.idempotencyLevel !== undefined && message.idempotencyLevel !== undefined) {
                    writer.uint32(272).uint32(message.idempotencyLevel);
                }
                if (message.uninterpretedOption) {
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        $types[2].encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;

                    case 34:
                        message.idempotencyLevel = reader.uint32();
                        break;

                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length)) {
                            message.uninterpretedOption = [];
                        }
                        message.uninterpretedOption.push($types[2].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (message.deprecated !== undefined) {
                    if (typeof message.deprecated !== "boolean") {
                        return "deprecated: boolean expected";
                    }
                }
                if (message.idempotencyLevel !== undefined) {
                    switch (message.idempotencyLevel) {
                    default:
                        return "idempotencyLevel: enum value expected";

                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (message.uninterpretedOption !== undefined) {
                    if (!Array.isArray(message.uninterpretedOption)) {
                        return "uninterpretedOption: array expected";
                    }
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var err = $types[2].verify(message.uninterpretedOption[i]);
                        if (err) {
                            return "uninterpretedOption." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated !== undefined && object.deprecated !== null) {
                    message.deprecated = Boolean(object.deprecated);
                }
                switch (object.idempotencyLevel) {
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotencyLevel = 0;
                    break;

                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotencyLevel = 1;
                    break;

                case "IDEMPOTENT":
                case 2:
                    message.idempotencyLevel = 2;
                    break;
                }
                if (object.uninterpretedOption) {
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        message.uninterpretedOption[i] = $types[2].fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodOptions.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.from = MethodOptions.fromObject;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                }
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotencyLevel = options.enums === String ? undefined : undefined;
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "deprecated":
                        if (message.deprecated !== undefined && message.deprecated !== null) {
                            object.deprecated = message.deprecated;
                        }
                        break;

                    case "idempotencyLevel":
                        if (message.idempotencyLevel !== undefined && message.idempotencyLevel !== null) {
                            object.idempotencyLevel = options.enums === String ? $types[1][message.idempotencyLevel] : message.idempotencyLevel;
                        }
                        break;

                    case "uninterpretedOption":
                        if (message.uninterpretedOption.length) {
                            object.uninterpretedOption = [];
                            for (var j = 0; j < message.uninterpretedOption.length; ++j) {
                                object.uninterpretedOption[j] = $types[2].toObject(message.uninterpretedOption[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this MethodOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * IdempotencyLevel enum.
             * @name IdempotencyLevel
             * @memberof google.protobuf.MethodOptions
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Constructs a new UninterpretedOption.
             * @exports google.protobuf.UninterpretedOption
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * UninterpretedOption name.
             * @type {Array.<google.protobuf.UninterpretedOption.NamePart>}
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @type {string}
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @type {number|$protobuf.Long}
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @type {number|$protobuf.Long}
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @type {number}
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @type {Uint8Array}
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @type {string}
             */
            UninterpretedOption.prototype.aggregateValue = "";

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.UninterpretedOption.NamePart"
            }; $lazyTypes.push($types);

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.name) {
                    for (var i = 0; i < message.name.length; ++i) {
                        $types[0].encode(message.name[i], writer.uint32(18).fork()).ldelim();
                    }
                }
                if (message.identifierValue !== undefined && message.identifierValue !== "") {
                    writer.uint32(26).string(message.identifierValue);
                }
                if (message.positiveIntValue !== undefined && message.positiveIntValue !== null && $util.longNe(message.positiveIntValue, 0, 0)) {
                    writer.uint32(32).uint64(message.positiveIntValue);
                }
                if (message.negativeIntValue !== undefined && message.negativeIntValue !== null && $util.longNe(message.negativeIntValue, 0, 0)) {
                    writer.uint32(40).int64(message.negativeIntValue);
                }
                if (message.doubleValue !== undefined && message.doubleValue !== 0) {
                    writer.uint32(49).double(message.doubleValue);
                }
                if (message.stringValue && message.stringValue.length) {
                    writer.uint32(58).bytes(message.stringValue);
                }
                if (message.aggregateValue !== undefined && message.aggregateValue !== "") {
                    writer.uint32(66).string(message.aggregateValue);
                }
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length)) {
                            message.name = [];
                        }
                        message.name.push($types[0].decode(reader, reader.uint32()));
                        break;

                    case 3:
                        message.identifierValue = reader.string();
                        break;

                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;

                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;

                    case 6:
                        message.doubleValue = reader.double();
                        break;

                    case 7:
                        message.stringValue = reader.bytes();
                        break;

                    case 8:
                        message.aggregateValue = reader.string();
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!Array.isArray(message.name)) {
                        return "name: array expected";
                    }
                    for (var i = 0; i < message.name.length; ++i) {
                        var err = $types[0].verify(message.name[i]);
                        if (err) {
                            return "name." + err;
                        }
                    }
                }
                if (message.identifierValue !== undefined) {
                    if (!$util.isString(message.identifierValue)) {
                        return "identifierValue: string expected";
                    }
                }
                if (message.positiveIntValue !== undefined) {
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high))) {
                        return "positiveIntValue: integer|Long expected";
                    }
                }
                if (message.negativeIntValue !== undefined) {
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high))) {
                        return "negativeIntValue: integer|Long expected";
                    }
                }
                if (message.doubleValue !== undefined) {
                    if (typeof message.doubleValue !== "number") {
                        return "doubleValue: number expected";
                    }
                }
                if (message.stringValue !== undefined) {
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue))) {
                        return "stringValue: buffer expected";
                    }
                }
                if (message.aggregateValue !== undefined) {
                    if (!$util.isString(message.aggregateValue)) {
                        return "aggregateValue: string expected";
                    }
                }
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        message.name[i] = $types[0].fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue !== undefined && object.identifierValue !== null) {
                    message.identifierValue = String(object.identifierValue);
                }
                if (object.positiveIntValue !== undefined && object.positiveIntValue !== null) {
                    if ($util.Long) {
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    } else {
                        if (typeof object.positiveIntValue === "string") {
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        } else {
                            if (typeof object.positiveIntValue === "number") {
                                message.positiveIntValue = object.positiveIntValue;
                            } else {
                                if (typeof object.positiveIntValue === "object") {
                                    message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low, object.positiveIntValue.high).toNumber(true);
                                }
                            }
                        }
                    }
                }
                if (object.negativeIntValue !== undefined && object.negativeIntValue !== null) {
                    if ($util.Long) {
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    } else {
                        if (typeof object.negativeIntValue === "string") {
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        } else {
                            if (typeof object.negativeIntValue === "number") {
                                message.negativeIntValue = object.negativeIntValue;
                            } else {
                                if (typeof object.negativeIntValue === "object") {
                                    message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low, object.negativeIntValue.high).toNumber();
                                }
                            }
                        }
                    }
                }
                if (object.doubleValue !== undefined && object.doubleValue !== null) {
                    message.doubleValue = Number(object.doubleValue);
                }
                if (object.stringValue !== undefined && object.stringValue !== null) {
                    if (typeof object.stringValue === "string") {
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    } else {
                        if (object.stringValue && object.stringValue.length) {
                            message.stringValue = object.stringValue;
                        }
                    }
                }
                if (object.aggregateValue !== undefined && object.aggregateValue !== null) {
                    message.aggregateValue = String(object.aggregateValue);
                }
                return message;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.UninterpretedOption.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.from = UninterpretedOption.fromObject;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.name = [];
                }
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else {
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else {
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    }
                    object.doubleValue = 0;
                    object.stringValue = options.bytes === String ? "" : [];
                    object.aggregateValue = "";
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "name":
                        if (message.name.length) {
                            object.name = [];
                            for (var j = 0; j < message.name.length; ++j) {
                                object.name[j] = $types[0].toObject(message.name[j], options);
                            }
                        }
                        break;

                    case "identifierValue":
                        if (message.identifierValue !== undefined && message.identifierValue !== null) {
                            object.identifierValue = message.identifierValue;
                        }
                        break;

                    case "positiveIntValue":
                        if (message.positiveIntValue !== undefined && message.positiveIntValue !== null) {
                            if (typeof message.positiveIntValue === "number") {
                                object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                            } else {
                                object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low, message.positiveIntValue.high).toNumber(true) : message.positiveIntValue;
                            }
                        }
                        break;

                    case "negativeIntValue":
                        if (message.negativeIntValue !== undefined && message.negativeIntValue !== null) {
                            if (typeof message.negativeIntValue === "number") {
                                object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                            } else {
                                object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low, message.negativeIntValue.high).toNumber() : message.negativeIntValue;
                            }
                        }
                        break;

                    case "doubleValue":
                        if (message.doubleValue !== undefined && message.doubleValue !== null) {
                            object.doubleValue = message.doubleValue;
                        }
                        break;

                    case "stringValue":
                        if (message.stringValue !== undefined && message.stringValue !== null) {
                            object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                        }
                        break;

                    case "aggregateValue":
                        if (message.aggregateValue !== undefined && message.aggregateValue !== null) {
                            object.aggregateValue = message.aggregateValue;
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this UninterpretedOption message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Constructs a new NamePart.
                 * @exports google.protobuf.UninterpretedOption.NamePart
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * NamePart namePart.
                 * @type {string}
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @type {boolean}
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    writer.uint32(10).string(message.namePart);
                    writer.uint32(16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;

                        case 2:
                            message.isExtension = reader.bool();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (!$util.isString(message.namePart)) {
                        return "namePart: string expected";
                    }
                    if (typeof message.isExtension !== "boolean") {
                        return "isExtension: boolean expected";
                    }
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart !== undefined && object.namePart !== null) {
                        message.namePart = String(object.namePart);
                    }
                    if (object.isExtension !== undefined && object.isExtension !== null) {
                        message.isExtension = Boolean(object.isExtension);
                    }
                    return message;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.UninterpretedOption.NamePart.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.from = NamePart.fromObject;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "namePart":
                            if (message.namePart !== undefined && message.namePart !== null) {
                                object.namePart = message.namePart;
                            }
                            break;

                        case "isExtension":
                            if (message.isExtension !== undefined && message.isExtension !== null) {
                                object.isExtension = message.isExtension;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this NamePart message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this NamePart to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Constructs a new SourceCodeInfo.
             * @exports google.protobuf.SourceCodeInfo
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * SourceCodeInfo location.
             * @type {Array.<google.protobuf.SourceCodeInfo.Location>}
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.SourceCodeInfo.Location"
            }; $lazyTypes.push($types);

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.location) {
                    for (var i = 0; i < message.location.length; ++i) {
                        $types[0].encode(message.location[i], writer.uint32(10).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length)) {
                            message.location = [];
                        }
                        message.location.push($types[0].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (message.location !== undefined) {
                    if (!Array.isArray(message.location)) {
                        return "location: array expected";
                    }
                    for (var i = 0; i < message.location.length; ++i) {
                        var err = $types[0].verify(message.location[i]);
                        if (err) {
                            return "location." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        message.location[i] = $types[0].fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.SourceCodeInfo.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.from = SourceCodeInfo.fromObject;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.location = [];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "location":
                        if (message.location.length) {
                            object.location = [];
                            for (var j = 0; j < message.location.length; ++j) {
                                object.location[j] = $types[0].toObject(message.location[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this SourceCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Constructs a new Location.
                 * @exports google.protobuf.SourceCodeInfo.Location
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Location(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Location path.
                 * @type {Array.<number>}
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @type {Array.<number>}
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @type {string}
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @type {string}
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @type {Array.<string>}
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.path && message.path.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.path.length; ++i) {
                            writer.int32(message.path[i]);
                        }
                        writer.ldelim();
                    }
                    if (message.span && message.span.length) {
                        writer.uint32(18).fork();
                        for (var i = 0; i < message.span.length; ++i) {
                            writer.int32(message.span[i]);
                        }
                        writer.ldelim();
                    }
                    if (message.leadingComments !== undefined && message.leadingComments !== "") {
                        writer.uint32(26).string(message.leadingComments);
                    }
                    if (message.trailingComments !== undefined && message.trailingComments !== "") {
                        writer.uint32(34).string(message.trailingComments);
                    }
                    if (message.leadingDetachedComments) {
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i) {
                            writer.uint32(50).string(message.leadingDetachedComments[i]);
                        }
                    }
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length)) {
                                message.path = [];
                            }
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    message.path.push(reader.int32());
                                }
                            } else {
                                message.path.push(reader.int32());
                            }
                            break;

                        case 2:
                            if (!(message.span && message.span.length)) {
                                message.span = [];
                            }
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    message.span.push(reader.int32());
                                }
                            } else {
                                message.span.push(reader.int32());
                            }
                            break;

                        case 3:
                            message.leadingComments = reader.string();
                            break;

                        case 4:
                            message.trailingComments = reader.string();
                            break;

                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length)) {
                                message.leadingDetachedComments = [];
                            }
                            message.leadingDetachedComments.push(reader.string());
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (message.path !== undefined) {
                        if (!Array.isArray(message.path)) {
                            return "path: array expected";
                        }
                        for (var i = 0; i < message.path.length; ++i) {
                            if (!$util.isInteger(message.path[i])) {
                                return "path: integer[] expected";
                            }
                        }
                    }
                    if (message.span !== undefined) {
                        if (!Array.isArray(message.span)) {
                            return "span: array expected";
                        }
                        for (var i = 0; i < message.span.length; ++i) {
                            if (!$util.isInteger(message.span[i])) {
                                return "span: integer[] expected";
                            }
                        }
                    }
                    if (message.leadingComments !== undefined) {
                        if (!$util.isString(message.leadingComments)) {
                            return "leadingComments: string expected";
                        }
                    }
                    if (message.trailingComments !== undefined) {
                        if (!$util.isString(message.trailingComments)) {
                            return "trailingComments: string expected";
                        }
                    }
                    if (message.leadingDetachedComments !== undefined) {
                        if (!Array.isArray(message.leadingDetachedComments)) {
                            return "leadingDetachedComments: array expected";
                        }
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i) {
                            if (!$util.isString(message.leadingDetachedComments[i])) {
                                return "leadingDetachedComments: string[] expected";
                            }
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i) {
                            message.path[i] = object.path[i] | 0;
                        }
                    }
                    if (object.span) {
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i) {
                            message.span[i] = object.span[i] | 0;
                        }
                    }
                    if (object.leadingComments !== undefined && object.leadingComments !== null) {
                        message.leadingComments = String(object.leadingComments);
                    }
                    if (object.trailingComments !== undefined && object.trailingComments !== null) {
                        message.trailingComments = String(object.trailingComments);
                    }
                    if (object.leadingDetachedComments) {
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i) {
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.SourceCodeInfo.Location.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.from = Location.fromObject;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "path":
                            if (message.path.length) {
                                object.path = [];
                                for (var j = 0; j < message.path.length; ++j) {
                                    object.path[j] = message.path[j];
                                }
                            }
                            break;

                        case "span":
                            if (message.span.length) {
                                object.span = [];
                                for (var j = 0; j < message.span.length; ++j) {
                                    object.span[j] = message.span[j];
                                }
                            }
                            break;

                        case "leadingComments":
                            if (message.leadingComments !== undefined && message.leadingComments !== null) {
                                object.leadingComments = message.leadingComments;
                            }
                            break;

                        case "trailingComments":
                            if (message.trailingComments !== undefined && message.trailingComments !== null) {
                                object.trailingComments = message.trailingComments;
                            }
                            break;

                        case "leadingDetachedComments":
                            if (message.leadingDetachedComments.length) {
                                object.leadingDetachedComments = [];
                                for (var j = 0; j < message.leadingDetachedComments.length; ++j) {
                                    object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                                }
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Location message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Location to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @exports google.protobuf.GeneratedCodeInfo
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                if (properties) {
                    var keys = Object.keys(properties);
                    for (var i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * GeneratedCodeInfo annotation.
             * @type {Array.<google.protobuf.GeneratedCodeInfo.Annotation>}
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.GeneratedCodeInfo.Annotation"
            }; $lazyTypes.push($types);

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer) {
                    writer = $Writer.create();
                }
                if (message.annotation) {
                    for (var i = 0; i < message.annotation.length; ++i) {
                        $types[0].encode(message.annotation[i], writer.uint32(10).fork()).ldelim();
                    }
                }
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.decode = function decode(reader, len) {
                if (!(reader instanceof $Reader)) {
                    reader = $Reader.create(reader);
                }
                var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length)) {
                            message.annotation = [];
                        }
                        message.annotation.push($types[0].decode(reader, reader.uint32()));
                        break;

                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                return this.decode(readerOrBuffer, readerOrBuffer.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (message.annotation !== undefined) {
                    if (!Array.isArray(message.annotation)) {
                        return "annotation: array expected";
                    }
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var err = $types[0].verify(message.annotation[i]);
                        if (err) {
                            return "annotation." + err;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        message.annotation[i] = $types[0].fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.GeneratedCodeInfo.fromObject}.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.from = GeneratedCodeInfo.fromObject;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options) {
                    options = {};
                }
                var object = {};
                if (options.arrays || options.defaults) {
                    object.annotation = [];
                }
                for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                    switch (keys[i]) {
                    case "annotation":
                        if (message.annotation.length) {
                            object.annotation = [];
                            for (var j = 0; j < message.annotation.length; ++j) {
                                object.annotation[j] = $types[0].toObject(message.annotation[j], options);
                            }
                        }
                        break;
                    }
                }
                return object;
            };

            /**
             * Creates a plain object from this GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Constructs a new Annotation.
                 * @exports google.protobuf.GeneratedCodeInfo.Annotation
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Annotation(properties) {
                    if (properties) {
                        var keys = Object.keys(properties);
                        for (var i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                    }
                }

                /**
                 * Annotation path.
                 * @type {Array.<number>}
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @type {string}
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @type {number}
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @type {number}
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer) {
                        writer = $Writer.create();
                    }
                    if (message.path && message.path.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.path.length; ++i) {
                            writer.int32(message.path[i]);
                        }
                        writer.ldelim();
                    }
                    if (message.sourceFile !== undefined && message.sourceFile !== "") {
                        writer.uint32(18).string(message.sourceFile);
                    }
                    if (message.begin !== undefined && message.begin !== 0) {
                        writer.uint32(24).int32(message.begin);
                    }
                    if (message.end !== undefined && message.end !== 0) {
                        writer.uint32(32).int32(message.end);
                    }
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.decode = function decode(reader, len) {
                    if (!(reader instanceof $Reader)) {
                        reader = $Reader.create(reader);
                    }
                    var end = len === undefined ? reader.len : reader.pos + len, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length)) {
                                message.path = [];
                            }
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    message.path.push(reader.int32());
                                }
                            } else {
                                message.path.push(reader.int32());
                            }
                            break;

                        case 2:
                            message.sourceFile = reader.string();
                            break;

                        case 3:
                            message.begin = reader.int32();
                            break;

                        case 4:
                            message.end = reader.int32();
                            break;

                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.decodeDelimited = function decodeDelimited(readerOrBuffer) {
                    readerOrBuffer = readerOrBuffer instanceof $Reader ? readerOrBuffer : $Reader(readerOrBuffer);
                    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (message.path !== undefined) {
                        if (!Array.isArray(message.path)) {
                            return "path: array expected";
                        }
                        for (var i = 0; i < message.path.length; ++i) {
                            if (!$util.isInteger(message.path[i])) {
                                return "path: integer[] expected";
                            }
                        }
                    }
                    if (message.sourceFile !== undefined) {
                        if (!$util.isString(message.sourceFile)) {
                            return "sourceFile: string expected";
                        }
                    }
                    if (message.begin !== undefined) {
                        if (!$util.isInteger(message.begin)) {
                            return "begin: integer expected";
                        }
                    }
                    if (message.end !== undefined) {
                        if (!$util.isInteger(message.end)) {
                            return "end: integer expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i) {
                            message.path[i] = object.path[i] | 0;
                        }
                    }
                    if (object.sourceFile !== undefined && object.sourceFile !== null) {
                        message.sourceFile = String(object.sourceFile);
                    }
                    if (object.begin !== undefined && object.begin !== null) {
                        message.begin = object.begin | 0;
                    }
                    if (object.end !== undefined && object.end !== null) {
                        message.end = object.end | 0;
                    }
                    return message;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.GeneratedCodeInfo.Annotation.fromObject}.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.from = Annotation.fromObject;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options) {
                        options = {};
                    }
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                    }
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    for (var keys = Object.keys(message), i = 0; i < keys.length; ++i) {
                        switch (keys[i]) {
                        case "path":
                            if (message.path.length) {
                                object.path = [];
                                for (var j = 0; j < message.path.length; ++j) {
                                    object.path[j] = message.path[j];
                                }
                            }
                            break;

                        case "sourceFile":
                            if (message.sourceFile !== undefined && message.sourceFile !== null) {
                                object.sourceFile = message.sourceFile;
                            }
                            break;

                        case "begin":
                            if (message.begin !== undefined && message.begin !== null) {
                                object.begin = message.begin;
                            }
                            break;

                        case "end":
                            if (message.end !== undefined && message.end !== null) {
                                object.end = message.end;
                            }
                            break;
                        }
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Annotation message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Annotation to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

// Resolve lazy type references to actual types
$util.lazyResolve($root, $lazyTypes);

module.exports = $protobuf.roots["test_test"] = $root;
