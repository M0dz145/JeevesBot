(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"D:\\labs\\JeevesBot\\js\\app.js":[function(require,module,exports){
"use strict";

var _ang = require("./core/ang");

var _ang2 = _interopRequireDefault(_ang);

var _hello = require("./components/hello/hello.controller");

var _hello2 = _interopRequireDefault(_hello);

var _conjugator = require("./components/conjugator/conjugator.controller");

var _conjugator2 = _interopRequireDefault(_conjugator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ang2.default.init();

_ang2.default.addCommanders([new _conjugator2.default(), new _hello2.default()]);

// Start listening.
_ang2.default.start();

},{"./components/conjugator/conjugator.controller":"D:\\labs\\JeevesBot\\js\\components\\conjugator\\conjugator.controller.js","./components/hello/hello.controller":"D:\\labs\\JeevesBot\\js\\components\\hello\\hello.controller.js","./core/ang":"D:\\labs\\JeevesBot\\js\\core\\ang.js"}],"D:\\labs\\JeevesBot\\js\\components\\conjugator\\conjugator.config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _behavior = require('../../core/bot/behavior/behavior');

var _behavior2 = _interopRequireDefault(_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    behavior: {}
};

config.behavior.conjuger = {
    action: /conjuger/gi,
    reply: ['Quel mot voulez-vous conjuger ?']
};

new _behavior2.default();

config.behavior.test = {
    regexp: /./,
    reply: [new _behavior2.default('Bien et toi ?')]
};

exports.default = config;

},{"../../core/bot/behavior/behavior":"D:\\labs\\JeevesBot\\js\\core\\bot\\behavior\\behavior.js"}],"D:\\labs\\JeevesBot\\js\\components\\conjugator\\conjugator.controller.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _commandController2 = require("../../core/commands/commandController");

var _commandController3 = _interopRequireDefault(_commandController2);

var _conjugator = require("./conjugator.config");

var _conjugator2 = _interopRequireDefault(_conjugator);

var _jeeves = require("../../core/bot/jeeves");

var _jeeves2 = _interopRequireDefault(_jeeves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conjugator = function (_commandController) {
    _inherits(Conjugator, _commandController);

    function Conjugator() {
        var _this;

        _classCallCheck(this, Conjugator);

        (_this = _possibleConstructorReturn(this, (Conjugator.__proto__ || Object.getPrototypeOf(Conjugator)).call(this)), _this).setCommand('Conjugator').setRegexp([_conjugator2.default.behavior.conjuger.action]).setCallback(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _this.conjugatorController.apply(_this, args);
        });
        return _this;
    }

    _createClass(Conjugator, [{
        key: "conjugatorController",
        value: function conjugatorController() {
            var behavior = _conjugator2.default.behavior,
                phrase = _get(Conjugator.prototype.__proto__ || Object.getPrototypeOf(Conjugator.prototype), "getPhrase", this).call(this, arguments);

            _jeeves2.default.iSay(phrase);

            _jeeves2.default.whenMatch(behavior.conjuger.action, function () {
                var _Jeeves$waitMyReply;

                _jeeves2.default.reply(behavior.salutation.reply);
                (_Jeeves$waitMyReply = _jeeves2.default.waitMyReply()).then.apply(_Jeeves$waitMyReply, _toConsumableArray(function (args) {
                    debugger;
                }));
            });
        }
    }]);

    return Conjugator;
}(_commandController3.default);

exports.default = Conjugator;

},{"../../core/bot/jeeves":"D:\\labs\\JeevesBot\\js\\core\\bot\\jeeves.js","../../core/commands/commandController":"D:\\labs\\JeevesBot\\js\\core\\commands\\commandController.js","./conjugator.config":"D:\\labs\\JeevesBot\\js\\components\\conjugator\\conjugator.config.js"}],"D:\\labs\\JeevesBot\\js\\components\\hello\\hello.config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _behavior = require('../../core/bot/behavior/behavior');

var _behavior2 = _interopRequireDefault(_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    behavior: {}
};

config.behavior.salutation = {
    regexp: /^(Salut|Bonjour|Hello|Yo|Hey)/,
    reply: ['Bonjour maître !', 'Bonjour, que puis-je faire pour toi ?', 'Salut l\'ami.', 'Yo bro !']
};

config.behavior.commentVas = {
    regexp: /^(Comment\s(vas-tu|allez-vous|[çc]a\sva)|Quoi\sde\s(beau|neuf)|[Ççc]a\sva)/,
    reply: ['Je vais très bien, merci.', 'Bien et toi ?']
};

config.behavior.test = {
    regexp: /./,
    reply: [new _behavior2.default('Bien et toi ?')]
};

exports.default = config;

},{"../../core/bot/behavior/behavior":"D:\\labs\\JeevesBot\\js\\core\\bot\\behavior\\behavior.js"}],"D:\\labs\\JeevesBot\\js\\components\\hello\\hello.controller.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commandController2 = require("../../core/commands/commandController");

var _commandController3 = _interopRequireDefault(_commandController2);

var _hello = require("./hello.config");

var _hello2 = _interopRequireDefault(_hello);

var _jeeves = require("../../core/bot/jeeves");

var _jeeves2 = _interopRequireDefault(_jeeves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_commandController) {
    _inherits(Hello, _commandController);

    function Hello() {
        var _this;

        _classCallCheck(this, Hello);

        (_this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this)), _this).setCommand('Hello').setRegexp([_hello2.default.behavior.commentVas.regexp, _hello2.default.behavior.salutation.regexp]).setCallback(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _this.helloController.apply(_this, args);
        });
        return _this;
    }

    _createClass(Hello, [{
        key: "helloController",
        value: function helloController() {
            var behavior = _hello2.default.behavior,
                phrase = null,
                i = 0;

            // Récupère le premier argument valide
            while (i < arguments.length && phrase === null) {
                if (arguments[i] !== undefined) {
                    phrase = arguments[i];
                }
                i++;
            }

            _jeeves2.default.iSay(phrase);

            _jeeves2.default.whenMatch(behavior.salutation.regexp, function () {
                return _jeeves2.default.reply(behavior.salutation.reply);
            });

            _jeeves2.default.whenMatch(behavior.commentVas.regexp, function () {
                _jeeves2.default.reply(behavior.commentVas.reply);
                _jeeves2.default.waitISay(function (response) {
                    //ex: Je vais très bien
                    _jeeves2.default.reply('Cool ta vie man ;)');
                });
            });
        }
    }]);

    return Hello;
}(_commandController3.default);

exports.default = Hello;

},{"../../core/bot/jeeves":"D:\\labs\\JeevesBot\\js\\core\\bot\\jeeves.js","../../core/commands/commandController":"D:\\labs\\JeevesBot\\js\\core\\commands\\commandController.js","./hello.config":"D:\\labs\\JeevesBot\\js\\components\\hello\\hello.config.js"}],"D:\\labs\\JeevesBot\\js\\core\\ang.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ang = function () {
    function Ang() {
        _classCallCheck(this, Ang);
    }

    _createClass(Ang, null, [{
        key: 'getAng',
        value: function getAng() {
            return annyang;
        }
    }, {
        key: 'removeCommands',
        value: function removeCommands(command) {
            this.getAng().removeCommands(command);
            return this.getAng();
        }
    }, {
        key: 'addCommanders',
        value: function addCommanders(command) {
            var commands = {};
            if (Array.isArray(command)) {
                command.forEach(function (cmd) {
                    commands[cmd.getName()] = cmd.getCommand();
                });
            } else {
                commands[command.getName()] = command.getCommand();
            }
            this.getAng().addCommands(commands);
            return this.getAng();
        }
    }, {
        key: 'start',
        value: function start() {
            this.getAng().start({ autoRestart: true });
            return this.getAng();
        }
    }, {
        key: 'init',
        value: function init() {
            this.getAng().setLanguage(_constants.CONFIG.LANG);
            return this.getAng();
        }
    }]);

    return Ang;
}();

exports.default = Ang;

},{"./constants/constants":"D:\\labs\\JeevesBot\\js\\core\\constants\\constants.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\behavior\\behavior.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Behavior = function () {
    function Behavior() {
        _classCallCheck(this, Behavior);

        this.action = null;
        this.subject = null;
        this.reply = null;
    }

    _createClass(Behavior, [{
        key: "getReply",
        value: function getReply() {
            return this.reply;
        }
    }, {
        key: "setReply",
        value: function setReply(value) {
            this.reply = value;
            return this;
        }
    }, {
        key: "getSubject",
        value: function getSubject() {
            return this.subject;
        }
    }, {
        key: "setSubject",
        value: function setSubject(value) {
            this.subject = value;
            return this;
        }
    }, {
        key: "getAction",
        value: function getAction() {
            return this.action;
        }
    }, {
        key: "setAction",
        value: function setAction(value) {
            this.action = value;
            return this;
        }
    }]);

    return Behavior;
}();

exports.default = Behavior;

},{}],"D:\\labs\\JeevesBot\\js\\core\\bot\\jeeves.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTMLController = require("../helpers/HTMLController");

var _HTMLController2 = _interopRequireDefault(_HTMLController);

var _humanize = require("../helpers/humanize/humanize");

var _humanize2 = _interopRequireDefault(_humanize);

var _commandController = require("../commands/commandController");

var _commandController2 = _interopRequireDefault(_commandController);

var _ang = require("../ang");

var _ang2 = _interopRequireDefault(_ang);

var _behavior = require("./behavior/behavior");

var _behavior2 = _interopRequireDefault(_behavior);

var _speak = require("./speak/speak");

var _speak2 = _interopRequireDefault(_speak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jeeves = function () {
    function Jeeves() {
        _classCallCheck(this, Jeeves);

        console.log('New Jeeves created');
        this.HTMLController = new _HTMLController2.default();
        this.say = null;
        this.waitListen = false;
        this.waitReplyCallback = null;

        this.spirit = {
            friendly: false
        };
    }

    _createClass(Jeeves, [{
        key: "getSpirit",
        value: function getSpirit() {
            return this.spirit;
        }
    }, {
        key: "getISay",
        value: function getISay() {
            return this.say;
        }
    }, {
        key: "iSay",
        value: function iSay(text) {
            var speakCtrl = new _speak2.default(text);
            this.say = _humanize2.default.replyFormat(text);

            return this;
        }
    }, {
        key: "waitMyReply",
        value: function waitMyReply() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.waitListen = true;
                var commandCtrl = new _commandController2.default();

                commandCtrl.setWaitReply(function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _ang2.default.removeCommands(commandCtrl.getName());
                    _this.waitListen = false;
                    resolve(args);
                });

                _ang2.default.addCommanders(commandCtrl);
            });
        }
    }, {
        key: "whenMatch",
        value: function whenMatch(match, callback) {
            var regexp = new RegExp(match);

            if (regexp.test(this.getISay())) {
                callback.apply(this);
            }
            return this;
        }
    }, {
        key: "reply",
        value: function reply(_reply) {
            this.HTMLController.addCollectionItem(this.getISay(), this.chooseReply(_reply));
            return this;
        }
    }, {
        key: "chooseReply",
        value: function chooseReply(replys) {
            var replySelected = replys[Math.floor(Math.random() * replys.length)];
            if (this.getSpirit().friendly) {
                // replySelected = Humanize.tutoie(replySelected)
            } else {
                    // replySelected = Humanize.vouvoie(replySelected)
                }
            return replySelected;

            // replys.filter((element, index, array) => {
            //     if(element instanceof Behavior) {
            //         if(this.getSpirit().friendly) {
            //
            //         }
            //         // if(element.getFriendly() !== null) {
            //         //     if((this.getSpirit().friendly === true && element.getFriendly() === true) || (this.getSpirit().friendly === false && element.getFriendly() === false)) {
            //         //         return true
            //         //     }
            //         // }
            //     }
            // })
        }
    }]);

    return Jeeves;
}();

exports.default = new Jeeves();

},{"../ang":"D:\\labs\\JeevesBot\\js\\core\\ang.js","../commands/commandController":"D:\\labs\\JeevesBot\\js\\core\\commands\\commandController.js","../helpers/HTMLController":"D:\\labs\\JeevesBot\\js\\core\\helpers\\HTMLController.js","../helpers/humanize/humanize":"D:\\labs\\JeevesBot\\js\\core\\helpers\\humanize\\humanize.js","./behavior/behavior":"D:\\labs\\JeevesBot\\js\\core\\bot\\behavior\\behavior.js","./speak/speak":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\speak.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbsController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _verbsList = require("./verbs/verbsList");

var _verbsList2 = _interopRequireDefault(_verbsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var verbsController = function () {
    function verbsController() {
        _classCallCheck(this, verbsController);
    }

    _createClass(verbsController, null, [{
        key: "getVerbsAuxiliaires",


        /**
         * Récupère les verbes auxiliaires
         *
         * @returns {Array.<T>|*|{TAG, CLASS, ATTR, CHILD, PSEUDO}}
         */
        value: function getVerbsAuxiliaires() {
            return _verbsList2.default.filter(function (verb) {
                return verb.getIsAuxiliaire();
            });
        }

        /**
         * Permet de rechercher un verbe depuis n'importe quel verbe conjugé
         *
         * @param verbToFind
         * @returns {*}
         */

    }, {
        key: "find",
        value: function find(verbToFind) {
            var findVerbWithConjugations = function findVerbWithConjugations(verb) {
                var conjugatedTimes = verb.getConjugatedVerb();

                for (var categoryName in conjugatedTimes) {
                    // indicatif...
                    for (var timeName in conjugatedTimes[categoryName]) {
                        // present, future...
                        for (var i = 0; i < conjugatedTimes[categoryName][timeName].length; i++) {
                            // iront...
                            var verbConjugated = conjugatedTimes[categoryName][timeName][i];

                            if (verbConjugated === verbToFind) {
                                // Le verbe a été trouvé, on le renvoie directement
                                verbConjugated.setIsConjugated({
                                    categoryName: categoryName,
                                    timeName: timeName
                                });
                                return verbConjugated;
                            }
                        }
                    }
                }
                return false;
            };

            // Find in verbs auxiliaires
            var verbsAuxiliaires = this.getVerbsAuxiliaires();
            for (var key in verbsAuxiliaires) {
                return findVerbWithConjugations(verbsAuxiliaires[key]);
            }

            // Find in list of verbs
            var verbsFilteredByRadical = _verbsList2.default.filter(function (verb) {
                // On a déjà vérifié dans les verbs auxiliaires
                if (verb.getIsAuxiliaire()) {
                    return false;
                }
                // On vérifie par rapport au radical
                var radicalLength = verb.getRadical().length;
                return verb.getVerbName().substring(0, radicalLength) === verbToFind.substring(0, radicalLength);
            });

            // On va rechercher le verbe en essayant de conjuger ce dernier avec les terminaisons des verbes filtrés
            for (var _key in verbsFilteredByRadical) {
                return findVerbWithConjugations(verbsFilteredByRadical[_key]);
            }

            return false;
        }
    }]);

    return verbsController;
}();

exports.default = verbsController;

},{"./verbs/verbsList":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\verbsList.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\conjugation.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var conjugation = function () {
    function conjugation(conjugationObject) {
        _classCallCheck(this, conjugation);

        this.conjugationObject = conjugationObject;
        this.name = null;

        this.init();
    }

    _createClass(conjugation, [{
        key: 'init',
        value: function init() {
            this.setName(this.getConjugationObject()['-name']);
        }
    }, {
        key: 'getTimes',
        value: function getTimes() {
            var times = {};
            for (var categoryKey in this.getConjugationObject()) {
                if (categoryKey !== '-name') {
                    if (times[categoryKey] === undefined) {
                        times[categoryKey] = [];
                    }
                    for (var timeKey in this.getConjugationObject()[categoryKey]) {
                        times[categoryKey].push(timeKey);
                    }
                }
            }

            return times;
        }
    }, {
        key: 'getTerminaisonsByTimes',
        value: function getTerminaisonsByTimes() {
            var _this = this;

            var timesObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var returned = {};
            var formatTime = function formatTime(time) {
                var tmp = [];
                if (time.p !== undefined) {
                    time.p.forEach(function (value) {
                        tmp.push(value.i);
                    });
                }
                return tmp;
            };

            var _loop = function _loop(categoryName) {
                var category = _this.getConjugationObject()[categoryName],
                    times = timesObject[categoryName];
                returned[categoryName] = {};

                if (Array.isArray(times)) {
                    times.forEach(function (time) {
                        returned[categoryName][time] = formatTime(category[time]);
                    });
                } else {
                    returned[categoryName][times] = formatTime(category[times]);
                }
            };

            for (var categoryName in timesObject) {
                _loop(categoryName);
            }

            return returned;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'setName',
        value: function setName(value) {
            this.name = value;
            return this;
        }
    }, {
        key: 'getConjugationObject',
        value: function getConjugationObject() {
            return this.conjugationObject;
        }
    }, {
        key: 'setConjugationObject',
        value: function setConjugationObject(value) {
            this.conjugationObject = value;
            return this;
        }
    }]);

    return conjugation;
}();

exports.default = conjugation;

},{}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\conjugationsList.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _conjugation = require("./conjugation");

var _conjugation2 = _interopRequireDefault(_conjugation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONJUGATIONS_LIST = [new _conjugation2.default({
    "-name": "pla:cer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "cer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ce" }, { "i": "ces" }, { "i": "ce" }, { "i": "çons" }, { "i": "cez" }, { "i": "cent" }]
        },
        "imperfect": {
            "p": [{ "i": "çais" }, { "i": "çais" }, { "i": "çait" }, { "i": "cions" }, { "i": "ciez" }, { "i": "çaient" }]
        },
        "future": {
            "p": [{ "i": "cerai" }, { "i": "ceras" }, { "i": "cera" }, { "i": "cerons" }, { "i": "cerez" }, { "i": "ceront" }]
        },
        "simple-past": {
            "p": [{ "i": "çai" }, { "i": "ças" }, { "i": "ça" }, { "i": "çâmes" }, { "i": "çâtes" }, { "i": "cèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "cerais" }, { "i": "cerais" }, { "i": "cerait" }, { "i": "cerions" }, { "i": "ceriez" }, { "i": "ceraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ce" }, { "i": "ces" }, { "i": "ce" }, { "i": "cions" }, { "i": "ciez" }, { "i": "cent" }]
        },
        "imperfect": {
            "p": [{ "i": "çasse" }, { "i": "çasses" }, { "i": "çât" }, { "i": "çassions" }, { "i": "çassiez" }, { "i": "çassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ce" }, { "i": "çons" }, { "i": "cez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "çant" }
        },
        "past-participle": {
            "p": [{ "i": "cé" }, { "i": "cés" }, { "i": "cée" }, { "i": "cées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "référenci:er",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "er" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ons" }, { "i": "ez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "erai" }, { "i": "eras" }, { "i": "era" }, { "i": "erons" }, { "i": "erez" }, { "i": "eront" }]
        },
        "simple-past": {
            "p": [{ "i": "ai" }, { "i": "as" }, { "i": "a" }, { "i": "âmes" }, { "i": "âtes" }, { "i": "èrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "erais" }, { "i": "erais" }, { "i": "erait" }, { "i": "erions" }, { "i": "eriez" }, { "i": "eraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "asse" }, { "i": "asses" }, { "i": "ât" }, { "i": "assions" }, { "i": "assiez" }, { "i": "assent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "e" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "é" }, { "i": "és" }, { "i": "ée" }, { "i": "ées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "dép:ecer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ecer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["ece", "èce"]
            }, {
                "i": ["eces", "èces"]
            }, {
                "i": ["ece", "èce"]
            }, { "i": "eçons" }, { "i": "ecez" }, {
                "i": ["ecent", "ècent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "eçais" }, { "i": "eçais" }, { "i": "eçait" }, { "i": "ecions" }, { "i": "eciez" }, { "i": "eçaient" }]
        },
        "future": {
            "p": [{
                "i": ["ecerai", "ècerai"]
            }, {
                "i": ["eceras", "èceras"]
            }, {
                "i": ["ecera", "ècera"]
            }, {
                "i": ["ecerons", "ècerons"]
            }, {
                "i": ["ecerez", "ècerez"]
            }, {
                "i": ["eceront", "èceront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "eçai" }, { "i": "eças" }, { "i": "eça" }, { "i": "eçâmes" }, { "i": "eçâtes" }, { "i": "ecèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["ecerais", "ècerais"]
            }, {
                "i": ["ecerais", "ècerais"]
            }, {
                "i": ["ecerait", "ècerait"]
            }, {
                "i": ["ecerions", "ècerions"]
            }, {
                "i": ["eceriez", "èceriez"]
            }, {
                "i": ["eceraient", "èceraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{
                "i": ["ece", "èce"]
            }, {
                "i": ["eces", "èces"]
            }, {
                "i": ["ece", "èce"]
            }, { "i": "ecions" }, { "i": "eciez" }, {
                "i": ["ecent", "ècent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "eçasse" }, { "i": "eçasses" }, { "i": "eçât" }, { "i": "eçassions" }, { "i": "eçassiez" }, { "i": "eçassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{
                "i": ["ece", "èce"]
            }, { "i": "eçons" }, { "i": "ecez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "eçant" }
        },
        "past-participle": {
            "p": [{ "i": "ecé" }, { "i": "ecés" }, { "i": "ecée" }, { "i": "ecées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "man:ger",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ger" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ge" }, { "i": "ges" }, { "i": "ge" }, { "i": "geons" }, { "i": "gez" }, { "i": "gent" }]
        },
        "imperfect": {
            "p": [{ "i": "geais" }, { "i": "geais" }, { "i": "geait" }, { "i": "gions" }, { "i": "giez" }, { "i": "geaient" }]
        },
        "future": {
            "p": [{ "i": "gerai" }, { "i": "geras" }, { "i": "gera" }, { "i": "gerons" }, { "i": "gerez" }, { "i": "geront" }]
        },
        "simple-past": {
            "p": [{ "i": "geai" }, { "i": "geas" }, { "i": "gea" }, { "i": "geâmes" }, { "i": "geâtes" }, { "i": "gèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "gerais" }, { "i": "gerais" }, { "i": "gerait" }, { "i": "gerions" }, { "i": "geriez" }, { "i": "geraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ge" }, { "i": "ges" }, { "i": "ge" }, { "i": "gions" }, { "i": "giez" }, { "i": "gent" }]
        },
        "imperfect": {
            "p": [{ "i": "geasse" }, { "i": "geasses" }, { "i": "geât" }, { "i": "geassions" }, { "i": "geassiez" }, { "i": "geassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ge" }, { "i": "geons" }, { "i": "gez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "geant" }
        },
        "past-participle": {
            "p": [{ "i": "gé" }, { "i": "gés" }, { "i": "gée" }, { "i": "gées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "pa:yer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "yer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["ie", "ye"]
            }, {
                "i": ["ies", "yes"]
            }, {
                "i": ["ie", "ye"]
            }, { "i": "yons" }, { "i": "yez" }, {
                "i": ["ient", "yent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{
                "i": ["ierai", "yerai"]
            }, {
                "i": ["ieras", "yeras"]
            }, {
                "i": ["iera", "yera"]
            }, {
                "i": ["ierons", "yerons"]
            }, {
                "i": ["ierez", "yerez"]
            }, {
                "i": ["ieront", "yeront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "yai" }, { "i": "yas" }, { "i": "ya" }, { "i": "yâmes" }, { "i": "yâtes" }, { "i": "yèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["ierais", "yerais"]
            }, {
                "i": ["ierais", "yerais"]
            }, {
                "i": ["ierait", "yerait"]
            }, {
                "i": ["ierions", "yerions"]
            }, {
                "i": ["ieriez", "yeriez"]
            }, {
                "i": ["ieraient", "yeraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{
                "i": ["ie", "ye"]
            }, {
                "i": ["ies", "yes"]
            }, {
                "i": ["ie", "ye"]
            }, { "i": "yions" }, { "i": "yiez" }, {
                "i": ["ient", "yent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "yasse" }, { "i": "yasses" }, { "i": "yât" }, { "i": "yassions" }, { "i": "yassiez" }, { "i": "yassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{
                "i": ["ie", "ye"]
            }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "yé" }, { "i": "yés" }, { "i": "yée" }, { "i": "yées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "netto:yer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "yer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yons" }, { "i": "yez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{ "i": "ierai" }, { "i": "ieras" }, { "i": "iera" }, { "i": "ierons" }, { "i": "ierez" }, { "i": "ieront" }]
        },
        "simple-past": {
            "p": [{ "i": "yai" }, { "i": "yas" }, { "i": "ya" }, { "i": "yâmes" }, { "i": "yâtes" }, { "i": "yèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ierais" }, { "i": "ierais" }, { "i": "ierait" }, { "i": "ierions" }, { "i": "ieriez" }, { "i": "ieraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yions" }, { "i": "yiez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yasse" }, { "i": "yasses" }, { "i": "yât" }, { "i": "yassions" }, { "i": "yassiez" }, { "i": "yassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ie" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "yé" }, { "i": "yés" }, { "i": "yée" }, { "i": "yées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "grasse:yer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "yer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ye" }, { "i": "yes" }, { "i": "ye" }, { "i": "yons" }, { "i": "yez" }, { "i": "yent" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{ "i": "yerai" }, { "i": "yeras" }, { "i": "yera" }, { "i": "yerons" }, { "i": "yerez" }, { "i": "yeront" }]
        },
        "simple-past": {
            "p": [{ "i": "yai" }, { "i": "yas" }, { "i": "ya" }, { "i": "yâmes" }, { "i": "yâtes" }, { "i": "yèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "yerais" }, { "i": "yerais" }, { "i": "yerait" }, { "i": "yerions" }, { "i": "yeriez" }, { "i": "yeraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ye" }, { "i": "yes" }, { "i": "ye" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yent" }]
        },
        "imperfect": {
            "p": [{ "i": "yasse" }, { "i": "yasses" }, { "i": "yât" }, { "i": "yassions" }, { "i": "yassiez" }, { "i": "yassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ye" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "yé" }, { "i": "yés" }, { "i": "yée" }, { "i": "yées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "app:eler",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eler" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "elle" }, { "i": "elles" }, { "i": "elle" }, { "i": "elons" }, { "i": "elez" }, { "i": "ellent" }]
        },
        "imperfect": {
            "p": [{ "i": "elais" }, { "i": "elais" }, { "i": "elait" }, { "i": "elions" }, { "i": "eliez" }, { "i": "elaient" }]
        },
        "future": {
            "p": [{ "i": "ellerai" }, { "i": "elleras" }, { "i": "ellera" }, { "i": "ellerons" }, { "i": "ellerez" }, { "i": "elleront" }]
        },
        "simple-past": {
            "p": [{ "i": "elai" }, { "i": "elas" }, { "i": "ela" }, { "i": "elâmes" }, { "i": "elâtes" }, { "i": "elèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ellerais" }, { "i": "ellerais" }, { "i": "ellerait" }, { "i": "ellerions" }, { "i": "elleriez" }, { "i": "elleraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "elle" }, { "i": "elles" }, { "i": "elle" }, { "i": "elions" }, { "i": "eliez" }, { "i": "ellent" }]
        },
        "imperfect": {
            "p": [{ "i": "elasse" }, { "i": "elasses" }, { "i": "elât" }, { "i": "elassions" }, { "i": "elassiez" }, { "i": "elassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "elle" }, { "i": "elons" }, { "i": "elez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "elant" }
        },
        "past-participle": {
            "p": [{ "i": "elé" }, { "i": "elés" }, { "i": "elée" }, { "i": "elées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "p:eler",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eler" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èle" }, { "i": "èles" }, { "i": "èle" }, { "i": "elons" }, { "i": "elez" }, { "i": "èlent" }]
        },
        "imperfect": {
            "p": [{ "i": "elais" }, { "i": "elais" }, { "i": "elait" }, { "i": "elions" }, { "i": "eliez" }, { "i": "elaient" }]
        },
        "future": {
            "p": [{ "i": "èlerai" }, { "i": "èleras" }, { "i": "èlera" }, { "i": "èlerons" }, { "i": "èlerez" }, { "i": "èleront" }]
        },
        "simple-past": {
            "p": [{ "i": "elai" }, { "i": "elas" }, { "i": "ela" }, { "i": "elâmes" }, { "i": "elâtes" }, { "i": "elèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èlerais" }, { "i": "èlerais" }, { "i": "èlerait" }, { "i": "èlerions" }, { "i": "èleriez" }, { "i": "èleraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èle" }, { "i": "èles" }, { "i": "èle" }, { "i": "elions" }, { "i": "eliez" }, { "i": "èlent" }]
        },
        "imperfect": {
            "p": [{ "i": "elasse" }, { "i": "elasses" }, { "i": "elât" }, { "i": "elassions" }, { "i": "elassiez" }, { "i": "elassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èle" }, { "i": "elons" }, { "i": "elez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "elant" }
        },
        "past-participle": {
            "p": [{ "i": "elé" }, { "i": "elés" }, { "i": "elée" }, { "i": "elées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "harc:eler",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eler" }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["elle", "èle"]
            }, {
                "i": ["elles", "èles"]
            }, {
                "i": ["elle", "èle"]
            }, { "i": "elons" }, { "i": "elez" }, {
                "i": ["ellent", "èlent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "elais" }, { "i": "elais" }, { "i": "elait" }, { "i": "elions" }, { "i": "eliez" }, { "i": "elaient" }]
        },
        "future": {
            "p": [{
                "i": ["ellerai", "èlerai"]
            }, {
                "i": ["elleras", "èleras"]
            }, {
                "i": ["ellera", "èlera"]
            }, {
                "i": ["ellerons", "èlerons"]
            }, {
                "i": ["ellerez", "èlerez"]
            }, {
                "i": ["elleront", "èleront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "elai" }, { "i": "elas" }, { "i": "ela" }, { "i": "elâmes" }, { "i": "elâtes" }, { "i": "elèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["ellerais", "èlerais"]
            }, {
                "i": ["ellerais", "èlerais"]
            }, {
                "i": ["ellerait", "èlerait"]
            }, {
                "i": ["ellerions", "èlerions"]
            }, {
                "i": ["elleriez", "èleriez"]
            }, {
                "i": ["elleraient", "èleraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{
                "i": ["elle", "èle"]
            }, {
                "i": ["elles", "èles"]
            }, {
                "i": ["elle", "èle"]
            }, { "i": "elions" }, { "i": "eliez" }, {
                "i": ["ellent", "èlent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "elasse" }, { "i": "elasses" }, { "i": "elât" }, { "i": "elassions" }, { "i": "elassiez" }, { "i": "elassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{
                "i": ["elle", "èle"]
            }, { "i": "elons" }, { "i": "elez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "elant" }
        },
        "past-participle": {
            "p": [{ "i": "elé" }, { "i": "elés" }, { "i": "elée" }, { "i": "elées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "j:eter",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eter" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ette" }, { "i": "ettes" }, { "i": "ette" }, { "i": "etons" }, { "i": "etez" }, { "i": "ettent" }]
        },
        "imperfect": {
            "p": [{ "i": "etais" }, { "i": "etais" }, { "i": "etait" }, { "i": "etions" }, { "i": "etiez" }, { "i": "etaient" }]
        },
        "future": {
            "p": [{ "i": "etterai" }, { "i": "etteras" }, { "i": "ettera" }, { "i": "etterons" }, { "i": "etterez" }, { "i": "etteront" }]
        },
        "simple-past": {
            "p": [{ "i": "etai" }, { "i": "etas" }, { "i": "eta" }, { "i": "etâmes" }, { "i": "etâtes" }, { "i": "etèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "etterais" }, { "i": "etterais" }, { "i": "etterait" }, { "i": "etterions" }, { "i": "etteriez" }, { "i": "etteraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ette" }, { "i": "ettes" }, { "i": "ette" }, { "i": "etions" }, { "i": "etiez" }, { "i": "ettent" }]
        },
        "imperfect": {
            "p": [{ "i": "etasse" }, { "i": "etasses" }, { "i": "etât" }, { "i": "etassions" }, { "i": "etassiez" }, { "i": "etassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ette" }, { "i": "etons" }, { "i": "etez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "etant" }
        },
        "past-participle": {
            "p": [{ "i": "eté" }, { "i": "etés" }, { "i": "etée" }, { "i": "etées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ach:eter",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eter" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "etons" }, { "i": "etez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "etais" }, { "i": "etais" }, { "i": "etait" }, { "i": "etions" }, { "i": "etiez" }, { "i": "etaient" }]
        },
        "future": {
            "p": [{ "i": "èterai" }, { "i": "èteras" }, { "i": "ètera" }, { "i": "èterons" }, { "i": "èterez" }, { "i": "èteront" }]
        },
        "simple-past": {
            "p": [{ "i": "etai" }, { "i": "etas" }, { "i": "eta" }, { "i": "etâmes" }, { "i": "etâtes" }, { "i": "etèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èterais" }, { "i": "èterais" }, { "i": "èterait" }, { "i": "èterions" }, { "i": "èteriez" }, { "i": "èteraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "etions" }, { "i": "etiez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "etasse" }, { "i": "etasses" }, { "i": "etât" }, { "i": "etassions" }, { "i": "etassiez" }, { "i": "etassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ète" }, { "i": "etons" }, { "i": "etez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "etant" }
        },
        "past-participle": {
            "p": [{ "i": "eté" }, { "i": "etés" }, { "i": "etée" }, { "i": "etées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "héb:éter",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éter" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "étons" }, { "i": "étez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "étais" }, { "i": "étais" }, { "i": "était" }, { "i": "étions" }, { "i": "étiez" }, { "i": "étaient" }]
        },
        "future": {
            "p": [{ "i": "èterai" }, { "i": "èteras" }, { "i": "ètera" }, { "i": "èterons" }, { "i": "èterez" }, { "i": "èteront" }]
        },
        "simple-past": {
            "p": [{ "i": "étai" }, { "i": "étas" }, { "i": "éta" }, { "i": "étâmes" }, { "i": "étâtes" }, { "i": "étèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èterais" }, { "i": "èterais" }, { "i": "èterait" }, { "i": "èterions" }, { "i": "èteriez" }, { "i": "èteraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "étions" }, { "i": "étiez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "étasse" }, { "i": "étasses" }, { "i": "étât" }, { "i": "étassions" }, { "i": "étassiez" }, { "i": "étassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ète" }, { "i": "étons" }, { "i": "étez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "étant" }
        },
        "past-participle": {
            "p": [{ "i": "été" }, { "i": "étés" }, { "i": "étée" }, { "i": "étées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:emer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "emer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ème" }, { "i": "èmes" }, { "i": "ème" }, { "i": "emons" }, { "i": "emez" }, { "i": "èment" }]
        },
        "imperfect": {
            "p": [{ "i": "emais" }, { "i": "emais" }, { "i": "emait" }, { "i": "emions" }, { "i": "emiez" }, { "i": "emaient" }]
        },
        "future": {
            "p": [{ "i": "èmerai" }, { "i": "èmeras" }, { "i": "èmera" }, { "i": "èmerons" }, { "i": "èmerez" }, { "i": "èmeront" }]
        },
        "simple-past": {
            "p": [{ "i": "emai" }, { "i": "emas" }, { "i": "ema" }, { "i": "emâmes" }, { "i": "emâtes" }, { "i": "emèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èmerais" }, { "i": "èmerais" }, { "i": "èmerait" }, { "i": "èmerions" }, { "i": "èmeriez" }, { "i": "èmeraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ème" }, { "i": "èmes" }, { "i": "ème" }, { "i": "emions" }, { "i": "emiez" }, { "i": "èment" }]
        },
        "imperfect": {
            "p": [{ "i": "emasse" }, { "i": "emasses" }, { "i": "emât" }, { "i": "emassions" }, { "i": "emassiez" }, { "i": "emassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ème" }, { "i": "emons" }, { "i": "emez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "emant" }
        },
        "past-participle": {
            "p": [{ "i": "emé" }, { "i": "emés" }, { "i": "emée" }, { "i": "emées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "l:éguer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éguer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ègue" }, { "i": "ègues" }, { "i": "ègue" }, { "i": "éguons" }, { "i": "éguez" }, { "i": "èguent" }]
        },
        "imperfect": {
            "p": [{ "i": "éguais" }, { "i": "éguais" }, { "i": "éguait" }, { "i": "éguions" }, { "i": "éguiez" }, { "i": "éguaient" }]
        },
        "future": {
            "p": [{ "i": "èguerai" }, { "i": "ègueras" }, { "i": "èguera" }, { "i": "èguerons" }, { "i": "èguerez" }, { "i": "ègueront" }]
        },
        "simple-past": {
            "p": [{ "i": "éguai" }, { "i": "éguas" }, { "i": "égua" }, { "i": "éguâmes" }, { "i": "éguâtes" }, { "i": "éguèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èguerais" }, { "i": "èguerais" }, { "i": "èguerait" }, { "i": "èguerions" }, { "i": "ègueriez" }, { "i": "ègueraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ègue" }, { "i": "ègues" }, { "i": "ègue" }, { "i": "éguions" }, { "i": "éguiez" }, { "i": "èguent" }]
        },
        "imperfect": {
            "p": [{ "i": "éguasse" }, { "i": "éguasses" }, { "i": "éguât" }, { "i": "éguassions" }, { "i": "éguassiez" }, { "i": "éguassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ègue" }, { "i": "éguons" }, { "i": "éguez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "éguant" }
        },
        "past-participle": {
            "p": [{ "i": "égué" }, { "i": "égués" }, { "i": "éguée" }, { "i": "éguées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "diss:équer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "équer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èque" }, { "i": "èques" }, { "i": "èque" }, { "i": "équons" }, { "i": "équez" }, { "i": "èquent" }]
        },
        "imperfect": {
            "p": [{ "i": "équais" }, { "i": "équais" }, { "i": "équait" }, { "i": "équions" }, { "i": "équiez" }, { "i": "équaient" }]
        },
        "future": {
            "p": [{ "i": "èquerai" }, { "i": "èqueras" }, { "i": "èquera" }, { "i": "èquerons" }, { "i": "èquerez" }, { "i": "èqueront" }]
        },
        "simple-past": {
            "p": [{ "i": "équai" }, { "i": "équas" }, { "i": "équa" }, { "i": "équâmes" }, { "i": "équâtes" }, { "i": "équèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èquerais" }, { "i": "èquerais" }, { "i": "èquerait" }, { "i": "èquerions" }, { "i": "èqueriez" }, { "i": "èqueraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èque" }, { "i": "èques" }, { "i": "èque" }, { "i": "équions" }, { "i": "équiez" }, { "i": "èquent" }]
        },
        "imperfect": {
            "p": [{ "i": "équasse" }, { "i": "équasses" }, { "i": "équât" }, { "i": "équassions" }, { "i": "équassiez" }, { "i": "équassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èque" }, { "i": "équons" }, { "i": "équez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "équant" }
        },
        "past-participle": {
            "p": [{ "i": "équé" }, { "i": "équés" }, { "i": "équée" }, { "i": "équées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "rév:éler",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éler" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èle" }, { "i": "èles" }, { "i": "èle" }, { "i": "élons" }, { "i": "élez" }, { "i": "èlent" }]
        },
        "imperfect": {
            "p": [{ "i": "élais" }, { "i": "élais" }, { "i": "élait" }, { "i": "élions" }, { "i": "éliez" }, { "i": "élaient" }]
        },
        "future": {
            "p": [{
                "i": ["élerai", "èlerai"]
            }, {
                "i": ["éleras", "èleras"]
            }, {
                "i": ["élera", "èlera"]
            }, {
                "i": ["élerons", "èlerons"]
            }, {
                "i": ["élerez", "èlerez"]
            }, {
                "i": ["éleront", "èleront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "élai" }, { "i": "élas" }, { "i": "éla" }, { "i": "élâmes" }, { "i": "élâtes" }, { "i": "élèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["élerais", "èlerais"]
            }, {
                "i": ["élerais", "èlerais"]
            }, {
                "i": ["élerait", "èlerait"]
            }, {
                "i": ["élerions", "èlerions"]
            }, {
                "i": ["éleriez", "èleriez"]
            }, {
                "i": ["éleraient", "èleraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èle" }, { "i": "èles" }, { "i": "èle" }, { "i": "élions" }, { "i": "éliez" }, { "i": "èlent" }]
        },
        "imperfect": {
            "p": [{ "i": "élasse" }, { "i": "élasses" }, { "i": "élât" }, { "i": "élassions" }, { "i": "élassiez" }, { "i": "élassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èle" }, { "i": "élons" }, { "i": "élez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "élant" }
        },
        "past-participle": {
            "p": [{ "i": "élé" }, { "i": "élés" }, { "i": "élée" }, { "i": "élées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "imp:étrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "étrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ètre" }, { "i": "ètres" }, { "i": "ètre" }, { "i": "étrons" }, { "i": "étrez" }, { "i": "ètrent" }]
        },
        "imperfect": {
            "p": [{ "i": "étrais" }, { "i": "étrais" }, { "i": "étrait" }, { "i": "étrions" }, { "i": "étriez" }, { "i": "étraient" }]
        },
        "future": {
            "p": [{
                "i": ["étrerai", "ètrerai"]
            }, {
                "i": ["étreras", "ètreras"]
            }, {
                "i": ["étrera", "ètrera"]
            }, {
                "i": ["étrerons", "ètrerons"]
            }, {
                "i": ["étrerez", "ètrerez"]
            }, {
                "i": ["étreront", "ètreront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "étrai" }, { "i": "étras" }, { "i": "étra" }, { "i": "étrâmes" }, { "i": "étrâtes" }, { "i": "étrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["étrerais", "ètrerais"]
            }, {
                "i": ["étrerais", "ètrerais"]
            }, {
                "i": ["étrerait", "ètrerait"]
            }, {
                "i": ["étrerions", "ètrerions"]
            }, {
                "i": ["étreriez", "ètreriez"]
            }, {
                "i": ["étreraient", "ètreraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ètre" }, { "i": "ètres" }, { "i": "ètre" }, { "i": "étrions" }, { "i": "étriez" }, { "i": "ètrent" }]
        },
        "imperfect": {
            "p": [{ "i": "étrasse" }, { "i": "étrasses" }, { "i": "étrât" }, { "i": "étrassions" }, { "i": "étrassiez" }, { "i": "étrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ètre" }, { "i": "étrons" }, { "i": "étrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "étrant" }
        },
        "past-participle": {
            "p": [{ "i": "étré" }, { "i": "étrés" }, { "i": "étrée" }, { "i": "étrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "r:égler",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "égler" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ègle" }, { "i": "ègles" }, { "i": "ègle" }, { "i": "églons" }, { "i": "églez" }, { "i": "èglent" }]
        },
        "imperfect": {
            "p": [{ "i": "églais" }, { "i": "églais" }, { "i": "églait" }, { "i": "églions" }, { "i": "égliez" }, { "i": "églaient" }]
        },
        "future": {
            "p": [{
                "i": ["églerai", "èglerai"]
            }, {
                "i": ["égleras", "ègleras"]
            }, {
                "i": ["églera", "èglera"]
            }, {
                "i": ["églerons", "èglerons"]
            }, {
                "i": ["églerez", "èglerez"]
            }, {
                "i": ["égleront", "ègleront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "églai" }, { "i": "églas" }, { "i": "égla" }, { "i": "églâmes" }, { "i": "églâtes" }, { "i": "églèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["églerais", "èglerais"]
            }, {
                "i": ["églerais", "èglerais"]
            }, {
                "i": ["églerait", "èglerait"]
            }, {
                "i": ["églerions", "èglerions"]
            }, {
                "i": ["égleriez", "ègleriez"]
            }, {
                "i": ["égleraient", "ègleraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ègle" }, { "i": "ègles" }, { "i": "ègle" }, { "i": "églions" }, { "i": "égliez" }, { "i": "èglent" }]
        },
        "imperfect": {
            "p": [{ "i": "églasse" }, { "i": "églasses" }, { "i": "églât" }, { "i": "églassions" }, { "i": "églassiez" }, { "i": "églassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ègle" }, { "i": "églons" }, { "i": "églez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "églant" }
        },
        "past-participle": {
            "p": [{ "i": "églé" }, { "i": "églés" }, { "i": "églée" }, { "i": "églées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "r:égner",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "égner" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ègne" }, { "i": "ègnes" }, { "i": "ègne" }, { "i": "égnons" }, { "i": "égnez" }, { "i": "ègnent" }]
        },
        "imperfect": {
            "p": [{ "i": "égnais" }, { "i": "égnais" }, { "i": "égnait" }, { "i": "égnions" }, { "i": "égniez" }, { "i": "égnaient" }]
        },
        "future": {
            "p": [{
                "i": ["égnerai", "ègnerai"]
            }, {
                "i": ["égneras", "ègneras"]
            }, {
                "i": ["égnera", "ègnera"]
            }, {
                "i": ["égnerons", "ègnerons"]
            }, {
                "i": ["égnerez", "ègnerez"]
            }, {
                "i": ["égneront", "ègneront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "égnai" }, { "i": "égnas" }, { "i": "égna" }, { "i": "égnâmes" }, { "i": "égnâtes" }, { "i": "égnèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["égnerais", "ègnerais"]
            }, {
                "i": ["égnerais", "ègnerais"]
            }, {
                "i": ["égnerait", "ègnerait"]
            }, {
                "i": ["égnerions", "ègnerions"]
            }, {
                "i": ["égneriez", "ègneriez"]
            }, {
                "i": ["égneraient", "ègneraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ègne" }, { "i": "ègnes" }, { "i": "ègne" }, { "i": "égnions" }, { "i": "égniez" }, { "i": "ègnent" }]
        },
        "imperfect": {
            "p": [{ "i": "égnasse" }, { "i": "égnasses" }, { "i": "égnât" }, { "i": "égnassions" }, { "i": "égnassiez" }, { "i": "égnassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ègne" }, { "i": "égnons" }, { "i": "égnez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "égnant" }
        },
        "past-participle": {
            "p": [{ "i": "égné" }, { "i": "égnés" }, { "i": "égnée" }, { "i": "égnées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cél:ébrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ébrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èbre" }, { "i": "èbres" }, { "i": "èbre" }, { "i": "ébrons" }, { "i": "ébrez" }, { "i": "èbrent" }]
        },
        "imperfect": {
            "p": [{ "i": "ébrais" }, { "i": "ébrais" }, { "i": "ébrait" }, { "i": "ébrions" }, { "i": "ébriez" }, { "i": "ébraient" }]
        },
        "future": {
            "p": [{
                "i": ["ébrerai", "èbrerai"]
            }, {
                "i": ["ébreras", "èbreras"]
            }, {
                "i": ["ébrera", "èbrera"]
            }, {
                "i": ["ébrerons", "èbrerons"]
            }, {
                "i": ["ébrerez", "èbrerez"]
            }, {
                "i": ["ébreront", "èbreront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "ébrai" }, { "i": "ébras" }, { "i": "ébra" }, { "i": "ébrâmes" }, { "i": "ébrâtes" }, { "i": "ébrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["ébrerais", "èbrerais"]
            }, {
                "i": ["ébrerais", "èbrerais"]
            }, {
                "i": ["ébrerait", "èbrerait"]
            }, {
                "i": ["ébrerions", "èbrerions"]
            }, {
                "i": ["ébreriez", "èbreriez"]
            }, {
                "i": ["ébreraient", "èbreraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èbre" }, { "i": "èbres" }, { "i": "èbre" }, { "i": "ébrions" }, { "i": "ébriez" }, { "i": "èbrent" }]
        },
        "imperfect": {
            "p": [{ "i": "ébrasse" }, { "i": "ébrasses" }, { "i": "ébrât" }, { "i": "ébrassions" }, { "i": "ébrassiez" }, { "i": "ébrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èbre" }, { "i": "ébrons" }, { "i": "ébrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ébrant" }
        },
        "past-participle": {
            "p": [{ "i": "ébré" }, { "i": "ébrés" }, { "i": "ébrée" }, { "i": "ébrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "int:égrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "égrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ègre" }, { "i": "ègres" }, { "i": "ègre" }, { "i": "égrons" }, { "i": "égrez" }, { "i": "ègrent" }]
        },
        "imperfect": {
            "p": [{ "i": "égrais" }, { "i": "égrais" }, { "i": "égrait" }, { "i": "égrions" }, { "i": "égriez" }, { "i": "égraient" }]
        },
        "future": {
            "p": [{
                "i": ["égrerai", "ègrerai"]
            }, {
                "i": ["égreras", "ègreras"]
            }, {
                "i": ["égrera", "ègrera"]
            }, {
                "i": ["égrerons", "ègrerons"]
            }, {
                "i": ["égrerez", "ègrerez"]
            }, {
                "i": ["égreront", "ègreront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "égrai" }, { "i": "égras" }, { "i": "égra" }, { "i": "égrâmes" }, { "i": "égrâtes" }, { "i": "égrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["égrerais", "ègrerais"]
            }, {
                "i": ["égrerais", "ègrerais"]
            }, {
                "i": ["égrerait", "ègrerait"]
            }, {
                "i": ["égrerions", "ègrerions"]
            }, {
                "i": ["égreriez", "ègreriez"]
            }, {
                "i": ["égreraient", "ègreraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ègre" }, { "i": "ègres" }, { "i": "ègre" }, { "i": "égrions" }, { "i": "égriez" }, { "i": "ègrent" }]
        },
        "imperfect": {
            "p": [{ "i": "égrasse" }, { "i": "égrasses" }, { "i": "égrât" }, { "i": "égrassions" }, { "i": "égrassiez" }, { "i": "égrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ègre" }, { "i": "égrons" }, { "i": "égrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "égrant" }
        },
        "past-participle": {
            "p": [{ "i": "égré" }, { "i": "égrés" }, { "i": "égrée" }, { "i": "égrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "décr:éter",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éter" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "étons" }, { "i": "étez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "étais" }, { "i": "étais" }, { "i": "était" }, { "i": "étions" }, { "i": "étiez" }, { "i": "étaient" }]
        },
        "future": {
            "p": [{
                "i": ["éterai", "èterai"]
            }, {
                "i": ["éteras", "èteras"]
            }, {
                "i": ["étera", "ètera"]
            }, {
                "i": ["éterons", "èterons"]
            }, {
                "i": ["éterez", "èterez"]
            }, {
                "i": ["éteront", "èteront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "étai" }, { "i": "étas" }, { "i": "éta" }, { "i": "étâmes" }, { "i": "étâtes" }, { "i": "étèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["éterais", "èterais"]
            }, {
                "i": ["éterais", "èterais"]
            }, {
                "i": ["éterait", "èterait"]
            }, {
                "i": ["éterions", "èterions"]
            }, {
                "i": ["éteriez", "èteriez"]
            }, {
                "i": ["éteraient", "èteraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ète" }, { "i": "ètes" }, { "i": "ète" }, { "i": "étions" }, { "i": "étiez" }, { "i": "ètent" }]
        },
        "imperfect": {
            "p": [{ "i": "étasse" }, { "i": "étasses" }, { "i": "étât" }, { "i": "étassions" }, { "i": "étassiez" }, { "i": "étassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ète" }, { "i": "étons" }, { "i": "étez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "étant" }
        },
        "past-participle": {
            "p": [{ "i": "été" }, { "i": "étés" }, { "i": "étée" }, { "i": "étées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ali:éner",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éner" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ène" }, { "i": "ènes" }, { "i": "ène" }, { "i": "énons" }, { "i": "énez" }, { "i": "ènent" }]
        },
        "imperfect": {
            "p": [{ "i": "énais" }, { "i": "énais" }, { "i": "énait" }, { "i": "énions" }, { "i": "éniez" }, { "i": "énaient" }]
        },
        "future": {
            "p": [{
                "i": ["énerai", "ènerai"]
            }, {
                "i": ["éneras", "èneras"]
            }, {
                "i": ["énera", "ènera"]
            }, {
                "i": ["énerons", "ènerons"]
            }, {
                "i": ["énerez", "ènerez"]
            }, {
                "i": ["éneront", "èneront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "énai" }, { "i": "énas" }, { "i": "éna" }, { "i": "énâmes" }, { "i": "énâtes" }, { "i": "énèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["énerais", "ènerais"]
            }, {
                "i": ["énerais", "ènerais"]
            }, {
                "i": ["énerait", "ènerait"]
            }, {
                "i": ["énerions", "ènerions"]
            }, {
                "i": ["éneriez", "èneriez"]
            }, {
                "i": ["éneraient", "èneraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ène" }, { "i": "ènes" }, { "i": "ène" }, { "i": "énions" }, { "i": "éniez" }, { "i": "ènent" }]
        },
        "imperfect": {
            "p": [{ "i": "énasse" }, { "i": "énasses" }, { "i": "énât" }, { "i": "énassions" }, { "i": "énassiez" }, { "i": "énassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ène" }, { "i": "énons" }, { "i": "énez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "énant" }
        },
        "past-participle": {
            "p": [{ "i": "éné" }, { "i": "énés" }, { "i": "énée" }, { "i": "énées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "m:ener",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ener" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ène" }, { "i": "ènes" }, { "i": "ène" }, { "i": "enons" }, { "i": "enez" }, { "i": "ènent" }]
        },
        "imperfect": {
            "p": [{ "i": "enais" }, { "i": "enais" }, { "i": "enait" }, { "i": "enions" }, { "i": "eniez" }, { "i": "enaient" }]
        },
        "future": {
            "p": [{ "i": "ènerai" }, { "i": "èneras" }, { "i": "ènera" }, { "i": "ènerons" }, { "i": "ènerez" }, { "i": "èneront" }]
        },
        "simple-past": {
            "p": [{ "i": "enai" }, { "i": "enas" }, { "i": "ena" }, { "i": "enâmes" }, { "i": "enâtes" }, { "i": "enèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ènerais" }, { "i": "ènerais" }, { "i": "ènerait" }, { "i": "ènerions" }, { "i": "èneriez" }, { "i": "èneraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ène" }, { "i": "ènes" }, { "i": "ène" }, { "i": "enions" }, { "i": "eniez" }, { "i": "ènent" }]
        },
        "imperfect": {
            "p": [{ "i": "enasse" }, { "i": "enasses" }, { "i": "enât" }, { "i": "enassions" }, { "i": "enassiez" }, { "i": "enassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ène" }, { "i": "enons" }, { "i": "enez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "enant" }
        },
        "past-participle": {
            "p": [{ "i": "ené" }, { "i": "enés" }, { "i": "enée" }, { "i": "enées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "l:ever",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ever" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ève" }, { "i": "èves" }, { "i": "ève" }, { "i": "evons" }, { "i": "evez" }, { "i": "èvent" }]
        },
        "imperfect": {
            "p": [{ "i": "evais" }, { "i": "evais" }, { "i": "evait" }, { "i": "evions" }, { "i": "eviez" }, { "i": "evaient" }]
        },
        "future": {
            "p": [{ "i": "èverai" }, { "i": "èveras" }, { "i": "èvera" }, { "i": "èverons" }, { "i": "èverez" }, { "i": "èveront" }]
        },
        "simple-past": {
            "p": [{ "i": "evai" }, { "i": "evas" }, { "i": "eva" }, { "i": "evâmes" }, { "i": "evâtes" }, { "i": "evèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èverais" }, { "i": "èverais" }, { "i": "èverait" }, { "i": "èverions" }, { "i": "èveriez" }, { "i": "èveraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ève" }, { "i": "èves" }, { "i": "ève" }, { "i": "evions" }, { "i": "eviez" }, { "i": "èvent" }]
        },
        "imperfect": {
            "p": [{ "i": "evasse" }, { "i": "evasses" }, { "i": "evât" }, { "i": "evassions" }, { "i": "evassiez" }, { "i": "evassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ève" }, { "i": "evons" }, { "i": "evez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "evant" }
        },
        "past-participle": {
            "p": [{ "i": "evé" }, { "i": "evés" }, { "i": "evée" }, { "i": "evées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "p:eser",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eser" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èse" }, { "i": "èses" }, { "i": "èse" }, { "i": "esons" }, { "i": "esez" }, { "i": "èsent" }]
        },
        "imperfect": {
            "p": [{ "i": "esais" }, { "i": "esais" }, { "i": "esait" }, { "i": "esions" }, { "i": "esiez" }, { "i": "esaient" }]
        },
        "future": {
            "p": [{ "i": "èserai" }, { "i": "èseras" }, { "i": "èsera" }, { "i": "èserons" }, { "i": "èserez" }, { "i": "èseront" }]
        },
        "simple-past": {
            "p": [{ "i": "esai" }, { "i": "esas" }, { "i": "esa" }, { "i": "esâmes" }, { "i": "esâtes" }, { "i": "esèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èserais" }, { "i": "èserais" }, { "i": "èserait" }, { "i": "èserions" }, { "i": "èseriez" }, { "i": "èseraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èse" }, { "i": "èses" }, { "i": "èse" }, { "i": "esions" }, { "i": "esiez" }, { "i": "èsent" }]
        },
        "imperfect": {
            "p": [{ "i": "esasse" }, { "i": "esasses" }, { "i": "esât" }, { "i": "esassions" }, { "i": "esassiez" }, { "i": "esassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èse" }, { "i": "esons" }, { "i": "esez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "esant" }
        },
        "past-participle": {
            "p": [{ "i": "esé" }, { "i": "esés" }, { "i": "esée" }, { "i": "esées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:écher",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "écher" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èche" }, { "i": "èches" }, { "i": "èche" }, { "i": "échons" }, { "i": "échez" }, { "i": "èchent" }]
        },
        "imperfect": {
            "p": [{ "i": "échais" }, { "i": "échais" }, { "i": "échait" }, { "i": "échions" }, { "i": "échiez" }, { "i": "échaient" }]
        },
        "future": {
            "p": [{ "i": "écherai" }, { "i": "écheras" }, { "i": "échera" }, { "i": "écherons" }, { "i": "écherez" }, { "i": "écheront" }]
        },
        "simple-past": {
            "p": [{ "i": "échai" }, { "i": "échas" }, { "i": "écha" }, { "i": "échâmes" }, { "i": "échâtes" }, { "i": "échèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "écherais" }, { "i": "écherais" }, { "i": "écherait" }, { "i": "écherions" }, { "i": "écheriez" }, { "i": "écheraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èche" }, { "i": "èches" }, { "i": "èche" }, { "i": "échions" }, { "i": "échiez" }, { "i": "èchent" }]
        },
        "imperfect": {
            "p": [{ "i": "échasse" }, { "i": "échasses" }, { "i": "échât" }, { "i": "échassions" }, { "i": "échassiez" }, { "i": "échassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èche" }, { "i": "échons" }, { "i": "échez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "échant" }
        },
        "past-participle": {
            "p": [{ "i": "éché" }, { "i": "échés" }, { "i": "échée" }, { "i": "échées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "réf:érer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "érer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ère" }, { "i": "ères" }, { "i": "ère" }, { "i": "érons" }, { "i": "érez" }, { "i": "èrent" }]
        },
        "imperfect": {
            "p": [{ "i": "érais" }, { "i": "érais" }, { "i": "érait" }, { "i": "érions" }, { "i": "ériez" }, { "i": "éraient" }]
        },
        "future": {
            "p": [{
                "i": ["érerai", "èrerai"]
            }, {
                "i": ["éreras", "èreras"]
            }, {
                "i": ["érera", "èrera"]
            }, {
                "i": ["érerons", "èrerons"]
            }, {
                "i": ["érerez", "èrerez"]
            }, {
                "i": ["éreront", "èreront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "érai" }, { "i": "éras" }, { "i": "éra" }, { "i": "érâmes" }, { "i": "érâtes" }, { "i": "érèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["érerais", "èrerais"]
            }, {
                "i": ["érerais", "èrerais"]
            }, {
                "i": ["érerait", "èrerait"]
            }, {
                "i": ["érerions", "èrerions"]
            }, {
                "i": ["éreriez", "èreriez"]
            }, {
                "i": ["éreraient", "èreraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ère" }, { "i": "ères" }, { "i": "ère" }, { "i": "érions" }, { "i": "ériez" }, { "i": "èrent" }]
        },
        "imperfect": {
            "p": [{ "i": "érasse" }, { "i": "érasses" }, { "i": "érât" }, { "i": "érassions" }, { "i": "érassiez" }, { "i": "érassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ère" }, { "i": "érons" }, { "i": "érez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "érant" }
        },
        "past-participle": {
            "p": [{ "i": "éré" }, { "i": "érés" }, { "i": "érée" }, { "i": "érées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:evrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "evrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èvre" }, { "i": "èvres" }, { "i": "èvre" }, { "i": "evrons" }, { "i": "evrez" }, { "i": "èvrent" }]
        },
        "imperfect": {
            "p": [{ "i": "evrais" }, { "i": "evrais" }, { "i": "evrait" }, { "i": "evrions" }, { "i": "evriez" }, { "i": "evraient" }]
        },
        "future": {
            "p": [{ "i": "èvrerai" }, { "i": "èvreras" }, { "i": "èvrera" }, { "i": "èvrerons" }, { "i": "èvrerez" }, { "i": "èvreront" }]
        },
        "simple-past": {
            "p": [{ "i": "evrai" }, { "i": "evras" }, { "i": "evra" }, { "i": "evrâmes" }, { "i": "evrâtes" }, { "i": "evrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "èvrerais" }, { "i": "èvrerais" }, { "i": "èvrerait" }, { "i": "èvrerions" }, { "i": "èvreriez" }, { "i": "èvreraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èvre" }, { "i": "èvres" }, { "i": "èvre" }, { "i": "evrions" }, { "i": "evriez" }, { "i": "èvrent" }]
        },
        "imperfect": {
            "p": [{ "i": "evrasse" }, { "i": "evrasses" }, { "i": "evrât" }, { "i": "evrassions" }, { "i": "evrassiez" }, { "i": "evrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èvre" }, { "i": "evrons" }, { "i": "evrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "evrant" }
        },
        "past-participle": {
            "p": [{ "i": "evré" }, { "i": "evrés" }, { "i": "evrée" }, { "i": "evrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "c:éder",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éder" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ède" }, { "i": "èdes" }, { "i": "ède" }, { "i": "édons" }, { "i": "édez" }, { "i": "èdent" }]
        },
        "imperfect": {
            "p": [{ "i": "édais" }, { "i": "édais" }, { "i": "édait" }, { "i": "édions" }, { "i": "édiez" }, { "i": "édaient" }]
        },
        "future": {
            "p": [{
                "i": ["éderai", "èderai"]
            }, {
                "i": ["éderas", "èderas"]
            }, {
                "i": ["édera", "èdera"]
            }, {
                "i": ["éderons", "èderons"]
            }, {
                "i": ["éderez", "èderez"]
            }, {
                "i": ["éderont", "èderont"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "édai" }, { "i": "édas" }, { "i": "éda" }, { "i": "édâmes" }, { "i": "édâtes" }, { "i": "édèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["éderais", "èderais"]
            }, {
                "i": ["éderais", "èderais"]
            }, {
                "i": ["éderait", "èderait"]
            }, {
                "i": ["éderions", "èderions"]
            }, {
                "i": ["éderiez", "èderiez"]
            }, {
                "i": ["éderaient", "èderaient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ède" }, { "i": "èdes" }, { "i": "ède" }, { "i": "édions" }, { "i": "édiez" }, { "i": "èdent" }]
        },
        "imperfect": {
            "p": [{ "i": "édasse" }, { "i": "édasses" }, { "i": "édât" }, { "i": "édassions" }, { "i": "édassiez" }, { "i": "édassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ède" }, { "i": "édons" }, { "i": "édez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "édant" }
        },
        "past-participle": {
            "p": [{ "i": "édé" }, { "i": "édés" }, { "i": "édée" }, { "i": "édées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "rec:éper",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éper" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èpe" }, { "i": "èpes" }, { "i": "èpe" }, { "i": "épons" }, { "i": "épez" }, { "i": "èpent" }]
        },
        "imperfect": {
            "p": [{ "i": "épais" }, { "i": "épais" }, { "i": "épait" }, { "i": "épions" }, { "i": "épiez" }, { "i": "épaient" }]
        },
        "future": {
            "p": [{
                "i": ["éperai", "èperai"]
            }, {
                "i": ["éperas", "èperas"]
            }, {
                "i": ["épera", "èpera"]
            }, {
                "i": ["éperons", "èperons"]
            }, {
                "i": ["éperez", "èperez"]
            }, {
                "i": ["éperont", "èperont"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "épai" }, { "i": "épas" }, { "i": "épa" }, { "i": "épâmes" }, { "i": "épâtes" }, { "i": "épèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["éperais", "èperais"]
            }, {
                "i": ["éperais", "èperais"]
            }, {
                "i": ["éperait", "èperait"]
            }, {
                "i": ["éperions", "èperions"]
            }, {
                "i": ["éperiez", "èperiez"]
            }, {
                "i": ["éperaient", "èperaient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èpe" }, { "i": "èpes" }, { "i": "èpe" }, { "i": "éprions" }, { "i": "épiez" }, { "i": "èpent" }]
        },
        "imperfect": {
            "p": [{ "i": "épasse" }, { "i": "épasses" }, { "i": "épât" }, { "i": "épassions" }, { "i": "épassiez" }, { "i": "épassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èpe" }, { "i": "épons" }, { "i": "épez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "épant" }
        },
        "past-participle": {
            "p": [{ "i": "épé" }, { "i": "épés" }, { "i": "épée" }, { "i": "épées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "rec:eper",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eper" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èpe" }, { "i": "èpes" }, { "i": "èpe" }, { "i": "epons" }, { "i": "epez" }, { "i": "èpent" }]
        },
        "imperfect": {
            "p": [{ "i": "epais" }, { "i": "epais" }, { "i": "epait" }, { "i": "epions" }, { "i": "epiez" }, { "i": "epaient" }]
        },
        "future": {
            "p": [{
                "i": ["eperai", "èperai"]
            }, {
                "i": ["eperas", "èperas"]
            }, {
                "i": ["epera", "èpera"]
            }, {
                "i": ["eperons", "èperons"]
            }, {
                "i": ["eperez", "èperez"]
            }, {
                "i": ["eperont", "èperont"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "epai" }, { "i": "epas" }, { "i": "epa" }, { "i": "epâmes" }, { "i": "epâtes" }, { "i": "epèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["eperais", "èperais"]
            }, {
                "i": ["eperais", "èperais"]
            }, {
                "i": ["eperait", "èperait"]
            }, {
                "i": ["eperions", "èperions"]
            }, {
                "i": ["eperiez", "èperiez"]
            }, {
                "i": ["eperaient", "èperaient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èpe" }, { "i": "èpes" }, { "i": "èpe" }, { "i": "eprions" }, { "i": "epiez" }, { "i": "èpent" }]
        },
        "imperfect": {
            "p": [{ "i": "epasse" }, { "i": "epasses" }, { "i": "epât" }, { "i": "epassions" }, { "i": "epassiez" }, { "i": "epassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èpe" }, { "i": "epons" }, { "i": "epez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "epant" }
        },
        "past-participle": {
            "p": [{ "i": "epé" }, { "i": "epés" }, { "i": "epée" }, { "i": "epées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "l:éser",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éser" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èse" }, { "i": "èses" }, { "i": "èse" }, { "i": "ésons" }, { "i": "ésez" }, { "i": "èsent" }]
        },
        "imperfect": {
            "p": [{ "i": "ésais" }, { "i": "ésais" }, { "i": "ésait" }, { "i": "ésions" }, { "i": "ésiez" }, { "i": "ésaient" }]
        },
        "future": {
            "p": [{
                "i": ["éserai", "èserai"]
            }, {
                "i": ["éseras", "èseras"]
            }, {
                "i": ["ésera", "èsera"]
            }, {
                "i": ["éserons", "èserons"]
            }, {
                "i": ["éserez", "èserez"]
            }, {
                "i": ["éseront", "èseront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "ésai" }, { "i": "ésas" }, { "i": "ésa" }, { "i": "ésâmes" }, { "i": "ésâtes" }, { "i": "ésèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["éserais", "èserais"]
            }, {
                "i": ["éserais", "èserais"]
            }, {
                "i": ["éserait", "èserait"]
            }, {
                "i": ["éserions", "èserions"]
            }, {
                "i": ["éseriez", "èseriez"]
            }, {
                "i": ["éseraient", "èseraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èse" }, { "i": "èses" }, { "i": "èse" }, { "i": "ésrions" }, { "i": "ésiez" }, { "i": "èsent" }]
        },
        "imperfect": {
            "p": [{ "i": "ésasse" }, { "i": "ésasses" }, { "i": "ésât" }, { "i": "ésassions" }, { "i": "ésassiez" }, { "i": "ésassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èse" }, { "i": "ésons" }, { "i": "ésez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ésant" }
        },
        "past-participle": {
            "p": [{ "i": "ésé" }, { "i": "ésés" }, { "i": "ésée" }, { "i": "ésées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cr:émer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "émer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ème" }, { "i": "èmes" }, { "i": "ème" }, { "i": "émons" }, { "i": "émez" }, { "i": "èment" }]
        },
        "imperfect": {
            "p": [{ "i": "émais" }, { "i": "émais" }, { "i": "émait" }, { "i": "émions" }, { "i": "émiez" }, { "i": "émaient" }]
        },
        "future": {
            "p": [{
                "i": ["émerai", "èmerai"]
            }, {
                "i": ["émeras", "èmeras"]
            }, {
                "i": ["émera", "èmera"]
            }, {
                "i": ["émerons", "èmerons"]
            }, {
                "i": ["émerez", "èmerez"]
            }, {
                "i": ["émeront", "èmeront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "émai" }, { "i": "émas" }, { "i": "éma" }, { "i": "émâmes" }, { "i": "émâtes" }, { "i": "émèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["émerais", "èmerais"]
            }, {
                "i": ["émerais", "èmerais"]
            }, {
                "i": ["émerait", "èmerait"]
            }, {
                "i": ["émerions", "èmerions"]
            }, {
                "i": ["émeriez", "èmeriez"]
            }, {
                "i": ["émeraient", "èmeraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ème" }, { "i": "èmes" }, { "i": "ème" }, { "i": "émrions" }, { "i": "émiez" }, { "i": "èment" }]
        },
        "imperfect": {
            "p": [{ "i": "émasse" }, { "i": "émasses" }, { "i": "émât" }, { "i": "émassions" }, { "i": "émassiez" }, { "i": "émassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ème" }, { "i": "émons" }, { "i": "émez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "émant" }
        },
        "past-participle": {
            "p": [{ "i": "émé" }, { "i": "émés" }, { "i": "émée" }, { "i": "émées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "abr:éger",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "éger" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ège" }, { "i": "èges" }, { "i": "ège" }, { "i": "égeons" }, { "i": "égez" }, { "i": "ègent" }]
        },
        "imperfect": {
            "p": [{ "i": "égeais" }, { "i": "égeais" }, { "i": "égeait" }, { "i": "égions" }, { "i": "égiez" }, { "i": "égeaient" }]
        },
        "future": {
            "p": [{ "i": "ègerai" }, { "i": "ègeras" }, { "i": "ègera" }, { "i": "ègerons" }, { "i": "ègerez" }, { "i": "ègeront" }]
        },
        "simple-past": {
            "p": [{ "i": "égeai" }, { "i": "égeas" }, { "i": "égea" }, { "i": "égeâmes" }, { "i": "égeâtes" }, { "i": "égèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ègerais" }, { "i": "ègerais" }, { "i": "ègerait" }, { "i": "ègerions" }, { "i": "ègeriez" }, { "i": "ègeraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ège" }, { "i": "èges" }, { "i": "ège" }, { "i": "égions" }, { "i": "égiez" }, { "i": "ègent" }]
        },
        "imperfect": {
            "p": [{ "i": "égeasse" }, { "i": "égeasses" }, { "i": "égeât" }, { "i": "égeassions" }, { "i": "égeassiez" }, { "i": "égeassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ège" }, { "i": "égeons" }, { "i": "égez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "égeant" }
        },
        "past-participle": {
            "p": [{ "i": "égé" }, { "i": "égés" }, { "i": "égée" }, { "i": "égées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "aim:er",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "er" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "erai" }, { "i": "eras" }, { "i": "era" }, { "i": "erons" }, { "i": "erez" }, { "i": "eront" }]
        },
        "simple-past": {
            "p": [{ "i": "ai" }, { "i": "as" }, { "i": "a" }, { "i": "âmes" }, { "i": "âtes" }, { "i": "èrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "erais" }, { "i": "erais" }, { "i": "erait" }, { "i": "erions" }, { "i": "eriez" }, { "i": "eraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "asse" }, { "i": "asses" }, { "i": "ât" }, { "i": "assions" }, { "i": "assiez" }, { "i": "assent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "e" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "é" }, { "i": "és" }, { "i": "ée" }, { "i": "ées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "enfi:évrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "évrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "èvre" }, { "i": "èvres" }, { "i": "èvre" }, { "i": "évrons" }, { "i": "évrez" }, { "i": "èvrent" }]
        },
        "imperfect": {
            "p": [{ "i": "évrais" }, { "i": "évrais" }, { "i": "évrait" }, { "i": "évrions" }, { "i": "évriez" }, { "i": "évraient" }]
        },
        "future": {
            "p": [{ "i": "évrerai" }, { "i": "évreras" }, { "i": "évrera" }, { "i": "évrerons" }, { "i": "évrerez" }, { "i": "évreront" }]
        },
        "simple-past": {
            "p": [{ "i": "évrai" }, { "i": "évras" }, { "i": "évra" }, { "i": "évrâmes" }, { "i": "évrâtes" }, { "i": "évrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "évrerais" }, { "i": "évrerais" }, { "i": "évrerait" }, { "i": "évrerions" }, { "i": "évreriez" }, { "i": "évreraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "èvre" }, { "i": "èvres" }, { "i": "èvre" }, { "i": "évrions" }, { "i": "évriez" }, { "i": "èvrent" }]
        },
        "imperfect": {
            "p": [{ "i": "évrasse" }, { "i": "évrasses" }, { "i": "évrât" }, { "i": "évrassions" }, { "i": "évrassiez" }, { "i": "évrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "èvre" }, { "i": "évrons" }, { "i": "évrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "évrant" }
        },
        "past-participle": {
            "p": [{ "i": "évré" }, { "i": "évrés" }, { "i": "évrée" }, { "i": "évrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ex:écrer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "écrer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ècre" }, { "i": "ècres" }, { "i": "ècre" }, { "i": "écrons" }, { "i": "écrez" }, { "i": "ècrent" }]
        },
        "imperfect": {
            "p": [{ "i": "écrais" }, { "i": "écrais" }, { "i": "écrait" }, { "i": "écrions" }, { "i": "écriez" }, { "i": "écraient" }]
        },
        "future": {
            "p": [{ "i": "écrerai" }, { "i": "écreras" }, { "i": "écrera" }, { "i": "écrerons" }, { "i": "écrerez" }, { "i": "écreront" }]
        },
        "simple-past": {
            "p": [{ "i": "écrai" }, { "i": "écras" }, { "i": "écra" }, { "i": "écrâmes" }, { "i": "écrâtes" }, { "i": "écrèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "écrerais" }, { "i": "écrerais" }, { "i": "écrerait" }, { "i": "écrerions" }, { "i": "écreriez" }, { "i": "écreraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ècre" }, { "i": "ècres" }, { "i": "ècre" }, { "i": "écrions" }, { "i": "écriez" }, { "i": "ècrent" }]
        },
        "imperfect": {
            "p": [{ "i": "écrasse" }, { "i": "écrasses" }, { "i": "écrât" }, { "i": "écrassions" }, { "i": "écrassiez" }, { "i": "écrassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ècre" }, { "i": "écrons" }, { "i": "écrez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "écrant" }
        },
        "past-participle": {
            "p": [{ "i": "écré" }, { "i": "écrés" }, { "i": "écrée" }, { "i": "écrées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "acqu:érir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "érir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "iers" }, { "i": "iers" }, { "i": "iert" }, { "i": "érons" }, { "i": "érez" }, { "i": "ièrent" }]
        },
        "imperfect": {
            "p": [{ "i": "érais" }, { "i": "érais" }, { "i": "érait" }, { "i": "érions" }, { "i": "ériez" }, { "i": "éraient" }]
        },
        "future": {
            "p": [{ "i": "errai" }, { "i": "erras" }, { "i": "erra" }, { "i": "errons" }, { "i": "errez" }, { "i": "erront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "errais" }, { "i": "errais" }, { "i": "errait" }, { "i": "errions" }, { "i": "erriez" }, { "i": "erraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ière" }, { "i": "ières" }, { "i": "ière" }, { "i": "érions" }, { "i": "ériez" }, { "i": "ièrent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "iers" }, { "i": "érons" }, { "i": "érez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "érant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "qu:érir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "érir" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "ha:ïr",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ïr" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "ïssons" }, { "i": "ïssez" }, { "i": "ïssent" }]
        },
        "imperfect": {
            "p": [{ "i": "ïssais" }, { "i": "ïssais" }, { "i": "ïssait" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssaient" }]
        },
        "future": {
            "p": [{ "i": "ïrai" }, { "i": "ïras" }, { "i": "ïra" }, { "i": "ïrons" }, { "i": "ïrez" }, { "i": "ïront" }]
        },
        "simple-past": {
            "p": [{ "i": "ïs" }, { "i": "ïs" }, { "i": "ït" }, { "i": "ïmes" }, { "i": "ïtes" }, { "i": "ïrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ïrais" }, { "i": "ïrais" }, { "i": "ïrait" }, { "i": "ïrions" }, { "i": "ïriez" }, { "i": "ïraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ïsse" }, { "i": "ïsses" }, { "i": "ïsse" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssent" }]
        },
        "imperfect": {
            "p": [{ "i": "ïsse" }, { "i": "ïsses" }, { "i": "ït" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "ïssons" }, { "i": "ïssez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ïssant" }
        },
        "past-participle": {
            "p": [{ "i": "ï" }, { "i": "ïs" }, { "i": "ïe" }, { "i": "ïes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "amu:ïr",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ïr" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ïs" }, { "i": "ïs" }, { "i": "ït" }, { "i": "ïssons" }, { "i": "ïssez" }, { "i": "ïssent" }]
        },
        "imperfect": {
            "p": [{ "i": "ïssais" }, { "i": "ïssais" }, { "i": "ïssait" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssaient" }]
        },
        "future": {
            "p": [{ "i": "ïrai" }, { "i": "ïras" }, { "i": "ïra" }, { "i": "ïrons" }, { "i": "ïrez" }, { "i": "ïront" }]
        },
        "simple-past": {
            "p": [{ "i": "ïs" }, { "i": "ïs" }, { "i": "ït" }, { "i": "ïmes" }, { "i": "ïtes" }, { "i": "ïrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ïrais" }, { "i": "ïrais" }, { "i": "ïrait" }, { "i": "ïrions" }, { "i": "ïriez" }, { "i": "ïraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ïsse" }, { "i": "ïsses" }, { "i": "ïsse" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssent" }]
        },
        "imperfect": {
            "p": [{ "i": "ïsse" }, { "i": "ïsses" }, { "i": "ït" }, { "i": "ïssions" }, { "i": "ïssiez" }, { "i": "ïssent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ïs" }, { "i": "ïssons" }, { "i": "ïssez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ïssant" }
        },
        "past-participle": {
            "p": [{ "i": "ï" }, { "i": "ïs" }, { "i": "ïe" }, { "i": "ïes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fl:eurir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eurir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "euris" }, { "i": "euris" }, { "i": "eurit" }, { "i": "eurissons" }, { "i": "eurissez" }, { "i": "eurissent" }]
        },
        "imperfect": {
            "p": [{
                "i": ["eurissais", "orissais"]
            }, {
                "i": ["eurissais", "orissais"]
            }, {
                "i": ["eurissait", "orissait"]
            }, {
                "i": ["eurissions", "orissions"]
            }, {
                "i": ["eurissiez", "orissiez"]
            }, {
                "i": ["eurissaient", "orissaient"]
            }]
        },
        "future": {
            "p": [{ "i": "eurirai" }, { "i": "euriras" }, { "i": "eurira" }, { "i": "eurirons" }, { "i": "eurirez" }, { "i": "euriront" }]
        },
        "simple-past": {
            "p": [{ "i": "euris" }, { "i": "euris" }, { "i": "eurit" }, { "i": "eurîmes" }, { "i": "eurîtes" }, { "i": "eurirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "eurirais" }, { "i": "eurirais" }, { "i": "eurirait" }, { "i": "euririons" }, { "i": "euririez" }, { "i": "euriraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "eurisse" }, { "i": "eurisses" }, { "i": "eurisse" }, { "i": "eurissions" }, { "i": "eurissiez" }, { "i": "eurissent" }]
        },
        "imperfect": {
            "p": [{ "i": "eurisse" }, { "i": "eurisses" }, { "i": "eurît" }, { "i": "eurissions" }, { "i": "eurissiez" }, { "i": "eurissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "euris" }, { "i": "eurissons" }, { "i": "eurissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["eurissant", "orissant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "euri" }, { "i": "euris" }, { "i": "eurie" }, { "i": "euries" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ouv:rir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "rir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "re" }, { "i": "res" }, { "i": "re" }, { "i": "rons" }, { "i": "rez" }, { "i": "rent" }]
        },
        "imperfect": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        },
        "future": {
            "p": [{ "i": "rirai" }, { "i": "riras" }, { "i": "rira" }, { "i": "rirons" }, { "i": "rirez" }, { "i": "riront" }]
        },
        "simple-past": {
            "p": [{ "i": "ris" }, { "i": "ris" }, { "i": "rit" }, { "i": "rîmes" }, { "i": "rîtes" }, { "i": "rirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rirais" }, { "i": "rirais" }, { "i": "rirait" }, { "i": "ririons" }, { "i": "ririez" }, { "i": "riraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "re" }, { "i": "res" }, { "i": "re" }, { "i": "rions" }, { "i": "riez" }, { "i": "rent" }]
        },
        "imperfect": {
            "p": [{ "i": "risse" }, { "i": "risses" }, { "i": "rît" }, { "i": "rissions" }, { "i": "rissiez" }, { "i": "rissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "re" }, { "i": "rons" }, { "i": "rez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "rant" }
        },
        "past-participle": {
            "p": [{ "i": "ert" }, { "i": "erts" }, { "i": "erte" }, { "i": "ertes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "dor:mir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "mir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "mons" }, { "i": "mez" }, { "i": "ment" }]
        },
        "imperfect": {
            "p": [{ "i": "mais" }, { "i": "mais" }, { "i": "mait" }, { "i": "mions" }, { "i": "miez" }, { "i": "maient" }]
        },
        "future": {
            "p": [{ "i": "mirai" }, { "i": "miras" }, { "i": "mira" }, { "i": "mirons" }, { "i": "mirez" }, { "i": "miront" }]
        },
        "simple-past": {
            "p": [{ "i": "mis" }, { "i": "mis" }, { "i": "mit" }, { "i": "mîmes" }, { "i": "mîtes" }, { "i": "mirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "mirais" }, { "i": "mirais" }, { "i": "mirait" }, { "i": "mirions" }, { "i": "miriez" }, { "i": "miraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "me" }, { "i": "mes" }, { "i": "me" }, { "i": "mions" }, { "i": "miez" }, { "i": "ment" }]
        },
        "imperfect": {
            "p": [{ "i": "misse" }, { "i": "misses" }, { "i": "mît" }, { "i": "missions" }, { "i": "missiez" }, { "i": "missent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "mons" }, { "i": "mez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "mant" }
        },
        "past-participle": {
            "p": [{ "i": "mi" }, { "i": "mis" }, { "i": "mie" }, { "i": "mies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "men:tir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "tir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "tons" }, { "i": "tez" }, { "i": "tent" }]
        },
        "imperfect": {
            "p": [{ "i": "tais" }, { "i": "tais" }, { "i": "tait" }, { "i": "tions" }, { "i": "tiez" }, { "i": "taient" }]
        },
        "future": {
            "p": [{ "i": "tirai" }, { "i": "tiras" }, { "i": "tira" }, { "i": "tirons" }, { "i": "tirez" }, { "i": "tiront" }]
        },
        "simple-past": {
            "p": [{ "i": "tis" }, { "i": "tis" }, { "i": "tit" }, { "i": "tîmes" }, { "i": "tîtes" }, { "i": "tirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "tirais" }, { "i": "tirais" }, { "i": "tirait" }, { "i": "tirions" }, { "i": "tiriez" }, { "i": "tiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "te" }, { "i": "tes" }, { "i": "te" }, { "i": "tions" }, { "i": "tiez" }, { "i": "tent" }]
        },
        "imperfect": {
            "p": [{ "i": "tisse" }, { "i": "tisses" }, { "i": "tît" }, { "i": "tissions" }, { "i": "tissiez" }, { "i": "tissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "tons" }, { "i": "tez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "tant" }
        },
        "past-participle": {
            "p": [{ "i": "ti" }, { "i": "tis" }, { "i": "tie" }, { "i": "ties" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ser:vir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "vir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "vons" }, { "i": "vez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "vais" }, { "i": "vais" }, { "i": "vait" }, { "i": "vions" }, { "i": "viez" }, { "i": "vaient" }]
        },
        "future": {
            "p": [{ "i": "virai" }, { "i": "viras" }, { "i": "vira" }, { "i": "virons" }, { "i": "virez" }, { "i": "viront" }]
        },
        "simple-past": {
            "p": [{ "i": "vis" }, { "i": "vis" }, { "i": "vit" }, { "i": "vîmes" }, { "i": "vîtes" }, { "i": "virent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "virais" }, { "i": "virais" }, { "i": "virait" }, { "i": "virions" }, { "i": "viriez" }, { "i": "viraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ve" }, { "i": "ves" }, { "i": "ve" }, { "i": "vions" }, { "i": "viez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "visse" }, { "i": "visses" }, { "i": "vît" }, { "i": "vissions" }, { "i": "vissiez" }, { "i": "vissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "vons" }, { "i": "vez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "vant" }
        },
        "past-participle": {
            "p": [{ "i": "vi" }, { "i": "vis" }, { "i": "vie" }, { "i": "vies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "bou:illir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "illir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "illons" }, { "i": "illez" }, { "i": "illent" }]
        },
        "imperfect": {
            "p": [{ "i": "illais" }, { "i": "illais" }, { "i": "illait" }, { "i": "illions" }, { "i": "illiez" }, { "i": "illaient" }]
        },
        "future": {
            "p": [{ "i": "illirai" }, { "i": "illiras" }, { "i": "illira" }, { "i": "illirons" }, { "i": "illirez" }, { "i": "illiront" }]
        },
        "simple-past": {
            "p": [{ "i": "illis" }, { "i": "illis" }, { "i": "illit" }, { "i": "illîmes" }, { "i": "illîtes" }, { "i": "illirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "illirais" }, { "i": "illirais" }, { "i": "illirait" }, { "i": "illirions" }, { "i": "illiriez" }, { "i": "illiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ille" }, { "i": "illes" }, { "i": "ille" }, { "i": "illions" }, { "i": "illiez" }, { "i": "illent" }]
        },
        "imperfect": {
            "p": [{ "i": "illisse" }, { "i": "illisses" }, { "i": "illît" }, { "i": "illissions" }, { "i": "illissiez" }, { "i": "illissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "illons" }, { "i": "illez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "illant" }
        },
        "past-participle": {
            "p": [{ "i": "illi" }, { "i": "illis" }, { "i": "illie" }, { "i": "illies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "assaill:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "e" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "saill:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, {
                "i": ["it", "e"]
            }, { "i": "issons" }, { "i": "issez" }, {
                "i": ["issent", "ent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "issais" }, { "i": "issais" }, {
                "i": ["issait", "ait"]
            }, { "i": "issions" }, { "i": "issiez" }, {
                "i": ["issaient", "aient"]
            }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, {
                "i": ["ira", "era"]
            }, { "i": "irons" }, { "i": "irez" }, {
                "i": ["iront", "eront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, {
                "i": ["irait", "erait"]
            }, { "i": "irions" }, { "i": "iriez" }, {
                "i": ["iraient", "eraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "isse" }, { "i": "isses" }, {
                "i": ["isse", "e"]
            }, { "i": "issions" }, { "i": "issiez" }, {
                "i": ["issent", "ent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "issons" }, { "i": "issez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["issant", "ant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cueill:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "erai" }, { "i": "eras" }, { "i": "era" }, { "i": "erons" }, { "i": "erez" }, { "i": "eront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "erais" }, { "i": "erais" }, { "i": "erait" }, { "i": "erions" }, { "i": "eriez" }, { "i": "eraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "e" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "t:enir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "enir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "iens" }, { "i": "iens" }, { "i": "ient" }, { "i": "enons" }, { "i": "enez" }, { "i": "iennent" }]
        },
        "imperfect": {
            "p": [{ "i": "enais" }, { "i": "enais" }, { "i": "enait" }, { "i": "enions" }, { "i": "eniez" }, { "i": "enaient" }]
        },
        "future": {
            "p": [{ "i": "iendrai" }, { "i": "iendras" }, { "i": "iendra" }, { "i": "iendrons" }, { "i": "iendrez" }, { "i": "iendront" }]
        },
        "simple-past": {
            "p": [{ "i": "ins" }, { "i": "ins" }, { "i": "int" }, { "i": "înmes" }, { "i": "întes" }, { "i": "inrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "iendrais" }, { "i": "iendrais" }, { "i": "iendrait" }, { "i": "iendrions" }, { "i": "iendriez" }, { "i": "iendraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ienne" }, { "i": "iennes" }, { "i": "ienne" }, { "i": "enions" }, { "i": "eniez" }, { "i": "iennent" }]
        },
        "imperfect": {
            "p": [{ "i": "insse" }, { "i": "insses" }, { "i": "înt" }, { "i": "inssions" }, { "i": "inssiez" }, { "i": "inssent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "iens" }, { "i": "enons" }, { "i": "enez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "enant" }
        },
        "past-participle": {
            "p": [{ "i": "enu" }, { "i": "enus" }, { "i": "enue" }, { "i": "enues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "adv:enir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "enir" }
        }
    },
    "indicative": {
        "present": {
            "p": { "i": "ient" }
        },
        "imperfect": {
            "p": { "i": "enait" }
        },
        "future": {
            "p": { "i": "iendra" }
        },
        "simple-past": {
            "p": { "i": "int" }
        }
    },
    "conditional": {
        "present": {
            "p": { "i": "iendrait" }
        }
    },
    "subjunctive": {
        "present": {
            "p": { "i": "ienne" }
        },
        "imperfect": {
            "p": { "i": "înt" }
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "enant" }
        },
        "past-participle": {
            "p": [{ "i": "enu" }, { "i": "enus" }, { "i": "enue" }, { "i": "enues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fu:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "yons" }, { "i": "yez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yions" }, { "i": "yiez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": { "i": "i" }
        }
    }
}), new _conjugation2.default({
    "-name": "m:ourir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ourir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "eurs" }, { "i": "eurs" }, { "i": "eurt" }, { "i": "ourons" }, { "i": "ourez" }, { "i": "eurent" }]
        },
        "imperfect": {
            "p": [{ "i": "ourais" }, { "i": "ourais" }, { "i": "ourait" }, { "i": "ourions" }, { "i": "ouriez" }, { "i": "ouraient" }]
        },
        "future": {
            "p": [{ "i": "ourrai" }, { "i": "ourras" }, { "i": "ourra" }, { "i": "ourrons" }, { "i": "ourrez" }, { "i": "ourront" }]
        },
        "simple-past": {
            "p": [{ "i": "ourus" }, { "i": "ourus" }, { "i": "ourut" }, { "i": "ourûmes" }, { "i": "ourûtes" }, { "i": "oururent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ourrais" }, { "i": "ourrais" }, { "i": "ourrait" }, { "i": "ourrions" }, { "i": "ourriez" }, { "i": "ourraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "eure" }, { "i": "eures" }, { "i": "eure" }, { "i": "ourions" }, { "i": "ouriez" }, { "i": "eurent" }]
        },
        "imperfect": {
            "p": [{ "i": "ourusse" }, { "i": "ourusses" }, { "i": "ourût" }, { "i": "ourussions" }, { "i": "ourussiez" }, { "i": "ourussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "eurs" }, { "i": "ourons" }, { "i": "ourez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ourant" }
        },
        "past-participle": {
            "p": [{ "i": "ort" }, { "i": "orts" }, { "i": "orte" }, { "i": "ortes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "vêt:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, {}, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cour:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fin:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "issons" }, { "i": "issez" }, { "i": "issent" }]
        },
        "imperfect": {
            "p": [{ "i": "issais" }, { "i": "issais" }, { "i": "issait" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "isse" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "issons" }, { "i": "issez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "issant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "chauv:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "ons" }, { "i": "ez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "ions" }, { "i": "iez" }, { "i": "aient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "e" }, { "i": "es" }, { "i": "e" }, { "i": "ions" }, { "i": "iez" }, { "i": "ent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "ons" }, { "i": "ez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "maud:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "issons" }, { "i": "issez" }, { "i": "issent" }]
        },
        "imperfect": {
            "p": [{ "i": "issais" }, { "i": "issais" }, { "i": "issait" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "isse" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "issons" }, { "i": "issez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "issant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fa:illir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "illir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ux" }, { "i": "ux" }, { "i": "ut" }, { "i": "illons" }, { "i": "illez" }, { "i": "illent" }]
        },
        "imperfect": {
            "p": [{ "i": "illais" }, { "i": "illais" }, { "i": "illait" }, { "i": "illions" }, { "i": "illiez" }, { "i": "illaient" }]
        },
        "future": {
            "p": [{ "i": "illirai" }, { "i": "illiras" }, { "i": "illira" }, { "i": "illirons" }, { "i": "illirez" }, { "i": "illiront" }]
        },
        "simple-past": {
            "p": [{ "i": "illis" }, { "i": "illis" }, { "i": "illit" }, { "i": "illîmes" }, { "i": "illîtes" }, { "i": "illirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "illirais" }, { "i": "illirais" }, { "i": "illirait" }, { "i": "illirions" }, { "i": "illiriez" }, { "i": "illiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "illisse" }, { "i": "illisses" }, { "i": "illisse" }, { "i": "illissions" }, { "i": "illissiez" }, { "i": "illissent" }]
        },
        "imperfect": {
            "p": [{ "i": "illisse" }, { "i": "illisses" }, { "i": "illît" }, { "i": "illissions" }, { "i": "illissiez" }, { "i": "illissent" }]
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "illant" }
        },
        "past-participle": {
            "p": [{ "i": "illi" }, { "i": "illis" }, { "i": "illie" }, { "i": "illies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "g:ésir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ésir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ît" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "dé:cevoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "cevoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "çois" }, { "i": "çois" }, { "i": "çoit" }, { "i": "cevons" }, { "i": "cevez" }, { "i": "çoivent" }]
        },
        "imperfect": {
            "p": [{ "i": "cevais" }, { "i": "cevais" }, { "i": "cevait" }, { "i": "cevions" }, { "i": "ceviez" }, { "i": "cevaient" }]
        },
        "future": {
            "p": [{ "i": "cevrai" }, { "i": "cevras" }, { "i": "cevra" }, { "i": "cevrons" }, { "i": "cevrez" }, { "i": "cevront" }]
        },
        "simple-past": {
            "p": [{ "i": "çus" }, { "i": "çus" }, { "i": "çut" }, { "i": "çûmes" }, { "i": "çûtes" }, { "i": "çurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "cevrais" }, { "i": "cevrais" }, { "i": "cevrait" }, { "i": "cevrions" }, { "i": "cevriez" }, { "i": "cevraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "çoive" }, { "i": "çoives" }, { "i": "çoive" }, { "i": "cevions" }, { "i": "ceviez" }, { "i": "çoivent" }]
        },
        "imperfect": {
            "p": [{ "i": "çusse" }, { "i": "çusses" }, { "i": "çût" }, { "i": "çussions" }, { "i": "çussiez" }, { "i": "çussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "çois" }, { "i": "cevons" }, { "i": "cevez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "cevant" }
        },
        "past-participle": {
            "p": [{ "i": "çu" }, { "i": "çus" }, { "i": "çue" }, { "i": "çues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "d:evoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "evoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "evons" }, { "i": "evez" }, { "i": "oivent" }]
        },
        "imperfect": {
            "p": [{ "i": "evais" }, { "i": "evais" }, { "i": "evait" }, { "i": "evions" }, { "i": "eviez" }, { "i": "evaient" }]
        },
        "future": {
            "p": [{ "i": "evrai" }, { "i": "evras" }, { "i": "evra" }, { "i": "evrons" }, { "i": "evrez" }, { "i": "evront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "evrais" }, { "i": "evrais" }, { "i": "evrait" }, { "i": "evrions" }, { "i": "evriez" }, { "i": "evraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oive" }, { "i": "oives" }, { "i": "oive" }, { "i": "evions" }, { "i": "eviez" }, { "i": "oivent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "evons" }, { "i": "evez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "evant" }
        },
        "past-participle": {
            "p": [{ "i": "û" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "m:ouvoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ouvoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "eus" }, { "i": "eus" }, { "i": "eut" }, { "i": "ouvons" }, { "i": "ouvez" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "ouvais" }, { "i": "ouvais" }, { "i": "ouvait" }, { "i": "ouvions" }, { "i": "ouviez" }, { "i": "ouvaient" }]
        },
        "future": {
            "p": [{ "i": "ouvrai" }, { "i": "ouvras" }, { "i": "ouvra" }, { "i": "ouvrons" }, { "i": "ouvrez" }, { "i": "ouvront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ouvrais" }, { "i": "ouvrais" }, { "i": "ouvrait" }, { "i": "ouvrions" }, { "i": "ouvriez" }, { "i": "ouvraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "euve" }, { "i": "euves" }, { "i": "euve" }, { "i": "ouvions" }, { "i": "ouviez" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "eus" }, { "i": "ouvons" }, { "i": "ouvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ouvant" }
        },
        "past-participle": {
            "p": [{
                "i": ["u", "û"]
            }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "prom:ouvoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ouvoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "eus" }, { "i": "eus" }, { "i": "eut" }, { "i": "ouvons" }, { "i": "ouvez" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "ouvais" }, { "i": "ouvais" }, { "i": "ouvait" }, { "i": "ouvions" }, { "i": "ouviez" }, { "i": "ouvaient" }]
        },
        "future": {
            "p": [{ "i": "ouvrai" }, { "i": "ouvras" }, { "i": "ouvra" }, { "i": "ouvrons" }, { "i": "ouvrez" }, { "i": "ouvront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ouvrais" }, { "i": "ouvrais" }, { "i": "ouvrait" }, { "i": "ouvrions" }, { "i": "ouvriez" }, { "i": "ouvraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "euve" }, { "i": "euves" }, { "i": "euve" }, { "i": "ouvions" }, { "i": "ouviez" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "eus" }, { "i": "ouvons" }, { "i": "ouvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ouvant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:avoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "avoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "avons" }, { "i": "avez" }, { "i": "avent" }]
        },
        "imperfect": {
            "p": [{ "i": "avais" }, { "i": "avais" }, { "i": "avait" }, { "i": "avions" }, { "i": "aviez" }, { "i": "avaient" }]
        },
        "future": {
            "p": [{ "i": "aurai" }, { "i": "auras" }, { "i": "aura" }, { "i": "aurons" }, { "i": "aurez" }, { "i": "auront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aurais" }, { "i": "aurais" }, { "i": "aurait" }, { "i": "aurions" }, { "i": "auriez" }, { "i": "auraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ache" }, { "i": "aches" }, { "i": "ache" }, { "i": "achions" }, { "i": "achiez" }, { "i": "achent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ache" }, { "i": "achons" }, { "i": "achez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "achant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "v:ouloir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ouloir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "eux" }, { "i": "eux" }, { "i": "eut" }, { "i": "oulons" }, { "i": "oulez" }, { "i": "eulent" }]
        },
        "imperfect": {
            "p": [{ "i": "oulais" }, { "i": "oulais" }, { "i": "oulait" }, { "i": "oulions" }, { "i": "ouliez" }, { "i": "oulaient" }]
        },
        "future": {
            "p": [{ "i": "oudrai" }, { "i": "oudras" }, { "i": "oudra" }, { "i": "oudrons" }, { "i": "oudrez" }, { "i": "oudront" }]
        },
        "simple-past": {
            "p": [{ "i": "oulus" }, { "i": "oulus" }, { "i": "oulut" }, { "i": "oulûmes" }, { "i": "oulûtes" }, { "i": "oulurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oudrais" }, { "i": "oudrais" }, { "i": "oudrait" }, { "i": "oudrions" }, { "i": "oudriez" }, { "i": "oudraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "euille" }, { "i": "euilles" }, { "i": "euille" }, { "i": "oulions" }, { "i": "ouliez" }, { "i": "euillent" }]
        },
        "imperfect": {
            "p": [{ "i": "oulusse" }, { "i": "oulusses" }, { "i": "oulût" }, { "i": "oulussions" }, { "i": "oulussiez" }, { "i": "oulussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "euille" }, { "i": "euillons" }, { "i": "euillez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oulant" }
        },
        "past-participle": {
            "p": [{ "i": "oulu" }, { "i": "oulus" }, { "i": "oulue" }, { "i": "oulues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "va:loir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "loir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ux" }, { "i": "ux" }, { "i": "ut" }, { "i": "lons" }, { "i": "lez" }, { "i": "lent" }]
        },
        "imperfect": {
            "p": [{ "i": "lais" }, { "i": "lais" }, { "i": "lait" }, { "i": "lions" }, { "i": "liez" }, { "i": "laient" }]
        },
        "future": {
            "p": [{ "i": "udrai" }, { "i": "udras" }, { "i": "udra" }, { "i": "udrons" }, { "i": "udrez" }, { "i": "udront" }]
        },
        "simple-past": {
            "p": [{ "i": "lus" }, { "i": "lus" }, { "i": "lut" }, { "i": "lûmes" }, { "i": "lûtes" }, { "i": "lurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "udrais" }, { "i": "udrais" }, { "i": "udrait" }, { "i": "udrions" }, { "i": "udriez" }, { "i": "udraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ille" }, { "i": "illes" }, { "i": "ille" }, { "i": "lions" }, { "i": "liez" }, { "i": "illent" }]
        },
        "imperfect": {
            "p": [{ "i": "lusse" }, { "i": "lusses" }, { "i": "lût" }, { "i": "lussions" }, { "i": "lussiez" }, { "i": "lussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ux" }, { "i": "lons" }, { "i": "lez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lant" }
        },
        "past-participle": {
            "p": [{ "i": "lu" }, { "i": "lus" }, { "i": "lue" }, { "i": "lues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "préva:loir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "loir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ux" }, { "i": "ux" }, { "i": "ut" }, { "i": "lons" }, { "i": "lez" }, { "i": "lent" }]
        },
        "imperfect": {
            "p": [{ "i": "lais" }, { "i": "lais" }, { "i": "lait" }, { "i": "lions" }, { "i": "liez" }, { "i": "laient" }]
        },
        "future": {
            "p": [{ "i": "udrai" }, { "i": "udras" }, { "i": "udra" }, { "i": "udrons" }, { "i": "udrez" }, { "i": "udront" }]
        },
        "simple-past": {
            "p": [{ "i": "lus" }, { "i": "lus" }, { "i": "lut" }, { "i": "lûmes" }, { "i": "lûtes" }, { "i": "lurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "udrais" }, { "i": "udrais" }, { "i": "udrait" }, { "i": "udrions" }, { "i": "udriez" }, { "i": "udraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "le" }, { "i": "les" }, { "i": "le" }, { "i": "lions" }, { "i": "liez" }, { "i": "lent" }]
        },
        "imperfect": {
            "p": [{ "i": "lusse" }, { "i": "lusses" }, { "i": "lût" }, { "i": "lussions" }, { "i": "lussiez" }, { "i": "lussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ux" }, { "i": "lons" }, { "i": "lez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lant" }
        },
        "past-participle": {
            "p": [{ "i": "lu" }, { "i": "lus" }, { "i": "lue" }, { "i": "lues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "p:ouvoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ouvoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["eux", "uis"]
            }, { "i": "eux" }, { "i": "eut" }, { "i": "ouvons" }, { "i": "ouvez" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "ouvais" }, { "i": "ouvais" }, { "i": "ouvait" }, { "i": "ouvions" }, { "i": "ouviez" }, { "i": "ouvaient" }]
        },
        "future": {
            "p": [{ "i": "ourrai" }, { "i": "ourras" }, { "i": "ourra" }, { "i": "ourrons" }, { "i": "ourrez" }, { "i": "ourront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ourrais" }, { "i": "ourrais" }, { "i": "ourrait" }, { "i": "ourrions" }, { "i": "ourriez" }, { "i": "ourraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "uisse" }, { "i": "uisses" }, { "i": "uisse" }, { "i": "uissions" }, { "i": "uissiez" }, { "i": "uissent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ouvant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "v:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "errai" }, { "i": "erras" }, { "i": "erra" }, { "i": "errons" }, { "i": "errez" }, { "i": "erront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "errais" }, { "i": "errais" }, { "i": "errait" }, { "i": "errions" }, { "i": "erriez" }, { "i": "erraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "prév:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ass:eoir",
    "infinitive": {
        "infinitive-present": {
            "p": {
                "i": ["eoir", "oir"]
            }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["ieds", "ois"]
            }, {
                "i": ["ieds", "ois"]
            }, {
                "i": ["ied", "oit"]
            }, {
                "i": ["eyons", "oyons"]
            }, {
                "i": ["eyez", "oyez"]
            }, {
                "i": ["eyent", "oient"]
            }]
        },
        "imperfect": {
            "p": [{
                "i": ["eyais", "oyais"]
            }, {
                "i": ["eyais", "oyais"]
            }, {
                "i": ["eyait", "oyait"]
            }, {
                "i": ["eyions", "oyions"]
            }, {
                "i": ["eyiez", "oyiez"]
            }, {
                "i": ["eyaient", "oyaient"]
            }]
        },
        "future": {
            "p": [{
                "i": ["iérai", "eyerai", "oirai"]
            }, {
                "i": ["iéras", "eyeras", "oiras"]
            }, {
                "i": ["iéra", "eyera", "oira"]
            }, {
                "i": ["iérons", "eyerons", "oirons"]
            }, {
                "i": ["iérez", "eyerez", "oirez"]
            }, {
                "i": ["iéront", "eyeront", "oiront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["iérais", "eyerais", "oirais"]
            }, {
                "i": ["iérais", "eyerais", "oirais"]
            }, {
                "i": ["iérait", "eyerait", "oirait"]
            }, {
                "i": ["iérions", "eyerions", "oirions"]
            }, {
                "i": ["iériez", "eyeriez", "oiriez"]
            }, {
                "i": ["iéraient", "eyeraient", "oiraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{
                "i": ["eye", "oie"]
            }, {
                "i": ["eyes", "oies"]
            }, {
                "i": ["eye", "oie"]
            }, {
                "i": ["eyions", "oyions"]
            }, {
                "i": ["eyiez", "oyiez"]
            }, {
                "i": ["eyent", "oient"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{
                "i": ["ieds", "ois"]
            }, {
                "i": ["eyons", "oyons"]
            }, {
                "i": ["eyez", "oyez"]
            }]
        }
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["eyant", "oyant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ass:oir",
    "infinitive": {
        "infinitive-present": {
            "p": {
                "i": ["eoir", "oir"]
            }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["ieds", "ois"]
            }, {
                "i": ["ieds", "ois"]
            }, {
                "i": ["ied", "oit"]
            }, {
                "i": ["eyons", "oyons"]
            }, {
                "i": ["eyez", "oyez"]
            }, {
                "i": ["eyent", "oient"]
            }]
        },
        "imperfect": {
            "p": [{
                "i": ["eyais", "oyais"]
            }, {
                "i": ["eyais", "oyais"]
            }, {
                "i": ["eyait", "oyait"]
            }, {
                "i": ["eyions", "oyions"]
            }, {
                "i": ["eyiez", "oyiez"]
            }, {
                "i": ["eyaient", "oyaient"]
            }]
        },
        "future": {
            "p": [{
                "i": ["iérai", "eyerai", "oirai"]
            }, {
                "i": ["iéras", "eyeras", "oiras"]
            }, {
                "i": ["iéra", "eyera", "oira"]
            }, {
                "i": ["iérons", "eyerons", "oirons"]
            }, {
                "i": ["iérez", "eyerez", "oirez"]
            }, {
                "i": ["iéront", "eyeront", "oiront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["iérais", "eyerais", "oirais"]
            }, {
                "i": ["iérais", "eyerais", "oirais"]
            }, {
                "i": ["iérait", "eyerait", "oirait"]
            }, {
                "i": ["iérions", "eyerions", "oirions"]
            }, {
                "i": ["iériez", "eyeriez", "oiriez"]
            }, {
                "i": ["iéraient", "eyeraient", "oiraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{
                "i": ["eye", "oie"]
            }, {
                "i": ["eyes", "oies"]
            }, {
                "i": ["eye", "oie"]
            }, {
                "i": ["eyions", "oyions"]
            }, {
                "i": ["eyiez", "oyiez"]
            }, {
                "i": ["eyent", "oient"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{
                "i": ["ieds", "ois"]
            }, {
                "i": ["eyons", "oyons"]
            }, {
                "i": ["eyez", "oyez"]
            }]
        }
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["eyant", "oyant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "surs:eoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "eoirai" }, { "i": "eoiras" }, { "i": "eoira" }, { "i": "eoirons" }, { "i": "eoirez" }, { "i": "eoiront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "eoirais" }, { "i": "eoirais" }, { "i": "eoirait" }, { "i": "eoirions" }, { "i": "eoiriez" }, { "i": "eoiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "surs:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:eoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "eoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ied" }, { "i": "iéent" }]
        },
        "imperfect": {
            "p": [{ "i": "eyait" }, { "i": "eyaient" }]
        },
        "future": {
            "p": [{ "i": "iéra" }, { "i": "iéront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "iérait" }, { "i": "iéraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "iée" }, { "i": "iéent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["éant", "eyant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "pl:euvoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "euvoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "eut" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": [{ "i": "euvait" }, { "i": "euvaient" }]
        },
        "future": {
            "p": [{ "i": "euvra" }, { "i": "euvront" }]
        },
        "simple-past": {
            "p": { "i": "ut" }
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "euvrait" }, { "i": "euvraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "euve" }, { "i": "euvent" }]
        },
        "imperfect": {
            "p": { "i": "ût" }
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "euvant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fa:lloir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "lloir" }
        }
    },
    "indicative": {
        "present": {
            "p": { "i": "ut" }
        },
        "imperfect": {
            "p": { "i": "llait" }
        },
        "future": {
            "p": { "i": "udra" }
        },
        "simple-past": {
            "p": { "i": "llut" }
        }
    },
    "conditional": {
        "present": {
            "p": { "i": "udrait" }
        }
    },
    "subjunctive": {
        "present": {
            "p": { "i": "ille" }
        },
        "imperfect": {
            "p": { "i": "llût" }
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": { "i": "llu" }
        }
    }
}), new _conjugation2.default({
    "-name": "déch:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, {
                "i": ["oit", "et"]
            }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "pourv:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ch:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {},
        "future": {
            "p": [{
                "i": ["oirai", "errai"]
            }, {
                "i": ["oiras", "erras"]
            }, {
                "i": ["oira", "erra"]
            }, {
                "i": ["oirons", "errons"]
            }, {
                "i": ["oirez", "errez"]
            }, {
                "i": ["oiront", "erront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["oirais", "errais"]
            }, {
                "i": ["oirais", "errais"]
            }, {
                "i": ["oirait", "errait"]
            }, {
                "i": ["oirions", "errions"]
            }, {
                "i": ["oiriez", "erriez"]
            }, {
                "i": ["oiraient", "erraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {},
        "imperfect": {
            "p": { "i": "ût" }
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": {
                "i": ["oyant", "eyant"]
            }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "éch:oir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{
                "i": ["oit", "et"]
            }, {
                "i": ["oient", "éent"]
            }]
        },
        "imperfect": {
            "p": [{ "i": "oyait" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{
                "i": ["oira", "erra"]
            }, {
                "i": ["oiront", "erront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "ut" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["oirait", "errait"]
            }, {
                "i": ["oiraient", "erraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "ût" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "éant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ten:dre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "dre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ds" }, { "i": "ds" }, { "i": "d" }, { "i": "dons" }, { "i": "dez" }, { "i": "dent" }]
        },
        "imperfect": {
            "p": [{ "i": "dais" }, { "i": "dais" }, { "i": "dait" }, { "i": "dions" }, { "i": "diez" }, { "i": "daient" }]
        },
        "future": {
            "p": [{ "i": "drai" }, { "i": "dras" }, { "i": "dra" }, { "i": "drons" }, { "i": "drez" }, { "i": "dront" }]
        },
        "simple-past": {
            "p": [{ "i": "dis" }, { "i": "dis" }, { "i": "dit" }, { "i": "dîmes" }, { "i": "dîtes" }, { "i": "dirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "drais" }, { "i": "drais" }, { "i": "drait" }, { "i": "drions" }, { "i": "driez" }, { "i": "draient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "de" }, { "i": "des" }, { "i": "de" }, { "i": "dions" }, { "i": "diez" }, { "i": "dent" }]
        },
        "imperfect": {
            "p": [{ "i": "disse" }, { "i": "disses" }, { "i": "dît" }, { "i": "dissions" }, { "i": "dissiez" }, { "i": "dissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ds" }, { "i": "dons" }, { "i": "dez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "dant" }
        },
        "past-participle": {
            "p": [{ "i": "du" }, { "i": "dus" }, { "i": "due" }, { "i": "dues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "vain:cre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "cre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "cs" }, { "i": "cs" }, { "i": "c" }, { "i": "quons" }, { "i": "quez" }, { "i": "quent" }]
        },
        "imperfect": {
            "p": [{ "i": "quais" }, { "i": "quais" }, { "i": "quait" }, { "i": "quions" }, { "i": "quiez" }, { "i": "quaient" }]
        },
        "future": {
            "p": [{ "i": "crai" }, { "i": "cras" }, { "i": "cra" }, { "i": "crons" }, { "i": "crez" }, { "i": "cront" }]
        },
        "simple-past": {
            "p": [{ "i": "quis" }, { "i": "quis" }, { "i": "quit" }, { "i": "quîmes" }, { "i": "quîtes" }, { "i": "quirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "crais" }, { "i": "crais" }, { "i": "crait" }, { "i": "crions" }, { "i": "criez" }, { "i": "craient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "que" }, { "i": "ques" }, { "i": "que" }, { "i": "quions" }, { "i": "quiez" }, { "i": "quent" }]
        },
        "imperfect": {
            "p": [{ "i": "quisse" }, { "i": "quisses" }, { "i": "quît" }, { "i": "quissions" }, { "i": "quissiez" }, { "i": "quissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "cs" }, { "i": "quons" }, { "i": "quez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "quant" }
        },
        "past-participle": {
            "p": [{ "i": "cu" }, { "i": "cus" }, { "i": "cue" }, { "i": "cues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "bat:tre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "tre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, {}, { "i": "tons" }, { "i": "tez" }, { "i": "tent" }]
        },
        "imperfect": {
            "p": [{ "i": "tais" }, { "i": "tais" }, { "i": "tait" }, { "i": "tions" }, { "i": "tiez" }, { "i": "taient" }]
        },
        "future": {
            "p": [{ "i": "trai" }, { "i": "tras" }, { "i": "tra" }, { "i": "trons" }, { "i": "trez" }, { "i": "tront" }]
        },
        "simple-past": {
            "p": [{ "i": "tis" }, { "i": "tis" }, { "i": "tit" }, { "i": "tîmes" }, { "i": "tîtes" }, { "i": "tirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "trais" }, { "i": "trais" }, { "i": "trait" }, { "i": "trions" }, { "i": "triez" }, { "i": "traient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "te" }, { "i": "tes" }, { "i": "te" }, { "i": "tions" }, { "i": "tiez" }, { "i": "tent" }]
        },
        "imperfect": {
            "p": [{ "i": "tisse" }, { "i": "tisses" }, { "i": "tît" }, { "i": "tissions" }, { "i": "tissiez" }, { "i": "tissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "tons" }, { "i": "tez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "tant" }
        },
        "past-participle": {
            "p": [{ "i": "tu" }, { "i": "tus" }, { "i": "tue" }, { "i": "tues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fou:tre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "tre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "tons" }, { "i": "tez" }, { "i": "tent" }]
        },
        "imperfect": {
            "p": [{ "i": "tais" }, { "i": "tais" }, { "i": "tait" }, { "i": "tions" }, { "i": "tiez" }, { "i": "taient" }]
        },
        "future": {
            "p": [{ "i": "trai" }, { "i": "tras" }, { "i": "tra" }, { "i": "trons" }, { "i": "trez" }, { "i": "tront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "trais" }, { "i": "trais" }, { "i": "trait" }, { "i": "trions" }, { "i": "triez" }, { "i": "traient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "te" }, { "i": "tes" }, { "i": "te" }, { "i": "tions" }, { "i": "tiez" }, { "i": "tent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "tons" }, { "i": "tez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "tant" }
        },
        "past-participle": {
            "p": [{ "i": "tu" }, { "i": "tus" }, { "i": "tue" }, { "i": "tues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "m:ettre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ettre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ets" }, { "i": "ets" }, { "i": "et" }, { "i": "ettons" }, { "i": "ettez" }, { "i": "ettent" }]
        },
        "imperfect": {
            "p": [{ "i": "ettais" }, { "i": "ettais" }, { "i": "ettait" }, { "i": "ettions" }, { "i": "ettiez" }, { "i": "ettaient" }]
        },
        "future": {
            "p": [{ "i": "ettrai" }, { "i": "ettras" }, { "i": "ettra" }, { "i": "ettrons" }, { "i": "ettrez" }, { "i": "ettront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ettrais" }, { "i": "ettrais" }, { "i": "ettrait" }, { "i": "ettrions" }, { "i": "ettriez" }, { "i": "ettraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ette" }, { "i": "ettes" }, { "i": "ette" }, { "i": "ettions" }, { "i": "ettiez" }, { "i": "ettent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ets" }, { "i": "ettons" }, { "i": "ettez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ettant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "pr:endre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "endre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ends" }, { "i": "ends" }, { "i": "end" }, { "i": "enons" }, { "i": "enez" }, { "i": "ennent" }]
        },
        "imperfect": {
            "p": [{ "i": "enais" }, { "i": "enais" }, { "i": "enait" }, { "i": "enions" }, { "i": "eniez" }, { "i": "enaient" }]
        },
        "future": {
            "p": [{ "i": "endrai" }, { "i": "endras" }, { "i": "endra" }, { "i": "endrons" }, { "i": "endrez" }, { "i": "endront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "endrais" }, { "i": "endrais" }, { "i": "endrait" }, { "i": "endrions" }, { "i": "endriez" }, { "i": "endraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "enne" }, { "i": "ennes" }, { "i": "enne" }, { "i": "enions" }, { "i": "eniez" }, { "i": "ennent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ends" }, { "i": "enons" }, { "i": "enez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "enant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "rom:pre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "pre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ps" }, { "i": "ps" }, { "i": "pt" }, { "i": "pons" }, { "i": "pez" }, { "i": "pent" }]
        },
        "imperfect": {
            "p": [{ "i": "pais" }, { "i": "pais" }, { "i": "pait" }, { "i": "pions" }, { "i": "piez" }, { "i": "paient" }]
        },
        "future": {
            "p": [{ "i": "prai" }, { "i": "pras" }, { "i": "pra" }, { "i": "prons" }, { "i": "prez" }, { "i": "pront" }]
        },
        "simple-past": {
            "p": [{ "i": "pis" }, { "i": "pis" }, { "i": "pit" }, { "i": "pîmes" }, { "i": "pîtes" }, { "i": "pirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "prais" }, { "i": "prais" }, { "i": "prait" }, { "i": "prions" }, { "i": "priez" }, { "i": "praient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "pe" }, { "i": "pes" }, { "i": "pe" }, { "i": "pions" }, { "i": "piez" }, { "i": "pent" }]
        },
        "imperfect": {
            "p": [{ "i": "pisse" }, { "i": "pisses" }, { "i": "pît" }, { "i": "pissions" }, { "i": "pissiez" }, { "i": "pissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ps" }, { "i": "pons" }, { "i": "pez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "pant" }
        },
        "past-participle": {
            "p": [{ "i": "pu" }, { "i": "pus" }, { "i": "pue" }, { "i": "pues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "mou:dre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "dre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ds" }, { "i": "ds" }, { "i": "d" }, { "i": "lons" }, { "i": "lez" }, { "i": "lent" }]
        },
        "imperfect": {
            "p": [{ "i": "lais" }, { "i": "lais" }, { "i": "lait" }, { "i": "lions" }, { "i": "liez" }, { "i": "laient" }]
        },
        "future": {
            "p": [{ "i": "drai" }, { "i": "dras" }, { "i": "dra" }, { "i": "drons" }, { "i": "drez" }, { "i": "dront" }]
        },
        "simple-past": {
            "p": [{ "i": "lus" }, { "i": "lus" }, { "i": "lut" }, { "i": "lûmes" }, { "i": "lûtes" }, { "i": "lurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "drais" }, { "i": "drais" }, { "i": "drait" }, { "i": "drions" }, { "i": "driez" }, { "i": "draient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "le" }, { "i": "les" }, { "i": "le" }, { "i": "lions" }, { "i": "liez" }, { "i": "lent" }]
        },
        "imperfect": {
            "p": [{ "i": "lusse" }, { "i": "lusses" }, { "i": "lût" }, { "i": "lussions" }, { "i": "lussiez" }, { "i": "lussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ds" }, { "i": "lons" }, { "i": "lez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lant" }
        },
        "past-participle": {
            "p": [{ "i": "lu" }, { "i": "lus" }, { "i": "lue" }, { "i": "lues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cou:dre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "dre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ds" }, { "i": "ds" }, { "i": "d" }, { "i": "sons" }, { "i": "sez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sais" }, { "i": "sais" }, { "i": "sait" }, { "i": "sions" }, { "i": "siez" }, { "i": "saient" }]
        },
        "future": {
            "p": [{ "i": "drai" }, { "i": "dras" }, { "i": "dra" }, { "i": "drons" }, { "i": "drez" }, { "i": "dront" }]
        },
        "simple-past": {
            "p": [{ "i": "sis" }, { "i": "sis" }, { "i": "sit" }, { "i": "sîmes" }, { "i": "sîtes" }, { "i": "sirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "drais" }, { "i": "drais" }, { "i": "drait" }, { "i": "drions" }, { "i": "driez" }, { "i": "draient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "se" }, { "i": "ses" }, { "i": "se" }, { "i": "sions" }, { "i": "siez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sisse" }, { "i": "sisses" }, { "i": "sît" }, { "i": "sissions" }, { "i": "sissiez" }, { "i": "sissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ds" }, { "i": "sons" }, { "i": "sez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "sant" }
        },
        "past-participle": {
            "p": [{ "i": "su" }, { "i": "sus" }, { "i": "sue" }, { "i": "sues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "réso:udre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "udre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "lvons" }, { "i": "lvez" }, { "i": "lvent" }]
        },
        "imperfect": {
            "p": [{ "i": "lvais" }, { "i": "lvais" }, { "i": "lvait" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvaient" }]
        },
        "future": {
            "p": [{ "i": "udrai" }, { "i": "udras" }, { "i": "udra" }, { "i": "udrons" }, { "i": "udrez" }, { "i": "udront" }]
        },
        "simple-past": {
            "p": [{ "i": "lus" }, { "i": "lus" }, { "i": "lut" }, { "i": "lûmes" }, { "i": "lûtes" }, { "i": "lurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "udrais" }, { "i": "udrais" }, { "i": "udrait" }, { "i": "udrions" }, { "i": "udriez" }, { "i": "udraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "lve" }, { "i": "lves" }, { "i": "lve" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvent" }]
        },
        "imperfect": {
            "p": [{ "i": "lusse" }, { "i": "lusses" }, { "i": "lût" }, { "i": "lussions" }, { "i": "lussiez" }, { "i": "lussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "us" }, { "i": "lvons" }, { "i": "lvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lvant" }
        },
        "past-participle": {
            "p": [{ "i": "lu" }, { "i": "lus" }, { "i": "lue" }, { "i": "lues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "abso:udre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "udre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "lvons" }, { "i": "lvez" }, { "i": "lvent" }]
        },
        "imperfect": {
            "p": [{ "i": "lvais" }, { "i": "lvais" }, { "i": "lvait" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvaient" }]
        },
        "future": {
            "p": [{ "i": "udrai" }, { "i": "udras" }, { "i": "udra" }, { "i": "udrons" }, { "i": "udrez" }, { "i": "udront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "udrais" }, { "i": "udrais" }, { "i": "udrait" }, { "i": "udrions" }, { "i": "udriez" }, { "i": "udraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "lve" }, { "i": "lves" }, { "i": "lve" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "us" }, { "i": "lvons" }, { "i": "lvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lvant" }
        },
        "past-participle": {
            "p": [{
                "i": ["us", "ut"]
            }, { "i": "us" }, { "i": "ute" }, { "i": "utes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "disso:udre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "udre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "lvons" }, { "i": "lvez" }, { "i": "lvent" }]
        },
        "imperfect": {
            "p": [{ "i": "lvais" }, { "i": "lvais" }, { "i": "lvait" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvaient" }]
        },
        "future": {
            "p": [{ "i": "udrai" }, { "i": "udras" }, { "i": "udra" }, { "i": "udrons" }, { "i": "udrez" }, { "i": "udront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "udrais" }, { "i": "udrais" }, { "i": "udrait" }, { "i": "udrions" }, { "i": "udriez" }, { "i": "udraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "lve" }, { "i": "lves" }, { "i": "lve" }, { "i": "lvions" }, { "i": "lviez" }, { "i": "lvent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "us" }, { "i": "lvons" }, { "i": "lvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "lvant" }
        },
        "past-participle": {
            "p": [{
                "i": ["us", "lu"]
            }, {
                "i": ["us", "lus"]
            }, {
                "i": ["ute", "lue"]
            }, {
                "i": ["utes", "lues"]
            }]
        }
    }
}), new _conjugation2.default({
    "-name": "crai:ndre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ndre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ns" }, { "i": "ns" }, { "i": "nt" }, { "i": "gnons" }, { "i": "gnez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnais" }, { "i": "gnais" }, { "i": "gnait" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnaient" }]
        },
        "future": {
            "p": [{ "i": "ndrai" }, { "i": "ndras" }, { "i": "ndra" }, { "i": "ndrons" }, { "i": "ndrez" }, { "i": "ndront" }]
        },
        "simple-past": {
            "p": [{ "i": "gnis" }, { "i": "gnis" }, { "i": "gnit" }, { "i": "gnîmes" }, { "i": "gnîtes" }, { "i": "gnirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ndrais" }, { "i": "ndrais" }, { "i": "ndrait" }, { "i": "ndrions" }, { "i": "ndriez" }, { "i": "ndraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "gne" }, { "i": "gnes" }, { "i": "gne" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnisse" }, { "i": "gnisses" }, { "i": "gnît" }, { "i": "gnissions" }, { "i": "gnissiez" }, { "i": "gnissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ns" }, { "i": "gnons" }, { "i": "gnez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "gnant" }
        },
        "past-participle": {
            "p": [{ "i": "nt" }, { "i": "nts" }, { "i": "nte" }, { "i": "ntes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "poi:ndre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ndre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ns" }, { "i": "ns" }, { "i": "nt" }, { "i": "gnons" }, { "i": "gnez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnais" }, { "i": "gnais" }, { "i": "gnait" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnaient" }]
        },
        "future": {
            "p": [{ "i": "ndrai" }, { "i": "ndras" }, { "i": "ndra" }, { "i": "ndrons" }, { "i": "ndrez" }, { "i": "ndront" }]
        },
        "simple-past": {
            "p": [{ "i": "gnis" }, { "i": "gnis" }, { "i": "gnit" }, { "i": "gnîmes" }, { "i": "gnîtes" }, { "i": "gnirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ndrais" }, { "i": "ndrais" }, { "i": "ndrait" }, { "i": "ndrions" }, { "i": "ndriez" }, { "i": "ndraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "gne" }, { "i": "gnes" }, { "i": "gne" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnisse" }, { "i": "gnisses" }, { "i": "gnît" }, { "i": "gnissions" }, { "i": "gnissiez" }, { "i": "gnissent" }]
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "gnant" }
        },
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "sui:vre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "vre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "vons" }, { "i": "vez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "vais" }, { "i": "vais" }, { "i": "vait" }, { "i": "vions" }, { "i": "viez" }, { "i": "vaient" }]
        },
        "future": {
            "p": [{ "i": "vrai" }, { "i": "vras" }, { "i": "vra" }, { "i": "vrons" }, { "i": "vrez" }, { "i": "vront" }]
        },
        "simple-past": {
            "p": [{ "i": "vis" }, { "i": "vis" }, { "i": "vit" }, { "i": "vîmes" }, { "i": "vîtes" }, { "i": "virent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "vrais" }, { "i": "vrais" }, { "i": "vrait" }, { "i": "vrions" }, { "i": "vriez" }, { "i": "vraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ve" }, { "i": "ves" }, { "i": "ve" }, { "i": "vions" }, { "i": "viez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "visse" }, { "i": "visses" }, { "i": "vît" }, { "i": "vissions" }, { "i": "vissiez" }, { "i": "vissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "vons" }, { "i": "vez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "vant" }
        },
        "past-participle": {
            "p": [{ "i": "vi" }, { "i": "vis" }, { "i": "vie" }, { "i": "vies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "v:ivre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ivre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "ivons" }, { "i": "ivez" }, { "i": "ivent" }]
        },
        "imperfect": {
            "p": [{ "i": "ivais" }, { "i": "ivais" }, { "i": "ivait" }, { "i": "ivions" }, { "i": "iviez" }, { "i": "ivaient" }]
        },
        "future": {
            "p": [{ "i": "ivrai" }, { "i": "ivras" }, { "i": "ivra" }, { "i": "ivrons" }, { "i": "ivrez" }, { "i": "ivront" }]
        },
        "simple-past": {
            "p": [{ "i": "écus" }, { "i": "écus" }, { "i": "écut" }, { "i": "écûmes" }, { "i": "écûtes" }, { "i": "écurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ivrais" }, { "i": "ivrais" }, { "i": "ivrait" }, { "i": "ivrions" }, { "i": "ivriez" }, { "i": "ivraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ive" }, { "i": "ives" }, { "i": "ive" }, { "i": "ivions" }, { "i": "iviez" }, { "i": "ivent" }]
        },
        "imperfect": {
            "p": [{ "i": "écusse" }, { "i": "écusses" }, { "i": "écût" }, { "i": "écussions" }, { "i": "écussiez" }, { "i": "écussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "ivons" }, { "i": "ivez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ivant" }
        },
        "past-participle": {
            "p": [{ "i": "écu" }, { "i": "écus" }, { "i": "écue" }, { "i": "écues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "rep:aître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aissons" }, { "i": "aissez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aissais" }, { "i": "aissais" }, { "i": "aissait" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissaient" }]
        },
        "future": {
            "p": [{ "i": "aîtrai" }, { "i": "aîtras" }, { "i": "aîtra" }, { "i": "aîtrons" }, { "i": "aîtrez" }, { "i": "aîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aîtrais" }, { "i": "aîtrais" }, { "i": "aîtrait" }, { "i": "aîtrions" }, { "i": "aîtriez" }, { "i": "aîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aisse" }, { "i": "aisses" }, { "i": "aisse" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aissons" }, { "i": "aissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aissant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "p:aître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aissons" }, { "i": "aissez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aissais" }, { "i": "aissais" }, { "i": "aissait" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissaient" }]
        },
        "future": {
            "p": [{ "i": "aîtrai" }, { "i": "aîtras" }, { "i": "aîtra" }, { "i": "aîtrons" }, { "i": "aîtrez" }, { "i": "aîtront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aîtrais" }, { "i": "aîtrais" }, { "i": "aîtrait" }, { "i": "aîtrions" }, { "i": "aîtriez" }, { "i": "aîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aisse" }, { "i": "aisses" }, { "i": "aisse" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aissant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "ue" }, { "i": "us" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "par:aître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aissons" }, { "i": "aissez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aissais" }, { "i": "aissais" }, { "i": "aissait" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissaient" }]
        },
        "future": {
            "p": [{ "i": "aîtrai" }, { "i": "aîtras" }, { "i": "aîtra" }, { "i": "aîtrons" }, { "i": "aîtrez" }, { "i": "aîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aîtrais" }, { "i": "aîtrais" }, { "i": "aîtrait" }, { "i": "aîtrions" }, { "i": "aîtriez" }, { "i": "aîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aisse" }, { "i": "aisses" }, { "i": "aisse" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aissons" }, { "i": "aissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aissant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "n:aître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aissons" }, { "i": "aissez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aissais" }, { "i": "aissais" }, { "i": "aissait" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissaient" }]
        },
        "future": {
            "p": [{ "i": "aîtrai" }, { "i": "aîtras" }, { "i": "aîtra" }, { "i": "aîtrons" }, { "i": "aîtrez" }, { "i": "aîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "aquis" }, { "i": "aquis" }, { "i": "aquit" }, { "i": "aquîmes" }, { "i": "aquîtes" }, { "i": "aquirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aîtrais" }, { "i": "aîtrais" }, { "i": "aîtrait" }, { "i": "aîtrions" }, { "i": "aîtriez" }, { "i": "aîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aisse" }, { "i": "aisses" }, { "i": "aisse" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aquisse" }, { "i": "aquisses" }, { "i": "aquît" }, { "i": "aquissions" }, { "i": "aquissiez" }, { "i": "aquissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aissons" }, { "i": "aissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aissant" }
        },
        "past-participle": {
            "p": [{ "i": "é" }, { "i": "és" }, { "i": "ée" }, { "i": "ées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "ren:aître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aissons" }, { "i": "aissez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aissais" }, { "i": "aissais" }, { "i": "aissait" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissaient" }]
        },
        "future": {
            "p": [{ "i": "aîtrai" }, { "i": "aîtras" }, { "i": "aîtra" }, { "i": "aîtrons" }, { "i": "aîtrez" }, { "i": "aîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "aquis" }, { "i": "aquis" }, { "i": "aquit" }, { "i": "aquîmes" }, { "i": "aquîtes" }, { "i": "aquirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aîtrais" }, { "i": "aîtrais" }, { "i": "aîtrait" }, { "i": "aîtrions" }, { "i": "aîtriez" }, { "i": "aîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aisse" }, { "i": "aisses" }, { "i": "aisse" }, { "i": "aissions" }, { "i": "aissiez" }, { "i": "aissent" }]
        },
        "imperfect": {
            "p": [{ "i": "aquisse" }, { "i": "aquisses" }, { "i": "aquît" }, { "i": "aquissions" }, { "i": "aquissiez" }, { "i": "aquissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aissons" }, { "i": "aissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aissant" }
        },
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "cr:oître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "oîs" }, { "i": "oîs" }, { "i": "oît" }, { "i": "oissons" }, { "i": "oissez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "oissais" }, { "i": "oissais" }, { "i": "oissait" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissaient" }]
        },
        "future": {
            "p": [{ "i": "oîtrai" }, { "i": "oîtras" }, { "i": "oîtra" }, { "i": "oîtrons" }, { "i": "oîtrez" }, { "i": "oîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "ûs" }, { "i": "ûs" }, { "i": "ût" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "ûrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oîtrais" }, { "i": "oîtrais" }, { "i": "oîtrait" }, { "i": "oîtrions" }, { "i": "oîtriez" }, { "i": "oîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oisse" }, { "i": "oisses" }, { "i": "oisse" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "ûsse" }, { "i": "ûsses" }, { "i": "ût" }, { "i": "ûssions" }, { "i": "ûssiez" }, { "i": "ûssent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oissons" }, { "i": "oissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oissant" }
        },
        "past-participle": {
            "p": [{ "i": "û" }, { "i": "ûs" }, { "i": "ûe" }, { "i": "ûes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "recr:oître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "oîs" }, { "i": "oîs" }, { "i": "oît" }, { "i": "oissons" }, { "i": "oissez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "oissais" }, { "i": "oissais" }, { "i": "oissait" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissaient" }]
        },
        "future": {
            "p": [{ "i": "oîtrai" }, { "i": "oîtras" }, { "i": "oîtra" }, { "i": "oîtrons" }, { "i": "oîtrez" }, { "i": "oîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oîtrais" }, { "i": "oîtrais" }, { "i": "oîtrait" }, { "i": "oîtrions" }, { "i": "oîtriez" }, { "i": "oîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oisse" }, { "i": "oisses" }, { "i": "oisse" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oissons" }, { "i": "oissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oissant" }
        },
        "past-participle": {
            "p": [{ "i": "û" }, { "i": "ûs" }, { "i": "ûe" }, { "i": "ûes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "accr:oître",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oître" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "oîs" }, { "i": "oîs" }, { "i": "oît" }, { "i": "oissons" }, { "i": "oissez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "oissais" }, { "i": "oissais" }, { "i": "oissait" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissaient" }]
        },
        "future": {
            "p": [{ "i": "oîtrai" }, { "i": "oîtras" }, { "i": "oîtra" }, { "i": "oîtrons" }, { "i": "oîtrez" }, { "i": "oîtront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oîtrais" }, { "i": "oîtrais" }, { "i": "oîtrait" }, { "i": "oîtrions" }, { "i": "oîtriez" }, { "i": "oîtraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oisse" }, { "i": "oisses" }, { "i": "oisse" }, { "i": "oissions" }, { "i": "oissiez" }, { "i": "oissent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oissons" }, { "i": "oissez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oissant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "r:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "ions" }, { "i": "iez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "iais" }, { "i": "iais" }, { "i": "iait" }, { "i": "iions" }, { "i": "iiez" }, { "i": "iaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "iions" }, { "i": "iiez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "ions" }, { "i": "iez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "iant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "circonc:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "ise" }, { "i": "ises" }]
        }
    }
}), new _conjugation2.default({
    "-name": "concl:ure",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ure" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "uons" }, { "i": "uez" }, { "i": "uent" }]
        },
        "imperfect": {
            "p": [{ "i": "uais" }, { "i": "uais" }, { "i": "uait" }, { "i": "uions" }, { "i": "uiez" }, { "i": "uaient" }]
        },
        "future": {
            "p": [{ "i": "urai" }, { "i": "uras" }, { "i": "ura" }, { "i": "urons" }, { "i": "urez" }, { "i": "uront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "urais" }, { "i": "urais" }, { "i": "urait" }, { "i": "urions" }, { "i": "uriez" }, { "i": "uraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ue" }, { "i": "ues" }, { "i": "ue" }, { "i": "uions" }, { "i": "uiez" }, { "i": "uent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "us" }, { "i": "uons" }, { "i": "uez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "uant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "incl:ure",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ure" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "uons" }, { "i": "uez" }, { "i": "uent" }]
        },
        "imperfect": {
            "p": [{ "i": "uais" }, { "i": "uais" }, { "i": "uait" }, { "i": "uions" }, { "i": "uiez" }, { "i": "uaient" }]
        },
        "future": {
            "p": [{ "i": "urai" }, { "i": "uras" }, { "i": "ura" }, { "i": "urons" }, { "i": "urez" }, { "i": "uront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "urais" }, { "i": "urais" }, { "i": "urait" }, { "i": "urions" }, { "i": "uriez" }, { "i": "uraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ue" }, { "i": "ues" }, { "i": "ue" }, { "i": "uions" }, { "i": "uiez" }, { "i": "uent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "us" }, { "i": "uons" }, { "i": "uez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "uant" }
        },
        "past-participle": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "use" }, { "i": "uses" }]
        }
    }
}), new _conjugation2.default({
    "-name": "nui:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "sons" }, { "i": "sez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sais" }, { "i": "sais" }, { "i": "sait" }, { "i": "sions" }, { "i": "siez" }, { "i": "saient" }]
        },
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {
            "p": [{ "i": "sis" }, { "i": "sis" }, { "i": "sit" }, { "i": "sîmes" }, { "i": "sîtes" }, { "i": "sirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "se" }, { "i": "ses" }, { "i": "se" }, { "i": "sions" }, { "i": "siez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sisse" }, { "i": "sisses" }, { "i": "sît" }, { "i": "sissions" }, { "i": "sissiez" }, { "i": "sissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "sons" }, { "i": "sez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "sant" }
        },
        "past-participle": {
            "p": {}
        }
    }
}), new _conjugation2.default({
    "-name": "lu:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{
                "i": ["is", "isis"]
            }, {
                "i": ["is", "isis"]
            }, {
                "i": ["it", "isit"]
            }, {
                "i": ["îmes", "isîmes"]
            }, {
                "i": ["îtes", "isîtes"]
            }, {
                "i": ["irent", "isirent"]
            }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": { "i": "i" }
        }
    }
}), new _conjugation2.default({
    "-name": "condui:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "sons" }, { "i": "sez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sais" }, { "i": "sais" }, { "i": "sait" }, { "i": "sions" }, { "i": "siez" }, { "i": "saient" }]
        },
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {
            "p": [{ "i": "sis" }, { "i": "sis" }, { "i": "sit" }, { "i": "sîmes" }, { "i": "sîtes" }, { "i": "sirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "se" }, { "i": "ses" }, { "i": "se" }, { "i": "sions" }, { "i": "siez" }, { "i": "sent" }]
        },
        "imperfect": {
            "p": [{ "i": "sisse" }, { "i": "sisses" }, { "i": "sît" }, { "i": "sissions" }, { "i": "sissiez" }, { "i": "sissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "sons" }, { "i": "sez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "sant" }
        },
        "past-participle": {
            "p": [{ "i": "t" }, { "i": "ts" }, { "i": "te" }, { "i": "tes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "écri:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "vons" }, { "i": "vez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "vais" }, { "i": "vais" }, { "i": "vait" }, { "i": "vions" }, { "i": "viez" }, { "i": "vaient" }]
        },
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {
            "p": [{ "i": "vis" }, { "i": "vis" }, { "i": "vit" }, { "i": "vîmes" }, { "i": "vîtes" }, { "i": "virent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ve" }, { "i": "ves" }, { "i": "ve" }, { "i": "vions" }, { "i": "viez" }, { "i": "vent" }]
        },
        "imperfect": {
            "p": [{ "i": "visse" }, { "i": "visses" }, { "i": "vît" }, { "i": "vissions" }, { "i": "vissiez" }, { "i": "vissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "s" }, { "i": "vons" }, { "i": "vez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "vant" }
        },
        "past-participle": {
            "p": [{ "i": "t" }, { "i": "ts" }, { "i": "te" }, { "i": "tes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "cr:oire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "suff:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "i" }, { "i": "is" }, { "i": "ie" }, { "i": "ies" }]
        }
    }
}), new _conjugation2.default({
    "-name": "d:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "ites" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "ites" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "interd:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "méd:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "préd:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, {
                "i": ["ites", "isez"]
            }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, {
                "i": ["ites", "isez"]
            }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "l:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "isons" }, { "i": "isez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "isais" }, { "i": "isais" }, { "i": "isait" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ise" }, { "i": "ises" }, { "i": "ise" }, { "i": "isions" }, { "i": "isiez" }, { "i": "isent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "isons" }, { "i": "isez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "isant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "b:oire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ois" }, { "i": "ois" }, { "i": "oit" }, { "i": "uvons" }, { "i": "uvez" }, { "i": "oivent" }]
        },
        "imperfect": {
            "p": [{ "i": "uvais" }, { "i": "uvais" }, { "i": "uvait" }, { "i": "uvions" }, { "i": "uviez" }, { "i": "uvaient" }]
        },
        "future": {
            "p": [{ "i": "oirai" }, { "i": "oiras" }, { "i": "oira" }, { "i": "oirons" }, { "i": "oirez" }, { "i": "oiront" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "oirais" }, { "i": "oirais" }, { "i": "oirait" }, { "i": "oirions" }, { "i": "oiriez" }, { "i": "oiraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oive" }, { "i": "oives" }, { "i": "oive" }, { "i": "uvions" }, { "i": "uviez" }, { "i": "oivent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ois" }, { "i": "uvons" }, { "i": "uvez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "uvant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "t:aire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "aisons" }, { "i": "aisez" }, { "i": "aisent" }]
        },
        "imperfect": {
            "p": [{ "i": "aisais" }, { "i": "aisais" }, { "i": "aisait" }, { "i": "aisions" }, { "i": "aisiez" }, { "i": "aisaient" }]
        },
        "future": {
            "p": [{ "i": "airai" }, { "i": "airas" }, { "i": "aira" }, { "i": "airons" }, { "i": "airez" }, { "i": "airont" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "airais" }, { "i": "airais" }, { "i": "airait" }, { "i": "airions" }, { "i": "airiez" }, { "i": "airaient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aise" }, { "i": "aises" }, { "i": "aise" }, { "i": "aisions" }, { "i": "aisiez" }, { "i": "aisent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aisons" }, { "i": "aisez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aisant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "pl:aire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "aît" }, { "i": "aisons" }, { "i": "aisez" }, { "i": "aisent" }]
        },
        "imperfect": {
            "p": [{ "i": "aisais" }, { "i": "aisais" }, { "i": "aisait" }, { "i": "aisions" }, { "i": "aisiez" }, { "i": "aisaient" }]
        },
        "future": {
            "p": [{ "i": "airai" }, { "i": "airas" }, { "i": "aira" }, { "i": "airons" }, { "i": "airez" }, { "i": "airont" }]
        },
        "simple-past": {
            "p": [{ "i": "us" }, { "i": "us" }, { "i": "ut" }, { "i": "ûmes" }, { "i": "ûtes" }, { "i": "urent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "airais" }, { "i": "airais" }, { "i": "airait" }, { "i": "airions" }, { "i": "airiez" }, { "i": "airaient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aise" }, { "i": "aises" }, { "i": "aise" }, { "i": "aisions" }, { "i": "aisiez" }, { "i": "aisent" }]
        },
        "imperfect": {
            "p": [{ "i": "usse" }, { "i": "usses" }, { "i": "ût" }, { "i": "ussions" }, { "i": "ussiez" }, { "i": "ussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aisons" }, { "i": "aisez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aisant" }
        },
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "f:aire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ais" }, { "i": "ais" }, { "i": "ait" }, { "i": "aisons" }, { "i": "aites" }, { "i": "ont" }]
        },
        "imperfect": {
            "p": [{ "i": "aisais" }, { "i": "aisais" }, { "i": "aisait" }, { "i": "aisions" }, { "i": "aisiez" }, { "i": "aisaient" }]
        },
        "future": {
            "p": [{ "i": "erai" }, { "i": "eras" }, { "i": "era" }, { "i": "erons" }, { "i": "erez" }, { "i": "eront" }]
        },
        "simple-past": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "îmes" }, { "i": "îtes" }, { "i": "irent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "erais" }, { "i": "erais" }, { "i": "erait" }, { "i": "erions" }, { "i": "eriez" }, { "i": "eraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "asse" }, { "i": "asses" }, { "i": "asse" }, { "i": "assions" }, { "i": "assiez" }, { "i": "assent" }]
        },
        "imperfect": {
            "p": [{ "i": "isse" }, { "i": "isses" }, { "i": "ît" }, { "i": "issions" }, { "i": "issiez" }, { "i": "issent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ais" }, { "i": "aisons" }, { "i": "aites" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "aisant" }
        },
        "past-participle": {
            "p": [{ "i": "ait" }, { "i": "aits" }, { "i": "aite" }, { "i": "aites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "extra:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "yons" }, { "i": "yez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yions" }, { "i": "yiez" }, { "i": "ient" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "bra:ire",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ire" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "yons" }, { "i": "yez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yions" }, { "i": "yiez" }, { "i": "ient" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "it" }, { "i": "its" }, { "i": "ite" }, { "i": "ites" }]
        }
    }
}), new _conjugation2.default({
    "-name": "s:ourdre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ourdre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ourd" }, { "i": "ourdent" }]
        },
        "imperfect": {
            "p": [{ "i": "ourdait" }, { "i": "ourdaient" }]
        },
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "cl:ore",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ore" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "os" }, { "i": "os" }, { "i": "ôt" }, { "i": "osent" }]
        },
        "imperfect": {},
        "future": {
            "p": [{ "i": "orai" }, { "i": "oras" }, { "i": "ora" }, { "i": "orons" }, { "i": "orez" }, { "i": "oront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "orais" }, { "i": "orais" }, { "i": "orait" }, { "i": "orions" }, { "i": "oriez" }, { "i": "oraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ose" }, { "i": "oses" }, { "i": "ose" }, { "i": "osions" }, { "i": "osiez" }, { "i": "osent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": { "i": "os" }
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "osant" }
        },
        "past-participle": {
            "p": [{ "i": "os" }, { "i": "os" }, { "i": "ose" }, { "i": "oses" }]
        }
    }
}), new _conjugation2.default({
    "-name": "éclo:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }, { "i": "sent" }]
        },
        "imperfect": {},
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "se" }, { "i": "ses" }, { "i": "se" }, { "i": "sions" }, { "i": "siez" }, { "i": "sent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": { "i": "s" }
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "sant" }
        },
        "past-participle": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "se" }, { "i": "ses" }]
        }
    }
}), new _conjugation2.default({
    "-name": "forclo:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "se" }, { "i": "ses" }]
        }
    }
}), new _conjugation2.default({
    "-name": "fri:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "t" }]
        },
        "imperfect": {},
        "future": {
            "p": [{ "i": "rai" }, { "i": "ras" }, { "i": "ra" }, { "i": "rons" }, { "i": "rez" }, { "i": "ront" }]
        },
        "simple-past": {}
    },
    "conditional": {
        "present": {
            "p": [{ "i": "rais" }, { "i": "rais" }, { "i": "rait" }, { "i": "rions" }, { "i": "riez" }, { "i": "raient" }]
        }
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {
            "p": { "i": "s" }
        }
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": [{ "i": "t" }, { "i": "ts" }, { "i": "te" }, { "i": "tes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "brui:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "t" }, { "i": "ssent" }]
        },
        "imperfect": {
            "p": [{ "i": "ssait" }, { "i": "ssaient" }]
        },
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "sse" }, { "i": "ssent" }]
        },
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ssant" }
        },
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "oi:ndre",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ndre" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ns" }, { "i": "ns" }, { "i": "nt" }, { "i": "gnons" }, { "i": "gnez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnais" }, { "i": "gnais" }, { "i": "gnait" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnaient" }]
        },
        "future": {
            "p": [{ "i": "ndrai" }, { "i": "ndras" }, { "i": "ndra" }, { "i": "ndrons" }, { "i": "ndrez" }, { "i": "ndront" }]
        },
        "simple-past": {
            "p": [{ "i": "gnis" }, { "i": "gnis" }, { "i": "gnit" }, { "i": "gnîmes" }, { "i": "gnîtes" }, { "i": "gnirent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "ndrais" }, { "i": "ndrais" }, { "i": "ndrait" }, { "i": "ndrions" }, { "i": "ndriez" }, { "i": "ndraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "gne" }, { "i": "gnes" }, { "i": "gne" }, { "i": "gnions" }, { "i": "gniez" }, { "i": "gnent" }]
        },
        "imperfect": {
            "p": [{ "i": "gnisse" }, { "i": "gnisses" }, { "i": "gnît" }, { "i": "gnissions" }, { "i": "gnissiez" }, { "i": "gnissent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "ns" }, { "i": "gnons" }, { "i": "gnez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "gnant" }
        },
        "past-participle": {
            "p": [{ "i": "nt" }, { "i": "nts" }, { "i": "nte" }, { "i": "ntes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "env:oyer",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "oyer" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyons" }, { "i": "oyez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyais" }, { "i": "oyais" }, { "i": "oyait" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oyaient" }]
        },
        "future": {
            "p": [{ "i": "errai" }, { "i": "erras" }, { "i": "erra" }, { "i": "errons" }, { "i": "errez" }, { "i": "erront" }]
        },
        "simple-past": {
            "p": [{ "i": "oyai" }, { "i": "oyas" }, { "i": "oya" }, { "i": "oyâmes" }, { "i": "oyâtes" }, { "i": "oyèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "errais" }, { "i": "errais" }, { "i": "errait" }, { "i": "errions" }, { "i": "erriez" }, { "i": "erraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "oie" }, { "i": "oies" }, { "i": "oie" }, { "i": "oyions" }, { "i": "oyiez" }, { "i": "oient" }]
        },
        "imperfect": {
            "p": [{ "i": "oyasse" }, { "i": "oyasses" }, { "i": "oyât" }, { "i": "oyassions" }, { "i": "oyassiez" }, { "i": "oyassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "oie" }, { "i": "oyons" }, { "i": "oyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "oyant" }
        },
        "past-participle": {
            "p": [{ "i": "oyé" }, { "i": "oyés" }, { "i": "oyée" }, { "i": "oyées" }]
        }
    }
}), new _conjugation2.default({
    "-name": ":avoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "avoir" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "ai" }, { "i": "as" }, { "i": "a" }, { "i": "avons" }, { "i": "avez" }, { "i": "ont" }]
        },
        "imperfect": {
            "p": [{ "i": "avais" }, { "i": "avais" }, { "i": "avait" }, { "i": "avions" }, { "i": "aviez" }, { "i": "avaient" }]
        },
        "future": {
            "p": [{ "i": "aurai" }, { "i": "auras" }, { "i": "aura" }, { "i": "aurons" }, { "i": "aurez" }, { "i": "auront" }]
        },
        "simple-past": {
            "p": [{ "i": "eus" }, { "i": "eus" }, { "i": "eut" }, { "i": "eûmes" }, { "i": "eûtes" }, { "i": "eurent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "aurais" }, { "i": "aurais" }, { "i": "aurait" }, { "i": "aurions" }, { "i": "auriez" }, { "i": "auraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aie" }, { "i": "aies" }, { "i": "ait" }, { "i": "ayons" }, { "i": "ayez" }, { "i": "aient" }]
        },
        "imperfect": {
            "p": [{ "i": "eusse" }, { "i": "eusses" }, { "i": "eût" }, { "i": "eussions" }, { "i": "eussiez" }, { "i": "eussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "aie" }, { "i": "ayons" }, { "i": "ayez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ayant" }
        },
        "past-participle": {
            "p": [{ "i": "eu" }, { "i": "eus" }, { "i": "eue" }, { "i": "eues" }]
        }
    }
}), new _conjugation2.default({
    "-name": ":être",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "être" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "suis" }, { "i": "es" }, { "i": "est" }, { "i": "sommes" }, { "i": "êtes" }, { "i": "sont" }]
        },
        "imperfect": {
            "p": [{ "i": "étais" }, { "i": "étais" }, { "i": "était" }, { "i": "étions" }, { "i": "étiez" }, { "i": "étaient" }]
        },
        "future": {
            "p": [{ "i": "serai" }, { "i": "seras" }, { "i": "sera" }, { "i": "serons" }, { "i": "serez" }, { "i": "seront" }]
        },
        "simple-past": {
            "p": [{ "i": "fus" }, { "i": "fus" }, { "i": "fut" }, { "i": "fûmes" }, { "i": "fûtes" }, { "i": "furent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "serais" }, { "i": "serais" }, { "i": "serait" }, { "i": "serions" }, { "i": "seriez" }, { "i": "seraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "sois" }, { "i": "sois" }, { "i": "soit" }, { "i": "soyons" }, { "i": "soyez" }, { "i": "soient" }]
        },
        "imperfect": {
            "p": [{ "i": "fusse" }, { "i": "fusses" }, { "i": "fût" }, { "i": "fussions" }, { "i": "fussiez" }, { "i": "fussent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "sois" }, { "i": "soyons" }, { "i": "soyez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "étant" }
        },
        "past-participle": {
            "p": { "i": "été" }
        }
    }
}), new _conjugation2.default({
    "-name": ":aller",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aller" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "vais" }, { "i": "vas" }, { "i": "va" }, { "i": "allons" }, { "i": "allez" }, { "i": "vont" }]
        },
        "imperfect": {
            "p": [{ "i": "allais" }, { "i": "allais" }, { "i": "allait" }, { "i": "allions" }, { "i": "alliez" }, { "i": "allaient" }]
        },
        "future": {
            "p": [{ "i": "irai" }, { "i": "iras" }, { "i": "ira" }, { "i": "irons" }, { "i": "irez" }, { "i": "iront" }]
        },
        "simple-past": {
            "p": [{ "i": "allai" }, { "i": "allas" }, { "i": "alla" }, { "i": "allâmes" }, { "i": "allâtes" }, { "i": "allèrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{ "i": "irais" }, { "i": "irais" }, { "i": "irait" }, { "i": "irions" }, { "i": "iriez" }, { "i": "iraient" }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "aille" }, { "i": "ailles" }, { "i": "aille" }, { "i": "allions" }, { "i": "alliez" }, { "i": "aillent" }]
        },
        "imperfect": {
            "p": [{ "i": "allasse" }, { "i": "allasses" }, { "i": "allât" }, { "i": "allassions" }, { "i": "allassiez" }, { "i": "allassent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "va" }, { "i": "allons" }, { "i": "allez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "allant" }
        },
        "past-participle": {
            "p": [{ "i": "allé" }, { "i": "allés" }, { "i": "allée" }, { "i": "allées" }]
        }
    }
}), new _conjugation2.default({
    "-name": "app:aroir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "aroir" }
        }
    },
    "indicative": {
        "present": {
            "p": { "i": "ert" }
        },
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "cha:loir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "loir" }
        }
    },
    "indicative": {
        "present": {
            "p": { "i": "ut" }
        },
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": ":ravoir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ravoir" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "est:er",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "er" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {}
    }
}), new _conjugation2.default({
    "-name": "fér:ir",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "ir" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": [{ "i": "u" }, { "i": "us" }, { "i": "ue" }, { "i": "ues" }]
        }
    }
}), new _conjugation2.default({
    "-name": "o:uïr",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "uïr" }
        }
    },
    "indicative": {
        "present": {
            "p": [{ "i": "is" }, { "i": "is" }, { "i": "it" }, { "i": "yons" }, { "i": "yez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "yais" }, { "i": "yais" }, { "i": "yait" }, { "i": "yions" }, { "i": "yiez" }, { "i": "yaient" }]
        },
        "future": {
            "p": [{
                "i": ["irai", "uïrai", "rrai"]
            }, {
                "i": ["iras", "uïras", "rras"]
            }, {
                "i": ["ira", "uïra", "rra"]
            }, {
                "i": ["irons", "uïrons", "rrons"]
            }, {
                "i": ["irez", "uïrez", "rrez"]
            }, {
                "i": ["iront", "uïront", "rront"]
            }]
        },
        "simple-past": {
            "p": [{ "i": "uïs" }, { "i": "uïs" }, { "i": "uït" }, { "i": "uïmes" }, { "i": "uïtes" }, { "i": "uïrent" }]
        }
    },
    "conditional": {
        "present": {
            "p": [{
                "i": ["irais", "uïrais", "rrais"]
            }, {
                "i": ["irais", "uïrais", "rrais"]
            }, {
                "i": ["irait", "uïrait", "rrait"]
            }, {
                "i": ["irions", "uïrions", "rrions"]
            }, {
                "i": ["iriez", "uïriez", "rriez"]
            }, {
                "i": ["iraient", "uïraient", "rraient"]
            }]
        }
    },
    "subjunctive": {
        "present": {
            "p": [{ "i": "ie" }, { "i": "ies" }, { "i": "ie" }, { "i": "yions" }, { "i": "yiez" }, { "i": "ient" }]
        },
        "imperfect": {
            "p": [{ "i": "uïsse" }, { "i": "uïsses" }, { "i": "uït" }, { "i": "uïssions" }, { "i": "uïssiez" }, { "i": "uïssent" }]
        }
    },
    "imperative": {
        "imperative-present": {
            "p": [{ "i": "is" }, { "i": "yons" }, { "i": "yez" }]
        }
    },
    "participle": {
        "present-participle": {
            "p": { "i": "yant" }
        },
        "past-participle": {
            "p": [{ "i": "uï" }, { "i": "uïs" }, { "i": "uïe" }, { "i": "uïes" }]
        }
    }
}), new _conjugation2.default({
    "-name": "occi:re",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "re" }
        }
    },
    "indicative": {
        "present": {},
        "imperfect": {},
        "future": {},
        "simple-past": {}
    },
    "conditional": {
        "present": {}
    },
    "subjunctive": {
        "present": {},
        "imperfect": {}
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {},
        "past-participle": {
            "p": [{ "i": "s" }, { "i": "s" }, { "i": "se" }, { "i": "ses" }]
        }
    }
}), new _conjugation2.default({
    "-name": "brumass:er",
    "infinitive": {
        "infinitive-present": {
            "p": { "i": "er" }
        }
    },
    "indicative": {
        "present": {
            "p": { "i": "e" }
        },
        "imperfect": {
            "p": { "i": "ait" }
        },
        "future": {
            "p": { "i": "era" }
        },
        "simple-past": {
            "p": { "i": "a" }
        }
    },
    "conditional": {
        "present": {
            "p": { "i": "erait" }
        }
    },
    "subjunctive": {
        "present": {
            "p": { "i": "e" }
        },
        "imperfect": {
            "p": { "i": "ât" }
        }
    },
    "imperative": {
        "imperative-present": {}
    },
    "participle": {
        "present-participle": {
            "p": { "i": "ant" }
        },
        "past-participle": {
            "p": { "i": "é" }
        }
    }
})];

exports.default = CONJUGATIONS_LIST;

},{"./conjugation":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\conjugation.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\verb.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conjugationsList = require('./conjugationsList');

var _conjugationsList2 = _interopRequireDefault(_conjugationsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var verb = function () {
    function verb(name, template) {
        _classCallCheck(this, verb);

        this.verbName = name; // abaisser
        this.verbTemplate = template; // aim:er
        this.conjugation = null; // {...}

        this.terminaison = null; // er
        this.radical = null; // abaiss
        this.isAuxiliaire = false; // Savoir si le verbe est un auxiliaire

        this.conjugatedVerb = null; // Le verbe conjugé au présent, imparfait & futur
        this.isConjugated = false; // Savoir si le verbe est actuellement conjugé ou non

        this.init();
    }

    _createClass(verb, [{
        key: 'init',
        value: function init() {
            var templateSplited = this.getVerbTemplate().split(':');

            if (templateSplited[0].length === 0) {
                this.setIsAuxiliaire(true);
            }

            var terminaison = templateSplited[1];
            this.setTerminaison(terminaison);

            var radical = this.getVerbName().substring(0, this.getVerbName().length - terminaison.length);
            this.setRadical(radical);

            // On récupère l'objet de conjugaison correspondant au verbe
            var j = 0;
            while (j < _conjugationsList2.default.length && this.getConjugation() === null) {
                var conjugation = _conjugationsList2.default[j];
                if (this.getVerbTemplate() === conjugation.getName()) {
                    return this.setConjugation(conjugation);
                }
                j++;
            }
        }
    }, {
        key: 'getIsConjugated',
        value: function getIsConjugated() {
            return this.isConjugated;
        }
    }, {
        key: 'setIsConjugated',
        value: function setIsConjugated(value) {
            this.isConjugated = value;
            return this;
        }
    }, {
        key: 'getConjugatedVerb',
        value: function getConjugatedVerb() {
            var _this = this;

            if (this.conjugatedVerb === null) {
                (function () {
                    // On récupère les terminaisons des temps présent, imparfait & futur
                    var times = _this.getConjugation().getTerminaisonsByTimes({
                        indicative: ['present', 'imperfect', 'future']
                    });

                    var conjugatedObject = {};

                    var _loop = function _loop(timeCategory) {
                        // indicatif...
                        if (conjugatedObject[timeCategory] === undefined) {
                            conjugatedObject[timeCategory] = {};
                        }

                        var _loop2 = function _loop2(timeName) {
                            // present, imperfect...
                            if (conjugatedObject[timeCategory][timeName] === undefined) {
                                conjugatedObject[timeCategory][timeName] = [];
                            }
                            var terminaisons = times[timeCategory][timeName];
                            terminaisons.forEach(function (terminaison) {
                                conjugatedObject[timeCategory][timeName].push(_this.getRadical() + terminaison);
                            });
                        };

                        for (var timeName in times[timeCategory]) {
                            _loop2(timeName);
                        }
                    };

                    for (var timeCategory in times) {
                        _loop(timeCategory);
                    }

                    _this.setConjugatedVerb(conjugatedObject);
                })();
            }

            return this.conjugatedVerb;
        }
    }, {
        key: 'setConjugatedVerb',
        value: function setConjugatedVerb(value) {
            this.conjugatedVerb = value;
            return this;
        }
    }, {
        key: 'getIsAuxiliaire',
        value: function getIsAuxiliaire() {
            return this.isAuxiliaire;
        }
    }, {
        key: 'setIsAuxiliaire',
        value: function setIsAuxiliaire(value) {
            this.isAuxiliaire = value;
            return this;
        }
    }, {
        key: 'getRadical',
        value: function getRadical() {
            return this.radical;
        }
    }, {
        key: 'setRadical',
        value: function setRadical(value) {
            this.radical = value;
            return this;
        }
    }, {
        key: 'getTerminaison',
        value: function getTerminaison() {
            return this.terminaison;
        }
    }, {
        key: 'setTerminaison',
        value: function setTerminaison(value) {
            this.terminaison = value;
            return this;
        }
    }, {
        key: 'getVerbName',
        value: function getVerbName() {
            return this.verbName;
        }
    }, {
        key: 'getVerbTemplate',
        value: function getVerbTemplate() {
            return this.verbTemplate;
        }
    }, {
        key: 'setVerbTemplate',
        value: function setVerbTemplate(value) {
            this.verbTemplate = value;
            return this;
        }
    }, {
        key: 'getConjugation',
        value: function getConjugation() {
            return this.conjugation;
        }
    }, {
        key: 'setConjugation',
        value: function setConjugation(value) {
            this.conjugation = value;
            return this;
        }
    }]);

    return verb;
}();

exports.default = verb;

},{"./conjugationsList":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\conjugationsList.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\verbsList.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _verb = require("./verb");

var _verb2 = _interopRequireDefault(_verb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERBS_LIST = [new _verb2.default("abaisser", "aim:er"), new _verb2.default("abandonner", "aim:er"), new _verb2.default("abasourdir", "fin:ir"), new _verb2.default("abâtardir", "fin:ir"), new _verb2.default("abattre", "bat:tre"), new _verb2.default("abcéder", "c:éder"), new _verb2.default("abdiquer", "aim:er"), new _verb2.default("aberrer", "aim:er"), new _verb2.default("abêtir", "fin:ir"), new _verb2.default("abhorrer", "aim:er"), new _verb2.default("abîmer", "aim:er"), new _verb2.default("abjurer", "aim:er"), new _verb2.default("ablater", "aim:er"), new _verb2.default("abloquer", "aim:er"), new _verb2.default("abolir", "fin:ir"), new _verb2.default("abominer", "aim:er"), new _verb2.default("abonder", "aim:er"), new _verb2.default("abonner", "aim:er"), new _verb2.default("abonnir", "fin:ir"), new _verb2.default("aborder", "aim:er"), new _verb2.default("aboucher", "aim:er"), new _verb2.default("abouler", "aim:er"), new _verb2.default("abouter", "aim:er"), new _verb2.default("aboutir", "fin:ir"), new _verb2.default("aboyer", "netto:yer"), new _verb2.default("abraser", "aim:er"), new _verb2.default("abréger", "abr:éger"), new _verb2.default("abreuver", "aim:er"), new _verb2.default("abrévier", "aim:er"), new _verb2.default("abricoter", "aim:er"), new _verb2.default("abrier", "aim:er"), new _verb2.default("abriter", "aim:er"), new _verb2.default("abroger", "man:ger"), new _verb2.default("abrutir", "fin:ir"), new _verb2.default("absenter", "aim:er"), new _verb2.default("absorber", "aim:er"), new _verb2.default("absoudre", "abso:udre"), new _verb2.default("abstenir", "t:enir"), new _verb2.default("abstraire", "extra:ire"), new _verb2.default("abuser", "aim:er"), new _verb2.default("accabler", "aim:er"), new _verb2.default("accaparer", "aim:er"), new _verb2.default("accastiller", "aim:er"), new _verb2.default("accéder", "c:éder"), new _verb2.default("accélérer", "réf:érer"), new _verb2.default("accentuer", "aim:er"), new _verb2.default("accepter", "aim:er"), new _verb2.default("accessoiriser", "aim:er"), new _verb2.default("accidenter", "aim:er"), new _verb2.default("acclamer", "aim:er"), new _verb2.default("acclimater", "aim:er"), new _verb2.default("accointer", "aim:er"), new _verb2.default("accoler", "aim:er"), new _verb2.default("accommoder", "aim:er"), new _verb2.default("accompagner", "aim:er"), new _verb2.default("accomplir", "fin:ir"), new _verb2.default("accorder", "aim:er"), new _verb2.default("accorer", "aim:er"), new _verb2.default("accoster", "aim:er"), new _verb2.default("accoter", "aim:er"), new _verb2.default("accoucher", "aim:er"), new _verb2.default("accouder", "aim:er"), new _verb2.default("accouer", "aim:er"), new _verb2.default("accoupler", "aim:er"), new _verb2.default("accourcir", "fin:ir"), new _verb2.default("accourir", "cour:ir"), new _verb2.default("accoutrer", "aim:er"), new _verb2.default("accoutumer", "aim:er"), new _verb2.default("accréditer", "aim:er"), new _verb2.default("accréter", "décr:éter"), new _verb2.default("accrocher", "aim:er"), new _verb2.default("accroître", "accr:oître"), new _verb2.default("accroupir", "fin:ir"), new _verb2.default("accueillir", "cueill:ir"), new _verb2.default("acculer", "aim:er"), new _verb2.default("acculturer", "aim:er"), new _verb2.default("accumuler", "aim:er"), new _verb2.default("accuser", "aim:er"), new _verb2.default("acérer", "réf:érer"), new _verb2.default("acétifier", "aim:er"), new _verb2.default("acétyler", "aim:er"), new _verb2.default("achalander", "aim:er"), new _verb2.default("achaler", "aim:er"), new _verb2.default("acharner", "aim:er"), new _verb2.default("acheminer", "aim:er"), new _verb2.default("acheter", "ach:eter"), new _verb2.default("achever", "l:ever"), new _verb2.default("achopper", "aim:er"), new _verb2.default("achromatiser", "aim:er"), new _verb2.default("acidifier", "aim:er"), new _verb2.default("aciduler", "aim:er"), new _verb2.default("aciérer", "réf:érer"), new _verb2.default("aciseler", "p:eler"), new _verb2.default("acoquiner", "aim:er"), new _verb2.default("acquérir", "acqu:érir"), new _verb2.default("acquiescer", "pla:cer"), new _verb2.default("acquitter", "aim:er"), new _verb2.default("acter", "aim:er"), new _verb2.default("actionner", "aim:er"), new _verb2.default("activer", "aim:er"), new _verb2.default("actualiser", "aim:er"), new _verb2.default("adapter", "aim:er"), new _verb2.default("additionner", "aim:er"), new _verb2.default("adhérer", "réf:érer"), new _verb2.default("adjectiver", "aim:er"), new _verb2.default("adjectiviser", "aim:er"), new _verb2.default("adjoindre", "crai:ndre"), new _verb2.default("adjuger", "man:ger"), new _verb2.default("adjurer", "aim:er"), new _verb2.default("admettre", "m:ettre"), new _verb2.default("administrer", "aim:er"), new _verb2.default("admirer", "aim:er"), new _verb2.default("admonester", "aim:er"), new _verb2.default("adonner", "aim:er"), new _verb2.default("adopter", "aim:er"), new _verb2.default("adorer", "aim:er"), new _verb2.default("adosser", "aim:er"), new _verb2.default("adouber", "aim:er"), new _verb2.default("adoucir", "fin:ir"), new _verb2.default("adresser", "aim:er"), new _verb2.default("adsorber", "aim:er"), new _verb2.default("aduler", "aim:er"), new _verb2.default("adultérer", "réf:érer"), new _verb2.default("advenir", "adv:enir"), new _verb2.default("aérer", "réf:érer"), new _verb2.default("affabuler", "aim:er"), new _verb2.default("affadir", "fin:ir"), new _verb2.default("affaiblir", "fin:ir"), new _verb2.default("affairer", "aim:er"), new _verb2.default("affaisser", "aim:er"), new _verb2.default("affaler", "aim:er"), new _verb2.default("affamer", "aim:er"), new _verb2.default("afféager", "man:ger"), new _verb2.default("affecter", "aim:er"), new _verb2.default("affectionner", "aim:er"), new _verb2.default("affermer", "aim:er"), new _verb2.default("affermir", "fin:ir"), new _verb2.default("afficher", "aim:er"), new _verb2.default("affiler", "aim:er"), new _verb2.default("affilier", "aim:er"), new _verb2.default("affiner", "aim:er"), new _verb2.default("affirmer", "aim:er"), new _verb2.default("affleurer", "aim:er"), new _verb2.default("affliger", "man:ger"), new _verb2.default("afflouer", "aim:er"), new _verb2.default("affluer", "aim:er"), new _verb2.default("affoler", "aim:er"), new _verb2.default("affouager", "man:ger"), new _verb2.default("affouiller", "aim:er"), new _verb2.default("affourager", "man:ger"), new _verb2.default("affourcher", "aim:er"), new _verb2.default("affourrager", "man:ger"), new _verb2.default("affranchir", "fin:ir"), new _verb2.default("affréter", "décr:éter"), new _verb2.default("affriander", "aim:er"), new _verb2.default("affricher", "aim:er"), new _verb2.default("affrioler", "aim:er"), new _verb2.default("affriter", "aim:er"), new _verb2.default("affronter", "aim:er"), new _verb2.default("affruiter", "aim:er"), new _verb2.default("affubler", "aim:er"), new _verb2.default("affurer", "aim:er"), new _verb2.default("affûter", "aim:er"), new _verb2.default("africaniser", "aim:er"), new _verb2.default("agacer", "pla:cer"), new _verb2.default("agencer", "pla:cer"), new _verb2.default("agender", "aim:er"), new _verb2.default("agenouiller", "aim:er"), new _verb2.default("agglomérer", "réf:érer"), new _verb2.default("agglutiner", "aim:er"), new _verb2.default("aggraver", "aim:er"), new _verb2.default("agioter", "aim:er"), new _verb2.default("agir", "fin:ir"), new _verb2.default("agiter", "aim:er"), new _verb2.default("agneler", "app:eler"), new _verb2.default("agoniser", "aim:er"), new _verb2.default("agrafer", "aim:er"), new _verb2.default("agrainer", "aim:er"), new _verb2.default("agrandir", "fin:ir"), new _verb2.default("agréer", "aim:er"), new _verb2.default("agréger", "abr:éger"), new _verb2.default("agrémenter", "aim:er"), new _verb2.default("agresser", "aim:er"), new _verb2.default("agricher", "aim:er"), new _verb2.default("agriffer", "aim:er"), new _verb2.default("agripper", "aim:er"), new _verb2.default("aguerrir", "fin:ir"), new _verb2.default("aguicher", "aim:er"), new _verb2.default("ahaner", "aim:er"), new _verb2.default("ahurir", "fin:ir"), new _verb2.default("aider", "aim:er"), new _verb2.default("aigrir", "fin:ir"), new _verb2.default("aiguiller", "aim:er"), new _verb2.default("aiguilleter", "j:eter"), new _verb2.default("aiguillonner", "aim:er"), new _verb2.default("aiguiser", "aim:er"), new _verb2.default("ailler", "aim:er"), new _verb2.default("aimanter", "aim:er"), new _verb2.default("aimer", "aim:er"), new _verb2.default("airer", "aim:er"), new _verb2.default("ajointer", "aim:er"), new _verb2.default("ajourer", "aim:er"), new _verb2.default("ajourner", "aim:er"), new _verb2.default("ajouter", "aim:er"), new _verb2.default("ajuster", "aim:er"), new _verb2.default("alambiquer", "aim:er"), new _verb2.default("alanguir", "fin:ir"), new _verb2.default("alarmer", "aim:er"), new _verb2.default("alcaliniser", "aim:er"), new _verb2.default("alcaliser", "aim:er"), new _verb2.default("alcooliser", "aim:er"), new _verb2.default("alentir", "fin:ir"), new _verb2.default("alerter", "aim:er"), new _verb2.default("aléser", "l:éser"), new _verb2.default("aleviner", "aim:er"), new _verb2.default("aliéner", "ali:éner"), new _verb2.default("aligner", "aim:er"), new _verb2.default("alimenter", "aim:er"), new _verb2.default("aliter", "aim:er"), new _verb2.default("allaiter", "aim:er"), new _verb2.default("allécher", "s:écher"), new _verb2.default("alléger", "abr:éger"), new _verb2.default("allégir", "fin:ir"), new _verb2.default("allégoriser", "aim:er"), new _verb2.default("alléguer", "l:éguer"), new _verb2.default("aller", ":aller"), new _verb2.default("allier", "aim:er"), new _verb2.default("allonger", "man:ger"), new _verb2.default("allotir", "fin:ir"), new _verb2.default("allouer", "aim:er"), new _verb2.default("allumer", "aim:er"), new _verb2.default("alluvionner", "aim:er"), new _verb2.default("alourdir", "fin:ir"), new _verb2.default("alpaguer", "aim:er"), new _verb2.default("alphabétiser", "aim:er"), new _verb2.default("altérer", "réf:érer"), new _verb2.default("alterner", "aim:er"), new _verb2.default("aluminer", "aim:er"), new _verb2.default("aluner", "aim:er"), new _verb2.default("alunir", "fin:ir"), new _verb2.default("amadouer", "aim:er"), new _verb2.default("amaigrir", "fin:ir"), new _verb2.default("amalgamer", "aim:er"), new _verb2.default("amancher", "aim:er"), new _verb2.default("amariner", "aim:er"), new _verb2.default("amarrer", "aim:er"), new _verb2.default("amasser", "aim:er"), new _verb2.default("amatir", "fin:ir"), new _verb2.default("ambiancer", "pla:cer"), new _verb2.default("ambitionner", "aim:er"), new _verb2.default("ambler", "aim:er"), new _verb2.default("ambrer", "aim:er"), new _verb2.default("améliorer", "aim:er"), new _verb2.default("aménager", "man:ger"), new _verb2.default("amender", "aim:er"), new _verb2.default("amener", "m:ener"), new _verb2.default("amenuiser", "aim:er"), new _verb2.default("américaniser", "aim:er"), new _verb2.default("amerrir", "fin:ir"), new _verb2.default("ameublir", "fin:ir"), new _verb2.default("ameuter", "aim:er"), new _verb2.default("amidonner", "aim:er"), new _verb2.default("amincir", "fin:ir"), new _verb2.default("amnistier", "aim:er"), new _verb2.default("amocher", "aim:er"), new _verb2.default("amodier", "aim:er"), new _verb2.default("amoindrir", "fin:ir"), new _verb2.default("amollir", "fin:ir"), new _verb2.default("amonceler", "app:eler"), new _verb2.default("amorcer", "pla:cer"), new _verb2.default("amordancer", "pla:cer"), new _verb2.default("amortir", "fin:ir"), new _verb2.default("amouracher", "aim:er"), new _verb2.default("amplifier", "aim:er"), new _verb2.default("amputer", "aim:er"), new _verb2.default("amuïr", "amu:ïr"), new _verb2.default("amurer", "aim:er"), new _verb2.default("amuser", "aim:er"), new _verb2.default("analgésier", "aim:er"), new _verb2.default("analyser", "aim:er"), new _verb2.default("anastomoser", "aim:er"), new _verb2.default("anathématiser", "aim:er"), new _verb2.default("anatomiser", "aim:er"), new _verb2.default("ancrer", "aim:er"), new _verb2.default("anéantir", "fin:ir"), new _verb2.default("anémier", "aim:er"), new _verb2.default("anesthésier", "aim:er"), new _verb2.default("anglaiser", "aim:er"), new _verb2.default("angliciser", "aim:er"), new _verb2.default("angoisser", "aim:er"), new _verb2.default("anhéler", "rév:éler"), new _verb2.default("animaliser", "aim:er"), new _verb2.default("animer", "aim:er"), new _verb2.default("aniser", "aim:er"), new _verb2.default("ankyloser", "aim:er"), new _verb2.default("anneler", "app:eler"), new _verb2.default("annexer", "aim:er"), new _verb2.default("annihiler", "aim:er"), new _verb2.default("annoncer", "pla:cer"), new _verb2.default("annoter", "aim:er"), new _verb2.default("annualiser", "aim:er"), new _verb2.default("annuler", "aim:er"), new _verb2.default("anoblir", "fin:ir"), new _verb2.default("anodiser", "aim:er"), new _verb2.default("ânonner", "aim:er"), new _verb2.default("anordir", "fin:ir"), new _verb2.default("antéposer", "aim:er"), new _verb2.default("anticiper", "aim:er"), new _verb2.default("anticommuter", "aim:er"), new _verb2.default("antidater", "aim:er"), new _verb2.default("antiparasiter", "aim:er"), new _verb2.default("antiquer", "aim:er"), new _verb2.default("aoûter", "aim:er"), new _verb2.default("apaiser", "aim:er"), new _verb2.default("apanager", "man:ger"), new _verb2.default("apercevoir", "dé:cevoir"), new _verb2.default("apeurer", "aim:er"), new _verb2.default("apiquer", "aim:er"), new _verb2.default("apitoyer", "netto:yer"), new _verb2.default("aplanir", "fin:ir"), new _verb2.default("aplatir", "fin:ir"), new _verb2.default("apostasier", "aim:er"), new _verb2.default("aposter", "aim:er"), new _verb2.default("apostiller", "aim:er"), new _verb2.default("apostropher", "aim:er"), new _verb2.default("appairer", "aim:er"), new _verb2.default("apparaître", "rep:aître"), new _verb2.default("appareiller", "aim:er"), new _verb2.default("apparenter", "aim:er"), new _verb2.default("apparier", "aim:er"), new _verb2.default("apparoir", "app:aroir"), new _verb2.default("appartenir", "t:enir"), new _verb2.default("appâter", "aim:er"), new _verb2.default("appauvrir", "fin:ir"), new _verb2.default("appeler", "app:eler"), new _verb2.default("appendre", "ten:dre"), new _verb2.default("appesantir", "fin:ir"), new _verb2.default("applaudir", "fin:ir"), new _verb2.default("appliquer", "aim:er"), new _verb2.default("appointer", "aim:er"), new _verb2.default("appointir", "fin:ir"), new _verb2.default("appondre", "ten:dre"), new _verb2.default("apponter", "aim:er"), new _verb2.default("apporter", "aim:er"), new _verb2.default("apposer", "aim:er"), new _verb2.default("apprécier", "aim:er"), new _verb2.default("appréhender", "aim:er"), new _verb2.default("apprendre", "pr:endre"), new _verb2.default("apprêter", "aim:er"), new _verb2.default("apprivoiser", "aim:er"), new _verb2.default("approcher", "aim:er"), new _verb2.default("approfondir", "fin:ir"), new _verb2.default("approprier", "aim:er"), new _verb2.default("approuver", "aim:er"), new _verb2.default("approvisionner", "aim:er"), new _verb2.default("approximer", "aim:er"), new _verb2.default("appuyer", "netto:yer"), new _verb2.default("apurer", "aim:er"), new _verb2.default("arabiser", "aim:er"), new _verb2.default("araser", "aim:er"), new _verb2.default("arbitrer", "aim:er"), new _verb2.default("arborer", "aim:er"), new _verb2.default("arboriser", "aim:er"), new _verb2.default("arc-bouter", "aim:er"), new _verb2.default("archaïser", "aim:er"), new _verb2.default("architecturer", "aim:er"), new _verb2.default("archiver", "aim:er"), new _verb2.default("arçonner", "aim:er"), new _verb2.default("ardoiser", "aim:er"), new _verb2.default("argenter", "aim:er"), new _verb2.default("arguer", "aim:er"), new _verb2.default("argumenter", "aim:er"), new _verb2.default("ariser", "aim:er"), new _verb2.default("armer", "aim:er"), new _verb2.default("armorier", "aim:er"), new _verb2.default("arnaquer", "aim:er"), new _verb2.default("aromatiser", "aim:er"), new _verb2.default("arpéger", "abr:éger"), new _verb2.default("arpenter", "aim:er"), new _verb2.default("arquer", "aim:er"), new _verb2.default("arracher", "aim:er"), new _verb2.default("arraisonner", "aim:er"), new _verb2.default("arranger", "man:ger"), new _verb2.default("arrenter", "aim:er"), new _verb2.default("arrérager", "man:ger"), new _verb2.default("arrêter", "aim:er"), new _verb2.default("arriérer", "réf:érer"), new _verb2.default("arrimer", "aim:er"), new _verb2.default("arriser", "aim:er"), new _verb2.default("arriver", "aim:er"), new _verb2.default("arroger", "man:ger"), new _verb2.default("arrondir", "fin:ir"), new _verb2.default("arroser", "aim:er"), new _verb2.default("articuler", "aim:er"), new _verb2.default("ascensionner", "aim:er"), new _verb2.default("aseptiser", "aim:er"), new _verb2.default("aspecter", "aim:er"), new _verb2.default("asperger", "man:ger"), new _verb2.default("asphalter", "aim:er"), new _verb2.default("asphyxier", "aim:er"), new _verb2.default("aspirer", "aim:er"), new _verb2.default("assagir", "fin:ir"), new _verb2.default("assaillir", "assaill:ir"), new _verb2.default("assainir", "fin:ir"), new _verb2.default("assaisonner", "aim:er"), new _verb2.default("assarmenter", "aim:er"), new _verb2.default("assassiner", "aim:er"), new _verb2.default("assécher", "s:écher"), new _verb2.default("assembler", "aim:er"), new _verb2.default("asséner", "ali:éner"), new _verb2.default("assener", "m:ener"), new _verb2.default("asseoir", "ass:eoir"), new _verb2.default("assermenter", "aim:er"), new _verb2.default("asservir", "fin:ir"), new _verb2.default("assibiler", "aim:er"), new _verb2.default("assiéger", "abr:éger"), new _verb2.default("assigner", "aim:er"), new _verb2.default("assimiler", "aim:er"), new _verb2.default("assister", "aim:er"), new _verb2.default("associer", "aim:er"), new _verb2.default("assoiffer", "aim:er"), new _verb2.default("assoir", "ass:oir"), new _verb2.default("assoler", "aim:er"), new _verb2.default("assombrir", "fin:ir"), new _verb2.default("assommer", "aim:er"), new _verb2.default("assoner", "aim:er"), new _verb2.default("assortir", "fin:ir"), new _verb2.default("assoupir", "fin:ir"), new _verb2.default("assouplir", "fin:ir"), new _verb2.default("assourdir", "fin:ir"), new _verb2.default("assouvir", "fin:ir"), new _verb2.default("assujettir", "fin:ir"), new _verb2.default("assumer", "aim:er"), new _verb2.default("assurer", "aim:er"), new _verb2.default("asticoter", "aim:er"), new _verb2.default("astiquer", "aim:er"), new _verb2.default("astreindre", "crai:ndre"), new _verb2.default("atermoyer", "netto:yer"), new _verb2.default("atomiser", "aim:er"), new _verb2.default("atrophier", "aim:er"), new _verb2.default("attabler", "aim:er"), new _verb2.default("attacher", "aim:er"), new _verb2.default("attaquer", "aim:er"), new _verb2.default("attarder", "aim:er"), new _verb2.default("atteindre", "crai:ndre"), new _verb2.default("atteler", "app:eler"), new _verb2.default("attendre", "ten:dre"), new _verb2.default("attendrir", "fin:ir"), new _verb2.default("attenter", "aim:er"), new _verb2.default("atténuer", "aim:er"), new _verb2.default("atterrer", "aim:er"), new _verb2.default("atterrir", "fin:ir"), new _verb2.default("attester", "aim:er"), new _verb2.default("attiédir", "fin:ir"), new _verb2.default("attifer", "aim:er"), new _verb2.default("attiger", "man:ger"), new _verb2.default("attirer", "aim:er"), new _verb2.default("attiser", "aim:er"), new _verb2.default("attitrer", "aim:er"), new _verb2.default("attraire", "extra:ire"), new _verb2.default("attraper", "aim:er"), new _verb2.default("attribuer", "aim:er"), new _verb2.default("attriquer", "aim:er"), new _verb2.default("attrister", "aim:er"), new _verb2.default("attrouper", "aim:er"), new _verb2.default("auditer", "aim:er"), new _verb2.default("auditionner", "aim:er"), new _verb2.default("augmenter", "aim:er"), new _verb2.default("augurer", "aim:er"), new _verb2.default("auréoler", "aim:er"), new _verb2.default("aurifier", "aim:er"), new _verb2.default("ausculter", "aim:er"), new _verb2.default("authentifier", "aim:er"), new _verb2.default("authentiquer", "aim:er"), new _verb2.default("autocensurer", "aim:er"), new _verb2.default("autodétruire", "condui:re"), new _verb2.default("autodissoudre", "disso:udre"), new _verb2.default("autofinancer", "pla:cer"), new _verb2.default("autographier", "aim:er"), new _verb2.default("automatiser", "aim:er"), new _verb2.default("autoproclamer", "aim:er"), new _verb2.default("autopsier", "aim:er"), new _verb2.default("autoriser", "aim:er"), new _verb2.default("avachir", "fin:ir"), new _verb2.default("avaler", "aim:er"), new _verb2.default("avaliser", "aim:er"), new _verb2.default("avancer", "pla:cer"), new _verb2.default("avantager", "man:ger"), new _verb2.default("avarier", "aim:er"), new _verb2.default("aventurer", "aim:er"), new _verb2.default("avérer", "réf:érer"), new _verb2.default("avertir", "fin:ir"), new _verb2.default("aveugler", "aim:er"), new _verb2.default("aveulir", "fin:ir"), new _verb2.default("avilir", "fin:ir"), new _verb2.default("aviner", "aim:er"), new _verb2.default("aviser", "aim:er"), new _verb2.default("avitailler", "aim:er"), new _verb2.default("aviver", "aim:er"), new _verb2.default("avoir", ":avoir"), new _verb2.default("avoisiner", "aim:er"), new _verb2.default("avorter", "aim:er"), new _verb2.default("avouer", "aim:er"), new _verb2.default("axer", "aim:er"), new _verb2.default("axiomatiser", "aim:er"), new _verb2.default("azorer", "aim:er"), new _verb2.default("azurer", "aim:er"), new _verb2.default("babiller", "aim:er"), new _verb2.default("baboler", "aim:er"), new _verb2.default("bâcher", "aim:er"), new _verb2.default("bachoter", "aim:er"), new _verb2.default("bâcler", "aim:er"), new _verb2.default("badauder", "aim:er"), new _verb2.default("bader", "aim:er"), new _verb2.default("badger", "man:ger"), new _verb2.default("badigeonner", "aim:er"), new _verb2.default("badiner", "aim:er"), new _verb2.default("baffer", "aim:er"), new _verb2.default("bafouer", "aim:er"), new _verb2.default("bafouiller", "aim:er"), new _verb2.default("bâfrer", "aim:er"), new _verb2.default("bagarrer", "aim:er"), new _verb2.default("baguenauder", "aim:er"), new _verb2.default("baguer", "aim:er"), new _verb2.default("baigner", "aim:er"), new _verb2.default("bailler", "aim:er"), new _verb2.default("bâiller", "aim:er"), new _verb2.default("bâillonner", "aim:er"), new _verb2.default("baiser", "aim:er"), new _verb2.default("baisoter", "aim:er"), new _verb2.default("baisser", "aim:er"), new _verb2.default("balader", "aim:er"), new _verb2.default("balafrer", "aim:er"), new _verb2.default("balancer", "pla:cer"), new _verb2.default("balayer", "pa:yer"), new _verb2.default("balbutier", "aim:er"), new _verb2.default("baleiner", "aim:er"), new _verb2.default("baliser", "aim:er"), new _verb2.default("balkaniser", "aim:er"), new _verb2.default("ballaster", "aim:er"), new _verb2.default("baller", "aim:er"), new _verb2.default("ballonner", "aim:er"), new _verb2.default("ballotter", "aim:er"), new _verb2.default("bambocher", "aim:er"), new _verb2.default("banaliser", "aim:er"), new _verb2.default("bancher", "aim:er"), new _verb2.default("bander", "aim:er"), new _verb2.default("banner", "aim:er"), new _verb2.default("bannir", "fin:ir"), new _verb2.default("banquer", "aim:er"), new _verb2.default("banqueter", "j:eter"), new _verb2.default("baptiser", "aim:er"), new _verb2.default("baqueter", "j:eter"), new _verb2.default("baragouiner", "aim:er"), new _verb2.default("baraquer", "aim:er"), new _verb2.default("baratiner", "aim:er"), new _verb2.default("baratter", "aim:er"), new _verb2.default("barber", "aim:er"), new _verb2.default("barbifier", "aim:er"), new _verb2.default("barboter", "aim:er"), new _verb2.default("barbouiller", "aim:er"), new _verb2.default("barder", "aim:er"), new _verb2.default("baréter", "décr:éter"), new _verb2.default("barguigner", "aim:er"), new _verb2.default("barioler", "aim:er"), new _verb2.default("barjaquer", "aim:er"), new _verb2.default("baronner", "aim:er"), new _verb2.default("barouder", "aim:er"), new _verb2.default("barrer", "aim:er"), new _verb2.default("barricader", "aim:er"), new _verb2.default("barrir", "fin:ir"), new _verb2.default("basaner", "aim:er"), new _verb2.default("basculer", "aim:er"), new _verb2.default("baser", "aim:er"), new _verb2.default("bassiner", "aim:er"), new _verb2.default("baster", "aim:er"), new _verb2.default("bastillonner", "aim:er"), new _verb2.default("bastionner", "aim:er"), new _verb2.default("batailler", "aim:er"), new _verb2.default("bateler", "app:eler"), new _verb2.default("bâter", "aim:er"), new _verb2.default("batifoler", "aim:er"), new _verb2.default("bâtir", "fin:ir"), new _verb2.default("batoiller", "aim:er"), new _verb2.default("bâtonner", "aim:er"), new _verb2.default("battre", "bat:tre"), new _verb2.default("bauger", "man:ger"), new _verb2.default("bavarder", "aim:er"), new _verb2.default("bavasser", "aim:er"), new _verb2.default("baver", "aim:er"), new _verb2.default("bavocher", "aim:er"), new _verb2.default("bayer", "pa:yer"), new _verb2.default("bazarder", "aim:er"), new _verb2.default("béatifier", "aim:er"), new _verb2.default("bêcher", "aim:er"), new _verb2.default("bêcheveter", "j:eter"), new _verb2.default("bécoter", "aim:er"), new _verb2.default("becquer", "aim:er"), new _verb2.default("becqueter", "j:eter"), new _verb2.default("becter", "aim:er"), new _verb2.default("bedonner", "aim:er"), new _verb2.default("bégayer", "pa:yer"), new _verb2.default("bégueter", "ach:eter"), new _verb2.default("bêler", "aim:er"), new _verb2.default("bémoliser", "aim:er"), new _verb2.default("bénéficier", "aim:er"), new _verb2.default("bénir", "fin:ir"), new _verb2.default("béqueter", "j:eter"), new _verb2.default("béquiller", "aim:er"), new _verb2.default("bercer", "pla:cer"), new _verb2.default("berner", "aim:er"), new _verb2.default("besogner", "aim:er"), new _verb2.default("bêtifier", "aim:er"), new _verb2.default("bêtiser", "aim:er"), new _verb2.default("bétonner", "aim:er"), new _verb2.default("beugler", "aim:er"), new _verb2.default("beurrer", "aim:er"), new _verb2.default("biaiser", "aim:er"), new _verb2.default("bibeloter", "aim:er"), new _verb2.default("biberonner", "aim:er"), new _verb2.default("bicher", "aim:er"), new _verb2.default("bichonner", "aim:er"), new _verb2.default("bichoter", "aim:er"), new _verb2.default("bidonner", "aim:er"), new _verb2.default("bidouiller", "aim:er"), new _verb2.default("biffer", "aim:er"), new _verb2.default("bifurquer", "aim:er"), new _verb2.default("bigarrer", "aim:er"), new _verb2.default("bigler", "aim:er"), new _verb2.default("bigophoner", "aim:er"), new _verb2.default("bigorner", "aim:er"), new _verb2.default("biler", "aim:er"), new _verb2.default("billebauder", "aim:er"), new _verb2.default("biller", "aim:er"), new _verb2.default("billonner", "aim:er"), new _verb2.default("biloquer", "aim:er"), new _verb2.default("biner", "aim:er"), new _verb2.default("biscuiter", "aim:er"), new _verb2.default("biseauter", "aim:er"), new _verb2.default("bisegmenter", "aim:er"), new _verb2.default("biser", "aim:er"), new _verb2.default("bisquer", "aim:er"), new _verb2.default("bisser", "aim:er"), new _verb2.default("bistourner", "aim:er"), new _verb2.default("bistrer", "aim:er"), new _verb2.default("biter", "aim:er"), new _verb2.default("bitter", "aim:er"), new _verb2.default("bitturer", "aim:er"), new _verb2.default("bitumer", "aim:er"), new _verb2.default("bituminer", "aim:er"), new _verb2.default("biturer", "aim:er"), new _verb2.default("bivouaquer", "aim:er"), new _verb2.default("bizuter", "aim:er"), new _verb2.default("blablater", "aim:er"), new _verb2.default("blackbouler", "aim:er"), new _verb2.default("blaguer", "aim:er"), new _verb2.default("blairer", "aim:er"), new _verb2.default("blâmer", "aim:er"), new _verb2.default("blanchir", "fin:ir"), new _verb2.default("blaser", "aim:er"), new _verb2.default("blasonner", "aim:er"), new _verb2.default("blasphémer", "cr:émer"), new _verb2.default("blatérer", "réf:érer"), new _verb2.default("blêmir", "fin:ir"), new _verb2.default("bléser", "l:éser"), new _verb2.default("blesser", "aim:er"), new _verb2.default("blettir", "fin:ir"), new _verb2.default("bleuir", "fin:ir"), new _verb2.default("bleuter", "aim:er"), new _verb2.default("blinder", "aim:er"), new _verb2.default("blinquer", "aim:er"), new _verb2.default("blondir", "fin:ir"), new _verb2.default("blondoyer", "netto:yer"), new _verb2.default("bloquer", "aim:er"), new _verb2.default("blottir", "fin:ir"), new _verb2.default("blouser", "aim:er"), new _verb2.default("bluffer", "aim:er"), new _verb2.default("bluter", "aim:er"), new _verb2.default("bobiner", "aim:er"), new _verb2.default("bocarder", "aim:er"), new _verb2.default("boetter", "aim:er"), new _verb2.default("boire", "b:oire"), new _verb2.default("boiser", "aim:er"), new _verb2.default("boiter", "aim:er"), new _verb2.default("boitiller", "aim:er"), new _verb2.default("bolchéviser", "aim:er"), new _verb2.default("bombarder", "aim:er"), new _verb2.default("bomber", "aim:er"), new _verb2.default("bondériser", "aim:er"), new _verb2.default("bonder", "aim:er"), new _verb2.default("bondir", "fin:ir"), new _verb2.default("bondonner", "aim:er"), new _verb2.default("bonifier", "aim:er"), new _verb2.default("bonimenter", "aim:er"), new _verb2.default("border", "aim:er"), new _verb2.default("borner", "aim:er"), new _verb2.default("bornoyer", "netto:yer"), new _verb2.default("bosseler", "app:eler"), new _verb2.default("bosser", "aim:er"), new _verb2.default("bossuer", "aim:er"), new _verb2.default("bostonner", "aim:er"), new _verb2.default("botaniser", "aim:er"), new _verb2.default("botteler", "app:eler"), new _verb2.default("botter", "aim:er"), new _verb2.default("boubouler", "aim:er"), new _verb2.default("boucaner", "aim:er"), new _verb2.default("boucharder", "aim:er"), new _verb2.default("boucher", "aim:er"), new _verb2.default("bouchonner", "aim:er"), new _verb2.default("bouchoyer", "netto:yer"), new _verb2.default("boucler", "aim:er"), new _verb2.default("bouder", "aim:er"), new _verb2.default("boudiner", "aim:er"), new _verb2.default("bouéler", "rév:éler"), new _verb2.default("bouffer", "aim:er"), new _verb2.default("bouffir", "fin:ir"), new _verb2.default("bouffonner", "aim:er"), new _verb2.default("bouger", "man:ger"), new _verb2.default("bougonner", "aim:er"), new _verb2.default("bouillir", "bou:illir"), new _verb2.default("bouillonner", "aim:er"), new _verb2.default("bouillotter", "aim:er"), new _verb2.default("boulanger", "man:ger"), new _verb2.default("bouléguer", "l:éguer"), new _verb2.default("bouler", "aim:er"), new _verb2.default("bouleverser", "aim:er"), new _verb2.default("boulocher", "aim:er"), new _verb2.default("boulonner", "aim:er"), new _verb2.default("boulotter", "aim:er"), new _verb2.default("boumer", "aim:er"), new _verb2.default("bouquiner", "aim:er"), new _verb2.default("bourasser", "aim:er"), new _verb2.default("bourder", "aim:er"), new _verb2.default("bourdonner", "aim:er"), new _verb2.default("bourgeonner", "aim:er"), new _verb2.default("bourlinguer", "aim:er"), new _verb2.default("bouronner", "aim:er"), new _verb2.default("bourreler", "app:eler"), new _verb2.default("bourrer", "aim:er"), new _verb2.default("bourriquer", "aim:er"), new _verb2.default("boursicoter", "aim:er"), new _verb2.default("boursoufler", "aim:er"), new _verb2.default("bousculer", "aim:er"), new _verb2.default("bousiller", "aim:er"), new _verb2.default("boustifailler", "aim:er"), new _verb2.default("bouter", "aim:er"), new _verb2.default("boutonner", "aim:er"), new _verb2.default("bouturer", "aim:er"), new _verb2.default("boxer", "aim:er"), new _verb2.default("boyauter", "aim:er"), new _verb2.default("boycotter", "aim:er"), new _verb2.default("braconner", "aim:er"), new _verb2.default("brader", "aim:er"), new _verb2.default("brailler", "aim:er"), new _verb2.default("braire", "bra:ire"), new _verb2.default("braiser", "aim:er"), new _verb2.default("bramer", "aim:er"), new _verb2.default("brancarder", "aim:er"), new _verb2.default("brancher", "aim:er"), new _verb2.default("brandiller", "aim:er"), new _verb2.default("brandir", "fin:ir"), new _verb2.default("branler", "aim:er"), new _verb2.default("braquer", "aim:er"), new _verb2.default("braser", "aim:er"), new _verb2.default("brasiller", "aim:er"), new _verb2.default("brasser", "aim:er"), new _verb2.default("braver", "aim:er"), new _verb2.default("brayer", "pa:yer"), new _verb2.default("bredouiller", "aim:er"), new _verb2.default("brêler", "aim:er"), new _verb2.default("bréler", "rév:éler"), new _verb2.default("breller", "aim:er"), new _verb2.default("brésiller", "aim:er"), new _verb2.default("bretailler", "aim:er"), new _verb2.default("bretteler", "app:eler"), new _verb2.default("bretter", "aim:er"), new _verb2.default("breveter", "j:eter"), new _verb2.default("bricoler", "aim:er"), new _verb2.default("brider", "aim:er"), new _verb2.default("bridger", "man:ger"), new _verb2.default("briefer", "aim:er"), new _verb2.default("brifer", "aim:er"), new _verb2.default("briffer", "aim:er"), new _verb2.default("brigander", "aim:er"), new _verb2.default("briguer", "aim:er"), new _verb2.default("brillanter", "aim:er"), new _verb2.default("brillantiner", "aim:er"), new _verb2.default("briller", "aim:er"), new _verb2.default("brimbaler", "aim:er"), new _verb2.default("brimer", "aim:er"), new _verb2.default("bringuebaler", "aim:er"), new _verb2.default("bringueballer", "aim:er"), new _verb2.default("bringuer", "aim:er"), new _verb2.default("brinquebaler", "aim:er"), new _verb2.default("brinqueballer", "aim:er"), new _verb2.default("briquer", "aim:er"), new _verb2.default("briqueter", "j:eter"), new _verb2.default("briser", "aim:er"), new _verb2.default("brocanter", "aim:er"), new _verb2.default("brocarder", "aim:er"), new _verb2.default("brocher", "aim:er"), new _verb2.default("broder", "aim:er"), new _verb2.default("broncher", "aim:er"), new _verb2.default("bronzer", "aim:er"), new _verb2.default("brosser", "aim:er"), new _verb2.default("brouetter", "aim:er"), new _verb2.default("brouillasser", "aim:er"), new _verb2.default("brouiller", "aim:er"), new _verb2.default("brouillonner", "aim:er"), new _verb2.default("brouter", "aim:er"), new _verb2.default("broyer", "netto:yer"), new _verb2.default("bruiner", "aim:er"), new _verb2.default("bruire", "brui:re"), new _verb2.default("bruir", "fin:ir"), new _verb2.default("bruisser", "aim:er"), new _verb2.default("bruiter", "aim:er"), new _verb2.default("brûler", "aim:er"), new _verb2.default("brumasser", "brumass:er"), new _verb2.default("brumer", "aim:er"), new _verb2.default("bruncher", "aim:er"), new _verb2.default("brunir", "fin:ir"), new _verb2.default("brusquer", "aim:er"), new _verb2.default("brutaliser", "aim:er"), new _verb2.default("bûcher", "aim:er"), new _verb2.default("budgéter", "décr:éter"), new _verb2.default("budgétiser", "aim:er"), new _verb2.default("buller", "aim:er"), new _verb2.default("bureaucratiser", "aim:er"), new _verb2.default("buriner", "aim:er"), new _verb2.default("buser", "aim:er"), new _verb2.default("busquer", "aim:er"), new _verb2.default("buter", "aim:er"), new _verb2.default("butiner", "aim:er"), new _verb2.default("butter", "aim:er"), new _verb2.default("buvoter", "aim:er"), new _verb2.default("cabaler", "aim:er"), new _verb2.default("cabaner", "aim:er"), new _verb2.default("câbler", "aim:er"), new _verb2.default("cabosser", "aim:er"), new _verb2.default("caboter", "aim:er"), new _verb2.default("cabotiner", "aim:er"), new _verb2.default("cabrer", "aim:er"), new _verb2.default("cabrioler", "aim:er"), new _verb2.default("cacaber", "aim:er"), new _verb2.default("cacarder", "aim:er"), new _verb2.default("cacher", "aim:er"), new _verb2.default("cacheter", "j:eter"), new _verb2.default("cachetonner", "aim:er"), new _verb2.default("cadancher", "aim:er"), new _verb2.default("cadastrer", "aim:er"), new _verb2.default("cadenasser", "aim:er"), new _verb2.default("cadencer", "pla:cer"), new _verb2.default("cadmier", "aim:er"), new _verb2.default("cadrer", "aim:er"), new _verb2.default("cafarder", "aim:er"), new _verb2.default("cafouiller", "aim:er"), new _verb2.default("cafter", "aim:er"), new _verb2.default("cagnarder", "aim:er"), new _verb2.default("cagner", "aim:er"), new _verb2.default("cahoter", "aim:er"), new _verb2.default("caillasser", "aim:er"), new _verb2.default("caillebotter", "aim:er"), new _verb2.default("cailler", "aim:er"), new _verb2.default("cailleter", "j:eter"), new _verb2.default("caillouter", "aim:er"), new _verb2.default("cajoler", "aim:er"), new _verb2.default("calaminer", "aim:er"), new _verb2.default("calamistrer", "aim:er"), new _verb2.default("calancher", "aim:er"), new _verb2.default("calandrer", "aim:er"), new _verb2.default("calciner", "aim:er"), new _verb2.default("calculer", "aim:er"), new _verb2.default("caler", "aim:er"), new _verb2.default("caleter", "j:eter"), new _verb2.default("calfater", "aim:er"), new _verb2.default("calfeutrer", "aim:er"), new _verb2.default("calibrer", "aim:er"), new _verb2.default("câliner", "aim:er"), new _verb2.default("calligraphier", "aim:er"), new _verb2.default("calmer", "aim:er"), new _verb2.default("calmir", "fin:ir"), new _verb2.default("calomnier", "aim:er"), new _verb2.default("calorifuger", "man:ger"), new _verb2.default("calotter", "aim:er"), new _verb2.default("calquer", "aim:er"), new _verb2.default("calter", "aim:er"), new _verb2.default("caluger", "man:ger"), new _verb2.default("camber", "aim:er"), new _verb2.default("cambrer", "aim:er"), new _verb2.default("cambrioler", "aim:er"), new _verb2.default("cambuter", "aim:er"), new _verb2.default("cameloter", "aim:er"), new _verb2.default("camer", "aim:er"), new _verb2.default("camionner", "aim:er"), new _verb2.default("camoufler", "aim:er"), new _verb2.default("camper", "aim:er"), new _verb2.default("canaliser", "aim:er"), new _verb2.default("canarder", "aim:er"), new _verb2.default("cancaner", "aim:er"), new _verb2.default("cancériser", "aim:er"), new _verb2.default("candir", "fin:ir"), new _verb2.default("caner", "aim:er"), new _verb2.default("canneler", "app:eler"), new _verb2.default("canner", "aim:er"), new _verb2.default("cannibaliser", "aim:er"), new _verb2.default("cannoner", "aim:er"), new _verb2.default("canoniser", "aim:er"), new _verb2.default("canonner", "aim:er"), new _verb2.default("canoter", "aim:er"), new _verb2.default("cantiner", "aim:er"), new _verb2.default("cantonner", "aim:er"), new _verb2.default("canuler", "aim:er"), new _verb2.default("caoutchouter", "aim:er"), new _verb2.default("caparaçonner", "aim:er"), new _verb2.default("capéer", "aim:er"), new _verb2.default("capeler", "app:eler"), new _verb2.default("caper", "aim:er"), new _verb2.default("capeyer", "aim:er"), new _verb2.default("capitaliser", "aim:er"), new _verb2.default("capitonner", "aim:er"), new _verb2.default("capituler", "aim:er"), new _verb2.default("caponner", "aim:er"), new _verb2.default("caporaliser", "aim:er"), new _verb2.default("capoter", "aim:er"), new _verb2.default("capsuler", "aim:er"), new _verb2.default("capter", "aim:er"), new _verb2.default("captiver", "aim:er"), new _verb2.default("capturer", "aim:er"), new _verb2.default("capuchonner", "aim:er"), new _verb2.default("caquer", "aim:er"), new _verb2.default("caqueter", "j:eter"), new _verb2.default("caracoler", "aim:er"), new _verb2.default("caractériser", "aim:er"), new _verb2.default("caramboler", "aim:er"), new _verb2.default("caraméliser", "aim:er"), new _verb2.default("carapater", "aim:er"), new _verb2.default("carbonater", "aim:er"), new _verb2.default("carboniser", "aim:er"), new _verb2.default("carburer", "aim:er"), new _verb2.default("carcailler", "aim:er"), new _verb2.default("carder", "aim:er"), new _verb2.default("carencer", "pla:cer"), new _verb2.default("caréner", "ali:éner"), new _verb2.default("caresser", "aim:er"), new _verb2.default("carguer", "aim:er"), new _verb2.default("caricaturer", "aim:er"), new _verb2.default("carier", "aim:er"), new _verb2.default("carillonner", "aim:er"), new _verb2.default("carmer", "aim:er"), new _verb2.default("carminer", "aim:er"), new _verb2.default("carnifier", "aim:er"), new _verb2.default("carotter", "aim:er"), new _verb2.default("carreauter", "aim:er"), new _verb2.default("carreler", "app:eler"), new _verb2.default("carrer", "aim:er"), new _verb2.default("carrosser", "aim:er"), new _verb2.default("carroyer", "netto:yer"), new _verb2.default("cartelliser", "aim:er"), new _verb2.default("carter", "aim:er"), new _verb2.default("cartographier", "aim:er"), new _verb2.default("cartonner", "aim:er"), new _verb2.default("cascader", "aim:er"), new _verb2.default("caséfier", "aim:er"), new _verb2.default("casemater", "aim:er"), new _verb2.default("caser", "aim:er"), new _verb2.default("caserner", "aim:er"), new _verb2.default("casquer", "aim:er"), new _verb2.default("casser", "aim:er"), new _verb2.default("castagner", "aim:er"), new _verb2.default("castrer", "aim:er"), new _verb2.default("cataloguer", "aim:er"), new _verb2.default("catalyser", "aim:er"), new _verb2.default("catapulter", "aim:er"), new _verb2.default("catastropher", "aim:er"), new _verb2.default("catcher", "aim:er"), new _verb2.default("catéchiser", "aim:er"), new _verb2.default("catégoriser", "aim:er"), new _verb2.default("catir", "fin:ir"), new _verb2.default("cauchemarder", "aim:er"), new _verb2.default("causer", "aim:er"), new _verb2.default("cautériser", "aim:er"), new _verb2.default("cautionner", "aim:er"), new _verb2.default("cavalcader", "aim:er"), new _verb2.default("cavaler", "aim:er"), new _verb2.default("caver", "aim:er"), new _verb2.default("caviarder", "aim:er"), new _verb2.default("céder", "c:éder"), new _verb2.default("ceindre", "crai:ndre"), new _verb2.default("ceinturer", "aim:er"), new _verb2.default("célébrer", "cél:ébrer"), new _verb2.default("celer", "p:eler"), new _verb2.default("cémenter", "aim:er"), new _verb2.default("cendrer", "aim:er"), new _verb2.default("censurer", "aim:er"), new _verb2.default("centraliser", "aim:er"), new _verb2.default("centrer", "aim:er"), new _verb2.default("centrifuger", "man:ger"), new _verb2.default("centupler", "aim:er"), new _verb2.default("cercler", "aim:er"), new _verb2.default("cerner", "aim:er"), new _verb2.default("certifier", "aim:er"), new _verb2.default("césariser", "aim:er"), new _verb2.default("cesser", "aim:er"), new _verb2.default("chabler", "aim:er"), new _verb2.default("chagriner", "aim:er"), new _verb2.default("chahuter", "aim:er"), new _verb2.default("chaîner", "aim:er"), new _verb2.default("challenger", "man:ger"), new _verb2.default("chaloir", "cha:loir"), new _verb2.default("chalouper", "aim:er"), new _verb2.default("chamailler", "aim:er"), new _verb2.default("chamarrer", "aim:er"), new _verb2.default("chambarder", "aim:er"), new _verb2.default("chambouler", "aim:er"), new _verb2.default("chambrer", "aim:er"), new _verb2.default("chamoiser", "aim:er"), new _verb2.default("champagniser", "aim:er"), new _verb2.default("champignonner", "aim:er"), new _verb2.default("champlever", "l:ever"), new _verb2.default("chanceler", "app:eler"), new _verb2.default("chancir", "fin:ir"), new _verb2.default("chanfreiner", "aim:er"), new _verb2.default("changer", "man:ger"), new _verb2.default("chansonner", "aim:er"), new _verb2.default("chanstiquer", "aim:er"), new _verb2.default("chanter", "aim:er"), new _verb2.default("chantonner", "aim:er"), new _verb2.default("chantourner", "aim:er"), new _verb2.default("chaparder", "aim:er"), new _verb2.default("chapeauter", "aim:er"), new _verb2.default("chapeler", "app:eler"), new _verb2.default("chaperonner", "aim:er"), new _verb2.default("chapitrer", "aim:er"), new _verb2.default("chaponner", "aim:er"), new _verb2.default("chaptaliser", "aim:er"), new _verb2.default("charbonner", "aim:er"), new _verb2.default("charcuter", "aim:er"), new _verb2.default("charger", "man:ger"), new _verb2.default("charioter", "aim:er"), new _verb2.default("charmer", "aim:er"), new _verb2.default("charpenter", "aim:er"), new _verb2.default("charrier", "aim:er"), new _verb2.default("charroyer", "netto:yer"), new _verb2.default("chasser", "aim:er"), new _verb2.default("châtier", "aim:er"), new _verb2.default("chatonner", "aim:er"), new _verb2.default("chatouiller", "aim:er"), new _verb2.default("chatoyer", "netto:yer"), new _verb2.default("châtrer", "aim:er"), new _verb2.default("chauffer", "aim:er"), new _verb2.default("chauler", "aim:er"), new _verb2.default("chaumer", "aim:er"), new _verb2.default("chausser", "aim:er"), new _verb2.default("chauvir", "chauv:ir"), new _verb2.default("chavirer", "aim:er"), new _verb2.default("chelinguer", "aim:er"), new _verb2.default("cheminer", "aim:er"), new _verb2.default("chemiser", "aim:er"), new _verb2.default("chercher", "aim:er"), new _verb2.default("chérer", "réf:érer"), new _verb2.default("chérir", "fin:ir"), new _verb2.default("cherrer", "aim:er"), new _verb2.default("chevaler", "aim:er"), new _verb2.default("chevaucher", "aim:er"), new _verb2.default("cheviller", "aim:er"), new _verb2.default("chevrer", "aim:er"), new _verb2.default("chevreter", "j:eter"), new _verb2.default("chevronner", "aim:er"), new _verb2.default("chevroter", "aim:er"), new _verb2.default("chiader", "aim:er"), new _verb2.default("chialer", "aim:er"), new _verb2.default("chicaner", "aim:er"), new _verb2.default("chicoter", "aim:er"), new _verb2.default("chienner", "aim:er"), new _verb2.default("chier", "aim:er"), new _verb2.default("chiffonner", "aim:er"), new _verb2.default("chiffrer", "aim:er"), new _verb2.default("chinder", "aim:er"), new _verb2.default("chiner", "aim:er"), new _verb2.default("chinoiser", "aim:er"), new _verb2.default("chiper", "aim:er"), new _verb2.default("chipoter", "aim:er"), new _verb2.default("chiquer", "aim:er"), new _verb2.default("chirographier", "aim:er"), new _verb2.default("chlinguer", "aim:er"), new _verb2.default("chlorer", "aim:er"), new _verb2.default("chloroformer", "aim:er"), new _verb2.default("chlorurer", "aim:er"), new _verb2.default("choir", "ch:oir"), new _verb2.default("choisir", "fin:ir"), new _verb2.default("chômer", "aim:er"), new _verb2.default("choper", "aim:er"), new _verb2.default("chopiner", "aim:er"), new _verb2.default("chopper", "aim:er"), new _verb2.default("choquer", "aim:er"), new _verb2.default("chorégraphier", "aim:er"), new _verb2.default("chosifier", "aim:er"), new _verb2.default("chouchouter", "aim:er"), new _verb2.default("chouiner", "aim:er"), new _verb2.default("chouraver", "aim:er"), new _verb2.default("chourer", "aim:er"), new _verb2.default("chouriner", "aim:er"), new _verb2.default("choyer", "netto:yer"), new _verb2.default("christianiser", "aim:er"), new _verb2.default("chromer", "aim:er"), new _verb2.default("chromiser", "aim:er"), new _verb2.default("chroniquer", "aim:er"), new _verb2.default("chronométrer", "imp:étrer"), new _verb2.default("chuchoter", "aim:er"), new _verb2.default("chuinter", "aim:er"), new _verb2.default("chuter", "aim:er"), new _verb2.default("cibler", "aim:er"), new _verb2.default("cicatriser", "aim:er"), new _verb2.default("cicler", "aim:er"), new _verb2.default("ciller", "aim:er"), new _verb2.default("cimenter", "aim:er"), new _verb2.default("cinématographier", "aim:er"), new _verb2.default("cingler", "aim:er"), new _verb2.default("cintrer", "aim:er"), new _verb2.default("circoncire", "circonc:ire"), new _verb2.default("circonscrire", "écri:re"), new _verb2.default("circonstancier", "aim:er"), new _verb2.default("circonvenir", "t:enir"), new _verb2.default("circulariser", "aim:er"), new _verb2.default("circuler", "aim:er"), new _verb2.default("cirer", "aim:er"), new _verb2.default("cisailler", "aim:er"), new _verb2.default("ciseler", "p:eler"), new _verb2.default("citer", "aim:er"), new _verb2.default("civiliser", "aim:er"), new _verb2.default("clabauder", "aim:er"), new _verb2.default("claboter", "aim:er"), new _verb2.default("claironner", "aim:er"), new _verb2.default("clamecer", "dép:ecer"), new _verb2.default("clamer", "aim:er"), new _verb2.default("clamper", "aim:er"), new _verb2.default("clampser", "aim:er"), new _verb2.default("clamser", "aim:er"), new _verb2.default("claper", "aim:er"), new _verb2.default("clapir", "fin:ir"), new _verb2.default("clapoter", "aim:er"), new _verb2.default("clapper", "aim:er"), new _verb2.default("clapser", "aim:er"), new _verb2.default("claquemurer", "aim:er"), new _verb2.default("claquer", "aim:er"), new _verb2.default("claqueter", "j:eter"), new _verb2.default("clarifier", "aim:er"), new _verb2.default("classer", "aim:er"), new _verb2.default("classifier", "aim:er"), new _verb2.default("claudiquer", "aim:er"), new _verb2.default("claustrer", "aim:er"), new _verb2.default("clavarder", "aim:er"), new _verb2.default("claver", "aim:er"), new _verb2.default("claveter", "j:eter"), new _verb2.default("clavetter", "aim:er"), new _verb2.default("clayonner", "aim:er"), new _verb2.default("clicher", "aim:er"), new _verb2.default("cligner", "aim:er"), new _verb2.default("clignoter", "aim:er"), new _verb2.default("climatiser", "aim:er"), new _verb2.default("cliquer", "aim:er"), new _verb2.default("cliqueter", "j:eter"), new _verb2.default("clisser", "aim:er"), new _verb2.default("cliver", "aim:er"), new _verb2.default("clochardiser", "aim:er"), new _verb2.default("clocher", "aim:er"), new _verb2.default("cloisonner", "aim:er"), new _verb2.default("cloîtrer", "aim:er"), new _verb2.default("cloner", "aim:er"), new _verb2.default("clopiner", "aim:er"), new _verb2.default("cloquer", "aim:er"), new _verb2.default("clore", "cl:ore"), new _verb2.default("clôturer", "aim:er"), new _verb2.default("clouer", "aim:er"), new _verb2.default("clouter", "aim:er"), new _verb2.default("coacher", "aim:er"), new _verb2.default("coaguler", "aim:er"), new _verb2.default("coalescer", "pla:cer"), new _verb2.default("coaliser", "aim:er"), new _verb2.default("coasser", "aim:er"), new _verb2.default("cocher", "aim:er"), new _verb2.default("côcher", "aim:er"), new _verb2.default("cochonner", "aim:er"), new _verb2.default("cocoler", "aim:er"), new _verb2.default("cocoter", "aim:er"), new _verb2.default("cocotter", "aim:er"), new _verb2.default("cocufier", "aim:er"), new _verb2.default("coder", "aim:er"), new _verb2.default("codifier", "aim:er"), new _verb2.default("coéditer", "aim:er"), new _verb2.default("coexister", "aim:er"), new _verb2.default("coffrer", "aim:er"), new _verb2.default("cofinancer", "pla:cer"), new _verb2.default("cogérer", "réf:érer"), new _verb2.default("cogiter", "aim:er"), new _verb2.default("cogner", "aim:er"), new _verb2.default("cohabiter", "aim:er"), new _verb2.default("cohériter", "aim:er"), new _verb2.default("coiffer", "aim:er"), new _verb2.default("coincer", "pla:cer"), new _verb2.default("coïncider", "aim:er"), new _verb2.default("coïter", "aim:er"), new _verb2.default("cokéfier", "aim:er"), new _verb2.default("collaborer", "aim:er"), new _verb2.default("collationner", "aim:er"), new _verb2.default("collecter", "aim:er"), new _verb2.default("collectionner", "aim:er"), new _verb2.default("collectiviser", "aim:er"), new _verb2.default("coller", "aim:er"), new _verb2.default("colleter", "j:eter"), new _verb2.default("colliger", "man:ger"), new _verb2.default("colloquer", "aim:er"), new _verb2.default("colmater", "aim:er"), new _verb2.default("coloniser", "aim:er"), new _verb2.default("colorer", "aim:er"), new _verb2.default("colorier", "aim:er"), new _verb2.default("coloriser", "aim:er"), new _verb2.default("colporter", "aim:er"), new _verb2.default("coltiner", "aim:er"), new _verb2.default("combattre", "bat:tre"), new _verb2.default("combiner", "aim:er"), new _verb2.default("combler", "aim:er"), new _verb2.default("commander", "aim:er"), new _verb2.default("commanditer", "aim:er"), new _verb2.default("commémorer", "aim:er"), new _verb2.default("commencer", "pla:cer"), new _verb2.default("commenter", "aim:er"), new _verb2.default("commercer", "pla:cer"), new _verb2.default("commercialiser", "aim:er"), new _verb2.default("commérer", "réf:érer"), new _verb2.default("commettre", "m:ettre"), new _verb2.default("commissionner", "aim:er"), new _verb2.default("commotionner", "aim:er"), new _verb2.default("commuer", "aim:er"), new _verb2.default("communaliser", "aim:er"), new _verb2.default("communautariser", "aim:er"), new _verb2.default("communier", "aim:er"), new _verb2.default("communiquer", "aim:er"), new _verb2.default("commuter", "aim:er"), new _verb2.default("compacter", "aim:er"), new _verb2.default("comparaître", "rep:aître"), new _verb2.default("comparer", "aim:er"), new _verb2.default("compartimenter", "aim:er"), new _verb2.default("compasser", "aim:er"), new _verb2.default("compatir", "fin:ir"), new _verb2.default("compenser", "aim:er"), new _verb2.default("compétitionner", "aim:er"), new _verb2.default("compiler", "aim:er"), new _verb2.default("compisser", "aim:er"), new _verb2.default("complaire", "pl:aire"), new _verb2.default("complanter", "aim:er"), new _verb2.default("compléter", "décr:éter"), new _verb2.default("complexer", "aim:er"), new _verb2.default("complexifier", "aim:er"), new _verb2.default("complimenter", "aim:er"), new _verb2.default("compliquer", "aim:er"), new _verb2.default("comploter", "aim:er"), new _verb2.default("comporter", "aim:er"), new _verb2.default("composer", "aim:er"), new _verb2.default("composter", "aim:er"), new _verb2.default("comprendre", "pr:endre"), new _verb2.default("compresser", "aim:er"), new _verb2.default("comprimer", "aim:er"), new _verb2.default("compromettre", "m:ettre"), new _verb2.default("comptabiliser", "aim:er"), new _verb2.default("compter", "aim:er"), new _verb2.default("compulser", "aim:er"), new _verb2.default("computer", "aim:er"), new _verb2.default("concasser", "aim:er"), new _verb2.default("concaténer", "ali:éner"), new _verb2.default("concéder", "c:éder"), new _verb2.default("concélébrer", "cél:ébrer"), new _verb2.default("concentrer", "aim:er"), new _verb2.default("conceptualiser", "aim:er"), new _verb2.default("concerner", "aim:er"), new _verb2.default("concerter", "aim:er"), new _verb2.default("concevoir", "dé:cevoir"), new _verb2.default("concilier", "aim:er"), new _verb2.default("conclure", "concl:ure"), new _verb2.default("concocter", "aim:er"), new _verb2.default("concorder", "aim:er"), new _verb2.default("concourir", "cour:ir"), new _verb2.default("concréter", "décr:éter"), new _verb2.default("concrétiser", "aim:er"), new _verb2.default("concurrencer", "pla:cer"), new _verb2.default("condamner", "aim:er"), new _verb2.default("condenser", "aim:er"), new _verb2.default("condescendre", "ten:dre"), new _verb2.default("conditionner", "aim:er"), new _verb2.default("conduire", "condui:re"), new _verb2.default("confectionner", "aim:er"), new _verb2.default("confédérer", "réf:érer"), new _verb2.default("conférer", "réf:érer"), new _verb2.default("confesser", "aim:er"), new _verb2.default("confier", "aim:er"), new _verb2.default("configurer", "aim:er"), new _verb2.default("confiner", "aim:er"), new _verb2.default("confire", "d:ire"), new _verb2.default("confirmer", "aim:er"), new _verb2.default("confisquer", "aim:er"), new _verb2.default("confluer", "aim:er"), new _verb2.default("confondre", "ten:dre"), new _verb2.default("conformer", "aim:er"), new _verb2.default("conforter", "aim:er"), new _verb2.default("confronter", "aim:er"), new _verb2.default("congédier", "aim:er"), new _verb2.default("congeler", "p:eler"), new _verb2.default("congestionner", "aim:er"), new _verb2.default("conglomérer", "réf:érer"), new _verb2.default("conglutiner", "aim:er"), new _verb2.default("congratuler", "aim:er"), new _verb2.default("congréer", "aim:er"), new _verb2.default("cônir", "fin:ir"), new _verb2.default("conjecturer", "aim:er"), new _verb2.default("conjoindre", "crai:ndre"), new _verb2.default("conjuguer", "aim:er"), new _verb2.default("conjurer", "aim:er"), new _verb2.default("connaître", "rep:aître"), new _verb2.default("connecter", "aim:er"), new _verb2.default("connoter", "aim:er"), new _verb2.default("conobrer", "aim:er"), new _verb2.default("conquérir", "acqu:érir"), new _verb2.default("consacrer", "aim:er"), new _verb2.default("conscientiser", "aim:er"), new _verb2.default("conscrire", "écri:re"), new _verb2.default("conseiller", "aim:er"), new _verb2.default("consentir", "men:tir"), new _verb2.default("conserver", "aim:er"), new _verb2.default("considérer", "réf:érer"), new _verb2.default("consigner", "aim:er"), new _verb2.default("consister", "aim:er"), new _verb2.default("consoler", "aim:er"), new _verb2.default("consolider", "aim:er"), new _verb2.default("consommer", "aim:er"), new _verb2.default("consoner", "aim:er"), new _verb2.default("conspirer", "aim:er"), new _verb2.default("conspuer", "aim:er"), new _verb2.default("constater", "aim:er"), new _verb2.default("consteller", "aim:er"), new _verb2.default("consterner", "aim:er"), new _verb2.default("constiper", "aim:er"), new _verb2.default("constituer", "aim:er"), new _verb2.default("constitutionnaliser", "aim:er"), new _verb2.default("construire", "condui:re"), new _verb2.default("consulter", "aim:er"), new _verb2.default("consumer", "aim:er"), new _verb2.default("contacter", "aim:er"), new _verb2.default("contagionner", "aim:er"), new _verb2.default("containeriser", "aim:er"), new _verb2.default("containériser", "aim:er"), new _verb2.default("contaminer", "aim:er"), new _verb2.default("contempler", "aim:er"), new _verb2.default("conteneuriser", "aim:er"), new _verb2.default("contenir", "t:enir"), new _verb2.default("contenter", "aim:er"), new _verb2.default("conter", "aim:er"), new _verb2.default("contester", "aim:er"), new _verb2.default("contextualiser", "aim:er"), new _verb2.default("contingenter", "aim:er"), new _verb2.default("continuer", "aim:er"), new _verb2.default("contorsionner", "aim:er"), new _verb2.default("contourner", "aim:er"), new _verb2.default("contracter", "aim:er"), new _verb2.default("contractualiser", "aim:er"), new _verb2.default("contracturer", "aim:er"), new _verb2.default("contraindre", "crai:ndre"), new _verb2.default("contraposer", "aim:er"), new _verb2.default("contrarier", "aim:er"), new _verb2.default("contraster", "aim:er"), new _verb2.default("contre-attaquer", "aim:er"), new _verb2.default("contrebalancer", "pla:cer"), new _verb2.default("contrebattre", "bat:tre"), new _verb2.default("contre-bouter", "aim:er"), new _verb2.default("contrebouter", "aim:er"), new _verb2.default("contre-braquer", "aim:er"), new _verb2.default("contre-buter", "aim:er"), new _verb2.default("contrebuter", "aim:er"), new _verb2.default("contrecarrer", "aim:er"), new _verb2.default("contredire", "préd:ire"), new _verb2.default("contrefaire", "f:aire"), new _verb2.default("contreficher", "aim:er"), new _verb2.default("contrefoutre", "fou:tre"), new _verb2.default("contre-indiquer", "aim:er"), new _verb2.default("contremander", "aim:er"), new _verb2.default("contre-manifester", "aim:er"), new _verb2.default("contremarquer", "aim:er"), new _verb2.default("contre-miner", "aim:er"), new _verb2.default("contre-passer", "aim:er"), new _verb2.default("contre-plaquer", "aim:er"), new _verb2.default("contreplaquer", "aim:er"), new _verb2.default("contrer", "aim:er"), new _verb2.default("contre-sceller", "aim:er"), new _verb2.default("contresigner", "aim:er"), new _verb2.default("contre-tirer", "aim:er"), new _verb2.default("contretyper", "aim:er"), new _verb2.default("contrevenir", "t:enir"), new _verb2.default("contreventer", "aim:er"), new _verb2.default("contribuer", "aim:er"), new _verb2.default("contrister", "aim:er"), new _verb2.default("contrôler", "aim:er"), new _verb2.default("controuver", "aim:er"), new _verb2.default("controverser", "aim:er"), new _verb2.default("contusionner", "aim:er"), new _verb2.default("convaincre", "vain:cre"), new _verb2.default("convenir", "t:enir"), new _verb2.default("conventionner", "aim:er"), new _verb2.default("converger", "man:ger"), new _verb2.default("converser", "aim:er"), new _verb2.default("convertir", "fin:ir"), new _verb2.default("convier", "aim:er"), new _verb2.default("convoiter", "aim:er"), new _verb2.default("convoler", "aim:er"), new _verb2.default("convoquer", "aim:er"), new _verb2.default("convoyer", "netto:yer"), new _verb2.default("convulser", "aim:er"), new _verb2.default("convulsionner", "aim:er"), new _verb2.default("coopérer", "réf:érer"), new _verb2.default("coopter", "aim:er"), new _verb2.default("coordonner", "aim:er"), new _verb2.default("copartager", "man:ger"), new _verb2.default("copermuter", "aim:er"), new _verb2.default("copier", "aim:er"), new _verb2.default("copiner", "aim:er"), new _verb2.default("coposséder", "c:éder"), new _verb2.default("coproduire", "condui:re"), new _verb2.default("copuler", "aim:er"), new _verb2.default("coquer", "aim:er"), new _verb2.default("coqueter", "j:eter"), new _verb2.default("coquiller", "aim:er"), new _verb2.default("cordeler", "app:eler"), new _verb2.default("corder", "aim:er"), new _verb2.default("cordonner", "aim:er"), new _verb2.default("cornaquer", "aim:er"), new _verb2.default("corner", "aim:er"), new _verb2.default("correctionnaliser", "aim:er"), new _verb2.default("corréler", "rév:éler"), new _verb2.default("correspondre", "ten:dre"), new _verb2.default("corriger", "man:ger"), new _verb2.default("corroborer", "aim:er"), new _verb2.default("corroder", "aim:er"), new _verb2.default("corrompre", "rom:pre"), new _verb2.default("corroyer", "netto:yer"), new _verb2.default("corser", "aim:er"), new _verb2.default("corseter", "ach:eter"), new _verb2.default("cosigner", "aim:er"), new _verb2.default("cosmétiquer", "aim:er"), new _verb2.default("cosser", "aim:er"), new _verb2.default("costumer", "aim:er"), new _verb2.default("coter", "aim:er"), new _verb2.default("cotir", "fin:ir"), new _verb2.default("cotiser", "aim:er"), new _verb2.default("cotonner", "aim:er"), new _verb2.default("côtoyer", "netto:yer"), new _verb2.default("couchailler", "aim:er"), new _verb2.default("coucher", "aim:er"), new _verb2.default("couder", "aim:er"), new _verb2.default("coudoyer", "netto:yer"), new _verb2.default("coudre", "cou:dre"), new _verb2.default("couillonner", "aim:er"), new _verb2.default("couiner", "aim:er"), new _verb2.default("couler", "aim:er"), new _verb2.default("coulisser", "aim:er"), new _verb2.default("coupailler", "aim:er"), new _verb2.default("coupeller", "aim:er"), new _verb2.default("couper", "aim:er"), new _verb2.default("coupler", "aim:er"), new _verb2.default("courailler", "aim:er"), new _verb2.default("courbaturer", "aim:er"), new _verb2.default("courber", "aim:er"), new _verb2.default("courcailler", "aim:er"), new _verb2.default("courir", "cour:ir"), new _verb2.default("couronner", "aim:er"), new _verb2.default("courroucer", "pla:cer"), new _verb2.default("courser", "aim:er"), new _verb2.default("courtauder", "aim:er"), new _verb2.default("court-circuiter", "aim:er"), new _verb2.default("courtiser", "aim:er"), new _verb2.default("cousiner", "aim:er"), new _verb2.default("coûter", "aim:er"), new _verb2.default("couturer", "aim:er"), new _verb2.default("couver", "aim:er"), new _verb2.default("couvrir", "ouv:rir"), new _verb2.default("craboter", "aim:er"), new _verb2.default("cracher", "aim:er"), new _verb2.default("crachiner", "aim:er"), new _verb2.default("crachoter", "aim:er"), new _verb2.default("crachouiller", "aim:er"), new _verb2.default("crailler", "aim:er"), new _verb2.default("craindre", "crai:ndre"), new _verb2.default("cramer", "aim:er"), new _verb2.default("cramper", "aim:er"), new _verb2.default("cramponner", "aim:er"), new _verb2.default("crampser", "aim:er"), new _verb2.default("cramser", "aim:er"), new _verb2.default("craner", "aim:er"), new _verb2.default("crâner", "aim:er"), new _verb2.default("cranter", "aim:er"), new _verb2.default("crapahuter", "aim:er"), new _verb2.default("crapaüter", "aim:er"), new _verb2.default("crapuler", "aim:er"), new _verb2.default("craqueler", "app:eler"), new _verb2.default("craquer", "aim:er"), new _verb2.default("craqueter", "j:eter"), new _verb2.default("crasser", "aim:er"), new _verb2.default("cravacher", "aim:er"), new _verb2.default("cravater", "aim:er"), new _verb2.default("crawler", "aim:er"), new _verb2.default("crayonner", "aim:er"), new _verb2.default("crécher", "s:écher"), new _verb2.default("crédibiliser", "aim:er"), new _verb2.default("créditer", "aim:er"), new _verb2.default("créer", "aim:er"), new _verb2.default("crémer", "cr:émer"), new _verb2.default("créneler", "app:eler"), new _verb2.default("créner", "ali:éner"), new _verb2.default("créoliser", "aim:er"), new _verb2.default("créosoter", "aim:er"), new _verb2.default("crêper", "aim:er"), new _verb2.default("crépir", "fin:ir"), new _verb2.default("crépiter", "aim:er"), new _verb2.default("crétiniser", "aim:er"), new _verb2.default("creuser", "aim:er"), new _verb2.default("crevasser", "aim:er"), new _verb2.default("crever", "l:ever"), new _verb2.default("crevoter", "aim:er"), new _verb2.default("criailler", "aim:er"), new _verb2.default("cribler", "aim:er"), new _verb2.default("crier", "aim:er"), new _verb2.default("criminaliser", "aim:er"), new _verb2.default("crinquer", "aim:er"), new _verb2.default("crisper", "aim:er"), new _verb2.default("crisser", "aim:er"), new _verb2.default("cristalliser", "aim:er"), new _verb2.default("criticailler", "aim:er"), new _verb2.default("critiquer", "aim:er"), new _verb2.default("croasser", "aim:er"), new _verb2.default("crocher", "aim:er"), new _verb2.default("crocheter", "ach:eter"), new _verb2.default("crochir", "fin:ir"), new _verb2.default("croire", "cr:oire"), new _verb2.default("croiser", "aim:er"), new _verb2.default("croître", "cr:oître"), new _verb2.default("croquer", "aim:er"), new _verb2.default("crosser", "aim:er"), new _verb2.default("crotter", "aim:er"), new _verb2.default("crouler", "aim:er"), new _verb2.default("croupir", "fin:ir"), new _verb2.default("croustiller", "aim:er"), new _verb2.default("croûter", "aim:er"), new _verb2.default("crucifier", "aim:er"), new _verb2.default("crypter", "aim:er"), new _verb2.default("cuber", "aim:er"), new _verb2.default("cueillir", "cueill:ir"), new _verb2.default("cuirasser", "aim:er"), new _verb2.default("cuire", "condui:re"), new _verb2.default("cuisiner", "aim:er"), new _verb2.default("cuiter", "aim:er"), new _verb2.default("cuivrer", "aim:er"), new _verb2.default("culbuter", "aim:er"), new _verb2.default("culer", "aim:er"), new _verb2.default("culminer", "aim:er"), new _verb2.default("culotter", "aim:er"), new _verb2.default("culpabiliser", "aim:er"), new _verb2.default("cultiver", "aim:er"), new _verb2.default("cumuler", "aim:er"), new _verb2.default("curer", "aim:er"), new _verb2.default("cureter", "j:eter"), new _verb2.default("cuveler", "app:eler"), new _verb2.default("cuver", "aim:er"), new _verb2.default("cyanoser", "aim:er"), new _verb2.default("cyanurer", "aim:er"), new _verb2.default("cycliser", "aim:er"), new _verb2.default("cylindrer", "aim:er"), new _verb2.default("dactylographier", "aim:er"), new _verb2.default("daguer", "aim:er"), new _verb2.default("daigner", "aim:er"), new _verb2.default("daller", "aim:er"), new _verb2.default("damasquiner", "aim:er"), new _verb2.default("damasser", "aim:er"), new _verb2.default("damer", "aim:er"), new _verb2.default("damner", "aim:er"), new _verb2.default("dandiner", "aim:er"), new _verb2.default("danser", "aim:er"), new _verb2.default("dansoter", "aim:er"), new _verb2.default("dansotter", "aim:er"), new _verb2.default("darder", "aim:er"), new _verb2.default("dater", "aim:er"), new _verb2.default("dauber", "aim:er"), new _verb2.default("déactiver", "aim:er"), new _verb2.default("déambuler", "aim:er"), new _verb2.default("débâcher", "aim:er"), new _verb2.default("débâcler", "aim:er"), new _verb2.default("débagouler", "aim:er"), new _verb2.default("débâillonner", "aim:er"), new _verb2.default("débalancer", "pla:cer"), new _verb2.default("déballer", "aim:er"), new _verb2.default("déballonner", "aim:er"), new _verb2.default("débalourder", "aim:er"), new _verb2.default("débanaliser", "aim:er"), new _verb2.default("débander", "aim:er"), new _verb2.default("débaptiser", "aim:er"), new _verb2.default("débarbouiller", "aim:er"), new _verb2.default("débarder", "aim:er"), new _verb2.default("débarquer", "aim:er"), new _verb2.default("débarrasser", "aim:er"), new _verb2.default("débarrer", "aim:er"), new _verb2.default("débâter", "aim:er"), new _verb2.default("débâtir", "fin:ir"), new _verb2.default("débattre", "bat:tre"), new _verb2.default("débaucher", "aim:er"), new _verb2.default("débecqueter", "j:eter"), new _verb2.default("débecter", "aim:er"), new _verb2.default("débenzoler", "aim:er"), new _verb2.default("débiliter", "aim:er"), new _verb2.default("débillarder", "aim:er"), new _verb2.default("débiner", "aim:er"), new _verb2.default("débiter", "aim:er"), new _verb2.default("déblatérer", "réf:érer"), new _verb2.default("déblayer", "pa:yer"), new _verb2.default("débleuir", "fin:ir"), new _verb2.default("débloquer", "aim:er"), new _verb2.default("débobiner", "aim:er"), new _verb2.default("déboguer", "aim:er"), new _verb2.default("déboiser", "aim:er"), new _verb2.default("déboîter", "aim:er"), new _verb2.default("débonder", "aim:er"), new _verb2.default("déborder", "aim:er"), new _verb2.default("débosseler", "app:eler"), new _verb2.default("débotter", "aim:er"), new _verb2.default("déboucher", "aim:er"), new _verb2.default("déboucler", "aim:er"), new _verb2.default("débouder", "aim:er"), new _verb2.default("débouler", "aim:er"), new _verb2.default("déboulonner", "aim:er"), new _verb2.default("débouquer", "aim:er"), new _verb2.default("débourber", "aim:er"), new _verb2.default("débourrer", "aim:er"), new _verb2.default("débourser", "aim:er"), new _verb2.default("déboussoler", "aim:er"), new _verb2.default("débouter", "aim:er"), new _verb2.default("déboutonner", "aim:er"), new _verb2.default("débraguetter", "aim:er"), new _verb2.default("débrailler", "aim:er"), new _verb2.default("débrancher", "aim:er"), new _verb2.default("débraser", "aim:er"), new _verb2.default("débrayer", "pa:yer"), new _verb2.default("débrider", "aim:er"), new _verb2.default("débriefer", "aim:er"), new _verb2.default("débrocher", "aim:er"), new _verb2.default("débrouiller", "aim:er"), new _verb2.default("débroussailler", "aim:er"), new _verb2.default("débrousser", "aim:er"), new _verb2.default("débucher", "aim:er"), new _verb2.default("débudgétiser", "aim:er"), new _verb2.default("débuller", "aim:er"), new _verb2.default("débureaucratiser", "aim:er"), new _verb2.default("débusquer", "aim:er"), new _verb2.default("débuter", "aim:er"), new _verb2.default("décacheter", "j:eter"), new _verb2.default("décadenasser", "aim:er"), new _verb2.default("décaféiner", "aim:er"), new _verb2.default("décaisser", "aim:er"), new _verb2.default("décalaminer", "aim:er"), new _verb2.default("décalcifier", "aim:er"), new _verb2.default("décaler", "aim:er"), new _verb2.default("décalotter", "aim:er"), new _verb2.default("décalquer", "aim:er"), new _verb2.default("décamper", "aim:er"), new _verb2.default("décaniller", "aim:er"), new _verb2.default("décanter", "aim:er"), new _verb2.default("décapeler", "app:eler"), new _verb2.default("décaper", "aim:er"), new _verb2.default("décapitaliser", "aim:er"), new _verb2.default("décapiter", "aim:er"), new _verb2.default("décapoter", "aim:er"), new _verb2.default("décapsuler", "aim:er"), new _verb2.default("décapuchonner", "aim:er"), new _verb2.default("décarbonater", "aim:er"), new _verb2.default("décarburer", "aim:er"), new _verb2.default("décarcasser", "aim:er"), new _verb2.default("décarreler", "app:eler"), new _verb2.default("décarrer", "aim:er"), new _verb2.default("décartonner", "aim:er"), new _verb2.default("décatir", "fin:ir"), new _verb2.default("décauser", "aim:er"), new _verb2.default("décavaillonner", "aim:er"), new _verb2.default("décaver", "aim:er"), new _verb2.default("décéder", "c:éder"), new _verb2.default("décélérer", "réf:érer"), new _verb2.default("déceler", "p:eler"), new _verb2.default("décentraliser", "aim:er"), new _verb2.default("décentrer", "aim:er"), new _verb2.default("décercler", "aim:er"), new _verb2.default("décérébrer", "cél:ébrer"), new _verb2.default("décerner", "aim:er"), new _verb2.default("décerveler", "app:eler"), new _verb2.default("décesser", "aim:er"), new _verb2.default("décevoir", "dé:cevoir"), new _verb2.default("déchagriner", "aim:er"), new _verb2.default("déchaîner", "aim:er"), new _verb2.default("déchanter", "aim:er"), new _verb2.default("déchaper", "aim:er"), new _verb2.default("déchaperonner", "aim:er"), new _verb2.default("décharger", "man:ger"), new _verb2.default("décharner", "aim:er"), new _verb2.default("déchaumer", "aim:er"), new _verb2.default("déchausser", "aim:er"), new _verb2.default("déchevêtrer", "aim:er"), new _verb2.default("décheviller", "aim:er"), new _verb2.default("déchiffonner", "aim:er"), new _verb2.default("déchiffrer", "aim:er"), new _verb2.default("déchiqueter", "j:eter"), new _verb2.default("déchirer", "aim:er"), new _verb2.default("déchlorurer", "aim:er"), new _verb2.default("déchoir", "déch:oir"), new _verb2.default("déchristianiser", "aim:er"), new _verb2.default("déchromer", "aim:er"), new _verb2.default("décider", "aim:er"), new _verb2.default("décimaliser", "aim:er"), new _verb2.default("décimer", "aim:er"), new _verb2.default("décintrer", "aim:er"), new _verb2.default("déclamer", "aim:er"), new _verb2.default("déclarer", "aim:er"), new _verb2.default("déclasser", "aim:er"), new _verb2.default("déclassifier", "aim:er"), new _verb2.default("déclaveter", "j:eter"), new _verb2.default("déclencher", "aim:er"), new _verb2.default("décléricaliser", "aim:er"), new _verb2.default("décliner", "aim:er"), new _verb2.default("déclinquer", "aim:er"), new _verb2.default("décliqueter", "j:eter"), new _verb2.default("décloisonner", "aim:er"), new _verb2.default("déclore", "éclo:re"), new _verb2.default("déclouer", "aim:er"), new _verb2.default("décocher", "aim:er"), new _verb2.default("décoder", "aim:er"), new _verb2.default("décoffrer", "aim:er"), new _verb2.default("décoiffer", "aim:er"), new _verb2.default("décoincer", "pla:cer"), new _verb2.default("décolérer", "réf:érer"), new _verb2.default("décollectiviser", "aim:er"), new _verb2.default("décoller", "aim:er"), new _verb2.default("décolleter", "j:eter"), new _verb2.default("décoloniser", "aim:er"), new _verb2.default("décolorer", "aim:er"), new _verb2.default("décommander", "aim:er"), new _verb2.default("décompenser", "aim:er"), new _verb2.default("décomplexer", "aim:er"), new _verb2.default("décomposer", "aim:er"), new _verb2.default("compoter", "aim:er"), new _verb2.default("décompresser", "aim:er"), new _verb2.default("décomprimer", "aim:er"), new _verb2.default("décompter", "aim:er"), new _verb2.default("déconcentrer", "aim:er"), new _verb2.default("déconcerter", "aim:er"), new _verb2.default("déconcrisser", "aim:er"), new _verb2.default("déconditionner", "aim:er"), new _verb2.default("décongeler", "p:eler"), new _verb2.default("décongestionner", "aim:er"), new _verb2.default("déconjuguer", "aim:er"), new _verb2.default("déconnecter", "aim:er"), new _verb2.default("déconner", "aim:er"), new _verb2.default("déconseiller", "aim:er"), new _verb2.default("déconsidérer", "réf:érer"), new _verb2.default("déconsigner", "aim:er"), new _verb2.default("déconstiper", "aim:er"), new _verb2.default("déconstruire", "condui:re"), new _verb2.default("décontaminer", "aim:er"), new _verb2.default("décontenancer", "pla:cer"), new _verb2.default("décontracter", "aim:er"), new _verb2.default("déconventionner", "aim:er"), new _verb2.default("décorder", "aim:er"), new _verb2.default("décorer", "aim:er"), new _verb2.default("décorner", "aim:er"), new _verb2.default("décortiquer", "aim:er"), new _verb2.default("découcher", "aim:er"), new _verb2.default("découdre", "cou:dre"), new _verb2.default("découler", "aim:er"), new _verb2.default("découper", "aim:er"), new _verb2.default("découpler", "aim:er"), new _verb2.default("décourager", "man:ger"), new _verb2.default("découronner", "aim:er"), new _verb2.default("découvrir", "ouv:rir"), new _verb2.default("décrasser", "aim:er"), new _verb2.default("décréditer", "aim:er"), new _verb2.default("décrémenter", "aim:er"), new _verb2.default("décrêper", "aim:er"), new _verb2.default("décrépir", "fin:ir"), new _verb2.default("décrépiter", "aim:er"), new _verb2.default("décréter", "décr:éter"), new _verb2.default("décreuser", "aim:er"), new _verb2.default("décrier", "aim:er"), new _verb2.default("décriminaliser", "aim:er"), new _verb2.default("décrire", "écri:re"), new _verb2.default("décrisper", "aim:er"), new _verb2.default("décrocher", "aim:er"), new _verb2.default("décroiser", "aim:er"), new _verb2.default("décroître", "accr:oître"), new _verb2.default("décrotter", "aim:er"), new _verb2.default("décroûter", "aim:er"), new _verb2.default("décruer", "aim:er"), new _verb2.default("décruser", "aim:er"), new _verb2.default("décrypter", "aim:er"), new _verb2.default("décuivrer", "aim:er"), new _verb2.default("déculasser", "aim:er"), new _verb2.default("déculotter", "aim:er"), new _verb2.default("déculpabiliser", "aim:er"), new _verb2.default("décupler", "aim:er"), new _verb2.default("décuver", "aim:er"), new _verb2.default("dédaigner", "aim:er"), new _verb2.default("dédicacer", "pla:cer"), new _verb2.default("dédier", "aim:er"), new _verb2.default("dédifférencier", "aim:er"), new _verb2.default("dédire", "préd:ire"), new _verb2.default("dédommager", "man:ger"), new _verb2.default("dédorer", "aim:er"), new _verb2.default("dédouaner", "aim:er"), new _verb2.default("dédoubler", "aim:er"), new _verb2.default("dédramatiser", "aim:er"), new _verb2.default("déduire", "condui:re"), new _verb2.default("défaillir", "assaill:ir"), new _verb2.default("défaire", "f:aire"), new _verb2.default("défalquer", "aim:er"), new _verb2.default("défarder", "aim:er"), new _verb2.default("défatiguer", "aim:er"), new _verb2.default("défaufiler", "aim:er"), new _verb2.default("défausser", "aim:er"), new _verb2.default("défavoriser", "aim:er"), new _verb2.default("défendre", "ten:dre"), new _verb2.default("déféquer", "diss:équer"), new _verb2.default("déférer", "réf:érer"), new _verb2.default("déferler", "aim:er"), new _verb2.default("déferrer", "aim:er"), new _verb2.default("déferriser", "aim:er"), new _verb2.default("défeuiller", "aim:er"), new _verb2.default("défeutrer", "aim:er"), new _verb2.default("défibrer", "aim:er"), new _verb2.default("déficeler", "app:eler"), new _verb2.default("défier", "aim:er"), new _verb2.default("défiger", "man:ger"), new _verb2.default("défigurer", "aim:er"), new _verb2.default("défiler", "aim:er"), new _verb2.default("définir", "fin:ir"), new _verb2.default("déflagrer", "aim:er"), new _verb2.default("déflaquer", "aim:er"), new _verb2.default("défléchir", "fin:ir"), new _verb2.default("défleurir", "fin:ir"), new _verb2.default("déflorer", "aim:er"), new _verb2.default("défolier", "aim:er"), new _verb2.default("défoncer", "pla:cer"), new _verb2.default("déforcer", "pla:cer"), new _verb2.default("déformer", "aim:er"), new _verb2.default("défouler", "aim:er"), new _verb2.default("défourailler", "aim:er"), new _verb2.default("défourner", "aim:er"), new _verb2.default("défourrer", "aim:er"), new _verb2.default("défraîchir", "fin:ir"), new _verb2.default("défranciser", "aim:er"), new _verb2.default("défrayer", "pa:yer"), new _verb2.default("défretter", "aim:er"), new _verb2.default("défricher", "aim:er"), new _verb2.default("défringuer", "aim:er"), new _verb2.default("défriper", "aim:er"), new _verb2.default("défriser", "aim:er"), new _verb2.default("défroisser", "aim:er"), new _verb2.default("défroncer", "pla:cer"), new _verb2.default("défroquer", "aim:er"), new _verb2.default("défruiter", "aim:er"), new _verb2.default("dégager", "man:ger"), new _verb2.default("dégainer", "aim:er"), new _verb2.default("dégalonner", "aim:er"), new _verb2.default("déganter", "aim:er"), new _verb2.default("dégarnir", "fin:ir"), new _verb2.default("dégasoliner", "aim:er"), new _verb2.default("dégauchir", "fin:ir"), new _verb2.default("dégazer", "aim:er"), new _verb2.default("dégazoliner", "aim:er"), new _verb2.default("dégazonner", "aim:er"), new _verb2.default("dégeler", "p:eler"), new _verb2.default("dégénérer", "réf:érer"), new _verb2.default("dégermer", "aim:er"), new _verb2.default("dégingander", "aim:er"), new _verb2.default("dégîter", "aim:er"), new _verb2.default("dégivrer", "aim:er"), new _verb2.default("déglacer", "pla:cer"), new _verb2.default("déglinguer", "aim:er"), new _verb2.default("dégluer", "aim:er"), new _verb2.default("déglutir", "fin:ir"), new _verb2.default("dégobiller", "aim:er"), new _verb2.default("dégoiser", "aim:er"), new _verb2.default("dégommer", "aim:er"), new _verb2.default("dégonder", "aim:er"), new _verb2.default("dégonfler", "aim:er"), new _verb2.default("dégorger", "man:ger"), new _verb2.default("dégoter", "aim:er"), new _verb2.default("dégotter", "aim:er"), new _verb2.default("dégoudronner", "aim:er"), new _verb2.default("dégouliner", "aim:er"), new _verb2.default("dégoupiller", "aim:er"), new _verb2.default("dégourdir", "fin:ir"), new _verb2.default("dégoûter", "aim:er"), new _verb2.default("dégoutter", "aim:er"), new _verb2.default("dégrader", "aim:er"), new _verb2.default("dégrafer", "aim:er"), new _verb2.default("dégraisser", "aim:er"), new _verb2.default("dégravoyer", "netto:yer"), new _verb2.default("dégréer", "aim:er"), new _verb2.default("dégrever", "l:ever"), new _verb2.default("dégringoler", "aim:er"), new _verb2.default("dégripper", "aim:er"), new _verb2.default("dégriser", "aim:er"), new _verb2.default("dégrosser", "aim:er"), new _verb2.default("dégrossir", "fin:ir"), new _verb2.default("dégrouiller", "aim:er"), new _verb2.default("dégrouper", "aim:er"), new _verb2.default("déguerpir", "fin:ir"), new _verb2.default("dégueuler", "aim:er"), new _verb2.default("déguiser", "aim:er"), new _verb2.default("dégurgiter", "aim:er"), new _verb2.default("déguster", "aim:er"), new _verb2.default("déhaler", "aim:er"), new _verb2.default("déhancher", "aim:er"), new _verb2.default("déharder", "aim:er"), new _verb2.default("déharnacher", "aim:er"), new _verb2.default("déhotter", "aim:er"), new _verb2.default("déhouiller", "aim:er"), new _verb2.default("déifier", "aim:er"), new _verb2.default("déjanter", "aim:er"), new _verb2.default("déjauger", "man:ger"), new _verb2.default("déjaunir", "fin:ir"), new _verb2.default("déjeter", "j:eter"), new _verb2.default("déjeuner", "aim:er"), new _verb2.default("déjouer", "aim:er"), new _verb2.default("déjucher", "aim:er"), new _verb2.default("déjuger", "man:ger"), new _verb2.default("délabialiser", "aim:er"), new _verb2.default("délabrer", "aim:er"), new _verb2.default("délacer", "pla:cer"), new _verb2.default("délainer", "aim:er"), new _verb2.default("délaisser", "aim:er"), new _verb2.default("délaiter", "aim:er"), new _verb2.default("délarder", "aim:er"), new _verb2.default("délasser", "aim:er"), new _verb2.default("délatter", "aim:er"), new _verb2.default("délaver", "aim:er"), new _verb2.default("délayer", "pa:yer"), new _verb2.default("délecter", "aim:er"), new _verb2.default("déléguer", "l:éguer"), new _verb2.default("délester", "aim:er"), new _verb2.default("délibérer", "réf:érer"), new _verb2.default("délier", "aim:er"), new _verb2.default("délignifier", "aim:er"), new _verb2.default("délimiter", "aim:er"), new _verb2.default("délinéamenter", "aim:er"), new _verb2.default("délinéer", "aim:er"), new _verb2.default("délirer", "aim:er"), new _verb2.default("délisser", "aim:er"), new _verb2.default("déliter", "aim:er"), new _verb2.default("délivrer", "aim:er"), new _verb2.default("déloger", "man:ger"), new _verb2.default("déloquer", "aim:er"), new _verb2.default("délover", "aim:er"), new _verb2.default("délurer", "aim:er"), new _verb2.default("délustrer", "aim:er"), new _verb2.default("déluter", "aim:er"), new _verb2.default("démaçonner", "aim:er"), new _verb2.default("démagnétiser", "aim:er"), new _verb2.default("démaigrir", "fin:ir"), new _verb2.default("démailler", "aim:er"), new _verb2.default("démailloter", "aim:er"), new _verb2.default("démancher", "aim:er"), new _verb2.default("demander", "aim:er"), new _verb2.default("démanger", "man:ger"), new _verb2.default("démanteler", "p:eler"), new _verb2.default("démantibuler", "aim:er"), new _verb2.default("démaquiller", "aim:er"), new _verb2.default("démarcher", "aim:er"), new _verb2.default("démarier", "aim:er"), new _verb2.default("démarquer", "aim:er"), new _verb2.default("démarrer", "aim:er"), new _verb2.default("démascler", "aim:er"), new _verb2.default("démasquer", "aim:er"), new _verb2.default("démastiquer", "aim:er"), new _verb2.default("dématérialiser", "aim:er"), new _verb2.default("démâter", "aim:er"), new _verb2.default("démazouter", "aim:er"), new _verb2.default("démêler", "aim:er"), new _verb2.default("démembrer", "aim:er"), new _verb2.default("déménager", "man:ger"), new _verb2.default("démener", "m:ener"), new _verb2.default("démentir", "men:tir"), new _verb2.default("démerder", "aim:er"), new _verb2.default("démériter", "aim:er"), new _verb2.default("déméthaniser", "aim:er"), new _verb2.default("démettre", "m:ettre"), new _verb2.default("démeubler", "aim:er"), new _verb2.default("demeurer", "aim:er"), new _verb2.default("démieller", "aim:er"), new _verb2.default("démilitariser", "aim:er"), new _verb2.default("déminéraliser", "aim:er"), new _verb2.default("déminer", "aim:er"), new _verb2.default("démissionner", "aim:er"), new _verb2.default("démobiliser", "aim:er"), new _verb2.default("démocratiser", "aim:er"), new _verb2.default("démoder", "aim:er"), new _verb2.default("démoduler", "aim:er"), new _verb2.default("démolir", "fin:ir"), new _verb2.default("démonétiser", "aim:er"), new _verb2.default("démonter", "aim:er"), new _verb2.default("démontrer", "aim:er"), new _verb2.default("démoraliser", "aim:er"), new _verb2.default("démordre", "ten:dre"), new _verb2.default("démotiver", "aim:er"), new _verb2.default("démoucheter", "j:eter"), new _verb2.default("démouler", "aim:er"), new _verb2.default("démouscailler", "aim:er"), new _verb2.default("démoustiquer", "aim:er"), new _verb2.default("démultiplier", "aim:er"), new _verb2.default("démunir", "fin:ir"), new _verb2.default("démurer", "aim:er"), new _verb2.default("démurger", "man:ger"), new _verb2.default("démuseler", "app:eler"), new _verb2.default("démystifier", "aim:er"), new _verb2.default("démythifier", "aim:er"), new _verb2.default("dénantir", "fin:ir"), new _verb2.default("dénasaliser", "aim:er"), new _verb2.default("dénationaliser", "aim:er"), new _verb2.default("dénatter", "aim:er"), new _verb2.default("dénaturaliser", "aim:er"), new _verb2.default("dénaturer", "aim:er"), new _verb2.default("dénazifier", "aim:er"), new _verb2.default("dénébuler", "aim:er"), new _verb2.default("déneiger", "man:ger"), new _verb2.default("dénerver", "aim:er"), new _verb2.default("déniaiser", "aim:er"), new _verb2.default("dénicher", "aim:er"), new _verb2.default("dénickeler", "aim:er"), new _verb2.default("dénicotiniser", "aim:er"), new _verb2.default("dénier", "aim:er"), new _verb2.default("dénigrer", "aim:er"), new _verb2.default("dénitrer", "aim:er"), new _verb2.default("dénitrifier", "aim:er"), new _verb2.default("déniveler", "app:eler"), new _verb2.default("dénombrer", "aim:er"), new _verb2.default("dénommer", "aim:er"), new _verb2.default("dénoncer", "pla:cer"), new _verb2.default("dénoter", "aim:er"), new _verb2.default("dénouer", "aim:er"), new _verb2.default("dénoyauter", "aim:er"), new _verb2.default("dénoyer", "netto:yer"), new _verb2.default("denteler", "app:eler"), new _verb2.default("dénucléariser", "aim:er"), new _verb2.default("dénuder", "aim:er"), new _verb2.default("dénuer", "aim:er"), new _verb2.default("dépailler", "aim:er"), new _verb2.default("dépaisseler", "app:eler"), new _verb2.default("dépalisser", "aim:er"), new _verb2.default("dépanner", "aim:er"), new _verb2.default("dépaqueter", "j:eter"), new _verb2.default("déparaffiner", "aim:er"), new _verb2.default("dépareiller", "aim:er"), new _verb2.default("déparer", "aim:er"), new _verb2.default("déparier", "aim:er"), new _verb2.default("déparler", "aim:er"), new _verb2.default("départager", "man:ger"), new _verb2.default("départir", "men:tir"), new _verb2.default("dépasser", "aim:er"), new _verb2.default("dépassionner", "aim:er"), new _verb2.default("dépatouiller", "aim:er"), new _verb2.default("dépaver", "aim:er"), new _verb2.default("dépayser", "aim:er"), new _verb2.default("dépecer", "dép:ecer"), new _verb2.default("dépêcher", "aim:er"), new _verb2.default("dépeigner", "aim:er"), new _verb2.default("dépeindre", "crai:ndre"), new _verb2.default("dépelotonner", "aim:er"), new _verb2.default("dépendre", "ten:dre"), new _verb2.default("dépenser", "aim:er"), new _verb2.default("dépérir", "fin:ir"), new _verb2.default("dépersonnaliser", "aim:er"), new _verb2.default("dépêtrer", "aim:er"), new _verb2.default("dépeupler", "aim:er"), new _verb2.default("déphaser", "aim:er"), new _verb2.default("déphosphorer", "aim:er"), new _verb2.default("dépiauter", "aim:er"), new _verb2.default("dépiler", "aim:er"), new _verb2.default("dépingler", "aim:er"), new _verb2.default("dépiquer", "aim:er"), new _verb2.default("dépister", "aim:er"), new _verb2.default("dépiter", "aim:er"), new _verb2.default("déplacer", "pla:cer"), new _verb2.default("déplafonner", "aim:er"), new _verb2.default("déplaire", "pl:aire"), new _verb2.default("déplanquer", "aim:er"), new _verb2.default("déplanter", "aim:er"), new _verb2.default("déplâtrer", "aim:er"), new _verb2.default("déplier", "aim:er"), new _verb2.default("déplisser", "aim:er"), new _verb2.default("déplomber", "aim:er"), new _verb2.default("déplorer", "aim:er"), new _verb2.default("déployer", "netto:yer"), new _verb2.default("déplumer", "aim:er"), new _verb2.default("dépoétiser", "aim:er"), new _verb2.default("dépointer", "aim:er"), new _verb2.default("dépolariser", "aim:er"), new _verb2.default("dépolir", "fin:ir"), new _verb2.default("dépolitiser", "aim:er"), new _verb2.default("dépolluer", "aim:er"), new _verb2.default("dépolymériser", "aim:er"), new _verb2.default("dépontiller", "aim:er"), new _verb2.default("déporter", "aim:er"), new _verb2.default("déposer", "aim:er"), new _verb2.default("déposséder", "c:éder"), new _verb2.default("dépoter", "aim:er"), new _verb2.default("dépoudrer", "aim:er"), new _verb2.default("dépouiller", "aim:er"), new _verb2.default("dépoussiérer", "réf:érer"), new _verb2.default("dépraver", "aim:er"), new _verb2.default("déprécier", "aim:er"), new _verb2.default("déprendre", "pr:endre"), new _verb2.default("dépressuriser", "aim:er"), new _verb2.default("déprimer", "aim:er"), new _verb2.default("dépriser", "aim:er"), new _verb2.default("déprogrammer", "aim:er"), new _verb2.default("déprolétariser", "aim:er"), new _verb2.default("dépropaniser", "aim:er"), new _verb2.default("dépuceler", "app:eler"), new _verb2.default("dépulper", "aim:er"), new _verb2.default("dépurer", "aim:er"), new _verb2.default("députer", "aim:er"), new _verb2.default("déquiller", "aim:er"), new _verb2.default("déraciner", "aim:er"), new _verb2.default("dérader", "aim:er"), new _verb2.default("dérager", "man:ger"), new _verb2.default("déraidir", "fin:ir"), new _verb2.default("dérailler", "aim:er"), new _verb2.default("déraisonner", "aim:er"), new _verb2.default("déranger", "man:ger"), new _verb2.default("déraper", "aim:er"), new _verb2.default("déraser", "aim:er"), new _verb2.default("dérater", "aim:er"), new _verb2.default("dératiser", "aim:er"), new _verb2.default("dérayer", "pa:yer"), new _verb2.default("déréaliser", "aim:er"), new _verb2.default("dérégler", "r:égler"), new _verb2.default("déréguler", "aim:er"), new _verb2.default("dérider", "aim:er"), new _verb2.default("dériver", "aim:er"), new _verb2.default("dérober", "aim:er"), new _verb2.default("dérocher", "aim:er"), new _verb2.default("déroder", "aim:er"), new _verb2.default("déroger", "man:ger"), new _verb2.default("dérougir", "fin:ir"), new _verb2.default("dérouiller", "aim:er"), new _verb2.default("dérouler", "aim:er"), new _verb2.default("dérouter", "aim:er"), new _verb2.default("désabonner", "aim:er"), new _verb2.default("désabuser", "aim:er"), new _verb2.default("désacclimater", "aim:er"), new _verb2.default("désaccorder", "aim:er"), new _verb2.default("désaccoupler", "aim:er"), new _verb2.default("désaccoutumer", "aim:er"), new _verb2.default("désacraliser", "aim:er"), new _verb2.default("désactiver", "aim:er"), new _verb2.default("désadapter", "aim:er"), new _verb2.default("désaérer", "réf:érer"), new _verb2.default("désaffecter", "aim:er"), new _verb2.default("désaffectionner", "aim:er"), new _verb2.default("désaffilier", "aim:er"), new _verb2.default("désagencer", "pla:cer"), new _verb2.default("désagrafer", "aim:er"), new _verb2.default("désagréger", "abr:éger"), new _verb2.default("désaimanter", "aim:er"), new _verb2.default("désajuster", "aim:er"), new _verb2.default("désaligner", "aim:er"), new _verb2.default("désalper", "aim:er"), new _verb2.default("désaltérer", "réf:érer"), new _verb2.default("désamarrer", "aim:er"), new _verb2.default("désambiguïser", "aim:er"), new _verb2.default("désamidonner", "aim:er"), new _verb2.default("désamorcer", "pla:cer"), new _verb2.default("désannexer", "aim:er"), new _verb2.default("désapparier", "aim:er"), new _verb2.default("désappointer", "aim:er"), new _verb2.default("désapprendre", "pr:endre"), new _verb2.default("désapprouver", "aim:er"), new _verb2.default("désapprovisionner", "aim:er"), new _verb2.default("désarçonner", "aim:er"), new _verb2.default("désargenter", "aim:er"), new _verb2.default("désarmer", "aim:er"), new _verb2.default("désarrimer", "aim:er"), new _verb2.default("désarticuler", "aim:er"), new _verb2.default("désassembler", "aim:er"), new _verb2.default("désassimiler", "aim:er"), new _verb2.default("désassortir", "fin:ir"), new _verb2.default("désatomiser", "aim:er"), new _verb2.default("désavantager", "man:ger"), new _verb2.default("désaveugler", "aim:er"), new _verb2.default("désavouer", "aim:er"), new _verb2.default("désaxer", "aim:er"), new _verb2.default("desceller", "aim:er"), new _verb2.default("désceller", "aim:er"), new _verb2.default("descendre", "ten:dre"), new _verb2.default("déséchouer", "aim:er"), new _verb2.default("désembourber", "aim:er"), new _verb2.default("désembourgeoiser", "aim:er"), new _verb2.default("désembouteiller", "aim:er"), new _verb2.default("désembrayer", "pa:yer"), new _verb2.default("désembuer", "aim:er"), new _verb2.default("désemmancher", "aim:er"), new _verb2.default("désemparer", "aim:er"), new _verb2.default("désemplir", "fin:ir"), new _verb2.default("désemprisonner", "aim:er"), new _verb2.default("désencadrer", "aim:er"), new _verb2.default("désencarter", "aim:er"), new _verb2.default("désenchaîner", "aim:er"), new _verb2.default("désenchanter", "aim:er"), new _verb2.default("désenclaver", "aim:er"), new _verb2.default("désencoller", "aim:er"), new _verb2.default("désencombrer", "aim:er"), new _verb2.default("désencrasser", "aim:er"), new _verb2.default("désendetter", "aim:er"), new _verb2.default("désénerver", "aim:er"), new _verb2.default("désenfiler", "aim:er"), new _verb2.default("désenflammer", "aim:er"), new _verb2.default("désenfler", "aim:er"), new _verb2.default("désenfumer", "aim:er"), new _verb2.default("désengager", "man:ger"), new _verb2.default("désengorger", "man:ger"), new _verb2.default("désengrener", "m:ener"), new _verb2.default("désenivrer", "aim:er"), new _verb2.default("désenlacer", "pla:cer"), new _verb2.default("désenlaider", "aim:er"), new _verb2.default("désenlaidir", "fin:ir"), new _verb2.default("désennuyer", "netto:yer"), new _verb2.default("désenrayer", "pa:yer"), new _verb2.default("désenrhumer", "aim:er"), new _verb2.default("désenrouer", "aim:er"), new _verb2.default("désensabler", "aim:er"), new _verb2.default("désensibiliser", "aim:er"), new _verb2.default("désensorceler", "app:eler"), new _verb2.default("désentoiler", "aim:er"), new _verb2.default("désentortiller", "aim:er"), new _verb2.default("désentraver", "aim:er"), new _verb2.default("désenvaser", "aim:er"), new _verb2.default("désenvelopper", "aim:er"), new _verb2.default("désenvenimer", "aim:er"), new _verb2.default("désenverguer", "aim:er"), new _verb2.default("désépaissir", "fin:ir"), new _verb2.default("déséquilibrer", "aim:er"), new _verb2.default("déséquiper", "aim:er"), new _verb2.default("déserter", "aim:er"), new _verb2.default("désespérer", "réf:érer"), new _verb2.default("désétablir", "fin:ir"), new _verb2.default("désétamer", "aim:er"), new _verb2.default("désétatiser", "aim:er"), new _verb2.default("désexualiser", "aim:er"), new _verb2.default("déshabiller", "aim:er"), new _verb2.default("déshabituer", "aim:er"), new _verb2.default("désherber", "aim:er"), new _verb2.default("déshériter", "aim:er"), new _verb2.default("déshonorer", "aim:er"), new _verb2.default("déshuiler", "aim:er"), new _verb2.default("déshumaniser", "aim:er"), new _verb2.default("déshumidifier", "aim:er"), new _verb2.default("déshydrater", "aim:er"), new _verb2.default("désigner", "aim:er"), new _verb2.default("désillusionner", "aim:er"), new _verb2.default("désincarner", "aim:er"), new _verb2.default("désincorporer", "aim:er"), new _verb2.default("désincruster", "aim:er"), new _verb2.default("désinculper", "aim:er"), new _verb2.default("désindexer", "aim:er"), new _verb2.default("désinfecter", "aim:er"), new _verb2.default("désinsectiser", "aim:er"), new _verb2.default("désinstitutionnaliser", "aim:er"), new _verb2.default("désintégrer", "int:égrer"), new _verb2.default("désintéresser", "aim:er"), new _verb2.default("désintoxiquer", "aim:er"), new _verb2.default("désinvestir", "fin:ir"), new _verb2.default("désinviter", "aim:er"), new _verb2.default("désirer", "aim:er"), new _verb2.default("désister", "aim:er"), new _verb2.default("désobéir", "fin:ir"), new _verb2.default("désobliger", "man:ger"), new _verb2.default("désoccuper", "aim:er"), new _verb2.default("désodoriser", "aim:er"), new _verb2.default("désoler", "aim:er"), new _verb2.default("désolidariser", "aim:er"), new _verb2.default("désoperculer", "aim:er"), new _verb2.default("désopiler", "aim:er"), new _verb2.default("désorber", "aim:er"), new _verb2.default("désorbiter", "aim:er"), new _verb2.default("désordonner", "aim:er"), new _verb2.default("désorganiser", "aim:er"), new _verb2.default("désorienter", "aim:er"), new _verb2.default("désosser", "aim:er"), new _verb2.default("désoxyder", "aim:er"), new _verb2.default("desquamer", "aim:er"), new _verb2.default("dessabler", "aim:er"), new _verb2.default("dessaisir", "fin:ir"), new _verb2.default("dessaler", "aim:er"), new _verb2.default("dessangler", "aim:er"), new _verb2.default("dessaouler", "aim:er"), new _verb2.default("dessécher", "s:écher"), new _verb2.default("desseller", "aim:er"), new _verb2.default("desserrer", "aim:er"), new _verb2.default("dessertir", "fin:ir"), new _verb2.default("desservir", "ser:vir"), new _verb2.default("dessiller", "aim:er"), new _verb2.default("dessiner", "aim:er"), new _verb2.default("dessoler", "aim:er"), new _verb2.default("dessouder", "aim:er"), new _verb2.default("dessouler", "aim:er"), new _verb2.default("dessoûler", "aim:er"), new _verb2.default("dessuinter", "aim:er"), new _verb2.default("dessuiter", "aim:er"), new _verb2.default("déstabiliser", "aim:er"), new _verb2.default("destiner", "aim:er"), new _verb2.default("destituer", "aim:er"), new _verb2.default("déstocker", "aim:er"), new _verb2.default("destructurer", "aim:er"), new _verb2.default("désubjectiviser", "aim:er"), new _verb2.default("désulfiter", "aim:er"), new _verb2.default("désulfurer", "aim:er"), new _verb2.default("désunir", "fin:ir"), new _verb2.default("désynchroniser", "aim:er"), new _verb2.default("détacher", "aim:er"), new _verb2.default("détailler", "aim:er"), new _verb2.default("détaler", "aim:er"), new _verb2.default("détaller", "aim:er"), new _verb2.default("détapisser", "aim:er"), new _verb2.default("détartrer", "aim:er"), new _verb2.default("détaxer", "aim:er"), new _verb2.default("détecter", "aim:er"), new _verb2.default("déteindre", "crai:ndre"), new _verb2.default("dételer", "app:eler"), new _verb2.default("détendre", "ten:dre"), new _verb2.default("détenir", "t:enir"), new _verb2.default("déterger", "man:ger"), new _verb2.default("détériorer", "aim:er"), new _verb2.default("déterminer", "aim:er"), new _verb2.default("déterrer", "aim:er"), new _verb2.default("détester", "aim:er"), new _verb2.default("détirer", "aim:er"), new _verb2.default("détisser", "aim:er"), new _verb2.default("détoner", "aim:er"), new _verb2.default("détonneler", "app:eler"), new _verb2.default("détonner", "aim:er"), new _verb2.default("détordre", "ten:dre"), new _verb2.default("détortiller", "aim:er"), new _verb2.default("détourer", "aim:er"), new _verb2.default("détourner", "aim:er"), new _verb2.default("détracter", "aim:er"), new _verb2.default("détrancher", "aim:er"), new _verb2.default("détransposer", "aim:er"), new _verb2.default("détraquer", "aim:er"), new _verb2.default("détremper", "aim:er"), new _verb2.default("détresser", "aim:er"), new _verb2.default("détricoter", "aim:er"), new _verb2.default("détromper", "aim:er"), new _verb2.default("détroncher", "aim:er"), new _verb2.default("détrôner", "aim:er"), new _verb2.default("détroquer", "aim:er"), new _verb2.default("détrousser", "aim:er"), new _verb2.default("détruire", "condui:re"), new _verb2.default("dévaler", "aim:er"), new _verb2.default("dévalider", "aim:er"), new _verb2.default("dévaliser", "aim:er"), new _verb2.default("dévaloriser", "aim:er"), new _verb2.default("dévaluer", "aim:er"), new _verb2.default("devancer", "pla:cer"), new _verb2.default("dévaser", "aim:er"), new _verb2.default("dévaster", "aim:er"), new _verb2.default("développer", "aim:er"), new _verb2.default("devenir", "t:enir"), new _verb2.default("déventer", "aim:er"), new _verb2.default("déverdir", "fin:ir"), new _verb2.default("dévergonder", "aim:er"), new _verb2.default("déverguer", "aim:er"), new _verb2.default("dévernir", "fin:ir"), new _verb2.default("déverrouiller", "aim:er"), new _verb2.default("déverser", "aim:er"), new _verb2.default("dévêtir", "vêt:ir"), new _verb2.default("dévider", "aim:er"), new _verb2.default("dévier", "aim:er"), new _verb2.default("deviner", "aim:er"), new _verb2.default("dévirer", "aim:er"), new _verb2.default("dévirginiser", "aim:er"), new _verb2.default("déviriliser", "aim:er"), new _verb2.default("déviroler", "aim:er"), new _verb2.default("dévisager", "man:ger"), new _verb2.default("deviser", "aim:er"), new _verb2.default("dévisser", "aim:er"), new _verb2.default("dévitaliser", "aim:er"), new _verb2.default("dévitrifier", "aim:er"), new _verb2.default("dévoiler", "aim:er"), new _verb2.default("devoir", "d:evoir"), new _verb2.default("dévolter", "aim:er"), new _verb2.default("dévorer", "aim:er"), new _verb2.default("dévouer", "aim:er"), new _verb2.default("dévoyer", "netto:yer"), new _verb2.default("diagnostiquer", "aim:er"), new _verb2.default("diagonaliser", "aim:er"), new _verb2.default("dialectaliser", "aim:er"), new _verb2.default("dialectiser", "aim:er"), new _verb2.default("dialoguer", "aim:er"), new _verb2.default("dialyser", "aim:er"), new _verb2.default("diamanter", "aim:er"), new _verb2.default("diaphragmer", "aim:er"), new _verb2.default("diaprer", "aim:er"), new _verb2.default("dicter", "aim:er"), new _verb2.default("diéser", "l:éser"), new _verb2.default("diffamer", "aim:er"), new _verb2.default("différencier", "aim:er"), new _verb2.default("différentier", "aim:er"), new _verb2.default("différer", "réf:érer"), new _verb2.default("difformer", "aim:er"), new _verb2.default("diffracter", "aim:er"), new _verb2.default("diffuser", "aim:er"), new _verb2.default("digérer", "réf:érer"), new _verb2.default("digitaliser", "aim:er"), new _verb2.default("dilacérer", "réf:érer"), new _verb2.default("dilapider", "aim:er"), new _verb2.default("dilater", "aim:er"), new _verb2.default("diligenter", "aim:er"), new _verb2.default("diluer", "aim:er"), new _verb2.default("dimensionner", "aim:er"), new _verb2.default("diminuer", "aim:er"), new _verb2.default("dindonner", "aim:er"), new _verb2.default("dîner", "aim:er"), new _verb2.default("dinguer", "aim:er"), new _verb2.default("diphtonguer", "aim:er"), new _verb2.default("diplômer", "aim:er"), new _verb2.default("dire", "d:ire"), new _verb2.default("diriger", "man:ger"), new _verb2.default("discerner", "aim:er"), new _verb2.default("discipliner", "aim:er"), new _verb2.default("discontinuer", "aim:er"), new _verb2.default("disconvenir", "t:enir"), new _verb2.default("discorder", "aim:er"), new _verb2.default("discourir", "cour:ir"), new _verb2.default("discréditer", "aim:er"), new _verb2.default("discrétiser", "aim:er"), new _verb2.default("discriminer", "aim:er"), new _verb2.default("disculper", "aim:er"), new _verb2.default("discutailler", "aim:er"), new _verb2.default("discuter", "aim:er"), new _verb2.default("disgracier", "aim:er"), new _verb2.default("disjoindre", "crai:ndre"), new _verb2.default("disjoncter", "aim:er"), new _verb2.default("disloquer", "aim:er"), new _verb2.default("disparaître", "rep:aître"), new _verb2.default("dispenser", "aim:er"), new _verb2.default("disperser", "aim:er"), new _verb2.default("disposer", "aim:er"), new _verb2.default("disproportionner", "aim:er"), new _verb2.default("disputailler", "aim:er"), new _verb2.default("disputer", "aim:er"), new _verb2.default("disqualifier", "aim:er"), new _verb2.default("disséminer", "aim:er"), new _verb2.default("disséquer", "diss:équer"), new _verb2.default("disserter", "aim:er"), new _verb2.default("dissimuler", "aim:er"), new _verb2.default("dissiper", "aim:er"), new _verb2.default("dissocier", "aim:er"), new _verb2.default("dissoner", "aim:er"), new _verb2.default("dissoudre", "disso:udre"), new _verb2.default("dissuader", "aim:er"), new _verb2.default("distancer", "pla:cer"), new _verb2.default("distancier", "aim:er"), new _verb2.default("distendre", "ten:dre"), new _verb2.default("distiller", "aim:er"), new _verb2.default("distinguer", "aim:er"), new _verb2.default("distordre", "ten:dre"), new _verb2.default("distraire", "extra:ire"), new _verb2.default("distribuer", "aim:er"), new _verb2.default("divaguer", "aim:er"), new _verb2.default("diverger", "man:ger"), new _verb2.default("diversifier", "aim:er"), new _verb2.default("divertir", "fin:ir"), new _verb2.default("diviniser", "aim:er"), new _verb2.default("diviser", "aim:er"), new _verb2.default("divorcer", "pla:cer"), new _verb2.default("divulguer", "aim:er"), new _verb2.default("documenter", "aim:er"), new _verb2.default("dodeliner", "aim:er"), new _verb2.default("dodiner", "aim:er"), new _verb2.default("dogmatiser", "aim:er"), new _verb2.default("doigter", "aim:er"), new _verb2.default("doler", "aim:er"), new _verb2.default("domestiquer", "aim:er"), new _verb2.default("domicilier", "aim:er"), new _verb2.default("dominer", "aim:er"), new _verb2.default("dompter", "aim:er"), new _verb2.default("donjuaniser", "aim:er"), new _verb2.default("donner", "aim:er"), new _verb2.default("doper", "aim:er"), new _verb2.default("dorer", "aim:er"), new _verb2.default("dorloter", "aim:er"), new _verb2.default("dormir", "dor:mir"), new _verb2.default("doser", "aim:er"), new _verb2.default("doter", "aim:er"), new _verb2.default("double-cliquer", "aim:er"), new _verb2.default("doubler", "aim:er"), new _verb2.default("doucher", "aim:er"), new _verb2.default("doucir", "fin:ir"), new _verb2.default("douer", "aim:er"), new _verb2.default("douter", "aim:er"), new _verb2.default("dragéifier", "aim:er"), new _verb2.default("drageonner", "aim:er"), new _verb2.default("draguer", "aim:er"), new _verb2.default("drainer", "aim:er"), new _verb2.default("dramatiser", "aim:er"), new _verb2.default("draper", "aim:er"), new _verb2.default("drayer", "pa:yer"), new _verb2.default("dresser", "aim:er"), new _verb2.default("dribbler", "aim:er"), new _verb2.default("driller", "aim:er"), new _verb2.default("driver", "aim:er"), new _verb2.default("droguer", "aim:er"), new _verb2.default("droper", "aim:er"), new _verb2.default("dropper", "aim:er"), new _verb2.default("drosser", "aim:er"), new _verb2.default("dulcifier", "aim:er"), new _verb2.default("duper", "aim:er"), new _verb2.default("duplexer", "aim:er"), new _verb2.default("dupliquer", "aim:er"), new _verb2.default("durcir", "fin:ir"), new _verb2.default("durer", "aim:er"), new _verb2.default("duveter", "j:eter"), new _verb2.default("dynamiser", "aim:er"), new _verb2.default("dynamiter", "aim:er"), new _verb2.default("ébahir", "fin:ir"), new _verb2.default("ébarber", "aim:er"), new _verb2.default("ébattre", "bat:tre"), new _verb2.default("ébaubir", "fin:ir"), new _verb2.default("ébaucher", "aim:er"), new _verb2.default("ébavurer", "aim:er"), new _verb2.default("éberluer", "aim:er"), new _verb2.default("éblouir", "fin:ir"), new _verb2.default("éborgner", "aim:er"), new _verb2.default("ébosser", "aim:er"), new _verb2.default("ébouer", "aim:er"), new _verb2.default("ébouillanter", "aim:er"), new _verb2.default("ébouler", "aim:er"), new _verb2.default("ébourgeonner", "aim:er"), new _verb2.default("ébouriffer", "aim:er"), new _verb2.default("ébourrer", "aim:er"), new _verb2.default("ébouter", "aim:er"), new _verb2.default("ébraiser", "aim:er"), new _verb2.default("ébrancher", "aim:er"), new _verb2.default("ébranler", "aim:er"), new _verb2.default("ébraser", "aim:er"), new _verb2.default("ébrécher", "s:écher"), new _verb2.default("ébrouer", "aim:er"), new _verb2.default("ébruiter", "aim:er"), new _verb2.default("écacher", "aim:er"), new _verb2.default("écaffer", "aim:er"), new _verb2.default("écailler", "aim:er"), new _verb2.default("écaler", "aim:er"), new _verb2.default("écanguer", "aim:er"), new _verb2.default("écarquiller", "aim:er"), new _verb2.default("écarteler", "p:eler"), new _verb2.default("écarter", "aim:er"), new _verb2.default("écatir", "fin:ir"), new _verb2.default("échafauder", "aim:er"), new _verb2.default("échalasser", "aim:er"), new _verb2.default("échampir", "fin:ir"), new _verb2.default("échancrer", "aim:er"), new _verb2.default("échanfreiner", "aim:er"), new _verb2.default("échanger", "man:ger"), new _verb2.default("échantillonner", "aim:er"), new _verb2.default("échapper", "aim:er"), new _verb2.default("échardonner", "aim:er"), new _verb2.default("écharner", "aim:er"), new _verb2.default("écharper", "aim:er"), new _verb2.default("échauder", "aim:er"), new _verb2.default("échauffer", "aim:er"), new _verb2.default("échauler", "aim:er"), new _verb2.default("échaumer", "aim:er"), new _verb2.default("échelonner", "aim:er"), new _verb2.default("écheniller", "aim:er"), new _verb2.default("écheveler", "app:eler"), new _verb2.default("échiner", "aim:er"), new _verb2.default("échoir", "éch:oir"), new _verb2.default("échopper", "aim:er"), new _verb2.default("échouer", "aim:er"), new _verb2.default("écimer", "aim:er"), new _verb2.default("éclabousser", "aim:er"), new _verb2.default("éclaircir", "fin:ir"), new _verb2.default("éclairer", "aim:er"), new _verb2.default("éclater", "aim:er"), new _verb2.default("éclipser", "aim:er"), new _verb2.default("éclisser", "aim:er"), new _verb2.default("écloper", "aim:er"), new _verb2.default("éclore", "éclo:re"), new _verb2.default("écluser", "aim:er"), new _verb2.default("écobuer", "aim:er"), new _verb2.default("écoeurer", "aim:er"), new _verb2.default("éconduire", "condui:re"), new _verb2.default("économiser", "aim:er"), new _verb2.default("écoper", "aim:er"), new _verb2.default("écorcer", "pla:cer"), new _verb2.default("écorcher", "aim:er"), new _verb2.default("écorer", "aim:er"), new _verb2.default("écorner", "aim:er"), new _verb2.default("écornifler", "aim:er"), new _verb2.default("écosser", "aim:er"), new _verb2.default("écouler", "aim:er"), new _verb2.default("écourter", "aim:er"), new _verb2.default("écouter", "aim:er"), new _verb2.default("écouvillonner", "aim:er"), new _verb2.default("écrabouiller", "aim:er"), new _verb2.default("écrapoutir", "fin:ir"), new _verb2.default("écraser", "aim:er"), new _verb2.default("écrémer", "cr:émer"), new _verb2.default("écrêter", "aim:er"), new _verb2.default("écrier", "aim:er"), new _verb2.default("écrire", "écri:re"), new _verb2.default("écrivailler", "aim:er"), new _verb2.default("écrivasser", "aim:er"), new _verb2.default("écrouer", "aim:er"), new _verb2.default("écrouir", "fin:ir"), new _verb2.default("écrouler", "aim:er"), new _verb2.default("écroûter", "aim:er"), new _verb2.default("écuisser", "aim:er"), new _verb2.default("éculer", "aim:er"), new _verb2.default("écumer", "aim:er"), new _verb2.default("écurer", "aim:er"), new _verb2.default("écussonner", "aim:er"), new _verb2.default("édenter", "aim:er"), new _verb2.default("édicter", "aim:er"), new _verb2.default("édifier", "aim:er"), new _verb2.default("éditer", "aim:er"), new _verb2.default("éditionner", "aim:er"), new _verb2.default("éditorialiser", "aim:er"), new _verb2.default("édulcorer", "aim:er"), new _verb2.default("éduquer", "aim:er"), new _verb2.default("éfaufiler", "aim:er"), new _verb2.default("effacer", "pla:cer"), new _verb2.default("effaner", "aim:er"), new _verb2.default("effarer", "aim:er"), new _verb2.default("effaroucher", "aim:er"), new _verb2.default("effectuer", "aim:er"), new _verb2.default("efféminer", "aim:er"), new _verb2.default("effeuiller", "aim:er"), new _verb2.default("effiler", "aim:er"), new _verb2.default("effilocher", "aim:er"), new _verb2.default("efflanquer", "aim:er"), new _verb2.default("effleurer", "aim:er"), new _verb2.default("effleurir", "fin:ir"), new _verb2.default("effluver", "aim:er"), new _verb2.default("effondrer", "aim:er"), new _verb2.default("efforcer", "pla:cer"), new _verb2.default("effranger", "man:ger"), new _verb2.default("effrayer", "pa:yer"), new _verb2.default("effriter", "aim:er"), new _verb2.default("égailler", "aim:er"), new _verb2.default("égaler", "aim:er"), new _verb2.default("égaliser", "aim:er"), new _verb2.default("égarer", "aim:er"), new _verb2.default("égayer", "pa:yer"), new _verb2.default("égermer", "aim:er"), new _verb2.default("égorger", "man:ger"), new _verb2.default("égosiller", "aim:er"), new _verb2.default("égoutter", "aim:er"), new _verb2.default("égrainer", "aim:er"), new _verb2.default("égrapper", "aim:er"), new _verb2.default("égratigner", "aim:er"), new _verb2.default("égravillonner", "aim:er"), new _verb2.default("égrener", "m:ener"), new _verb2.default("égriser", "aim:er"), new _verb2.default("égruger", "man:ger"), new _verb2.default("égueuler", "aim:er"), new _verb2.default("éhahir", "fin:ir"), new _verb2.default("éjaculer", "aim:er"), new _verb2.default("éjecter", "aim:er"), new _verb2.default("éjointer", "aim:er"), new _verb2.default("élaborer", "aim:er"), new _verb2.default("élaguer", "aim:er"), new _verb2.default("élancer", "pla:cer"), new _verb2.default("élargir", "fin:ir"), new _verb2.default("électrifier", "aim:er"), new _verb2.default("électriser", "aim:er"), new _verb2.default("électrocuter", "aim:er"), new _verb2.default("électrolyser", "aim:er"), new _verb2.default("électroniser", "aim:er"), new _verb2.default("élever", "l:ever"), new _verb2.default("élider", "aim:er"), new _verb2.default("élimer", "aim:er"), new _verb2.default("éliminer", "aim:er"), new _verb2.default("élinguer", "aim:er"), new _verb2.default("élire", "l:ire"), new _verb2.default("éloigner", "aim:er"), new _verb2.default("élonger", "man:ger"), new _verb2.default("élucider", "aim:er"), new _verb2.default("élucubrer", "aim:er"), new _verb2.default("éluder", "aim:er"), new _verb2.default("émacier", "aim:er"), new _verb2.default("émailler", "aim:er"), new _verb2.default("émanciper", "aim:er"), new _verb2.default("émaner", "aim:er"), new _verb2.default("émarger", "man:ger"), new _verb2.default("émasculer", "aim:er"), new _verb2.default("emballer", "aim:er"), new _verb2.default("emballotter", "aim:er"), new _verb2.default("embarbouiller", "aim:er"), new _verb2.default("embarder", "aim:er"), new _verb2.default("embarquer", "aim:er"), new _verb2.default("embarrasser", "aim:er"), new _verb2.default("embarrer", "aim:er"), new _verb2.default("embastiller", "aim:er"), new _verb2.default("embastionner", "aim:er"), new _verb2.default("embattre", "bat:tre"), new _verb2.default("embaucher", "aim:er"), new _verb2.default("embaumer", "aim:er"), new _verb2.default("embecquer", "aim:er"), new _verb2.default("embellir", "fin:ir"), new _verb2.default("emberlificoter", "aim:er"), new _verb2.default("embêter", "aim:er"), new _verb2.default("embidonner", "aim:er"), new _verb2.default("emblaver", "aim:er"), new _verb2.default("embobeliner", "aim:er"), new _verb2.default("embobiner", "aim:er"), new _verb2.default("emboîter", "aim:er"), new _verb2.default("embosser", "aim:er"), new _verb2.default("embotteler", "app:eler"), new _verb2.default("emboucher", "aim:er"), new _verb2.default("embouer", "aim:er"), new _verb2.default("embouquer", "aim:er"), new _verb2.default("embourber", "aim:er"), new _verb2.default("embourgeoiser", "aim:er"), new _verb2.default("embourrer", "aim:er"), new _verb2.default("embouteiller", "aim:er"), new _verb2.default("emboutir", "fin:ir"), new _verb2.default("embrancher", "aim:er"), new _verb2.default("embraquer", "aim:er"), new _verb2.default("embraser", "aim:er"), new _verb2.default("embrasser", "aim:er"), new _verb2.default("embrayer", "pa:yer"), new _verb2.default("embreler", "p:eler"), new _verb2.default("embrever", "l:ever"), new _verb2.default("embrigader", "aim:er"), new _verb2.default("embringuer", "aim:er"), new _verb2.default("embrocher", "aim:er"), new _verb2.default("embroncher", "aim:er"), new _verb2.default("embrouiller", "aim:er"), new _verb2.default("embroussailler", "aim:er"), new _verb2.default("embrumer", "aim:er"), new _verb2.default("embrunir", "fin:ir"), new _verb2.default("embuer", "aim:er"), new _verb2.default("embusquer", "aim:er"), new _verb2.default("émécher", "s:écher"), new _verb2.default("émerger", "man:ger"), new _verb2.default("émerillonner", "aim:er"), new _verb2.default("émeriser", "aim:er"), new _verb2.default("émerveiller", "aim:er"), new _verb2.default("émettre", "m:ettre"), new _verb2.default("émier", "aim:er"), new _verb2.default("émietter", "aim:er"), new _verb2.default("émigrer", "aim:er"), new _verb2.default("émincer", "pla:cer"), new _verb2.default("emmagasiner", "aim:er"), new _verb2.default("emmailler", "aim:er"), new _verb2.default("emmailloter", "aim:er"), new _verb2.default("emmancher", "aim:er"), new _verb2.default("emmarger", "man:ger"), new _verb2.default("emmêler", "aim:er"), new _verb2.default("emménager", "man:ger"), new _verb2.default("emmener", "m:ener"), new _verb2.default("emmerder", "aim:er"), new _verb2.default("emmieller", "aim:er"), new _verb2.default("emmitonner", "aim:er"), new _verb2.default("emmitoufler", "aim:er"), new _verb2.default("emmortaiser", "aim:er"), new _verb2.default("emmouscailler", "aim:er"), new _verb2.default("emmurer", "aim:er"), new _verb2.default("émonder", "aim:er"), new _verb2.default("émorfiler", "aim:er"), new _verb2.default("émotionner", "aim:er"), new _verb2.default("émotter", "aim:er"), new _verb2.default("émoucher", "aim:er"), new _verb2.default("émoucheter", "ach:eter"), new _verb2.default("émoudre", "mou:dre"), new _verb2.default("émousser", "aim:er"), new _verb2.default("émoustiller", "aim:er"), new _verb2.default("émouvoir", "prom:ouvoir"), new _verb2.default("empailler", "aim:er"), new _verb2.default("empaler", "aim:er"), new _verb2.default("empalmer", "aim:er"), new _verb2.default("empanacher", "aim:er"), new _verb2.default("empanner", "aim:er"), new _verb2.default("empapilloter", "aim:er"), new _verb2.default("empaqueter", "j:eter"), new _verb2.default("emparer", "aim:er"), new _verb2.default("emparquer", "aim:er"), new _verb2.default("empâter", "aim:er"), new _verb2.default("empatter", "aim:er"), new _verb2.default("empaumer", "aim:er"), new _verb2.default("empêcher", "aim:er"), new _verb2.default("empeigner", "aim:er"), new _verb2.default("empêner", "aim:er"), new _verb2.default("empenner", "aim:er"), new _verb2.default("empercher", "aim:er"), new _verb2.default("emperler", "aim:er"), new _verb2.default("empeser", "p:eser"), new _verb2.default("empester", "aim:er"), new _verb2.default("empêtrer", "aim:er"), new _verb2.default("empierrer", "aim:er"), new _verb2.default("empiéter", "décr:éter"), new _verb2.default("empiffrer", "aim:er"), new _verb2.default("empiler", "aim:er"), new _verb2.default("empirer", "aim:er"), new _verb2.default("emplir", "fin:ir"), new _verb2.default("employer", "netto:yer"), new _verb2.default("emplumer", "aim:er"), new _verb2.default("empocher", "aim:er"), new _verb2.default("empoigner", "aim:er"), new _verb2.default("empoisonner", "aim:er"), new _verb2.default("empoisser", "aim:er"), new _verb2.default("empoissonner", "aim:er"), new _verb2.default("emporter", "aim:er"), new _verb2.default("empoter", "aim:er"), new _verb2.default("empourprer", "aim:er"), new _verb2.default("empoussiérer", "réf:érer"), new _verb2.default("empreindre", "crai:ndre"), new _verb2.default("empresser", "aim:er"), new _verb2.default("emprésurer", "aim:er"), new _verb2.default("emprisonner", "aim:er"), new _verb2.default("emprunter", "aim:er"), new _verb2.default("empuantir", "fin:ir"), new _verb2.default("émuler", "aim:er"), new _verb2.default("émulsifier", "aim:er"), new _verb2.default("émulsionner", "aim:er"), new _verb2.default("énamourer", "aim:er"), new _verb2.default("encabaner", "aim:er"), new _verb2.default("encadrer", "aim:er"), new _verb2.default("encager", "man:ger"), new _verb2.default("encaisser", "aim:er"), new _verb2.default("encanailler", "aim:er"), new _verb2.default("encapuchonner", "aim:er"), new _verb2.default("encaquer", "aim:er"), new _verb2.default("encarter", "aim:er"), new _verb2.default("encartonner", "aim:er"), new _verb2.default("encartoucher", "aim:er"), new _verb2.default("encaserner", "aim:er"), new _verb2.default("encasteler", "p:eler"), new _verb2.default("encastrer", "aim:er"), new _verb2.default("encaustiquer", "aim:er"), new _verb2.default("encaver", "aim:er"), new _verb2.default("enceindre", "crai:ndre"), new _verb2.default("encenser", "aim:er"), new _verb2.default("encercler", "aim:er"), new _verb2.default("enchaîner", "aim:er"), new _verb2.default("enchanter", "aim:er"), new _verb2.default("enchaperonner", "aim:er"), new _verb2.default("encharner", "aim:er"), new _verb2.default("enchâsser", "aim:er"), new _verb2.default("enchatonner", "aim:er"), new _verb2.default("enchausser", "aim:er"), new _verb2.default("enchemiser", "aim:er"), new _verb2.default("enchérir", "fin:ir"), new _verb2.default("enchevaucher", "aim:er"), new _verb2.default("enchevêtrer", "aim:er"), new _verb2.default("encirer", "aim:er"), new _verb2.default("enclaver", "aim:er"), new _verb2.default("enclencher", "aim:er"), new _verb2.default("encliqueter", "j:eter"), new _verb2.default("encloîtrer", "aim:er"), new _verb2.default("enclore", "cl:ore"), new _verb2.default("enclouer", "aim:er"), new _verb2.default("encocher", "aim:er"), new _verb2.default("encoder", "aim:er"), new _verb2.default("encoffrer", "aim:er"), new _verb2.default("encoller", "aim:er"), new _verb2.default("encombrer", "aim:er"), new _verb2.default("encorder", "aim:er"), new _verb2.default("encorner", "aim:er"), new _verb2.default("encourager", "man:ger"), new _verb2.default("encourir", "cour:ir"), new _verb2.default("encrasser", "aim:er"), new _verb2.default("encrêper", "aim:er"), new _verb2.default("encrer", "aim:er"), new _verb2.default("encroûter", "aim:er"), new _verb2.default("enculer", "aim:er"), new _verb2.default("encuver", "aim:er"), new _verb2.default("endauber", "aim:er"), new _verb2.default("endenter", "aim:er"), new _verb2.default("endetter", "aim:er"), new _verb2.default("endeuiller", "aim:er"), new _verb2.default("endêver", "aim:er"), new _verb2.default("endiabler", "aim:er"), new _verb2.default("endiguer", "aim:er"), new _verb2.default("endimancher", "aim:er"), new _verb2.default("endivisionner", "aim:er"), new _verb2.default("endoctriner", "aim:er"), new _verb2.default("endolorir", "fin:ir"), new _verb2.default("endommager", "man:ger"), new _verb2.default("endormir", "dor:mir"), new _verb2.default("endosser", "aim:er"), new _verb2.default("enduire", "condui:re"), new _verb2.default("endurcir", "fin:ir"), new _verb2.default("endurer", "aim:er"), new _verb2.default("énerver", "aim:er"), new _verb2.default("enfaîter", "aim:er"), new _verb2.default("enfanter", "aim:er"), new _verb2.default("enfariner", "aim:er"), new _verb2.default("enfermer", "aim:er"), new _verb2.default("enferrer", "aim:er"), new _verb2.default("enficher", "aim:er"), new _verb2.default("enfieller", "aim:er"), new _verb2.default("enfiévrer", "enfi:évrer"), new _verb2.default("enfiler", "aim:er"), new _verb2.default("enflammer", "aim:er"), new _verb2.default("enfler", "aim:er"), new _verb2.default("enfleurer", "aim:er"), new _verb2.default("enfoncer", "pla:cer"), new _verb2.default("enforcir", "fin:ir"), new _verb2.default("enfouir", "fin:ir"), new _verb2.default("enfourcher", "aim:er"), new _verb2.default("enfourner", "aim:er"), new _verb2.default("enfreindre", "crai:ndre"), new _verb2.default("enfuir", "fu:ir"), new _verb2.default("enfumer", "aim:er"), new _verb2.default("enfutailler", "aim:er"), new _verb2.default("enfûter", "aim:er"), new _verb2.default("engager", "man:ger"), new _verb2.default("engainer", "aim:er"), new _verb2.default("engamer", "aim:er"), new _verb2.default("engargousser", "aim:er"), new _verb2.default("engaver", "aim:er"), new _verb2.default("engazonner", "aim:er"), new _verb2.default("engendrer", "aim:er"), new _verb2.default("engerber", "aim:er"), new _verb2.default("englacer", "pla:cer"), new _verb2.default("englober", "aim:er"), new _verb2.default("engloutir", "fin:ir"), new _verb2.default("engluer", "aim:er"), new _verb2.default("engober", "aim:er"), new _verb2.default("engommer", "aim:er"), new _verb2.default("engoncer", "pla:cer"), new _verb2.default("engorger", "man:ger"), new _verb2.default("engouer", "aim:er"), new _verb2.default("engouffrer", "aim:er"), new _verb2.default("engouler", "aim:er"), new _verb2.default("engourdir", "fin:ir"), new _verb2.default("engraisser", "aim:er"), new _verb2.default("engranger", "man:ger"), new _verb2.default("engraver", "aim:er"), new _verb2.default("engrener", "m:ener"), new _verb2.default("engrosser", "aim:er"), new _verb2.default("engrumeler", "app:eler"), new _verb2.default("engueuler", "aim:er"), new _verb2.default("enguirlander", "aim:er"), new _verb2.default("enhardier", "aim:er"), new _verb2.default("enhardir", "fin:ir"), new _verb2.default("enharnacher", "aim:er"), new _verb2.default("enherber", "aim:er"), new _verb2.default("énieller", "aim:er"), new _verb2.default("enivrer", "aim:er"), new _verb2.default("enjamber", "aim:er"), new _verb2.default("enjaveler", "app:eler"), new _verb2.default("enjoindre", "crai:ndre"), new _verb2.default("enjôler", "aim:er"), new _verb2.default("enjoliver", "aim:er"), new _verb2.default("enjoncer", "pla:cer"), new _verb2.default("enjouer", "aim:er"), new _verb2.default("enjuguer", "aim:er"), new _verb2.default("enjuiver", "aim:er"), new _verb2.default("enjuponner", "aim:er"), new _verb2.default("enkyster", "aim:er"), new _verb2.default("enlacer", "pla:cer"), new _verb2.default("enlaidir", "fin:ir"), new _verb2.default("enlever", "l:ever"), new _verb2.default("enliasser", "aim:er"), new _verb2.default("enlier", "aim:er"), new _verb2.default("enligner", "aim:er"), new _verb2.default("enliser", "aim:er"), new _verb2.default("enluminer", "aim:er"), new _verb2.default("enneiger", "man:ger"), new _verb2.default("ennoblir", "fin:ir"), new _verb2.default("ennuager", "man:ger"), new _verb2.default("ennuyer", "netto:yer"), new _verb2.default("énoncer", "pla:cer"), new _verb2.default("enorgueillir", "fin:ir"), new _verb2.default("énouer", "aim:er"), new _verb2.default("enquérir", "acqu:érir"), new _verb2.default("enquêter", "aim:er"), new _verb2.default("enquiquiner", "aim:er"), new _verb2.default("enraciner", "aim:er"), new _verb2.default("enrager", "man:ger"), new _verb2.default("enrailler", "aim:er"), new _verb2.default("enrayer", "pa:yer"), new _verb2.default("enrégimenter", "aim:er"), new _verb2.default("enregistrer", "aim:er"), new _verb2.default("enrêner", "aim:er"), new _verb2.default("enrhumer", "aim:er"), new _verb2.default("enrichir", "fin:ir"), new _verb2.default("enrober", "aim:er"), new _verb2.default("enrocher", "aim:er"), new _verb2.default("enrôler", "aim:er"), new _verb2.default("enrouer", "aim:er"), new _verb2.default("enrouiller", "aim:er"), new _verb2.default("enrouler", "aim:er"), new _verb2.default("enrubanner", "aim:er"), new _verb2.default("ensabler", "aim:er"), new _verb2.default("ensaboter", "aim:er"), new _verb2.default("ensacher", "aim:er"), new _verb2.default("ensaisiner", "aim:er"), new _verb2.default("ensanglanter", "aim:er"), new _verb2.default("ensauvager", "man:ger"), new _verb2.default("enseigner", "aim:er"), new _verb2.default("ensemencer", "pla:cer"), new _verb2.default("enserrer", "aim:er"), new _verb2.default("ensevelir", "fin:ir"), new _verb2.default("ensiler", "aim:er"), new _verb2.default("ensoleiller", "aim:er"), new _verb2.default("ensorceler", "app:eler"), new _verb2.default("ensoufrer", "aim:er"), new _verb2.default("ensoutaner", "aim:er"), new _verb2.default("ensuivre", "sui:vre"), new _verb2.default("entabler", "aim:er"), new _verb2.default("entacher", "aim:er"), new _verb2.default("entailler", "aim:er"), new _verb2.default("entamer", "aim:er"), new _verb2.default("entartrer", "aim:er"), new _verb2.default("entasser", "aim:er"), new _verb2.default("entendre", "ten:dre"), new _verb2.default("enténébrer", "cél:ébrer"), new _verb2.default("entériner", "aim:er"), new _verb2.default("enter", "aim:er"), new _verb2.default("enterrer", "aim:er"), new _verb2.default("entêter", "aim:er"), new _verb2.default("enthousiasmer", "aim:er"), new _verb2.default("enticher", "aim:er"), new _verb2.default("entoiler", "aim:er"), new _verb2.default("entôler", "aim:er"), new _verb2.default("entonner", "aim:er"), new _verb2.default("entortiller", "aim:er"), new _verb2.default("entourer", "aim:er"), new _verb2.default("entraider", "aim:er"), new _verb2.default("entr'aimer", "aim:er"), new _verb2.default("entraîner", "aim:er"), new _verb2.default("entr'apercevoir", "dé:cevoir"), new _verb2.default("entraver", "aim:er"), new _verb2.default("entrebâiller", "aim:er"), new _verb2.default("entrechoquer", "aim:er"), new _verb2.default("entrecouper", "aim:er"), new _verb2.default("entrecroiser", "aim:er"), new _verb2.default("entre-déchirer", "aim:er"), new _verb2.default("entre-dévorer", "aim:er"), new _verb2.default("entr'égorger", "man:ger"), new _verb2.default("entre-heurter", "aim:er"), new _verb2.default("entrelacer", "pla:cer"), new _verb2.default("entrelarder", "aim:er"), new _verb2.default("entremêler", "aim:er"), new _verb2.default("entremettre", "m:ettre"), new _verb2.default("entreposer", "aim:er"), new _verb2.default("entreprendre", "pr:endre"), new _verb2.default("entre-regarder", "aim:er"), new _verb2.default("entrer", "aim:er"), new _verb2.default("entretailler", "aim:er"), new _verb2.default("entretenir", "t:enir"), new _verb2.default("entre-tisser", "aim:er"), new _verb2.default("entretoiser", "aim:er"), new _verb2.default("entre-tuer", "aim:er"), new _verb2.default("entretuer", "aim:er"), new _verb2.default("entrevoir", "v:oir"), new _verb2.default("entrevoûter", "aim:er"), new _verb2.default("entrouvrir", "ouv:rir"), new _verb2.default("entuber", "aim:er"), new _verb2.default("enucléer", "aim:er"), new _verb2.default("énucléer", "aim:er"), new _verb2.default("énumérer", "réf:érer"), new _verb2.default("envahir", "fin:ir"), new _verb2.default("envaser", "aim:er"), new _verb2.default("envelopper", "aim:er"), new _verb2.default("envenimer", "aim:er"), new _verb2.default("enverger", "man:ger"), new _verb2.default("enverguer", "aim:er"), new _verb2.default("envider", "aim:er"), new _verb2.default("envieillir", "fin:ir"), new _verb2.default("envier", "aim:er"), new _verb2.default("environner", "aim:er"), new _verb2.default("envisager", "man:ger"), new _verb2.default("envoiler", "aim:er"), new _verb2.default("envoler", "aim:er"), new _verb2.default("envoûter", "aim:er"), new _verb2.default("envoyer", "env:oyer"), new _verb2.default("épaissir", "fin:ir"), new _verb2.default("épaler", "aim:er"), new _verb2.default("épamprer", "aim:er"), new _verb2.default("épancher", "aim:er"), new _verb2.default("épandre", "ten:dre"), new _verb2.default("épanneler", "app:eler"), new _verb2.default("épanner", "aim:er"), new _verb2.default("épanouir", "fin:ir"), new _verb2.default("épargner", "aim:er"), new _verb2.default("éparpiller", "aim:er"), new _verb2.default("épater", "aim:er"), new _verb2.default("épaufrer", "aim:er"), new _verb2.default("épauler", "aim:er"), new _verb2.default("épeler", "app:eler"), new _verb2.default("épépiner", "aim:er"), new _verb2.default("éperonner", "aim:er"), new _verb2.default("épeuler", "aim:er"), new _verb2.default("épeurer", "aim:er"), new _verb2.default("épicer", "pla:cer"), new _verb2.default("épier", "aim:er"), new _verb2.default("épierrer", "aim:er"), new _verb2.default("épiler", "aim:er"), new _verb2.default("épiloguer", "aim:er"), new _verb2.default("épinceler", "p:eler"), new _verb2.default("épincer", "pla:cer"), new _verb2.default("épinceter", "j:eter"), new _verb2.default("épiner", "aim:er"), new _verb2.default("épingler", "aim:er"), new _verb2.default("épisser", "aim:er"), new _verb2.default("éployer", "netto:yer"), new _verb2.default("éplucher", "aim:er"), new _verb2.default("épointer", "aim:er"), new _verb2.default("éponger", "man:ger"), new _verb2.default("épontiller", "aim:er"), new _verb2.default("épouiller", "aim:er"), new _verb2.default("époumoner", "aim:er"), new _verb2.default("épouser", "aim:er"), new _verb2.default("épousseter", "j:eter"), new _verb2.default("époustoufler", "aim:er"), new _verb2.default("époutier", "aim:er"), new _verb2.default("époutir", "fin:ir"), new _verb2.default("épouvanter", "aim:er"), new _verb2.default("éprendre", "pr:endre"), new _verb2.default("éprouver", "aim:er"), new _verb2.default("épucer", "pla:cer"), new _verb2.default("épuiser", "aim:er"), new _verb2.default("épurer", "aim:er"), new _verb2.default("équarrir", "fin:ir"), new _verb2.default("équerrer", "aim:er"), new _verb2.default("équeuter", "aim:er"), new _verb2.default("équilibrer", "aim:er"), new _verb2.default("équiper", "aim:er"), new _verb2.default("équivaloir", "va:loir"), new _verb2.default("équivoquer", "aim:er"), new _verb2.default("éradiquer", "aim:er"), new _verb2.default("érafler", "aim:er"), new _verb2.default("érailler", "aim:er"), new _verb2.default("érayer", "pa:yer"), new _verb2.default("éreinter", "aim:er"), new _verb2.default("ergoter", "aim:er"), new _verb2.default("ériger", "man:ger"), new _verb2.default("éroder", "aim:er"), new _verb2.default("érotiser", "aim:er"), new _verb2.default("errer", "aim:er"), new _verb2.default("éructer", "aim:er"), new _verb2.default("esbigner", "aim:er"), new _verb2.default("esbroufer", "aim:er"), new _verb2.default("escadronner", "aim:er"), new _verb2.default("escalader", "aim:er"), new _verb2.default("escamoter", "aim:er"), new _verb2.default("escarmoucher", "aim:er"), new _verb2.default("escarrifier", "aim:er"), new _verb2.default("escher", "aim:er"), new _verb2.default("esclaffer", "aim:er"), new _verb2.default("escoffier", "aim:er"), new _verb2.default("escompter", "aim:er"), new _verb2.default("escorter", "aim:er"), new _verb2.default("escrimer", "aim:er"), new _verb2.default("escroquer", "aim:er"), new _verb2.default("espacer", "pla:cer"), new _verb2.default("espérer", "réf:érer"), new _verb2.default("espionner", "aim:er"), new _verb2.default("espoliner", "aim:er"), new _verb2.default("espouliner", "aim:er"), new _verb2.default("esquicher", "aim:er"), new _verb2.default("esquinter", "aim:er"), new _verb2.default("esquisser", "aim:er"), new _verb2.default("esquiver", "aim:er"), new _verb2.default("essaimer", "aim:er"), new _verb2.default("essanger", "man:ger"), new _verb2.default("essarter", "aim:er"), new _verb2.default("essayer", "pa:yer"), new _verb2.default("essorer", "aim:er"), new _verb2.default("essoriller", "aim:er"), new _verb2.default("essoucher", "aim:er"), new _verb2.default("essouffler", "aim:er"), new _verb2.default("essuyer", "netto:yer"), new _verb2.default("estamper", "aim:er"), new _verb2.default("estampiller", "aim:er"), new _verb2.default("estérifier", "aim:er"), new _verb2.default("ester", "est:er"), new _verb2.default("esthétiser", "aim:er"), new _verb2.default("estimer", "aim:er"), new _verb2.default("estiver", "aim:er"), new _verb2.default("estomaquer", "aim:er"), new _verb2.default("estomper", "aim:er"), new _verb2.default("estoquer", "aim:er"), new _verb2.default("estourbir", "fin:ir"), new _verb2.default("estrapader", "aim:er"), new _verb2.default("estrapasser", "aim:er"), new _verb2.default("estropier", "aim:er"), new _verb2.default("établer", "aim:er"), new _verb2.default("établir", "fin:ir"), new _verb2.default("étager", "man:ger"), new _verb2.default("étalager", "man:ger"), new _verb2.default("étaler", "aim:er"), new _verb2.default("étalinguer", "aim:er"), new _verb2.default("étaliser", "aim:er"), new _verb2.default("étalonner", "aim:er"), new _verb2.default("étamer", "aim:er"), new _verb2.default("étamper", "aim:er"), new _verb2.default("étancher", "aim:er"), new _verb2.default("étançonner", "aim:er"), new _verb2.default("étarquer", "aim:er"), new _verb2.default("étatiser", "aim:er"), new _verb2.default("étayer", "pa:yer"), new _verb2.default("éteindre", "crai:ndre"), new _verb2.default("étendre", "ten:dre"), new _verb2.default("éterniser", "aim:er"), new _verb2.default("éternuer", "aim:er"), new _verb2.default("étêter", "aim:er"), new _verb2.default("éthérifier", "aim:er"), new _verb2.default("éthériser", "aim:er"), new _verb2.default("étinceler", "app:eler"), new _verb2.default("étioler", "aim:er"), new _verb2.default("étiqueter", "j:eter"), new _verb2.default("étirer", "aim:er"), new _verb2.default("étoffer", "aim:er"), new _verb2.default("étoiler", "aim:er"), new _verb2.default("étonner", "aim:er"), new _verb2.default("étouffer", "aim:er"), new _verb2.default("étouper", "aim:er"), new _verb2.default("étoupiller", "aim:er"), new _verb2.default("étourdir", "fin:ir"), new _verb2.default("étrangler", "aim:er"), new _verb2.default("étrécir", "fin:ir"), new _verb2.default("étreindre", "crai:ndre"), new _verb2.default("être", ":être"), new _verb2.default("étrenner", "aim:er"), new _verb2.default("étrésillonner", "aim:er"), new _verb2.default("étriller", "aim:er"), new _verb2.default("étriper", "aim:er"), new _verb2.default("étriquer", "aim:er"), new _verb2.default("étronçonner", "aim:er"), new _verb2.default("étudier", "aim:er"), new _verb2.default("étuver", "aim:er"), new _verb2.default("euphoriser", "aim:er"), new _verb2.default("européaniser", "aim:er"), new _verb2.default("euthanasier", "aim:er"), new _verb2.default("évacuer", "aim:er"), new _verb2.default("évader", "aim:er"), new _verb2.default("évaluer", "aim:er"), new _verb2.default("évangéliser", "aim:er"), new _verb2.default("évanouir", "fin:ir"), new _verb2.default("évaporer", "aim:er"), new _verb2.default("évaser", "aim:er"), new _verb2.default("éveiller", "aim:er"), new _verb2.default("éventer", "aim:er"), new _verb2.default("éventrer", "aim:er"), new _verb2.default("évertuer", "aim:er"), new _verb2.default("évider", "aim:er"), new _verb2.default("évincer", "pla:cer"), new _verb2.default("éviter", "aim:er"), new _verb2.default("évoluer", "aim:er"), new _verb2.default("évoquer", "aim:er"), new _verb2.default("exacerber", "aim:er"), new _verb2.default("exagérer", "réf:érer"), new _verb2.default("exalter", "aim:er"), new _verb2.default("examiner", "aim:er"), new _verb2.default("exaspérer", "réf:érer"), new _verb2.default("exaucer", "pla:cer"), new _verb2.default("excaver", "aim:er"), new _verb2.default("excéder", "c:éder"), new _verb2.default("exceller", "aim:er"), new _verb2.default("excentrer", "aim:er"), new _verb2.default("excepter", "aim:er"), new _verb2.default("exciper", "aim:er"), new _verb2.default("exciser", "aim:er"), new _verb2.default("exciter", "aim:er"), new _verb2.default("exclamer", "aim:er"), new _verb2.default("exclure", "concl:ure"), new _verb2.default("excommunier", "aim:er"), new _verb2.default("excorier", "aim:er"), new _verb2.default("excréter", "décr:éter"), new _verb2.default("excursionner", "aim:er"), new _verb2.default("excuser", "aim:er"), new _verb2.default("exécrer", "ex:écrer"), new _verb2.default("exécuter", "aim:er"), new _verb2.default("exemplifier", "aim:er"), new _verb2.default("exempter", "aim:er"), new _verb2.default("exercer", "pla:cer"), new _verb2.default("exfolier", "aim:er"), new _verb2.default("exhaler", "aim:er"), new _verb2.default("exhausser", "aim:er"), new _verb2.default("exhéréder", "c:éder"), new _verb2.default("exhiber", "aim:er"), new _verb2.default("exhorter", "aim:er"), new _verb2.default("exhumer", "aim:er"), new _verb2.default("exiger", "man:ger"), new _verb2.default("exiler", "aim:er"), new _verb2.default("exister", "aim:er"), new _verb2.default("exonérer", "réf:érer"), new _verb2.default("exorciser", "aim:er"), new _verb2.default("expatrier", "aim:er"), new _verb2.default("expectorer", "aim:er"), new _verb2.default("expédier", "aim:er"), new _verb2.default("expérimenter", "aim:er"), new _verb2.default("expertiser", "aim:er"), new _verb2.default("expier", "aim:er"), new _verb2.default("expirer", "aim:er"), new _verb2.default("expliciter", "aim:er"), new _verb2.default("expliquer", "aim:er"), new _verb2.default("exploiter", "aim:er"), new _verb2.default("explorer", "aim:er"), new _verb2.default("exploser", "aim:er"), new _verb2.default("exporter", "aim:er"), new _verb2.default("exposer", "aim:er"), new _verb2.default("exprimer", "aim:er"), new _verb2.default("exproprier", "aim:er"), new _verb2.default("expulser", "aim:er"), new _verb2.default("expurger", "man:ger"), new _verb2.default("exsuder", "aim:er"), new _verb2.default("extasier", "aim:er"), new _verb2.default("exténuer", "aim:er"), new _verb2.default("extérioriser", "aim:er"), new _verb2.default("exterminer", "aim:er"), new _verb2.default("extirper", "aim:er"), new _verb2.default("extorquer", "aim:er"), new _verb2.default("extrader", "aim:er"), new _verb2.default("extraire", "extra:ire"), new _verb2.default("extrapoler", "aim:er"), new _verb2.default("extravaguer", "aim:er"), new _verb2.default("extravaser", "aim:er"), new _verb2.default("extruder", "aim:er"), new _verb2.default("exulter", "aim:er"), new _verb2.default("fabriquer", "aim:er"), new _verb2.default("fabuler", "aim:er"), new _verb2.default("facetter", "aim:er"), new _verb2.default("fâcher", "aim:er"), new _verb2.default("faciliter", "aim:er"), new _verb2.default("façonner", "aim:er"), new _verb2.default("factoriser", "aim:er"), new _verb2.default("facturer", "aim:er"), new _verb2.default("fader", "aim:er"), new _verb2.default("fagoter", "aim:er"), new _verb2.default("faiblir", "fin:ir"), new _verb2.default("faignanter", "aim:er"), new _verb2.default("failler", "aim:er"), new _verb2.default("faillir", "fa:illir"), new _verb2.default("fainéanter", "aim:er"), new _verb2.default("faire", "f:aire"), new _verb2.default("faisander", "aim:er"), new _verb2.default("falloir", "fa:lloir"), new _verb2.default("falsifier", "aim:er"), new _verb2.default("faluner", "aim:er"), new _verb2.default("familiariser", "aim:er"), new _verb2.default("fanatiser", "aim:er"), new _verb2.default("faner", "aim:er"), new _verb2.default("fanfaronner", "aim:er"), new _verb2.default("fanfrelucher", "aim:er"), new _verb2.default("fantasmer", "aim:er"), new _verb2.default("farandoler", "aim:er"), new _verb2.default("farcir", "fin:ir"), new _verb2.default("farder", "aim:er"), new _verb2.default("farfouiller", "aim:er"), new _verb2.default("fariner", "aim:er"), new _verb2.default("farter", "aim:er"), new _verb2.default("fasciner", "aim:er"), new _verb2.default("fasciser", "aim:er"), new _verb2.default("faseiller", "aim:er"), new _verb2.default("faseyer", "aim:er"), new _verb2.default("fatiguer", "aim:er"), new _verb2.default("faucarder", "aim:er"), new _verb2.default("faucher", "aim:er"), new _verb2.default("fauconner", "aim:er"), new _verb2.default("faufiler", "aim:er"), new _verb2.default("fausser", "aim:er"), new _verb2.default("fauter", "aim:er"), new _verb2.default("favoriser", "aim:er"), new _verb2.default("faxer", "aim:er"), new _verb2.default("fayoter", "aim:er"), new _verb2.default("fayotter", "aim:er"), new _verb2.default("féconder", "aim:er"), new _verb2.default("féculer", "aim:er"), new _verb2.default("fédéraliser", "aim:er"), new _verb2.default("fédérer", "réf:érer"), new _verb2.default("feignanter", "aim:er"), new _verb2.default("feindre", "crai:ndre"), new _verb2.default("feinter", "aim:er"), new _verb2.default("fêler", "aim:er"), new _verb2.default("féliciter", "aim:er"), new _verb2.default("féminiser", "aim:er"), new _verb2.default("fendiller", "aim:er"), new _verb2.default("fendre", "ten:dre"), new _verb2.default("fenestrer", "aim:er"), new _verb2.default("fenêtrer", "aim:er"), new _verb2.default("férir", "fér:ir"), new _verb2.default("ferler", "aim:er"), new _verb2.default("fermenter", "aim:er"), new _verb2.default("fermer", "aim:er"), new _verb2.default("ferrailler", "aim:er"), new _verb2.default("ferrer", "aim:er"), new _verb2.default("ferrouter", "aim:er"), new _verb2.default("fertiliser", "aim:er"), new _verb2.default("fesser", "aim:er"), new _verb2.default("festonner", "aim:er"), new _verb2.default("festoyer", "netto:yer"), new _verb2.default("fêter", "aim:er"), new _verb2.default("fétichiser", "aim:er"), new _verb2.default("feuiller", "aim:er"), new _verb2.default("feuilleter", "j:eter"), new _verb2.default("feuler", "aim:er"), new _verb2.default("feutrer", "aim:er"), new _verb2.default("fiancer", "pla:cer"), new _verb2.default("ficeler", "app:eler"), new _verb2.default("ficher", "aim:er"), new _verb2.default("fidéliser", "aim:er"), new _verb2.default("fieffer", "aim:er"), new _verb2.default("fienter", "aim:er"), new _verb2.default("fier", "aim:er"), new _verb2.default("figer", "man:ger"), new _verb2.default("fignoler", "aim:er"), new _verb2.default("figurer", "aim:er"), new _verb2.default("filer", "aim:er"), new _verb2.default("fileter", "ach:eter"), new _verb2.default("filigraner", "aim:er"), new _verb2.default("filmer", "aim:er"), new _verb2.default("filocher", "aim:er"), new _verb2.default("filouter", "aim:er"), new _verb2.default("filtrer", "aim:er"), new _verb2.default("finaliser", "aim:er"), new _verb2.default("financer", "pla:cer"), new _verb2.default("finasser", "aim:er"), new _verb2.default("finir", "fin:ir"), new _verb2.default("finlandiser", "aim:er"), new _verb2.default("fiscaliser", "aim:er"), new _verb2.default("fissionner", "aim:er"), new _verb2.default("fissurer", "aim:er"), new _verb2.default("fixer", "aim:er"), new _verb2.default("flageller", "aim:er"), new _verb2.default("flageoler", "aim:er"), new _verb2.default("flagorner", "aim:er"), new _verb2.default("flairer", "aim:er"), new _verb2.default("flamber", "aim:er"), new _verb2.default("flamboyer", "netto:yer"), new _verb2.default("flancher", "aim:er"), new _verb2.default("flâner", "aim:er"), new _verb2.default("flanquer", "aim:er"), new _verb2.default("flaquer", "aim:er"), new _verb2.default("flasher", "aim:er"), new _verb2.default("flatter", "aim:er"), new _verb2.default("flauper", "aim:er"), new _verb2.default("flécher", "s:écher"), new _verb2.default("fléchir", "fin:ir"), new _verb2.default("flemmarder", "aim:er"), new _verb2.default("flétrir", "fin:ir"), new _verb2.default("fleurer", "aim:er"), new _verb2.default("fleureter", "j:eter"), new _verb2.default("fleurir", "fl:eurir"), new _verb2.default("flibuster", "aim:er"), new _verb2.default("flinguer", "aim:er"), new _verb2.default("flipper", "aim:er"), new _verb2.default("flirter", "aim:er"), new _verb2.default("floconner", "aim:er"), new _verb2.default("floculer", "aim:er"), new _verb2.default("flotter", "aim:er"), new _verb2.default("flouer", "aim:er"), new _verb2.default("flouser", "aim:er"), new _verb2.default("fluctuer", "aim:er"), new _verb2.default("fluer", "aim:er"), new _verb2.default("fluidifier", "aim:er"), new _verb2.default("fluidiser", "aim:er"), new _verb2.default("fluoriser", "aim:er"), new _verb2.default("flûter", "aim:er"), new _verb2.default("fluxer", "aim:er"), new _verb2.default("focaliser", "aim:er"), new _verb2.default("foirer", "aim:er"), new _verb2.default("foisonner", "aim:er"), new _verb2.default("folâtrer", "aim:er"), new _verb2.default("folichonner", "aim:er"), new _verb2.default("folioter", "aim:er"), new _verb2.default("fomenter", "aim:er"), new _verb2.default("foncer", "pla:cer"), new _verb2.default("fonctionnariser", "aim:er"), new _verb2.default("fonctionner", "aim:er"), new _verb2.default("fonder", "aim:er"), new _verb2.default("fondre", "ten:dre"), new _verb2.default("forcer", "pla:cer"), new _verb2.default("forcir", "fin:ir"), new _verb2.default("forclore", "forclo:re"), new _verb2.default("forer", "aim:er"), new _verb2.default("forfaire", "f:aire"), new _verb2.default("forger", "man:ger"), new _verb2.default("forjeter", "j:eter"), new _verb2.default("forlancer", "pla:cer"), new _verb2.default("forligner", "aim:er"), new _verb2.default("forlonger", "man:ger"), new _verb2.default("formaliser", "aim:er"), new _verb2.default("formater", "aim:er"), new _verb2.default("former", "aim:er"), new _verb2.default("formoler", "aim:er"), new _verb2.default("formuler", "aim:er"), new _verb2.default("forniquer", "aim:er"), new _verb2.default("fortifier", "aim:er"), new _verb2.default("fossiliser", "aim:er"), new _verb2.default("fossoyer", "netto:yer"), new _verb2.default("fouailler", "aim:er"), new _verb2.default("foudroyer", "netto:yer"), new _verb2.default("fouetter", "aim:er"), new _verb2.default("fouger", "man:ger"), new _verb2.default("fouiller", "aim:er"), new _verb2.default("fouiner", "aim:er"), new _verb2.default("fouir", "fin:ir"), new _verb2.default("fouler", "aim:er"), new _verb2.default("fourailler", "aim:er"), new _verb2.default("fourber", "aim:er"), new _verb2.default("fourbir", "fin:ir"), new _verb2.default("fourcher", "aim:er"), new _verb2.default("fourgonner", "aim:er"), new _verb2.default("fourguer", "aim:er"), new _verb2.default("fourmiller", "aim:er"), new _verb2.default("fournir", "fin:ir"), new _verb2.default("fourrager", "man:ger"), new _verb2.default("fourrer", "aim:er"), new _verb2.default("fourvoyer", "netto:yer"), new _verb2.default("foutre", "fou:tre"), new _verb2.default("fracasser", "aim:er"), new _verb2.default("fractionner", "aim:er"), new _verb2.default("fracturer", "aim:er"), new _verb2.default("fragiliser", "aim:er"), new _verb2.default("fragmenter", "aim:er"), new _verb2.default("fraîchir", "fin:ir"), new _verb2.default("fraiser", "aim:er"), new _verb2.default("framboiser", "aim:er"), new _verb2.default("franchir", "fin:ir"), new _verb2.default("franciser", "aim:er"), new _verb2.default("franger", "man:ger"), new _verb2.default("frapper", "aim:er"), new _verb2.default("fraterniser", "aim:er"), new _verb2.default("frauder", "aim:er"), new _verb2.default("frayer", "pa:yer"), new _verb2.default("fredonner", "aim:er"), new _verb2.default("freiner", "aim:er"), new _verb2.default("frelater", "aim:er"), new _verb2.default("frémir", "fin:ir"), new _verb2.default("fréquenter", "aim:er"), new _verb2.default("fréter", "décr:éter"), new _verb2.default("frétiller", "aim:er"), new _verb2.default("fretter", "aim:er"), new _verb2.default("fricasser", "aim:er"), new _verb2.default("fricoter", "aim:er"), new _verb2.default("frictionner", "aim:er"), new _verb2.default("frigorifier", "aim:er"), new _verb2.default("frigorifuger", "man:ger"), new _verb2.default("frimer", "aim:er"), new _verb2.default("fringuer", "aim:er"), new _verb2.default("friper", "aim:er"), new _verb2.default("friponner", "aim:er"), new _verb2.default("frire", "fri:re"), new _verb2.default("friser", "aim:er"), new _verb2.default("frisotter", "aim:er"), new _verb2.default("frissonner", "aim:er"), new _verb2.default("fritter", "aim:er"), new _verb2.default("froidir", "fin:ir"), new _verb2.default("froisser", "aim:er"), new _verb2.default("frôler", "aim:er"), new _verb2.default("froncer", "pla:cer"), new _verb2.default("fronder", "aim:er"), new _verb2.default("frotter", "aim:er"), new _verb2.default("frouer", "aim:er"), new _verb2.default("froufrouter", "aim:er"), new _verb2.default("fructifier", "aim:er"), new _verb2.default("frusquer", "aim:er"), new _verb2.default("frustrer", "aim:er"), new _verb2.default("fuguer", "aim:er"), new _verb2.default("fuir", "fu:ir"), new _verb2.default("fulgurer", "aim:er"), new _verb2.default("fulminer", "aim:er"), new _verb2.default("fumer", "aim:er"), new _verb2.default("fumeronner", "aim:er"), new _verb2.default("fumiger", "man:ger"), new _verb2.default("fureter", "ach:eter"), new _verb2.default("fuseler", "app:eler"), new _verb2.default("fuser", "aim:er"), new _verb2.default("fusiller", "aim:er"), new _verb2.default("fusionner", "aim:er"), new _verb2.default("fustiger", "man:ger"), new _verb2.default("gabionner", "aim:er"), new _verb2.default("gâcher", "aim:er"), new _verb2.default("gadgétiser", "aim:er"), new _verb2.default("gaffer", "aim:er"), new _verb2.default("gager", "man:ger"), new _verb2.default("gagner", "aim:er"), new _verb2.default("gainer", "aim:er"), new _verb2.default("galber", "aim:er"), new _verb2.default("galipoter", "aim:er"), new _verb2.default("galonner", "aim:er"), new _verb2.default("galoper", "aim:er"), new _verb2.default("galvaniser", "aim:er"), new _verb2.default("galvauder", "aim:er"), new _verb2.default("gambader", "aim:er"), new _verb2.default("gamberger", "man:ger"), new _verb2.default("gambiller", "aim:er"), new _verb2.default("gaminer", "aim:er"), new _verb2.default("gangrener", "m:ener"), new _verb2.default("ganser", "aim:er"), new _verb2.default("ganter", "aim:er"), new _verb2.default("garancer", "pla:cer"), new _verb2.default("garantir", "fin:ir"), new _verb2.default("garder", "aim:er"), new _verb2.default("garer", "aim:er"), new _verb2.default("gargariser", "aim:er"), new _verb2.default("gargoter", "aim:er"), new _verb2.default("gargouiller", "aim:er"), new _verb2.default("garnir", "fin:ir"), new _verb2.default("garrotter", "aim:er"), new _verb2.default("gasconner", "aim:er"), new _verb2.default("gaspiller", "aim:er"), new _verb2.default("gâter", "aim:er"), new _verb2.default("gâtifier", "aim:er"), new _verb2.default("gauchir", "fin:ir"), new _verb2.default("gauchiser", "aim:er"), new _verb2.default("gaufrer", "aim:er"), new _verb2.default("gauler", "aim:er"), new _verb2.default("gausser", "aim:er"), new _verb2.default("gaver", "aim:er"), new _verb2.default("gazéifier", "aim:er"), new _verb2.default("gazer", "aim:er"), new _verb2.default("gazonner", "aim:er"), new _verb2.default("gazouiller", "aim:er"), new _verb2.default("geindre", "crai:ndre"), new _verb2.default("gélatiner", "aim:er"), new _verb2.default("gélatiniser", "aim:er"), new _verb2.default("geler", "p:eler"), new _verb2.default("gélifier", "aim:er"), new _verb2.default("géminer", "aim:er"), new _verb2.default("gémir", "fin:ir"), new _verb2.default("gemmer", "aim:er"), new _verb2.default("gendarmer", "aim:er"), new _verb2.default("généraliser", "aim:er"), new _verb2.default("générer", "réf:érer"), new _verb2.default("gêner", "aim:er"), new _verb2.default("géométriser", "aim:er"), new _verb2.default("gerber", "aim:er"), new _verb2.default("gercer", "pla:cer"), new _verb2.default("gérer", "réf:érer"), new _verb2.default("germaniser", "aim:er"), new _verb2.default("germer", "aim:er"), new _verb2.default("gésir", "g:ésir"), new _verb2.default("gesticuler", "aim:er"), new _verb2.default("giboyer", "netto:yer"), new _verb2.default("gicler", "aim:er"), new _verb2.default("gifler", "aim:er"), new _verb2.default("gigoter", "aim:er"), new _verb2.default("gironner", "aim:er"), new _verb2.default("girouetter", "aim:er"), new _verb2.default("gîter", "aim:er"), new _verb2.default("givrer", "aim:er"), new _verb2.default("glacer", "pla:cer"), new _verb2.default("glairer", "aim:er"), new _verb2.default("glaiser", "aim:er"), new _verb2.default("glander", "aim:er"), new _verb2.default("glandouiller", "aim:er"), new _verb2.default("glaner", "aim:er"), new _verb2.default("glapir", "fin:ir"), new _verb2.default("glatir", "fin:ir"), new _verb2.default("glavioter", "aim:er"), new _verb2.default("glaviotter", "aim:er"), new _verb2.default("glisser", "aim:er"), new _verb2.default("globaliser", "aim:er"), new _verb2.default("glorifier", "aim:er"), new _verb2.default("gloser", "aim:er"), new _verb2.default("glouglouter", "aim:er"), new _verb2.default("glousser", "aim:er"), new _verb2.default("glycériner", "aim:er"), new _verb2.default("goberger", "man:ger"), new _verb2.default("gober", "aim:er"), new _verb2.default("gobeter", "j:eter"), new _verb2.default("gobichonner", "aim:er"), new _verb2.default("godailler", "aim:er"), new _verb2.default("goder", "aim:er"), new _verb2.default("godiller", "aim:er"), new _verb2.default("godronner", "aim:er"), new _verb2.default("goguenarder", "aim:er"), new _verb2.default("goinfrer", "aim:er"), new _verb2.default("gominer", "aim:er"), new _verb2.default("gommer", "aim:er"), new _verb2.default("gonder", "aim:er"), new _verb2.default("gondoler", "aim:er"), new _verb2.default("gonfler", "aim:er"), new _verb2.default("gorger", "man:ger"), new _verb2.default("gosser", "aim:er"), new _verb2.default("gouacher", "aim:er"), new _verb2.default("gouailler", "aim:er"), new _verb2.default("goudronner", "aim:er"), new _verb2.default("goujonner", "aim:er"), new _verb2.default("goupiller", "aim:er"), new _verb2.default("goupillonner", "aim:er"), new _verb2.default("gourer", "aim:er"), new _verb2.default("gourmander", "aim:er"), new _verb2.default("gourmer", "aim:er"), new _verb2.default("goûter", "aim:er"), new _verb2.default("goutter", "aim:er"), new _verb2.default("gouverner", "aim:er"), new _verb2.default("gracier", "aim:er"), new _verb2.default("graduer", "aim:er"), new _verb2.default("grailler", "aim:er"), new _verb2.default("graillonner", "aim:er"), new _verb2.default("grainer", "aim:er"), new _verb2.default("graisser", "aim:er"), new _verb2.default("grandir", "fin:ir"), new _verb2.default("graniter", "aim:er"), new _verb2.default("granuler", "aim:er"), new _verb2.default("graphiter", "aim:er"), new _verb2.default("grappiller", "aim:er"), new _verb2.default("grasseyer", "grasse:yer"), new _verb2.default("graticuler", "aim:er"), new _verb2.default("gratifier", "aim:er"), new _verb2.default("gratiner", "aim:er"), new _verb2.default("gratter", "aim:er"), new _verb2.default("graver", "aim:er"), new _verb2.default("gravillonner", "aim:er"), new _verb2.default("gravir", "fin:ir"), new _verb2.default("graviter", "aim:er"), new _verb2.default("gréciser", "aim:er"), new _verb2.default("grecquer", "aim:er"), new _verb2.default("gréer", "aim:er"), new _verb2.default("greffer", "aim:er"), new _verb2.default("grêler", "aim:er"), new _verb2.default("grelotter", "aim:er"), new _verb2.default("grenailler", "aim:er"), new _verb2.default("greneler", "app:eler"), new _verb2.default("grener", "m:ener"), new _verb2.default("grenouiller", "aim:er"), new _verb2.default("grésiller", "aim:er"), new _verb2.default("grever", "l:ever"), new _verb2.default("gribouiller", "aim:er"), new _verb2.default("griffer", "aim:er"), new _verb2.default("griffonner", "aim:er"), new _verb2.default("grigner", "aim:er"), new _verb2.default("grignoter", "aim:er"), new _verb2.default("grillager", "man:ger"), new _verb2.default("griller", "aim:er"), new _verb2.default("grimacer", "pla:cer"), new _verb2.default("grimer", "aim:er"), new _verb2.default("grimper", "aim:er"), new _verb2.default("grincer", "pla:cer"), new _verb2.default("grincher", "aim:er"), new _verb2.default("gringuer", "aim:er"), new _verb2.default("gripper", "aim:er"), new _verb2.default("grisailler", "aim:er"), new _verb2.default("griser", "aim:er"), new _verb2.default("grisoler", "aim:er"), new _verb2.default("grisoller", "aim:er"), new _verb2.default("grisonner", "aim:er"), new _verb2.default("griveler", "app:eler"), new _verb2.default("grognasser", "aim:er"), new _verb2.default("grogner", "aim:er"), new _verb2.default("grognonner", "aim:er"), new _verb2.default("grommeler", "app:eler"), new _verb2.default("gronder", "aim:er"), new _verb2.default("grossir", "fin:ir"), new _verb2.default("grossoyer", "netto:yer"), new _verb2.default("grouiller", "aim:er"), new _verb2.default("grouper", "aim:er"), new _verb2.default("gruger", "man:ger"), new _verb2.default("grumeler", "app:eler"), new _verb2.default("guéer", "aim:er"), new _verb2.default("guérir", "fin:ir"), new _verb2.default("guerroyer", "netto:yer"), new _verb2.default("guêtrer", "aim:er"), new _verb2.default("guetter", "aim:er"), new _verb2.default("gueuler", "aim:er"), new _verb2.default("gueuletonner", "aim:er"), new _verb2.default("gueuser", "aim:er"), new _verb2.default("guider", "aim:er"), new _verb2.default("guigner", "aim:er"), new _verb2.default("guillemeter", "j:eter"), new _verb2.default("guillocher", "aim:er"), new _verb2.default("guillotiner", "aim:er"), new _verb2.default("guincher", "aim:er"), new _verb2.default("guinder", "aim:er"), new _verb2.default("guiper", "aim:er"), new _verb2.default("habiliter", "aim:er"), new _verb2.default("habiller", "aim:er"), new _verb2.default("habiter", "aim:er"), new _verb2.default("habituer", "aim:er"), new _verb2.default("habler", "aim:er"), new _verb2.default("hacher", "aim:er"), new _verb2.default("hachurer", "aim:er"), new _verb2.default("haïr", "ha:ïr"), new _verb2.default("haler", "aim:er"), new _verb2.default("hâler", "aim:er"), new _verb2.default("haleter", "ach:eter"), new _verb2.default("halluciner", "aim:er"), new _verb2.default("hameçonner", "aim:er"), new _verb2.default("hancher", "aim:er"), new _verb2.default("handicaper", "aim:er"), new _verb2.default("hannetonner", "aim:er"), new _verb2.default("hanter", "aim:er"), new _verb2.default("happer", "aim:er"), new _verb2.default("haranguer", "aim:er"), new _verb2.default("harasser", "aim:er"), new _verb2.default("harceler", "harc:eler"), new _verb2.default("harder", "aim:er"), new _verb2.default("harmoniser", "aim:er"), new _verb2.default("harnacher", "aim:er"), new _verb2.default("harpailler", "aim:er"), new _verb2.default("harper", "aim:er"), new _verb2.default("harponner", "aim:er"), new _verb2.default("hasarder", "aim:er"), new _verb2.default("hâter", "aim:er"), new _verb2.default("haubaner", "aim:er"), new _verb2.default("hausser", "aim:er"), new _verb2.default("haver", "aim:er"), new _verb2.default("havir", "fin:ir"), new _verb2.default("héberger", "man:ger"), new _verb2.default("hébéter", "héb:éter"), new _verb2.default("hébraïser", "aim:er"), new _verb2.default("héler", "rév:éler"), new _verb2.default("helléniser", "aim:er"), new _verb2.default("hennir", "fin:ir"), new _verb2.default("herbager", "man:ger"), new _verb2.default("herber", "aim:er"), new _verb2.default("herboriser", "aim:er"), new _verb2.default("hercher", "aim:er"), new _verb2.default("hérisser", "aim:er"), new _verb2.default("hérissonner", "aim:er"), new _verb2.default("hériter", "aim:er"), new _verb2.default("herscher", "aim:er"), new _verb2.default("herser", "aim:er"), new _verb2.default("hésiter", "aim:er"), new _verb2.default("heurter", "aim:er"), new _verb2.default("hiberner", "aim:er"), new _verb2.default("hiérarchiser", "aim:er"), new _verb2.default("hisser", "aim:er"), new _verb2.default("historier", "aim:er"), new _verb2.default("hiverner", "aim:er"), new _verb2.default("hocher", "aim:er"), new _verb2.default("homogénéifier", "aim:er"), new _verb2.default("homogénéiser", "aim:er"), new _verb2.default("homologuer", "aim:er"), new _verb2.default("hongrer", "aim:er"), new _verb2.default("hongroyer", "netto:yer"), new _verb2.default("honnir", "fin:ir"), new _verb2.default("honorer", "aim:er"), new _verb2.default("hoqueter", "j:eter"), new _verb2.default("hormoner", "aim:er"), new _verb2.default("horrifier", "aim:er"), new _verb2.default("horripiler", "aim:er"), new _verb2.default("hospitaliser", "aim:er"), new _verb2.default("hotter", "aim:er"), new _verb2.default("houblonner", "aim:er"), new _verb2.default("houer", "aim:er"), new _verb2.default("houpper", "aim:er"), new _verb2.default("hourder", "aim:er"), new _verb2.default("hourdir", "fin:ir"), new _verb2.default("houspiller", "aim:er"), new _verb2.default("housser", "aim:er"), new _verb2.default("houssiner", "aim:er"), new _verb2.default("hucher", "aim:er"), new _verb2.default("huer", "aim:er"), new _verb2.default("huiler", "aim:er"), new _verb2.default("hululer", "aim:er"), new _verb2.default("humaniser", "aim:er"), new _verb2.default("humecter", "aim:er"), new _verb2.default("humer", "aim:er"), new _verb2.default("humidifier", "aim:er"), new _verb2.default("humilier", "aim:er"), new _verb2.default("hurler", "aim:er"), new _verb2.default("hybrider", "aim:er"), new _verb2.default("hydrater", "aim:er"), new _verb2.default("hydrofuger", "man:ger"), new _verb2.default("hydrogéner", "ali:éner"), new _verb2.default("hydrolyser", "aim:er"), new _verb2.default("hypnotiser", "aim:er"), new _verb2.default("hypostasier", "aim:er"), new _verb2.default("hypothéquer", "diss:équer"), new _verb2.default("idéaliser", "aim:er"), new _verb2.default("identifier", "aim:er"), new _verb2.default("idéologiser", "aim:er"), new _verb2.default("idiotifier", "aim:er"), new _verb2.default("idiotiser", "aim:er"), new _verb2.default("idolâtrer", "aim:er"), new _verb2.default("ignifuger", "man:ger"), new _verb2.default("ignorer", "aim:er"), new _verb2.default("illuminer", "aim:er"), new _verb2.default("illusionner", "aim:er"), new _verb2.default("illustrer", "aim:er"), new _verb2.default("imager", "man:ger"), new _verb2.default("imaginer", "aim:er"), new _verb2.default("imbiber", "aim:er"), new _verb2.default("imbriquer", "aim:er"), new _verb2.default("imiter", "aim:er"), new _verb2.default("immatérialiser", "aim:er"), new _verb2.default("immatriculer", "aim:er"), new _verb2.default("immerger", "man:ger"), new _verb2.default("immigrer", "aim:er"), new _verb2.default("immiscer", "pla:cer"), new _verb2.default("immobiliser", "aim:er"), new _verb2.default("immoler", "aim:er"), new _verb2.default("immortaliser", "aim:er"), new _verb2.default("immuniser", "aim:er"), new _verb2.default("impacter", "aim:er"), new _verb2.default("impartir", "fin:ir"), new _verb2.default("impatienter", "aim:er"), new _verb2.default("impatroniser", "aim:er"), new _verb2.default("imperméabiliser", "aim:er"), new _verb2.default("impétrer", "imp:étrer"), new _verb2.default("implanter", "aim:er"), new _verb2.default("implémenter", "aim:er"), new _verb2.default("impliquer", "aim:er"), new _verb2.default("implorer", "aim:er"), new _verb2.default("imploser", "aim:er"), new _verb2.default("importer", "aim:er"), new _verb2.default("importuner", "aim:er"), new _verb2.default("imposer", "aim:er"), new _verb2.default("imprégner", "r:égner"), new _verb2.default("impressionner", "aim:er"), new _verb2.default("imprimer", "aim:er"), new _verb2.default("improuver", "aim:er"), new _verb2.default("improviser", "aim:er"), new _verb2.default("impulser", "aim:er"), new _verb2.default("imputer", "aim:er"), new _verb2.default("inaugurer", "aim:er"), new _verb2.default("incarcérer", "réf:érer"), new _verb2.default("incarner", "aim:er"), new _verb2.default("incendier", "aim:er"), new _verb2.default("incinérer", "réf:érer"), new _verb2.default("inciser", "aim:er"), new _verb2.default("inciter", "aim:er"), new _verb2.default("incliner", "aim:er"), new _verb2.default("inclure", "incl:ure"), new _verb2.default("incomber", "aim:er"), new _verb2.default("incommoder", "aim:er"), new _verb2.default("incorporer", "aim:er"), new _verb2.default("incrémenter", "aim:er"), new _verb2.default("incriminer", "aim:er"), new _verb2.default("incruster", "aim:er"), new _verb2.default("incuber", "aim:er"), new _verb2.default("inculper", "aim:er"), new _verb2.default("inculquer", "aim:er"), new _verb2.default("incurver", "aim:er"), new _verb2.default("indemniser", "aim:er"), new _verb2.default("indexer", "aim:er"), new _verb2.default("indicer", "pla:cer"), new _verb2.default("indifférer", "réf:érer"), new _verb2.default("indigner", "aim:er"), new _verb2.default("indiquer", "aim:er"), new _verb2.default("indisposer", "aim:er"), new _verb2.default("individualiser", "aim:er"), new _verb2.default("induire", "condui:re"), new _verb2.default("indulgencier", "aim:er"), new _verb2.default("indurer", "aim:er"), new _verb2.default("industrialiser", "aim:er"), new _verb2.default("infantiliser", "aim:er"), new _verb2.default("infatuer", "aim:er"), new _verb2.default("infecter", "aim:er"), new _verb2.default("inféoder", "aim:er"), new _verb2.default("inférer", "réf:érer"), new _verb2.default("inférioriser", "aim:er"), new _verb2.default("infester", "aim:er"), new _verb2.default("infiltrer", "aim:er"), new _verb2.default("infirmer", "aim:er"), new _verb2.default("infléchir", "fin:ir"), new _verb2.default("infliger", "man:ger"), new _verb2.default("influencer", "pla:cer"), new _verb2.default("influer", "aim:er"), new _verb2.default("informatiser", "aim:er"), new _verb2.default("informer", "aim:er"), new _verb2.default("infuser", "aim:er"), new _verb2.default("ingénier", "aim:er"), new _verb2.default("ingérer", "réf:érer"), new _verb2.default("ingurgiter", "aim:er"), new _verb2.default("inhaler", "aim:er"), new _verb2.default("inhiber", "aim:er"), new _verb2.default("inhumer", "aim:er"), new _verb2.default("initialiser", "aim:er"), new _verb2.default("initier", "aim:er"), new _verb2.default("injecter", "aim:er"), new _verb2.default("injurier", "aim:er"), new _verb2.default("innerver", "aim:er"), new _verb2.default("innocenter", "aim:er"), new _verb2.default("innover", "aim:er"), new _verb2.default("inoculer", "aim:er"), new _verb2.default("inonder", "aim:er"), new _verb2.default("inquiéter", "décr:éter"), new _verb2.default("inscrire", "écri:re"), new _verb2.default("insculper", "aim:er"), new _verb2.default("inséminer", "aim:er"), new _verb2.default("insensibiliser", "aim:er"), new _verb2.default("insérer", "réf:érer"), new _verb2.default("insinuer", "aim:er"), new _verb2.default("insister", "aim:er"), new _verb2.default("insoler", "aim:er"), new _verb2.default("insolubiliser", "aim:er"), new _verb2.default("insonoriser", "aim:er"), new _verb2.default("inspecter", "aim:er"), new _verb2.default("inspirer", "aim:er"), new _verb2.default("installer", "aim:er"), new _verb2.default("instaurer", "aim:er"), new _verb2.default("instiguer", "aim:er"), new _verb2.default("instiller", "aim:er"), new _verb2.default("instituer", "aim:er"), new _verb2.default("institutionnaliser", "aim:er"), new _verb2.default("instruire", "condui:re"), new _verb2.default("instrumenter", "aim:er"), new _verb2.default("insuffler", "aim:er"), new _verb2.default("insulter", "aim:er"), new _verb2.default("insurger", "man:ger"), new _verb2.default("intailler", "aim:er"), new _verb2.default("intégrer", "int:égrer"), new _verb2.default("intellectualiser", "aim:er"), new _verb2.default("intensifier", "aim:er"), new _verb2.default("intenter", "aim:er"), new _verb2.default("interagir", "fin:ir"), new _verb2.default("interagiter", "aim:er"), new _verb2.default("intercaler", "aim:er"), new _verb2.default("intercéder", "c:éder"), new _verb2.default("intercepter", "aim:er"), new _verb2.default("interclasser", "aim:er"), new _verb2.default("interconnecter", "aim:er"), new _verb2.default("interdire", "interd:ire"), new _verb2.default("intéresser", "aim:er"), new _verb2.default("interférer", "réf:érer"), new _verb2.default("interfolier", "aim:er"), new _verb2.default("intérioriser", "aim:er"), new _verb2.default("interjeter", "j:eter"), new _verb2.default("interligner", "aim:er"), new _verb2.default("interloquer", "aim:er"), new _verb2.default("internationaliser", "aim:er"), new _verb2.default("interner", "aim:er"), new _verb2.default("interpeler", "app:eler"), new _verb2.default("interpeller", "aim:er"), new _verb2.default("interpénétrer", "imp:étrer"), new _verb2.default("interpoler", "aim:er"), new _verb2.default("interposer", "aim:er"), new _verb2.default("interpréter", "décr:éter"), new _verb2.default("interroger", "man:ger"), new _verb2.default("interrompre", "rom:pre"), new _verb2.default("intersecter", "aim:er"), new _verb2.default("intervenir", "t:enir"), new _verb2.default("intervertir", "fin:ir"), new _verb2.default("interviewer", "aim:er"), new _verb2.default("intimer", "aim:er"), new _verb2.default("intimider", "aim:er"), new _verb2.default("intituler", "aim:er"), new _verb2.default("intoxiquer", "aim:er"), new _verb2.default("intriguer", "aim:er"), new _verb2.default("intriquer", "aim:er"), new _verb2.default("introbvertir", "fin:ir"), new _verb2.default("introduire", "condui:re"), new _verb2.default("introjeter", "j:eter"), new _verb2.default("introniser", "aim:er"), new _verb2.default("introspecter", "aim:er"), new _verb2.default("intuber", "aim:er"), new _verb2.default("intuiter", "aim:er"), new _verb2.default("inutiliser", "aim:er"), new _verb2.default("invaginer", "aim:er"), new _verb2.default("invalider", "aim:er"), new _verb2.default("invectiver", "aim:er"), new _verb2.default("inventer", "aim:er"), new _verb2.default("inventorier", "aim:er"), new _verb2.default("inverser", "aim:er"), new _verb2.default("invertir", "fin:ir"), new _verb2.default("investiguer", "aim:er"), new _verb2.default("investir", "fin:ir"), new _verb2.default("invétérer", "réf:érer"), new _verb2.default("inviter", "aim:er"), new _verb2.default("invoquer", "aim:er"), new _verb2.default("ioder", "aim:er"), new _verb2.default("iodler", "aim:er"), new _verb2.default("ioniser", "aim:er"), new _verb2.default("iouler", "aim:er"), new _verb2.default("iraniser", "aim:er"), new _verb2.default("iriser", "aim:er"), new _verb2.default("ironiser", "aim:er"), new _verb2.default("irradier", "aim:er"), new _verb2.default("irréaliser", "aim:er"), new _verb2.default("irriguer", "aim:er"), new _verb2.default("irriter", "aim:er"), new _verb2.default("irruer", "aim:er"), new _verb2.default("ischémier", "aim:er"), new _verb2.default("islamiser", "aim:er"), new _verb2.default("isoler", "aim:er"), new _verb2.default("isomériser", "aim:er"), new _verb2.default("italianiser", "aim:er"), new _verb2.default("itérer", "réf:érer"), new _verb2.default("ivrogner", "aim:er"), new _verb2.default("ixer", "aim:er"), new _verb2.default("jabler", "aim:er"), new _verb2.default("jaboter", "aim:er"), new _verb2.default("jabouiner", "aim:er"), new _verb2.default("jacasser", "aim:er"), new _verb2.default("jachérer", "réf:érer"), new _verb2.default("jacter", "aim:er"), new _verb2.default("jaffer", "aim:er"), new _verb2.default("jaillir", "fin:ir"), new _verb2.default("jalonner", "aim:er"), new _verb2.default("jalouser", "aim:er"), new _verb2.default("jamber", "aim:er"), new _verb2.default("jambonner", "aim:er"), new _verb2.default("japoniser", "aim:er"), new _verb2.default("japonner", "aim:er"), new _verb2.default("japper", "aim:er"), new _verb2.default("jardiner", "aim:er"), new _verb2.default("jargauder", "aim:er"), new _verb2.default("jargonner", "aim:er"), new _verb2.default("jargouiner", "aim:er"), new _verb2.default("jarreter", "ach:eter"), new _verb2.default("jaser", "aim:er"), new _verb2.default("jasper", "aim:er"), new _verb2.default("jaspiller", "aim:er"), new _verb2.default("jaspiner", "aim:er"), new _verb2.default("jasser", "aim:er"), new _verb2.default("jauger", "man:ger"), new _verb2.default("jaunir", "fin:ir"), new _verb2.default("javeler", "app:eler"), new _verb2.default("javelliser", "aim:er"), new _verb2.default("jérémiader", "aim:er"), new _verb2.default("jérémier", "aim:er"), new _verb2.default("jerker", "aim:er"), new _verb2.default("jeter", "j:eter"), new _verb2.default("jeûner", "aim:er"), new _verb2.default("jinguer", "aim:er"), new _verb2.default("jobarder", "aim:er"), new _verb2.default("jodler", "aim:er"), new _verb2.default("jogger", "aim:er"), new _verb2.default("joindre", "crai:ndre"), new _verb2.default("jointer", "aim:er"), new _verb2.default("jointoyer", "netto:yer"), new _verb2.default("joncer", "pla:cer"), new _verb2.default("joncher", "aim:er"), new _verb2.default("jongler", "aim:er"), new _verb2.default("jouailler", "aim:er"), new _verb2.default("jouer", "aim:er"), new _verb2.default("jouir", "fin:ir"), new _verb2.default("journaliser", "aim:er"), new _verb2.default("jouter", "aim:er"), new _verb2.default("jouxter", "aim:er"), new _verb2.default("jubiler", "aim:er"), new _verb2.default("jucher", "aim:er"), new _verb2.default("judaïser", "aim:er"), new _verb2.default("judiciariser", "aim:er"), new _verb2.default("juger", "man:ger"), new _verb2.default("juguler", "aim:er"), new _verb2.default("jumboïser", "aim:er"), new _verb2.default("jumeler", "app:eler"), new _verb2.default("jumper", "aim:er"), new _verb2.default("juponner", "aim:er"), new _verb2.default("jurer", "aim:er"), new _verb2.default("justifier", "aim:er"), new _verb2.default("juter", "aim:er"), new _verb2.default("juxtaposer", "aim:er"), new _verb2.default("kaoliniser", "aim:er"), new _verb2.default("kératiniser", "aim:er"), new _verb2.default("kibitzer", "aim:er"), new _verb2.default("kidnapper", "aim:er"), new _verb2.default("kifer", "aim:er"), new _verb2.default("kiffer", "aim:er"), new _verb2.default("kilométrer", "imp:étrer"), new _verb2.default("klaxonner", "aim:er"), new _verb2.default("koter", "aim:er"), new _verb2.default("labéliser", "aim:er"), new _verb2.default("labelliser", "aim:er"), new _verb2.default("labialiser", "aim:er"), new _verb2.default("labourer", "aim:er"), new _verb2.default("lacérer", "réf:érer"), new _verb2.default("lacer", "pla:cer"), new _verb2.default("lâcher", "aim:er"), new _verb2.default("laïciser", "aim:er"), new _verb2.default("lainer", "aim:er"), new _verb2.default("laisser", "aim:er"), new _verb2.default("laitonner", "aim:er"), new _verb2.default("laïusser", "aim:er"), new _verb2.default("lambiner", "aim:er"), new _verb2.default("lambrisser", "aim:er"), new _verb2.default("lamenter", "aim:er"), new _verb2.default("lamer", "aim:er"), new _verb2.default("laminer", "aim:er"), new _verb2.default("lamper", "aim:er"), new _verb2.default("lancequiner", "aim:er"), new _verb2.default("lancer", "pla:cer"), new _verb2.default("lanciner", "aim:er"), new _verb2.default("langer", "man:ger"), new _verb2.default("langueter", "j:eter"), new _verb2.default("langueyer", "grasse:yer"), new _verb2.default("languir", "fin:ir"), new _verb2.default("lansquiner", "aim:er"), new _verb2.default("lanterner", "aim:er"), new _verb2.default("lantiponner", "aim:er"), new _verb2.default("laper", "aim:er"), new _verb2.default("lapider", "aim:er"), new _verb2.default("lapidifier", "aim:er"), new _verb2.default("lapiner", "aim:er"), new _verb2.default("laquer", "aim:er"), new _verb2.default("larder", "aim:er"), new _verb2.default("lardonner", "aim:er"), new _verb2.default("larguer", "aim:er"), new _verb2.default("larmer", "aim:er"), new _verb2.default("larmoyer", "netto:yer"), new _verb2.default("larronner", "aim:er"), new _verb2.default("laryngectomiser", "aim:er"), new _verb2.default("lasser", "aim:er"), new _verb2.default("latiniser", "aim:er"), new _verb2.default("latter", "aim:er"), new _verb2.default("laurer", "aim:er"), new _verb2.default("laver", "aim:er"), new _verb2.default("layer", "pa:yer"), new _verb2.default("layonner", "aim:er"), new _verb2.default("lécher", "s:écher"), new _verb2.default("léchouiller", "aim:er"), new _verb2.default("légaliser", "aim:er"), new _verb2.default("légender", "aim:er"), new _verb2.default("légiférer", "réf:érer"), new _verb2.default("légitimer", "aim:er"), new _verb2.default("léguer", "l:éguer"), new _verb2.default("lénifier", "aim:er"), new _verb2.default("léser", "l:éser"), new _verb2.default("lésiner", "aim:er"), new _verb2.default("lessiver", "aim:er"), new _verb2.default("lester", "aim:er"), new _verb2.default("lettrer", "aim:er"), new _verb2.default("leurrer", "aim:er"), new _verb2.default("lever", "l:ever"), new _verb2.default("léviger", "man:ger"), new _verb2.default("levretter", "aim:er"), new _verb2.default("lexicaliser", "aim:er"), new _verb2.default("lézarder", "aim:er"), new _verb2.default("liaisonner", "aim:er"), new _verb2.default("liarder", "aim:er"), new _verb2.default("libeller", "aim:er"), new _verb2.default("libéraliser", "aim:er"), new _verb2.default("libérer", "réf:érer"), new _verb2.default("licencier", "aim:er"), new _verb2.default("licher", "aim:er"), new _verb2.default("liciter", "aim:er"), new _verb2.default("lier", "aim:er"), new _verb2.default("lifter", "aim:er"), new _verb2.default("ligaturer", "aim:er"), new _verb2.default("ligner", "aim:er"), new _verb2.default("lignifier", "aim:er"), new _verb2.default("ligoter", "aim:er"), new _verb2.default("liguer", "aim:er"), new _verb2.default("limander", "aim:er"), new _verb2.default("limer", "aim:er"), new _verb2.default("limiter", "aim:er"), new _verb2.default("limoger", "man:ger"), new _verb2.default("limoner", "aim:er"), new _verb2.default("limousiner", "aim:er"), new _verb2.default("linéariser", "aim:er"), new _verb2.default("linger", "man:ger"), new _verb2.default("liquéfier", "aim:er"), new _verb2.default("liquider", "aim:er"), new _verb2.default("lire", "l:ire"), new _verb2.default("lisérer", "réf:érer"), new _verb2.default("lisser", "aim:er"), new _verb2.default("lister", "aim:er"), new _verb2.default("liter", "aim:er"), new _verb2.default("lithographier", "aim:er"), new _verb2.default("livrer", "aim:er"), new _verb2.default("lober", "aim:er"), new _verb2.default("localiser", "aim:er"), new _verb2.default("locher", "aim:er"), new _verb2.default("lock-outer", "aim:er"), new _verb2.default("lofer", "aim:er"), new _verb2.default("loger", "man:ger"), new _verb2.default("longer", "man:ger"), new _verb2.default("loquer", "aim:er"), new _verb2.default("lorgner", "aim:er"), new _verb2.default("lotionner", "aim:er"), new _verb2.default("lotir", "fin:ir"), new _verb2.default("louanger", "man:ger"), new _verb2.default("loucher", "aim:er"), new _verb2.default("louchir", "fin:ir"), new _verb2.default("louer", "aim:er"), new _verb2.default("loufer", "aim:er"), new _verb2.default("louper", "aim:er"), new _verb2.default("lourder", "aim:er"), new _verb2.default("lourer", "aim:er"), new _verb2.default("louver", "aim:er"), new _verb2.default("louveter", "j:eter"), new _verb2.default("louvoyer", "netto:yer"), new _verb2.default("lover", "aim:er"), new _verb2.default("lubrifier", "aim:er"), new _verb2.default("luger", "man:ger"), new _verb2.default("luire", "lu:ire"), new _verb2.default("luncher", "aim:er"), new _verb2.default("lustrer", "aim:er"), new _verb2.default("luter", "aim:er"), new _verb2.default("lutiner", "aim:er"), new _verb2.default("lutter", "aim:er"), new _verb2.default("luxer", "aim:er"), new _verb2.default("lyncher", "aim:er"), new _verb2.default("lyophiliser", "aim:er"), new _verb2.default("lyser", "aim:er"), new _verb2.default("macadamiser", "aim:er"), new _verb2.default("macérer", "réf:érer"), new _verb2.default("mâcher", "aim:er"), new _verb2.default("machicoter", "aim:er"), new _verb2.default("machiner", "aim:er"), new _verb2.default("mâchonner", "aim:er"), new _verb2.default("mâchouiller", "aim:er"), new _verb2.default("mâchurer", "aim:er"), new _verb2.default("macler", "aim:er"), new _verb2.default("maçonner", "aim:er"), new _verb2.default("macquer", "aim:er"), new _verb2.default("maculer", "aim:er"), new _verb2.default("madéfier", "aim:er"), new _verb2.default("madériser", "aim:er"), new _verb2.default("madrigaliser", "aim:er"), new _verb2.default("magasiner", "aim:er"), new _verb2.default("magner", "aim:er"), new _verb2.default("magnétiser", "aim:er"), new _verb2.default("magnétoscoper", "aim:er"), new _verb2.default("magnifier", "aim:er"), new _verb2.default("maigrir", "fin:ir"), new _verb2.default("mailler", "aim:er"), new _verb2.default("maintenir", "t:enir"), new _verb2.default("maîtriser", "aim:er"), new _verb2.default("majorer", "aim:er"), new _verb2.default("malaxer", "aim:er"), new _verb2.default("malfaire", "f:aire"), new _verb2.default("malléabiliser", "aim:er"), new _verb2.default("malmener", "m:ener"), new _verb2.default("malter", "aim:er"), new _verb2.default("maltraiter", "aim:er"), new _verb2.default("mamelonner", "aim:er"), new _verb2.default("manager", "man:ger"), new _verb2.default("manchonner", "aim:er"), new _verb2.default("mandater", "aim:er"), new _verb2.default("mander", "aim:er"), new _verb2.default("mangeotter", "aim:er"), new _verb2.default("manger", "man:ger"), new _verb2.default("manier", "aim:er"), new _verb2.default("manifester", "aim:er"), new _verb2.default("manigancer", "pla:cer"), new _verb2.default("manipuler", "aim:er"), new _verb2.default("mannequiner", "aim:er"), new _verb2.default("manoeuvrer", "aim:er"), new _verb2.default("manoquer", "aim:er"), new _verb2.default("manquer", "aim:er"), new _verb2.default("mansarder", "aim:er"), new _verb2.default("manucurer", "aim:er"), new _verb2.default("manufacturer", "aim:er"), new _verb2.default("manutentionner", "aim:er"), new _verb2.default("maquereauter", "aim:er"), new _verb2.default("maquereller", "aim:er"), new _verb2.default("maquer", "aim:er"), new _verb2.default("maquignonner", "aim:er"), new _verb2.default("maquiller", "aim:er"), new _verb2.default("marauder", "aim:er"), new _verb2.default("marbrer", "aim:er"), new _verb2.default("marchander", "aim:er"), new _verb2.default("marcher", "aim:er"), new _verb2.default("marcotter", "aim:er"), new _verb2.default("margauder", "aim:er"), new _verb2.default("marger", "man:ger"), new _verb2.default("marginaliser", "aim:er"), new _verb2.default("marginer", "aim:er"), new _verb2.default("margoter", "aim:er"), new _verb2.default("margotter", "aim:er"), new _verb2.default("marier", "aim:er"), new _verb2.default("mariner", "aim:er"), new _verb2.default("marivauder", "aim:er"), new _verb2.default("marmiter", "aim:er"), new _verb2.default("marmonner", "aim:er"), new _verb2.default("marmoriser", "aim:er"), new _verb2.default("marmotter", "aim:er"), new _verb2.default("marner", "aim:er"), new _verb2.default("maronner", "aim:er"), new _verb2.default("maroquiner", "aim:er"), new _verb2.default("maroufler", "aim:er"), new _verb2.default("marquer", "aim:er"), new _verb2.default("marqueter", "j:eter"), new _verb2.default("marrer", "aim:er"), new _verb2.default("marronner", "aim:er"), new _verb2.default("marsouiner", "aim:er"), new _verb2.default("marteler", "p:eler"), new _verb2.default("martyriser", "aim:er"), new _verb2.default("marxiser", "aim:er"), new _verb2.default("masculiniser", "aim:er"), new _verb2.default("masquer", "aim:er"), new _verb2.default("massacrer", "aim:er"), new _verb2.default("masser", "aim:er"), new _verb2.default("massicoter", "aim:er"), new _verb2.default("massifier", "aim:er"), new _verb2.default("mastiquer", "aim:er"), new _verb2.default("masturber", "aim:er"), new _verb2.default("matcher", "aim:er"), new _verb2.default("matelasser", "aim:er"), new _verb2.default("matérialiser", "aim:er"), new _verb2.default("mater", "aim:er"), new _verb2.default("mâter", "aim:er"), new _verb2.default("materner", "aim:er"), new _verb2.default("materniser", "aim:er"), new _verb2.default("mathématiser", "aim:er"), new _verb2.default("mâtiner", "aim:er"), new _verb2.default("matir", "men:tir"), new _verb2.default("matraquer", "aim:er"), new _verb2.default("matricer", "pla:cer"), new _verb2.default("matriculer", "aim:er"), new _verb2.default("maturer", "aim:er"), new _verb2.default("maudire", "maud:ire"), new _verb2.default("maugréer", "aim:er"), new _verb2.default("maximaliser", "aim:er"), new _verb2.default("maximiser", "aim:er"), new _verb2.default("mazouter", "aim:er"), new _verb2.default("mécaniser", "aim:er"), new _verb2.default("mécher", "s:écher"), new _verb2.default("mécompter", "aim:er"), new _verb2.default("méconnaître", "rep:aître"), new _verb2.default("mécontenter", "aim:er"), new _verb2.default("médailler", "aim:er"), new _verb2.default("médiatiser", "aim:er"), new _verb2.default("médicaliser", "aim:er"), new _verb2.default("médicamenter", "aim:er"), new _verb2.default("médire", "méd:ire"), new _verb2.default("médiser", "aim:er"), new _verb2.default("méditer", "aim:er"), new _verb2.default("méduser", "aim:er"), new _verb2.default("méfaire", "f:aire"), new _verb2.default("méfier", "aim:er"), new _verb2.default("mégir", "fin:ir"), new _verb2.default("mégisser", "aim:er"), new _verb2.default("mégoter", "aim:er"), new _verb2.default("méjuger", "man:ger"), new _verb2.default("mélanger", "man:ger"), new _verb2.default("mêler", "aim:er"), new _verb2.default("mémoriser", "aim:er"), new _verb2.default("menacer", "pla:cer"), new _verb2.default("ménager", "man:ger"), new _verb2.default("mendier", "aim:er"), new _verb2.default("mendigoter", "aim:er"), new _verb2.default("mener", "m:ener"), new _verb2.default("mensualiser", "aim:er"), new _verb2.default("mensurer", "aim:er"), new _verb2.default("mentionner", "aim:er"), new _verb2.default("mentir", "men:tir"), new _verb2.default("menuiser", "aim:er"), new _verb2.default("méprendre", "pr:endre"), new _verb2.default("mépriser", "aim:er"), new _verb2.default("mercantiliser", "aim:er"), new _verb2.default("merceriser", "aim:er"), new _verb2.default("merder", "aim:er"), new _verb2.default("merdouiller", "aim:er"), new _verb2.default("merdoyer", "netto:yer"), new _verb2.default("meringuer", "aim:er"), new _verb2.default("mériter", "aim:er"), new _verb2.default("mésallier", "aim:er"), new _verb2.default("mésestimer", "aim:er"), new _verb2.default("messeoir", "s:eoir"), new _verb2.default("mesurer", "aim:er"), new _verb2.default("mésuser", "aim:er"), new _verb2.default("métalliser", "aim:er"), new _verb2.default("métamorphiser", "aim:er"), new _verb2.default("métamorphoser", "aim:er"), new _verb2.default("météoriser", "aim:er"), new _verb2.default("métisser", "aim:er"), new _verb2.default("métrer", "imp:étrer"), new _verb2.default("mettre", "m:ettre"), new _verb2.default("meubler", "aim:er"), new _verb2.default("meugler", "aim:er"), new _verb2.default("meuler", "aim:er"), new _verb2.default("meurtrir", "fin:ir"), new _verb2.default("mévendre", "ten:dre"), new _verb2.default("miauler", "aim:er"), new _verb2.default("microfilmer", "aim:er"), new _verb2.default("mignarder", "aim:er"), new _verb2.default("mignoter", "aim:er"), new _verb2.default("migrer", "aim:er"), new _verb2.default("mijoter", "aim:er"), new _verb2.default("militariser", "aim:er"), new _verb2.default("militer", "aim:er"), new _verb2.default("millésimer", "aim:er"), new _verb2.default("mimer", "aim:er"), new _verb2.default("minauder", "aim:er"), new _verb2.default("mincir", "fin:ir"), new _verb2.default("minéraliser", "aim:er"), new _verb2.default("miner", "aim:er"), new _verb2.default("miniaturer", "aim:er"), new _verb2.default("miniaturiser", "aim:er"), new _verb2.default("minimiser", "aim:er"), new _verb2.default("minorer", "aim:er"), new _verb2.default("minuter", "aim:er"), new _verb2.default("mirer", "aim:er"), new _verb2.default("miroiter", "aim:er"), new _verb2.default("miser", "aim:er"), new _verb2.default("miter", "aim:er"), new _verb2.default("mithridater", "aim:er"), new _verb2.default("mithridatiser", "aim:er"), new _verb2.default("mitiger", "man:ger"), new _verb2.default("mitonner", "aim:er"), new _verb2.default("mitrailler", "aim:er"), new _verb2.default("mixer", "aim:er"), new _verb2.default("mixtionner", "aim:er"), new _verb2.default("mobiliser", "aim:er"), new _verb2.default("modeler", "p:eler"), new _verb2.default("modérer", "réf:érer"), new _verb2.default("moderniser", "aim:er"), new _verb2.default("modifier", "aim:er"), new _verb2.default("moduler", "aim:er"), new _verb2.default("moirer", "aim:er"), new _verb2.default("moiser", "aim:er"), new _verb2.default("moisir", "fin:ir"), new _verb2.default("moissonner", "aim:er"), new _verb2.default("moiter", "aim:er"), new _verb2.default("moitir", "fin:ir"), new _verb2.default("molester", "aim:er"), new _verb2.default("moleter", "j:eter"), new _verb2.default("mollarder", "aim:er"), new _verb2.default("molletonner", "aim:er"), new _verb2.default("mollir", "fin:ir"), new _verb2.default("momifier", "aim:er"), new _verb2.default("monder", "aim:er"), new _verb2.default("mondialiser", "aim:er"), new _verb2.default("monétiser", "aim:er"), new _verb2.default("monnayer", "pa:yer"), new _verb2.default("monologuer", "aim:er"), new _verb2.default("monopoliser", "aim:er"), new _verb2.default("monter", "aim:er"), new _verb2.default("montrer", "aim:er"), new _verb2.default("moquer", "aim:er"), new _verb2.default("moquetter", "aim:er"), new _verb2.default("moraliser", "aim:er"), new _verb2.default("morceler", "app:eler"), new _verb2.default("mordancer", "pla:cer"), new _verb2.default("mordiller", "aim:er"), new _verb2.default("mordorer", "aim:er"), new _verb2.default("mordre", "ten:dre"), new _verb2.default("morfiler", "aim:er"), new _verb2.default("morfler", "aim:er"), new _verb2.default("morfondre", "ten:dre"), new _verb2.default("morguer", "aim:er"), new _verb2.default("morigéner", "ali:éner"), new _verb2.default("mortaiser", "aim:er"), new _verb2.default("mortifier", "aim:er"), new _verb2.default("motionner", "aim:er"), new _verb2.default("motiver", "aim:er"), new _verb2.default("motoriser", "aim:er"), new _verb2.default("motter", "aim:er"), new _verb2.default("moucharder", "aim:er"), new _verb2.default("moucher", "aim:er"), new _verb2.default("moucheronner", "aim:er"), new _verb2.default("moucheter", "j:eter"), new _verb2.default("moudre", "mou:dre"), new _verb2.default("mouetter", "aim:er"), new _verb2.default("moufter", "aim:er"), new _verb2.default("mouiller", "aim:er"), new _verb2.default("mouler", "aim:er"), new _verb2.default("mouliner", "aim:er"), new _verb2.default("moulurer", "aim:er"), new _verb2.default("mourir", "m:ourir"), new _verb2.default("mouronner", "aim:er"), new _verb2.default("mousser", "aim:er"), new _verb2.default("moutonner", "aim:er"), new _verb2.default("mouvementer", "aim:er"), new _verb2.default("mouver", "aim:er"), new _verb2.default("mouvoir", "m:ouvoir"), new _verb2.default("moyenner", "aim:er"), new _verb2.default("mucher", "aim:er"), new _verb2.default("muer", "aim:er"), new _verb2.default("mugir", "fin:ir"), new _verb2.default("mugueter", "j:eter"), new _verb2.default("muloter", "aim:er"), new _verb2.default("multiplexer", "aim:er"), new _verb2.default("multiplier", "aim:er"), new _verb2.default("municipaliser", "aim:er"), new _verb2.default("munir", "fin:ir"), new _verb2.default("munitionner", "aim:er"), new _verb2.default("murailler", "aim:er"), new _verb2.default("murer", "aim:er"), new _verb2.default("mûrir", "fin:ir"), new _verb2.default("murmurer", "aim:er"), new _verb2.default("musarder", "aim:er"), new _verb2.default("muscler", "aim:er"), new _verb2.default("museler", "app:eler"), new _verb2.default("muser", "aim:er"), new _verb2.default("musiquer", "aim:er"), new _verb2.default("musquer", "aim:er"), new _verb2.default("musser", "aim:er"), new _verb2.default("muter", "aim:er"), new _verb2.default("mutiler", "aim:er"), new _verb2.default("mutiner", "aim:er"), new _verb2.default("mutualiser", "aim:er"), new _verb2.default("mystifier", "aim:er"), new _verb2.default("nacrer", "aim:er"), new _verb2.default("nager", "man:ger"), new _verb2.default("naître", "n:aître"), new _verb2.default("nantir", "fin:ir"), new _verb2.default("napper", "aim:er"), new _verb2.default("narguer", "aim:er"), new _verb2.default("narrer", "aim:er"), new _verb2.default("nasaliser", "aim:er"), new _verb2.default("nasiller", "aim:er"), new _verb2.default("nationaliser", "aim:er"), new _verb2.default("natter", "aim:er"), new _verb2.default("naturaliser", "aim:er"), new _verb2.default("naufrager", "man:ger"), new _verb2.default("naviguer", "aim:er"), new _verb2.default("navrer", "aim:er"), new _verb2.default("néantiser", "aim:er"), new _verb2.default("nécessiter", "aim:er"), new _verb2.default("nécroser", "aim:er"), new _verb2.default("négliger", "man:ger"), new _verb2.default("négocier", "aim:er"), new _verb2.default("neiger", "man:ger"), new _verb2.default("nervurer", "aim:er"), new _verb2.default("nettoyer", "netto:yer"), new _verb2.default("neutraliser", "aim:er"), new _verb2.default("niaiser", "aim:er"), new _verb2.default("nicher", "aim:er"), new _verb2.default("nickeler", "app:eler"), new _verb2.default("nicotiniser", "aim:er"), new _verb2.default("nidifier", "aim:er"), new _verb2.default("nieller", "aim:er"), new _verb2.default("nier", "aim:er"), new _verb2.default("nimber", "aim:er"), new _verb2.default("nipper", "aim:er"), new _verb2.default("nitrater", "aim:er"), new _verb2.default("nitrer", "aim:er"), new _verb2.default("nitrifier", "aim:er"), new _verb2.default("nitrurer", "aim:er"), new _verb2.default("niveler", "app:eler"), new _verb2.default("noircir", "fin:ir"), new _verb2.default("noliser", "aim:er"), new _verb2.default("nomadiser", "aim:er"), new _verb2.default("nominaliser", "aim:er"), new _verb2.default("nommer", "aim:er"), new _verb2.default("noper", "aim:er"), new _verb2.default("nordir", "fin:ir"), new _verb2.default("normaliser", "aim:er"), new _verb2.default("noter", "aim:er"), new _verb2.default("notifier", "aim:er"), new _verb2.default("nouer", "aim:er"), new _verb2.default("nourrir", "fin:ir"), new _verb2.default("nover", "aim:er"), new _verb2.default("noyauter", "aim:er"), new _verb2.default("noyer", "netto:yer"), new _verb2.default("nuancer", "pla:cer"), new _verb2.default("nucléer", "aim:er"), new _verb2.default("nuer", "aim:er"), new _verb2.default("nuire", "nui:re"), new _verb2.default("numériser", "aim:er"), new _verb2.default("numéroter", "aim:er"), new _verb2.default("obéir", "fin:ir"), new _verb2.default("obérer", "réf:érer"), new _verb2.default("objecter", "aim:er"), new _verb2.default("objectiver", "aim:er"), new _verb2.default("objurguer", "aim:er"), new _verb2.default("obliger", "man:ger"), new _verb2.default("obliquer", "aim:er"), new _verb2.default("oblitérer", "réf:érer"), new _verb2.default("obnubiler", "aim:er"), new _verb2.default("obombrer", "aim:er"), new _verb2.default("obscurcir", "fin:ir"), new _verb2.default("obséder", "c:éder"), new _verb2.default("observer", "aim:er"), new _verb2.default("obstiner", "aim:er"), new _verb2.default("obstruer", "aim:er"), new _verb2.default("obtempérer", "réf:érer"), new _verb2.default("obtenir", "t:enir"), new _verb2.default("obturer", "aim:er"), new _verb2.default("obvenir", "t:enir"), new _verb2.default("obvier", "aim:er"), new _verb2.default("occasionner", "aim:er"), new _verb2.default("occidentaliser", "aim:er"), new _verb2.default("occire", "occi:re"), new _verb2.default("occlure", "incl:ure"), new _verb2.default("occulter", "aim:er"), new _verb2.default("occuper", "aim:er"), new _verb2.default("ocrer", "aim:er"), new _verb2.default("octavier", "aim:er"), new _verb2.default("octroyer", "netto:yer"), new _verb2.default("octupler", "aim:er"), new _verb2.default("oeilletonner", "aim:er"), new _verb2.default("oeuvrer", "aim:er"), new _verb2.default("offenser", "aim:er"), new _verb2.default("officialiser", "aim:er"), new _verb2.default("officier", "aim:er"), new _verb2.default("offrir", "ouv:rir"), new _verb2.default("offusquer", "aim:er"), new _verb2.default("oindre", "oi:ndre"), new _verb2.default("oiseler", "app:eler"), new _verb2.default("ombrager", "man:ger"), new _verb2.default("ombrer", "aim:er"), new _verb2.default("omettre", "m:ettre"), new _verb2.default("ondoyer", "netto:yer"), new _verb2.default("onduler", "aim:er"), new _verb2.default("opacifier", "aim:er"), new _verb2.default("opaliser", "aim:er"), new _verb2.default("opérer", "réf:érer"), new _verb2.default("opiacer", "pla:cer"), new _verb2.default("opiner", "aim:er"), new _verb2.default("opiniâtrer", "aim:er"), new _verb2.default("opposer", "aim:er"), new _verb2.default("oppresser", "aim:er"), new _verb2.default("opprimer", "aim:er"), new _verb2.default("opter", "aim:er"), new _verb2.default("optimaliser", "aim:er"), new _verb2.default("optimiser", "aim:er"), new _verb2.default("oranger", "man:ger"), new _verb2.default("orbiter", "aim:er"), new _verb2.default("orchestrer", "aim:er"), new _verb2.default("ordonnancer", "pla:cer"), new _verb2.default("ordonner", "aim:er"), new _verb2.default("organiser", "aim:er"), new _verb2.default("organsiner", "aim:er"), new _verb2.default("orienter", "aim:er"), new _verb2.default("oringuer", "aim:er"), new _verb2.default("ornementer", "aim:er"), new _verb2.default("orner", "aim:er"), new _verb2.default("orthographier", "aim:er"), new _verb2.default("osciller", "aim:er"), new _verb2.default("oser", "aim:er"), new _verb2.default("ossifier", "aim:er"), new _verb2.default("ostraciser", "aim:er"), new _verb2.default("ôter", "aim:er"), new _verb2.default("ouater", "aim:er"), new _verb2.default("ouatiner", "aim:er"), new _verb2.default("oublier", "aim:er"), new _verb2.default("ouiller", "aim:er"), new _verb2.default("ouïr", "o:uïr"), new _verb2.default("ourdir", "fin:ir"), new _verb2.default("ourler", "aim:er"), new _verb2.default("outiller", "aim:er"), new _verb2.default("outrager", "man:ger"), new _verb2.default("outrepasser", "aim:er"), new _verb2.default("outrer", "aim:er"), new _verb2.default("ouvrager", "man:ger"), new _verb2.default("ouvrer", "aim:er"), new _verb2.default("ouvrir", "ouv:rir"), new _verb2.default("ovaliser", "aim:er"), new _verb2.default("ovationner", "aim:er"), new _verb2.default("ovuler", "aim:er"), new _verb2.default("oxyder", "aim:er"), new _verb2.default("oxygéner", "ali:éner"), new _verb2.default("ozoniser", "aim:er"), new _verb2.default("pacager", "man:ger"), new _verb2.default("pacifier", "aim:er"), new _verb2.default("pacquer", "aim:er"), new _verb2.default("pactiser", "aim:er"), new _verb2.default("paganiser", "aim:er"), new _verb2.default("pagayer", "pa:yer"), new _verb2.default("pageoter", "aim:er"), new _verb2.default("pager", "man:ger"), new _verb2.default("paginer", "aim:er"), new _verb2.default("pagnoter", "aim:er"), new _verb2.default("paillarder", "aim:er"), new _verb2.default("paillassonner", "aim:er"), new _verb2.default("pailler", "aim:er"), new _verb2.default("pailleter", "j:eter"), new _verb2.default("paillonner", "aim:er"), new _verb2.default("paisseler", "app:eler"), new _verb2.default("paître", "p:aître"), new _verb2.default("pajoter", "aim:er"), new _verb2.default("palabrer", "aim:er"), new _verb2.default("palancrer", "aim:er"), new _verb2.default("palangrer", "aim:er"), new _verb2.default("palanguer", "aim:er"), new _verb2.default("palanquer", "aim:er"), new _verb2.default("palataliser", "aim:er"), new _verb2.default("paletter", "aim:er"), new _verb2.default("palettiser", "aim:er"), new _verb2.default("pâlir", "fin:ir"), new _verb2.default("palissader", "aim:er"), new _verb2.default("palisser", "aim:er"), new _verb2.default("palissonner", "aim:er"), new _verb2.default("pallier", "aim:er"), new _verb2.default("palmer", "aim:er"), new _verb2.default("paloter", "aim:er"), new _verb2.default("palper", "aim:er"), new _verb2.default("palpiter", "aim:er"), new _verb2.default("pâmer", "aim:er"), new _verb2.default("panacher", "aim:er"), new _verb2.default("paner", "aim:er"), new _verb2.default("panifier", "aim:er"), new _verb2.default("paniquer", "aim:er"), new _verb2.default("panneauter", "aim:er"), new _verb2.default("panner", "aim:er"), new _verb2.default("panoramiquer", "aim:er"), new _verb2.default("panser", "aim:er"), new _verb2.default("panteler", "app:eler"), new _verb2.default("pantoufler", "aim:er"), new _verb2.default("papillonner", "aim:er"), new _verb2.default("papilloter", "aim:er"), new _verb2.default("papoter", "aim:er"), new _verb2.default("papouiller", "aim:er"), new _verb2.default("paqueter", "j:eter"), new _verb2.default("parachever", "l:ever"), new _verb2.default("parachuter", "aim:er"), new _verb2.default("parader", "aim:er"), new _verb2.default("parafer", "aim:er"), new _verb2.default("paraffiner", "aim:er"), new _verb2.default("paraisonner", "aim:er"), new _verb2.default("paraître", "rep:aître"), new _verb2.default("paralléliser", "aim:er"), new _verb2.default("paralyser", "aim:er"), new _verb2.default("paramétriser", "aim:er"), new _verb2.default("parangonner", "aim:er"), new _verb2.default("parapher", "aim:er"), new _verb2.default("paraphraser", "aim:er"), new _verb2.default("parasiter", "aim:er"), new _verb2.default("parcellariser", "aim:er"), new _verb2.default("parceller", "aim:er"), new _verb2.default("parcelliser", "aim:er"), new _verb2.default("parcheminer", "aim:er"), new _verb2.default("parcourir", "cour:ir"), new _verb2.default("pardonner", "aim:er"), new _verb2.default("parementer", "aim:er"), new _verb2.default("parer", "aim:er"), new _verb2.default("paresser", "aim:er"), new _verb2.default("parfaire", "f:aire"), new _verb2.default("parfiler", "aim:er"), new _verb2.default("parfondre", "ten:dre"), new _verb2.default("parfumer", "aim:er"), new _verb2.default("parier", "aim:er"), new _verb2.default("parjurer", "aim:er"), new _verb2.default("parkériser", "aim:er"), new _verb2.default("parlementer", "aim:er"), new _verb2.default("parler", "aim:er"), new _verb2.default("parloter", "aim:er"), new _verb2.default("parodier", "aim:er"), new _verb2.default("parquer", "aim:er"), new _verb2.default("parqueter", "j:eter"), new _verb2.default("parrainer", "aim:er"), new _verb2.default("parsemer", "s:emer"), new _verb2.default("partager", "man:ger"), new _verb2.default("participer", "aim:er"), new _verb2.default("particulariser", "aim:er"), new _verb2.default("partir", "men:tir"), new _verb2.default("partitionner", "aim:er"), new _verb2.default("parvenir", "t:enir"), new _verb2.default("passementer", "aim:er"), new _verb2.default("passepoiler", "aim:er"), new _verb2.default("passer", "aim:er"), new _verb2.default("passionner", "aim:er"), new _verb2.default("pasteller", "aim:er"), new _verb2.default("pasteuriser", "aim:er"), new _verb2.default("pasticher", "aim:er"), new _verb2.default("pastiller", "aim:er"), new _verb2.default("patafioler", "aim:er"), new _verb2.default("patauger", "man:ger"), new _verb2.default("pateliner", "aim:er"), new _verb2.default("patenter", "aim:er"), new _verb2.default("pâter", "aim:er"), new _verb2.default("patienter", "aim:er"), new _verb2.default("patiner", "aim:er"), new _verb2.default("pâtir", "fin:ir"), new _verb2.default("pâtisser", "aim:er"), new _verb2.default("patoiser", "aim:er"), new _verb2.default("patouiller", "aim:er"), new _verb2.default("patronner", "aim:er"), new _verb2.default("patrouiller", "aim:er"), new _verb2.default("patter", "aim:er"), new _verb2.default("pâturer", "aim:er"), new _verb2.default("paumer", "aim:er"), new _verb2.default("paumoyer", "netto:yer"), new _verb2.default("paupériser", "aim:er"), new _verb2.default("pauser", "aim:er"), new _verb2.default("pavaner", "aim:er"), new _verb2.default("paver", "aim:er"), new _verb2.default("pavoiser", "aim:er"), new _verb2.default("payer", "pa:yer"), new _verb2.default("peaufiner", "aim:er"), new _verb2.default("peausser", "aim:er"), new _verb2.default("pêcher", "aim:er"), new _verb2.default("pécher", "s:écher"), new _verb2.default("pécloter", "aim:er"), new _verb2.default("pédaler", "aim:er"), new _verb2.default("peigner", "aim:er"), new _verb2.default("peindre", "crai:ndre"), new _verb2.default("peiner", "aim:er"), new _verb2.default("peinturer", "aim:er"), new _verb2.default("peinturlurer", "aim:er"), new _verb2.default("peler", "p:eler"), new _verb2.default("pelleter", "j:eter"), new _verb2.default("peloter", "aim:er"), new _verb2.default("pelotonner", "aim:er"), new _verb2.default("pelucher", "aim:er"), new _verb2.default("pénaliser", "aim:er"), new _verb2.default("pencher", "aim:er"), new _verb2.default("pendiller", "aim:er"), new _verb2.default("pendouiller", "aim:er"), new _verb2.default("pendre", "ten:dre"), new _verb2.default("penduler", "aim:er"), new _verb2.default("pénétrer", "imp:étrer"), new _verb2.default("penser", "aim:er"), new _verb2.default("pensionner", "aim:er"), new _verb2.default("pépier", "aim:er"), new _verb2.default("percer", "pla:cer"), new _verb2.default("percevoir", "dé:cevoir"), new _verb2.default("percher", "aim:er"), new _verb2.default("percuter", "aim:er"), new _verb2.default("perdre", "ten:dre"), new _verb2.default("perdurer", "aim:er"), new _verb2.default("pérégriner", "aim:er"), new _verb2.default("pérenniser", "aim:er"), new _verb2.default("perfectionner", "aim:er"), new _verb2.default("perforer", "aim:er"), new _verb2.default("perfuser", "aim:er"), new _verb2.default("péricliter", "aim:er"), new _verb2.default("périmer", "aim:er"), new _verb2.default("périphraser", "aim:er"), new _verb2.default("périr", "fin:ir"), new _verb2.default("perler", "aim:er"), new _verb2.default("permanenter", "aim:er"), new _verb2.default("perméabiliser", "aim:er"), new _verb2.default("permettre", "m:ettre"), new _verb2.default("permuter", "aim:er"), new _verb2.default("pérorer", "aim:er"), new _verb2.default("peroxyder", "aim:er"), new _verb2.default("péroxyder", "aim:er"), new _verb2.default("perpétrer", "imp:étrer"), new _verb2.default("perpétuer", "aim:er"), new _verb2.default("perquisitionner", "aim:er"), new _verb2.default("persécuter", "aim:er"), new _verb2.default("persévérer", "réf:érer"), new _verb2.default("persifler", "aim:er"), new _verb2.default("persiller", "aim:er"), new _verb2.default("persister", "aim:er"), new _verb2.default("personnaliser", "aim:er"), new _verb2.default("personnifier", "aim:er"), new _verb2.default("persuader", "aim:er"), new _verb2.default("perturber", "aim:er"), new _verb2.default("pervertir", "fin:ir"), new _verb2.default("pervibrer", "aim:er"), new _verb2.default("peser", "p:eser"), new _verb2.default("pester", "aim:er"), new _verb2.default("pétarader", "aim:er"), new _verb2.default("pétarder", "aim:er"), new _verb2.default("péter", "décr:éter"), new _verb2.default("pétiller", "aim:er"), new _verb2.default("pétitionner", "aim:er"), new _verb2.default("pétouiller", "aim:er"), new _verb2.default("pétrarquiser", "aim:er"), new _verb2.default("pétrifier", "aim:er"), new _verb2.default("pétrir", "fin:ir"), new _verb2.default("pétuner", "aim:er"), new _verb2.default("peupler", "aim:er"), new _verb2.default("phagocyter", "aim:er"), new _verb2.default("philosopher", "aim:er"), new _verb2.default("phosphater", "aim:er"), new _verb2.default("phosphorer", "aim:er"), new _verb2.default("photocopier", "aim:er"), new _verb2.default("photographier", "aim:er"), new _verb2.default("phraser", "aim:er"), new _verb2.default("piaffer", "aim:er"), new _verb2.default("piailler", "aim:er"), new _verb2.default("pianoter", "aim:er"), new _verb2.default("piauler", "aim:er"), new _verb2.default("picoler", "aim:er"), new _verb2.default("picorer", "aim:er"), new _verb2.default("picoter", "aim:er"), new _verb2.default("piéger", "abr:éger"), new _verb2.default("pierrer", "aim:er"), new _verb2.default("piéter", "décr:éter"), new _verb2.default("piétiner", "aim:er"), new _verb2.default("pieuter", "aim:er"), new _verb2.default("pifer", "aim:er"), new _verb2.default("piffer", "aim:er"), new _verb2.default("pigeonner", "aim:er"), new _verb2.default("piger", "man:ger"), new _verb2.default("pigmenter", "aim:er"), new _verb2.default("pignocher", "aim:er"), new _verb2.default("piler", "aim:er"), new _verb2.default("piller", "aim:er"), new _verb2.default("pilonner", "aim:er"), new _verb2.default("piloter", "aim:er"), new _verb2.default("pimenter", "aim:er"), new _verb2.default("pinailler", "aim:er"), new _verb2.default("pincer", "pla:cer"), new _verb2.default("pindariser", "aim:er"), new _verb2.default("pinter", "aim:er"), new _verb2.default("piocher", "aim:er"), new _verb2.default("pioncer", "pla:cer"), new _verb2.default("pionner", "aim:er"), new _verb2.default("piper", "aim:er"), new _verb2.default("pique-niquer", "aim:er"), new _verb2.default("piquer", "aim:er"), new _verb2.default("piqueter", "j:eter"), new _verb2.default("pirater", "aim:er"), new _verb2.default("pirouetter", "aim:er"), new _verb2.default("pisser", "aim:er"), new _verb2.default("pistacher", "aim:er"), new _verb2.default("pister", "aim:er"), new _verb2.default("pistonner", "aim:er"), new _verb2.default("pitonner", "aim:er"), new _verb2.default("pituiter", "aim:er"), new _verb2.default("pivoter", "aim:er"), new _verb2.default("placarder", "aim:er"), new _verb2.default("placer", "pla:cer"), new _verb2.default("plafonner", "aim:er"), new _verb2.default("plagier", "aim:er"), new _verb2.default("plaider", "aim:er"), new _verb2.default("plaindre", "crai:ndre"), new _verb2.default("plainer", "aim:er"), new _verb2.default("plaire", "pl:aire"), new _verb2.default("plaisanter", "aim:er"), new _verb2.default("plancher", "aim:er"), new _verb2.default("planer", "aim:er"), new _verb2.default("planifier", "aim:er"), new _verb2.default("planquer", "aim:er"), new _verb2.default("planter", "aim:er"), new _verb2.default("plaquer", "aim:er"), new _verb2.default("plasmifier", "aim:er"), new _verb2.default("plastifier", "aim:er"), new _verb2.default("plastiquer", "aim:er"), new _verb2.default("plastronner", "aim:er"), new _verb2.default("platiner", "aim:er"), new _verb2.default("platiniser", "aim:er"), new _verb2.default("plâtrer", "aim:er"), new _verb2.default("plébisciter", "aim:er"), new _verb2.default("pleurer", "aim:er"), new _verb2.default("pleurnicher", "aim:er"), new _verb2.default("pleuvasser", "aim:er"), new _verb2.default("pleuviner", "aim:er"), new _verb2.default("pleuvoir", "pl:euvoir"), new _verb2.default("plier", "aim:er"), new _verb2.default("plisser", "aim:er"), new _verb2.default("plomber", "aim:er"), new _verb2.default("plonger", "man:ger"), new _verb2.default("ploquer", "aim:er"), new _verb2.default("ployer", "netto:yer"), new _verb2.default("plucher", "aim:er"), new _verb2.default("plumer", "aim:er"), new _verb2.default("pluraliser", "aim:er"), new _verb2.default("pocher", "aim:er"), new _verb2.default("podzoliser", "aim:er"), new _verb2.default("poêler", "aim:er"), new _verb2.default("poétiser", "aim:er"), new _verb2.default("poignarder", "aim:er"), new _verb2.default("poiler", "aim:er"), new _verb2.default("poinçonner", "aim:er"), new _verb2.default("poindre", "poi:ndre"), new _verb2.default("pointer", "aim:er"), new _verb2.default("pointiller", "aim:er"), new _verb2.default("poireauter", "aim:er"), new _verb2.default("poiroter", "aim:er"), new _verb2.default("poisser", "aim:er"), new _verb2.default("poivrer", "aim:er"), new _verb2.default("polariser", "aim:er"), new _verb2.default("polémiquer", "aim:er"), new _verb2.default("policer", "pla:cer"), new _verb2.default("polir", "fin:ir"), new _verb2.default("polissonner", "aim:er"), new _verb2.default("politiquer", "aim:er"), new _verb2.default("politiser", "aim:er"), new _verb2.default("polluer", "aim:er"), new _verb2.default("polycopier", "aim:er"), new _verb2.default("polymériser", "aim:er"), new _verb2.default("pommader", "aim:er"), new _verb2.default("pommeler", "app:eler"), new _verb2.default("pommer", "aim:er"), new _verb2.default("pomper", "aim:er"), new _verb2.default("pomponner", "aim:er"), new _verb2.default("poncer", "pla:cer"), new _verb2.default("ponctionner", "aim:er"), new _verb2.default("ponctuer", "aim:er"), new _verb2.default("pondérer", "réf:érer"), new _verb2.default("pondre", "ten:dre"), new _verb2.default("ponter", "aim:er"), new _verb2.default("pontifier", "aim:er"), new _verb2.default("pontiller", "aim:er"), new _verb2.default("populariser", "aim:er"), new _verb2.default("poquer", "aim:er"), new _verb2.default("porphyriser", "aim:er"), new _verb2.default("porter", "aim:er"), new _verb2.default("poser", "aim:er"), new _verb2.default("positionner", "aim:er"), new _verb2.default("posséder", "c:éder"), new _verb2.default("postdater", "aim:er"), new _verb2.default("poster", "aim:er"), new _verb2.default("posticher", "aim:er"), new _verb2.default("postillonner", "aim:er"), new _verb2.default("postposer", "aim:er"), new _verb2.default("postsynchroniser", "aim:er"), new _verb2.default("postuler", "aim:er"), new _verb2.default("potasser", "aim:er"), new _verb2.default("potentialiser", "aim:er"), new _verb2.default("potiner", "aim:er"), new _verb2.default("poudrer", "aim:er"), new _verb2.default("poudroyer", "netto:yer"), new _verb2.default("pouffer", "aim:er"), new _verb2.default("pouliner", "aim:er"), new _verb2.default("pouponner", "aim:er"), new _verb2.default("pourchasser", "aim:er"), new _verb2.default("pourfendre", "ten:dre"), new _verb2.default("pourlécher", "s:écher"), new _verb2.default("pourprer", "aim:er"), new _verb2.default("pourrir", "fin:ir"), new _verb2.default("poursuivre", "sui:vre"), new _verb2.default("pourvoir", "pourv:oir"), new _verb2.default("pousser", "aim:er"), new _verb2.default("poutser", "aim:er"), new _verb2.default("pouvoir", "p:ouvoir"), new _verb2.default("praliner", "aim:er"), new _verb2.default("pratiquer", "aim:er"), new _verb2.default("préacheter", "ach:eter"), new _verb2.default("préaviser", "aim:er"), new _verb2.default("précariser", "aim:er"), new _verb2.default("précautionner", "aim:er"), new _verb2.default("précéder", "c:éder"), new _verb2.default("préchauffer", "aim:er"), new _verb2.default("prêcher", "aim:er"), new _verb2.default("précipiter", "aim:er"), new _verb2.default("préciser", "aim:er"), new _verb2.default("précompter", "aim:er"), new _verb2.default("préconiser", "aim:er"), new _verb2.default("prédéfinir", "fin:ir"), new _verb2.default("prédestiner", "aim:er"), new _verb2.default("prédéterminer", "aim:er"), new _verb2.default("prédiquer", "aim:er"), new _verb2.default("prédire", "préd:ire"), new _verb2.default("prédisposer", "aim:er"), new _verb2.default("prédominer", "aim:er"), new _verb2.default("préempter", "aim:er"), new _verb2.default("préétablir", "fin:ir"), new _verb2.default("préexister", "aim:er"), new _verb2.default("préfabriquer", "aim:er"), new _verb2.default("préfacer", "pla:cer"), new _verb2.default("préférer", "réf:érer"), new _verb2.default("préfigurer", "aim:er"), new _verb2.default("préfixer", "aim:er"), new _verb2.default("préformer", "aim:er"), new _verb2.default("préjudicier", "aim:er"), new _verb2.default("préjuger", "man:ger"), new _verb2.default("prélasser", "aim:er"), new _verb2.default("prélever", "l:ever"), new _verb2.default("préluder", "aim:er"), new _verb2.default("préméditer", "aim:er"), new _verb2.default("prémunir", "fin:ir"), new _verb2.default("prendre", "pr:endre"), new _verb2.default("prénommer", "aim:er"), new _verb2.default("préoccuper", "aim:er"), new _verb2.default("préparer", "aim:er"), new _verb2.default("prépayer", "pa:yer"), new _verb2.default("préposer", "aim:er"), new _verb2.default("présager", "man:ger"), new _verb2.default("prescrire", "écri:re"), new _verb2.default("présenter", "aim:er"), new _verb2.default("préserver", "aim:er"), new _verb2.default("présider", "aim:er"), new _verb2.default("pressentir", "men:tir"), new _verb2.default("presser", "aim:er"), new _verb2.default("pressurer", "aim:er"), new _verb2.default("pressuriser", "aim:er"), new _verb2.default("présumer", "aim:er"), new _verb2.default("présupposer", "aim:er"), new _verb2.default("présurer", "aim:er"), new _verb2.default("prétendre", "ten:dre"), new _verb2.default("prêter", "aim:er"), new _verb2.default("prétexter", "aim:er"), new _verb2.default("prévaloir", "préva:loir"), new _verb2.default("prévariquer", "aim:er"), new _verb2.default("prévenir", "t:enir"), new _verb2.default("prévoir", "prév:oir"), new _verb2.default("prier", "aim:er"), new _verb2.default("primariser", "aim:er"), new _verb2.default("primer", "aim:er"), new _verb2.default("prioriser", "aim:er"), new _verb2.default("priser", "aim:er"), new _verb2.default("privatiser", "aim:er"), new _verb2.default("priver", "aim:er"), new _verb2.default("privilégier", "aim:er"), new _verb2.default("procéder", "c:éder"), new _verb2.default("proclamer", "aim:er"), new _verb2.default("procrastiner", "aim:er"), new _verb2.default("procréer", "aim:er"), new _verb2.default("procurer", "aim:er"), new _verb2.default("prodiguer", "aim:er"), new _verb2.default("produire", "condui:re"), new _verb2.default("profaner", "aim:er"), new _verb2.default("proférer", "réf:érer"), new _verb2.default("professer", "aim:er"), new _verb2.default("profiler", "aim:er"), new _verb2.default("profiter", "aim:er"), new _verb2.default("programmer", "aim:er"), new _verb2.default("progresser", "aim:er"), new _verb2.default("prohiber", "aim:er"), new _verb2.default("projeter", "j:eter"), new _verb2.default("prolétariser", "aim:er"), new _verb2.default("proliférer", "réf:érer"), new _verb2.default("prolonger", "man:ger"), new _verb2.default("promener", "m:ener"), new _verb2.default("promettre", "m:ettre"), new _verb2.default("promouvoir", "prom:ouvoir"), new _verb2.default("promulguer", "aim:er"), new _verb2.default("prôner", "aim:er"), new _verb2.default("prononcer", "pla:cer"), new _verb2.default("pronostiquer", "aim:er"), new _verb2.default("propager", "man:ger"), new _verb2.default("prophétiser", "aim:er"), new _verb2.default("proportionner", "aim:er"), new _verb2.default("proposer", "aim:er"), new _verb2.default("propulser", "aim:er"), new _verb2.default("proroger", "man:ger"), new _verb2.default("proscrire", "écri:re"), new _verb2.default("prosodier", "aim:er"), new _verb2.default("prospecter", "aim:er"), new _verb2.default("prospérer", "réf:érer"), new _verb2.default("prosterner", "aim:er"), new _verb2.default("prostituer", "aim:er"), new _verb2.default("protéger", "abr:éger"), new _verb2.default("protester", "aim:er"), new _verb2.default("prouver", "aim:er"), new _verb2.default("provenir", "t:enir"), new _verb2.default("proverbialiser", "aim:er"), new _verb2.default("provigner", "aim:er"), new _verb2.default("provisionner", "aim:er"), new _verb2.default("provoquer", "aim:er"), new _verb2.default("psalmodier", "aim:er"), new _verb2.default("psychanalyser", "aim:er"), new _verb2.default("psychiatriser", "aim:er"), new _verb2.default("publier", "aim:er"), new _verb2.default("puddler", "aim:er"), new _verb2.default("puer", "aim:er"), new _verb2.default("puiser", "aim:er"), new _verb2.default("pulluler", "aim:er"), new _verb2.default("pulser", "aim:er"), new _verb2.default("pulvériser", "aim:er"), new _verb2.default("punaiser", "aim:er"), new _verb2.default("punir", "fin:ir"), new _verb2.default("purger", "man:ger"), new _verb2.default("purifier", "aim:er"), new _verb2.default("putréfier", "aim:er"), new _verb2.default("pyramider", "aim:er"), new _verb2.default("pyrograver", "aim:er"), new _verb2.default("quadriller", "aim:er"), new _verb2.default("quadrupler", "aim:er"), new _verb2.default("qualifier", "aim:er"), new _verb2.default("quantifier", "aim:er"), new _verb2.default("quarderonner", "aim:er"), new _verb2.default("quarrer", "aim:er"), new _verb2.default("quartager", "man:ger"), new _verb2.default("quarter", "aim:er"), new _verb2.default("québéciser", "aim:er"), new _verb2.default("quémander", "aim:er"), new _verb2.default("quereller", "aim:er"), new _verb2.default("quérir", "qu:érir"), new _verb2.default("querner", "aim:er"), new _verb2.default("questionner", "aim:er"), new _verb2.default("quêter", "aim:er"), new _verb2.default("queuter", "aim:er"), new _verb2.default("quiller", "aim:er"), new _verb2.default("quimper", "aim:er"), new _verb2.default("quintessencier", "aim:er"), new _verb2.default("quintupler", "aim:er"), new _verb2.default("quittancer", "pla:cer"), new _verb2.default("quitter", "aim:er"), new _verb2.default("quotienter", "aim:er"), new _verb2.default("quotter", "aim:er"), new _verb2.default("rabâcher", "aim:er"), new _verb2.default("rabaisser", "aim:er"), new _verb2.default("rabanter", "aim:er"), new _verb2.default("rabattre", "bat:tre"), new _verb2.default("rabibocher", "aim:er"), new _verb2.default("rabioter", "aim:er"), new _verb2.default("râbler", "aim:er"), new _verb2.default("rabonnir", "fin:ir"), new _verb2.default("raboter", "aim:er"), new _verb2.default("rabougrir", "fin:ir"), new _verb2.default("rabouter", "aim:er"), new _verb2.default("rabrouer", "aim:er"), new _verb2.default("raccommoder", "aim:er"), new _verb2.default("raccompagner", "aim:er"), new _verb2.default("raccorder", "aim:er"), new _verb2.default("raccourcir", "fin:ir"), new _verb2.default("raccoutrer", "aim:er"), new _verb2.default("raccoutumer", "aim:er"), new _verb2.default("raccrocher", "aim:er"), new _verb2.default("racheter", "ach:eter"), new _verb2.default("raciner", "aim:er"), new _verb2.default("racler", "aim:er"), new _verb2.default("racoler", "aim:er"), new _verb2.default("raconter", "aim:er"), new _verb2.default("racornir", "fin:ir"), new _verb2.default("rader", "aim:er"), new _verb2.default("radicaliser", "aim:er"), new _verb2.default("radier", "aim:er"), new _verb2.default("radiner", "aim:er"), new _verb2.default("radiobaliser", "aim:er"), new _verb2.default("radiodiffuser", "aim:er"), new _verb2.default("radiographier", "aim:er"), new _verb2.default("radioguider", "aim:er"), new _verb2.default("radioscoper", "aim:er"), new _verb2.default("radiotélégraphier", "aim:er"), new _verb2.default("radoter", "aim:er"), new _verb2.default("radouber", "aim:er"), new _verb2.default("radoucir", "fin:ir"), new _verb2.default("raffermir", "fin:ir"), new _verb2.default("raffiner", "aim:er"), new _verb2.default("raffoler", "aim:er"), new _verb2.default("raffûter", "aim:er"), new _verb2.default("rafistoler", "aim:er"), new _verb2.default("rafler", "aim:er"), new _verb2.default("rafraîchir", "fin:ir"), new _verb2.default("ragaillardir", "fin:ir"), new _verb2.default("rager", "man:ger"), new _verb2.default("ragoter", "aim:er"), new _verb2.default("ragoûter", "aim:er"), new _verb2.default("ragrafer", "aim:er"), new _verb2.default("ragréer", "aim:er"), new _verb2.default("raguer", "aim:er"), new _verb2.default("railler", "aim:er"), new _verb2.default("rainer", "aim:er"), new _verb2.default("raineter", "j:eter"), new _verb2.default("rainurer", "aim:er"), new _verb2.default("raire", "extra:ire"), new _verb2.default("raisonner", "aim:er"), new _verb2.default("rajeunir", "fin:ir"), new _verb2.default("rajouter", "aim:er"), new _verb2.default("rajuster", "aim:er"), new _verb2.default("ralentir", "fin:ir"), new _verb2.default("râler", "aim:er"), new _verb2.default("ralinguer", "aim:er"), new _verb2.default("raller", "aim:er"), new _verb2.default("rallier", "aim:er"), new _verb2.default("rallonger", "man:ger"), new _verb2.default("rallumer", "aim:er"), new _verb2.default("ramager", "man:ger"), new _verb2.default("ramailler", "aim:er"), new _verb2.default("ramander", "aim:er"), new _verb2.default("ramarrer", "aim:er"), new _verb2.default("ramasser", "aim:er"), new _verb2.default("ramender", "aim:er"), new _verb2.default("ramener", "m:ener"), new _verb2.default("ramer", "aim:er"), new _verb2.default("rameuter", "aim:er"), new _verb2.default("ramifier", "aim:er"), new _verb2.default("ramollir", "fin:ir"), new _verb2.default("ramoner", "aim:er"), new _verb2.default("ramper", "aim:er"), new _verb2.default("rancarder", "aim:er"), new _verb2.default("rancir", "fin:ir"), new _verb2.default("rançonner", "aim:er"), new _verb2.default("randomiser", "aim:er"), new _verb2.default("randonner", "aim:er"), new _verb2.default("ranger", "man:ger"), new _verb2.default("ranimer", "aim:er"), new _verb2.default("rapapilloter", "aim:er"), new _verb2.default("rapatrier", "aim:er"), new _verb2.default("rapatronner", "aim:er"), new _verb2.default("râper", "aim:er"), new _verb2.default("rapetasser", "aim:er"), new _verb2.default("rapetisser", "aim:er"), new _verb2.default("rapiner", "aim:er"), new _verb2.default("raplatir", "fin:ir"), new _verb2.default("rapointir", "fin:ir"), new _verb2.default("rappareiller", "aim:er"), new _verb2.default("rapparier", "aim:er"), new _verb2.default("rappeler", "app:eler"), new _verb2.default("rappliquer", "aim:er"), new _verb2.default("rapporter", "aim:er"), new _verb2.default("rapprêter", "aim:er"), new _verb2.default("rapprocher", "aim:er"), new _verb2.default("rapproprier", "aim:er"), new _verb2.default("rapprovisionner", "aim:er"), new _verb2.default("raquer", "aim:er"), new _verb2.default("raréfier", "aim:er"), new _verb2.default("raser", "aim:er"), new _verb2.default("rassasier", "aim:er"), new _verb2.default("rassembler", "aim:er"), new _verb2.default("rasseoir", "ass:eoir"), new _verb2.default("rasséréner", "ali:éner"), new _verb2.default("rassir", "fin:ir"), new _verb2.default("rassoir", "ass:oir"), new _verb2.default("rassortir", "fin:ir"), new _verb2.default("rassurer", "aim:er"), new _verb2.default("ratatiner", "aim:er"), new _verb2.default("râteler", "app:eler"), new _verb2.default("rater", "aim:er"), new _verb2.default("ratiboiser", "aim:er"), new _verb2.default("ratifier", "aim:er"), new _verb2.default("ratiner", "aim:er"), new _verb2.default("ratiociner", "aim:er"), new _verb2.default("rationaliser", "aim:er"), new _verb2.default("rationner", "aim:er"), new _verb2.default("ratisser", "aim:er"), new _verb2.default("rattacher", "aim:er"), new _verb2.default("rattraper", "aim:er"), new _verb2.default("raturer", "aim:er"), new _verb2.default("raugmenter", "aim:er"), new _verb2.default("rauquer", "aim:er"), new _verb2.default("ravager", "man:ger"), new _verb2.default("ravaler", "aim:er"), new _verb2.default("ravauder", "aim:er"), new _verb2.default("ravigoter", "aim:er"), new _verb2.default("ravilir", "fin:ir"), new _verb2.default("raviner", "aim:er"), new _verb2.default("ravir", "fin:ir"), new _verb2.default("raviser", "aim:er"), new _verb2.default("ravitailler", "aim:er"), new _verb2.default("raviver", "aim:er"), new _verb2.default("ravoir", ":ravoir"), new _verb2.default("rayer", "pa:yer"), new _verb2.default("rayonner", "aim:er"), new _verb2.default("razzier", "aim:er"), new _verb2.default("réabonner", "aim:er"), new _verb2.default("réabsorber", "aim:er"), new _verb2.default("réaccoutumer", "aim:er"), new _verb2.default("réactiver", "aim:er"), new _verb2.default("réactualiser", "aim:er"), new _verb2.default("réadapter", "aim:er"), new _verb2.default("réadmettre", "m:ettre"), new _verb2.default("réaffirmer", "aim:er"), new _verb2.default("réaffûter", "aim:er"), new _verb2.default("réagir", "fin:ir"), new _verb2.default("réajuster", "aim:er"), new _verb2.default("réaléser", "l:éser"), new _verb2.default("réaligner", "aim:er"), new _verb2.default("réaliser", "aim:er"), new _verb2.default("réaménager", "man:ger"), new _verb2.default("réamorcer", "pla:cer"), new _verb2.default("réanimer", "aim:er"), new _verb2.default("réapparaître", "rep:aître"), new _verb2.default("réapprendre", "pr:endre"), new _verb2.default("réapprovisionner", "aim:er"), new _verb2.default("réargenter", "aim:er"), new _verb2.default("réarmer", "aim:er"), new _verb2.default("réarranger", "man:ger"), new _verb2.default("réassigner", "aim:er"), new _verb2.default("réassortir", "fin:ir"), new _verb2.default("réassurer", "aim:er"), new _verb2.default("rebaisser", "aim:er"), new _verb2.default("rebander", "aim:er"), new _verb2.default("rebaptiser", "aim:er"), new _verb2.default("rebâtir", "fin:ir"), new _verb2.default("rebattre", "bat:tre"), new _verb2.default("rebeller", "aim:er"), new _verb2.default("rebiffer", "aim:er"), new _verb2.default("rebiquer", "aim:er"), new _verb2.default("reblanchir", "fin:ir"), new _verb2.default("reboiser", "aim:er"), new _verb2.default("rebondir", "fin:ir"), new _verb2.default("reborder", "aim:er"), new _verb2.default("reboucher", "aim:er"), new _verb2.default("rebouter", "aim:er"), new _verb2.default("reboutonner", "aim:er"), new _verb2.default("rebraguetter", "aim:er"), new _verb2.default("rebroder", "aim:er"), new _verb2.default("rebrousser", "aim:er"), new _verb2.default("rebrûler", "aim:er"), new _verb2.default("rebuter", "aim:er"), new _verb2.default("recacheter", "j:eter"), new _verb2.default("recalcifier", "aim:er"), new _verb2.default("récalcitrer", "aim:er"), new _verb2.default("recalculer", "aim:er"), new _verb2.default("recaler", "aim:er"), new _verb2.default("récapituler", "aim:er"), new _verb2.default("recarder", "aim:er"), new _verb2.default("recarreler", "app:eler"), new _verb2.default("recaser", "aim:er"), new _verb2.default("recauser", "aim:er"), new _verb2.default("recéder", "c:éder"), new _verb2.default("receler", "p:eler"), new _verb2.default("recenser", "aim:er"), new _verb2.default("recentrer", "aim:er"), new _verb2.default("receper", "rec:eper"), new _verb2.default("recéper", "rec:éper"), new _verb2.default("réceptionner", "aim:er"), new _verb2.default("recercler", "aim:er"), new _verb2.default("recevoir", "dé:cevoir"), new _verb2.default("réchampir", "fin:ir"), new _verb2.default("rechanger", "man:ger"), new _verb2.default("rechanter", "aim:er"), new _verb2.default("rechaper", "aim:er"), new _verb2.default("réchapper", "aim:er"), new _verb2.default("recharger", "man:ger"), new _verb2.default("rechasser", "aim:er"), new _verb2.default("réchauffer", "aim:er"), new _verb2.default("rechausser", "aim:er"), new _verb2.default("rechercher", "aim:er"), new _verb2.default("rechigner", "aim:er"), new _verb2.default("rechristianiser", "aim:er"), new _verb2.default("rechuter", "aim:er"), new _verb2.default("récidiver", "aim:er"), new _verb2.default("réciproquer", "aim:er"), new _verb2.default("réciter", "aim:er"), new _verb2.default("réclamer", "aim:er"), new _verb2.default("reclasser", "aim:er"), new _verb2.default("récliner", "aim:er"), new _verb2.default("reclouer", "aim:er"), new _verb2.default("recoiffer", "aim:er"), new _verb2.default("récoler", "aim:er"), new _verb2.default("recoller", "aim:er"), new _verb2.default("recolorer", "aim:er"), new _verb2.default("récolter", "aim:er"), new _verb2.default("recommander", "aim:er"), new _verb2.default("recommencer", "pla:cer"), new _verb2.default("recomparaître", "par:aître"), new _verb2.default("récompenser", "aim:er"), new _verb2.default("recomposer", "aim:er"), new _verb2.default("recompter", "aim:er"), new _verb2.default("réconcilier", "aim:er"), new _verb2.default("recondamner", "aim:er"), new _verb2.default("reconduire", "condui:re"), new _verb2.default("réconforter", "aim:er"), new _verb2.default("recongeler", "p:eler"), new _verb2.default("reconnaître", "rep:aître"), new _verb2.default("reconnecter", "aim:er"), new _verb2.default("reconquérir", "acqu:érir"), new _verb2.default("reconsidérer", "réf:érer"), new _verb2.default("reconsolider", "aim:er"), new _verb2.default("reconstituer", "aim:er"), new _verb2.default("reconstruire", "condui:re"), new _verb2.default("reconvertir", "fin:ir"), new _verb2.default("recopier", "aim:er"), new _verb2.default("recoquiller", "aim:er"), new _verb2.default("recorder", "aim:er"), new _verb2.default("recorriger", "man:ger"), new _verb2.default("recoucher", "aim:er"), new _verb2.default("recoudre", "cou:dre"), new _verb2.default("recouper", "aim:er"), new _verb2.default("recouponner", "aim:er"), new _verb2.default("recourber", "aim:er"), new _verb2.default("recourir", "cour:ir"), new _verb2.default("recouvrer", "aim:er"), new _verb2.default("recouvrir", "ouv:rir"), new _verb2.default("recracher", "aim:er"), new _verb2.default("recréer", "aim:er"), new _verb2.default("récréer", "aim:er"), new _verb2.default("recrépir", "fin:ir"), new _verb2.default("recreuser", "aim:er"), new _verb2.default("récrier", "aim:er"), new _verb2.default("récriminer", "aim:er"), new _verb2.default("récrire", "écri:re"), new _verb2.default("recristalliser", "aim:er"), new _verb2.default("recroître", "recr:oître"), new _verb2.default("recroqueviller", "aim:er"), new _verb2.default("recruter", "aim:er"), new _verb2.default("rectifier", "aim:er"), new _verb2.default("recueillir", "cueill:ir"), new _verb2.default("recuire", "condui:re"), new _verb2.default("reculer", "aim:er"), new _verb2.default("reculotter", "aim:er"), new _verb2.default("récupérer", "réf:érer"), new _verb2.default("récurer", "aim:er"), new _verb2.default("récuser", "aim:er"), new _verb2.default("recycler", "aim:er"), new _verb2.default("redécouvrir", "ouv:rir"), new _verb2.default("redéfaire", "f:aire"), new _verb2.default("redéfinir", "fin:ir"), new _verb2.default("redemander", "aim:er"), new _verb2.default("redémarrer", "aim:er"), new _verb2.default("redémolir", "fin:ir"), new _verb2.default("redépecer", "dép:ecer"), new _verb2.default("redéployer", "netto:yer"), new _verb2.default("redescendre", "ten:dre"), new _verb2.default("redévelopper", "aim:er"), new _verb2.default("redevenir", "t:enir"), new _verb2.default("rediffuser", "aim:er"), new _verb2.default("rédiger", "man:ger"), new _verb2.default("rédimer", "aim:er"), new _verb2.default("redire", "d:ire"), new _verb2.default("rediscuter", "aim:er"), new _verb2.default("redistribuer", "aim:er"), new _verb2.default("redonder", "aim:er"), new _verb2.default("redonner", "aim:er"), new _verb2.default("redorer", "aim:er"), new _verb2.default("redoubler", "aim:er"), new _verb2.default("redouter", "aim:er"), new _verb2.default("redresser", "aim:er"), new _verb2.default("réduire", "condui:re"), new _verb2.default("redynamiser", "aim:er"), new _verb2.default("réécouter", "aim:er"), new _verb2.default("réédifier", "aim:er"), new _verb2.default("rééditer", "aim:er"), new _verb2.default("rééduquer", "aim:er"), new _verb2.default("réélire", "l:ire"), new _verb2.default("réembaucher", "aim:er"), new _verb2.default("réemployer", "netto:yer"), new _verb2.default("réemprunter", "aim:er"), new _verb2.default("réengager", "man:ger"), new _verb2.default("réenregistrer", "aim:er"), new _verb2.default("réensemencer", "pla:cer"), new _verb2.default("rééquilibrer", "aim:er"), new _verb2.default("réer", "aim:er"), new _verb2.default("réescompter", "aim:er"), new _verb2.default("réessayer", "pa:yer"), new _verb2.default("réévaluer", "aim:er"), new _verb2.default("réexaminer", "aim:er"), new _verb2.default("réexpédier", "aim:er"), new _verb2.default("réexporter", "aim:er"), new _verb2.default("refaçonner", "aim:er"), new _verb2.default("refendre", "ten:dre"), new _verb2.default("référencer", "pla:cer"), new _verb2.default("référencier", "référenci:er"), new _verb2.default("référer", "réf:érer"), new _verb2.default("refermer", "aim:er"), new _verb2.default("refiler", "aim:er"), new _verb2.default("réfléchir", "fin:ir"), new _verb2.default("refléter", "décr:éter"), new _verb2.default("refleurir", "fin:ir"), new _verb2.default("refluer", "aim:er"), new _verb2.default("refondre", "ten:dre"), new _verb2.default("reforger", "man:ger"), new _verb2.default("reformer", "aim:er"), new _verb2.default("réformer", "aim:er"), new _verb2.default("reformuler", "aim:er"), new _verb2.default("refouiller", "aim:er"), new _verb2.default("refouler", "aim:er"), new _verb2.default("refourrer", "aim:er"), new _verb2.default("réfracter", "aim:er"), new _verb2.default("réfréner", "ali:éner"), new _verb2.default("réfrigérer", "réf:érer"), new _verb2.default("refroidir", "fin:ir"), new _verb2.default("réfugier", "aim:er"), new _verb2.default("refuser", "aim:er"), new _verb2.default("réfuter", "aim:er"), new _verb2.default("regagner", "aim:er"), new _verb2.default("régaler", "aim:er"), new _verb2.default("regarder", "aim:er"), new _verb2.default("regarnir", "fin:ir"), new _verb2.default("régater", "aim:er"), new _verb2.default("regazonner", "aim:er"), new _verb2.default("regeler", "p:eler"), new _verb2.default("regénérer", "réf:érer"), new _verb2.default("régénérer", "réf:érer"), new _verb2.default("régenter", "aim:er"), new _verb2.default("regimber", "aim:er"), new _verb2.default("régionaliser", "aim:er"), new _verb2.default("régir", "fin:ir"), new _verb2.default("registrer", "aim:er"), new _verb2.default("réglementer", "aim:er"), new _verb2.default("régler", "r:égler"), new _verb2.default("régner", "r:égner"), new _verb2.default("regonfler", "aim:er"), new _verb2.default("regorger", "man:ger"), new _verb2.default("regratter", "aim:er"), new _verb2.default("regréer", "aim:er"), new _verb2.default("regreffer", "aim:er"), new _verb2.default("régresser", "aim:er"), new _verb2.default("regretter", "aim:er"), new _verb2.default("regrimper", "aim:er"), new _verb2.default("regrossir", "fin:ir"), new _verb2.default("regrouper", "aim:er"), new _verb2.default("régulariser", "aim:er"), new _verb2.default("réguler", "aim:er"), new _verb2.default("régurgiter", "aim:er"), new _verb2.default("réhabiliter", "aim:er"), new _verb2.default("réhabituer", "aim:er"), new _verb2.default("rehausser", "aim:er"), new _verb2.default("réhydrater", "aim:er"), new _verb2.default("réifier", "aim:er"), new _verb2.default("réimperméabiliser", "aim:er"), new _verb2.default("réimplanter", "aim:er"), new _verb2.default("réimporter", "aim:er"), new _verb2.default("réimposer", "aim:er"), new _verb2.default("réimprimer", "aim:er"), new _verb2.default("réincarner", "aim:er"), new _verb2.default("réincorporer", "aim:er"), new _verb2.default("réinfecter", "aim:er"), new _verb2.default("réinscrire", "écri:re"), new _verb2.default("réinsérer", "réf:érer"), new _verb2.default("réinstaller", "aim:er"), new _verb2.default("réintégrer", "int:égrer"), new _verb2.default("réintroduire", "condui:re"), new _verb2.default("réinventer", "aim:er"), new _verb2.default("réinvestir", "fin:ir"), new _verb2.default("réinviter", "aim:er"), new _verb2.default("réitérer", "réf:érer"), new _verb2.default("rejaillir", "fin:ir"), new _verb2.default("rejeter", "j:eter"), new _verb2.default("rejoindre", "crai:ndre"), new _verb2.default("rejointoyer", "netto:yer"), new _verb2.default("rejouer", "aim:er"), new _verb2.default("réjouir", "fin:ir"), new _verb2.default("rejuger", "man:ger"), new _verb2.default("relâcher", "aim:er"), new _verb2.default("relaisser", "aim:er"), new _verb2.default("relancer", "pla:cer"), new _verb2.default("rélargir", "fin:ir"), new _verb2.default("relater", "aim:er"), new _verb2.default("relativiser", "aim:er"), new _verb2.default("relaver", "aim:er"), new _verb2.default("relaxer", "aim:er"), new _verb2.default("relayer", "pa:yer"), new _verb2.default("reléguer", "l:éguer"), new _verb2.default("relever", "l:ever"), new _verb2.default("relier", "aim:er"), new _verb2.default("relire", "l:ire"), new _verb2.default("reloger", "man:ger"), new _verb2.default("reloqueter", "j:eter"), new _verb2.default("relouer", "aim:er"), new _verb2.default("reluire", "nui:re"), new _verb2.default("reluquer", "aim:er"), new _verb2.default("remâcher", "aim:er"), new _verb2.default("remailler", "aim:er"), new _verb2.default("remanger", "man:ger"), new _verb2.default("remanier", "aim:er"), new _verb2.default("remaquiller", "aim:er"), new _verb2.default("remarcher", "aim:er"), new _verb2.default("remarier", "aim:er"), new _verb2.default("remarquer", "aim:er"), new _verb2.default("remastiquer", "aim:er"), new _verb2.default("remballer", "aim:er"), new _verb2.default("rembarquer", "aim:er"), new _verb2.default("rembarrer", "aim:er"), new _verb2.default("rembiner", "aim:er"), new _verb2.default("remblaver", "aim:er"), new _verb2.default("remblayer", "pa:yer"), new _verb2.default("remboîter", "aim:er"), new _verb2.default("rembouger", "man:ger"), new _verb2.default("rembourrer", "aim:er"), new _verb2.default("rembourser", "aim:er"), new _verb2.default("rembrunir", "fin:ir"), new _verb2.default("rembucher", "aim:er"), new _verb2.default("remédier", "aim:er"), new _verb2.default("remembrer", "aim:er"), new _verb2.default("remémorer", "aim:er"), new _verb2.default("remercier", "aim:er"), new _verb2.default("remettre", "m:ettre"), new _verb2.default("remeubler", "aim:er"), new _verb2.default("remilitariser", "aim:er"), new _verb2.default("remiser", "aim:er"), new _verb2.default("remmailler", "aim:er"), new _verb2.default("remmailloter", "aim:er"), new _verb2.default("remmancher", "aim:er"), new _verb2.default("remmener", "m:ener"), new _verb2.default("remodeler", "p:eler"), new _verb2.default("remonter", "aim:er"), new _verb2.default("remontrer", "aim:er"), new _verb2.default("remordre", "ten:dre"), new _verb2.default("remorquer", "aim:er"), new _verb2.default("remoucher", "aim:er"), new _verb2.default("remoudre", "mou:dre"), new _verb2.default("remouiller", "aim:er"), new _verb2.default("rempailler", "aim:er"), new _verb2.default("rempaqueter", "j:eter"), new _verb2.default("remparer", "aim:er"), new _verb2.default("rempiéter", "décr:éter"), new _verb2.default("rempiler", "aim:er"), new _verb2.default("remplacer", "pla:cer"), new _verb2.default("remplier", "aim:er"), new _verb2.default("remplir", "fin:ir"), new _verb2.default("remployer", "netto:yer"), new _verb2.default("remplumer", "aim:er"), new _verb2.default("rempocher", "aim:er"), new _verb2.default("rempoissonner", "aim:er"), new _verb2.default("remporter", "aim:er"), new _verb2.default("rempoter", "aim:er"), new _verb2.default("remprunter", "aim:er"), new _verb2.default("remuer", "aim:er"), new _verb2.default("rémunérer", "réf:érer"), new _verb2.default("renâcler", "aim:er"), new _verb2.default("renaître", "ren:aître"), new _verb2.default("renarder", "aim:er"), new _verb2.default("renauder", "aim:er"), new _verb2.default("rencaisser", "aim:er"), new _verb2.default("renchaîner", "aim:er"), new _verb2.default("renchérir", "fin:ir"), new _verb2.default("rencogner", "aim:er"), new _verb2.default("rencontrer", "aim:er"), new _verb2.default("rendormir", "dor:mir"), new _verb2.default("rendosser", "aim:er"), new _verb2.default("rendre", "ten:dre"), new _verb2.default("renégocier", "aim:er"), new _verb2.default("rénetter", "aim:er"), new _verb2.default("renfaîter", "aim:er"), new _verb2.default("renfermer", "aim:er"), new _verb2.default("renfiler", "aim:er"), new _verb2.default("renflammer", "aim:er"), new _verb2.default("renfler", "aim:er"), new _verb2.default("renflouer", "aim:er"), new _verb2.default("renfoncer", "pla:cer"), new _verb2.default("renforcer", "pla:cer"), new _verb2.default("renformir", "fin:ir"), new _verb2.default("renfrogner", "aim:er"), new _verb2.default("rengager", "man:ger"), new _verb2.default("rengainer", "aim:er"), new _verb2.default("rengorger", "man:ger"), new _verb2.default("rengracier", "aim:er"), new _verb2.default("rengraisser", "aim:er"), new _verb2.default("rengréner", "ali:éner"), new _verb2.default("rengrener", "m:ener"), new _verb2.default("renier", "aim:er"), new _verb2.default("renifler", "aim:er"), new _verb2.default("renommer", "aim:er"), new _verb2.default("renoncer", "pla:cer"), new _verb2.default("renouer", "aim:er"), new _verb2.default("renouveler", "app:eler"), new _verb2.default("rénover", "aim:er"), new _verb2.default("renquiller", "aim:er"), new _verb2.default("renseigner", "aim:er"), new _verb2.default("rentabiliser", "aim:er"), new _verb2.default("rentamer", "aim:er"), new _verb2.default("renter", "aim:er"), new _verb2.default("rentoiler", "aim:er"), new _verb2.default("rentraîner", "aim:er"), new _verb2.default("rentraire", "extra:ire"), new _verb2.default("rentrer", "aim:er"), new _verb2.default("rentrouvrir", "ouv:rir"), new _verb2.default("renvelopper", "aim:er"), new _verb2.default("renvenimer", "aim:er"), new _verb2.default("renverger", "man:ger"), new _verb2.default("renverser", "aim:er"), new _verb2.default("renvider", "aim:er"), new _verb2.default("renvier", "aim:er"), new _verb2.default("renvoyer", "env:oyer"), new _verb2.default("réoccuper", "aim:er"), new _verb2.default("réopérer", "réf:érer"), new _verb2.default("réorchestrer", "aim:er"), new _verb2.default("réordonnancer", "pla:cer"), new _verb2.default("réordonner", "aim:er"), new _verb2.default("réorganiser", "aim:er"), new _verb2.default("réorienter", "aim:er"), new _verb2.default("repairer", "aim:er"), new _verb2.default("repaître", "rep:aître"), new _verb2.default("répandre", "ten:dre"), new _verb2.default("reparaître", "rep:aître"), new _verb2.default("réparer", "aim:er"), new _verb2.default("reparler", "aim:er"), new _verb2.default("repartager", "man:ger"), new _verb2.default("répartir", "fin:ir"), new _verb2.default("repartir", "men:tir"), new _verb2.default("repasser", "aim:er"), new _verb2.default("repatiner", "aim:er"), new _verb2.default("repaver", "aim:er"), new _verb2.default("repayer", "pa:yer"), new _verb2.default("repêcher", "aim:er"), new _verb2.default("repeigner", "aim:er"), new _verb2.default("repeindre", "crai:ndre"), new _verb2.default("rependre", "ten:dre"), new _verb2.default("repenser", "aim:er"), new _verb2.default("repentir", "men:tir"), new _verb2.default("repercer", "pla:cer"), new _verb2.default("répercuter", "aim:er"), new _verb2.default("reperdre", "ten:dre"), new _verb2.default("repérer", "réf:érer"), new _verb2.default("répertorier", "aim:er"), new _verb2.default("répéter", "décr:éter"), new _verb2.default("repeupler", "aim:er"), new _verb2.default("repincer", "pla:cer"), new _verb2.default("repiquer", "aim:er"), new _verb2.default("replacer", "pla:cer"), new _verb2.default("replanter", "aim:er"), new _verb2.default("replâtrer", "aim:er"), new _verb2.default("replier", "aim:er"), new _verb2.default("répliquer", "aim:er"), new _verb2.default("replisser", "aim:er"), new _verb2.default("replonger", "man:ger"), new _verb2.default("reployer", "netto:yer"), new _verb2.default("repolir", "fin:ir"), new _verb2.default("répondre", "ten:dre"), new _verb2.default("reporter", "aim:er"), new _verb2.default("reposer", "aim:er"), new _verb2.default("repousser", "aim:er"), new _verb2.default("reprendre", "pr:endre"), new _verb2.default("représenter", "aim:er"), new _verb2.default("réprimander", "aim:er"), new _verb2.default("réprimer", "aim:er"), new _verb2.default("repriser", "aim:er"), new _verb2.default("reprocher", "aim:er"), new _verb2.default("reproduire", "condui:re"), new _verb2.default("reprogrammer", "aim:er"), new _verb2.default("reprographier", "aim:er"), new _verb2.default("reprouver", "aim:er"), new _verb2.default("réprouver", "aim:er"), new _verb2.default("républicaniser", "aim:er"), new _verb2.default("répudier", "aim:er"), new _verb2.default("répugner", "aim:er"), new _verb2.default("réputer", "aim:er"), new _verb2.default("requérir", "acqu:érir"), new _verb2.default("requinquer", "aim:er"), new _verb2.default("réquisitionner", "aim:er"), new _verb2.default("resaler", "aim:er"), new _verb2.default("resaluer", "aim:er"), new _verb2.default("rescinder", "aim:er"), new _verb2.default("réséquer", "diss:équer"), new _verb2.default("réserver", "aim:er"), new _verb2.default("résider", "aim:er"), new _verb2.default("résigner", "aim:er"), new _verb2.default("résilier", "aim:er"), new _verb2.default("résiner", "aim:er"), new _verb2.default("résinifier", "aim:er"), new _verb2.default("résister", "aim:er"), new _verb2.default("resocialiser", "aim:er"), new _verb2.default("résonner", "aim:er"), new _verb2.default("résorber", "aim:er"), new _verb2.default("résoudre", "réso:udre"), new _verb2.default("respecter", "aim:er"), new _verb2.default("respirer", "aim:er"), new _verb2.default("resplendir", "fin:ir"), new _verb2.default("responsabiliser", "aim:er"), new _verb2.default("resquiller", "aim:er"), new _verb2.default("ressaigner", "aim:er"), new _verb2.default("ressaisir", "fin:ir"), new _verb2.default("ressasser", "aim:er"), new _verb2.default("ressauter", "aim:er"), new _verb2.default("ressayer", "pa:yer"), new _verb2.default("ressembler", "aim:er"), new _verb2.default("ressemeler", "app:eler"), new _verb2.default("ressemer", "s:emer"), new _verb2.default("ressentir", "men:tir"), new _verb2.default("resserrer", "aim:er"), new _verb2.default("resservir", "ser:vir"), new _verb2.default("ressortir", "men:tir"), new _verb2.default("ressouder", "aim:er"), new _verb2.default("ressourcer", "pla:cer"), new _verb2.default("ressuer", "aim:er"), new _verb2.default("ressurgir", "fin:ir"), new _verb2.default("ressusciter", "aim:er"), new _verb2.default("ressuyer", "netto:yer"), new _verb2.default("restaurer", "aim:er"), new _verb2.default("rester", "aim:er"), new _verb2.default("restituer", "aim:er"), new _verb2.default("restreindre", "crai:ndre"), new _verb2.default("restructurer", "aim:er"), new _verb2.default("résulter", "aim:er"), new _verb2.default("résumer", "aim:er"), new _verb2.default("resurchauffer", "aim:er"), new _verb2.default("resurgir", "fin:ir"), new _verb2.default("rétablir", "fin:ir"), new _verb2.default("retailler", "aim:er"), new _verb2.default("rétamer", "aim:er"), new _verb2.default("retaper", "aim:er"), new _verb2.default("retapisser", "aim:er"), new _verb2.default("retarder", "aim:er"), new _verb2.default("retâter", "aim:er"), new _verb2.default("reteindre", "crai:ndre"), new _verb2.default("retendre", "ten:dre"), new _verb2.default("retenir", "t:enir"), new _verb2.default("retenter", "aim:er"), new _verb2.default("retentir", "fin:ir"), new _verb2.default("retercer", "pla:cer"), new _verb2.default("reterser", "aim:er"), new _verb2.default("réticuler", "aim:er"), new _verb2.default("retirer", "aim:er"), new _verb2.default("retisser", "aim:er"), new _verb2.default("retomber", "aim:er"), new _verb2.default("retondre", "ten:dre"), new _verb2.default("retordre", "ten:dre"), new _verb2.default("rétorquer", "aim:er"), new _verb2.default("retoucher", "aim:er"), new _verb2.default("retouper", "aim:er"), new _verb2.default("retourner", "aim:er"), new _verb2.default("retracer", "pla:cer"), new _verb2.default("rétracter", "aim:er"), new _verb2.default("retraduire", "condui:re"), new _verb2.default("retraiter", "aim:er"), new _verb2.default("retrancher", "aim:er"), new _verb2.default("retranscrire", "écri:re"), new _verb2.default("retransmettre", "m:ettre"), new _verb2.default("retravailler", "aim:er"), new _verb2.default("retraverser", "aim:er"), new _verb2.default("rétrécir", "fin:ir"), new _verb2.default("rétreindre", "crai:ndre"), new _verb2.default("retremper", "aim:er"), new _verb2.default("rétribuer", "aim:er"), new _verb2.default("rétroagir", "fin:ir"), new _verb2.default("rétrocéder", "c:éder"), new _verb2.default("rétrograder", "aim:er"), new _verb2.default("retrousser", "aim:er"), new _verb2.default("retrouver", "aim:er"), new _verb2.default("réunifier", "aim:er"), new _verb2.default("réunir", "fin:ir"), new _verb2.default("réussir", "fin:ir"), new _verb2.default("réutiliser", "aim:er"), new _verb2.default("revacciner", "aim:er"), new _verb2.default("revaloriser", "aim:er"), new _verb2.default("revancher", "aim:er"), new _verb2.default("rêvasser", "aim:er"), new _verb2.default("réveiller", "aim:er"), new _verb2.default("réveillonner", "aim:er"), new _verb2.default("révéler", "rév:éler"), new _verb2.default("revendiquer", "aim:er"), new _verb2.default("revendre", "ten:dre"), new _verb2.default("revenir", "t:enir"), new _verb2.default("réverbérer", "réf:érer"), new _verb2.default("revercher", "aim:er"), new _verb2.default("reverdir", "fin:ir"), new _verb2.default("révérer", "réf:érer"), new _verb2.default("rêver", "aim:er"), new _verb2.default("reverser", "aim:er"), new _verb2.default("revêtir", "vêt:ir"), new _verb2.default("revigorer", "aim:er"), new _verb2.default("revirer", "aim:er"), new _verb2.default("réviser", "aim:er"), new _verb2.default("revisser", "aim:er"), new _verb2.default("revitaliser", "aim:er"), new _verb2.default("revivifier", "aim:er"), new _verb2.default("revivre", "v:ivre"), new _verb2.default("revoir", "v:oir"), new _verb2.default("revoler", "aim:er"), new _verb2.default("révolter", "aim:er"), new _verb2.default("révolutionner", "aim:er"), new _verb2.default("révolvériser", "aim:er"), new _verb2.default("révoquer", "aim:er"), new _verb2.default("revoter", "aim:er"), new _verb2.default("révulser", "aim:er"), new _verb2.default("rewriter", "aim:er"), new _verb2.default("rhabiller", "aim:er"), new _verb2.default("rhumer", "aim:er"), new _verb2.default("ribler", "aim:er"), new _verb2.default("ribouler", "aim:er"), new _verb2.default("ricaner", "aim:er"), new _verb2.default("ricocher", "aim:er"), new _verb2.default("rider", "aim:er"), new _verb2.default("ridiculiser", "aim:er"), new _verb2.default("riffauder", "aim:er"), new _verb2.default("rifler", "aim:er"), new _verb2.default("rigidifier", "aim:er"), new _verb2.default("rigoler", "aim:er"), new _verb2.default("rimailler", "aim:er"), new _verb2.default("rimer", "aim:er"), new _verb2.default("rincer", "pla:cer"), new _verb2.default("ringarder", "aim:er"), new _verb2.default("rioter", "aim:er"), new _verb2.default("ripailler", "aim:er"), new _verb2.default("riper", "aim:er"), new _verb2.default("ripoliner", "aim:er"), new _verb2.default("riposter", "aim:er"), new _verb2.default("rire", "r:ire"), new _verb2.default("risquer", "aim:er"), new _verb2.default("rissoler", "aim:er"), new _verb2.default("ristourner", "aim:er"), new _verb2.default("ritualiser", "aim:er"), new _verb2.default("rivaliser", "aim:er"), new _verb2.default("river", "aim:er"), new _verb2.default("riveter", "j:eter"), new _verb2.default("rober", "aim:er"), new _verb2.default("robotiser", "aim:er"), new _verb2.default("rocher", "aim:er"), new _verb2.default("rocouer", "aim:er"), new _verb2.default("rocquer", "aim:er"), new _verb2.default("rôdailler", "aim:er"), new _verb2.default("roder", "aim:er"), new _verb2.default("rôder", "aim:er"), new _verb2.default("rogner", "aim:er"), new _verb2.default("rognonner", "aim:er"), new _verb2.default("roidir", "fin:ir"), new _verb2.default("romancer", "pla:cer"), new _verb2.default("romaniser", "aim:er"), new _verb2.default("rompre", "rom:pre"), new _verb2.default("ronchonner", "aim:er"), new _verb2.default("rondir", "fin:ir"), new _verb2.default("ronéoter", "aim:er"), new _verb2.default("ronéotyper", "aim:er"), new _verb2.default("ronflaguer", "aim:er"), new _verb2.default("ronfler", "aim:er"), new _verb2.default("ronger", "man:ger"), new _verb2.default("ronronner", "aim:er"), new _verb2.default("ronsardiser", "aim:er"), new _verb2.default("roquer", "aim:er"), new _verb2.default("roser", "aim:er"), new _verb2.default("rosir", "fin:ir"), new _verb2.default("rosser", "aim:er"), new _verb2.default("roter", "aim:er"), new _verb2.default("rôtir", "fin:ir"), new _verb2.default("roucouler", "aim:er"), new _verb2.default("rouer", "aim:er"), new _verb2.default("rougeoyer", "netto:yer"), new _verb2.default("rougir", "fin:ir"), new _verb2.default("rouiller", "aim:er"), new _verb2.default("rouir", "fin:ir"), new _verb2.default("rouler", "aim:er"), new _verb2.default("roulotter", "aim:er"), new _verb2.default("roupiller", "aim:er"), new _verb2.default("rouscailler", "aim:er"), new _verb2.default("rouspéter", "décr:éter"), new _verb2.default("roussir", "fin:ir"), new _verb2.default("roustir", "fin:ir"), new _verb2.default("router", "aim:er"), new _verb2.default("rouvrir", "ouv:rir"), new _verb2.default("rubaner", "aim:er"), new _verb2.default("rubéfier", "aim:er"), new _verb2.default("rucher", "aim:er"), new _verb2.default("rudenter", "aim:er"), new _verb2.default("rudoyer", "netto:yer"), new _verb2.default("ruer", "aim:er"), new _verb2.default("rugir", "fin:ir"), new _verb2.default("ruiler", "aim:er"), new _verb2.default("ruiner", "aim:er"), new _verb2.default("ruisseler", "app:eler"), new _verb2.default("ruminer", "aim:er"), new _verb2.default("rupiner", "aim:er"), new _verb2.default("ruser", "aim:er"), new _verb2.default("russifier", "aim:er"), new _verb2.default("rustiquer", "aim:er"), new _verb2.default("rutiler", "aim:er"), new _verb2.default("rythmer", "aim:er"), new _verb2.default("sabler", "aim:er"), new _verb2.default("sablonner", "aim:er"), new _verb2.default("saborder", "aim:er"), new _verb2.default("saboter", "aim:er"), new _verb2.default("sabouler", "aim:er"), new _verb2.default("sabrer", "aim:er"), new _verb2.default("sacagner", "aim:er"), new _verb2.default("saccader", "aim:er"), new _verb2.default("saccager", "man:ger"), new _verb2.default("saccharifier", "aim:er"), new _verb2.default("sacquer", "aim:er"), new _verb2.default("sacraliser", "aim:er"), new _verb2.default("sacrer", "aim:er"), new _verb2.default("sacrifier", "aim:er"), new _verb2.default("safraner", "aim:er"), new _verb2.default("saietter", "aim:er"), new _verb2.default("saigner", "aim:er"), new _verb2.default("sailler", "aim:er"), new _verb2.default("saillir", "saill:ir"), new _verb2.default("saisir", "fin:ir"), new _verb2.default("saisonner", "aim:er"), new _verb2.default("salarier", "aim:er"), new _verb2.default("saler", "aim:er"), new _verb2.default("salifier", "aim:er"), new _verb2.default("salir", "fin:ir"), new _verb2.default("saliver", "aim:er"), new _verb2.default("saloper", "aim:er"), new _verb2.default("salpêtrer", "aim:er"), new _verb2.default("saluer", "aim:er"), new _verb2.default("sanctifier", "aim:er"), new _verb2.default("sanctionner", "aim:er"), new _verb2.default("sanctuariser", "aim:er"), new _verb2.default("sandwicher", "aim:er"), new _verb2.default("sangler", "aim:er"), new _verb2.default("sangloter", "aim:er"), new _verb2.default("santonner", "aim:er"), new _verb2.default("saouler", "aim:er"), new _verb2.default("saper", "aim:er"), new _verb2.default("saponifier", "aim:er"), new _verb2.default("saquer", "aim:er"), new _verb2.default("sarcler", "aim:er"), new _verb2.default("sarmenter", "aim:er"), new _verb2.default("sasser", "aim:er"), new _verb2.default("sataner", "aim:er"), new _verb2.default("satelliser", "aim:er"), new _verb2.default("satiner", "aim:er"), new _verb2.default("satiriser", "aim:er"), new _verb2.default("satisfaire", "f:aire"), new _verb2.default("satonner", "aim:er"), new _verb2.default("saturer", "aim:er"), new _verb2.default("saucer", "pla:cer"), new _verb2.default("saucissonner", "aim:er"), new _verb2.default("saumurer", "aim:er"), new _verb2.default("sauner", "aim:er"), new _verb2.default("saupoudrer", "aim:er"), new _verb2.default("saurer", "aim:er"), new _verb2.default("saurir", "fin:ir"), new _verb2.default("sauter", "aim:er"), new _verb2.default("sautiller", "aim:er"), new _verb2.default("sauvegarder", "aim:er"), new _verb2.default("sauver", "aim:er"), new _verb2.default("savoir", "s:avoir"), new _verb2.default("savonner", "aim:er"), new _verb2.default("savourer", "aim:er"), new _verb2.default("scalper", "aim:er"), new _verb2.default("scandaliser", "aim:er"), new _verb2.default("scander", "aim:er"), new _verb2.default("scarifier", "aim:er"), new _verb2.default("sceller", "aim:er"), new _verb2.default("scheider", "aim:er"), new _verb2.default("schématiser", "aim:er"), new _verb2.default("schlinguer", "aim:er"), new _verb2.default("schlitter", "aim:er"), new _verb2.default("scier", "aim:er"), new _verb2.default("scinder", "aim:er"), new _verb2.default("scintiller", "aim:er"), new _verb2.default("sciotter", "aim:er"), new _verb2.default("scissionner", "aim:er"), new _verb2.default("scléroser", "aim:er"), new _verb2.default("scolariser", "aim:er"), new _verb2.default("scotcher", "aim:er"), new _verb2.default("scotomiser", "aim:er"), new _verb2.default("scratcher", "aim:er"), new _verb2.default("scribouiller", "aim:er"), new _verb2.default("scruter", "aim:er"), new _verb2.default("sculpter", "aim:er"), new _verb2.default("sécher", "s:écher"), new _verb2.default("seconder", "aim:er"), new _verb2.default("secouer", "aim:er"), new _verb2.default("secourir", "cour:ir"), new _verb2.default("sécréter", "décr:éter"), new _verb2.default("sectionner", "aim:er"), new _verb2.default("sectoriser", "aim:er"), new _verb2.default("séculariser", "aim:er"), new _verb2.default("sécuriser", "aim:er"), new _verb2.default("sédentariser", "aim:er"), new _verb2.default("sédimenter", "aim:er"), new _verb2.default("séduire", "condui:re"), new _verb2.default("segmenter", "aim:er"), new _verb2.default("séjourner", "aim:er"), new _verb2.default("sélectionner", "aim:er"), new _verb2.default("seller", "aim:er"), new _verb2.default("sembler", "aim:er"), new _verb2.default("semer", "s:emer"), new _verb2.default("semoncer", "pla:cer"), new _verb2.default("sensibiliser", "aim:er"), new _verb2.default("sentir", "men:tir"), new _verb2.default("seoir", "s:eoir"), new _verb2.default("séparer", "aim:er"), new _verb2.default("septupler", "aim:er"), new _verb2.default("séquestrer", "aim:er"), new _verb2.default("sérancer", "pla:cer"), new _verb2.default("serfouir", "fin:ir"), new _verb2.default("sérialiser", "aim:er"), new _verb2.default("sérier", "aim:er"), new _verb2.default("seriner", "aim:er"), new _verb2.default("seringuer", "aim:er"), new _verb2.default("sermonner", "aim:er"), new _verb2.default("serpenter", "aim:er"), new _verb2.default("serrer", "aim:er"), new _verb2.default("sertir", "fin:ir"), new _verb2.default("servir", "ser:vir"), new _verb2.default("sévir", "fin:ir"), new _verb2.default("sevrer", "s:evrer"), new _verb2.default("sextupler", "aim:er"), new _verb2.default("sexualiser", "aim:er"), new _verb2.default("shampooingner", "aim:er"), new _verb2.default("shampouiner", "aim:er"), new _verb2.default("shooter", "aim:er"), new _verb2.default("shunter", "aim:er"), new _verb2.default("sidérer", "réf:érer"), new _verb2.default("siéger", "abr:éger"), new _verb2.default("siffler", "aim:er"), new _verb2.default("siffloter", "aim:er"), new _verb2.default("signaler", "aim:er"), new _verb2.default("signaliser", "aim:er"), new _verb2.default("signer", "aim:er"), new _verb2.default("signifier", "aim:er"), new _verb2.default("silhouetter", "aim:er"), new _verb2.default("silicatiser", "aim:er"), new _verb2.default("siliconer", "aim:er"), new _verb2.default("silicoser", "aim:er"), new _verb2.default("sillonner", "aim:er"), new _verb2.default("similiser", "aim:er"), new _verb2.default("simplifier", "aim:er"), new _verb2.default("simuler", "aim:er"), new _verb2.default("singer", "man:ger"), new _verb2.default("singulariser", "aim:er"), new _verb2.default("siniser", "aim:er"), new _verb2.default("sintériser", "aim:er"), new _verb2.default("siphonner", "aim:er"), new _verb2.default("siroter", "aim:er"), new _verb2.default("situer", "aim:er"), new _verb2.default("skier", "aim:er"), new _verb2.default("slalomer", "aim:er"), new _verb2.default("slaviser", "aim:er"), new _verb2.default("smasher", "aim:er"), new _verb2.default("smiller", "aim:er"), new _verb2.default("sniffer", "aim:er"), new _verb2.default("snober", "aim:er"), new _verb2.default("socialiser", "aim:er"), new _verb2.default("socratiser", "aim:er"), new _verb2.default("sodomiser", "aim:er"), new _verb2.default("soigner", "aim:er"), new _verb2.default("solariser", "aim:er"), new _verb2.default("solder", "aim:er"), new _verb2.default("solenniser", "aim:er"), new _verb2.default("solfier", "aim:er"), new _verb2.default("solidariser", "aim:er"), new _verb2.default("solidifier", "aim:er"), new _verb2.default("solifluer", "aim:er"), new _verb2.default("soliloquer", "aim:er"), new _verb2.default("solliciter", "aim:er"), new _verb2.default("solmiser", "aim:er"), new _verb2.default("solubiliser", "aim:er"), new _verb2.default("solutionner", "aim:er"), new _verb2.default("somatiser", "aim:er"), new _verb2.default("sombrer", "aim:er"), new _verb2.default("sommeiller", "aim:er"), new _verb2.default("sommer", "aim:er"), new _verb2.default("somnoler", "aim:er"), new _verb2.default("sonder", "aim:er"), new _verb2.default("songer", "man:ger"), new _verb2.default("sonnailler", "aim:er"), new _verb2.default("sonner", "aim:er"), new _verb2.default("sonoriser", "aim:er"), new _verb2.default("sophistiquer", "aim:er"), new _verb2.default("sorguer", "aim:er"), new _verb2.default("sortir", "men:tir"), new _verb2.default("soubresauter", "aim:er"), new _verb2.default("soucheter", "j:eter"), new _verb2.default("soucier", "aim:er"), new _verb2.default("souder", "aim:er"), new _verb2.default("soudoyer", "netto:yer"), new _verb2.default("souffler", "aim:er"), new _verb2.default("souffleter", "j:eter"), new _verb2.default("souffrir", "ouv:rir"), new _verb2.default("soufrer", "aim:er"), new _verb2.default("souhaiter", "aim:er"), new _verb2.default("souiller", "aim:er"), new _verb2.default("soulager", "man:ger"), new _verb2.default("soûler", "aim:er"), new _verb2.default("soulever", "l:ever"), new _verb2.default("souligner", "aim:er"), new _verb2.default("soumettre", "m:ettre"), new _verb2.default("soumissionner", "aim:er"), new _verb2.default("soupçonner", "aim:er"), new _verb2.default("souper", "aim:er"), new _verb2.default("soupeser", "p:eser"), new _verb2.default("soupirer", "aim:er"), new _verb2.default("souquer", "aim:er"), new _verb2.default("sourciller", "aim:er"), new _verb2.default("sourdiner", "aim:er"), new _verb2.default("sourdre", "s:ourdre"), new _verb2.default("sourire", "r:ire"), new _verb2.default("sous-alimenter", "aim:er"), new _verb2.default("souscrire", "écri:re"), new _verb2.default("sous-entendre", "ten:dre"), new _verb2.default("sous-estimer", "aim:er"), new _verb2.default("sous-évaluer", "aim:er"), new _verb2.default("sous-exploiter", "aim:er"), new _verb2.default("sous-exposer", "aim:er"), new _verb2.default("sous-louer", "aim:er"), new _verb2.default("sous-payer", "pa:yer"), new _verb2.default("sous-tendre", "ten:dre"), new _verb2.default("sous-titrer", "aim:er"), new _verb2.default("soustraire", "extra:ire"), new _verb2.default("sous-traiter", "aim:er"), new _verb2.default("sous-utiliser", "aim:er"), new _verb2.default("sous-virer", "aim:er"), new _verb2.default("soutacher", "aim:er"), new _verb2.default("soutenir", "t:enir"), new _verb2.default("soutirer", "aim:er"), new _verb2.default("souvenir", "t:enir"), new _verb2.default("soviétiser", "aim:er"), new _verb2.default("spathifier", "aim:er"), new _verb2.default("spatialiser", "aim:er"), new _verb2.default("spécialiser", "aim:er"), new _verb2.default("spécifier", "aim:er"), new _verb2.default("spéculer", "aim:er"), new _verb2.default("sphacéler", "rév:éler"), new _verb2.default("spiraler", "aim:er"), new _verb2.default("spiritualiser", "aim:er"), new _verb2.default("spitter", "aim:er"), new _verb2.default("splitter", "aim:er"), new _verb2.default("spolier", "aim:er"), new _verb2.default("sponsoriser", "aim:er"), new _verb2.default("sporuler", "aim:er"), new _verb2.default("sprinter", "aim:er"), new _verb2.default("squattériser", "aim:er"), new _verb2.default("squatter", "aim:er"), new _verb2.default("stabiliser", "aim:er"), new _verb2.default("staffer", "aim:er"), new _verb2.default("stagner", "aim:er"), new _verb2.default("staliniser", "aim:er"), new _verb2.default("standardiser", "aim:er"), new _verb2.default("starifier", "aim:er"), new _verb2.default("stariser", "aim:er"), new _verb2.default("stationner", "aim:er"), new _verb2.default("statuer", "aim:er"), new _verb2.default("statufier", "aim:er"), new _verb2.default("sténographier", "aim:er"), new _verb2.default("sténotyper", "aim:er"), new _verb2.default("stéréotyper", "aim:er"), new _verb2.default("stérer", "réf:érer"), new _verb2.default("stériliser", "aim:er"), new _verb2.default("stigmatiser", "aim:er"), new _verb2.default("stimuler", "aim:er"), new _verb2.default("stipendier", "aim:er"), new _verb2.default("stipuler", "aim:er"), new _verb2.default("stocker", "aim:er"), new _verb2.default("stopper", "aim:er"), new _verb2.default("stranguler", "aim:er"), new _verb2.default("stratifier", "aim:er"), new _verb2.default("stresser", "aim:er"), new _verb2.default("striduler", "aim:er"), new _verb2.default("strier", "aim:er"), new _verb2.default("stripper", "aim:er"), new _verb2.default("striquer", "aim:er"), new _verb2.default("structurer", "aim:er"), new _verb2.default("stupéfier", "aim:er"), new _verb2.default("stuquer", "aim:er"), new _verb2.default("styler", "aim:er"), new _verb2.default("styliser", "aim:er"), new _verb2.default("subdéléguer", "l:éguer"), new _verb2.default("subdiviser", "aim:er"), new _verb2.default("subir", "fin:ir"), new _verb2.default("subjuguer", "aim:er"), new _verb2.default("sublimer", "aim:er"), new _verb2.default("submerger", "man:ger"), new _verb2.default("subodorer", "aim:er"), new _verb2.default("subordonner", "aim:er"), new _verb2.default("suborner", "aim:er"), new _verb2.default("subroger", "man:ger"), new _verb2.default("subsister", "aim:er"), new _verb2.default("substantiver", "aim:er"), new _verb2.default("substituer", "aim:er"), new _verb2.default("subsumer", "aim:er"), new _verb2.default("subtiliser", "aim:er"), new _verb2.default("subvenir", "t:enir"), new _verb2.default("subventionner", "aim:er"), new _verb2.default("subvertir", "fin:ir"), new _verb2.default("succéder", "c:éder"), new _verb2.default("succomber", "aim:er"), new _verb2.default("sucer", "pla:cer"), new _verb2.default("suçoter", "aim:er"), new _verb2.default("sucrer", "aim:er"), new _verb2.default("suer", "aim:er"), new _verb2.default("suffire", "suff:ire"), new _verb2.default("suffixer", "aim:er"), new _verb2.default("suffoquer", "aim:er"), new _verb2.default("suggérer", "réf:érer"), new _verb2.default("suggestionner", "aim:er"), new _verb2.default("suicider", "aim:er"), new _verb2.default("suifer", "aim:er"), new _verb2.default("suiffer", "aim:er"), new _verb2.default("suinter", "aim:er"), new _verb2.default("suivre", "sui:vre"), new _verb2.default("sulfater", "aim:er"), new _verb2.default("sulfiter", "aim:er"), new _verb2.default("sulfoner", "aim:er"), new _verb2.default("sulfurer", "aim:er"), new _verb2.default("superfinir", "fin:ir"), new _verb2.default("superposer", "aim:er"), new _verb2.default("superviser", "aim:er"), new _verb2.default("supplanter", "aim:er"), new _verb2.default("suppléer", "aim:er"), new _verb2.default("supplémenter", "aim:er"), new _verb2.default("supplicier", "aim:er"), new _verb2.default("supplier", "aim:er"), new _verb2.default("supporter", "aim:er"), new _verb2.default("supposer", "aim:er"), new _verb2.default("supprimer", "aim:er"), new _verb2.default("suppurer", "aim:er"), new _verb2.default("supputer", "aim:er"), new _verb2.default("surabonder", "aim:er"), new _verb2.default("surajouter", "aim:er"), new _verb2.default("suralimenter", "aim:er"), new _verb2.default("surbaisser", "aim:er"), new _verb2.default("surcharger", "man:ger"), new _verb2.default("surchauffer", "aim:er"), new _verb2.default("surclasser", "aim:er"), new _verb2.default("surcomprimer", "aim:er"), new _verb2.default("surcontrer", "aim:er"), new _verb2.default("surcouper", "aim:er"), new _verb2.default("surdorer", "aim:er"), new _verb2.default("surdouer", "aim:er"), new _verb2.default("surédifier", "aim:er"), new _verb2.default("surélever", "l:ever"), new _verb2.default("surenchérir", "fin:ir"), new _verb2.default("surentraîner", "aim:er"), new _verb2.default("suréquiper", "aim:er"), new _verb2.default("surestimer", "aim:er"), new _verb2.default("surévaluer", "aim:er"), new _verb2.default("surexciter", "aim:er"), new _verb2.default("surexploiter", "aim:er"), new _verb2.default("surexposer", "aim:er"), new _verb2.default("surfacer", "pla:cer"), new _verb2.default("surfaire", "f:aire"), new _verb2.default("surfer", "aim:er"), new _verb2.default("surfiler", "aim:er"), new _verb2.default("surgeler", "p:eler"), new _verb2.default("surgeonner", "aim:er"), new _verb2.default("surgir", "fin:ir"), new _verb2.default("surglacer", "pla:cer"), new _verb2.default("surhausser", "aim:er"), new _verb2.default("surimposer", "aim:er"), new _verb2.default("suriner", "aim:er"), new _verb2.default("surir", "fin:ir"), new _verb2.default("surjaler", "aim:er"), new _verb2.default("surjecter", "aim:er"), new _verb2.default("surjeter", "j:eter"), new _verb2.default("surlier", "aim:er"), new _verb2.default("surlouer", "aim:er"), new _verb2.default("surmédicaliser", "aim:er"), new _verb2.default("surmener", "m:ener"), new _verb2.default("surmonter", "aim:er"), new _verb2.default("surmouler", "aim:er"), new _verb2.default("surnager", "man:ger"), new _verb2.default("surnommer", "aim:er"), new _verb2.default("suroxyder", "aim:er"), new _verb2.default("surpasser", "aim:er"), new _verb2.default("surpayer", "pa:yer"), new _verb2.default("surpeupler", "aim:er"), new _verb2.default("surpiquer", "aim:er"), new _verb2.default("surplomber", "aim:er"), new _verb2.default("surprendre", "pr:endre"), new _verb2.default("surproduire", "condui:re"), new _verb2.default("sursaturer", "aim:er"), new _verb2.default("sursauter", "aim:er"), new _verb2.default("sursemer", "s:emer"), new _verb2.default("surseoir", "surs:eoir"), new _verb2.default("sursoir", "surs:oir"), new _verb2.default("surtaxer", "aim:er"), new _verb2.default("surveiller", "aim:er"), new _verb2.default("survenir", "t:enir"), new _verb2.default("survirer", "aim:er"), new _verb2.default("survivre", "v:ivre"), new _verb2.default("survoler", "aim:er"), new _verb2.default("survolter", "aim:er"), new _verb2.default("susciter", "aim:er"), new _verb2.default("suspecter", "aim:er"), new _verb2.default("suspendre", "ten:dre"), new _verb2.default("sustenter", "aim:er"), new _verb2.default("susurrer", "aim:er"), new _verb2.default("suturer", "aim:er"), new _verb2.default("swinguer", "aim:er"), new _verb2.default("syllaber", "aim:er"), new _verb2.default("symboliser", "aim:er"), new _verb2.default("symétriser", "aim:er"), new _verb2.default("sympathiser", "aim:er"), new _verb2.default("synchroniser", "aim:er"), new _verb2.default("syncoper", "aim:er"), new _verb2.default("syncristalliser", "aim:er"), new _verb2.default("syndicaliser", "aim:er"), new _verb2.default("syndiquer", "aim:er"), new _verb2.default("synthétiser", "aim:er"), new _verb2.default("syntoniser", "aim:er"), new _verb2.default("systématiser", "aim:er"), new _verb2.default("tabasser", "aim:er"), new _verb2.default("tabler", "aim:er"), new _verb2.default("tabouer", "aim:er"), new _verb2.default("tabouiser", "aim:er"), new _verb2.default("tabuler", "aim:er"), new _verb2.default("tacher", "aim:er"), new _verb2.default("tâcher", "aim:er"), new _verb2.default("tacheter", "j:eter"), new _verb2.default("taillader", "aim:er"), new _verb2.default("tailler", "aim:er"), new _verb2.default("taire", "t:aire"), new _verb2.default("taler", "aim:er"), new _verb2.default("taller", "aim:er"), new _verb2.default("talocher", "aim:er"), new _verb2.default("talonner", "aim:er"), new _verb2.default("talquer", "aim:er"), new _verb2.default("tambouriner", "aim:er"), new _verb2.default("tamiser", "aim:er"), new _verb2.default("tamponner", "aim:er"), new _verb2.default("tancer", "pla:cer"), new _verb2.default("tanguer", "aim:er"), new _verb2.default("taniser", "aim:er"), new _verb2.default("tanner", "aim:er"), new _verb2.default("tanniser", "aim:er"), new _verb2.default("tapager", "man:ger"), new _verb2.default("taper", "aim:er"), new _verb2.default("tapiner", "aim:er"), new _verb2.default("tapir", "fin:ir"), new _verb2.default("tapisser", "aim:er"), new _verb2.default("taponner", "aim:er"), new _verb2.default("tapoter", "aim:er"), new _verb2.default("taquer", "aim:er"), new _verb2.default("taquiner", "aim:er"), new _verb2.default("tarabiscoter", "aim:er"), new _verb2.default("tarabuster", "aim:er"), new _verb2.default("tarauder", "aim:er"), new _verb2.default("tarder", "aim:er"), new _verb2.default("tarer", "aim:er"), new _verb2.default("targuer", "aim:er"), new _verb2.default("tarifer", "aim:er"), new _verb2.default("tarifier", "aim:er"), new _verb2.default("tarir", "fin:ir"), new _verb2.default("tartiner", "aim:er"), new _verb2.default("tartir", "fin:ir"), new _verb2.default("tasser", "aim:er"), new _verb2.default("tâter", "aim:er"), new _verb2.default("tatillonner", "aim:er"), new _verb2.default("tâtonner", "aim:er"), new _verb2.default("tatouer", "aim:er"), new _verb2.default("taveler", "app:eler"), new _verb2.default("taveller", "aim:er"), new _verb2.default("taxer", "aim:er"), new _verb2.default("tayloriser", "aim:er"), new _verb2.default("techniciser", "aim:er"), new _verb2.default("techniser", "aim:er"), new _verb2.default("technocratiser", "aim:er"), new _verb2.default("teiller", "aim:er"), new _verb2.default("teindre", "crai:ndre"), new _verb2.default("teinter", "aim:er"), new _verb2.default("télécommander", "aim:er"), new _verb2.default("télécopier", "aim:er"), new _verb2.default("télédiffuser", "aim:er"), new _verb2.default("télégraphier", "aim:er"), new _verb2.default("téléguider", "aim:er"), new _verb2.default("téléphoner", "aim:er"), new _verb2.default("télescoper", "aim:er"), new _verb2.default("téléviser", "aim:er"), new _verb2.default("télexer", "aim:er"), new _verb2.default("témoigner", "aim:er"), new _verb2.default("tempérer", "réf:érer"), new _verb2.default("tempêter", "aim:er"), new _verb2.default("temporiser", "aim:er"), new _verb2.default("tenailler", "aim:er"), new _verb2.default("tendre", "ten:dre"), new _verb2.default("tenir", "t:enir"), new _verb2.default("tenonner", "aim:er"), new _verb2.default("ténoriser", "aim:er"), new _verb2.default("tensoriser", "aim:er"), new _verb2.default("tenter", "aim:er"), new _verb2.default("tercer", "pla:cer"), new _verb2.default("tergiverser", "aim:er"), new _verb2.default("terminer", "aim:er"), new _verb2.default("ternir", "fin:ir"), new _verb2.default("terrasser", "aim:er"), new _verb2.default("terreauter", "aim:er"), new _verb2.default("terrer", "aim:er"), new _verb2.default("terrifier", "aim:er"), new _verb2.default("terrir", "fin:ir"), new _verb2.default("terroriser", "aim:er"), new _verb2.default("terser", "aim:er"), new _verb2.default("tester", "aim:er"), new _verb2.default("tétaniser", "aim:er"), new _verb2.default("téter", "décr:éter"), new _verb2.default("texturer", "aim:er"), new _verb2.default("texturiser", "aim:er"), new _verb2.default("théâtraliser", "aim:er"), new _verb2.default("thématiser", "aim:er"), new _verb2.default("théoriser", "aim:er"), new _verb2.default("thésauriser", "aim:er"), new _verb2.default("tictaquer", "aim:er"), new _verb2.default("tiédir", "fin:ir"), new _verb2.default("tiercer", "pla:cer"), new _verb2.default("tigrer", "aim:er"), new _verb2.default("tiller", "aim:er"), new _verb2.default("timbrer", "aim:er"), new _verb2.default("tinter", "aim:er"), new _verb2.default("tintinnabuler", "aim:er"), new _verb2.default("tiquer", "aim:er"), new _verb2.default("tirailler", "aim:er"), new _verb2.default("tire-bouchonner", "aim:er"), new _verb2.default("tirebouchonner", "aim:er"), new _verb2.default("tirer", "aim:er"), new _verb2.default("tiser", "aim:er"), new _verb2.default("tisonner", "aim:er"), new _verb2.default("tisser", "aim:er"), new _verb2.default("titiller", "aim:er"), new _verb2.default("titrer", "aim:er"), new _verb2.default("tituber", "aim:er"), new _verb2.default("titulariser", "aim:er"), new _verb2.default("toaster", "aim:er"), new _verb2.default("toiler", "aim:er"), new _verb2.default("toiletter", "aim:er"), new _verb2.default("toiser", "aim:er"), new _verb2.default("tolérer", "réf:érer"), new _verb2.default("tomber", "aim:er"), new _verb2.default("tomer", "aim:er"), new _verb2.default("tondre", "ten:dre"), new _verb2.default("tonifier", "aim:er"), new _verb2.default("tonitruer", "aim:er"), new _verb2.default("tonner", "aim:er"), new _verb2.default("tonsurer", "aim:er"), new _verb2.default("tontiner", "aim:er"), new _verb2.default("toper", "aim:er"), new _verb2.default("topicaliser", "aim:er"), new _verb2.default("toquer", "aim:er"), new _verb2.default("torcher", "aim:er"), new _verb2.default("torchonner", "aim:er"), new _verb2.default("tordre", "ten:dre"), new _verb2.default("toréer", "aim:er"), new _verb2.default("toronner", "aim:er"), new _verb2.default("torpiller", "aim:er"), new _verb2.default("torréfier", "aim:er"), new _verb2.default("torsader", "aim:er"), new _verb2.default("tortiller", "aim:er"), new _verb2.default("tortorer", "aim:er"), new _verb2.default("torturer", "aim:er"), new _verb2.default("totaliser", "aim:er"), new _verb2.default("toucher", "aim:er"), new _verb2.default("touer", "aim:er"), new _verb2.default("touiller", "aim:er"), new _verb2.default("toupiller", "aim:er"), new _verb2.default("tourber", "aim:er"), new _verb2.default("tourbillonner", "aim:er"), new _verb2.default("tourillonner", "aim:er"), new _verb2.default("tourmenter", "aim:er"), new _verb2.default("tournailler", "aim:er"), new _verb2.default("tournasser", "aim:er"), new _verb2.default("tournebouler", "aim:er"), new _verb2.default("tourner", "aim:er"), new _verb2.default("tournicoter", "aim:er"), new _verb2.default("tourniller", "aim:er"), new _verb2.default("tourniquer", "aim:er"), new _verb2.default("tournoyer", "netto:yer"), new _verb2.default("toussailler", "aim:er"), new _verb2.default("tousser", "aim:er"), new _verb2.default("toussoter", "aim:er"), new _verb2.default("trabouler", "aim:er"), new _verb2.default("tracaner", "aim:er"), new _verb2.default("tracasser", "aim:er"), new _verb2.default("tracer", "pla:cer"), new _verb2.default("tracter", "aim:er"), new _verb2.default("traduire", "condui:re"), new _verb2.default("traficoter", "aim:er"), new _verb2.default("trafiquer", "aim:er"), new _verb2.default("trahir", "fin:ir"), new _verb2.default("traînailler", "aim:er"), new _verb2.default("traînasser", "aim:er"), new _verb2.default("traîner", "aim:er"), new _verb2.default("traire", "extra:ire"), new _verb2.default("traiter", "aim:er"), new _verb2.default("tramer", "aim:er"), new _verb2.default("tranchefiler", "aim:er"), new _verb2.default("trancher", "aim:er"), new _verb2.default("tranquilliser", "aim:er"), new _verb2.default("transbahuter", "aim:er"), new _verb2.default("transborder", "aim:er"), new _verb2.default("transcender", "aim:er"), new _verb2.default("transcoder", "aim:er"), new _verb2.default("transcrire", "écri:re"), new _verb2.default("transférer", "réf:érer"), new _verb2.default("transfigurer", "aim:er"), new _verb2.default("transfiler", "aim:er"), new _verb2.default("transformer", "aim:er"), new _verb2.default("transfuser", "aim:er"), new _verb2.default("transgresser", "aim:er"), new _verb2.default("transhumer", "aim:er"), new _verb2.default("transiger", "man:ger"), new _verb2.default("transir", "fin:ir"), new _verb2.default("transistoriser", "aim:er"), new _verb2.default("transiter", "aim:er"), new _verb2.default("translater", "aim:er"), new _verb2.default("transmettre", "m:ettre"), new _verb2.default("transmigrer", "aim:er"), new _verb2.default("transmuer", "aim:er"), new _verb2.default("transmuter", "aim:er"), new _verb2.default("transparaître", "rep:aître"), new _verb2.default("transpercer", "pla:cer"), new _verb2.default("transpirer", "aim:er"), new _verb2.default("transplanter", "aim:er"), new _verb2.default("transporter", "aim:er"), new _verb2.default("transposer", "aim:er"), new _verb2.default("transsubstantier", "aim:er"), new _verb2.default("transsuder", "aim:er"), new _verb2.default("transvaser", "aim:er"), new _verb2.default("transvider", "aim:er"), new _verb2.default("traquer", "aim:er"), new _verb2.default("traumatiser", "aim:er"), new _verb2.default("travailler", "aim:er"), new _verb2.default("travailloter", "aim:er"), new _verb2.default("traverser", "aim:er"), new _verb2.default("travestir", "fin:ir"), new _verb2.default("trébucher", "aim:er"), new _verb2.default("tréfiler", "aim:er"), new _verb2.default("treillager", "man:ger"), new _verb2.default("treillisser", "aim:er"), new _verb2.default("trémater", "aim:er"), new _verb2.default("trembler", "aim:er"), new _verb2.default("trembloter", "aim:er"), new _verb2.default("trémousser", "aim:er"), new _verb2.default("tremper", "aim:er"), new _verb2.default("trémuler", "aim:er"), new _verb2.default("trépaner", "aim:er"), new _verb2.default("trépasser", "aim:er"), new _verb2.default("trépider", "aim:er"), new _verb2.default("trépigner", "aim:er"), new _verb2.default("tressaillir", "assaill:ir"), new _verb2.default("tressauter", "aim:er"), new _verb2.default("tresser", "aim:er"), new _verb2.default("treuiller", "aim:er"), new _verb2.default("trévirer", "aim:er"), new _verb2.default("triangulariser", "aim:er"), new _verb2.default("trianguler", "aim:er"), new _verb2.default("triballer", "aim:er"), new _verb2.default("tricher", "aim:er"), new _verb2.default("tricoter", "aim:er"), new _verb2.default("trier", "aim:er"), new _verb2.default("trifouiller", "aim:er"), new _verb2.default("triller", "aim:er"), new _verb2.default("trimarder", "aim:er"), new _verb2.default("trimbaler", "aim:er"), new _verb2.default("trimballer", "aim:er"), new _verb2.default("trimer", "aim:er"), new _verb2.default("tringler", "aim:er"), new _verb2.default("trinquer", "aim:er"), new _verb2.default("triompher", "aim:er"), new _verb2.default("tripatouiller", "aim:er"), new _verb2.default("tripler", "aim:er"), new _verb2.default("tripoter", "aim:er"), new _verb2.default("triquer", "aim:er"), new _verb2.default("trisser", "aim:er"), new _verb2.default("triturer", "aim:er"), new _verb2.default("trivialiser", "aim:er"), new _verb2.default("tromper", "aim:er"), new _verb2.default("trompeter", "j:eter"), new _verb2.default("tronçonner", "aim:er"), new _verb2.default("trôner", "aim:er"), new _verb2.default("tronquer", "aim:er"), new _verb2.default("tropicaliser", "aim:er"), new _verb2.default("troquer", "aim:er"), new _verb2.default("trotter", "aim:er"), new _verb2.default("trottiner", "aim:er"), new _verb2.default("troubler", "aim:er"), new _verb2.default("trouer", "aim:er"), new _verb2.default("troussequiner", "aim:er"), new _verb2.default("trousser", "aim:er"), new _verb2.default("trouver", "aim:er"), new _verb2.default("truander", "aim:er"), new _verb2.default("trucider", "aim:er"), new _verb2.default("truffer", "aim:er"), new _verb2.default("truquer", "aim:er"), new _verb2.default("trusquiner", "aim:er"), new _verb2.default("truster", "aim:er"), new _verb2.default("tuberculiner", "aim:er"), new _verb2.default("tuberculiniser", "aim:er"), new _verb2.default("tuberculiser", "aim:er"), new _verb2.default("tuber", "aim:er"), new _verb2.default("tuer", "aim:er"), new _verb2.default("tuiler", "aim:er"), new _verb2.default("tuméfier", "aim:er"), new _verb2.default("turbiner", "aim:er"), new _verb2.default("turlupiner", "aim:er"), new _verb2.default("tuteurer", "aim:er"), new _verb2.default("tutoyer", "netto:yer"), new _verb2.default("tuyauter", "aim:er"), new _verb2.default("twister", "aim:er"), new _verb2.default("tympaniser", "aim:er"), new _verb2.default("typer", "aim:er"), new _verb2.default("typiser", "aim:er"), new _verb2.default("tyranniser", "aim:er"), new _verb2.default("ulcérer", "réf:érer"), new _verb2.default("ultracentrifuger", "man:ger"), new _verb2.default("ultrafiltrer", "aim:er"), new _verb2.default("ululer", "aim:er"), new _verb2.default("unifier", "aim:er"), new _verb2.default("uniformiser", "aim:er"), new _verb2.default("unir", "fin:ir"), new _verb2.default("universaliser", "aim:er"), new _verb2.default("upériser", "aim:er"), new _verb2.default("urbanifier", "aim:er"), new _verb2.default("urbaniser", "aim:er"), new _verb2.default("urger", "man:ger"), new _verb2.default("uriner", "aim:er"), new _verb2.default("user", "aim:er"), new _verb2.default("usiner", "aim:er"), new _verb2.default("usurper", "aim:er"), new _verb2.default("utiliser", "aim:er"), new _verb2.default("vacciner", "aim:er"), new _verb2.default("vacher", "aim:er"), new _verb2.default("vaciller", "aim:er"), new _verb2.default("vacuoliser", "aim:er"), new _verb2.default("vadrouiller", "aim:er"), new _verb2.default("vagabonder", "aim:er"), new _verb2.default("vagir", "fin:ir"), new _verb2.default("vaguer", "aim:er"), new _verb2.default("vaincre", "vain:cre"), new _verb2.default("vaironner", "aim:er"), new _verb2.default("valdinguer", "aim:er"), new _verb2.default("valeter", "ach:eter"), new _verb2.default("valider", "aim:er"), new _verb2.default("valiser", "aim:er"), new _verb2.default("vallonner", "aim:er"), new _verb2.default("valoir", "va:loir"), new _verb2.default("valoriser", "aim:er"), new _verb2.default("valouser", "aim:er"), new _verb2.default("valser", "aim:er"), new _verb2.default("vamper", "aim:er"), new _verb2.default("vampiriser", "aim:er"), new _verb2.default("vandaliser", "aim:er"), new _verb2.default("vanner", "aim:er"), new _verb2.default("vanter", "aim:er"), new _verb2.default("vantiller", "aim:er"), new _verb2.default("vapocraquer", "aim:er"), new _verb2.default("vaporiser", "aim:er"), new _verb2.default("vaquer", "aim:er"), new _verb2.default("varapper", "aim:er"), new _verb2.default("varier", "aim:er"), new _verb2.default("varloper", "aim:er"), new _verb2.default("vasectomiser", "aim:er"), new _verb2.default("vaseliner", "aim:er"), new _verb2.default("vaser", "aim:er"), new _verb2.default("vasouiller", "aim:er"), new _verb2.default("vassaliser", "aim:er"), new _verb2.default("vaticiner", "aim:er"), new _verb2.default("vautrer", "aim:er"), new _verb2.default("vectoriser", "aim:er"), new _verb2.default("vedettiser", "aim:er"), new _verb2.default("végétaliser", "aim:er"), new _verb2.default("végéter", "décr:éter"), new _verb2.default("véhiculer", "aim:er"), new _verb2.default("veiller", "aim:er"), new _verb2.default("veiner", "aim:er"), new _verb2.default("vélariser", "aim:er"), new _verb2.default("vêler", "aim:er"), new _verb2.default("velouter", "aim:er"), new _verb2.default("velter", "aim:er"), new _verb2.default("vendanger", "man:ger"), new _verb2.default("vendiquer", "aim:er"), new _verb2.default("vendre", "ten:dre"), new _verb2.default("vénérer", "réf:érer"), new _verb2.default("vener", "m:ener"), new _verb2.default("venger", "man:ger"), new _verb2.default("venir", "t:enir"), new _verb2.default("venter", "aim:er"), new _verb2.default("ventiler", "aim:er"), new _verb2.default("ventouser", "aim:er"), new _verb2.default("ventrouiller", "aim:er"), new _verb2.default("verbaliser", "aim:er"), new _verb2.default("verbiager", "man:ger"), new _verb2.default("verdir", "fin:ir"), new _verb2.default("verdoyer", "netto:yer"), new _verb2.default("verduniser", "aim:er"), new _verb2.default("vergeter", "ach:eter"), new _verb2.default("verglacer", "pla:cer"), new _verb2.default("vérifier", "aim:er"), new _verb2.default("verjuter", "aim:er"), new _verb2.default("vermiculer", "aim:er"), new _verb2.default("vermifuger", "man:ger"), new _verb2.default("vermiller", "aim:er"), new _verb2.default("vermillonner", "aim:er"), new _verb2.default("vermouler", "aim:er"), new _verb2.default("vernaliser", "aim:er"), new _verb2.default("vernir", "fin:ir"), new _verb2.default("vernisser", "aim:er"), new _verb2.default("véroler", "aim:er"), new _verb2.default("véroter", "aim:er"), new _verb2.default("verrouiller", "aim:er"), new _verb2.default("verser", "aim:er"), new _verb2.default("versifier", "aim:er"), new _verb2.default("vert-de-griser", "aim:er"), new _verb2.default("verticaliser", "aim:er"), new _verb2.default("vertir", "fin:ir"), new _verb2.default("vesser", "aim:er"), new _verb2.default("vétiller", "aim:er"), new _verb2.default("vêtir", "vêt:ir"), new _verb2.default("vexer", "aim:er"), new _verb2.default("viabiliser", "aim:er"), new _verb2.default("viander", "aim:er"), new _verb2.default("vibrer", "aim:er"), new _verb2.default("vibrionner", "aim:er"), new _verb2.default("vicier", "aim:er"), new _verb2.default("victimer", "aim:er"), new _verb2.default("victimiser", "aim:er"), new _verb2.default("vidanger", "man:ger"), new _verb2.default("videler", "p:eler"), new _verb2.default("vider", "aim:er"), new _verb2.default("vidimer", "aim:er"), new _verb2.default("vieillir", "fin:ir"), new _verb2.default("vieller", "aim:er"), new _verb2.default("vigneter", "j:eter"), new _verb2.default("vilipender", "aim:er"), new _verb2.default("villégiaturer", "aim:er"), new _verb2.default("vinaigrer", "aim:er"), new _verb2.default("vinculer", "aim:er"), new _verb2.default("viner", "aim:er"), new _verb2.default("vinifier", "aim:er"), new _verb2.default("violacer", "pla:cer"), new _verb2.default("violenter", "aim:er"), new _verb2.default("violer", "aim:er"), new _verb2.default("violeter", "j:eter"), new _verb2.default("violoner", "aim:er"), new _verb2.default("vioquir", "fin:ir"), new _verb2.default("virailler", "aim:er"), new _verb2.default("virer", "aim:er"), new _verb2.default("virevolter", "aim:er"), new _verb2.default("virevousser", "aim:er"), new _verb2.default("virguler", "aim:er"), new _verb2.default("viriliser", "aim:er"), new _verb2.default("viroler", "aim:er"), new _verb2.default("viser", "aim:er"), new _verb2.default("visionner", "aim:er"), new _verb2.default("visiter", "aim:er"), new _verb2.default("visser", "aim:er"), new _verb2.default("visualiser", "aim:er"), new _verb2.default("vitaliser", "aim:er"), new _verb2.default("vitaminer", "aim:er"), new _verb2.default("vitrer", "aim:er"), new _verb2.default("vitrifier", "aim:er"), new _verb2.default("vitrioler", "aim:er"), new _verb2.default("vituler", "aim:er"), new _verb2.default("vitupérer", "réf:érer"), new _verb2.default("vivifier", "aim:er"), new _verb2.default("vivisecter", "aim:er"), new _verb2.default("vivoter", "aim:er"), new _verb2.default("vivre", "v:ivre"), new _verb2.default("vobuler", "aim:er"), new _verb2.default("vocaliser", "aim:er"), new _verb2.default("vociférer", "réf:érer"), new _verb2.default("voguer", "aim:er"), new _verb2.default("voiler", "aim:er"), new _verb2.default("voir", "v:oir"), new _verb2.default("voisiner", "aim:er"), new _verb2.default("voiturer", "aim:er"), new _verb2.default("volatiliser", "aim:er"), new _verb2.default("volcaniser", "aim:er"), new _verb2.default("voler", "aim:er"), new _verb2.default("voleter", "j:eter"), new _verb2.default("voliger", "man:ger"), new _verb2.default("volleyer", "aim:er"), new _verb2.default("volter", "aim:er"), new _verb2.default("voltiger", "man:ger"), new _verb2.default("vomir", "fin:ir"), new _verb2.default("voter", "aim:er"), new _verb2.default("vouer", "aim:er"), new _verb2.default("vouloir", "v:ouloir"), new _verb2.default("vousoyer", "netto:yer"), new _verb2.default("vousser", "aim:er"), new _verb2.default("voussoyer", "netto:yer"), new _verb2.default("voûter", "aim:er"), new _verb2.default("vouvoyer", "netto:yer"), new _verb2.default("voyager", "man:ger"), new _verb2.default("vriller", "aim:er"), new _verb2.default("vrombir", "fin:ir"), new _verb2.default("vulcaniser", "aim:er"), new _verb2.default("vulgariser", "aim:er"), new _verb2.default("vulnérabiliser", "aim:er"), new _verb2.default("vulnérer", "réf:érer"), new _verb2.default("warranter", "aim:er"), new _verb2.default("yasser", "aim:er"), new _verb2.default("yodiser", "aim:er"), new _verb2.default("yodler", "aim:er"), new _verb2.default("youtser", "aim:er"), new _verb2.default("yoyoter", "aim:er"), new _verb2.default("yoyotter", "aim:er"), new _verb2.default("zapper", "aim:er"), new _verb2.default("zébrer", "cél:ébrer"), new _verb2.default("zéroter", "aim:er"), new _verb2.default("zester", "aim:er"), new _verb2.default("zézayer", "pa:yer"), new _verb2.default("ziber", "aim:er"), new _verb2.default("zieuter", "aim:er"), new _verb2.default("zigonner", "aim:er"), new _verb2.default("zigouiller", "aim:er"), new _verb2.default("ziguer", "aim:er"), new _verb2.default("zigzaguer", "aim:er"), new _verb2.default("zinguer", "aim:er"), new _verb2.default("zinzinuler", "aim:er"), new _verb2.default("zipper", "aim:er"), new _verb2.default("zoner", "aim:er"), new _verb2.default("zonzonner", "aim:er"), new _verb2.default("zoomer", "aim:er"), new _verb2.default("zouker", "aim:er"), new _verb2.default("zozoter", "aim:er"), new _verb2.default("zwanzer", "aim:er"), new _verb2.default("zyeuter", "aim:er")];

exports.default = VERBS_LIST;

},{"./verb":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbs\\verb.js"}],"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\speak.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _humanize = require("../../helpers/humanize/humanize");

var _humanize2 = _interopRequireDefault(_humanize);

var _constants = require("../../constants/constants");

var _verbsController = require("./components/verbsController");

var _verbsController2 = _interopRequireDefault(_verbsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var speakController = function () {
    function speakController(speak) {
        _classCallCheck(this, speakController);

        this.speak = speak;

        this.isQuestion = null;
        this.isTutoiement = null;
        this.isVouvoiement = null;

        this.isAction = null;

        this.init();
    }

    _createClass(speakController, [{
        key: "init",
        value: function init() {
            this.setIsQuestion(_constants.SPEAK.QUESTION.test(this.getSpeak()));
            this.setIsTutoiement(_constants.SPEAK.TUTOIEMENT.test(this.getSpeak()));
            this.setIsVouvoiement(_constants.SPEAK.VOUVOIEMENT.test(this.getSpeak()));

            this.setIsAction(_constants.SPEAK.ACTION_VERB.test(this.getSpeak()));

            if (this.getIsAction()) {
                this.getSpeak().replace(_constants.SPEAK.ACTION_VERB, function (match, $verb) {
                    var verb = _verbsController2.default.find($verb);
                    debugger;
                });
            } else {
                this.getIsAction().replace(_constants.SPEAK.VERB, function (match, $verb) {
                    var verb = _verbsController2.default.find($verb);
                    debugger;
                });
            }
        }
    }, {
        key: "transform",
        value: function transform(tutoiement) {
            if (tutoiement && !this.getIsTutoiement()) {
                return this.getSpeak().replace(_constants.SPEAK.TUTOIEMENT, function (match, $vous, $verbe, offset, string) {});
            } else if (!tutoiement && !this.getIsVouvoiement()) {}
        }
    }, {
        key: "getIsAction",
        value: function getIsAction() {
            return this.isAction;
        }
    }, {
        key: "setIsAction",
        value: function setIsAction(value) {
            this.isAction = value;
            return this;
        }
    }, {
        key: "getSpeak",
        value: function getSpeak() {
            return this.speak;
        }
    }, {
        key: "setIsQuestion",
        value: function setIsQuestion(value) {
            this.isQuestion = value;
            return this;
        }
    }, {
        key: "getIsTutoiement",
        value: function getIsTutoiement() {
            return this.isTutoiement;
        }
    }, {
        key: "setIsTutoiement",
        value: function setIsTutoiement(value) {
            this.isTutoiement = value;
            return this;
        }
    }, {
        key: "getIsVouvoiement",
        value: function getIsVouvoiement() {
            return this.isVouvoiement;
        }
    }, {
        key: "setIsVouvoiement",
        value: function setIsVouvoiement(value) {
            this.isVouvoiement = value;
            return this;
        }
    }]);

    return speakController;
}();

exports.default = speakController;

},{"../../constants/constants":"D:\\labs\\JeevesBot\\js\\core\\constants\\constants.js","../../helpers/humanize/humanize":"D:\\labs\\JeevesBot\\js\\core\\helpers\\humanize\\humanize.js","./components/verbsController":"D:\\labs\\JeevesBot\\js\\core\\bot\\speak\\components\\verbsController.js"}],"D:\\labs\\JeevesBot\\js\\core\\commands\\commandController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var commandController = function () {
    function commandController() {
        _classCallCheck(this, commandController);

        this.command = {};
    }

    _createClass(commandController, [{
        key: 'setCommand',
        value: function setCommand(commandName) {
            this.name = commandName;
            this.command[this.getName()] = {};
            return this;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getCommand',
        value: function getCommand() {
            return this.command[this.name];
        }
    }, {
        key: 'setRegexp',
        value: function setRegexp(regexp) {
            if (Array.isArray(regexp)) {
                var regexpList = '';

                for (var i = 0; i < regexp.length; i++) {
                    var reg = regexp[i].toString();

                    if (reg.substring(0, 1) === '/') {
                        reg = reg.substring(1);
                    }
                    if (reg.substring(reg.length, reg.length - 1) === '/') {
                        reg = reg.substring(0, reg.length - 1);
                    }

                    if (i > 0 && i !== regexp.length) {
                        regexpList += '|';
                    }
                    regexpList += reg; // `(${reg})`
                }

                this.getCommand().regexp = new RegExp(regexpList);
                console.log(this.getCommand().regexp);
            } else if (regexp instanceof RegExp) {
                this.getCommand().regexp = regexp;
            }

            return this;
        }
    }, {
        key: 'setCallback',
        value: function setCallback(callback) {
            this.getCommand().callback = callback;
            return this;
        }
    }, {
        key: 'setWaitReply',
        value: function setWaitReply(callback) {
            this.setCommand('waitAnyReply');
            this.setRegexp(/(.+)/);
            this.setCallback(callback);
        }
    }], [{
        key: 'getPhrase',
        value: function getPhrase() {
            // Récupère le premier argument valide
            var phrase = null,
                i = 0;

            while (i < arguments.length && phrase === null) {
                if (arguments[i] !== undefined) {
                    return phrase = arguments[i];
                }
                i++;
            }
        }
    }]);

    return commandController;
}();

exports.default = commandController;

},{}],"D:\\labs\\JeevesBot\\js\\core\\constants\\constants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CONFIG = exports.CONFIG = {
    LANG: 'fr-FR'
};
// \b\w+(ces|çons|cez|cent|çais|çait|cions|ciez|çaient|cerai|ceras|cera|cerons|cerez|ceront|e|es|ons|ez|ent|ais|ait|aient|erai|eras|era|erons|erez|eront|ece|èce|eces|èces|eçons|ecez|ecent|ècent|eçais|eçait|ecions|eciez|eçaient|ecerai|ècerai|eceras|èceras|ecera|ècera|ecerons|ècerons|ecerez|ècerez|eceront|èceront|ge|ges|geons|gez|gent|geais|geait|gions|giez|geaient|gerai|geras|gera|gerons|gerez|geront|ie|ye|ies|yes|yons|yez|ient|yent|yais|yait|yions|yiez|yaient|ierai|yerai|ieras|yeras|iera|yera|ierons|yerons|ierez|yerez|ieront|yeront|elle|elles|elons|elez|ellent|elais|elait|elions|eliez|elaient|ellerai|elleras|ellera|ellerons|ellerez|elleront|èle|èles|èlent|èlerai|èleras|èlera|èlerons|èlerez|èleront|ette|ettes|etons|etez|ettent|etais|etait|etions|etiez|etaient|etterai|etteras|ettera|etterons|etterez|etteront|ète|ètes|ètent|èterai|èteras|ètera|èterons|èterez|èteront|étons|étez|étais|était|étions|étiez|étaient|ème|èmes|emons|emez|èment|emais|emait|emions|emiez|emaient|èmerai|èmeras|èmera|èmerons|èmerez|èmeront|ègue|ègues|éguons|éguez|èguent|éguais|éguait|éguions|éguiez|éguaient|èguerai|ègueras|èguera|èguerons|èguerez|ègueront|èque|èques|équons|équez|èquent|équais|équait|équions|équiez|équaient|èquerai|èqueras|èquera|èquerons|èquerez|èqueront|élons|élez|élais|élait|élions|éliez|élaient|élerai|éleras|élera|élerons|élerez|éleront|ètre|ètres|étrons|étrez|ètrent|étrais|étrait|étrions|étriez|étraient|étrerai|ètrerai|étreras|ètreras|étrera|ètrera|étrerons|ètrerons|étrerez|ètrerez|étreront|ètreront|ègle|ègles|églons|églez|èglent|églais|églait|églions|égliez|églaient|églerai|èglerai|égleras|ègleras|églera|èglera|églerons|èglerons|églerez|èglerez|égleront|ègleront|ègne|ègnes|égnons|égnez|ègnent|égnais|égnait|égnions|égniez|égnaient|égnerai|ègnerai|égneras|ègneras|égnera|ègnera|égnerons|ègnerons|égnerez|ègnerez|égneront|ègneront|èbre|èbres|ébrons|ébrez|èbrent|ébrais|ébrait|ébrions|ébriez|ébraient|ébrerai|èbrerai|ébreras|èbreras|ébrera|èbrera|ébrerons|èbrerons|ébrerez|èbrerez|ébreront|èbreront|ègre|ègres|égrons|égrez|ègrent|égrais|égrait|égrions|égriez|égraient|égrerai|ègrerai|égreras|ègreras|égrera|ègrera|égrerons|ègrerons|égrerez|ègrerez|égreront|ègreront|éterai|éteras|étera|éterons|éterez|éteront|ène|ènes|énons|énez|ènent|énais|énait|énions|éniez|énaient|énerai|ènerai|éneras|èneras|énera|ènera|énerons|ènerons|énerez|ènerez|éneront|èneront|enons|enez|enais|enait|enions|eniez|enaient|ève|èves|evons|evez)(?!\w+)
// \b(?:(?:je|tu|il(?:|s)|[nv]ous)(?:\s[nv]ous|\s[tm]e)?(?:\sne)?\s(?:t')?)(\w[A-zÀ-ÿ]+)(?!\w+)
var SPEAK = exports.SPEAK = {
    ACTION_VERB: /\b(\w[A-zÀ-ÿ]+)(?:(?:-(?:moi|toi|vous|nous))|\sleur)(?!\w+)/gi,
    VERB: /\b(?:(?:je|tu|il(?:|s)|[nv]ous)(?:\s(?:[nv]ous|[tm]e))?(?:\sne)?\s(?:[tm]'|[nv]ous\s)?)(\w[A-zÀ-ÿ]+)(?!\w+)/gi,
    TUTOIEMENT: /\b(-?tu|te|toi|le\stien|la\stienne)(?!\w+)/gi,
    VOUVOIEMENT: /\b(vous\svous|-?vous|(?:(?:le|la)\s)v[oôÔ]tre)(?!\w+)|(\w+ez)/gi,
    QUESTION: /Comment|\w*(-tu|-je|t-il)/gi
};

var REGEXP_COLLECTION = exports.REGEXP_COLLECTION = {
    TUTOIEMENT: /\b(-?tu|toi)(?!\w+)/gi,
    VOUVOIEMENT: /\b(vous\svous|-?vous)(?!\w+)|(\w+ez)/gi,
    QUESTION: /Comment|\w*(-tu|-je|t-il)/gi
};

},{}],"D:\\labs\\JeevesBot\\js\\core\\helpers\\HTMLController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collectionItem = require("./html/collectionItem/collectionItem");

var _collectionItem2 = _interopRequireDefault(_collectionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTMLController = function () {
    function HTMLController() {
        _classCallCheck(this, HTMLController);

        this.app = $('#app');
    }

    _createClass(HTMLController, [{
        key: "addCollectionItem",
        value: function addCollectionItem(title, text) {
            this.collectionItem = new _collectionItem2.default();
            this.collectionItem.setItemTitle(title).setItemText(text);

            this.app.append(this.collectionItem.getHTML());
            return this.collectionItem;
        }
    }, {
        key: "getCollectionItem",
        value: function getCollectionItem() {
            return this.collectionItem;
        }
    }]);

    return HTMLController;
}();

exports.default = HTMLController;

},{"./html/collectionItem/collectionItem":"D:\\labs\\JeevesBot\\js\\core\\helpers\\html\\collectionItem\\collectionItem.js"}],"D:\\labs\\JeevesBot\\js\\core\\helpers\\generator\\Uniqid.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generate;


function generate() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        id = '';

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
}

},{}],"D:\\labs\\JeevesBot\\js\\core\\helpers\\html\\collectionItem\\collectionItem.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Uniqid = require('../../generator/Uniqid');

var _Uniqid2 = _interopRequireDefault(_Uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollectionItemController = function () {
    function CollectionItemController() {
        _classCallCheck(this, CollectionItemController);

        this.replace = {
            title: '$TITLE$',
            text: '$TEXT$'
        };

        this.id = (0, _Uniqid2.default)();
        this.html = '\n            <li id="' + this.id + '" class="collection-item">\n                <strong class="materialize-red-text">' + this.replace.title + '</strong><br>\n                <span class="blue-grey-text">' + this.replace.text + '</span>\n            </li>\n        ';
    }

    _createClass(CollectionItemController, [{
        key: 'getItemElement',
        value: function getItemElement() {
            return $('#' + this.id);
        }
    }, {
        key: 'setItemTitle',
        value: function setItemTitle(title) {
            this.setHTML(this.getHTML().replace(this.replace.title, title));
            return this;
        }
    }, {
        key: 'setItemText',
        value: function setItemText(text) {
            this.setHTML(this.getHTML().replace(this.replace.text, text));
            return this;
        }
    }, {
        key: 'setHTML',
        value: function setHTML(html) {
            this.html = html;
            return this;
        }
    }, {
        key: 'getHTML',
        value: function getHTML() {
            var jQuerySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (jQuerySelector) {
                return $(this.html);
            }
            return this.html;
        }
    }]);

    return CollectionItemController;
}();

exports.default = CollectionItemController;

},{"../../generator/Uniqid":"D:\\labs\\JeevesBot\\js\\core\\helpers\\generator\\Uniqid.js"}],"D:\\labs\\JeevesBot\\js\\core\\helpers\\humanize\\humanize.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Humanize = function () {
    function Humanize() {
        _classCallCheck(this, Humanize);
    }

    _createClass(Humanize, null, [{
        key: 'replyFormat',
        value: function replyFormat(text) {
            if (this.isQuestion(text)) {
                text += ' ?';
            } else {
                text += '.';
            }

            return this.capitalize(text);
        }

        // Converts a large integer to a friendly text representation.

    }, {
        key: 'intword',
        value: function intword(number, charWidth) {
            var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

            /*
             * This method is deprecated. Please use compactInteger instead.
             * intword will be going away in the next major version.
             */
            return this.compactInteger(number, decimals);
        }

        // Converts an integer into its most compact representation

    }, {
        key: 'compactInteger',
        value: function compactInteger(input) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            decimals = Math.max(decimals, 0);
            var number = parseInt(input, 10);
            var signString = number < 0 ? '-' : '';
            var unsignedNumber = Math.abs(number);
            var unsignedNumberString = String(unsignedNumber);
            var numberLength = unsignedNumberString.length;
            var numberLengths = [13, 10, 7, 4];
            var bigNumPrefixes = ['T', 'B', 'M', 'k'];

            // small numbers
            if (unsignedNumber < 1000) {
                return '' + signString + unsignedNumberString;
            }

            // really big numbers
            if (numberLength > numberLengths[0] + 3) {
                return number.toExponential(decimals).replace('e+', 'x10^');
            }

            // 999 < unsignedNumber < 999,999,999,999,999
            var length = void 0;
            for (var i = 0; i < numberLengths.length; i++) {
                var _length = numberLengths[i];
                if (numberLength >= _length) {
                    length = _length;
                    break;
                }
            }

            var decimalIndex = numberLength - length + 1;
            var unsignedNumberCharacterArray = unsignedNumberString.split('');

            var wholePartArray = unsignedNumberCharacterArray.slice(0, decimalIndex);
            var decimalPartArray = unsignedNumberCharacterArray.slice(decimalIndex, decimalIndex + decimals + 1);

            var wholePart = wholePartArray.join('');

            // pad decimalPart if necessary
            var decimalPart = decimalPartArray.join('');
            if (decimalPart.length < decimals) {
                decimalPart += '' + Array(decimals - decimalPart.length + 1).join('0');
            }

            var output = void 0;
            if (decimals === 0) {
                output = '' + signString + wholePart + bigNumPrefixes[numberLengths.indexOf(length)];
            } else {
                var outputNumber = Number(wholePart + '.' + decimalPart).toFixed(decimals);
                output = '' + signString + outputNumber + bigNumPrefixes[numberLengths.indexOf(length)];
            }

            return output;
        }

        // Converts an integer to a string containing commas every three digits.

    }, {
        key: 'intComma',
        value: function intComma(number) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return this.formatNumber(number, decimals);
        }
    }, {
        key: 'intcomma',
        value: function intcomma() {
            return this.intComma.apply(this, arguments);
        }

        // Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).

    }, {
        key: 'fileSize',
        value: function fileSize(filesize) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            for (var label in LABELS_FOR_POWERS_OF_KILO) {
                if (LABELS_FOR_POWERS_OF_KILO.hasOwnProperty(label)) {
                    var minnum = LABELS_FOR_POWERS_OF_KILO[label];
                    if (filesize >= minnum) {
                        return this.formatNumber(filesize / minnum, precision, '') + ' ' + label + 'B';
                    }
                }
            }
            if (filesize >= 1024) {
                return this.formatNumber(filesize / 1024, 0) + ' KB';
            }

            return this.formatNumber(filesize, 0) + this.pluralize(filesize, ' byte');
        }
    }, {
        key: 'filesize',
        value: function filesize() {
            return this.fileSize.apply(this, arguments);
        }

        // Formats a number to a human-readable string.
        // Localize by overriding the precision, thousand and decimal arguments.

    }, {
        key: 'formatNumber',
        value: function formatNumber(number) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var _this = this;

            var thousand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
            var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

            // Create some private utility functions to make the computational
            // code that follows much easier to read.
            var firstComma = function firstComma(_number, _thousand, _position) {
                return _position ? _number.substr(0, _position) + _thousand : '';
            };

            var commas = function commas(_number, _thousand, _position) {
                return _number.substr(_position).replace(/(\d{3})(?=\d)/g, '$1' + _thousand);
            };

            var decimals = function decimals(_number, _decimal, usePrecision) {
                return usePrecision ? _decimal + _this.toFixed(Math.abs(_number), usePrecision).split('.')[1] : '';
            };

            var usePrecision = this.normalizePrecision(precision);

            // Do some calc
            var negative = number < 0 && '-' || '';
            var base = String(parseInt(this.toFixed(Math.abs(number || 0), usePrecision), 10));
            var mod = base.length > 3 ? base.length % 3 : 0;

            // Format the number
            return negative + firstComma(base, thousand, mod) + commas(base, thousand, mod) + decimals(number, decimal, usePrecision);
        }

        // Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61')

    }, {
        key: 'toFixed',
        value: function toFixed(value, precision) {
            precision = exists(precision) ? precision : this.normalizePrecision(precision, 0);
            var power = Math.pow(10, precision);

            // Multiply up by precision, round accurately, then divide and use native toFixed()
            return (Math.round(value * power) / power).toFixed(precision);
        }

        // Ensures precision value is a positive integer

    }, {
        key: 'normalizePrecision',
        value: function normalizePrecision(value, base) {
            value = Math.round(Math.abs(value));
            return isNaN(value) ? base : value;
        }

        // Converts an integer to its ordinal as a string.

    }, {
        key: 'ordinal',
        value: function ordinal(value) {
            var number = parseInt(value, 10);

            if (number === 0) {
                return value;
            }

            var specialCase = number % 100;
            if ([11, 12, 13].indexOf(specialCase) >= 0) {
                return number + 'th';
            }

            var leastSignificant = number % 10;

            var end = void 0;
            switch (leastSignificant) {
                case 1:
                    end = 'st';
                    break;
                case 2:
                    end = 'nd';
                    break;
                case 3:
                    end = 'rd';
                    break;
                default:
                    end = 'th';
            }

            return '' + number + end;
        }

        // Interprets numbers as occurences. Also accepts an optional array/map of overrides.

    }, {
        key: 'times',
        value: function times(value) {
            var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isFiniteNumber(value) && value >= 0) {
                var number = parseFloat(value);
                var smallTimes = ['never', 'once', 'twice'];
                if (exists(overrides[number])) {
                    return String(overrides[number]);
                }

                var numberString = exists(smallTimes[number]) && smallTimes[number].toString();
                return numberString || number.toString() + ' times';
            }
            return null;
        }

        // Returns the plural version of a given word if the value is not 1. The default suffix is 's'.

    }, {
        key: 'pluralize',
        value: function pluralize(number, singular, plural) {
            if (!(exists(number) && exists(singular))) {
                return null;
            }

            plural = exists(plural) ? plural : singular + 's';

            return parseInt(number, 10) === 1 ? singular : plural;
        }

        // Truncates a string if it is longer than the specified number of characters (inclusive).
        // Truncated strings will end with a translatable ellipsis sequence ("…").

    }, {
        key: 'truncate',
        value: function truncate(str) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
            var ending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending;
            }
            return str;
        }

        // Truncates a string after a certain number of words.

    }, {
        key: 'truncateWords',
        value: function truncateWords(string, length) {
            var array = string.split(' ');
            var result = '';
            var i = 0;

            while (i < length) {
                if (exists(array[i])) {
                    result += array[i] + ' ';
                }
                i++;
            }

            if (array.length > length) {
                return result + '...';
            }

            return null;
        }
    }, {
        key: 'truncatewords',
        value: function truncatewords() {
            return this.truncateWords.apply(this, arguments);
        }

        // Truncates a number to an upper bound.

    }, {
        key: 'boundedNumber',
        value: function boundedNumber(num) {
            var bound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
            var ending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '+';

            var result = void 0;

            if (isFiniteNumber(num) && isFiniteNumber(bound)) {
                if (num > bound) {
                    result = bound + ending;
                }
            }

            return (result || num).toString();
        }
    }, {
        key: 'truncatenumber',
        value: function truncatenumber() {
            return this.boundedNumber.apply(this, arguments);
        }

        // Converts a list of items to a human readable string with an optional limit.

    }, {
        key: 'oxford',
        value: function oxford(items, limit, limitStr) {
            var numItems = items.length;

            var limitIndex = void 0;
            if (numItems < 2) {
                return String(items);
            } else if (numItems === 2) {
                return items.join(' and ');
            } else if (exists(limit) && numItems > limit) {
                var extra = numItems - limit;
                limitIndex = limit;
                limitStr = exists(limitStr) ? limitStr : ', and ' + extra + ' ' + this.pluralize(extra, 'other');
            } else {
                limitIndex = -1;
                limitStr = ', and ' + items[numItems - 1];
            }

            return items.slice(0, limitIndex).join(', ') + limitStr;
        }

        // Converts an object to a definition-like string

    }, {
        key: 'dictionary',
        value: function dictionary(object) {
            var joiner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' is ';
            var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ', ';

            var result = '';

            if (exists(object) && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !isArray(object)) {
                var defs = [];
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        var val = object[key];
                        defs.push('' + key + joiner + val);
                    }
                }

                return defs.join(separator);
            }

            return result;
        }

        // Describes how many times an item appears in a list

    }, {
        key: 'frequency',
        value: function frequency(list, verb) {
            if (!isArray(list)) {
                return null;
            }

            var len = list.length;
            var times = this.times(len);

            if (len === 0) {
                return times + ' ' + verb;
            }

            return verb + ' ' + times;
        }
    }, {
        key: 'pace',
        value: function pace(value, intervalMs) {
            var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'time';

            if (value === 0 || intervalMs === 0) {
                // Needs a better string than this...
                return 'No ' + this.pluralize(0, unit);
            }

            // Expose these as overridables?
            var prefix = 'Approximately';
            var timeUnit = void 0;
            var relativePace = void 0;

            var rate = value / intervalMs;
            for (var i = 0; i < TIME_FORMATS.length; ++i) {
                // assumes sorted list
                var f = TIME_FORMATS[i];
                relativePace = rate * f.value;
                if (relativePace > 1) {
                    timeUnit = f.name;
                    break;
                }
            }

            // Use the last time unit if there is nothing smaller
            if (!timeUnit) {
                prefix = 'Less than';
                relativePace = 1;
                timeUnit = TIME_FORMATS[TIME_FORMATS.length - 1].name;
            }

            var roundedPace = Math.round(relativePace);
            unit = this.pluralize(roundedPace, unit);

            return prefix + ' ' + roundedPace + ' ' + unit + ' per ' + timeUnit;
        }

        // Converts newlines to <br/> tags

    }, {
        key: 'nl2br',
        value: function nl2br(string) {
            var replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<br/>';

            return string.replace(/\n/g, replacement);
        }

        // Converts <br/> tags to newlines

    }, {
        key: 'br2nl',
        value: function br2nl(string) {
            var replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\r\n';

            return string.replace(/\<br\s*\/?\>/g, replacement);
        }

        // Capitalizes first letter in a string

    }, {
        key: 'capitalize',
        value: function capitalize(string) {
            var downCaseTail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return '' + string.charAt(0).toUpperCase() + (downCaseTail ? string.slice(1).toLowerCase() : string.slice(1));
        }

        // Capitalizes the first letter of each word in a string

    }, {
        key: 'capitalizeAll',
        value: function capitalizeAll(string) {
            return string.replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
            });
        }

        // Titlecase words in a string.

    }, {
        key: 'titleCase',
        value: function titleCase(string) {
            var _this2 = this;

            var smallWords = /\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i;
            var internalCaps = /\S+[A-Z]+\S*/;
            var splitOnWhiteSpaceRegex = /\s+/;
            var splitOnHyphensRegex = /-/;

            var _doTitleCase = void 0;
            _doTitleCase = function doTitleCase(_string) {
                var hyphenated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var firstOrLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                var titleCasedArray = [];
                var stringArray = _string.split(hyphenated ? splitOnHyphensRegex : splitOnWhiteSpaceRegex);

                for (var index = 0; index < stringArray.length; ++index) {
                    var word = stringArray[index];
                    if (word.indexOf('-') !== -1) {
                        titleCasedArray.push(_doTitleCase(word, true, index === 0 || index === stringArray.length - 1));
                        continue;
                    }

                    if (firstOrLast && (index === 0 || index === stringArray.length - 1)) {
                        titleCasedArray.push(internalCaps.test(word) ? word : _this2.capitalize(word));
                        continue;
                    }

                    if (internalCaps.test(word)) {
                        titleCasedArray.push(word);
                    } else if (smallWords.test(word)) {
                        titleCasedArray.push(word.toLowerCase());
                    } else {
                        titleCasedArray.push(_this2.capitalize(word));
                    }
                }

                return titleCasedArray.join(hyphenated ? '-' : ' ');
            };

            return _doTitleCase(string);
        }
    }, {
        key: 'titlecase',
        value: function titlecase() {
            return this.titleCase.apply(this, arguments);
        }
    }]);

    return Humanize;
}();

exports.default = Humanize;

},{}]},{},["D:\\labs\\JeevesBot\\js\\app.js"])

//# sourceMappingURL=build.js.map
