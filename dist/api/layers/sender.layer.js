"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderLayer = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
var path = require("path");
var helpers_1 = require("../helpers");
var filename_from_mimetype_1 = require("../helpers/filename-from-mimetype");
var listener_layer_1 = require("./listener.layer");
var SenderLayer = /** @class */ (function (_super) {
    __extends(SenderLayer, _super);
    function SenderLayer(page) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        return _this;
    }
    /**
     * Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
     * @param chatId
     * @param url string A link, for example for youtube. e.g https://www.youtube.com/watch?v=Zi_XLOBDo_Y&list=RDEMe12_MlgO8mGFdeeftZ2nOQ&start_radio=1
     * @param title custom text as the message body, this includes the link or will be attached after the link
     */
    SenderLayer.prototype.sendLinkPreview = function (chatId, url, title) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var chatId = _a.chatId, url = _a.url, title = _a.title;
                                        return WAPI.sendLinkPreview(chatId, url, title);
                                    }, { chatId: chatId, url: url, title: title })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends a text message to given chat
     * @param to chat id: xxxxx@us.c
     * @param content text message
     */
    SenderLayer.prototype.sendText = function (to, content) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var messageId, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var to = _a.to, content = _a.content;
                                        return WAPI.sendMessage(to, content);
                                    }, { to: to, content: content })];
                                case 1:
                                    messageId = _a.sent();
                                    return [4 /*yield*/, this.page.evaluate(function (messageId) { return WAPI.getMessageById(messageId); }, messageId)];
                                case 2:
                                    result = (_a.sent());
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    SenderLayer.prototype.sendMessageOptions = function (chat, content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var messageId, result, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var chat = _a.chat, content = _a.content, options = _a.options;
                                            return WAPI.sendMessageOptions(chat, content, options);
                                        }, { chat: chat, content: content, options: options })];
                                case 1:
                                    messageId = _a.sent();
                                    return [4 /*yield*/, this.page.evaluate(function (messageId) { return WAPI.getMessageById(messageId); }, messageId)];
                                case 2:
                                    result = (_a.sent());
                                    resolve(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends image message
     * @param to Chat id
     * @param filePath File path or http link
     * @param filename
     * @param caption
     */
    SenderLayer.prototype.sendImage = function (to, filePath, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var base64, obj;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, helpers_1.downloadFileImgHttp(filePath, [
                                        'image/png',
                                        'image/jpg',
                                        'image/webp',
                                    ])];
                                case 1:
                                    base64 = _a.sent();
                                    if (!!base64) return [3 /*break*/, 3];
                                    return [4 /*yield*/, helpers_1.fileToBase64(filePath)];
                                case 2:
                                    base64 = _a.sent();
                                    _a.label = 3;
                                case 3:
                                    if (!base64) {
                                        obj = {
                                            erro: true,
                                            to: to,
                                            text: 'No such file or directory, open "' + filePath + '"',
                                        };
                                        return [2 /*return*/, reject(obj)];
                                    }
                                    if (!filename) {
                                        filename = path.basename(filePath);
                                    }
                                    this.sendImageFromBase64(to, base64, filename, caption)
                                        .then(resolve)
                                        .catch(reject);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends image message
     * @param to Chat id
     * @param base64 File path, http link or base64Encoded
     * @param filename
     * @param caption
     */
    SenderLayer.prototype.sendImageFromBase64 = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var mimeType, obj, obj, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    mimeType = helpers_1.base64MimeType(base64);
                                    if (!mimeType) {
                                        obj = {
                                            erro: true,
                                            to: to,
                                            text: 'Invalid base64!',
                                        };
                                        return [2 /*return*/, reject(obj)];
                                    }
                                    if (!mimeType.includes('image')) {
                                        obj = {
                                            erro: true,
                                            to: to,
                                            text: 'Not an image, allowed formats png, jpeg and webp',
                                        };
                                        return [2 /*return*/, reject(obj)];
                                    }
                                    filename = filename_from_mimetype_1.filenameFromMimeType(filename, mimeType);
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                                            return WAPI.sendImage(base64, to, filename, caption);
                                        }, { to: to, base64: base64, filename: filename, caption: caption })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends message with thumbnail
     * @param thumb
     * @param url
     * @param title
     * @param description
     * @param chatId
     */
    SenderLayer.prototype.sendMessageWithThumb = function (thumb, url, title, description, chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var thumb = _a.thumb, url = _a.url, title = _a.title, description = _a.description, chatId = _a.chatId;
                        WAPI.sendMessageWithThumb(thumb, url, title, description, chatId);
                    }, {
                        thumb: thumb,
                        url: url,
                        title: title,
                        description: description,
                        chatId: chatId,
                    })];
            });
        });
    };
    /**
     * Replies to given mesage id of given chat id
     * @param to Chat id
     * @param content Message body
     * @param quotedMsg Message id to reply to.
     */
    SenderLayer.prototype.reply = function (to, content, quotedMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var messageId, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var to = _a.to, content = _a.content, quotedMsg = _a.quotedMsg;
                                        return WAPI.reply(to, content, quotedMsg);
                                    }, { to: to, content: content, quotedMsg: quotedMsg })];
                                case 1:
                                    messageId = _a.sent();
                                    return [4 /*yield*/, this.page.evaluate(function (messageId) { return WAPI.getMessageById(messageId); }, messageId)];
                                case 2:
                                    result = (_a.sent());
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends file
     * base64 parameter should have mime type already defined
     * @param to Chat id
     * @param base64 base64 data
     * @param filename
     * @param caption
     */
    SenderLayer.prototype.sendPttFromBase64 = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                        WAPI.sendPtt(base64, to, filename, caption);
                    }, { to: to, base64: base64, filename: filename, caption: caption })];
            });
        });
    };
    /**
     * Sends file
     * base64 parameter should have mime type already defined
     * @param to Chat id
     * @param base64 base64 data
     * @param filename
     * @param caption
     */
    SenderLayer.prototype.sendFileFromBase64 = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var type, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    type = 'FileFromBase64';
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption, type = _a.type;
                                            return WAPI.sendFile(base64, to, filename, caption, type);
                                        }, { to: to, base64: base64, filename: filename, caption: caption, type: type })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends file from path
     * @param to Chat id
     * @param path File path
     * @param filename
     * @param caption
     */
    SenderLayer.prototype.sendFile = function (to, path, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var extension, b64, obj, type, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    extension = path.split('.').pop();
                                    filename = filename + '.' + extension;
                                    return [4 /*yield*/, helpers_1.downloadFileImgHttp(path, helpers_1.MINES())];
                                case 1:
                                    b64 = _a.sent();
                                    if (!!b64) return [3 /*break*/, 3];
                                    return [4 /*yield*/, helpers_1.fileToBase64(path)];
                                case 2:
                                    b64 = _a.sent();
                                    _a.label = 3;
                                case 3:
                                    if (!b64) return [3 /*break*/, 5];
                                    type = 'sendFile';
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var to = _a.to, b64 = _a.b64, filename = _a.filename, caption = _a.caption, type = _a.type;
                                            return WAPI.sendFile(b64, to, filename, caption, type);
                                        }, { to: to, b64: b64, filename: filename, caption: caption, type: type })];
                                case 4:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [3 /*break*/, 6];
                                case 5:
                                    obj = {
                                        erro: true,
                                        to: to,
                                        text: 'No such file or directory, open "' + path + '"',
                                    };
                                    reject(obj);
                                    _a.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sends a video to given chat as a gif, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:video/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    SenderLayer.prototype.sendVideoAsGif = function (to, path, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helpers_1.fileToBase64(path)];
                    case 1:
                        base64 = _a.sent();
                        if (base64) {
                            return [2 /*return*/, this.sendVideoAsGifFromBase64(to, base64, filename, caption)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sends a video to given chat as a gif, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:video/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    SenderLayer.prototype.sendVideoAsGifFromBase64 = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                            WAPI.sendVideoAsGif(base64, to, filename, caption);
                        }, { to: to, base64: base64, filename: filename, caption: caption })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends contact card to iven chat id
     * @param to Chat id
     * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
     */
    SenderLayer.prototype.sendContactVcard = function (to, contactsId, name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var to = _a.to, contactsId = _a.contactsId, name = _a.name;
                                        return WAPI.sendContactVcard(to, contactsId, name);
                                    }, { to: to, contactsId: contactsId, name: name })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Send a list of contact cards
     * @param to Chat id
     * @param contacts Example: | [000@c.us, 1111@c.us]
     */
    SenderLayer.prototype.sendContactVcardList = function (to, contacts) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var to = _a.to, contacts = _a.contacts;
                                        return WAPI.sendContactVcardList(to, contacts);
                                    }, { to: to, contacts: contacts })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Forwards array of messages (could be ids or message objects)
     * @param to Chat id
     * @param messages Array of messages ids to be forwarded
     * @param skipMyMessages
     */
    SenderLayer.prototype.forwardMessages = function (to, messages, skipMyMessages) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var to = _a.to, messages = _a.messages, skipMyMessages = _a.skipMyMessages;
                        return WAPI.forwardMessages(to, messages, skipMyMessages);
                    }, { to: to, messages: messages, skipMyMessages: skipMyMessages })];
            });
        });
    };
    /**
     * Generates sticker from the provided animated gif image and sends it (Send image as animated sticker)
     *  @param path image path imageBase64 A valid gif image is required. You can also send via http/https (http://www.website.com/img.gif)
     *  @param to chatId '000000000000@c.us'
     */
    SenderLayer.prototype.sendImageAsStickerGif = function (to, path) {
        return __awaiter(this, void 0, void 0, function () {
            var b64, buff, mimeInfo, obj, _webb64_1, _met_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helpers_1.downloadFileImgHttp(path, ['image/gif', 'image/webp'])];
                    case 1:
                        b64 = _a.sent();
                        if (!!b64) return [3 /*break*/, 3];
                        return [4 /*yield*/, helpers_1.fileToBase64(path)];
                    case 2:
                        b64 = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!b64) return [3 /*break*/, 6];
                        buff = Buffer.from(b64.replace(/^data:image\/(gif|webp);base64,/, ''), 'base64');
                        mimeInfo = helpers_1.base64MimeType(b64);
                        if (!(!mimeInfo || mimeInfo.includes('image'))) return [3 /*break*/, 5];
                        return [4 /*yield*/, helpers_1.stickerSelect(buff, 1)];
                    case 4:
                        obj = _a.sent();
                        if (typeof obj == 'object') {
                            _webb64_1 = obj['webpBase64'];
                            _met_1 = obj['metadata'];
                            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                    var result;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                                    var _webb64 = _a._webb64, to = _a.to, _met = _a._met;
                                                    return WAPI.sendImageAsSticker(_webb64, to, _met, 'StickerGif');
                                                }, { _webb64: _webb64_1, to: to, _met: _met_1 })];
                                            case 1:
                                                result = _a.sent();
                                                if (result['erro'] == true) {
                                                    reject(result);
                                                }
                                                else {
                                                    resolve(result);
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('Not an image, allowed format gif');
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Generates sticker from given image and sends it (Send Image As Sticker)
     * @param path image path imageBase64 A valid png, jpg and webp image is required. You can also send via http/https (http://www.website.com/img.gif)
     * @param to chatId '000000000000@c.us'
     */
    SenderLayer.prototype.sendImageAsSticker = function (to, path) {
        return __awaiter(this, void 0, void 0, function () {
            var b64, buff, mimeInfo, obj, _webb64_2, _met_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helpers_1.downloadFileImgHttp(path, [
                            'image/png',
                            'image/jpg',
                            'image/webp',
                        ])];
                    case 1:
                        b64 = _a.sent();
                        if (!!b64) return [3 /*break*/, 3];
                        return [4 /*yield*/, helpers_1.fileToBase64(path)];
                    case 2:
                        b64 = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!b64) return [3 /*break*/, 6];
                        buff = Buffer.from(b64.replace(/^data:image\/(png|jpeg|webp);base64,/, ''), 'base64');
                        mimeInfo = helpers_1.base64MimeType(b64);
                        if (!(!mimeInfo || mimeInfo.includes('image'))) return [3 /*break*/, 5];
                        return [4 /*yield*/, helpers_1.stickerSelect(buff, 0)];
                    case 4:
                        obj = _a.sent();
                        if (typeof obj == 'object') {
                            _webb64_2 = obj['webpBase64'];
                            _met_2 = obj['metadata'];
                            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                    var result;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                                    var _webb64 = _a._webb64, to = _a.to, _met = _a._met;
                                                    return WAPI.sendImageAsSticker(_webb64, to, _met, 'Sticker');
                                                }, { _webb64: _webb64_2, to: to, _met: _met_2 })];
                                            case 1:
                                                result = _a.sent();
                                                if (result['erro'] == true) {
                                                    reject(result);
                                                }
                                                else {
                                                    resolve(result);
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('Not an image, allowed formats png, jpeg and webp');
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * TODO: Fix message not being delivered
     * Sends location to given chat id
     * @param to Chat id
     * @param latitude Latitude
     * @param longitude Longitude
     * @param title Text caption
     */
    SenderLayer.prototype.sendLocation = function (to, latitude, longitude, title) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var to = _a.to, latitude = _a.latitude, longitude = _a.longitude, title = _a.title;
                                        return WAPI.sendLocation(to, latitude, longitude, title);
                                    }, { to: to, latitude: latitude, longitude: longitude, title: title })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Sets a chat status to seen. Marks all messages as ack: 3
     * @param chatId chat id: xxxxx@us.c
     */
    SenderLayer.prototype.sendSeen = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (chatId) { return WAPI.sendSeen(chatId); }, chatId)];
            });
        });
    };
    /**
     * Starts typing ('Typing...' state)
     * @param chatId
     */
    SenderLayer.prototype.startTyping = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var to = _a.to;
                        return WAPI.startTyping(to);
                    }, { to: to })];
            });
        });
    };
    /**
     * Stops typing
     * @param to Chat id
     */
    SenderLayer.prototype.stopTyping = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var to = _a.to;
                        return WAPI.stopTyping(to);
                    }, { to: to })];
            });
        });
    };
    /**
     * Sends text with tags
     *
     */
    SenderLayer.prototype.sendMentioned = function (to, message, mentioned) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, message = _a.message, mentioned = _a.mentioned;
                            WAPI.sendMessageMentioned(to, message, mentioned);
                        }, { to: to, message: message, mentioned: mentioned })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the chat state
     * @param chatState
     * @param chatId
     */
    SenderLayer.prototype.setChatState = function (chatId, chatState) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var chatState = _a.chatState, chatId = _a.chatId;
                            WAPI.sendChatstate(chatState, chatId);
                        }, { chatState: chatState, chatId: chatId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SenderLayer;
}(listener_layer_1.ListenerLayer));
exports.SenderLayer = SenderLayer;
