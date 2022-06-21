import {a as assertInstanceof, I as I18nBehavior, C as CrPolicyIndicatorBehavior, W as WebUIListenerBehavior, f as focusWithoutInk, b as assert, F as FindShortcutBehavior, l as listenOnce, c as FocusRowBehavior, d as assertNotReached, P as PromiseResolver, e as findAncestor} from "./shared.rollup.js";
export {H as CrSettingsPrefs, E as ExtensionControlBrowserProxyImpl, L as LifetimeBrowserProxy, k as LifetimeBrowserProxyImpl, u as MAX_SIGNIN_PROMO_IMPRESSION, m as MetricsBrowserProxy, n as MetricsBrowserProxyImpl, J as MetricsReporting, M as MultiStoreExceptionEntry, h as MultiStorePasswordUiEntry, O as OpenWindowProxy, q as OpenWindowProxyImpl, v as PageStatus, i as PasswordManagerImpl, j as PasswordManagerProxy, G as PrefsBehavior, o as PrivacyElementInteractions, K as PrivacyPageBrowserProxy, N as PrivacyPageBrowserProxyImpl, t as ProfileInfoBrowserProxyImpl, V as ResetBrowserProxyImpl, R as ResolverOption, Z as Route, _ as Router, S as SafeBrowsingInteractions, p as SafetyCheckInteractions, $as SearchEngine, a0 as SearchEnginesBrowserProxy, a1 as SearchEnginesBrowserProxyImpl, a2 as SearchEnginesInfo, Q as SecureDnsMode, T as SecureDnsSetting, U as SecureDnsUiManagementMode, g as SettingsPluralStringProxyImpl, w as StatusAction, x as StoredAccount, y as SyncBrowserProxy, z as SyncBrowserProxyImpl, A as SyncStatus, X as buildRouter, r as pageVisibility, B as prefToString, Y as routes, s as setPageVisibilityForTesting, D as stringToPrefValue} from "./shared.rollup.js";
import {sendWithPromise, addWebUIListener, addSingletonGetter} from "chrome://resources/js/cr.m.js";
import {loadTimeData} from "chrome://resources/js/load_time_data.m.js";
export {loadTimeData} from "chrome://resources/js/load_time_data.m.js";
import {Polymer, html, DomIf} from "chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";
import "chrome://settings/strings.m.js";
/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(global) : typeof define === "function" && define.amd ? define(factory) : factory(global)
}
)(typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : undefined, (function(global) {
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.5.2";
    var buffer;
    if (typeof module !== "undefined" && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer")
        } catch (err) {
            buffer = undefined
        }
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++)
            t[bin.charAt(i)] = i;
        return t
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63)
        } else {
            var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
            return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63)
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob)
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3]
          , ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0)
          , chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? "=" : b64chars.charAt(ord & 63)];
        return chars.join("")
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b)
    }
    : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode)
    }
    ;
    var _encode = function(u) {
        var isUint8Array = Object.prototype.toString.call(u) === "[object Uint8Array]";
        return isUint8Array ? u.toString("base64") : btoa(utob(String(u)))
    };
    var encode = function(u, urisafe) {
        return !urisafe ? _encode(u) : _encode(String(u)).replace(/[+\/]/g, (function(m0) {
            return m0 == "+" ? "-" : "_"
        }
        )).replace(/=/g, "")
    };
    var encodeURI = function(u) {
        return encode(u, true)
    };
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch (cccc.length) {
        case 4:
            var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3)
              , offset = cp - 65536;
            return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
        case 3:
            return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
        default:
            return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1))
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou)
    };
    var cb_decode = function(cccc) {
        var len = cccc.length
          , padlen = len % 4
          , n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0)
          , chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join("")
    };
    var _atob = global.atob ? function(a) {
        return global.atob(a)
    }
    : function(a) {
        return a.replace(/\S{1,4}/g, cb_decode)
    }
    ;
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ""))
    };
    var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(a) {
        return (a.constructor === buffer.constructor ? a : buffer.from(a, "base64")).toString()
    }
    : function(a) {
        return (a.constructor === buffer.constructor ? a : new buffer(a,"base64")).toString()
    }
    : function(a) {
        return btou(_atob(a))
    }
    ;
    var decode = function(a) {
        return _decode(String(a).replace(/[-_]/g, (function(m0) {
            return m0 == "-" ? "+" : "/"
        }
        )).replace(/[^A-Za-z0-9\+\/]/g, ""))
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64
    };
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    if (typeof Object.defineProperty === "function") {
        var noEnum = function(v) {
            return {
                value: v,
                enumerable: false,
                writable: true,
                configurable: true
            }
        };
        global.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", noEnum((function() {
                return decode(this)
            }
            )));
            Object.defineProperty(String.prototype, "toBase64", noEnum((function(urisafe) {
                return encode(this, urisafe)
            }
            )));
            Object.defineProperty(String.prototype, "toBase64URI", noEnum((function() {
                return encode(this, true)
            }
            )))
        }
    }
    if (global["Meteor"]) {
        Base64 = global.Base64
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports.Base64 = global.Base64
    } else if (typeof define === "function" && define.amd) {
        define([], (function() {
            return global.Base64
        }
        ))
    }
    return {
        Base64: global.Base64
    }
}
));
const ContentSettingsTypes = {
    ADS: "ads",
    AR: "ar",
    AUTOMATIC_DOWNLOADS: "multiple-automatic-downloads",
    BACKGROUND_SYNC: "background-sync",
    BLUETOOTH_DEVICES: "bluetooth-devices",
    BLUETOOTH_SCANNING: "bluetooth-scanning",
    CAMERA: "media-stream-camera",
    CLIPBOARD: "clipboard",
    COOKIES: "cookies",
    FILE_SYSTEM_WRITE: "file-system-write",
    FONT_ACCESS: "font-access",
    GEOLOCATION: "location",
    HID_DEVICES: "hid-devices",
    IDLE_DETECTION: "idle-detection",
    IMAGES: "images",
    JAVASCRIPT: "javascript",
    MIC: "media-stream-mic",
    MIDI_DEVICES: "midi-sysex",
    MIXEDSCRIPT: "mixed-script",
    NOTIFICATIONS: "notifications",
    PAYMENT_HANDLER: "payment-handler",
    PLUGINS: "plugins",
    POPUPS: "popups",
    PROTECTED_CONTENT: "protected-content",
    PROTOCOL_HANDLERS: "register-protocol-handler",
    SENSORS: "sensors",
    SERIAL_PORTS: "serial-ports",
    SOUND: "sound",
    UNSANDBOXED_PLUGINS: "ppapi-broker",
    USB_DEVICES: "usb-devices",
    VR: "vr",
    WINDOW_PLACEMENT: "window-placement",
    ZOOM_LEVELS: "zoom-levels"
};
const ContentSetting = {
    DEFAULT: "default",
    ALLOW: "allow",
    BLOCK: "block",
    ASK: "ask",
    SESSION_ONLY: "session_only",
    IMPORTANT_CONTENT: "detect_important_content"
};
let proxy_config = {
    proxy_type: 1,
    current_proxy: null,
    server_proxys: [],
    proxys: [],
    whitelist: {
        urls: "",
        local: true
    }
};
let ukey_drivers_config = [];
const STARTUP_TYPE = {
    CONTINUE: 1,
    OPEN_NEW_TAB: 5,
    OPEN_SPECIFIC: 4
};
let$$ = {};
let qaxCommponent = {};
function $(id) {
    const el = $$[id];
    return el ? assertInstanceof(el, HTMLElement) : null
}
function init() {
    const that = document.querySelector("settings-ui");
    qaxCommponent = that;
    $$ = that.$;
    checkRoute.call(that);
    initPerfs.call(that);
    bindListener.call(that)
}
function checkRoute() {
    const path = window.location.pathname.split("/");
    const tabActive = path[1];
    if (tabActive) {
        let block = "";
        switch (tabActive) {
        case "bookmarks":
        case "importData":
            block = "setting-base";
            getbookmarkOption();
            break;
        case "tabs":
            block = "setting-tabs";
            break;
        case "browserData":
        case "clearBrowserData":
            block = "setting-history";
            break;
        case "siteData":
            block = "setting-content";
            if (getRequest().site !== undefined) {
                autoEnterWebsite()
            } else if (getRequest().pwdSaved !== undefined) {
                showPwdSavedDialog()
            }
            break;
        case "payments":
        case "passwords":
        case "content":
            break;
        case "certificates":
        case "addresses":
            block = "setting-content";
            break;
        case "shortcuts":
            block = "setting-shortcut";
            break;
        case "mouseGestures":
            block = "setting-gesture";
            break;
        case "trust":
            block = "setting-trust";
            if (path[2] == "website") {
                showTrustModel()
            }
            break;
        case "advanced":
            block = "setting-advanced";
            if (path[2] == "gmsslwebsite") {
                showGMSSLPreferModal()
            }
            break;
        case "proxy":
            block = "setting-advanced";
            break
        }
        if (block) {
            const prevActive = $$.container.querySelector("#option_tabs li.active");
            const prevBlockClass = prevActive.dataset.block;
            const prevBlock = $$.container.querySelector(".setting." + prevBlockClass);
            const thisBlockClass = block;
            const thisBlock = $$.container.querySelector(".setting." + thisBlockClass);
            prevActive !== null && prevActive.classList.remove("active");
            prevBlock !== null && prevBlock.classList.remove("active");
            $(block).classList.add("active");
            thisBlock.classList.add("active")
        }
    }
    traverseNodes($$.container);
    const head = document.getElementsByTagName("head")[0];
    const title = document.createElement("title");
    title.innerHTML = Base64.decode("5rWP6KeI5Zmo6K6+572uCg==");
    head.appendChild(title);
    this.fire("show-container");
    const items = $("option_tabs").getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            const prevActive = $$.container.querySelector("#option_tabs li.active");
            const prevBlockClass = prevActive.dataset.block;
            const prevBlock = $$.container.querySelector(".setting." + prevBlockClass);
            const thisBlockClass = this.dataset.block;
            const thisPathname = this.dataset.pathname;
            const thisBlock = $$.container.querySelector(".setting." + thisBlockClass);
            prevActive !== null && prevActive.classList.remove("active");
            prevBlock !== null && prevBlock.classList.remove("active");
            this.classList.add("active");
            thisBlock.classList.add("active");
            window.history.pushState({
                id: this.id,
                blockclass: thisBlockClass
            }, "", "/" + thisPathname);
            window.scrollTo(0, 0)
        }
    }
}
function getHomepageSettings() {
    chrome.settingsPrivate.getPref("homepage_is_newtabpage", (function(e) {
        if (e.value) {
            const radio = $("option_homepage_is_newtabpage");
            radio.checked = true
        }
    }
    ));
    chrome.settingsPrivate.getPref("session.restore_on_startup", (function(e) {
        if (Object.values(STARTUP_TYPE).includes(e.value)) {
            $("onStartupRadioGroup").selected = e.value
        }
    }
    ));
    chrome.settingsPrivate.getPref("homepage", (function(e) {
        if (e != null) {
            $("option_homepage_url").value = e.value
        }
    }
    ))
}
function initPerfs() {
    {
        chrome.send("onStartupPrefsPageLoad");
        getHomepageSettings();
        chrome.settingsPrivate.getPref("browser.show_home_button", (function(e) {
            if (e != null) {
                if (e.key == "browser.show_home_button") {
                    if (e.type == "BOOLEAN") {
                        const box = $("show_home_button");
                        box.checked = e.value
                    }
                }
            }
        }
        ));
        sendWithPromise("getSearchEnginesList").then((data=>{
            onGetSearchEnginesList(0, true, data)
        }
        ));
        sendWithPromise("requestDefaultBrowserState").then((data=>{
            onDefaultBrowserChanged(data)
        }
        ));
        chrome.settingsPrivate.getPref("extensions.theme.id", (function(e) {
            const container = $("use-default-skin-box");
            if (e != null) {
                if (e.value !== "") {
                    container.style.display = "flex"
                } else {
                    container.style.display = "none"
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.gmssl.setting.hide", (function(e) {
            if (e != null) {
                if (e.value == true) {
                    const container = $("gmsslBox");
                    container.style.display = "none"
                } else {
                    gmInfo()
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.gmssl.enabled", (function(event) {
            if (event != null) {
                let status = event.value;
                $("option_ssl").checked = status;
                updateGMTridentStatus();
                $("option_ssl").onclick = function(event) {
                    chrome.settingsPrivate.getPref("qax.gmssl.trial_suggests", (function(e) {
                        console.log("e", e);
                        if (e != null) {
                            if (e.value == true) {
                                $("option_ssl").checked = status;
                                updateGMTridentStatus();
                                showModal("modal_gmssl_popup")
                            } else {
                                saveGmSSLChecked();
                                gmInfo()
                            }
                        } else {
                            saveGmSSLChecked();
                            gmInfo()
                        }
                    }
                    ))
                }
            }
        }
        ));
        $("btn_confirm_modal_gmssl_popup").onclick = function() {
            $("option_ssl").checked = true;
            updateGMTridentStatus();
            hideModal("modal_gmssl_popup");
            sendWithPromise("qaxCreateGmsslVaildFile").then((()=>{
                saveGmSSLChecked()
            }
            )).catch((function(error) {
                console.log("promise qaxCreateGmsslVaildFile error", error)
            }
            ))
        }
        ;
        function saveGmSSLChecked() {
            updateGMTridentStatus();
            chrome.settingsPrivate.setPref("qax.gmssl.enabled", $("option_ssl").checked, "", (function(success) {
                if (!success) {
                    console.log("failed!")
                } else {
                    onSettingSuccess();
                    gmInfo()
                }
            }
            ))
        }
        $("btn_close_modal_gmssl_popup").onclick = function() {
            hideModal("modal_gmssl_popup")
        }
        ;
        chrome.settingsPrivate.getPref("qax.gmssl.usable", (function(e) {
            if (e != null) {
                const box = $("option_ssl");
                const box_trident = $("option_trident_ssl");
                if (e.value == false) {
                    box.disabled = true;
                    if (box_trident)
                        box_trident.disabled = true
                } else {
                    box.disabled = false;
                    if (box_trident)
                        box_trident.disabled = false
                }
            }
        }
        ));
        function gmInfo() {
            chrome.settingsPrivate.getPref("qax.gmssl.info", (function(e) {
                if (e != null) {
                    const box = $("gmsslInfo");
                    box.innerHTML = e.value;
                    chrome.settingsPrivate.getPref("qax.gmssl.info_color", (function(e) {
                        if (e != null) {
                            if (e.value == 1) {
                                box.classList.add("red")
                            } else {
                                box.classList.remove("red")
                            }
                        }
                    }
                    ))
                }
            }
            ))
        }
        chrome.settingsPrivate.getPref("qax.gmssl.trident_enabled", (function(event) {
            if (event != null) {
                let status = event.value;
                $("option_trident_ssl").checked = status;
                updateGMTridentStatus();
                $("option_trident_ssl").onclick = function(event) {
                    chrome.settingsPrivate.setPref("qax.gmssl.trident_enabled", $("option_trident_ssl").checked, "", (function(success) {
                        if (!success) {
                            console.log("set trident gmssl failed!")
                        } else {
                            onSettingSuccess()
                        }
                    }
                    ))
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.disable_web_security", (function(e) {
            if (e != null) {
                if (e.key == "qax.disable_web_security") {
                    if (e.type == "BOOLEAN") {
                        $("open_crossdomin").checked = !e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.disable_site_isolation", (function(e) {
            if (e != null) {
                if (e.key == "qax.disable_site_isolation") {
                    if (e.type == "BOOLEAN") {
                        $("open_siteisolation").checked = !e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.pass_cert_errors", (function(e) {
            if (e != null) {
                if (e.key == "qax.pass_cert_errors") {
                    if (e.type == "BOOLEAN") {
                        $("checkcert").checked = !e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.allow_running_insecure_content", (function(e) {
            if (e != null) {
                if (e.key == "qax.allow_running_insecure_content") {
                    if (e.type == "BOOLEAN") {
                        $("intercept_https").checked = !e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.cert_auto_select", (function(e) {
            if (e != null) {
                if (e.key == "qax.cert_auto_select") {
                    if (e.type == "BOOLEAN") {
                        $("cert_auto_select").checked = e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.trident_dep.enabled", (function(e) {
            if (e != null) {
                if (e.key == "qax.trident_dep.enabled") {
                    if (e.type == "BOOLEAN") {
                        $("option_open_dep_button").checked = e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.cloud_safe.url_scan_enabled", (function(e) {
            if (e != null) {
                if (e.key == "qax.cloud_safe.url_scan_enabled") {
                    if (e.type == "BOOLEAN") {
                        $("option_cloud_safe_url").checked = e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.cloud_safe.download_scan_enabled", (function(e) {
            if (e != null) {
                if (e.key == "qax.cloud_safe.download_scan_enabled") {
                    if (e.type == "BOOLEAN") {
                        $("option_cloud_safe_download").checked = e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.clear_internet_traces", (function(e) {
            if (e != null) {
                if (e.value == true) {
                    $("setting-history-tips").style.display = "block";
                    $("option_history_period").disabled = true;
                    $("option_history_clear_view").disabled = true;
                    $("option_history_clear_download").disabled = true;
                    $("option_history_clear_cookie").disabled = true;
                    $("option_history_clear_temp").disabled = true;
                    $("option_history_clear_password").disabled = true;
                    $("option_history_clear_form").disabled = true;
                    $("btn_clear_history").disabled = true;
                    $("option_auto_clear_browserdata").disabled = true
                } else {
                    $("setting-history-tips").style.display = "none";
                    $("option_history_period").disabled = false;
                    $("option_history_clear_view").disabled = false;
                    $("option_history_clear_download").disabled = false;
                    $("option_history_clear_cookie").disabled = false;
                    $("option_history_clear_temp").disabled = false;
                    $("option_history_clear_password").disabled = false;
                    $("option_history_clear_form").disabled = false;
                    $("btn_clear_history").disabled = false;
                    $("option_auto_clear_browserdata").disabled = false
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("download.default_directory", (function(e) {
            if (e != null) {
                const container = $("option_save_pos");
                container.innerHTML = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.time_period", (function(e) {
            if (e != null) {
                $("option_history_period").selectedIndex = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.browser.clean_browsing_data", (function(e) {
            if (e != null) {
                $("option_auto_clear_browserdata").selectedIndex = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.browsing_history", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_view");
                box.checked = e.value
            }
        }
        ));





        chrome.settingsPrivate.getPref("browser.clear_data.download_history", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_download");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.cookies", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_cookie");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.cache", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_temp");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.passwords", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_password");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getDefaultZoom((function(scale) {
            const options = $("option_scale").options;
            for (let i = 0; i < options.length; i++) {
                if (parseFloat(options[i].value) == scale) {
                    options[i].selected = true
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("webkit.webprefs.default_font_size", (function(e) {
            const options = $("option_default_font_size").options;
            for (let i = 0; i < options.length; i++) {
                if (parseInt(options[i].value) == e.value) {
                    options[i].selected = true
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("translate.enabled", (function(e) {
            if (e != null) {
                const box = $("option_qax_translate_web_page");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("browser.clear_data.form_data", (function(e) {
            if (e != null) {
                const box = $("option_history_clear_form");
                box.checked = e.value
            }
        }
        ));


        
        sendWithPromise("getDefaultValueForContentType", "popups").then(onGetDefaultValueForContentType);
        chrome.settingsPrivate.getPref("credentials_enable_service", (function(e) {
            if (e != null) {
                const box = $("option_save_password");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("autofill.profile_enabled", (function(e) {
            if (e != null) {
                const box = $("option_auto_fill");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_switch", (function(e) {
            if (e != null) {
                const box = $("gesture_switch");
                box.checked = e.value
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_up", (function(e) {
            if (e != null) {
                const options = $("gesture_up").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_up failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_left", (function(e) {
            if (e != null) {
                const options = $("gesture_left").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_left failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_right", (function(e) {
            if (e != null) {
                const options = $("gesture_right").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_right failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_up_down", (function(e) {
            if (e != null) {
                const options = $("gesture_up_down").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_up_down failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_right_left", (function(e) {
            if (e != null) {
                const options = $("gesture_right_left").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_right_left failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_down_up", (function(e) {
            if (e != null) {
                const options = $("gesture_down_up").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_down_up failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_left_right", (function(e) {
            if (e != null) {
                const options = $("gesture_left_right").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_left_right failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_up_left", (function(e) {
            if (e != null) {
                const options = $("gesture_up_left").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_up_left failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_down_left", (function(e) {
            if (e != null) {
                const options = $("gesture_down_left").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_down_left failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_left_up", (function(e) {
            if (e != null) {
                const options = $("gesture_left_up").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_left_up failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_left_down", (function(e) {
            if (e != null) {
                const options = $("gesture_left_down").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_left_down failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_up_right", (function(e) {
            if (e != null) {
                const options = $("gesture_up_right").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_up_right failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_down_right", (function(e) {
            if (e != null) {
                const options = $("gesture_down_right").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_down_right failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_right_up", (function(e) {
            if (e != null) {
                const options = $("gesture_right_up").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_right_up failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_right_down", (function(e) {
            if (e != null) {
                const options = $("gesture_right_down").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_right_down failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("gesture_down", (function(e) {
            if (e != null) {
                const options = $("gesture_down").options;
                for (let i = 0; i < options.length; i++) {
                    if (parseInt(options[i].value) == e.value) {
                        options[i].selected = true
                    }
                }
            } else {
                console.log("get gesture_down failed")
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.show_proxy_menu_button", (function(e) {
            if (e != null) {
                if (e.key == "qax.show_proxy_menu_button") {
                    if (e.type == "BOOLEAN") {
                        $("option_show_proxy_menu_button").checked = e.value
                    }
                }
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.proxy_config", (e=>{
            if (e != null && e.value) {
                proxy_config = JSON.parse(e.value);
                onProxyConfigUpdate()
            }
        }
        ));
        chrome.settingsPrivate.getPref("qax.ukey_drivers_config", (res=>{
            if (res != null && res.value) {
                ukey_drivers_config = JSON.parse(res.value)
            }
        }
        ))
    }
}
async function setHomePage(checkUrlValidate=true) {
    const homePage = $("option_homepage_url").value.trim();
    const isValidate = await sendWithPromise("validateStartupPage", homePage);
    if (!isValidate && checkUrlValidate) {
        $("option_homepage_url").focus()
    } else {
        chrome.settingsPrivate.setPref("homepage_is_newtabpage", false, "", (function(success) {
            if (!success) {
                console.log("homepage_is_newtabpage false failed!")
            }
        }
        ));
        chrome.settingsPrivate.setPref("session.restore_on_startup", STARTUP_TYPE.OPEN_SPECIFIC, "", (function(success) {
            if (!success) {
                console.log("session.restore_on_startup 0 failed!")
            }
        }
        ));
        chrome.settingsPrivate.setPref("homepage", homePage, "", (function(success) {
            if (!success) {
                console.log("homepage failed!")
            } else {
                chrome.settingsPrivate.setPref("session.startup_urls", [homePage], "", (function(success) {
                    if (!success) {
                        console.log("homepage failed!")
                    } else {
                        onSettingSuccess()
                    }
                }
                ))
            }
        }
        ))
    }
}
function bindListener() {
    window.onpopstate = function(e) {
        if (e.state && e.state.blockclass) {
            const prevActive = $$.container.querySelector("#option_tabs li.active");
            const prevBlockClass = prevActive.dataset.block;
            const prevBlock = $$.container.querySelector(".setting." + prevBlockClass);
            const thisBlockClass = e.state.blockclass;
            const thisBlock = $$.container.querySelector(".setting." + thisBlockClass);
            prevActive !== null && prevActive.classList.remove("active");
            prevBlock !== null && prevBlock.classList.remove("active");
            const thisLi = $(e.state.id);
            thisLi.classList.add("active");
            thisBlock.classList.add("active")
        }
        qaxCommponent.set("showCertificateManager_", false)
    }
    ;
    const onSettingsPrivatePrefsChanged_ = function(prefs) {
        for (let i = 0; i < prefs.length; i++) {
            const pref = prefs[i];
            switch (pref.type) {
            case "STRING":
                if (pref.key == "download.default_directory") {
                    const container = $("option_save_pos");
                    container.innerHTML = pref.value;
                    onSettingSuccess()
                }
                if (pref.key == "qax.ukey_drivers_config") {
                    ukey_drivers_config = JSON.parse(pref.value);
                    renderUKeyDrivers()
                }
                if (pref.key == "qax.proxy_config") {
                    proxy_config = JSON.parse(pref.value);
                    onProxyConfigUpdate()
                }
                break;
            case "NUMBER":
                if (pref.key == "session.restore_on_startup") {
                    if (Object.values(STARTUP_TYPE).includes(pref.value)) {
                        $("onStartupRadioGroup").selected = pref.value
                    }
                }
                if (pref.key == "browser.clear_data.time_period") {
                    $("option_history_period").selectedIndex = pref.value
                }
                if (pref.key == "qax.browser.clean_browsing_data") {
                    $("option_auto_clear_browserdata").selectedIndex = pref.value
                }
                break;
            case "BOOLEAN":
                if (pref.key == "homepage_is_newtabpage") {
                    $("onStartupRadioGroup").selected = STARTUP_TYPE.OPEN_NEW_TAB;
                    getHomepageSettings()
                }
                if (pref.key == "qax.gmssl.enabled") {
                    $("option_ssl").checked = pref.value;
                    updateGMTridentStatus()
                }
                if (pref.key == "qax.gmssl.trident_enabled") {
                    $("option_trident_ssl").checked = pref.value;
                    updateGMTridentStatus()
                }
                if (pref.key !== "settings.a11y.enable_accessibility_image_labels" && pref.key !== "spellcheck.use_spelling_service") {
                    onSettingSuccess()
                }
                break;
            case "LIST":
                if (pref.key == "session.startup_urls") {
                    if (pref.value.length > 1) {
                        chrome.send("removeStartupPage", [0])
                    }
                }
                break;
            case "URL":
                if (pref.key == "homepage") {
                    $("option_homepage_url").value = pref.value
                }
                break;
            default:
                break
            }
        }
    };
    chrome.settingsPrivate.onPrefsChanged.addListener(onSettingsPrivatePrefsChanged_);
    $("option_homepage_is_newtabpage").onclick = function() {
        chrome.settingsPrivate.setPref("homepage_is_newtabpage", true, "", (function(success) {
            if (!success) {
                console.log("homepage_is_newtabpage true failed!")
            } else {
                onSettingSuccess();
                getHomepageSettings()
            }
        }
        ));
        chrome.settingsPrivate.setPref("session.restore_on_startup", STARTUP_TYPE.OPEN_NEW_TAB, "", (function(success) {
            if (!success) {
                console.log("session.restore_on_startup true failed!")
            }
        }
        ))
    }
    ;
    $("option_homepage_is_lastclosedpage").onclick = function() {
        chrome.settingsPrivate.setPref("session.restore_on_startup", STARTUP_TYPE.CONTINUE, "", (function(success) {
            if (!success) {
                console.log("session.restore_on_startup true failed!")
            } else {
                onSettingSuccess();
                getHomepageSettings()
            }
        }
        ));
        chrome.settingsPrivate.setPref("homepage_is_newtabpage", false, "", (function(success) {
            if (!success) {
                console.log("homepage_is_newtabpage true failed!")
            }
        }
        ))
    }
    ;
    $("option_homepage").onclick = function() {
        setHomePage(true)
    }
    ;
    $("option_homepage_url").onblur = function() {
        setHomePage(false)
    }
    ;
    $("option_homepage_url").onfocus = function() {
        chrome.settingsPrivate.setPref("homepage_is_newtabpage", false, "", (function(success) {
            if (!success) {
                console.log("homepage_is_newtabpage true failed!")
            }
        }
        ));
        chrome.settingsPrivate.setPref("session.restore_on_startup", STARTUP_TYPE.OPEN_SPECIFIC, "", (function(success) {
            if (!success) {
                console.log("session.restore_on_startup true failed!")
            }
        }
        ));
        $("onStartupRadioGroup").selected = STARTUP_TYPE.OPEN_SPECIFIC
    }
    ;
    $("show_home_button").onclick = function() {
        chrome.settingsPrivate.setPref("browser.show_home_button", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.show_home_button failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_search_engine").onchange = function() {
        chrome.send("setDefaultSearchEngine", [this.selectedIndex])
    }
    ;
    addWebUIListener("search-engines-changed", (data=>{
        onGetSearchEnginesList(0, true, data);
        onSettingSuccess()
    }
    ));
    $("option_default_browser").onclick = function() {
        chrome.send("setAsDefaultBrowser")
    }
    ;
    addWebUIListener("browser-default-state-changed", onDefaultBrowserChanged);
    $("btn_change_save_pos").onclick = function() {
        sendWithPromise("selectDownloadLocation")
    }
    ;
    $("btn_import_bookmark").onclick = function() {
        getbookmarkOption()
    }
    ;
    $("btn_confirm_modal_importbookmark_popup").onclick = function() {
        hideModal("modal_importbookmark_popup");
        const options = $("bookmark_select").options;
        Array.from(options).map((v=>{
            if (v.selected) {
                chrome.send("importData", [v.index, {
                    import_dialog_autofill_form_data: false,
                    import_dialog_bookmarks: true,
                    import_dialog_history: false,
                    import_dialog_saved_passwords: false,
                    import_dialog_search_engine: false,
                    import_dialog_is_new_folder: $("newFolder").checked
                }])
            }
        }
        ))
    }
    ;
    $("btn_chooseFile_modal_importbookmark_popup").onclick = function() {
        chrome.send("importFromBookmarksFile", [$("newFolder").checked ? 1 : 0])
    }
    ;
    addWebUIListener("import-data-status-changed", (importStatus=>{
        if (importStatus == "succeeded") {
            hideModal("modal_importbookmark_popup");
            showModal("modal_importbookmark_success_popup")
        } else if (importStatus == "failed") {
            hideModal("modal_importbookmark_popup");
            showModal("modal_importbookmark_failed_popup")
        }
    }
    ));
    $("btn_close_modal_importbookmark_popup").onclick = function() {
        hideModal("modal_importbookmark_popup");
        const path = window.location.pathname.split("/");
        if (path[1] == "importData") {
            history.pushState("", "", "")
        }
    }
    ;
    $("btn_success_modal_importbookmark_popup").onclick = function() {
        hideModal("modal_importbookmark_success_popup")
    }
    ;
    $("btn_failed_modal_importbookmark_popup").onclick = function() {
        hideModal("modal_importbookmark_failed_popup")
    }
    ;
    $("helpBtn").onclick = function() {
        showModal("modal_importbookmark_help_popup");
        hideModal("modal_importbookmark_popup")
    }
    ;
    $("btn_help_modal_importbookmark_popup").onclick = function() {
        hideModal("modal_importbookmark_help_popup");
        showModal("modal_importbookmark_popup")
    }
    ;
    $("modal_importbookmark_help_popup").addEventListener("close", (e=>{
        hideModal("modal_importbookmark_help_popup");
        showModal("modal_importbookmark_popup")
    }
    ));
    $("option_history_period").onchange = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.time_period", this.selectedIndex)
    }
    ;
    $("option_auto_clear_browserdata").onchange = function() {
        chrome.settingsPrivate.setPref("qax.browser.clean_browsing_data", this.selectedIndex)
    }
    ;
    $("option_history_clear_view").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.browsing_history", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.browsing_history failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_history_clear_download").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.download_history", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.download_history failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_history_clear_cookie").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.cookies", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.cookies failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_history_clear_temp").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.cache", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.cache failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_history_clear_password").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.passwords", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.passwords failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_history_clear_form").onclick = function() {
        chrome.settingsPrivate.setPref("browser.clear_data.form_data", this.checked, "", (function(success) {
            if (!success) {
                console.log("browser.clear_data.form_data failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("btn_clear_history").onclick = async function() {
        $("btn_clear_history").innerHTML = Base64.decode("5q2j5Zyo5riF6ZmkLi4uCg==");
        $("btn_clear_history").disabled = true;
        $("clear_history_done").style.display = "none";
        onSettingSuccess(Base64.decode("5q2j5Zyo5riF6ZmkLi4uCg=="));
        await sendWithPromise("initializeClearBrowsingData");
        const options = $("option_history_period").options;
        let timePeriod = 1;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                timePeriod = i
            }
        }
        const dataTypes = [];
        if ($("option_history_clear_view").checked) {
            dataTypes.push("browser.clear_data.browsing_history_basic")
        }
        if ($("option_history_clear_download").checked) {
            dataTypes.push("browser.clear_data.download_history")
        }
        if ($("option_history_clear_cookie").checked) {
            dataTypes.push("browser.clear_data.cookies")
        }
        if ($("option_history_clear_temp").checked) {
            dataTypes.push("browser.clear_data.cache")
        }
        if ($("option_history_clear_password").checked) {
            dataTypes.push("browser.clear_data.passwords")
        }
        if ($("option_history_clear_form").checked) {
            dataTypes.push("browser.clear_data.form_data")
        }
        await sendWithPromise("clearBrowsingData", dataTypes, timePeriod, []);
        onClearBrowsingData()
    }
    ;
    $("use-default-skin").onclick = function() {
        chrome.send("useDefaultTheme")
    }
    ;
    $("option_scale").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setDefaultZoom(parseFloat(optionValue))
    }
    ;
    $("option_default_font_size").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("webkit.webprefs.default_font_size", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_qax_translate_web_page").onclick = function() {
        if (!this.checked) {
            chrome.settingsPrivate.setPref("translate.enabled", this.checked, "", (function(success) {
                if (!success) {
                    console.log("failed!")
                } else {
                    onSettingSuccess()
                }
            }
            ))
        } else {
            this.checked = false;
            showModal("modal_translate_prompt")
        }
    }
    ;
    $("btn_cancel_enable_translate").onclick = function() {
        hideModal("modal_translate_prompt")
    }
    ;
    $("btn_enable_translate").onclick = function() {
        hideModal("modal_translate_prompt");
        $("option_qax_translate_web_page").checked = true;
        chrome.settingsPrivate.setPref("translate.enabled", true, "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_forbidden_popup").onclick = function() {
        if (this.checked) {
            chrome.send("setDefaultValueForContentType", ["popups", "block"])
        } else {
            chrome.send("setDefaultValueForContentType", ["popups", "allow"])
        }
        onSettingSuccess()
    }
    ;
    $("link_popup").onclick = function() {
        showModal("modal_popup");
        sendWithPromise("getExceptionList", "popups").then(onGetExceptionList)
    }
    ;
    $("btn_close_modal_popup").onclick = function() {
        hideModal("modal_popup")
    }
    ;
    $("btn_add_modal_ukey_driver").onclick = function() {
        sendWithPromise("qaxImportUkeyDriver").then((path=>{
            ukey_drivers_config.push({
                display_name: "",
                path: path
            });
            updateDriversConfig();
            alert("驱动添加成功，重启浏览器后生效。")
        }
        )).catch((path=>{
            alert("该驱动类型不支持，请选择正确的驱动。")
        }
        ))
    }
    ;
    $("btn_close_modal_ukey_driver").onclick = function() {
        hideModal("modal_ukey_driver")
    }
    ;
    $("btn_close_add_popup").onclick = function() {
        hideModal("modal_add_popup")
    }
    ;
    $("new_popup").oninput = function() {
        const site = this.value.trim();
        if (site) {
            $("btn_comfirm_add_popup").disabled = false
        } else {
            $("btn_comfirm_add_popup").disabled = true
        }
    }
    ;
    $("btn_comfirm_add_popup").onclick = function() {
        const site = $("new_popup").value.trim();
        if (site) {
            chrome.send("setCategoryPermissionForPattern", [site, "", "popups", "allow", false]);
            hideModal("modal_add_popup")
        }
    }
    ;
    $("option_save_password").onclick = function() {
        chrome.settingsPrivate.setPref("credentials_enable_service", this.checked, "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("link_pwd_saved").onclick = showPwdSavedDialog;
    $("link_pwd_not_save").onclick = function() {
        showModal("modal_pwd_not_save");
        chrome.passwordsPrivate.getPasswordExceptionList((function(res) {
            const container = $("pwd_not_save_site_list");
            container.innerHTML = "";
            if (res.length == 0) {
                const li = document.createElement("div");
                li.className = "center";
                li.innerHTML = "一律不保存密码的网站将显示在这里";
                container.appendChild(li)
            }
            for (let i = 0; i < res.length; i++) {
                const li = document.createElement("div");
                li.className = "list-item";
                const urls = res[i].urls;
                const a = document.createElement("a");
                a.innerHTML = urls.shown;
                a.href = urls.link;
                a.title = urls.link;
                a.className = "left";
                const button = document.createElement("cr-icon-button");
                button.className = "right icon-clear";
                button.setAttribute("iron-icon", "cr:clear");
                (function(i, li) {
                    button.addEventListener("click", (function() {
                        chrome.passwordsPrivate.removePasswordException(res[i].id);
                        li.style = "display:none;"
                    }
                    ))
                }
                )(i, li);
                li.appendChild(a);
                li.appendChild(button);
                container.appendChild(li)
            }
        }
        ))
    }
    ;
    $("btn_close_modal_pwd_saved").onclick = function() {
        hideModal("modal_pwd_saved")
    }
    ;
    $("btn_close_modal_pwd_not_save").onclick = function() {
        hideModal("modal_pwd_not_save")
    }
    ;
    $("option_auto_fill").onclick = function() {
        chrome.settingsPrivate.setPref("autofill.profile_enabled", this.checked, "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("link_auto_fill_saved").onclick = function() {
        showModal("modal_auto_fill_saved");
        chrome.autofillPrivate.getAddressList((function(res) {
            const container = $("auto_fill_saved_list");
            container.innerHTML = "";
            if (res.length == 0) {
                const li = document.createElement("div");
                li.className = "center";
                li.innerHTML = "已保存的地址将显示在这里";
                container.appendChild(li)
            }
            for (let i = 0; i < res.length; i++) {
                const li = document.createElement("li");
                li.className = "list-item";
                const divText = document.createElement("div");
                divText.innerHTML = res[i].addressLevel1 + res[i].addressLevel2 + res[i].addressLevel3 + res[i].addressLines;
                divText.setAttribute("title", Base64.decode("6YKu57yW77ya") + res[i].postalCode + "\n" + Base64.decode("55yB77ya") + res[i].addressLevel1 + "\n" + Base64.decode("5Z+O5biC77ya") + res[i].addressLevel2 + "\n" + Base64.decode("5Yy677ya") + res[i].addressLevel3 + "\n" + Base64.decode("6KGX6YGT5Zyw5Z2A77ya") + res[i].addressLines + "\n" + Base64.decode("57uE57uH77ya") + res[i].companyName + "\n" + Base64.decode("5ZCN56ew77ya") + res[i].fullNames.join(" ") + "\n" + Base64.decode("5Zu95a62L+WcsOWMuu+8mg==") + res[i].countryCode + "\n" + Base64.decode("55S16K+d77ya") + res[i].phoneNumbers.join(" ") + "\n" + Base64.decode("55S15a2Q6YKu5Lu277ya") + res[i].emailAddresses + "\n");
                divText.className = "left";
                const button = document.createElement("cr-icon-button");
                button.className = "right icon-clear";
                button.setAttribute("iron-icon", "cr:clear");
                (function(i, li) {
                    button.addEventListener("click", (function() {
                        chrome.autofillPrivate.removeEntry(res[i].guid);
                        li.style = "display:none;"
                    }
                    ))
                }
                )(i, li);
                li.appendChild(divText);
                li.appendChild(button);
                container.appendChild(li)
            }
        }
        ))
    }
    ;
    $("btn_close_modal_auto_fill_saved").onclick = function() {
        hideModal("modal_auto_fill_saved")
    }
    ;
    $("gesture_switch").onclick = function() {
        chrome.settingsPrivate.setPref("gesture_switch", this.checked, "", (function(success) {
            if (!success) {
                console.log("set homepage_is_newtabpage failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_up").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_up", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_up failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_down").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_down", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_down failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_left").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_left", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_left failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_right").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_right", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_right failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_up_down").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_up_down", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_up_down failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_right_left").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_right_left", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_right_left failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_down_up").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_down_up", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_down_up failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_left_right").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_left_right", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_left_right failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_up_left").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_up_left", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_up_left failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_down_left").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_down_left", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_down_left failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_left_up").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_left_up", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_left_up failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_left_down").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_left_down", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_left_down failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_up_right").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_up_right", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_up_right failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_down_right").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_down_right", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_down_right failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_right_up").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_right_up", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_right_up failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("gesture_right_down").onchange = function() {
        const optionValue = this.options[this.selectedIndex].value;
        chrome.settingsPrivate.setPref("gesture_right_down", parseInt(optionValue), "", (function(success) {
            if (!success) {
                console.log("gesture_right_down failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("link_manage_proxy").onclick = ()=>{
        showModal("modal_manage_proxy")
    }
    ;
    $("btn_close_modal_manage_proxy_close").onclick = ()=>{
        hideModal("modal_manage_proxy")
    }
    ;
    $("proxy_list_textarea").setAttribute("placeholder", Base64.decode("5L6L5aaC77yaCiAgICAgMTI3LjAuMC4xOjgwODAKICAgICBodHRwczovLzEyNy4wLjAuMTo4ODg4I+S7o+eQhuWQjeensAogICAgIHBhY0BodHRwOi8vMTI3LjAuMC4xOjg4ODUvcGF0aC9vZi9wYWNzY3JpcHQjUEFD5Luj55CG5ZCN56ew"));
    $("option_proxy").addEventListener("change", (e=>{
        const selected = $("option_proxy").value;
        if (selected == "__system__") {
            proxy_config.proxy_type = 0
        } else if (selected == "__none__") {
            proxy_config.proxy_type = 1
        } else {
            proxy_config.proxy_type = selected.startsWith("pac@") ? 3 : 2;
            proxy_config.current_proxy = selected
        }
        proxy_config.user_selected = true;
        updateProxyConfig()
    }
    ));
    $("option_show_proxy_menu_button").addEventListener("change", (e=>{
        chrome.settingsPrivate.setPref("qax.show_proxy_menu_button", $("option_show_proxy_menu_button").checked, "", (function(success) {
            if (!success) {
                onSettingFailed()
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ));
    $("proxy_list_textarea").addEventListener("blur", (()=>{
        proxy_config.proxys = [];
        const proxies = $("proxy_list_textarea").value.split("\n");
        for (let i = 0; i < proxies.length; i++) {
            let[server,display_name] = proxies[i].split("#");
            if (server != "") {
                if (typeof display_name == "string") {
                    display_name = filterHTMLTag(display_name.trim());
                    if (display_name.length > 20) {
                        display_name = display_name.substr(0, 20) + "..."
                    }
                }
                server = filterHTMLTag(server.trim());
                proxy_config.proxys.push({
                    display_name: display_name,
                    server: server
                })
            }
        }
        updateProxyConfig()
    }
    ));
    $("proxy_whitelist_textarea").addEventListener("blur", (()=>{
        const urls = br2semi($("proxy_whitelist_textarea").value);
        proxy_config.whitelist.urls = urls;
        updateProxyConfig()
    }
    ));
    $("option_proxy_disable_for_local").addEventListener("change", (e=>{
        proxy_config.whitelist.local = $("option_proxy_disable_for_local").checked;
        updateProxyConfig()
    }
    ));
    const open_crossdomin_beforechecked = $("open_crossdomin").checked;
    $("open_crossdomin").onclick = function() {
        $("button-opencross").style.display = "block";
        $("button-opensite").style.display = "none";
        $("button-intercepthttps").style.display = "none";
        saveTrustMsg("qax.disable_web_security", !$("open_crossdomin").checked)
    }
    ;
    $("btn_opencrossdomin_popup").onclick = function() {
        hideModal("modal_closeopencheckcert_popup")
    }
    ;
    $("btn_closeopencrossdomin_popup").onclick = function() {
        $("open_crossdomin").checked = false;
        hideModal("modal_closeopencheckcert_popup");
        saveTrustMsg("qax.disable_web_security", !$("open_crossdomin").checked)
    }
    ;
    const open_siteisolation_beforechecked = $("open_siteisolation").checked;
    $("open_siteisolation").onclick = function() {
        $("button-opencross").style.display = "none";
        $("button-opensite").style.display = "block";
        $("button-intercepthttps").style.display = "none";
        saveTrustMsg("qax.disable_site_isolation", !$("open_siteisolation").checked)
    }
    ;
    $("btn_opensite_popup").onclick = function() {
        hideModal("modal_closeopencheckcert_popup")
    }
    ;
    $("btn_closeopensite_popup").onclick = function() {
        $("open_siteisolation").checked = false;
        hideModal("modal_closeopencheckcert_popup");
        saveTrustMsg("qax.disable_site_isolation", !$("open_siteisolation").checked)
    }
    ;
    const checkcert_beforechecked = $("checkcert").checked;
    $("checkcert").onclick = function() {
        $("button-intercepthttps").style.display = "none";
        $("button-opencheckcert").style.display = "block";
        if (this.checked == false) {
            this.checked = checkcert_beforechecked;
            showModal("modal_closeopentrust_popup")
        } else {
            saveTrustMsg("qax.pass_cert_errors", !$("checkcert").checked)
        }
    }
    ;
    $("btn_opencheckcert_popup").onclick = function() {
        hideModal("modal_closeopentrust_popup")
    }
    ;
    $("btn_closeopencheckcert_popup").onclick = function() {
        $("checkcert").checked = false;
        hideModal("modal_closeopentrust_popup");
        saveTrustMsg("qax.pass_cert_errors", !$("checkcert").checked)
    }
    ;
    const intercept_https_beforechecked = $("intercept_https").checked;
    $("intercept_https").onclick = function() {
        $("button-opencheckcert").style.display = "none";
        $("button-intercepthttps").style.display = "block";
        if (this.checked == false) {
            this.checked = intercept_https_beforechecked;
            showModal("modal_closeopentrust_popup")
        } else {
            saveTrustMsg("qax.allow_running_insecure_content", !$("intercept_https").checked)
        }
    }
    ;
    $("btn_openintercepthttps_popup").onclick = function() {
        hideModal("modal_closeopentrust_popup")
    }
    ;
    $("btn_closeintercepthttps_popup").onclick = function() {
        $("intercept_https").checked = false;
        hideModal("modal_closeopentrust_popup");
        saveTrustMsg("qax.allow_running_insecure_content", !$("intercept_https").checked)
    }
    ;
    function saveTrustMsg(prefName, ischecked) {
        chrome.settingsPrivate.setPref(prefName, ischecked, "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    $("trust-certificate-mange").onclick = function() {
        showTrustModel()
    }
    ;
    $("btn_add_modal_trust_site").onclick = function() {
        hideErrorInfo();
        showModal("modal_add_trust_site");
        $("add_trustsite_input").focus();
        $("add_trustsite_input").value = "";
        hideModal("modal_trust_site");
        history.pushState("", "", "/trust")
    }
    ;
    $("btn_close_modal_trust_site").onclick = function() {
        hideModal("modal_trust_site");
        history.pushState("", "", "/trust")
    }
    ;
    $("modal_add_trust_site_confirm").onclick = async function() {
        const inputValue = $("add_trustsite_input").value.trim();
        if (inputValue.length <= 0) {
            showErrorInfo("网址不能为空")
        } else {
            if (inputValue.indexOf("<") >= 0 || inputValue.indexOf(">") >= 0) {
                showErrorInfo("网址格式不正确，请重新输入");
                return false
            }
            let dataList = await getSiteData();
            if (inputValue.includes("http://") || inputValue.includes("https://")) {
                let domain = inputValue.split("/");
                domain = domain[2] ? domain[2] : "";
                if (dataList.includes(domain)) {
                    showErrorInfo("此网站已被添加可信网站");
                    return false
                } else {
                    dataList.push(domain)
                }
            } else {
                if (dataList.includes(inputValue)) {
                    showErrorInfo("此网站已被添加可信网站");
                    return false
                } else {
                    dataList.push(inputValue)
                }
            }
            chrome.settingsPrivate.setPref("qax.trusted_site_list", dataList, "", (success=>{
                hideModal("modal_add_trust_site");
                showTrustModel()
            }
            ))
        }
    }
    ;
    $("modal_add_trust_site_close").onclick = function() {
        hideModal("modal_add_trust_site");
        showTrustModel()
    }
    ;
    $("modal_trust_site").addEventListener("close", (e=>{
        if (getRequest()) {
            history.pushState("", "", "/trust")
        }
    }
    ));
    $("link_ukey_driver").onclick = function() {
        showModal("modal_ukey_driver");
        renderUKeyDrivers()
    }
    ;
    $("cert_auto_select").onclick = function() {
        var autoSelect = $("cert_auto_select").checked;
        chrome.settingsPrivate.setPref("qax.cert_auto_select", autoSelect, (res=>{
            onSettingSuccess()
        }
        ))
    }
    ;
    $("option_open_dep_button").onclick = function() {
        var openDep = $("option_open_dep_button").checked;
        chrome.settingsPrivate.setPref("qax.trident_dep.enabled", openDep, (res=>{
            onSettingSuccess()
        }
        ))
    }
    ;
    $("option_cloud_safe_url").onclick = function() {
        var urlScan = $("option_cloud_safe_url").checked;
        chrome.settingsPrivate.setPref("qax.cloud_safe.url_scan_enabled", urlScan, "", (function(success) {
            if (!success) {
                console.log("failed!")
            } else {
                onSettingSuccess()
            }
        }
        ))
    }
    ;
    $("option_cloud_safe_download").onclick = function() {
        var downloadScan = $("option_cloud_safe_download").checked;
        chrome.settingsPrivate.setPref("qax.cloud_safe.download_scan_enabled", downloadScan, (res=>{
            onSettingSuccess()
        }
        ))
    }
    ;
    $("btn_manage_certificate").onclick = function() {
        qaxCommponent.set("showCertificateManager_", true)
    }
    ;
    $("page-setup").onclick = function() {
        showModal("modal_website");
        getSetPageData()
    }
    ;
    $("permissions_website").addEventListener("click", (async function(e) {
        const url = e.target.getAttribute("origin");
        if (e.target.nodeName == "CR-ICON-BUTTON") {
            chrome.send("setOriginPermissions", [url, getCategoryList([]), ContentSetting.DEFAULT]);
            if (getCategoryList([]).includes(ContentSettingsTypes.PLUGINS)) {
                chrome.send("clearFlashPref", [url])
            }
            getSetPageData()
        } else {
            enterWebsite(e)
        }
    }
    ), false);
    $("btn_reset_settings").onclick = function() {
        hideModal("modal_website_all");
        showModal("modal_reset_power");
        let site = $("reset_websitename").innerHTML;
        $("resetwebsite_name").innerHTML = toUrl(site);
        $("btn_reset_allpower").onclick = function() {
            chrome.send("setOriginPermissions", [site, getCategoryList([]), ContentSetting.DEFAULT]);
            if (getCategoryList([]).includes(ContentSettingsTypes.PLUGINS)) {
                chrome.send("clearFlashPref", [site]);
                showModal("modal_website_all");
                hideModal("modal_reset_power");
                isOriginValid(site)
            }
        }
    }
    ;
    $("btn_close_reset_power").onclick = function() {
        showModal("modal_website_all");
        hideModal("modal_reset_power")
    }
    ;
    $("modal_website_all").addEventListener("close", (e=>{
        if (getRequest()) {
            history.pushState("", "", "/siteData")
        }
    }
    ));
    $("modal_modal_website_all_close").onclick = function() {
        hideModal("modal_website_all")
    }
    ;
    $("modal_modal_website_close").onclick = function() {
        hideModal("modal_website")
    }
    ;
    $("btn_back_modal_website_all").onclick = function() {
        hideModal("modal_website_all");
        showModal("modal_website");
        getSetPageData()
    }
    ;
    $("gmssl-prefer-manage").onclick = function() {
        showGMSSLPreferModal()
    }
    ;
    $("btn_add_gmssl_prefer_site").onclick = function() {
        hideErrorInfo();
        showModal("modal_add_gmssl_prefer_site");
        $("add_gmssl_prefer_input").focus();
        $("add_gmssl_prefer_input").value = "";
        hideModal("modal_gmssl_prefer_site");
        history.pushState("", "", "/advanced")
    }
    ;
    $("btn_close_gmssl_prefer_site").onclick = function() {
        hideModal("modal_gmssl_prefer_site");
        history.pushState("", "", "/advanced")
    }
    ;
    $("modal_add_gmssl_prefer_confirm").onclick = async function() {
        const inputValue = $("add_gmssl_prefer_input").value.trim();
        if (inputValue.length <= 0) {
            showErrorInfo("网址不能为空")
        } else {
            if (inputValue.indexOf("<") >= 0 || inputValue.indexOf(">") >= 0) {
                showErrorInfo("网址格式不正确，请重新输入");
                return false
            }
            let dataList = await getGMSSLPreferSiteData();
            if (inputValue.includes("http://") || inputValue.includes("https://")) {
                let domain = inputValue.split("/");
                domain = domain[2] ? domain[2] : "";
                if (dataList.includes(domain)) {
                    showErrorInfo("此网站已被添加国密优先网站");
                    return false
                } else {
                    dataList.push(domain)
                }
            } else {
                if (dataList.includes(inputValue)) {
                    showErrorInfo("此网站已被添加国密优先网站");
                    return false
                } else {
                    dataList.push(inputValue)
                }
            }
            chrome.settingsPrivate.setPref("qax.gmssl.prefer_site_list", dataList, "", (success=>{
                hideModal("modal_add_gmssl_prefer_site");
                showGMSSLPreferModal()
            }
            ))
        }
    }
    ;
    $("modal_add_gmssl_prefer_close").onclick = function() {
        hideModal("modal_add_gmssl_prefer_site");
        showGMSSLPreferModal()
    }
    ;
    $("modal_gmssl_prefer_site").addEventListener("close", (e=>{
        if (getRequest()) {
            history.pushState("", "", "/advanced")
        }
    }
    ))
}
function showErrorInfo(text) {
    $("error_info").innerHTML = text;
    $("error_info").style.display = "block"
}
function hideErrorInfo() {
    $("error_info").style.display = "none"
}
async function showTrustModel() {
    showModal("modal_trust_site");
    history.pushState("", "", "/trust/website");
    let dataList = await getSiteData();
    buildDom(dataList);
    $("pwd_saved_trustsite_list").addEventListener("click", (async function(e) {
        if (e.target.nodeName == "CR-ICON-BUTTON") {
            dataList.splice(e.target.innerHTML, 1);
            chrome.settingsPrivate.setPref("qax.trusted_site_list", dataList, "", (success=>{}
            ));
            buildDom(dataList)
        }
    }
    ), false)
}
function getSiteData() {
    return new Promise(((resolve,reject)=>{
        chrome.settingsPrivate.getPref("qax.trusted_site_list", (function(e) {
            if (e.value) {
                const newUrl = [];
                e.value.filter((item=>{
                    if (newUrl.includes(item))
                        return false;
                    newUrl.push(item)
                }
                ));
                resolve(newUrl)
            }
        }
        ))
    }
    ))
}
function buildDom(dataList) {
    const container = $("pwd_saved_trustsite_list");
    container.innerHTML = "";
    if (dataList.length == 0) {
        const div = `<div class="center">已保存的网址将显示在这里</div>`;
        container.innerHTML = div
    } else {
        const div = dataList.map(((v,index)=>`<div class="list-item" id="site-items"><div class="left">${v}</div><cr-icon-button class="right icon-clear" iron-icon="cr:clear">${index}</cr-icon-button></div>`)).join("");
        container.innerHTML = div
    }
}
async function getSetPageData() {
    const allTypes = ["location", "media-stream-camera", "media-stream-mic", "notifications", "clipboard"];
    const promises = allTypes.map((item=>websiteGetExceptionList(item)));
    const allTypeData = (await Promise.all(promises)).flat();
    const obj = {};
    const newData = allTypeData.filter((item=>obj[item.displayName] ? 0 : obj[item.displayName] = 1));
    if (newData.length == 0) {
        let html = `<div class="nodata center">您设置权限的网站显示在这里</div>`;
        $("permissions_website").innerHTML = html
    } else {
        let html = newData.map(((v,index)=>`<div class="list-item" id="site-items">\n          <div class="left" id="websiteNameimg">\n              <site-favicon url="${v.origin}"></site-favicon>\n              <div class="websitename" id="websitename">${v.origin}</div>\n          </div>\n          <span class="iron-icon right" origin="${v.origin}">\n              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">\n              <defs>\n              <g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></g>\n              </defs>\n              <use xlink:href="#settings" x="0" y="0" />\n              </svg>\n          </span>\n          <cr-icon-button class="right icon-clear" iron-icon="cr:clear" role="button" origin="${v.origin}" embeddingOrigin="${v.embeddingOrigin}" incognito="${v.incognito}"></cr-icon-button>\n      </div>`)).join("");
        $("permissions_website").innerHTML = html
    }
}
function autoEnterWebsite() {
    let url = getRequest().site;
    isOriginValid(url);
    showModal("modal_website_all");
    $("modal_website_all_name").innerHTML = Base64.encode(toUrl(url));
    $("reset_websitename").innerHTML = Base64.encode(url)
}
function showPwdSavedDialog() {
    showModal("modal_pwd_saved");
    chrome.passwordsPrivate.getSavedPasswordList((function(res) {
        const container = $("pwd_saved_site_list");
        container.innerHTML = "";
        if (res.length == 0) {
            const li = document.createElement("div");
            li.className = "center";
            li.innerHTML = "已保存的密码将显示在这里";
            container.appendChild(li)
        }
        for (let i = 0; i < res.length; i++) {
            const li = document.createElement("div");
            li.className = "list-item";
            const urls = res[i].urls;
            const a = document.createElement("a");
            a.innerHTML = urls.shown;
            a.href = urls.link;
            a.title = urls.link;
            a.className = "left";
            const button = document.createElement("cr-icon-button");
            button.className = "right icon-clear";
            button.setAttribute("iron-icon", "cr:clear");
            (function(i, li) {
                button.addEventListener("click", (function() {
                    chrome.passwordsPrivate.removeSavedPassword(res[i].id);
                    li.style = "display:none;"
                }
                ))
            }
            )(i, li);
            li.appendChild(a);
            li.appendChild(button);
            container.appendChild(li)
        }
    }
    ))
}
async function websiteGetExceptionList(type) {
    const res = await sendWithPromise("getExceptionList", type);
    return res
}
function enterWebsite(e) {
    if (e.target.nodeName == "DIV") {
        if (e.target.innerHTML == "您设置权限的网站显示在这里") {
            return false
        }
        $("modal_website_all_name").innerHTML = toUrl(e.target.innerHTML);
        $("reset_websitename").innerHTML = e.target.innerHTML;
        isOriginValid(e.target.innerHTML)
    } else if (e.target.nodeName == "SPAN") {
        $("modal_website_all_name").innerHTML = toUrl(e.target.getAttribute("origin"));
        $("reset_websitename").innerHTML = e.target.getAttribute("origin");
        isOriginValid(e.target.getAttribute("origin"))
    }
    showModal("modal_website_all");
    hideModal("modal_website")
}
function isOriginValid(site) {
    let categoryList = getCategoryList([]);
    sendWithPromise("isOriginValid", site).then((valid=>{
        if (valid) {
            sendWithPromise("getOriginPermissions", site, categoryList).then((exceptionList=>{
                $("location").setAttribute("webpath", site);
                $("media-stream-camera").setAttribute("webpath", site);
                $("media-stream-mic").setAttribute("webpath", site);
                $("notifications").setAttribute("webpath", site);
                $("clipboard").setAttribute("webpath", site);
                getSelected($("location"), exceptionList[7]);
                getSelected($("media-stream-camera"), exceptionList[4]);
                getSelected($("media-stream-mic"), exceptionList[12]);
                getSelected($("notifications"), exceptionList[15]);
                getSelected($("clipboard"), exceptionList[5])
            }
            ))
        } else {
            Router.getInstance().navigateToPreviousRoute()
        }
    }
    ))
}
function getSelected(id, data) {
    for (let i = 0; i < id.options.length; i++) {
        if (id.options[i].value == data.setting) {
            if (data.source == "default") {
                id.options[0].selected = true
            } else if (data.source == "insecure-origin") {
                id.options[i].selected = true;
                id.disabled = true
            } else {
                id.options[i].selected = true
            }
        }
    }
}
function getCategoryList(contentTypes_) {
    if (contentTypes_.length === 0) {
        for (const typeName in ContentSettingsTypes) {
            const contentType = ContentSettingsTypes[typeName];
            if (contentType === ContentSettingsTypes.PROTECTED_CONTENT) {
                continue
            }
            if (contentType === ContentSettingsTypes.COOKIES || contentType === ContentSettingsTypes.PROTOCOL_HANDLERS || contentType === ContentSettingsTypes.ZOOM_LEVELS) {
                continue
            }
            contentTypes_.push(contentType)
        }
    }
    const addOrRemoveSettingWithFlag = (type,flag)=>{
        if (loadTimeData.getBoolean(flag)) {
            if (!contentTypes_.includes(type)) {
                contentTypes_.push(type)
            }
        } else {
            if (contentTypes_.includes(type)) {
                contentTypes_.splice(contentTypes_.indexOf(type), 1)
            }
        }
    }
    ;
    addOrRemoveSettingWithFlag(ContentSettingsTypes.BLUETOOTH_SCANNING, "enableExperimentalWebPlatformFeatures");
    addOrRemoveSettingWithFlag(ContentSettingsTypes.ADS, "enableSafeBrowsingSubresourceFilter");
    addOrRemoveSettingWithFlag(ContentSettingsTypes.PAYMENT_HANDLER, "enablePaymentHandlerContentSetting");
    addOrRemoveSettingWithFlag(ContentSettingsTypes.BLUETOOTH_DEVICES, "enableWebBluetoothNewPermissionsBackend");
    addOrRemoveSettingWithFlag(ContentSettingsTypes.WINDOW_PLACEMENT, "enableExperimentalWebPlatformFeatures");
    addOrRemoveSettingWithFlag(ContentSettingsTypes.FONT_ACCESS, "enableFontAccessContentSetting");
    return contentTypes_.slice(0)
}
function toUrl(originOrPattern) {
    if (originOrPattern.length == 0) {
        return null
    }
    originOrPattern = originOrPattern.replace("*://", "");
    originOrPattern = originOrPattern.replace("[*.]", "");
    return new URL(ensureUrlHasScheme(originOrPattern))
}
function ensureUrlHasScheme(url) {
    if (url.length == 0) {
        return url
    }
    return url.includes("://") ? url : "http://" + url
}
function getRequest() {
    var url = decodeURI(location.search);
    var theRequest = new Object;
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
        }
    }
    return theRequest
}
function getbookmarkOption() {
    $("btn_chooseFile_modal_importbookmark_popup").style.display = "none";
    $("btn_confirm_modal_importbookmark_popup").style.display = "block";
    sendWithPromise("initializeImportDialog").then((data=>{
        if (data.length > 1) {
            $("btn_confirm_modal_importbookmark_popup").style.display = "block";
            $("btn_chooseFile_modal_importbookmark_popup").style.display = "none"
        } else {
            $("btn_confirm_modal_importbookmark_popup").style.display = "none";
            $("btn_chooseFile_modal_importbookmark_popup").style.display = "block"
        }
        const bookSelectBox = $("bookmark_select");
        const options = data.map((v=>`<option value="${v.index}">${v.name}</option>`)).join("");
        bookSelectBox.innerHTML = options;
        showModal("modal_importbookmark_popup");
        $("modal_importbookmark_popup").addEventListener("close", (e=>{
            const path = window.location.pathname.split("/");
            if (path[1] == "importData") {
                history.pushState("", "", "")
            }
        }
        ))
    }
    )).catch((error=>{
        console.log("bookmarkError", error)
    }
    ))
}
function updateGMTridentStatus() {
    $("option_trident_ssl").disabled = !$("option_ssl").checked || $("option_ssl").disabled;
    $("option_trident_ssl").style.display = $("option_ssl").checked ? "flex" : "none"
}
async function showGMSSLPreferModal() {
    showModal("modal_gmssl_prefer_site");
    history.pushState("", "", "/advanced/gmsslwebsite");
    let dataList = await getGMSSLPreferSiteData();
    buildGMSSLPreferDom(dataList);
    $("saved_gmssl_prefer_list").addEventListener("click", (async function(e) {
        if (e.target.nodeName == "CR-ICON-BUTTON") {
            dataList.splice(e.target.innerHTML, 1);
            chrome.settingsPrivate.setPref("qax.gmssl.prefer_site_list", dataList, "", (success=>{}
            ));
            buildGMSSLPreferDom(dataList)
        }
    }
    ), false)
}
function getGMSSLPreferSiteData() {
    return new Promise(((resolve,reject)=>{
        chrome.settingsPrivate.getPref("qax.gmssl.prefer_site_list", (function(e) {
            if (e.value) {
                const newUrl = [];
                e.value.filter((item=>{
                    if (newUrl.includes(item))
                        return false;
                    newUrl.push(item)
                }
                ));
                resolve(newUrl)
            }
        }
        ))
    }
    ))
}
function buildGMSSLPreferDom(dataList) {
    const container = $("saved_gmssl_prefer_list");
    container.innerHTML = "";
    if (dataList.length == 0) {
        const div = `<div class="center">已添加的国密优先网址将显示在这里</div>`;
        container.innerHTML = div
    } else {
        const div = dataList.map(((v,index)=>`<div class="list-item" id="site-items"><div class="left">${v}</div><cr-icon-button class="right icon-clear" iron-icon="cr:clear">${index}</cr-icon-button></div>`)).join("");
        container.innerHTML = div
    }
}
function onProxyConfigUpdate() {
    let html = '<option value="__system__">';
    html += Base64.decode("5L2/55SoSUXku6PnkIborr7nva4=");
    html += `</option><option value="__none__">${Base64.decode("5LiN5L2/55So5Luj55CG5pyN5Yqh5ZmoDQo=")}</option>`;
    if (Array.isArray(proxy_config.server_proxys) && proxy_config.server_proxys.length > 0) {
        html += `<option value="" disabled style="color: #f0f0f0;">${Base64.decode("4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU")}</option>`;
        for (let i = 0; i < proxy_config.server_proxys.length; i++) {
            const item = proxy_config.server_proxys[i];
            let displayName = item.display_name;
            if (!displayName || displayName == "") {
                displayName = item.server
            }
            displayName = displayName.length > 20 ? displayName.substr(0, 20) + "..." : displayName;
            html += `<option value="${item.server}">${displayName}</option>`
        }
    }
    if (proxy_config.proxys.length > 0) {
        html += `<option value="" disabled style="color: #f0f0f0;">${Base64.decode("4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU")}</option>`
    }
    let txt = "";
    $("option_proxy").innerHTML = html;
    for (let i = 0; i < proxy_config.proxys.length; i++) {
        const item = proxy_config.proxys[i];
        let displayName = item.display_name;
        if (!displayName || displayName == "") {
            displayName = item.server.length > 20 ? item.server.substr(0, 20) + "..." : item.server;
            txt += item.server + "\n"
        } else {
            txt += item.server + "#" + displayName + "\n"
        }
        const option = new Option(displayName,item.server,item.server == proxy_config.current_proxy);
        $("option_proxy").options.add(option)
    }
    switch (proxy_config.proxy_type) {
    case 0:
        $("option_proxy").value = "__system__";
        break;
    case 1:
        $("option_proxy").value = "__none__";
        break;
    case 2:
    case 3:
        $("option_proxy").value = proxy_config.current_proxy;
        break
    }
    $("proxy_list_textarea").value = txt;
    $("option_proxy_disable_for_local").checked = proxy_config.whitelist.local;
    $("proxy_whitelist_textarea").value = proxy_config.whitelist.urls.replace(/;/g, "\n")
}
function updateProxyConfig() {
    chrome.settingsPrivate.setPref("qax.proxy_config", JSON.stringify(proxy_config), "", (success=>{}
    ))
}
function updateDriversConfig() {
    chrome.settingsPrivate.setPref("qax.ukey_drivers_config", JSON.stringify(ukey_drivers_config), "", (success=>{}
    ))
}
function filterHTMLTag(msg) {
    var msg = msg.replace(/<\/?[^>]*>/g, "");
    msg = msg.replace(/[|]*\n/, "");
    msg = msg.replace(/&npsp;/gi, "");
    return msg
}
function br2semi(str) {
    const list = str.split("\n");
    const lines = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.trim() != "") {
            lines.push(element.trim())
        }
    }
    return lines.join(";")
}
function showModal(modal_id) {
    if ($(modal_id).tagName == "CR-DIALOG") {
        $(modal_id).showModal()
    } else {
        $(modal_id).style.display = "block"
    }
}
function hideModal(modal_id) {
    if ($(modal_id).tagName == "CR-DIALOG") {
        $(modal_id).close()
    } else {
        $(modal_id).style.display = "none"
    }
}
function translate(nodeValue) {
    const re = /\{(.*)\}/;
    if (isNaN(nodeValue)) {
        return Base64.decode(nodeValue.replace(re, "$1")).trim()
    } else {
        return nodeValue
    }
}
function traverseNodes(node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        if (node.hasChildNodes) {
            const sonNodes = node.childNodes;
            for (let i = 0; i < sonNodes.length; i++) {
                const sonNode = sonNodes.item(i);
                traverseNodes(sonNode)
            }
        }
    } else if (node.nodeType == Node.TEXT_NODE) {
        if (node.parentElement.nodeName != "STYLE") {
            node.nodeValue = translate(node.nodeValue)
        }
    } else {
        return
    }
}
function onDefaultBrowserChanged(browser) {
    if (browser.isDefault) {
        $("option_default_browser").disabled = true;
        $("is-not-default-browser").style.display = "none";
        $("is-default-browser").style.display = "block"
    }
}
function onGetSearchEnginesList(callback_id, ret, value) {
    if (ret) {
        const engineList = value.defaults;
        const engineSelect = $("option_search_engine");
        engineSelect.innerHTML = "";
        for (let i = 0; i < engineList.length; i++) {
            const engine = engineList[i];
            const option = document.createElement("option");
            option.innerHTML = engine.displayName;
            if (engine.default) {
                option.selected = true
            }
            engineSelect.appendChild(option)
        }
    } else {
        console.log("get search engine list failed.")
    }
}
function onGetExceptionList(siteList) {
    const container = $("popup_site_list");
    container.innerHTML = "";
    if (siteList.length == 0) {
        const li = document.createElement("div");
        li.className = "center";
        li.innerHTML = "始终允许弹出式窗口的网站将显示在这里";
        container.appendChild(li)
    }
    for (let i = 0; i < siteList.length; i++) {
        const li = document.createElement("div");
        li.className = "list-item";
        const divText = document.createElement("div");
        const url = new URL(siteList[i].displayName);
        divText.innerHTML = url.hostname;
        divText.className = "left";
        const button = document.createElement("cr-icon-button");
        button.className = "right icon-clear";
        button.setAttribute("iron-icon", "cr:clear");
        (function(i, li) {
            button.addEventListener("click", (function() {
                chrome.send("resetCategoryPermissionForPattern", [siteList[i].origin, "", "popups", false]);
                li.style = "display:none;"
            }
            ))
        }
        )(i, li);
        li.appendChild(divText);
        li.appendChild(button);
        container.appendChild(li)
    }
}
function renderUKeyDrivers() {
    const container = $("ukey_driver_list");
    container.innerHTML = "";
    const driverList = ukey_drivers_config;
    if (driverList.length == 0) {
        const li = document.createElement("div");
        li.className = "center";
        li.innerHTML = "已添加的USB Key驱动将显示在这里";
        container.appendChild(li)
    }
    for (let i = 0; i < driverList.length; i++) {
        const li = document.createElement("div");
        li.className = "list-item";
        const divText = document.createElement("div");
        divText.innerHTML = driverList[i].display_name + "  " + driverList[i].path;
        divText.className = "left";
        const button = document.createElement("cr-icon-button");
        button.className = "right icon-clear";
        button.setAttribute("iron-icon", "cr:clear");
        (function(i, li) {
            button.addEventListener("click", (function() {
                ukey_drivers_config.splice(i, 1);
                updateDriversConfig();
                li.style = "display:none;"
            }
            ))
        }
        )(i, li);
        li.appendChild(divText);
        li.appendChild(button);
        container.appendChild(li)
    }
}
function onClearBrowsingData(cb, ret) {
    setTimeout((function() {
        const button = $("btn_clear_history");
        button.innerHTML = Base64.decode("5byA5aeL5riF6ZmkCg==");
        button.disabled = false;
        showClearHistoryDone()
    }
    ), 1500)
}
function showClearHistoryDone() {
    $("clear_history_done").style.display = "inline";
    setTimeout((function() {
        $("clear_history_done").style.display = "none"
    }
    ), 1500)
}
function onSettingSuccess(message) {
    if (!message) {
        message = Base64.decode("6K6+572u5bey5L+d5a2YCg==")
    }
    $("message_success").innerHTML = message;
    $("message_success").style.display = "inline";
    setTimeout((function() {
        $("message_success").style.display = "none"
    }
    ), 1500)
}
function onSettingFailed(message) {
    if (!message) {
        message = Base64.decode("6K6+572u5L+d5a2Y5aSx6LSl")
    }
    $("message_success").innerHTML = message;
    $("message_success").style.display = "inline";
    setTimeout((function() {
        $("message_success").style.display = "none"
    }
    ), 1500)
}
function onGetDefaultValueForContentType(ret) {
    const box = $("option_forbidden_popup");
    if (ret.setting == "allow") {
        box.checked = false
    } else {
        box.checked = true
    }
}
window.onload = ()=>{
    init()
}
;
const template = document.createElement("template");
template.innerHTML = `<dom-module id="cr-page-host-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-page-host-style">:host {\n  color: var(--cr-primary-text-color);\n        line-height: 154%; \n        overflow: hidden; \n        user-select: text;\n}\n\n</style>\n  </template>\n</dom-module>\n`;
document.body.appendChild(template.content.cloneNode(true));
// Copyright 2020 The Chromium Authors. All rights reserved.
const template$1 = document.createElement("template");
template$1.innerHTML = `<dom-module id="certificate-shared">\x3c!--_html_template_start_--\x3e\n<template>\n  <style include="cr-shared-style" scope="certificate-shared">.list-frame {\n  align-items: center;\n      display: block;\n      padding-inline-end: 20px;\n      padding-inline-start: 60px;\n}\n\n.list-item {\n  align-items: center;\n      display: flex;\n      min-height: 48px;\n}\n\n.list-item.underbar {\n  border-bottom: var(--cr-separator-line);\n}\n\n.list-item.selected {\n  font-weight: 500;\n}\n\n.list-item>.start {\n  flex: 1;\n}\n\n</style>\n</template>\x3c!--_html_template_end_--\x3e</dom-module>\n`;
document.body.appendChild(template$1.content.cloneNode(true));
// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificate-delete-confirmation-dialog",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><cr-dialog id="dialog" close-text="[[i18n('close')]]">
  <div slot="title">
    [[getTitleText_(model, certificateType)]]
  </div>
  <div slot="body">
    <div>[[getDescriptionText_(model, certificateType)]]</div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelTap_">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button id="ok" class="action-button" on-click="onOkTap_">
      [[i18n('ok')]]
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`,
    behaviors: [I18nBehavior],
    properties: {
        model: Object,
        certificateType: String
    },
    attached() {
        this.$.dialog.showModal()
    },
    getTitleText_() {
        return `要删除 CA 证书“${this.model.name}”吗？`
    },
    getDescriptionText_() {
        return "如果您删除了某个证书授权中心 (CA) 证书，则浏览器不会再信任该 CA 颁发的任何证书。"
    },
    onCancelTap_() {
        this.$.dialog.close()
    },
    onOkTap_() {
        sendWithPromise("qaxDeleteCertificate", this.model.id).then((()=>{
            this.$.dialog.close()
        }
        )).catch((()=>{
            this.$.dialog.close();
            alert("证书删除失败")
        }
        ))
    }
});
// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="cr-policy-indicator"></style>
    <cr-tooltip-icon hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]">
    </cr-tooltip-icon>
<!--_html_template_end_-->`,
    is: "cr-policy-indicator",
    behaviors: [CrPolicyIndicatorBehavior],
    properties: {
        iconAriaLabel: String,
        indicatorTooltip_: {
            type: String,
            computed: "getIndicatorTooltip_(indicatorType, indicatorSourceName)"
        }
    },
    getIndicatorTooltip_(indicatorType, indicatorSourceName) {
        return this.getIndicatorTooltip(indicatorType, indicatorSourceName)
    }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
const CertificateAction = {
    DELETE: 0,
    EDIT: 1,
    EXPORT_PERSONAL: 2,
    IMPORT: 3,
    VIEW: 4
};
const CertificateActionEvent = "certificate-action";
// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificate-subentry",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="certificate-shared cr-icons" scope="certificate-subentry">.name {
  flex: auto;
}

:host([is-last]) .list-item {
  border-bottom: none;
}

</style>
<div class="list-item underbar">
  <div class="name">[[model.name]]</div>
  <cr-icon-button class="icon-more-vert" id="dots" title="[[i18n('moreActions')]]" on-click="onDotsTap_">
  </cr-icon-button>
  <cr-lazy-render id="menu">
    <template>
      <cr-action-menu role-description="[[i18n('menu')]]">
        <button class="dropdown-item" id="view" on-tap="onViewTap_">
          查看
        </button>
        <button class="dropdown-item" id="delete" hidden$="[[!canDelete_(model)]]" on-tap="onDeleteTap_">
          删除
        </button>
      </cr-action-menu>
    </template>
  </cr-lazy-render>
  <div><!--_html_template_end_--></div></div>`,
    behaviors: [I18nBehavior],
    properties: {
        model: Object,
        certificateType: String
    },
    dispatchCertificateActionEvent_(action) {
        this.fire(CertificateActionEvent, {
            action: action,
            model: this.model,
            anchor: this.$.dots
        })
    },
    onViewTap_(event) {
        this.closePopupMenu_();
        this.dispatchCertificateActionEvent_(CertificateAction.VIEW)
    },
    onDeleteTap_(event) {
        this.closePopupMenu_();
        this.dispatchCertificateActionEvent_(CertificateAction.DELETE)
    },
    canDelete_(model) {
        return model.canBeDeleted
    },
    closePopupMenu_() {
        this.$$("cr-action-menu").close()
    },
    onDotsTap_() {
        const actionMenu = this.$.menu.get();
        actionMenu.showAt(this.$.dots)
    }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificate-entry",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="certificate-shared iron-flex" scope="certificate-entry">.expand-box {
  align-items: center;
    border-top: var(--cr-separator-line);
    display: flex;
    min-height: 48px;
    padding: 0 20px;
}

</style>
<div class="expand-box">
  <div class="flex">[[model.name]]</div>
  <cr-expand-button expanded="{{expanded_}}" alt="显示用于特定组织的证书" title="显示用于特定组织的证书">
  </cr-expand-button>
</div>
<template is="dom-if" if="[[expanded_]]">
  <div class="list-frame">
    <template is="dom-repeat" items="[[model.subnodes]]">
      <certificate-subentry model="[[item]]" is-last$="[[isLast_(index, model)]]">
      </certificate-subentry>
    </template>
  </div>
</template><!--_html_template_end_-->`,
    behaviors: [I18nBehavior],
    properties: {
        model: Object,
        certificateType: String
    },
    isLast_(index) {
        return index === this.model.subnodes.length - 1
    }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificate-list",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><template is="dom-repeat" items="[[certificates]]">
  <certificate-entry model="[[item]]" certificate-type="[[certificateType]]">
  </certificate-entry>
</template><!--_html_template_end_-->`,
    properties: {
        certificates: {
            type: Array,
            value() {
                return []
            }
        },
        certificateType: {
            type: String,
            value() {
                return "rsa"
            }
        }
    },
    behaviors: [I18nBehavior]
});
// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificates-error-dialog",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="certificate-shared" scope="certificates-error-dialog"></style>
<cr-dialog id="dialog" close-text="[[i18n('close')]]">
  <div slot="title">[[model.title]]</div>
  <div slot="body">
    <div>[[model.description]]</div>
    <template is="dom-if" if="[[model.certificateErrors]]">
      <template is="dom-repeat" items="[[model.certificateErrors]]">
        <div>[[getCertificateErrorText_(item)]]</div>
      </template>
    </template>
  </div>
  <div slot="button-container">
    <cr-button id="ok" class="action-button" on-click="onOkTap_">
      [[i18n('ok')]]
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`,
    behaviors: [I18nBehavior],
    properties: {
        model: Object
    },
    attached() {
        this.$.dialog.showModal()
    },
    onOkTap_() {
        this.$.dialog.close()
    },
    getCertificateErrorText_(importError) {
        return loadTimeData.getStringF("certificateImportErrorFormat", importError.name, importError.error)
    }
});
// Copyright 2015 The Chromium Authors. All rights reserved.
Polymer({
    is: "certificate-manager",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style certificate-shared iron-flex" scope="certificate-manager">cr-tabs {
  --cr-tabs-font-size: inherit;
    --cr-tabs-height: 40px;
    margin-bottom: 24px;
}

cr-button {
  border-radius: .2em;
}

.button-box {
  align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

#moreCertsToggle {
  --ink-color: currentColor;
    align-items: center;
    background: transparent;
    border: none;
    box-shadow: none;
    color: currentColor;
    display: flex;
    font-weight: 400;
    margin-bottom: 3px;
    margin-top: 12px;
    
    min-height: 32px;
    padding: 0 12px;
}

#toggleContainer {
  align-items: center;
    color: var(--cr-primary-text-color);
    display: flex;
    font: inherit;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
}

#spinner {
  margin-left: 10px;
}

.header .title {
  color: var(--cr-title-text-color);
    font-size: 108%;
    font-weight: 400;
    letter-spacing: .25px;
    margin-bottom: 6px;
    margin-top: var(--cr-section-vertical-margin);
    outline: none;
    padding-bottom: 2px;
    padding-top: 8px;
}

.card {
  background-color: var(--cr-card-background-color);
    border-radius: var(--cr-card-border-radius);
    box-shadow: var(--cr-card-shadow);
    flex: 1;
}

cr-tabs {
  margin-bottom: 2px;
}

.dialog-title {
  padding-bottom: 0px;
}

.empty-text {
  text-align: center;
    color: var(--google-grey-500);
}

</style>
<template is="dom-if" if="[[showDeleteConfirmationDialog_]]" restamp="">
  <certificate-delete-confirmation-dialog model="[[dialogModel_]]">
  </certificate-delete-confirmation-dialog>
</template>
<template is="dom-if" if="[[showErrorDialog_]]" restamp="">
  <certificates-error-dialog model="[[errorDialogModel_]]">
  </certificates-error-dialog>
</template>
<cr-dialog id="dialog" close-text="[[i18n('close')]]" show-close-button="">
  <div slot="title" class="dialog-title">
    证书管理
    <cr-tabs hidden="[[hiddenGm]]" selected="{{selected}}" tab-names="[[tabNames_]]"></cr-tabs>
  </div>

  <div slot="body">
    <iron-pages selected="[[selected]]">
      <div>
        <div class="header">
          <h2 class="title" tabindex="-1">导入的证书</h2>
        </div>
        <!-- <div class="card"> -->
        <div class="empty-text">[[getEmptyDescriptionText_(rsaCerts.deletable)]]</div>
        <certificate-list id="rsaCertsDeletable" certificates="[[rsaCerts.deletable]]" certificate-type="[[CertificateType.RSA]]">
        </certificate-list>
        <!-- </div> -->

        <template is="dom-if" if="[[hasBuiltinCerts_(rsaCerts.readonly,'rsa')]]">
          <div class="header">
            <h2 class="title" tabindex="-1">预置的证书</h2>
          </div>
          <certificate-list id="rsaCertsReadonly" certificates="[[rsaCerts.readonly]]" certificate-type="[[CertificateType.RSA]]">
          </certificate-list>
        </template>

      </div>
      <div hidden="[[hiddenGm]]">
        <template is="dom-if" if="[[isTabSelected_(selected, 1)]]">
          <div class="header">
            <h2 class="title" tabindex="-1">导入的证书</h2>
          </div>
          <div class="empty-text">[[getEmptyDescriptionText_(gmCerts.deletable)]]</div>
          <certificate-list id="gmCertsDeletable" certificates="[[gmCerts.deletable]]" certificate-type="[[CertificateType.GM]]">
          </certificate-list>
          <template is="dom-if" if="[[hasBuiltinCerts_(gmCerts.readonly,'gm')]]">
            <div class="header">
              <h2 class="title" tabindex="-1">预置的证书</h2>
            </div>
            <certificate-list id="gmCertsReadonly" certificates="[[gmCerts.readonly]]" certificate-type="[[CertificateType.GM]]">
            </certificate-list>
          </template>

        </template>
      </div>
    </iron-pages>
  </div>

  <div slot="button-container">
    <div class="button-box">
      <cr-button id="import" on-click="onImportTap_">导入证书</cr-button>
      <paper-spinner-lite id="spinner"></paper-spinner-lite>
      <cr-button id="close" class="action-button" on-click="onCloseTap_">
        [[i18n('close')]]
      </cr-button>
    </div>
<!--_html_template_end_--></div></cr-dialog>`,
    behaviors: [I18nBehavior, WebUIListenerBehavior],
    properties: {
        selected: {
            type: Number,
            value: 0
        },
        certificates: {
            type: Array,
            value() {
                return []
            }
        },
        hiddenGm: Boolean,
        rsaCerts: {
            type: Object,
            value() {
                return {
                    readonly: [],
                    deletable: []
                }
            }
        },
        readOnlyCerts: {
            type: Array,
            value() {
                return []
            }
        },
        gmCerts: {
            type: Array,
            value() {
                return {
                    readonly: [],
                    deletable: []
                }
            }
        },
        tabNames_: {
            type: Array,
            computed: "computeTabNames_()"
        },
        dialogModel_: Object,
        showDeleteConfirmationDialog_: Boolean,
        errorDialogModel_: Object,
        showErrorDialog_: Boolean
    },
    attached() {
        addWebUIListener("qaxCertificatesChanged", ((type,data)=>{
            this.certificates = data;
            this.processCertificates()
        }
        ));
        chrome.send("qaxRefreshCertificates");
        this.$.dialog.showModal()
    },
    processCertificates() {
        const orgsRSADeletable = new Map;
        const orgsRSAReadOnly = new Map;
        const orgsGMDeletable = new Map;
        const orgsGMReadOnly = new Map;
        for (let i = 0; i < this.certificates.length; i++) {
            const cert = this.certificates[i];
            let orgs;
            if (cert.isGM) {
                if (cert.canBeDeleted) {
                    orgs = orgsGMDeletable
                } else {
                    orgs = orgsGMReadOnly
                }
            } else {
                if (cert.canBeDeleted) {
                    orgs = orgsRSADeletable
                } else {
                    orgs = orgsRSAReadOnly
                }
            }
            if (orgs.has(cert.orgName)) {
                const org = orgs.get(cert.orgName);
                org.push(cert)
            } else {
                orgs.set(cert.orgName, [cert])
            }
        }
        const rsaDeletableList = []
          , rsaReadOnlyList = [];
        orgsRSADeletable.forEach(((value,key)=>{
            rsaDeletableList.push({
                name: key,
                subnodes: value
            })
        }
        ));
        orgsRSAReadOnly.forEach(((value,key)=>{
            rsaReadOnlyList.push({
                name: key,
                subnodes: value
            })
        }
        ));
        this.rsaCerts = {
            deletable: rsaDeletableList,
            readonly: rsaReadOnlyList
        };
        const gmDeletableList = []
          , gmReadOnlyList = [];
        orgsGMDeletable.forEach(((value,key)=>{
            gmDeletableList.push({
                name: key,
                subnodes: value
            })
        }
        ));
        orgsGMReadOnly.forEach(((value,key)=>{
            gmReadOnlyList.push({
                name: key,
                subnodes: value
            })
        }
        ));
        this.gmCerts = {
            deletable: gmDeletableList,
            readonly: gmReadOnlyList
        }
    },
    getEmptyDescriptionText_(data) {
        if (data.length == 0) {
            return "您还没有此类证书"
        }
        return ""
    },
    hasBuiltinCerts_(data, type) {
        if (data.length > 0) {
            return true
        } else {
            return false
        }
    },
    isTabSelected_(selectedIndex, tabIndex) {
        return selectedIndex === tabIndex
    },
    ready() {
        this.addEventListener(CertificateActionEvent, (event=>{
            this.dialogModel_ = event.detail.model;
            if (event.detail.action === CertificateAction.VIEW) {
                sendWithPromise("qaxViewCertificate", this.dialogModel_.id)
            } else if (event.detail.action === CertificateAction.DELETE) {
                this.openDialog_("certificate-delete-confirmation-dialog", "showDeleteConfirmationDialog_", event.detail.anchor);
                event.stopPropagation()
            }
        }
        ));
        this.addEventListener("certificates-error", (event=>{
            const detail = event.detail;
            this.errorDialogModel_ = detail.error;
            this.openDialog_("certificates-error-dialog", "showErrorDialog_", detail.anchor);
            event.stopPropagation()
        }
        ));
        this.$.dialog.addEventListener("close", (e=>{
            if (this.$.dialog == e.target) {
                this.fire("overlay-close")
            }
        }
        ))
    },
    openDialog_(dialogTagName, domIfBooleanName, anchor) {
        if (anchor) {
            this.activeDialogAnchor_ = anchor
        }
        this.set(domIfBooleanName, true);
        this.async((()=>{
            const dialog = this.$$(dialogTagName);
            dialog.addEventListener("close", (()=>{
                this.set(domIfBooleanName, false);
                focusWithoutInk(assert(this.activeDialogAnchor_))
            }
            ))
        }
        ))
    },
    onCloseTap_() {
        this.$.dialog.close()
    },
    onImportTap_(e) {
        sendWithPromise("qaxImportCertificates").then((ok=>{
            if (ok) {
                this.fire("certificates-error", {
                    error: {
                        title: "证书导入",
                        description: "证书导入成功。"
                    },
                    anchor: e.target
                })
            }
        }
        )).catch((error=>{
            if (error != null) {
                this.fire("certificates-error", {
                    error: error,
                    anchor: e.target
                })
            } else {
                this.fire("certificates-error", {
                    error: {
                        title: "证书导入",
                        description: "证书导入失败！"
                    },
                    anchor: e.target
                })
            }
        }
        ))
    },
    computeTabNames_() {
        return ["RSA证书", "国密证书"]
    }
});
// Copyright 2015 The Chromium Authors. All rights reserved.
Polymer({
    is: "settings-ui",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style scope="settings-ui">:host > * {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

html {
  overflow-y: scroll !important;
}

body {
  margin: 0;
        padding: 0;
}

#container {
  color: #828282;
        font-family: "Microsoft Yahei";
}

h2 {
  margin: 0;
}

ul {
  margin: 0;
        padding: 0;
        list-style: none;
}

select {
  font-size: .8rem;
        min-width: 12em;
        height: 2.25em;
        color: #2c4258;
        background-color: #fff;
        padding-left: 1em;
        border-radius: 3px;
}

select:focus {
  outline: none;
}

select:hover {
  border-color: #369ffa;
        box-shadow: 0 2px 2px #eee;
}

button {
  font-size: .8rem;
        padding: .5em 1.7em;
        border: 1px solid rgba(141, 141, 141, .5);
        border-radius: .2em;
        background-color: #fff;
        cursor: pointer;
        
        color: var(--text-color);
}

button:hover {
  outline: none;
        color: #369ffa;
        border-color: #369ffa;
}

button:active {
  color: #2c4258;
        background-color: #f7f7f7;
}

button:focus {
  outline: none;
}

button:disabled {
  color: #b0b0b0;
        border-color: #c1c1c1;
}

a {
  color: #5398f3;
        text-decoration: none;
}

img {
  vertical-align: middle;
}

input[type='checkbox'] {
  font-size: 1em;
        vertical-align: text-top;
}

input[type='radio'] {
  margin-right: 1em;
}

input[type='text']:focus {
  outline: none;
        border-color: #369ffa;
}

label:hover {
  cursor: pointer
}

a[is=action-link] {
  -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
}

[is='action-link'], [is='action-link']:active, [is='action-link']:hover, [is='action-link']:visited {
  color: #5398f3;
}

[is='action-link'] {
  cursor: pointer;
        display: inline-block;
        text-decoration: none;
}

.modal {
  display: none;
        position: fixed;
        z-index: 1000;
}

.modal-backdrop {
  position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
}

.error {
  color: #ff0000;
}

.info {
  font-size: .8rem;
        margin-top: .5em;
        color: #888;
}

.intro {
  color: #828282;
}

.error {
  color: #ff0000;
}

.red {
  color: red;
}

header {
  font-size: 1.5rem;
        padding: .75em 0 .75em;
        max-width: 60rem;
        margin: 0 auto;
        color: #222;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 10;
        height: 3.8rem;
}

header .title {
  width: 14.875rem;
        text-align: center;
}

header .notify {
  margin: 0 auto;
}

header img {
  vertical-align: middle;
        margin-right: .5em;
        height: 1.75rem;
}

header .message {
  font-size: .875rem;
        padding: 8px 32px;
        border-radius: 3px;
        background-color: #369ffa;
        color: #fff;
        opacity: .8;
        box-shadow: 2px 1px 6px rgba(56, 56, 56, 0.2);
}

.container {
  display: flex;
        max-width: 60rem;
        margin: 0 auto;
        padding-top: 3.8rem;
}

.option-sidebar-slug {
  min-width: 14.875rem;
}

.option-sidebar {
  position: fixed;
        width: 14.875rem;
        height: 100%;
        z-index: 10;
}

.option-sidebar ul {
  font-size: 0.9275rem;
        height: 100%;
        list-style-type: none;
        color: #5d7388;
        background-color: #f7f7f7;
}

.option-sidebar li {
  padding: 1.17rem;
        text-align: center;
}

.option-sidebar li:hover {
  cursor: pointer;
        background-color: #ebebeb;
}

.option-sidebar li.active {
  color: #fff;
        background-color: #369ffa;
}

.option-content {
  font-size: 0.875rem;
        width: 50rem;
        min-width: 38rem;
        margin-left: 4.8em;
        margin-right: 4.8em;
}

.option-content .setting {
  display: none;
}

.option-content .setting.active {
  display: block;
}

.item {
  display: flex;
        padding: 2.5em 0;
}

.item {
  border-top: 1px solid #eee;
}

.item-title {
  width: 9rem;
        color: #2c4268;
}

.item-list {
  font-size: .8rem;
        flex-grow: 1;
}

.item-list-flex {
  display: flex;
        align-items: center;
}

.item-list-option:not([hidden])+.item-list-option {
  margin-top: .75em;
}

.clear-history-done {
  display: none;
        margin-left: 10px;
}

.home-page-url, #add_gmssl_prefer_input, #add_trustsite_input {
  width: 20em;
        flex-grow: 1;
        font-size: 1rem;
        line-height: 1.75em;
        margin-right: 2em;
        padding: 0 .7em;
        border: 0;
        background-color: #f7f7f7;
        border: 1px solid #e9e9e9;
}

.text-home-page {
  margin: 1em 0;
}

.dialog-body {
  margin: auto;
        overflow: hidden;
}

#modal_popup>.dialog-body, #modal_pwd_saved>.dialog-body, #modal_pwd_not_save>.dialog-body, #modal_auto_fill_saved>.dialog-body {
  height: 30em;
}

#modal_popup .site-list, #modal_pwd_saved .site-list, #modal_pwd_not_save .site-list, #modal_auto_fill_saved .site-list, #modal_manage_certs .cert-list, #modal_ukey_driver .ukey-driver-list {
  width: 470px;
        height: 30em;
        overflow-x: hidden;
        overflow-y: auto;
}

#modal_popup ul, #modal_pwd_saved ul, #modal_pwd_not_save ul, #modal_auto_fill_saved ul {
  position: absolute;
}

#modal_add_popup>.dialog-body {
  width: 460px;
        height: 12em;
}

#modal_add_popup input {
  width: 100%;
        font-size: 1em;
        border: 1px solid #a9a9a9;
}

#modal_add_popup .site-list {
  margin-top: 1em;
}

.site-list ul {
  width: 100%;
}

.site-list li {
  position: relative;
        line-height: 1.75;
}

.btn-site-close {
  position: absolute;
        right: 0;
        padding: .3em;
        font-size: 1.5em;
        width: 1em;
        height: 1em;
        text-indent: 10em;
        overflow: hidden;
        border: 0;
        outline: 0;
}

.btn-site-close::after {
  position: absolute;
        line-height: .5;
        top: .2em;
        left: .2em;
        text-indent: 0;
        content: '�D7';
        color: #b8b8b8;
}

#modal_manage_proxy>.dialog-body {
  width: 460px;
        line-height: 2em;
}

#modal_manage_proxy>.dialog-body>textarea {
  width: 100%;
        height: 8em;
}

.setting-shortcut table {
  font-size: .8rem;
        color: #828282;
}

.setting-shortcut table td {
  width: 18em;
        line-height: 2;
}

.setting-shortcut table td:first-child {
  text-align: right;
        padding-right: 3em;
}

.shortcut {
  border: 1px solid #d0d0d0;
        background-color: #f7f7f7;
        border-radius: 3px;
        padding: 2.5px 6px;
        margin: 0 6px;
        box-shadow: 0 1px 1px #e0e0e0;
        font-family: 'Roboto', arial, sans-serif;
}

.item-gesture .item-list-option+.item-list-option {
  margin-top: 2.5em;
}

.gestures {
  display: flex;
        justify-content: space-between;
        min-width: 36.2em;
}

.gestures .block {
  margin-top: 1em;
}

.gestures .gesture {
  margin: .7em 0;
}

.gestures img {
  margin-right: .8em;
}

.host-container {
  color: #828283;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
}

.certs {
  display: flex;
        flex-direction: column;
}

.certs .title {
  line-height: 2em;
        font-size: 0.8em;
        color: #ddd;
        border-top: 1px solid #f0f0f0;
        white-space: nowrap;
}

.certs .cert {
  font-size: 0.85em;
        line-height: 2em;
        padding-left: 2em;
        padding-right: 0.5em;
        display: inline-block;
}

.certs .cert:hover {
  background-color: #f9f9f9;
}

.cert:hover .operation {
  visibility: visible;
}

.certs .cert .name {
  overflow: hidden;
        white-space: nowrap;
        text-align: left;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 60%;
}

.cert .operation {
  text-align: right;
        white-space: nowrap;
        
        float: right;
}

.certs .cert a {
  margin-right: 0.5em;
}

.button-box {
  align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
}

.button-box2 {
  width: auto;
}

.mr-20 {
  margin-right: 20px;
}

settings-checkbox, cr-checkbox {
  --cr-checkbox-label-padding-start: 8px;
        
        --cr-primary-text-color: rgb(95, 99, 104);
}

dialog {
  border-radius: 3px;
}

.list-item {
  align-items: center;
        display: flex;
        padding: 0;
        justify-content: space-between;
}

.list-item .left {
  align-items: center;
        max-width: 100%;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
}

.list-item .right {
  cursor: pointer;
}

.center {
  text-align: center;
}

.list-item+.list-item {
  border-top: 1px solid #f7f7f7;
}

cr-radio-button, controlled-radio-button {
  --cr-radio-button-label-spacing: 8px;
        --cr-primary-text-color: rgb(95, 99, 104);
}

cr-button {
  box-sizing: border-box;
        border-radius: .2em;
}

:host ::slotted([slot=title]), .gmpop_title {
  padding-inline-start: 25px !important;
}

.gmpop-body {
  padding-left: 0;
}

#btn_import_bookmark {
  margin-left: 20px;
}

#modal_importbookmark_popup .source {
  display: flex;
}

.importbookmark-body {
  margin: 6px 0 0 0;
}

#modal_importbookmark_popup .source {
  display: flex;
}

#modal_importbookmark_popup .source .source_title {
  font-size: 15px;
        line-height: 30px;
        color: var(--cr-primary-text-color)
}

#modal_importbookmark_popup .source .source_option {
  width: 88%;
}

#modal_importbookmark_popup .source .source_option .bookmark_select {
  width: 100%;
}

#modal_importbookmark_popup .modal_importbookmark_popup_checkbox {
  margin-top: 10px;
        padding-left: 46px;
}

#modal_importbookmark_success_popup .importbookmark-success-body {
  margin: 1px;
}

#btn_confirm_modal_importbookmark_popup, #btn_chooseFile_modal_importbookmark_popup {
  text-align: center;
        line-height: 16px;
}

#modal_importbookmark_success_popup .importbookmark-success-body, #modal_importbookmark_failed_popup .importbookmark-failed-body {
  margin: 1px;
}

#modal_closetrust_popup .dialog-body.closetrust-body {
  padding-left: 44px;
        margin: 0;
}

#modal_closetrust_popup .closetrust-body div {
  line-height: 28px;
}

#add_gmssl_prefer_input, #add_trustsite_input {
  width: 100%;
        margin-right: 0;
        box-sizing: border-box;
        padding: .4em;
        font-size: 14px;
        border-radius: 4px;
}

.body_add_trust_site {
  line-height: 22px;
        overflow: hidden;
}

#modal_website_enery>.dialog-body {
  height: 260px;
        overflow: auto;
}

.body_modal_website, .body_modal_website_enery, .body_modal_website_all {
  margin: 2px;
        padding-bottom: 10px;
        overflow: auto;
}

.iron-icon {
  width: 20px;
        height: 20px;
        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);
        margin-right: 6px;
}

.body_modal_website .desp {
  width: 100%;
}

.not_allow_view {
  margin-top: 34px;
}

.body_modal_website_enery .list-item {
  cursor: pointer;
        margin: 10px;
}

.icon-arrow-back {
  margin-right: 1px;
        margin-inline-start: 0;
}

#modal_website_enery .title, #modal_website_all .title {
  display: flex;
        align-items: center;
}

.body_modal_website_enery .nodata {
  margin: 10px;
}

.body_modal_website_enery .left, .body_modal_website .left {
  display: flex;
        width: 100%;
}

.body_modal_website_enery .left .websitename, .body_modal_website .left .websitename {
  margin-left: 10px;
        width: 100%;
        cursor: pointer;
}

.body_modal_website_all .website_details .item {
  display: flex;
        align-items: center;
        border: none;
        padding: 8px 18px;
}

.body_modal_website_all .website_details .item .permissionName {
  flex: 1;
}

.body_modal_website_all .body_modal_website_all_title {
  display: flex;
        margin-bottom: 10px;
}

.body_modal_website_all .power {
  display: flex;
        justify-content: space-between;
        padding-right: 18px;
        align-items: center;
}

.body_modal_reset_power {
  display: flex;
}

.body_modal_reset_power #resetwebsite_name {
  padding: 0 10px;
}

.md-select[disabled] {
  opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

.body_modal_website .icon-clear {
  margin-left: 0;
}

#modal_trust_site .dialog-body, #modal_website .body_modal_website, #modal_gmssl_prefer_site .dialog-body, .body_modal_website_all {
  width: 470px;
        height: 42vh;
        overflow-y: auto;
        overflow-x: hidden;
}

.input-container {
  position: relative;
        width: 100%;
}

.underline {
  border-bottom: 2px solid #1a73e8;
        bottom: 0;
        box-sizing: border-box;
        left: 0;
        margin: auto;
        opacity: 0;
        position: absolute;
        right: 0;
        transition: opacity 120ms ease-out, width 0ms linear 180ms;
        width: 0;
}

.field-input:focus+.underline {
  opacity: 1;
        transition: width 180ms ease-out, opacity 120ms ease-in;
        width: 100%;
}

.error-msg {
  color: #e80a0a;
        display: none;
        font-size: 10px;
        font-weight: 400;
        margin-top: 6px;
}

.error-title {
  color: #e80a0a;
}

.body_add_trust_site_title {
  margin-bottom: 6px;
}

.body_add_trust_site_destitle {
  margin-top: 6px;
}

#add_trustsite_input::-webkit-input-placeholder {
  color: #ccc;
}

#add_trustsite_input::-ms-input-placeholder {
  color: #ccc
}

#add_gmssl_prefer_input::-webkit-input-placeholder {
  color: #ccc;
}

#add_gmssl_prefer_input::-ms-input-placeholder {
  color: #ccc
}

#btn_hardware_acceleration_relaunch {
  margin-left: 80px;
}

.btn_line_height {
  line-height: var(--cr-button-height);
}

.button-container_modal_website_all {
  justify-content: space-between;
}

#modal_importbookmark_popup .button-container {
  justify-content: space-between;
        align-items: center;
}

#modal_importbookmark_popup .helpBtn {
  color: #1a73e8;
        cursor: pointer;
}

#modal_importbookmark_help_popup p {
  margin: 6px 0;
        line-height: 20px;
}

.flexwrap {
  flex-wrap: wrap;
}

#setting-history-tips {
  display: none;
        width: 100%;
        margin-bottom: 20px;
}

#option_history_period:disabled, #option_auto_clear_browserdata:disabled {
  opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

@media (prefers-color-scheme: dark) {
header {
  background: var(--md-background-color);
            color: var(--cr-title-text-color);
}

.error-msg {
  color: #c74242;
}

header img {
  filter: invert(1);
}

.underline {
  border-color: var(--google-blue-refresh-300);
}

.option-sidebar li:hover {
  cursor: pointer;
            background-color: var(--google-grey-900);
}

.option-sidebar li:active {
  cursor: pointer;
            background-color: var(--google-grey-800);
}

.option-sidebar ul {
  color: #5d7388;
            background-color: rgba(0, 0, 0, .3);
}

.home-page-url, #add_gmssl_prefer_input, #add_trustsite_input, select {
  background-color: var(--md-select-bg-color);
            color: rgb(232, 234, 237);
}

.home-page-url, #add_gmssl_prefer_input, #add_trustsite_input, select {
  border: 1px solid rgba(119, 119, 119, .3);
            --md-select-bg-color: rgba(0, 0, 0, .3);
            --md-select-focus-shadow-color: rgba(var(--google-blue-refresh-300-rgb), .5);
            --md-select-option-bg-color: var(--google-grey-900-white-4-percent);
            --md-select-text-color: var(--cr-primary-text-color);
}

select :-webkit-any(option, optgroup) {
  background-color: var(--md-select-option-bg-color);
}

.option-sidebar li.active {
  background-color: rgba(0, 0, 0, .3);
            color: var(--cr-link-color);
}

.option-sidebar li:hover {
  background-color: #3F4042;
            color: var(--cr-link-color);
}

.item-title {
  color: var(--cr-title-text-color)
}

.setting-shortcut .shortcut {
  border: 1px solid #2f2e2e;
            box-shadow: 0 1px 1px black;
            background-color: rgba(0, 0, 0, .3);
}

.item {
  border-top: 1px solid #3e3e3e;
}

select:hover {
  border-color: var(--google-blue-refresh-300);
            box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
}

.option-sidebar ul {
  font-size: 0.9275rem;
            height: 100%;
            list-style-type: none;
            color: #5d7388;
}

.list-item+.list-item {
  border-top: 1px solid rgba(119, 119, 119, .3);
}

.red {
  color: #c74242;
}

textarea {
  background-color: rgba(0, 0, 0, .3);
            border: 1px solid rgba(119, 119, 119, .3);
}

textarea:focus, input[type='text']:focus {
  outline: none;
            border-color: var(--cr-link-color);
}

}

</style>

<div id="container" style="visibility: hidden;">

    <settings-prefs id="prefs" prefs="{{prefs}}"></settings-prefs>
    <header>
        <div class="title">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAADFklEQVRIiaWXW2jPYRjHPxvbjDnllG05DDXLGsv5BlNWXDARs3KKRM4lEhfC1VZEKRdyKFzIheWQJTnVCDkV2RoiF3M2Gybb9Kzvv+zvfX+/3+Zb/7X/nud9Tu/zfZ53hKA3sBqoAZ4CeQHqPYDzwGdgLzA4zLgPM4D7QANwGqgGbgOZDv0U4AhQBxwDXgGfgJVAp6gOE4ClwA/gEjBZf88F3gJPgBVANpAFFAEVQAuwSLojgMNAI3AQ6BbFcVfgLnDTcSAHKAd+Aq+VWb2CmemwVaqAhkbNeLuyG+KQJyn7EmCZKpLq0EtWkBc8cifyVaaiqAccyFE1lruEiZ5DX4FvQL//cJyma/vYHsd9gV4qd0fxRZ+M9pzfD7wBBnnkyapGf2XlQmfgLHAvSlcnqGGsEzd75HNEnw/i6gNgA9DdoT8N+CVK/SO3aAqAxcApOT3kiNIGwU7JzfEWYD1wEmgCzuiK4rFK8mvAWqAQSI+VtV4D46GmTYrDQLGc7nDIZ4nbpZ6+KdAwqhdbLIjWkh0HhqmhXLAy3RAnEzw6W2U42yNP1fzepNHa+mOdRzmGkaLXkgCdPFWtOMTWGOBFrCwtIcop6uS6AJ1GlTusg61izYm6eB8lYngnTucH6GTpqqpDbFkSXeyXOzJsnNvo6UwLsEx3mOuQ9wQq1QcuWhkjFgIngCrRkElqLjtYq61T6DicqSDf6x7t+0Bx9ZaadKrjnG2mq3ogPFaCJfFKeVKy5T/RYWS4Nk6Doq7VVVlA0x36ffWYqPGszTZI05ir8JTNyj5F17INmK1Su7BbQY4OcxqDGfsNTIh6wIEBarQyl9C3nZ4B38XfjiJD91vZHsctEbgdhtiEc9rxOR4lblcFGLd77RMgN96/BMYFjNk2sJl6Ebii91U85gHngEd65F3X/HU14i49BtKjZNwkqowF5v/lPElP1qPib7ne29a1e4DLcY9Dmw9z5bg5SsYGe13YlLHZa9mbkX1qOFub8TB6Gadt3Y0HDigBq0bQfx9eLNBUijXbmgBde+baEjG951qT7h0A/AHRpbSClzw3+wAAAABJRU5ErkJggg==">{6YCJ6aG5Cg==}
        </div>
        <div class="notify">
            <span class="message" id="message_success" style="display: none;">{6K6+572u5bey5L+d5a2YCg==}</span>
        </div>
    </header>
    <div class="container">
        <div class="option-sidebar-slug"></div>
        <div class="option-sidebar">
            <ul id="option_tabs">
                <li class="active" data-block="setting-base" data-pathname="" id="setting-base">
                    {5Z+65pys6K6+572uCg==}
                </li>
                
                    <li data-block="setting-tabs" data-pathname="tabs" id="setting-tabs">
                        {5qCH562+6K6+572u}
                    </li>
                
                <li data-block="setting-history" data-pathname="clearBrowserData" id="setting-history">
                    {5LiK572R55eV6L+5Cg==}
                </li>
                <li data-block="setting-content" data-pathname="siteData" id="setting-content">
                    {572R6aG15YaF5a65Cg==}
                </li>
                <li data-block="setting-shortcut" data-pathname="shortcuts" id="setting-shortcut">
                    {5b+r5o236ZSuCg==}
                </li>
                <li data-block="setting-gesture" data-pathname="mouseGestures" id="setting-gesture">
                    {6byg5qCH5omL5Yq/Cg==}</li>
                <li data-block="setting-trust" data-pathname="trust" id="setting-trust">
                    {5Y+v5L+h5a6J5YWoCg==}
                </li>
                <li data-block="setting-advanced" data-pathname="advanced" id="setting-advanced" hidden="[[hasKeyInArray(hidden_options_.*,'show_advanced_setting')]]">
                    {6auY57qn6K6+572uCg==}
                </li>
            </ul>
        </div>
        <div class="option-content">
            <div class="setting setting-base active">
                <div class="item" hidden="[[hasKeyInArray(hidden_options_.*,'show_startup_page_setting')]]">
                    <div class="item-title">{5ZCv5Yqo5pe25omT5byACg==}</div>
                    <div class="item-list">
                        <cr-radio-group id="onStartupRadioGroup" pref="{{prefs.session.restore_on_startup}}" disabled="[[hasKeyInArray(disable_options_.*,'show_startup_page_setting')]]">
                            <cr-radio-button class="item-list-option" name="5" id="option_homepage_is_newtabpage" pref="[[prefs.session.restore_on_startup]]">
                                {5paw5qCH562+6aG1Cg==}</cr-radio-button>
                            <cr-radio-button class="item-list-option" name="1" id="option_homepage_is_lastclosedpage" pref="[[prefs.session.restore_on_startup]]">
                                {5LiK5qyh5rWP6KeI55qE572R6aG1Cg==}</cr-radio-button>
                            <cr-radio-button class="item-list-option item-list-flex" name="4" id="option_homepage" pref="[[prefs.session.restore_on_startup]]">
                                {5Li76aG177yaCg==}
                                <input type="text" class="home-page-url" id="option_homepage_url">
                            </cr-radio-button>
                        </cr-radio-group>
                        <div class="item-list-option" style="margin-top: 0.75em;">
                            <cr-checkbox id="show_home_button">{5pi+56S64oCc5Li76aG14oCd5oyJ6ZKu}
                            </cr-checkbox>
                        </div>
                    </div>
                </div>
                <div class="item" hidden="[[hasKeyInArray(hidden_options_.*,'show_search_provider')]]">
                    <div class="item-title">5pCc57Si5byV5pOOCg==</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <select id="option_search_engine" data-type="string">
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{6buY6K6k5rWP6KeI5ZmoCg==}</div>
                    <div class="item-list">
                        <cr-button id="option_default_browser" data-type="boolean">
                            {6K6+572u5Li66buY6K6k5rWP6KeI5ZmoCg==}</cr-button>
                        <div class="info" id="is-not-default-browser" data-type="boolean">
                            {5b2T5YmN6L+Y5LiN5piv5oKo55qE6buY6K6k5rWP6KeI5ZmoCg==}</div>
                        <div class="info" id="is-default-browser" data-type="boolean" style="display: none;">
                            {5b2T5YmN5bey5piv5oKo55qE6buY6K6k5rWP6KeI5ZmoCg==}</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{5LiL6L29Cg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            {5L+d5a2Y5L2N572u77yaCg==} <span id="option_save_pos"></span>
                        </div>
                        <div class="item-list-option">
                            <cr-button id="btn_change_save_pos">{5pu05pS55L2N572uCg==}</cr-button>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox id="qax.download_alert.enabled" pref="{{prefs.qax.download_alert.enabled}}" data-type="boolean">
                                {5LiL6L295YmN6K+i6Zeu5omT5byA5oiW5L+d5a2Y}</settings-checkbox>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox id="qax.download.save_direct_open_file" pref="{{prefs.qax.download.save_direct_open_file}}" data-type="boolean">
                                {IuebtOaOpeaJk+W8gOKAneeahOaWh+S7tuS/neWtmOWIsOS4i+i9veebruW9lQ==}</settings-checkbox>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox id="qax.download.use_last_directory" pref="{{prefs.qax.download.use_last_directory}}" data-type="boolean">
                                {6Ieq5Yqo5L2/55So5LiK5qyh5LiL6L2955uu5b2V}</settings-checkbox>
                        </div>
                    </div>
                </div>
                
                    <div class="item">
                        <div class="item-title">{5Lmm562+}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <settings-checkbox pref="{{prefs.bookmark_bar.show_on_all_tabs}}" data-type="boolean">
                                    {5pi+56S65Lmm562+5qCPCg==}</settings-checkbox>
                            </div>
                            <div class="item-list-option">
                                <a href="chrome://bookmarks" target="_blank">
                                    <cr-button id="btn_manage_bookmark">{566h55CG5Lmm562+}</cr-button>
                                </a>
                                <cr-button id="btn_import_bookmark">{5a+85YWl5Lmm562+Cg==}</cr-button>
                            </div>
                        </div>
                    </div>
                
                <!-- use-default-skin -->
                
                  <div class="item" id="use-default-skin-box">
                    <div class="item-title">{5aSW6KeC}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-button id="use-default-skin">{6YeN572u5Li66buY6K6k55qu6IKk}</cr-button>
                        </div>
                    </div>
                  </div>
                
            </div>
            
                <div class="setting setting-tabs">
                    <div class="item">
                        <div class="item-title">{5paw5bu65qCH562+}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <settings-checkbox id="qax.new_bookmark_tab.enable" pref="{{prefs.qax.new_bookmark_tab.enable}}" data-type="boolean">
                                    {5Zyo5paw5qCH562+5omT5byA5Lmm562+5Lit55qE572R5Z2A}</settings-checkbox>
                            </div>
                            <div class="item-list-option">
                                <div class="item-list-option">
                                    <settings-checkbox id="qax.new_addressbar_tab.enable" pref="{{prefs.qax.new_addressbar_tab.enable}}" data-type="boolean">
                                        {5Zyo5paw5qCH562+5omT5byA5Zyw5Z2A5qCP6L6T5YWl55qE572R5Z2A}
                                    </settings-checkbox>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title"> {5YWz6Zet5qCH562+ }</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <settings-checkbox id="qax.close_browser_when_close_last_tab.enabled" pref="{{prefs.qax.close_browser_when_close_last_tab.enabled}}" data-type="boolean">
                                    {5YWz6Zet5pyA5ZCO5LiA5Liq5qCH562+5pe277yM5YWz6Zet5rWP6KeI5Zmo}
                                </settings-checkbox>
                            </div>
                            <div class="item-list-option">
                                <div class="item-list-option">
                                    <settings-checkbox id="qax.close_tabs_confirm_dialog.enabled" pref="{{prefs.qax.close_tabs_confirm_dialog.enabled}}" data-type="boolean">
                                        {5YWz6Zet56qX5Y+j5pe277yM5aaC5p6c5pyJ5aSa5Liq5qCH562+5YiZ5o+Q56S6}
                                    </settings-checkbox>
                                </div>

                            </div>
                            <div class="item-list-option">
                                <div class="item-list-option">
                                    <settings-checkbox pref="{{prefs.browser.double_click_to_closetab_button}}" data-type="boolean">
                                        {6byg5qCH5Zyo5b2T5YmN5qCH562+5LiK5Y+M5Ye75pe277yM5YWz6Zet5qCH562+}
                                    </settings-checkbox>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- history -->
            <div class="setting setting-history">
                <div class="item flexwrap">
                    
                        <div id="setting-history-tips" class="red">
                            {566h55CG5ZGY5bey57uf5LiA6YWN572u5LiK572R55eV6L+55riF6Zmk562W55Wl}</div>
                    
                    <div class="item-title">{5riF6Zmk5LiK572R55eV6L+5Cg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <span>{5riF6Zmk5oyH5a6a5pe26Ze05YaF55qE5pWw5o2u77yaCg==}</span>
                            <select id="option_history_period" data-type="string">
                                <option value="anhour">{6L+H5Y675LiA5bCP5pe2Cg==}</option>
                                <option value="24hour" selected="">{6L+H5Y67MjTlsI/ml7YK}</option>
                                <option value="aweek">{6L+H5Y67N+WkqQo=}</option>
                                <option value="4weeks">{6L+RNOWRqAo=}</option>
                                <option value="all">{5pe26Ze05LiN6ZmQCg==}</option>
                            </select>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_view" data-type="boolean">
                                {5rWP6KeI6K6w5b2VCg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_download" data-type="boolean">
                                {5LiL6L296K6w5b2VCg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_cookie" data-type="boolean">
                                {Q29va2ll5Y+K5YW25a6D572R56uZ5pWw5o2u77yI5LiN5bu66K6u5riF6Zmk77yJCg==}
                            </cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_temp" data-type="boolean">
                                {57yT5a2Y55qE5Zu+54mH5ZKM5paH5Lu2Cg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_password" data-type="boolean">
                                {5L+d5a2Y55qE5a+G56CB5ZKM5YW25LuW55m75b2V5pWw5o2uCg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_history_clear_form" data-type="boolean">
                                {6Ieq5Yqo5aGr5YWF6KGo5Y2V5pWw5o2uCg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-button id="btn_clear_history" class="button button-opt">{5byA5aeL5riF6ZmkCg==}
                            </cr-button>
                            <span id="clear_history_done" class="clear-history-done">{5bey5riF6Zmk5a6M5oiQCg==}</span>
                        </div>
                    </div>
                </div>
                
                    <div class="item">
                        <div class="item-title">{6Ieq5Yqo5riF6Zmk55eV6L+5}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <span>{6Ieq5Yqo5riF6Zmk5Lul5LiK5Yu+6YCJ6aG555qE5YWo6YOo55eV6L+577ya}</span>
                            </div>
                            <div class="item-list-option">
                                <select id="option_auto_clear_browserdata" data-type="string">
                                    <option value="0">{5LiN6Ieq5Yqo5riF6Zmk}</option>
                                    <option value="1">{6YCA5Ye65rWP6KeI5Zmo5pe26Ieq5Yqo5riF6Zmk}</option>
                                    <option value="2">{5q+P5aSp6aaW5qyh5ZCv5Yqo5pe26Ieq5Yqo5riF6Zmk}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                
            </div>

            <!-- web content -->
            <div class="setting setting-content">
                <div class="item">
                    <div class="item-title">{572R6aG157yp5pS+Cg==}</div>
                    <div class="item-list">
                        <select id="option_scale">
                            <option value="0.25">{MjUlCg==}</option>
                            <option value="0.33">{MzMlCg==}</option>
                            <option value="0.50">{NTAlCg==}</option>
                            <option value="0.67">{NjclCg==}</option>
                            <option value="0.75">{NzUlCg==}</option>
                            <option value="0.80">{ODAlCg==}</option>
                            <option value="0.90">{OTAlCg==}</option>
                            <option value="1.00" selected="">{MTAwJQo=}</option>
                            <option value="1.10">{MTEwJQo=}</option>
                            <option value="1.25">{MTI1JQo=}</option>
                            <option value="1.50">{MTUwJQo=}</option>
                            <option value="1.75">{MTc1JQo=}</option>
                            <option value="2.00">{MjAwJQo=}</option>
                            <option value="2.50">{MjUwJQo=}</option>
                            <option value="3.00">{MzAwJQo=}</option>
                            <option value="4.00">{NDAwJQo=}</option>
                            <option value="5.00">{NTAwJQo=}</option>
                        </select>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{5a2X5Y+3}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <select id="option_default_font_size">
                                <option value="9">54m55bCP</option>
                                <option value="12">5bCP</option>
                                <option value="16" selected="">5Lit77yI5o6o6I2Q77yJ</option>
                                <option value="20">5aSn</option>
                                <option value="24">54m55aSn</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                  <div class="item">
                    <div class="item-title">{572R6aG157+76K+R}</div>
                    <div class="item-list">
                      <div class="item-list-option">
                        <cr-checkbox id="option_qax_translate_web_page" data-type="boolean" checked="">
                          {5byA5ZCv572R6aG157+76K+R}
                        </cr-checkbox>
                      </div>
                    </div>
                  </div>
                
                <div class="item">
                    <div class="item-title">{5by55Ye65byP56qX5Y+jCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option" hidden="[[hasKeyInArray(hidden_options_.*,'show_popups_setting')]]">
                            <cr-checkbox id="option_forbidden_popup" data-type="boolean" checked="" disabled="[[hasKeyInArray(disable_options_.*,'show_popups_setting')]]">
                                {6Zi75q2i5by55Ye65byP56qX5Y+j}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <a is="action-link" id="link_popup">{566h55CG5aeL57uI5YWB6K645by55Ye655qE572R56uZCg==}</a>
                            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                        is="action-link" id="link_add_popup">{5re75YqgCg==}</a> -->
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{5L+d5a2Y5a+G56CBCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_save_password" data-type="boolean" checked="">
                                {5L+d5a2Y5bm25aGr5YaZ5a+G56CBCg==}</cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <a is="action-link" id="link_pwd_saved">{5bey5L+d5a2Y55qE5a+G56CBCg==}</a><span style="margin-left: 2em;"></span><a is="action-link" id="link_pwd_not_save">{5LiA5b6L5LiN5L+d5a2Y55qE572R56uZCg==}</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{6Ieq5Yqo5aGr5YWFCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_auto_fill" data-type="boolean" checked="">
                                {5L+d5a2Y5bm25aGr5YaZ5Zyw5Z2A77yI5ZCr55S16K+d5Y+356CB44CB55S15a2Q6YKu5Lu244CB6YCB6LSn5Zyw5Z2A562J77yJCg==}
                            </cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <a is="action-link" id="link_auto_fill_saved">{566h55CG5bey5L+d5a2Y55qE5Zyw5Z2ACg==}</a>
                        </div>
                    </div>
                </div>
                
                    <div class="item">
                        <div class="item-title">{572R6aG16K6+572u}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <cr-button id="page-setup">{566h55CG572R6aG16K6+572u}</cr-button>
                            </div>
                        </div>
                    </div>
                
                <!-- <div class="item">
                    <div class="item-title">{UERG5paH5qGj}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_pdf_download_default" data-type="boolean" checked>
                                {5LiL6L29UERG5paH5Lu277yM6ICM5LiN5piv6Ieq5Yqo5L2/55So5rWP6KeI5Zmo6aKE6KeI}
                            </cr-checkbox>
                        </div>
                    </div>
                </div> -->
                
        </div>

        <!-- shortcut -->
        
            <div class="setting setting-shortcut">
                <div class="item">
                    <div class="item-title">{5bi455So5b+r5o236ZSuCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <table class="shortcut-table">
                                <tbody>
                                    <tr>
                                        <td>{5omT5byA5paw56qX5Y+jCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtOCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA5paw5qCH562+6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtUCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA5paw55qE5peg55eV56qX5Y+jCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtOCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YWz6Zet5qCH562+6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtXCg==}</span> {5oiWCg==} <span class="shortcut">{Q3RybCtGNAo=}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5oGi5aSN5Yia5YWz6Zet55qE572R6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtUCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtUYWIK}</span> {5oiWCg==} <span class="shortcut">{Q3RybCtQZ0Rvd24K}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YiH5o2i5Yiw5bem6L6555qE5qCH562+6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtUYWIK}</span> {5oiWCg==}
                                            <span class="shortcut">{Q3RybCtQZ1VwCg==}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{5pi+56S6L+makOiXj+S5puetvuagjwo=}</td>
                                        <td>
                                            
                                                <span class="shortcut">{Q3RybCtC}</span> {5oiWCg==}
                                            
                                            <span class="shortcut">{Q3RybCtTaGlmdCtCCg==}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{5re75Yqg572R6aG15Yiw5Lmm562+Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtECg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5re75Yqg5omA5pyJ572R6aG15Yiw5Lmm562+Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtECg==}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{5rWP6KeI5Zmo5Yqf6IO9Cg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <table class="shortcut-table">
                                <tbody>
                                    <tr>
                                        <td>{5omT5byA5paH5Lu2Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtPCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA4oCc5Y6G5Y+y6K6w5b2V4oCd6aG16Z2iCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtICg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA4oCc5LiL6L295YaF5a654oCd6aG16Z2iCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtKCg==}</span></td>
                                    </tr>

                                    <tr>
                                        <td>{5omT5byA5Lu75Yqh566h55CG5ZmoCg==}</td>
                                        <td><span class="shortcut">{U2hpZnQrRXNjCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA5byA5Y+R5Lq65ZGY5bel5YW3Cg==}</td>
                                        <td><span class="shortcut">{RjEyCg==}</span> {5oiWCg==} <span class="shortcut">{Q3RybCtTaGlmdCtKCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA4oCc5riF6Zmk5rWP6KeI5pWw5o2u4oCd6aG16Z2iCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtEZWxldGUK}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YWo5bGP5qih5byPCg==}</td>
                                        <td><span class="shortcut">{RjExCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YWz6Zet5rWP6KeI5ZmoCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTaGlmdCtRCg==}</span></td>
                                    </tr>

                                    <tr>
                                        <td>{5YWJ5qCH56e75Yiw5Zyw5Z2A5qCPCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtMCg==}</span></td>
                                    </tr>
                                    <tr hidden="[[hasKeyInArray(hidden_options_.*,'show_search_provider')]]">
                                        <td>{5L2/55So5Zyw5Z2A5qCP6buY6K6k5pCc57Si5byV5pOOCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtLCg==}</span> {5oiWCg==}
                                            <span class="shortcut">{Q3RybCtFCg==}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">{572R6aG155u45YWzCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <table class="shortcut-table">
                                <tbody>
                                    <tr>
                                        <td>{5ZCO6YCACg==}</td>
                                        <td><span class="shortcut">{QWx0K+KGkOeureWktAo=}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YmN6L+bCg==}</td>
                                        <td><span class="shortcut">{QWx0K+KGkueureWktAo=}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5Y2wCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtQCg==}</span></td>
                                    </tr>

                                    <tr>
                                        <td>{5L+d5a2Y572R6aG1Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCtTCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{6YeN5paw5Yqg6L2977yI5Yi35paw77yJCg==}</td>
                                        <td><span class="shortcut">{RjUK}</span> {5oiWCg==} <span class="shortcut">{Q3RybCtSCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5YGc5q2i5Yqg6L29Cg==}</td>
                                        <td><span class="shortcut">{RXNjCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5omT5byA5p+l5om+5qCPCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtGCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5pS+5aSn572R6aG15YaF5a65Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCsrCg==}</span></td>
                                    </tr>

                                    <tr>
                                        <td>{57yp5bCP572R6aG15YaF5a65Cg==}</td>
                                        <td><span class="shortcut">{Q3RybCstCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5oGi5aSN572R6aG15Yiw5q2j5bi45aSn5bCPCg==}</td>
                                        <td><span class="shortcut">{Q3RybCswCg==}</span></td>
                                    </tr>
                                    <tr>
                                        <td>{5pi+56S6572R6aG15rqQ5Luj56CBCg==}</td>
                                        <td><span class="shortcut">{Q3RybCtVCg==}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
        

        <!-- trust -->
        <div class="setting setting-trust">
            
                <div class="item">
                    <div class="item-title">{5LqR5a6J5YWo}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_cloud_safe_url" data-type="boolean" checked="">
                                {5byA5ZCv572R56uZ5LqR5a6J5YWo}
                            </cr-checkbox>
                        </div>
                        <div class="item-list-option">
                            <cr-checkbox id="option_cloud_safe_download" data-type="boolean" checked="">
                                {5byA5ZCv5LiL6L295LqR5a6J5YWo}
                            </cr-checkbox>
                        </div>
                    </div>
                </div>
            
            <div class="item">
                <div class="item-title">{5a6J5YWo6ZqU56a76Ziy5oqk}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <cr-checkbox id="open_crossdomin" data-type="boolean" checked="">
                            {5byA5ZCv6Leo5Z+f5a6J5YWo6ZqU56a7}
                        </cr-checkbox>
                    </div>
                    <div class="item-list-option">
                        <cr-checkbox id="open_siteisolation" data-type="boolean" checked="">
                            {5byA5ZCv56uZ54K55a6J5YWo6ZqU56a7}
                        </cr-checkbox>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">{5Y+v5L+h6YCa5L+h5a6J5YWo}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <cr-checkbox id="checkcert" data-type="boolean" checked="">
                            {5ZCv55So5Y+v5L+h6K+B5Lmm5qCh6aqM77yM5oum5oiq5pyq6YCa6L+H6K+B5Lmm5qCh6aqM55qE6L+e5o6l}
                        </cr-checkbox>
                    </div>
                    <div class="item-list-option">
                        <cr-checkbox id="intercept_https" data-type="boolean" checked="">
                            {5oum5oiqSFRUUFPnvZHpobXlhoXnmoRIVFRQ6YCa5L+h}
                        </cr-checkbox>
                    </div>
                </div>
            </div>
            
                <div class="item">
                    <div class="item-title">{566h55CG5Y+v5L+h572R56uZ}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-button id="trust-certificate-mange">{566h55CG5Y+v5L+h572R56uZ}</cr-button>
                        </div>
                    </div>
                </div>
            
            <div hidden="[[hasKeyInArray(hidden_options_.*,'show_certs')]]">
                
                    <div class="item">
                        <div class="item-title">{566h55CG5Y+v5L+h6K+B5Lmm}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <cr-button id="btn_manage_certificate">{566h55CG5Y+v5L+h6K+B5Lmm}</cr-button>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="item">
                        <div class="item-title">{566h55CG5Y+v5L+h6amx5Yqo}</div>
                        <div class="item-list">
                            <div class="item-list-option">
                                <cr-button id="link_ukey_driver">{566h55CG5Y+v5L+hVVNCIEtleempseWKqA==}</cr-button>
                            </div>
                            
                                <div class="item-list-option">
                                  <cr-checkbox id="cert_auto_select">{5Y+q5a2Y5Zyo5LiA5Liq6K+B5Lmm5pe277yM6Ieq5Yqo6YCJ5oup}</cr-checkbox>
                                </div>
                            
                        </div>
                    </div>
                
            </div>
            
                <div class="item">
                    <div class="item-title">{5pWw5o2u5omn6KGM5L+d5oqk}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_open_dep_button" data-type="boolean" checked="">
                                {5byA5ZCv5pWw5o2u5omn6KGM5L+d5oqk77yI5LuF6YCC55So5LqO5YW85a655qih5byP77yJ}
                            </cr-checkbox>
                        </div>
                    </div>
                </div>
            
        </div>

        <!-- gesture -->
        <div class="setting setting-gesture">
            <div class="item">
                <div class="item-title">{5L2/55So6byg5qCH5omL5Yq/Cg==}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <div class="intro">
                            5Zyo572R6aG15LiK5oyJ5L2P6byg5qCH5Y+z6ZSu5ZCO5ruR5Yqo5YaN5pS+5byA6byg5qCH5Y+z6ZSu77yM5Y2z5Y+v5r+A5rS75rWP6KeI5Zmo5a+55bqU5Yqf6IO944CCCg==
                        </div>
                    </div>
                    <div class="item-list-option">
                        <cr-checkbox id="gesture_switch" data-type="boolean">
                            {5byA5ZCv6byg5qCH5omL5Yq/Cg==}
                        </cr-checkbox>
                    </div>
                </div>
            </div>
            <div class="item item-gesture">
                <div class="item-title">{6byg5qCH5omL5Yq/5a+55bqU5Yqf6IO9Cg==}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <div class="intro">{5ZCR5LiA5Liq5pa55ZCR5ruR5YqoCg==}</div>
                        <div class="gestures">
                            <div class="block block-left">
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA9ElEQVQ4je3VvS5EQRjG8R/WRyQ2UaOhUGh8RVwFLsAWWrXbUCs11AqlC2AJaoWIRK+TIOxmk7eYMzn2nIRK9mlmnskz/3lnkpkZkmjj+EOJ1nGGDrZxn0eu98YKfriMkmgZl5jFHNpYqZjTF7qEKzSSsdE64J+gi71dYTz8Oz7rgsugC7jBZPh9POAbLbxWgXPofACnwu/iCDNR9QnWsopXq6CPmI7+AU6jP5EcyxM28Rbg2yroeWx1B4cxNoKvLNeOBe4iX1Aj81t5IFMnsS/JUfSt9E80gA6g/xFa+Cl+C21Gm1/rUtUJ9R6Ti/hOnivT6AJWYCflV9iFJgAAAABJRU5ErkJggg==">
                                    <select id="gesture_up">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA9klEQVQ4je3UvyqGYRjH8Q9C2ewkGZjJiwMwygGwGM1O452tBg5ARkcg5c+iGFgwKyR/o7sudXt6nz8Dg3q/y31fT7/n23XV3dUjo7X1qoR9jGIWj8XI4drAj7q3zJLRh0VMYaxBvpE0cR/n+29Kv/n8C2kjutKu9D9K93CO5ZJ8voBGcBT5SukSJrGLjfj2EUslZw4XmI58pXQCd3FvYyXuz3Em0TgOMIQ3zNRJr2JnPkS9g3Xc4gWrMbIQpo6P66SJyxA/Rb0ZI6bsNoYz4UmH/0ufVBqzFd0lBtFf6LCjsEqaOMN8YTHXCuukiVMs4AbXTYTwBfFXL7c4llpiAAAAAElFTkSuQmCC">
                                    <select id="gesture_down">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA7klEQVQ4je3TwSrFQRTH8c+9rq6IssaGYmFDhKfgBdwXsFYex4YHkKWyRcldWyB5AGskmjr/mv79u7pz7fjVNHNOM9+ZzvmNv63W1vF7UwEW8YBz7A5boXZDbgm3sV4uKXkduoI+ZiM+GhW6ijtMR3yIsxJoJ+Y1XKMb8T5OS4AVdBNX2QUHGXCsgPmZuv+C+Ui84R5zmEgbhgTO4CK97itLtqNZ3QEHf9JCgu7hBuMxejgJuNqlg9SKEj5X5l/PwK/YwFPpUytLJW9u4yM8+hjxSNA6OOkya2AxtA6eLDV/099P4J1YT5VA//XLwjdmkChgzIgWBwAAAABJRU5ErkJggg==">
                                    <select id="gesture_left">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA7ElEQVQ4je3TPS6EURTG8d8gkcwwyfREREKh0TAsQCk2YBkSq9AoplWIWigVNuCrUmh0NiAKnyEnOZLJG4V576h4inu+bv45Ofdcf1uNlf2XOgM4wQbmcFctjtQc6XzaiwQPBbqTtoNrLAwDeozt9CdxhcVSaGgXW+k3cYmlCMYyOVoD+o5DtNHDOM6xFtBTrONhQGg08oR7PCc0eEdxTOeldo1uW5iojPEjoMuYwVskfghrpL3NuR5k/IrNgD7ipkaXoVns9QG7sWIlr9/N39TpBypYqSmcVTv8KpYsf/M7YAm0lXa1CvzXLwif39QoffwQQhYAAAAASUVORK5CYII=">
                                    <select id="gesture_right">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item-list-option">
                        <div class="intro">{5b6A6L+U5byP5ruR5YqoCg==}</div>
                        <div class="gestures">
                            <div class="block block-left">
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTI0VDE0OjAzOjU2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjozOSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjozOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozYWNjNDEzMy0xMGExLWNkNGQtOGUxMy1lMmUxNTk5N2E3OWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M2FjYzQxMzMtMTBhMS1jZDRkLThlMTMtZTJlMTU5OTdhNzljIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2FjYzQxMzMtMTBhMS1jZDRkLThlMTMtZTJlMTU5OTdhNzljIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYWNjNDEzMy0xMGExLWNkNGQtOGUxMy1lMmUxNTk5N2E3OWMiIHN0RXZ0OndoZW49IjIwMTktMDctMjRUMTQ6MDM6NTYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HEGeMAAAB/klEQVQ4jaXUX2jOYRTA8c9v2yuRbFdW9scoWUkZmV0IkZI7kRAWN3KnXCkhuZJyIeHGrigUiqjdiJRdyL9Q/saFldCGlRn7uXgOttf+2Oupt/O85znne85zfuc8WZ7nmtv6DLP2YTceoxc7cGc4Y+hoLSgbyQBbUUCOmZg+ij2MCJ2B2sjsNSoDPFoiIxpsCnkcT2Nfh/7/ga4PeQYfY1+J6lKhtdJVb6FH+lCdmB9nJUHXhWwL+R7fUI6KUqGr0Ydz8f85nqEeczBurNApmIt2dIfuHb7EvldqsTFBV4X+dJH+bsBaSsl0qXTdK0X6J/iBBVJp/hk6GQ24jq4iu0/4HOC6AWcFNKIJE4aCLpRqdrlI3x/Zd2IWakJfHrA9OIblQ0Eb8QKvMM/gnuzBhwjwq6ZTpUdmfQSbVAwdH9e/hxW4iP2YHRl9x8NwXBY+W6Rx/oTDuFoMnSbV7HYAarAZJ7ExHB+EbTWWxHkWsBNinAdOR1Vc+3HIidgutVBDBOnGG6nt6qWefotLUi/7A83zsoj4El/jd0iWtWMn1uCg9BHLwm9x1PgILgxILkHLqyrKcD/Ps16Z4IN7/V19e6XZ32DwC9WD8zgbSfxeWZ4PPXFNB26QZb8DFGqaF+GoNPvwCLtwbaBfR2th+BenUNtSrLqJtdiGlTgVur/WT0d4eoykrP7AAAAAAElFTkSuQmCC">
                                    <select id="gesture_up_down">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTI0VDEzOjU4OjIzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yNVQxNzoxMTo1MCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yNVQxNzoxMTo1MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNTgyYWFjMC1iYjIwLTA0NGQtYmY2OS0yMGI4YmQzOGZmMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTU4MmFhYzAtYmIyMC0wNDRkLWJmNjktMjBiOGJkMzhmZjEwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTU4MmFhYzAtYmIyMC0wNDRkLWJmNjktMjBiOGJkMzhmZjEwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNTgyYWFjMC1iYjIwLTA0NGQtYmY2OS0yMGI4YmQzOGZmMTAiIHN0RXZ0OndoZW49IjIwMTktMDctMjRUMTM6NTg6MjMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6nz9sEAAAB8UlEQVQ4jbXV3WvNcRzA8dfZOXtgyMM8Nc22hlxYm5oSSu4ktbIb7uTayo27XUqJO4orRaGVP0G5kdqFYmIeWpihjdqaPXDYcfH9HDsOMrV96tvv+/j+fh6/v0yhULDQUrHgxMWC5oqd3b2qZyfzORmTCwYtsBpNqEYN8niNQXyPbRWYnTcU05hBM45gJUYDPhXw/mhfAz4eZ/4KHcMTHEYnRnAFa9GOQ6hDBu/xAH0YiEuH8QIzmdbuG6q2dcjWtShM5dtwG5txHWcDUInt2IO9aEOt5LKiPAyl3s35dCrfiFNh/n1cwPOSQ/einYtxR1yyA+uxFUfLzT+JLnzAZTwtWSsP0LrQflAK6icsDd50rqa9C/bhWCycwS2sik21aMGKcEE7lmELqrCx5LIxjOZC7YvYgC9SRI+jNUxbEweXIysFipRu0+gN2Jtw12AOJwJQNPM0GmI8EXMDAeyT/F2NR/iGoXDZTxflcLBE/aK512LjHSkn34YmlTHOxLdUZkshV0PbxgA+jrm7fpdy0B8lW9/Z049ncaAJm3BAqqhX+Iz/eh+z9Z09ebyUym8MO6Xk3y8FaViqrn/WfCm02B+XSm9ICkADdplzycf5Qsvf0xncRDfOx0XNWDJfIL9WVKmM4JJUMRNSSs1bMovxj/oBBViF/HkUIMkAAAAASUVORK5CYII=">
                                    <select id="gesture_right_left">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                            </div>
                            <div class="block block-right">
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTI0VDE0OjAzOjE0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjoyMiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjoyMiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYzExYjRlNS02Y2EyLTFiNDgtYTJlMS0yZmIzYjJhMWU2N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MWMxMWI0ZTUtNmNhMi0xYjQ4LWEyZTEtMmZiM2IyYTFlNjdmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWMxMWI0ZTUtNmNhMi0xYjQ4LWEyZTEtMmZiM2IyYTFlNjdmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYzExYjRlNS02Y2EyLTFiNDgtYTJlMS0yZmIzYjJhMWU2N2YiIHN0RXZ0OndoZW49IjIwMTktMDctMjRUMTQ6MDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vCc5BAAACJElEQVQ4jaXUS4jPURQH8M8dM8b73YTkFYoajyyIyMZCCMWChZTCRpFkYaPsJBuysPBMsiAbsREWGiRiQ8p4DHksmCGFmfn/Le6Zmb//fxjD2dz7+557vvec8/uem4rFonKbd7K1Agubhs1YhhM4hq+lB+5sqlHdXWRrU0PepIQEasbNW4QjmBnHNuMxrpbHV8OCS4Vq1BaL6bukrbZ+ceeBQnPrRGzHBowuiZ2I1UH8soK0/VNbAbOilIed3pRmYyfWYgC+oyriBgb+DIfxrSOsKoILUipKabKU+klpuJR24wI24jP2Yhfe4iNuoi92YE1pplUl+0+YhBlYjwOYgAbswUG0YTwuYx/eYyxWoa470hcYjPlR3mucxhacxRBdP+kdboS/KKthK0Z09jTsG1owG4dwCx/QFP5q1OMLrgV2ClOiRbvQiLPlknqMldGGK2W+gRgZ1f0I7A2OogaT48IKnd5GLVaUkVZFRmPwJFoD7biP/egfvgrSFjzHEgxDc+AFuaeD0QevSmJao8JfMii365HV8jJ8ehDejXJ/a92RXo7MNpThc+SZbdDV078mfY8HWIqhgdVhUOxrdTwIvSCFi3KJ6+J7CqbKM/7oXzKF87FuinWUPJLt8lT90X5H2oSnWCjrc4Ysp3u6hqHXpHAu1vVi/GSJvfsf0jOxbpNffLI+/xSDSvGX2jO51LmyPpvllhR6Iu3p1uPyxKQgbOyJEH4CMcd9KjJnYfkAAAAASUVORK5CYII=">
                                    <select id="gesture_down_up">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTI0VDE0OjAyOjI4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjo1MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yNVQxNzoxMjo1MyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YWU3ZTA4Yi00NDI2LTUyNDktOTcyOC02M2FmNmU0M2I0YzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2FlN2UwOGItNDQyNi01MjQ5LTk3MjgtNjNhZjZlNDNiNGM5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2FlN2UwOGItNDQyNi01MjQ5LTk3MjgtNjNhZjZlNDNiNGM5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YWU3ZTA4Yi00NDI2LTUyNDktOTcyOC02M2FmNmU0M2I0YzkiIHN0RXZ0OndoZW49IjIwMTktMDctMjRUMTQ6MDI6MjgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz766bL9AAACCUlEQVQ4jbXVX2jOcRTH8dfv2fMsQszNJtvMnxY3YrRZKURudkEiUaOUkpIkN66UuCBy4YJS25WEMkUruxGRlIwVyph/WS20DbU/7HHx/T55aIttnPrV7/ftnPc55/M93+8vyWaz/rWlaxoHx0/JZlMFRenU3fWpb5AeB2oCKlCEBI8wJuhULMOC+P4ZHXiZzSb9Oae/gRajDqswG/14gVbcwxP0SX4GjAQtw2ZswGKk0I6buBarWxur7kCfPGo+dC7qsQWVcW0QLTiP6+iO60twAKWYhONQdfiWTFmtNA5hR6wuZ3fQiEvoGaaTrphsG3ZJkha0SkK1KRyMwAfYiclYjnMjAOEtTuI+5mDfUPdgRU6CtCB0Fu9i23vi2gdBx648WApD8f0pzgibtzH6789B+yNsUV5wJwbwHF/wMEJ6Y6KvwkxeEHQ9gq2Z0pom3E5jd2yhEuWYhqUowJqYZB2+C3PZiY9ow+MoUT9KcBqbkuqGgd9bK4kap7EwBtSiOoLnR78pMe4NZiATv4/lQ4ezQkHvQmG8ymO7hVgdC6jDdD8Hte1PJyqXMXfrtMcHbmAlZmGFoPMrNIzlQinATGwX5rRY0PgymsSNGo1lUCVsbr3Q8nucwkW8ZvS31DzsFY5yL5pxFVfQl3MaLXSiMH49OIGzfj0cY4I+w1FhnJrxaTin5H/8o34AqUCGCt49rosAAAAASUVORK5CYII=">
                                    <select id="gesture_left_right">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item-list-option">
                        <div class="intro">{55u06KeS5oqY57q/5byP5ruR5YqoCg==}</div>
                        <div class="gestures">
                            <div class="block block-left">
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABPUlEQVQ4jbWTsUrEQBCGv+SyJygWWludoIWNiKhPYW2hYG0t+BQ2voCNPoCIrZ3ogWhtoY0KB8I153ma3EaZ3AZXWY9kL/6w7E4yfJnJPxusHMY41ADugVNg3ZUwTKHj3Sxwbc5zZYE4oPPALTBl4r1RoQvADTBp4l3gxAcamX0RuALGTLwJHPsAc+gycGl9YMcC1jyYWtz/9K3oL7nc99R3bdLyEtAElHm2BRyZSeBH9hDV0qShw/pZDpURWrXAB8AFcFem4rp+pRdO97Haz8GJmdEHExdWpHuS+gHE9j+1waJzYKYoVOl32d6A7m+jbPB4meFXqfDoyHK5L+A1c54oDO1n0LasqLmtXDlyXYOiQNHGfgZ9wbpFI0vpDNqqFjpo/6laaPof0MFIPVYKDZKuGPtcKTTutIXVAvgCOl5Q0JKgBl4AAAAASUVORK5CYII=">
                                    <select id="gesture_up_left">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABNUlEQVQ4jbXUvUrEQBDA8X8uCRGPKxQFQS1U0OIav7g7X8In0BewFnwbtdAHEHtbvwqfQMVSEOzuK5dEJpmFEE5ZvXWa3VmSHzObIV6WZbiIvdNuM62F70IFTkTAz4ajlHDBKRokgyz264tu0bQny7JTNEz6siy5RdPuP6CjHC0+VPs8HvfMKvAMXAP7NuhKUen8d5WuAY+6X7euNMnR2XHohoINzU+s0aL9RhVtAg/AtObHwJU1WrQv73oG3QTugEjzA+DSFizQfKQiU+kucFuq+qgE+rZoHMeBMbzW2dDJH2Vq8EE/msv3NReghAHRcreBe7kWPTsELnQSJGw78dR7k/blYKsEfwI7wOtfqzbtPwFtuW9gBnjRfCK0CkvcmB/EJGgVlkG2Hv6fUAN3dF//tQh8AeJKSvogNmX3AAAAAElFTkSuQmCC">
                                    <select id="gesture_down_left">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA/0lEQVQ4je3VvS5EQRjG8Z+PjUSicAsUCg1LcBXiAmyiVrsNtXIVXIGLYAkKlUIUSCSSVQiFj5CRkUyOOWed0Ej2SU5y3ifP/GfOezIzAwvtZxnN4yjaTZwWI521Rm7cpwYz3gz20/GYLSX8ADqNAwwnXqMuOIVO4RAjmVwt8Bd0MvZwNNbrSaaF+zrgAJ2IwLHorWIryexgrrDiZi/oBcZjvYHdQia05RJLeIrg417QPZxjBZvRH8pkO3GCk5gvVfjLy1UBvCfv10krKlf65+pD+9D/AE3PzarMt227uP3yK+gZXhHunUc8oIs73MatG54r3ASv7PPfMl56BpQLHzNPLq+nzWMjAAAAAElFTkSuQmCC">
                                    <select id="gesture_left_up">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABEUlEQVQ4je3UTysEcRzH8ddaDtycOLjg4E4Wj0HyADi4Onsazq4OPAB5FKv8uyiUvaDUli0atVijX/3UtM3M2pzUfmpqvp959+73PcyvUtt/V5A01l/4RAATvOIZTTzhIT73eAzdUIGwmtOlOV1uhss+jrabJlunqzMv9Uaa9nZ2Op1KkiQTRetX48ohc7jtBk62RgrlRev/KQPpQPpfpMe4xnoBU8m8T+Es8qXStfgrHmEn9p0cdgk3mI98qXQWrTjvYqOLCaJp1DGGDyz0kjawGO/JkENsZ5jNuLIoDCc+7yUNuYvitzjvZZgDjGeEF2XCrPRnzRraOdyvhd3SkCssZ+7SvoV50pBLrGTmvoTwDYsaRvkk4J6aAAAAAElFTkSuQmCC">
                                    <select id="gesture_left_down">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                            </div>
                            <div class="block block-right">
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABMklEQVQ4ja3SP0oDQRTH8e/4ByGiaK+FCBqQgFXUQ3gDCw8heAobC9sU4gHiAexDNKnTpEkEQVCj0bjRzcob3gZZYd3ZndfMm13mw+/tjqnWxuSoa+AQ2AS6yeMzeURgS9dbhb2gp7quAm1g2wdaB060XwJawE5RVOoMONK+BNwBu7KZ04ezOdAQuAKWgQtgAWgCB4JGBdImS7xmkfFT5YntoqiCMd8ZzxldO/pdL3X/BewJaqFo0O+YlfXQMdQGcP4blCsm4wfAmGDo6Fmgq3d1CqLjf9ikwet0pgy1BtwkE8bHBH2z3WjgkrKud/MPGKNPNunniwu6qOt+EozRxzhp43g+K1pOeynog006ckqaWoL2cR8/G+r4o/5Fe9LIlfKJ3ksTvvsd3/6oYPjsRwR+AMxxUcbUh87nAAAAAElFTkSuQmCC">
                                    <select id="gesture_up_right">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABNElEQVQ4ja2UO0oEQRCGv1lFF5cVVhQWVFQEDUyMHDf0AN7A0CMInsLEwFRBPIAewAP4jAxMvMK6oszDkZF/KGGYDdye7YKiqmn64++u6gp2ztN5gDyL+3eH7R88WAPoFp5GPniFCbpYePrpDToJLBdZ4he6pCRPPvxDiQZeoSoUefzuFbpQZNGA8OJ71HM3wD6wDrxVN1X9OXkeOSndsPhg4CFoW+54/WOLHeAZ2KxCZ4BWEDtV/xo4slyinoCtMnQamMq++i5Q2QlwYLmEPQLbWKHkJKt7E003qObEFTALnJm4e6CngZK7SvzPGr6B2NX10CtApj8w4rnA4qu966Wt1eihoJokLzVFrQGnZaBabJzrh/abOmWgNupCNYRuqwr/NutC1fzqzSHgONCWxd0qEOAXsg9JCuwwJUcAAAAASUVORK5CYII=">
                                    <select id="gesture_down_right">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA/UlEQVQ4je3VMUoDQRTG8V90VVAsFARBbbSwsNEoxFOIB9ALWHsNa9sUegIPoVHU2kJEsLezSRFZeMKwmbgbrIR8MDDzvsd/dx4zb1qDwcAodbr9nHOAh5i38VxNmBpJzGsXt4nTw95foDu4Q5HEZnLgptBt3GMu4w2Bm0C3oobzsT5LvFN8VsF10M0ALsb6BJeJf4X9yh+366CvWIr5Oa4rflmWNxziK8CPddAbvOAYFxGbzuT14gNPZX6RSUh1VOOnh/zjpxTjntNGmkAn0P8ALTrdfu7a/aY0v5WFRsNYxRo2sB6jjK1gObrUAmYrTTp7zcfZfu4xex+K4BuSaCV5xYv9QQAAAABJRU5ErkJggg==">
                                    <select id="gesture_right_up">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                                <div class="gesture"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABGklEQVQ4je3UTUrDUBTF8V/aoGBwIoqCiqgD535VFyEuQBegM8FtuAcduABxFYJYOymoA7sEB4qitVQejVDS2LRT6YHAe+ce/twbkhttn39NYw7zWMRC+gRvBlOYRIIxxCjpKPhvMipljT5q55SW8uLx5u3JbJIkzXK53ECjHzWKIu+tOK6tHNU/xsMQvnNz7XZeAx1VLpp5drkLtoanbGCY8QfWCDqC/gfoNR6w/0c96jqHJXQX8kXQvfRXvMJp6rVychU8Yj3ki6CreEnPZzjI1ANoGTeYQFgWG0XQZ2zhNb1f4rirfpiOLAWGjquDbqnwCqppN3n6Bd6H2qCfVBhzG59FwGGgQXXsZBZzD3BYaFANu133HiD8APhnO0OHooKcAAAAAElFTkSuQmCC">
                                    <select id="gesture_right_down">
                                        <option value="0">{5peg5Yqf6IO9Cg==}</option>
                                        <option value="5">{5ZCO6YCACg==}</option>
                                        <option value="6">{5YmN6L+bCg==}</option>
                                        <option value="20">{5YGc5q2iCg==}</option>
                                        <option value="10">{5Yi35paw6aG16Z2iCg==}</option>
                                        <option value="1">{5ZCR5LiK57+76aG1Cg==}</option>
                                        <option value="2">{5ZCR5LiL57+76aG1Cg==}</option>
                                        <option value="13">{5rua5Yqo5Yiw6aG16Z2i6aG26YOoCg==}</option>
                                        <option value="14">{5rua5Yqo5Yiw6aG16Z2i5bqV6YOoCg==}</option>
                                        <option value="17">{5YiH5o2i5Yiw5bem6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="18">{5YiH5o2i5Yiw5Y+z6L6555qE5qCH562+Cg==}
                                        </option>
                                        <option value="7">{5oGi5aSN5Yia5YWz6Zet55qE5qCH562+Cg==}
                                        </option>
                                        <option value="8">{5YWz6Zet5qCH562+6aG1Cg==}</option>
                                        <option value="11">{5omT5byA5paw5qCH562+6aG1Cg==}</option>
                                        <option value="12">{5omT5byA5Li76aG1Cg==}</option>
                                        <!-- <option value="19">{5YWo5bGP5YiH5o2iCg==}</option>
                                    <option value="21">{5pyA5bCP5YyWCg==}</option> -->
                                        <option value="28">5re75Yqg5pS26JePCg==</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- web advanced -->
        <div class="setting setting-advanced">
            <div class="item" hidden="[[hasKeyInArray(hidden_options_.*,'show_proxy_setting')]]">
                <div class="item-title">{5Luj55CG6K6+572uCg==}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <cr-checkbox id="option_show_proxy_menu_button" data-type="boolean" checked="">
                            {5Zyo5bel5YW35qCP5LiK5pi+56S6572R57uc5Luj55CG5oyJ6ZKu}</cr-checkbox>
                    </div>
                    <div class="item-list-option">
                        <select id="option_proxy" disabled="[[hasKeyInArray(disable_options_.*,'show_proxy_setting')]]"></select>
                    </div>
                    <div class="item-list-option">
                        <a is="action-link" id="link_manage_proxy">{566h55CG5Luj55CG5pyN5Yqh5Zmo}</a>
                    </div>
                </div>
            </div>
            <!-- open gmssl ssl html -->
            
                <div class="item" id="gmsslBox">
                    <div class="item-title">{5Zu95a+GU1NM6YCa5L+hCg==}</div>
                    <div class="item-list">
                        <div class="item-list-option">
                            <cr-checkbox id="option_ssl">{5ZCv55So5Zu95a+GU1NM6YCa5L+hCg==}</cr-checkbox>
                            <div class="info" id="gmsslInfo"></div>
                            
                                <cr-checkbox id="option_trident_ssl" style="margin-left: 20px;">{5ZCv55So5YW85a655qih5byP5Zu95a+GU1NM6YCa5L+h}</cr-checkbox>
                            
                        </div>
                        <div class="item-list-option">
                            <cr-button id="gmssl-prefer-manage">{566h55CG5Zu95a+G5LyY5YWI572R56uZ}</cr-button>
                        </div>
                    </div>
                </div>
            
            <!-- <div class="item" hidden="[[hasKeyInArray(hidden_options_.*,'show_certs')]]">
                    <div class="item-title">{6K+B5Lmm5Y+K6amx5Yqo}</div>
                    <div class="item-list">
                        
                            <div class="item-list-option">
                                <cr-button id="btn_manage_certificate">{566h55CG6K+B5LmmCg==}</cr-button>
                            </div>
                        
                        
                        
                            <div class="item-list-option">
                                <cr-button id="link_ukey_driver">{566h55CGVVNCIEtleempseWKqAo=}</cr-button>
                            </div>
                        
                    </div>
                </div> -->
            <!-- 
                    <div class="item">
                        <div class="item-title">{5a6J5YWo6K6+572u}</div>
                        <div class="item-list">
                            
                                <div class="item-list-option">
                                    <cr-checkbox id="option_open_dep_button" data-type="boolean" checked>
                                        {5byA5ZCv5pWw5o2u5omn6KGM5L+d5oqk77yIREVQLCDku4XpgILnlKjkuo7lhbzlrrnmqKHlvI/vvIk=}
                                    </cr-checkbox>
                                </div>
                            
                            
                                <div class="item-list-option">
                                    <cr-checkbox id="option_cloud_safe_url" data-type="boolean" checked>
                                        {5byA5ZCv572R5Z2A5LqR5a6J5YWo}
                                    </cr-checkbox>
                                </div>
                                <div class="item-list-option">
                                    <cr-checkbox id="option_cloud_safe_download" data-type="boolean" checked>
                                        {5byA5ZCv5LiL6L295LqR5a6J5YWo}
                                    </cr-checkbox>
                                </div>
                            
                        </div>
                    </div>
                 -->
            
            <div class="item">
                <div class="item-title" style="width: 250px;">
                    <span>{5o6l5Y+j5YW85a655oCn}</span><br><span>{77yI5a6e6aqM5Yqf6IO977yJ}</span>
                </div>
                <div class="item-list">
                    <div class="item-list-option">
                        <span class="intro">{5byA5ZCv5o6l5Y+j5YW85a655oCn54m55oCn5ZCO77yM5rWP6KeI5Zmo5Y+v5pSv5oyB6YOo5YiG6ICB5penV2Vi5o6l5Y+j44CC5L2G5Yqf6IO95oCn44CB5YW85a655oCn44CB5a6J5YWo5oCn5Y+v6IO96ZmN5L2O77yM5LuF5L6b5byA5Y+R6ICF5Zyo5a6J5YWo5LiT5a625oyH5a+85LiL5Li05pe25rWL6K+V5L2/55So44CC}
                        </span>
                    </div>
                    <div class="item-list-option">
                        <settings-checkbox pref="{{prefs.qax.allow_scripts_to_close_windows}}" id="allow_scripts_to_close_windows" data-type="boolean">
                            {5YWB6K646YCa6L+H6ISa5pys5YWz6Zet572R6aG1}</settings-checkbox>
                    </div>
                    <!-- <div class="item-list-option">
                            <settings-checkbox pref="{{prefs.qax.disable_web_security}}" data-type="boolean">
                                {5YWz6Zet6Leo5Z+f5a6J5YWo6ZqU56a7}</settings-checkbox>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox pref="{{prefs.qax.disable_site_isolation}}" data-type="boolean">
                                {5YWz6Zet56uZ54K55a6J5YWo6ZqU56a7}</settings-checkbox>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox pref="{{prefs.qax.pass_cert_errors}}" data-type="boolean">
                                {5LiN5YaN5oum5oiq6K+B5Lmm5qCh6aqM5peg5rOV6YCa6L+H55qE572R56uZ77yI6auY5bqm5Y2x6Zmp77yJ}
                            </settings-checkbox>
                        </div>
                        <div class="item-list-option">
                            <settings-checkbox pref="{{prefs.qax.allow_running_insecure_content}}" data-type="boolean">
                                {5YWB6K64aHR0cHPpobXpnaLlhoXkvb/nlKhodHRw6YCa5L+h}</settings-checkbox>
                        </div> -->
                </div>
            </div>
            <!-- hardware acceleration  -->
            
                <div class="item">
                    <div class="item-title btn_line_height">
                        <span>{56Gs5Lu25Yqg6YCf5qih5byP}</span>
                    </div>
                    <div class="item-list">
                        <div class="item-list-option">
                          <settings-checkbox class="btn_line_height" pref="{{prefs.hardware_acceleration_mode.enabled}}" id="hardware_acceleration" data-type="boolean">
                          {5ZCv55So56Gs5Lu25Yqg6YCf}
                            <cr-button hidden="[[!shouldShowRestart_(prefs.hardware_acceleration_mode.enabled.value)]]" id="btn_hardware_acceleration_relaunch" on-click="onRestartTap_">
                              {6YeN5paw5ZCv5Yqo}
                            </cr-button>
                          </settings-checkbox>
                        </div>
                    </div>
                </div>
            
        </div>

        <!-- more -->
        <div class="setting setting-more">
            <div class="item">
                <div class="item-title">{6LSt54mp5Yqp5omLCg==}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        {572R6LSt56We5Zmo77ya5Zyo5ZWG5ZOB6aG16Z2i6Ieq5Yqo5q+U5Lu377yM5pi+56S65Lu35qC85L+h5oGvCg==}
                    </div>
                    <div class="item-list-option">
                        <select id="option_shopping" data-type="string">
                            <option value="compare_trend">
                                {5pi+56S65q+U5Lu35L+h5oGv5ZKM5Lu35qC86LWw5Yq/Cg==}
                            </option>
                            <option value="compare">
                                {5Y+q5pi+56S65q+U5Lu35L+h5oGv77yI6aG16Z2i5bqV6YOo77yJCg==}
                            </option>
                            <option value="trend">
                                {5Y+q5pi+56S65Lu35qC86LWw5Yq/77yI6aG16Z2i5Lit6Ze077yJCg==}
                            </option>
                            <option value="none">{5Z2H5LiN5pi+56S6Cg==}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">{6Ieq5Yqo5pCc57SiCg==}</div>
                <div class="item-list">
                    <div class="item-list-option">{5Zyo5Zyw5Z2A5qCP6L6T5YWl5pe26Ieq5Yqo5pCc57SiCg==}
                    </div>
                    <div class="item-list-option">
                        <select id="option_auto_search" data-type="string">
                            <option value="none">{5LiN5byA5ZCvCg==}</option>
                            <option value="cn">{5Lit5paH5byA5ZCvCg==}</option>
                            <option value="en">{6Iux5paH5byA5ZCvCg==}</option>
                            <option value="all">{5Lit6Iux5paH5YWo5byACg==}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">{6Ieq5Yqo5aGr5YaZ5a+G56CBCg==}</div>
                <div class="item-list">
                    <div class="item-list-option">
                        <cr-checkbox id="option_auto_secret" data-type="boolean">
                            {5byA5ZCv6Ieq5Yqo5aGr5YaZ5a+G56CB5Yqf6IO9Cg==}</cr-checkbox>
                    </div>
                    <div class="item-list-option">
                        <a id="link_secret_saved" class="link">{5bey5L+d5a2Y5a+G56CB55qE572R56uZCg==}</a>
                        <a id="link_secret_not_save" class="link">{5LiA5b6L5LiN5L+d5a2Y55qE572R56uZCg==}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="dialogs">

    
        <template is="dom-if" if="[[showCertificateManager_]]" restamp="">
            <certificate-manager id="certificate-manager" on-overlay-close="onOverlayClose_" hidden-gm="[[hasKeyInArray(hidden_options_.*,'show_gmssl_setting')]]">
            </certificate-manager>
        </template>
    

    <cr-dialog id="modal_popup" show-close-button="">
        <div slot="title">
            {5aeL57uI5YWB6K645by55Ye655qE572R56uZCg==}
        </div>
        <div slot="body" class="dialog-body">
            <div class="site-list">
                <div id="popup_site_list">
                </div>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_popup">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_add_popup" show-close-button="">
        <div slot="title">
            {5re75Yqg572R56uZCg==}
        </div>
        <div slot="body" class="dialog-body">
            <div class="site-list">
                <input type="text" id="new_popup" placeholder="[*.]example.com">
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">

                <cr-button class="cr-button-gap" id="btn_close_add_popup">{5Y+W5raICg==}</cr-button>
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_comfirm_add_popup" disabled="">
                    {5re75YqgCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_pwd_saved" show-close-button="">
        <div slot="title">
            {5bey5L+d5a2Y5a+G56CB55qE572R56uZCg==}
        </div>
        <div slot="body" class="dialog-body">
            <div class="site-list">
                <div id="pwd_saved_site_list">
                </div>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_pwd_saved">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_pwd_not_save" show-close-button="">
        <div slot="title">
            {5LiA5b6L5LiN5L+d5a2Y5a+G56CB55qE572R56uZCg==}
        </div>
        <div slot="body" class="dialog-body">
            <div class="site-list">
                <div id="pwd_not_save_site_list"></div>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_pwd_not_save">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_auto_fill_saved" show-close-button="">
        <div slot="title">
            {5bey5L+d5a2Y55qE5Zyw5Z2ACg==}
        </div>
        <div slot="body" class="dialog-body">
            <div class="site-list">
                <div id="auto_fill_saved_list"></div>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_auto_fill_saved">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_manage_proxy" show-close-button="">
        <div slot="title">
            {5Luj55CG5pyN5Yqh5Zmo5YiX6KGo}
        </div>
        <div slot="body" class="dialog-body">
            <textarea id="proxy_list_textarea"></textarea>
            <div>
                {5LiN5L2/55So5Luj55CG5pyN5Yqh5Zmo55qE5Zyw5Z2A77yI5aSa5Liq5Zyw5Z2A5L2/55So5o2i6KGM5YiG6ZqU77yJ}
            </div>
            <textarea id="proxy_whitelist_textarea"></textarea>
            <div class="line">
                <cr-checkbox id="option_proxy_disable_for_local" data-type="boolean">
                    {5a+55LqO5pys5Zyw5Zyw5Z2A5LiN5L2/55So5Luj55CG5pyN5Yqh5Zmo}</cr-checkbox>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_manage_proxy_close">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_manage_certs" show-close-button="">
        <div slot="title">
            {6K+B5Lmm566h55CG}
        </div>
        <div slot="body" class="dialog-body">
            <div class="cert-list certs" id="cert_list">
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_manage_cert">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_ukey_driver" show-close-button="">
        <div slot="title">
            {6amx5Yqo566h55CG}
        </div>
        <div slot="body" class="dialog-body">

            <div class="ukey-driver-list">
                <div id="ukey_driver_list"></div>
            </div>
        </div>
        <div slot="button-container">
            <div class="button-box">
                <cr-button class="cr-button-gap" id="btn_add_modal_ukey_driver">
                    {5re75YqgCg==}
                </cr-button>
                <paper-spinner-lite id="spinner"></paper-spinner-lite>
                <cr-button class="action-button" id="btn_close_modal_ukey_driver">
                    {5YWz6ZetCg==}
                </cr-button>
            </div>
        </div>
    </cr-dialog>
    
        <!-- gmssl dialog start -->
        <cr-dialog id="modal_gmssl_popup" show-close-button="">
            <div slot="title" class="gmpop_title">
                5ZCv55So5Zu95a+GU1NM6YCa5L+hCgoK
            </div>
            <div slot="body" class="dialog-body gmpop-body">
                <div>
                    5Zu95a+GU1NM6YCa5L+h5Li65rWP6KeI5Zmo5aKe5by65Yqf6IO944CC546w5Li65oKo5o+Q5L6bOTDlpKnlhY3otLnor5XnlKjjgILnq4vljbPlvIDlp4vor5XnlKjvvJ8KCgo=
                </div>
                <!-- <div class="site-list">
                    <div id="popup_site_list">
                    </div>
                </div> -->
            </div>
            <div slot="button-container">
                <div class="button-box button-box2">
                    <paper-spinner-lite id="spinner"></paper-spinner-lite>
                    <cr-button class="action-button mr-20" id="btn_confirm_modal_gmssl_popup">
                        56Gu5a6aCgoK
                    </cr-button>
                    <cr-button id="btn_close_modal_gmssl_popup">
                        5Y+W5raICgo=
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
        <!-- gmssl dialog end -->
    
    
        <cr-dialog id="modal_importbookmark_popup" show-close-button="">
            <div slot="title" class="importbookmark_title">
                5a+85YWl5Lmm562+Cgo=
            </div>
            <div slot="body" class="dialog-body importbookmark-body">
                <div class="source">
                    <div class="source_title">5p2l5rqQ77ya</div>
                    <div class="source_option">
                        <select id="bookmark_select" class="bookmark_select" data-type="string" on-change="optionChange_">
                        </select>
                    </div>
                </div>
                <div class="modal_importbookmark_popup_checkbox">
                    <cr-checkbox id="newFolder" checked="">5Zyo5paw5paH5Lu25aS55Lit5a+85YWl5Lmm562+Cgo=</cr-checkbox>
                </div>
            </div>
            <div slot="button-container" class="button-container">
                <div id="helpBtn" class="helpBtn">5aaC5L2V5a+85YWl5YW25LuW5rWP6KeI5Zmo55qE5Lmm562+</div>
                <div class="button-box button-box2">
                    <paper-spinner-lite id="spinner"></paper-spinner-lite>
                    <cr-button class="action-button mr-20" id="btn_chooseFile_modal_importbookmark_popup">
                        6YCJ5oup5paH5Lu2
                    </cr-button>
                    <cr-button class="action-button mr-20" id="btn_confirm_modal_importbookmark_popup">
                        5a+85YWl
                    </cr-button>
                    <cr-button id="btn_close_modal_importbookmark_popup">
                        5Y+W5raI
                    </cr-button>
                </div>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_importbookmark_success_popup" show-close-button="">
            <div slot="title" class="importbookmark_success_title">
                5a+85YWl5Lmm562+
            </div>
            <div slot="body" class="dialog-body importbookmark-success-body">
                5a+85YWl5oiQ5Yqf
            </div>
            <div slot="button-container">
                <div class="button-box button-box2">
                    <paper-spinner-lite id="spinner"></paper-spinner-lite>
                    <cr-button class="action-button mr-20" id="btn_success_modal_importbookmark_popup">
                        56Gu5a6a
                    </cr-button>
                </div>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_importbookmark_failed_popup" show-close-button="">
            <div slot="title" class="importbookmark_failed_title">
                5a+85YWl5Lmm562+
            </div>
            <div slot="body" class="dialog-body importbookmark-failed-body">
                5a+85YWl5aSx6LSl
            </div>
            <div slot="button-container">
                <div class="button-box button-box2">
                    <paper-spinner-lite id="spinner"></paper-spinner-lite>
                    <cr-button class="action-button mr-20" id="btn_failed_modal_importbookmark_popup">
                        56Gu5a6a
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
        <cr-dialog id="modal_importbookmark_help_popup" show-close-button="">
            <div slot="title" class="importbookmark_help_title">
                5aaC5L2V5a+85YWl5YW25LuW5rWP6KeI5Zmo55qE5Lmm562+
            </div>
            <div slot="body" class="dialog-body importbookmark-help-body">
                <p>6YOo5YiG5rWP6KeI5Zmo55qE5Lmm562+77yI5pS26JeP5aS577yJ5peg5rOV55u05o6l5a+85YWl77yM5oKo5Y+v5Lul5oyJ5aaC5LiL5q2l6aqk5p2l5omL5Yqo5a+85YWl77ya
                </p>
                <p>MeOAgeaJk+W8gOaCqOS5i+WJjea1j+iniOWZqOeahOS5puetvu+8iOaUtuiXj+Wkue+8ieeuoeeQhuWZqO+8iOmAmuW4uOWcqOa1j+iniOWZqOiPnOWNleS4reWPr+aJvuWIsO+8ie+8mw==
                </p>
                <p>MuOAgemAieaLqeKAnOWvvOWHuuS5puetvu+8iOWvvOWHuuaUtuiXj+Wkue+8ieKAne+8jOWNs+WPr+WwhuS5puetvuWvvOWHuuWIsOS4gOS4qkhUTUzmlofku7bvvJs=
                </p>
                <p>M+OAgeWbnuWIsOW9k+WJjeWvvOWFpeS5puetvueVjOmdou+8jOW5tuWcqOKAnOadpea6kOKAneeahOS4i+aLieWIl+ihqOS4remAieaLqeKAnOS7peWJjeWvvOWHuueahOS5puetvu+8iEhUTUzmlofku7bvvInigJ3jgII=
                </p>
                <p>NOOAgeeCueWHu+KAnOmAieaLqeaWh+S7tuKAneaMiemSru+8jOW5tuWcqOaJk+W8gOeahOmAieaLqeaWh+S7tuWvueivneahhuS4remAieaLqeaJk+W8gOS4iui/sOatpemqpOWvvOWHuueahEhUTUzmlofku7bjgILljbPlj6/lrozmiJDlr7zlhaXjgII=
                </p>
            </div>
            <div slot="button-container">
                <div class="button-box button-box2">
                    <paper-spinner-lite id="spinner"></paper-spinner-lite>
                    <cr-button class="action-button mr-20" id="btn_help_modal_importbookmark_popup">
                        5YWz6Zet
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
    

    <cr-dialog id="modal_closeopentrust_popup" show-close-button="">
        <div slot="title" class="closetrust_title red">
            6auY5bqm5Y2x6Zmp
        </div>
        <div slot="body" class="dialog-body closetrust-body red">
            <div>
                5YWz6Zet5Y+v5L+h6YCa5L+h5a6J5YWo5Yqf6IO95Lya5bCG5rWP6KeI5Zmo572u5LqO6auY5bqm5Y2x6Zmp546v5aKD5Lit44CC
            </div>
            <div>
                5LuF5L6b5byA5Y+R6ICF5Zyo5a6J5YWo5LiT5a625oyH5a+85LiL5Li05pe25rWL6K+V5L2/55So44CC
            </div>
        </div>
        <div slot="button-container" id="button-opencheckcert">
            <div class="button-box">
                <cr-button id="btn_closeopencheckcert_popup">
                    5LuN54S25YWz6Zet
                </cr-button>
                <cr-button id="btn_opencheckcert_popup" class="action-button">
                    5L+d5oyB5byA5ZCv
                </cr-button>
            </div>
        </div>
        <div slot="button-container" id="button-intercepthttps">
            <div class="button-box">
                <cr-button id="btn_closeintercepthttps_popup">
                    5LuN54S25YWz6Zet
                </cr-button>
                <cr-button id="btn_openintercepthttps_popup" class="action-button">
                    5L+d5oyB5byA5ZCv
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    <cr-dialog id="modal_closeopencheckcert_popup" show-close-button="">
        <div slot="title" class="closetrust_title red">
            6auY5bqm5Y2x6Zmp
        </div>
        <div slot="body" class="dialog-body closetrust-body red">
            <div>
                5YWz6Zet5a6J5YWo6ZqU56a76Ziy5oqk5Yqf6IO95Lya5bCG5rWP6KeI5Zmo572u5LqO6auY5bqm5Y2x6Zmp546v5aKD5Lit44CC
            </div>
            <div>
                5LuF5L6b5byA5Y+R6ICF5Zyo5a6J5YWo5LiT5a625oyH5a+85LiL5Li05pe25rWL6K+V5L2/55So44CC
            </div>
        </div>
        <div slot="button-container" id="button-opencross">
            <div class="button-box">
                <cr-button id="btn_closeopencrossdomin_popup">
                    5LuN54S25YWz6Zet
                </cr-button>
                <cr-button id="btn_opencrossdomin_popup" class="action-button">
                    5L+d5oyB5byA5ZCv
                </cr-button>
            </div>
        </div>
        <div slot="button-container" id="button-opensite">
            <div class="button-box">
                <cr-button id="btn_closeopensite_popup">
                    5LuN54S25YWz6Zet
                </cr-button>
                <cr-button id="btn_opensite_popup" class="action-button">
                    5L+d5oyB5byA5ZCv
                </cr-button>
            </div>
        </div>
    </cr-dialog>

    
        <cr-dialog id="modal_trust_site" show-close-button="">
            <div slot="title">
                {5Y+v5L+h572R56uZ}
            </div>
            <div slot="body" class="dialog-body">
                <div class="site-list">
                    <div id="pwd_saved_trustsite_list">
                    </div>
                </div>
            </div>
            <div slot="button-container">
                <div class="button-box">
                    <!-- <paper-spinner-lite id="spinner"></paper-spinner-lite> -->
                    <cr-button id="btn_add_modal_trust_site">
                        {5re75Yqg}
                    </cr-button>
                    <cr-button class="action-button" id="btn_close_modal_trust_site">
                        {5YWz6Zet}
                    </cr-button>
                </div>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_add_trust_site" show-close-button="">
            <div slot="title">
                5Y+v5L+h572R56uZ6K6+572u
            </div>
            <div slot="body" class="dialog-body body_add_trust_site">
                <div class="body_add_trust_site_title" id="body_add_trust_site_title">
                    572R56uZ5Zyw5Z2A77ya
                </div>
                <div class="input-container">
                    <input id="add_trustsite_input" class="field-input" type="text" autocomplete="off" placeholder="支持域名或IP">
                    <div class="underline"></div>
                </div>
                <div id="error_info" class="error-msg"></div>
                <div class="body_add_trust_site_destitle">
                    5Y+v5L+h572R56uZ6K+05piO77ya
                </div>
                <div>
                    5rWP6KeI5Zmo5bCG5LiN5YaN5qOA5rWL6KKr6K6+572u5Li65Y+v5L+h572R56uZ55qE572R56uZ6K+B5Lmm5a6J5YWo5oCn77yM5bm25YWB6K64SFRUUFPnvZHpobXlhoXkvb/nlKhIVFRQ5Y2P6K6u6YCa5L+h44CC
                </div>
                <div class="red">
                    6K+356Gu6K6k572R56uZ5YW35aSH6Laz5aSf55qE5a6J5YWo5oCn5pe277yM5omN5bCG5YW25Yqg5YWl5Y+v5L+h572R56uZ44CC
                </div>
            </div>
            <div slot="button-container">
                <div class="button-box">
                    <cr-button id="modal_add_trust_site_close">
                        5Y+W5raI
                    </cr-button>
                    <cr-button id="modal_add_trust_site_confirm" class="action-button">
                        56Gu5a6a
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
    

    
        <cr-dialog id="modal_gmssl_prefer_site" show-close-button="">
            <div slot="title">
                {5Zu95a+G5LyY5YWI572R56uZ}
            </div>
            <div slot="body" class="dialog-body">
                <div class="site-list">
                    <div id="saved_gmssl_prefer_list">
                    </div>
                </div>
            </div>
            <div slot="button-container">
                <div class="button-box">
                    <cr-button id="btn_add_gmssl_prefer_site">
                        {5re75Yqg}
                    </cr-button>
                    <cr-button class="action-button" id="btn_close_gmssl_prefer_site">
                        {5YWz6Zet}
                    </cr-button>
                </div>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_add_gmssl_prefer_site" show-close-button="">
            <div slot="title">
                {5re75Yqg5Zu95a+G5LyY5YWI572R56uZ}
            </div>
            <div slot="body" class="dialog-body body_add_trust_site">
                <div class="body_add_trust_site_title">
                    {572R56uZ5Zyw5Z2A77ya}
                </div>
                <div class="input-container">
                    <input id="add_gmssl_prefer_input" class="field-input" type="text" autocomplete="off" placeholder="支持域名或IP">
                    <div class="underline"></div>
                </div>
                <div id="error_info" class="error-msg"></div>
                <div>
                    {5Yqg5YWl5q2k6K6+572u55qE572R5Z2A77yM5Zyo6K6/6Zeu55u45bqU55qE5pyN5Yqh5Zmo5pe277yM5Lya5LyY5YWI5L2/55So5Zu95a+GU1NM5Y2P6K6u6L+b6KGM6YCa5L+h44CC}
                </div>
            </div>
            <div slot="button-container">
                <div class="button-box">
                    <cr-button id="modal_add_gmssl_prefer_close">
                        5Y+W5raI
                    </cr-button>
                    <cr-button id="modal_add_gmssl_prefer_confirm" class="action-button">
                        56Gu5a6a
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
    

    <!-- <cr-dialog id="modal_website" show-close-button>
                    <div slot="title">
                        572R6aG16K6+572u
                    </div>
                    <div slot="body" class="dialog-body body_modal_website">
                        <div>5p2D6ZmQ</div>
                        <cr-link-row id="website-location">
                            <div class="iron-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M12,2C8.13,2,5,5.13,5,9c0,5.34,4.21,6.79,6.03,12.28C11.17,21.7,11.55,22,12,22s0.83-0.3,0.97-0.72 C14.79,15.79,19,14.34,19,9C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5 C14.5,10.38,13.38,11.5,12,11.5z"></path></g></svg>
                            </div>
                            <div class="desp">5L2N572u5L+h5oGv77yI572R6aG15Y+v5Lul6K+35rGC5L2/55So5oKo55qE5L2N572u5L+h5oGv77yJ</div>
                        </cr-link-row>
                        <cr-link-row class="hr" id="website-cmera">
                            <div class="iron-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g></svg>
                            </div>
                            <div class="desp">5pGE5YOP5aS077yI572R6aG15Y+v5Lul6K+35rGC5L2/55So5oKo55qE5pGE5YOP5aS077yJ</div>
                        </cr-link-row>
                        <cr-link-row class="hr" id="website-mic">
                            <div class="iron-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g></svg>
                            </div>
                            <div class="desp">6bqm5YWL6aOO77yI572R6aG15Y+v5Lul6K+35rGC5L2/55So5oKo55qE6bqm5YWL6aOO77yJ</div>
                        </cr-link-row>
                        <cr-link-row class="hr" id="website-notice">
                            <div class="iron-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g></svg>
                            </div>
                            <div class="desp">6YCa55+l77yI572R56uZ5Y+v5Lul6K+i6Zeu6IO95ZCm5ZCR5oKo5Y+R6YCB6YCa55+l77yJ</div>
                        </cr-link-row>
                        <cr-link-row class="hr" id="website-clipboard">
                            <div class="iron-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z M19,19H5V5h2v3h10V5h2V19z"></path></g></svg>
                            </div>
                            <div class="desp">5Ymq6LS05p2/77yI572R6aG15Y+v5Lul6K+35rGC5p+l55yL5oKo5Ymq6LS05p2/5Lit55qE5paH5a2X5ZKM5Zu+54mH77yJ</div>
                        </cr-link-row>
                    </div>
                </cr-dialog>
                <cr-dialog id="modal_website_enery" show-close-button>
                    <div slot="title" class="title">
                        <cr-icon-button class="icon-arrow-back" id="icon-arrow-back"></cr-icon-button>
                        <div id="modal_website_enery_title"></div>
                    </div>
                    <div slot="body" class="dialog-body body_modal_website_enery">
                        <div class="allow_view">
                            <div id="allow_view_title"></div>
                            <div class="allow_view_website" id="allow_view_website"></div>
                        </div>
                        <div class="not_allow_view">
                            <div id="not_allow_view_title"></div>
                            <div class="not_allow_view_website" id="not_allow_view_website"></div>
                        </div>
                    </div>
                </cr-dialog> -->

    
      <cr-dialog id="modal_translate_prompt" show-close-button="">
        <div slot="title">
          5o+Q56S6
        </div>
        <div slot="body" class="dialog-body">
          <div class="desp">
            57+76K+R5Yqf6IO955Sx56ys5LiJ5pa55o+Q5L6b77yM5Yqf6IO95byA5ZCv5ZCO77yM56ys5LiJ5pa55Y+v6IO95Lya6I635Y+W5oKo6K6/6Zeu572R56uZ55qE55u45YWz5L+h5oGv77yM6K+356Gu6K6k5piv5ZCm5byA5ZCv77yf
          </div>
        </div>
        <div slot="button-container">
          <div class="button-box">
            <cr-button id="btn_cancel_enable_translate">
              {5LiN5byA5ZCv}
            </cr-button>
            <cr-button class="action-button" id="btn_enable_translate">
              {5LuN6KaB5byA5ZCv}
            </cr-button>
          </div>
        </div>
      </cr-dialog>
    
    
        <cr-dialog id="modal_website" show-close-button="">
            <div slot="title">
                572R6aG16K6+572u
            </div>
            <div slot="body" class="dialog-body body_modal_website">
                <div id="permissions_website" class="permissions_website"></div>
            </div>
            <div slot="button-container">
                <cr-button id="modal_modal_website_close" class="action-button">
                    5YWz6Zet
                </cr-button>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_website_all" show-close-button="">
            <div slot="title" class="title" id="modal_website_all_title">
                <!-- <cr-icon-button class="icon-arrow-back" id="icon-arrow-back2"></cr-icon-button> -->
                572R6aG16K6+572u
            </div>
            <div slot="body" class="dialog-body body_modal_website_all">
                <div class="body_modal_website_all_title">572R6aG15Zyw5Z2A77yaIA==<div id="modal_website_all_name">
                    </div>
                </div>
                <div class="power">
                    <div>5p2D6ZmQ</div>
                    <cr-button id="btn_reset_settings">
                        6YeN572u5p2D6ZmQ
                    </cr-button>
                </div>
                <div class="website_details">
                    <!-- location -->
                    <div class="item">
                        <div class="iron-icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g>
                                    <path d="M12,2C8.13,2,5,5.13,5,9c0,5.34,4.21,6.79,6.03,12.28C11.17,21.7,11.55,22,12,22s0.83-0.3,0.97-0.72 C14.79,15.79,19,14.34,19,9C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5 C14.5,10.38,13.38,11.5,12,11.5z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="permissionName">5L2N572u5L+h5oGv</div>
                        <select id="location" class="md-select" on-change="onPermissionSelectionChange_">
                            <option id="default" value="default">6K+i6Zeu77yI6buY6K6k77yJ</option>
                            <option id="allow" value="allow">5YWB6K64</option>
                            <option id="block" value="block">56aB5q2i</option>
                            <option id="ask" value="ask" hidden="">6K+i6Zeu</option>
                        </select>
                    </div>
                    <!-- media-stream-camera -->
                    <div class="item">
                        <div class="iron-icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g>
                                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="permissionName">5pGE5YOP5aS0</div>
                        <select id="media-stream-camera" class="md-select" on-change="onPermissionSelectionChange_">
                            <option id="default" value="default">6K+i6Zeu77yI6buY6K6k77yJ</option>
                            <option id="allow" value="allow">5YWB6K64</option>
                            <option id="block" value="block">56aB5q2i</option>
                            <option id="ask" value="ask" hidden="">6K+i6Zeu</option>
                        </select>
                    </div>
                    <!-- media-stream-mic -->
                    <div class="item">
                        <div class="iron-icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g>
                                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="permissionName">6bqm5YWL6aOO</div>
                        <select id="media-stream-mic" class="md-select" on-change="onPermissionSelectionChange_">
                            <option id="default" value="default">6K+i6Zeu77yI6buY6K6k77yJ</option>
                            <option id="allow" value="allow">5YWB6K64</option>
                            <option id="block" value="block">56aB5q2i</option>
                            <option id="ask" value="ask" hidden="">6K+i6Zeu</option>
                        </select>
                    </div>
                    <!-- notifications -->
                    <div class="item">
                        <div class="iron-icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g>
                                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="permissionName">6YCa55+l</div>
                        <select id="notifications" class="md-select" on-change="onPermissionSelectionChange_">
                            <option id="default" value="default">6K+i6Zeu77yI6buY6K6k77yJ</option>
                            <option id="allow" value="allow">5YWB6K64</option>
                            <option id="block" value="block">56aB5q2i</option>
                            <option id="ask" value="ask" hidden="">6K+i6Zeu</option>
                        </select>
                    </div>
                    <!-- clipboard -->
                    <div class="item">
                        <div class="iron-icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g>
                                    <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="permissionName">5Ymq5YiH5p2/</div>
                        <select id="clipboard" class="md-select" on-change="onPermissionSelectionChange_">
                            <option id="default" value="default">6K+i6Zeu77yI6buY6K6k77yJ</option>
                            <option id="allow" value="allow">5YWB6K64</option>
                            <option id="block" value="block">56aB5q2i</option>
                            <option id="ask" value="ask" hidden="">6K+i6Zeu</option>
                        </select>
                    </div>

                </div>
            </div>
            <div slot="button-container" class="button-container_modal_website_all">
                <cr-button id="btn_back_modal_website_all">
                    6L+U5Zue
                </cr-button>
                <cr-button id="modal_modal_website_all_close" class="action-button">
                    5YWz6Zet
                </cr-button>
            </div>
        </cr-dialog>

        <cr-dialog id="modal_reset_power" show-close-button="">
            <!-- <div slot="title" class="title" id="modal_reset_power_title">
                      </div> -->
            <div slot="body" class="dialog-body body_modal_reset_power">
                6KaB6YeN572u <div id="resetwebsite_name"></div> 55qE572R56uZ5p2D6ZmQ5ZCX77yf
                <div style="display: none;" id="reset_websitename"></div>
            </div>
            <div slot="button-container">
                <div class="button-box">
                    <!-- <paper-spinner-lite id="spinner"></paper-spinner-lite> -->
                    <cr-button id="btn_close_reset_power">
                        5Y+W5raI
                    </cr-button>
                    <cr-button class="action-button" id="btn_reset_allpower">
                        6YeN572u
                    </cr-button>
                </div>
            </div>
        </cr-dialog>
    
</div>

</div>

<template id="settings-dialog-template">
    <dialog id="dialog">
        <div class="title"></div>
        <slot name="title" class="title"></slot>
        <form id="form" name="form" method="dialog">
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div class="buttons">
                <cr-button type="submit" value="yes">
                    <slot name="yes"></slot>
                </cr-button>
                <cr-button type="submit" value="no">
                    <slot name="no"></slot>
                </cr-button>
            </div>
        </form>
    </dialog>
</template>
<!--_html_template_end_-->`,
    behaviors: [FindShortcutBehavior],
    properties: {
        disable_options_: {
            type: Array,
            reflectToAttribute: true,
            notify: true,
            value: ()=>[]
        },
        hidden_options_: {
            type: Array,
            reflectToAttribute: true,
            notify: true,
            value: ()=>[]
        },
        showCertificateManager_: Boolean,
        fontSizeOptions_: {
            readOnly: true,
            type: Array,
            value() {
                return [{
                    value: 9,
                    name: loadTimeData.getString("verySmall")
                }, {
                    value: 12,
                    name: loadTimeData.getString("small")
                }, {
                    value: 16,
                    name: loadTimeData.getString("medium")
                }, {
                    value: 20,
                    name: loadTimeData.getString("large")
                }, {
                    value: 24,
                    name: loadTimeData.getString("veryLarge")
                }]
            }
        }
    },
    listeners: {
        "refresh-pref": "onRefreshPref_"
    },
    addHiddenKey(key) {
        if (Array.isArray(this.hidden_options_)) {
            this.hidden_options_.push(key);
            this.hidden_options_ = Array.from(new Set(this.hidden_options_))
        } else {
            this.hidden_options_ = [key]
        }
        this.notifyPath("hidden_options_")
    },
    removeHiddenKey(key) {
        if (Array.isArray(this.hidden_options_)) {
            const s = new Set(this.hidden_options_);
            s.delete(key);
            this.hidden_options_ = Array.from(s)
        } else {
            this.hidden_options_ = []
        }
        this.notifyPath("hidden_options_")
    },
    addDisableKey(key) {
        if (Array.isArray(this.disable_options_)) {
            this.disable_options_.push(key);
            this.disable_options_ = Array.from(new Set(this.disable_options_))
        } else {
            this.disable_options_ = [key]
        }
        this.notifyPath("disable_options_")
    },
    removeDisableKey(key) {
        if (Array.isArray(this.disable_options_)) {
            const s = new Set(this.disable_options_);
            s.delete(key);
            this.disable_options_ = Array.from(s)
        } else {
            this.disable_options_ = []
        }
        this.notifyPath("disable_options_")
    },
    hasKeyInArray(change, key) {
        if (Array.isArray(change.base)) {
            return change.base.includes(key)
        } else {
            return false
        }
    },
    created() {
        this.getQaxSettings_()
    },
    ready() {
        this.addEventListener("show-container", (()=>{
            this.$.container.style.visibility = "visible"
        }
        ));
        this.addEventListener("hide-container", (()=>{
            this.$.container.style.visibility = "hidden"
        }
        ))
    },
    attached() {
        setTimeout((()=>{
            chrome.send("metricsHandler:recordTime", ["Settings.TimeUntilInteractive", window.performance.now()])
        }
        ))
    },
    currentRouteChanged(route) {},
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false
        }
        this.$$("cr-toolbar").getSearchField().showAndFocus();
        return true
    },
    searchInputHasFocus() {
        return this.$$("cr-toolbar").getSearchField().isSearchFocused()
    },
    onRefreshPref_(e) {
        return this.$.prefs.refresh(e.detail)
    },
    onSearchChanged_(e) {
        const query = e.detail;
        settings.Router.getInstance().navigateTo(settings.routes.BASIC, query.length > 0 ? new URLSearchParams("search=" + encodeURIComponent(query)) : undefined, true)
    },
    onIronActivate_() {
        this.$.drawer.close()
    },
    onMenuButtonTap_() {
        this.$.drawer.toggle()
    },
    onMenuClose_() {
        if (!this.$.drawer.wasCanceled()) {
            return
        }
        this.$.container.setAttribute("tabindex", "-1");
        this.$.container.focus();
        listenOnce(this.$.container, ["blur", "pointerdown"], (()=>{
            this.$.container.removeAttribute("tabindex")
        }
        ))
    },
    onAdvancedOpenedInMainChanged_() {
        if (this.advancedOpenedInMain_) {
            this.advancedOpenedInMenu_ = true
        }
    },
    onAdvancedOpenedInMenuChanged_() {
        if (this.advancedOpenedInMenu_) {
            this.advancedOpenedInMain_ = true
        }
    },
    onNarrowChanged_() {
        if (this.$.drawer.open && !this.narrow_) {
            this.$.drawer.close()
        }
    },
    getQaxSettings_() {
        const controls = JSON.parse(chrome.getQaxSettings()).controls;
        this.disable_options_ = Array.isArray(controls.disable_options) ? controls.disable_options : [];
        this.hidden_options_ = Array.isArray(controls.hidden_options) ? controls.hidden_options : []
    },
    onOverlayClose_(e) {
        if (e.target.id == "certificate-manager") {
            this.set("showCertificateManager_", false)
        }
    },
    optionChange_(e) {
        const target = e.target;
        const index = target.selectedIndex;
        const optionsLength = target.options.length - 1;
        if (index == optionsLength) {
            this.$["btn_chooseFile_modal_importbookmark_popup"].style.display = "block";
            this.$["btn_confirm_modal_importbookmark_popup"].style.display = "none"
        } else {
            this.$["btn_chooseFile_modal_importbookmark_popup"].style.display = "none";
            this.$["btn_confirm_modal_importbookmark_popup"].style.display = "block"
        }
    },
    onPermissionSelectionChange_(e) {
        const target = e.target;
        const category = [];
        category.push(target.id);
        chrome.send("setOriginPermissions", [target.getAttribute("webpath"), category, target.value])
    },
    onRestartTap_(e) {
        e.stopPropagation();
        chrome.send("relaunch")
    },
    shouldShowRestart_(enabled) {
        return enabled != loadTimeData.getBoolean("hardwareAccelerationEnabledAtStartup")
    }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
const UpdateStatus = {
    CHECKING: "checking",
    UPDATING: "updating",
    NEARLY_UPDATED: "nearly_updated",
    UPDATED: "updated",
    FAILED: "failed",
    DISABLED: "disabled",
    DISABLED_BY_ADMIN: "disabled_by_admin",
    NEED_PERMISSION_TO_UPDATE: "need_permission_to_update"
};
let PromoteUpdaterStatus;
class AboutPageBrowserProxy {
    pageReady() {}
    refreshUpdateStatus() {}
    openHelpPage() {}
}
class AboutPageBrowserProxyImpl {
    pageReady() {
        chrome.send("aboutPageReady")
    }
    refreshUpdateStatus() {
        chrome.send("refreshUpdateStatus")
    }
    launchReleaseNotes() {
        chrome.send("launchReleaseNotes")
    }
    openHelpPage() {
        chrome.send("openHelpPage")
    }
}
addSingletonGetter(AboutPageBrowserProxyImpl);
// Copyright 2016 The Chromium Authors. All rights reserved.
class AppearanceBrowserProxy {
    getDefaultZoom() {}
    getThemeInfo(themeId) {}
    isSupervised() {}
    useDefaultTheme() {}
    validateStartupPage(url) {}
}
class AppearanceBrowserProxyImpl {
    getDefaultZoom() {
        return new Promise((function(resolve) {
            chrome.settingsPrivate.getDefaultZoom(resolve)
        }
        ))
    }
    getThemeInfo(themeId) {
        return new Promise((function(resolve) {
            chrome.management.get(themeId, resolve)
        }
        ))
    }
    isSupervised() {
        return loadTimeData.getBoolean("isSupervised")
    }
    useDefaultTheme() {
        chrome.send("useDefaultTheme")
    }
    validateStartupPage(url) {
        return sendWithPromise("validateStartupPage", url)
    }
}
addSingletonGetter(AppearanceBrowserProxyImpl);
// Copyright 2016 The Chromium Authors. All rights reserved.
class DefaultBrowserBrowserProxyImpl {
    requestDefaultBrowserState() {
        return sendWithPromise("requestDefaultBrowserState")
    }
    setAsDefaultBrowser() {
        chrome.send("setAsDefaultBrowser")
    }
}
addSingletonGetter(DefaultBrowserBrowserProxyImpl);
// Copyright 2020 The Chromium Authors. All rights reserved.
class HatsBrowserProxy {
    tryShowSurvey() {}
}
class HatsBrowserProxyImpl {
    tryShowSurvey() {
        chrome.send("tryShowHatsSurvey")
    }
}
addSingletonGetter(HatsBrowserProxyImpl);
// Copyright 2016 The Chromium Authors. All rights reserved.
class OnStartupBrowserProxy {
    getNtpExtension() {}
}
class OnStartupBrowserProxyImpl {
    getNtpExtension() {
        return sendWithPromise("getNtpExtension")
    }
}
addSingletonGetter(OnStartupBrowserProxyImpl);
// Copyright 2016 The Chromium Authors. All rights reserved.
class StartupUrlsPageBrowserProxy {
    loadStartupPages() {}
    useCurrentPages() {}
    validateStartupPage(url) {}
    addStartupPage(url) {}
    editStartupPage(modelIndex, url) {}
    removeStartupPage(index) {}
}
class StartupUrlsPageBrowserProxyImpl {
    loadStartupPages() {
        chrome.send("onStartupPrefsPageLoad")
    }
    useCurrentPages() {
        chrome.send("setStartupPagesToCurrentPages")
    }
    validateStartupPage(url) {
        return sendWithPromise("validateStartupPage", url)
    }
    addStartupPage(url) {
        return sendWithPromise("addStartupPage", url)
    }
    editStartupPage(modelIndex, url) {
        return sendWithPromise("editStartupPage", modelIndex, url)
    }
    removeStartupPage(index) {
        chrome.send("removeStartupPage", [index])
    }
}
addSingletonGetter(StartupUrlsPageBrowserProxyImpl);
// Copyright 2016 The Chromium Authors. All rights reserved.
const EDIT_STARTUP_URL_EVENT = "edit-startup-url";
Polymer({
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="settings-shared" scope="settings-startup-url-entry">.hide-overflow {
  overflow: hidden;
}

</style>
    <div class="list-item" focus-row-container="">
      <site-favicon url="[[model.url]]"></site-favicon>
      <div class="middle hide-overflow">
        <div class="text-elide">[[model.title]]</div>
        <div class="text-elide secondary">[[model.url]]</div>
      </div>
      <template is="dom-if" if="[[editable]]">
        <cr-icon-button class="icon-more-vert" id="dots" on-click="onDotsTap_" title="更多操作" focus-row-control="" focus-type="menu">
        </cr-icon-button>
        <cr-lazy-render id="menu">
          <template>
            <cr-action-menu role-description="菜单">
              <button class="dropdown-item" on-click="onEditTap_">
                编辑
              </button>
              <button class="dropdown-item" id="remove" on-click="onRemoveTap_">
                移除
              </button>
            </cr-action-menu>
          </template>
        </cr-lazy-render>
      </template>
    </div>
<!--_html_template_end_-->`,
    is: "settings-startup-url-entry",
    behaviors: [FocusRowBehavior],
    properties: {
        editable: {
            type: Boolean,
            reflectToAttribute: true
        },
        model: Object
    },
    onRemoveTap_() {
        this.$$("cr-action-menu").close();
        StartupUrlsPageBrowserProxyImpl.getInstance().removeStartupPage(this.model.modelIndex)
    },
    onEditTap_(e) {
        e.preventDefault();
        this.$$("cr-action-menu").close();
        this.fire(EDIT_STARTUP_URL_EVENT, {
            model: this.model,
            anchor: this.$$("#dots")
        })
    },
    onDotsTap_() {
        const actionMenu = this.$$("#menu").get();
        actionMenu.showAt(assert(this.$$("#dots")))
    }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
const SafetyCheckCallbackConstants = {
    PARENT_CHANGED: "safety-check-parent-status-changed",
    UPDATES_CHANGED: "safety-check-updates-status-changed",
    PASSWORDS_CHANGED: "safety-check-passwords-status-changed",
    SAFE_BROWSING_CHANGED: "safety-check-safe-browsing-status-changed",
    EXTENSIONS_CHANGED: "safety-check-extensions-status-changed",
    CHROME_CLEANER_CHANGED: "safety-check-chrome-cleaner-status-changed"
};
const SafetyCheckParentStatus = {
    BEFORE: 0,
    CHECKING: 1,
    AFTER: 2
};
const SafetyCheckUpdatesStatus = {
    CHECKING: 0,
    UPDATED: 1,
    UPDATING: 2,
    RELAUNCH: 3,
    DISABLED_BY_ADMIN: 4,
    FAILED_OFFLINE: 5,
    FAILED: 6,
    UNKNOWN: 7
};
const SafetyCheckPasswordsStatus = {
    CHECKING: 0,
    SAFE: 1,
    COMPROMISED: 2,
    OFFLINE: 3,
    NO_PASSWORDS: 4,
    SIGNED_OUT: 5,
    QUOTA_LIMIT: 6,
    ERROR: 7,
    FEATURE_UNAVAILABLE: 8,
    WEAK_PASSWORDS_EXIST: 9
};
const SafetyCheckSafeBrowsingStatus = {
    CHECKING: 0,
    ENABLED: 1,
    DISABLED: 2,
    DISABLED_BY_ADMIN: 3,
    DISABLED_BY_EXTENSION: 4,
    ENABLED_STANDARD: 5,
    ENABLED_ENHANCED: 6,
    ENABLED_STANDARD_AVAILABLE_ENHANCED: 7
};
const SafetyCheckExtensionsStatus = {
    CHECKING: 0,
    ERROR: 1,
    NO_BLOCKLISTED_EXTENSIONS: 2,
    BLOCKLISTED_ALL_DISABLED: 3,
    BLOCKLISTED_REENABLED_ALL_BY_USER: 4,
    BLOCKLISTED_REENABLED_SOME_BY_USER: 5,
    BLOCKLISTED_REENABLED_ALL_BY_ADMIN: 6
};
const SafetyCheckChromeCleanerStatus = {
    HIDDEN: 0,
    CHECKING: 1,
    INFECTED: 2,
    REBOOT_REQUIRED: 3,
    SCANNING_FOR_UWS: 4,
    REMOVING_UWS: 5,
    DISABLED_BY_ADMIN: 6,
    ERROR: 7,
    NO_UWS_FOUND_WITH_TIMESTAMP: 8,
    NO_UWS_FOUND_WITHOUT_TIMESTAMP: 9
};
class SafetyCheckBrowserProxy {
    runSafetyCheck() {}
    getParentRanDisplayString() {}
}
class SafetyCheckBrowserProxyImpl {
    runSafetyCheck() {
        chrome.send("performSafetyCheck")
    }
    getParentRanDisplayString() {
        return sendWithPromise("getSafetyCheckRanDisplayString")
    }
}
addSingletonGetter(SafetyCheckBrowserProxyImpl);
// Copyright 2020 The Chromium Authors. All rights reserved.
const SafetyCheckIconStatus = {
    RUNNING: 0,
    SAFE: 1,
    INFO: 2,
    WARNING: 3
};
Polymer({
    is: "settings-safety-check-child",
    _template: html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex" scope="settings-safety-check-child">:host([row-clickable]) .cr-row {
  cursor: pointer;
}

:host([row-clickable]) #managedIcon {
  padding-inline-end: 0;
}

iron-icon {
  display: flex;
    flex-shrink: 0;
    padding-inline-end: var(--cr-icon-button-margin-start);
    width: var(--cr-link-row-icon-width, var(--cr-icon-size));
}

.icon-blue {
  fill: var(--google-blue-600);
}

.icon-red {
  fill: var(--google-red-600);
}

@media (prefers-color-scheme: dark) {
.icon-blue {
  fill: var(--google-blue-refresh-300);
}

.icon-red {
  fill: var(--google-red-refresh-300);
}

}

</style>
<div class="cr-row">
  <iron-icon id="statusIcon" icon="[[getStatusIcon_(iconStatus)]]" src="[[getStatusIconSrc_(iconStatus)]]" class$="[[getStatusIconClass_(iconStatus)]]" role="img" aria-label="[[getStatusIconAriaLabel_(iconStatus)]]">
  </iron-icon>
  <div class="flex cr-padded-text">
    <div id="label">[[label]]</div>
    <div id="subLabel" class="secondary" no-search="" inner-h-t-m-l="[[subLabel]]">
    </div>
  </div>
  <template is="dom-if" if="[[showButton_(buttonLabel)]]" restamp="">
    <cr-button id="button" class$="[[buttonClass]]" on-click="onButtonClick_" aria-label="[[buttonAriaLabel]]" no-search="">
      [[buttonLabel]]
    </cr-button>
  </template>
  <template is="dom-if" if="[[showManagedIcon_(managedIcon)]]">
    <iron-icon id="managedIcon" icon="[[managedIcon]]" aria-hidden="true">
    </iron-icon>
  </template>
  <template is="dom-if" if="[[rowClickable]]">
    <cr-icon-button id="rowClickableIndicator" iron-icon="[[rowClickableIcon_]]" aria-describedby="subLabel" aria-labelledby="label" aria-roledescription$="[[getRoleDescription_(rowClickableIcon_)]]">
    </cr-icon-button>
  </template>
</div>
<!--_html_template_end_-->`,
    behaviors: [I18nBehavior],
    properties: {
        iconStatus: {
            type: Number,
            value: SafetyCheckIconStatus.RUNNING
        },
        label: String,
        subLabel: String,
        buttonLabel: String,
        buttonAriaLabel: String,
        buttonClass: String,
        rowClickable: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        external: {
            type: Boolean,
            value: false
        },
        rowClickableIcon_: {
            type: String,
            computed: "computeRowClickableIcon_(external)"
        },
        managedIcon: String
    },
    getStatusIcon_: function() {
        switch (this.iconStatus) {
        case SafetyCheckIconStatus.RUNNING:
            return null;
        case SafetyCheckIconStatus.SAFE:
            return "cr:check";
        case SafetyCheckIconStatus.INFO:
            return "cr:info";
        case SafetyCheckIconStatus.WARNING:
            return "cr:warning";
        default:
            assertNotReached()
        }
    },
    getStatusIconSrc_: function() {
        if (this.iconStatus === SafetyCheckIconStatus.RUNNING) {
            return "chrome://resources/images/throbber_small.svg"
        }
        return null
    },
    getStatusIconClass_: function() {
        switch (this.iconStatus) {
        case SafetyCheckIconStatus.RUNNING:
        case SafetyCheckIconStatus.SAFE:
            return "icon-blue";
        case SafetyCheckIconStatus.WARNING:
            return "icon-red";
        default:
            return ""
        }
    },
    getStatusIconAriaLabel_: function() {
        switch (this.iconStatus) {
        case SafetyCheckIconStatus.RUNNING:
            return this.i18n("safetyCheckIconRunningAriaLabel");
        case SafetyCheckIconStatus.SAFE:
            return this.i18n("safetyCheckIconSafeAriaLabel");
        case SafetyCheckIconStatus.INFO:
            return this.i18n("safetyCheckIconInfoAriaLabel");
        case SafetyCheckIconStatus.WARNING:
            return this.i18n("safetyCheckIconWarningAriaLabel");
        default:
            assertNotReached()
        }
    },
    showButton_: function() {
        return !!this.buttonLabel
    },
    onButtonClick_: function() {
        this.fire("button-click")
    },
    showManagedIcon_: function() {
        return !!this.managedIcon
    },
    computeRowClickableIcon_() {
        return this.external ? "cr:open-in-new" : "cr:arrow-right"
    },
    getRoleDescription_() {
        return this.rowClickableIcon_ === "cr:arrow-right" ? this.i18n("subpageArrowRoleDescription") : ""
    }
});
// Copyright 2018 The Chromium Authors. All rights reserved.
const WRAPPER_CSS_CLASS = "search-highlight-wrapper";
const ORIGINAL_CONTENT_CSS_CLASS = "search-highlight-original-content";
const HIT_CSS_CLASS = "search-highlight-hit";
const SEARCH_BUBBLE_CSS_CLASS = "search-bubble";
function removeHighlights(wrappers) {
    for (const wrapper of wrappers) {
        if (!wrapper.parentElement) {
            continue
        }
        const textNode = wrapper.querySelector(`.${ORIGINAL_CONTENT_CSS_CLASS}`).firstChild;
        wrapper.parentElement.replaceChild(textNode, wrapper)
    }
}
function findAndRemoveHighlights(node) {
    const wrappers = Array.from(node.querySelectorAll(`.${WRAPPER_CSS_CLASS}`));
    assert(wrappers.length === 1);
    removeHighlights(wrappers)
}
function highlight(node, ranges) {
    assert(ranges.length > 0);
    const wrapper = document.createElement("span");
    wrapper.classList.add(WRAPPER_CSS_CLASS);
    node.parentNode.replaceChild(wrapper, node);
    const span = document.createElement("span");
    span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);
    span.style.display = "none";
    span.appendChild(node);
    wrapper.appendChild(span);
    const text = node.textContent;
    const tokens = [];
    for (let i = 0; i < ranges.length; ++i) {
        const range = ranges[i];
        const prev = ranges[i - 1] || {
            start: 0,
            length: 0
        };
        const start = prev.start + prev.length;
        const length = range.start - start;
        tokens.push(text.substr(start, length));
        tokens.push(text.substr(range.start, range.length))
    }
    const last = ranges.slice(-1)[0];
    tokens.push(text.substr(last.start + last.length));
    for (let i = 0; i < tokens.length; ++i) {
        if (i % 2 === 0) {
            wrapper.appendChild(document.createTextNode(tokens[i]))
        } else {
            const hitSpan = document.createElement("span");
            hitSpan.classList.add(HIT_CSS_CLASS);
            hitSpan.style.backgroundColor = "#ffeb3b";
            hitSpan.style.color = "#202124";
            hitSpan.textContent = tokens[i];
            wrapper.appendChild(hitSpan)
        }
    }
    return wrapper
}
function createEmptySearchBubble(node, horizontallyCenter) {
    let anchor = node;
    if (node.nodeName === "SELECT") {
        anchor = node.parentNode
    }
    if (anchor instanceof ShadowRoot) {
        anchor = anchor.host.parentNode
    }
    let searchBubble = anchor.querySelector(`.${SEARCH_BUBBLE_CSS_CLASS}`);
    if (searchBubble) {
        return searchBubble
    }
    searchBubble = document.createElement("div");
    searchBubble.classList.add(SEARCH_BUBBLE_CSS_CLASS);
    const innards = document.createElement("div");
    innards.classList.add("search-bubble-innards");
    innards.textContent = " ";
    searchBubble.appendChild(innards);
    anchor.appendChild(searchBubble);
    const updatePosition = function() {
        assert(typeof node.offsetTop === "number");
        searchBubble.style.top = node.offsetTop + (innards.classList.contains("above") ? -searchBubble.offsetHeight : node.offsetHeight) + "px";
        if (horizontallyCenter) {
            const width = node.offsetWidth - searchBubble.offsetWidth;
            searchBubble.style.left = node.offsetLeft + width / 2 + "px"
        }
    };
    updatePosition();
    searchBubble.addEventListener("mouseover", (function() {
        innards.classList.toggle("above");
        updatePosition()
    }
    ));
    return searchBubble
}
function stripDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
// Copyright 2016 The Chromium Authors. All rights reserved.
const SKIP_SEARCH_CSS_ATTRIBUTE = "no-search";
const IGNORED_ELEMENTS = new Set(["CONTENT", "CR-ACTION-MENU", "CR-DIALOG", "CR-ICON-BUTTON", "CR-SLIDER", "DIALOG", "IMG", "IRON-ICON", "IRON-LIST", "PAPER-RIPPLE", "PAPER-SPINNER-LITE", "SLOT", "STYLE", "TEMPLATE"]);
function findAndHighlightMatches_(request, root) {
    let foundMatches = false;
    const highlights = [];
    function doSearch(node) {
        if (node.nodeName === "DOM-IF" && node.hasAttribute("route-path") && !node.if && !node["noSearch"] && !node.hasAttribute(SKIP_SEARCH_CSS_ATTRIBUTE)) {
            request.queue_.addRenderTask(new RenderTask(request,node));
            return
        }
        if (IGNORED_ELEMENTS.has(node.nodeName)) {
            return
        }
        if (node instanceof HTMLElement) {
            const element = node;
            if (element.hasAttribute(SKIP_SEARCH_CSS_ATTRIBUTE) || element.hasAttribute("hidden") || element.style.display === "none") {
                return
            }
        }
        if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.nodeValue;
            if (textContent.trim().length === 0) {
                return
            }
            const strippedText = stripDiacritics(textContent);
            const ranges = [];
            for (let match; match = request.regExp.exec(strippedText); ) {
                ranges.push({
                    start: match.index,
                    length: match[0].length
                })
            }
            if (ranges.length > 0) {
                foundMatches = true;
                revealParentSection_(node, ranges.length, request.bubbles);
                if (node.parentNode.nodeName === "OPTION") {
                    const select = node.parentNode.parentNode;
                    assert(select.nodeName === "SELECT");
                    const isSubpage = n=>n.nodeName === "SETTINGS-SUBPAGE";
                    if (findAncestor(select, isSubpage, true)) {
                        return
                    }
                    showBubble_(select, ranges.length, request.bubbles, true)
                } else {
                    request.addTextObserver(node);
                    highlights.push(highlight(node, ranges))
                }
            }
            return
        }
        let child = node.firstChild;
        while (child !== null) {
            const nextSibling = child.nextSibling;
            doSearch(child);
            child = nextSibling
        }
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            doSearch(shadowRoot)
        }
    }
    doSearch(root);
    request.addHighlights(highlights);
    return foundMatches
}
function revealParentSection_(node, numResults, bubbles) {
    let associatedControl = null;
    let parent = node;
    while (parent.nodeName !== "SETTINGS-SECTION") {
        parent = parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent.host : parent.parentNode;
        if (!parent) {
            return
        }
        if (parent.nodeName === "SETTINGS-SUBPAGE") {
            associatedControl = assert(parent.associatedControl, "An associated control was expected for SETTINGS-SUBPAGE " + parent.pageTitle + ", but was not found.")
        }
    }
    parent.hiddenBySearch = false;
    if (associatedControl) {
        showBubble_(associatedControl, numResults, bubbles, false)
    }
}
function showBubble_(control, numResults, bubbles, horizontallyCenter) {
    const bubble = createEmptySearchBubble(control, horizontallyCenter);
    const numHits = numResults + (bubbles.get(bubble) || 0);
    bubbles.set(bubble, numHits);
    const msgName = numHits === 1 ? "searchResultBubbleText" : "searchResultsBubbleText";
    bubble.firstChild.textContent = loadTimeData.getStringF(msgName, numHits)
}
class Task {
    constructor(request, node) {
        this.request = request;
        this.node = node
    }
    exec() {}
}
class RenderTask extends Task {
    constructor(request, node) {
        super(request, node)
    }
    exec() {
        const routePath = this.node.getAttribute("route-path");
        const content = DomIf._contentForTemplate(this.node.firstElementChild);
        const subpageTemplate = content.querySelector("settings-subpage");
        subpageTemplate.setAttribute("route-path", routePath);
        assert(!this.node.if);
        this.node.if = true;
        return new Promise(((resolve,reject)=>{
            const parent = this.node.parentNode;
            parent.async((()=>{
                const renderedNode = parent.querySelector('[route-path="' + routePath + '"]');
                this.request.queue_.addSearchAndHighlightTask(new SearchAndHighlightTask(this.request,assert(renderedNode)));
                resolve()
            }
            ))
        }
        ))
    }
}
class SearchAndHighlightTask extends Task {
    constructor(request, node) {
        super(request, node)
    }
    exec() {
        const foundMatches = findAndHighlightMatches_(this.request, this.node);
        this.request.updateMatches(foundMatches);
        return Promise.resolve()
    }
}
class TopLevelSearchTask extends Task {
    constructor(request, page) {
        super(request, page)
    }
    exec() {
        const shouldSearch = this.request.regExp !== null;
        this.setSectionsVisibility_(!shouldSearch);
        if (shouldSearch) {
            const foundMatches = findAndHighlightMatches_(this.request, this.node);
            this.request.updateMatches(foundMatches)
        }
        return Promise.resolve()
    }
    setSectionsVisibility_(visible) {
        const sections = this.node.querySelectorAll("settings-section");
        for (let i = 0; i < sections.length; i++) {
            sections[i].hiddenBySearch = !visible
        }
    }
}
class TaskQueue {
    constructor(request) {
        this.request_ = request;
        this.queues_;
        this.reset();
        this.onEmptyCallback_ = null;
        this.running_ = false
    }
    reset() {
        this.queues_ = {
            high: [],
            middle: [],
            low: []
        }
    }
    addTopLevelSearchTask(task) {
        this.queues_.high.push(task);
        this.consumePending_()
    }
    addSearchAndHighlightTask(task) {
        this.queues_.middle.push(task);
        this.consumePending_()
    }
    addRenderTask(task) {
        this.queues_.low.push(task);
        this.consumePending_()
    }
    onEmpty(onEmptyCallback) {
        this.onEmptyCallback_ = onEmptyCallback
    }
    popNextTask_() {
        return this.queues_.high.shift() || this.queues_.middle.shift() || this.queues_.low.shift()
    }
    consumePending_() {
        if (this.running_) {
            return
        }
        const task = this.popNextTask_();
        if (!task) {
            this.running_ = false;
            if (this.onEmptyCallback_) {
                this.onEmptyCallback_()
            }
            return
        }
        this.running_ = true;
        window.requestIdleCallback((()=>{
            if (!this.request_.canceled) {
                task.exec().then((()=>{
                    this.running_ = false;
                    this.consumePending_()
                }
                ))
            }
        }
        ))
    }
}
class SearchRequest {
    constructor(rawQuery, root) {
        this.rawQuery_ = rawQuery;
        this.root_ = root;
        this.regExp = this.generateRegExp_();
        this.canceled = false;
        this.foundMatches_ = false;
        this.resolver = new PromiseResolver;
        this.queue_ = new TaskQueue(this);
        this.queue_.onEmpty((()=>{
            this.resolver.resolve(this)
        }
        ));
        this.textObservers_ = new Set;
        this.highlights_ = [];
        this.bubbles = new Map
    }
    addHighlights(highlights) {
        this.highlights_.push(...highlights)
    }
    removeAllTextObservers() {
        this.textObservers_.forEach((observer=>{
            observer.disconnect()
        }
        ));
        this.textObservers_.clear()
    }
    removeAllHighlightsAndBubbles() {
        removeHighlights(this.highlights_);
        this.bubbles.forEach(((count,bubble)=>bubble.remove()));
        this.highlights_ = [];
        this.bubbles.clear()
    }
    addTextObserver(textNode) {
        const originalParentNode = textNode.parentNode;
        const observer = new MutationObserver((mutations=>{
            const oldValue = mutations[0].oldValue.trim();
            const newValue = textNode.nodeValue.trim();
            if (oldValue !== newValue) {
                observer.disconnect();
                this.textObservers_.delete(observer);
                findAndRemoveHighlights(originalParentNode)
            }
        }
        ));
        observer.observe(textNode, {
            characterData: true,
            characterDataOldValue: true
        });
        this.textObservers_.add(observer)
    }
    start() {
        this.queue_.addTopLevelSearchTask(new TopLevelSearchTask(this,this.root_))
    }
    generateRegExp_() {
        let regExp = null;
        const strippedQuery = stripDiacritics(this.rawQuery_.trim());
        const sanitizedQuery = strippedQuery.replace(SANITIZE_REGEX, "\\$&");
        if (sanitizedQuery.length > 0) {
            regExp = new RegExp(`(${sanitizedQuery})`,"ig")
        }
        return regExp
    }
    isSame(rawQuery) {
        return this.rawQuery_ === rawQuery
    }
    updateMatches(found) {
        this.foundMatches_ = this.foundMatches_ || found
    }
    didFindMatches() {
        return this.foundMatches_
    }
}
const SANITIZE_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
class SearchManagerImpl {
    constructor() {
        this.activeRequests_ = new Set;
        this.completedRequests_ = new Set;
        this.lastSearchedText_ = null
    }
    search(text, page) {
        if (text !== this.lastSearchedText_) {
            this.activeRequests_.forEach((function(request) {
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles();
                request.canceled = true;
                request.resolver.resolve(request)
            }
            ));
            this.activeRequests_.clear();
            this.completedRequests_.forEach((request=>{
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles()
            }
            ));
            this.completedRequests_.clear()
        }
        this.lastSearchedText_ = text;
        const request = new SearchRequest(text,page);
        this.activeRequests_.add(request);
        request.start();
        return request.resolver.promise.then((()=>{
            this.activeRequests_.delete(request);
            this.completedRequests_.add(request);
            return request
        }
        ))
    }
}
let instance = null;
function getSearchManager() {
    if (instance === null) {
        instance = new SearchManagerImpl
    }
    return instance
}
function setSearchManagerForTesting(searchManager) {
    instance = searchManager
}
export {AboutPageBrowserProxy, AboutPageBrowserProxyImpl, AppearanceBrowserProxy, AppearanceBrowserProxyImpl, DefaultBrowserBrowserProxyImpl, EDIT_STARTUP_URL_EVENT, HatsBrowserProxy, HatsBrowserProxyImpl, OnStartupBrowserProxy, OnStartupBrowserProxyImpl, PromoteUpdaterStatus, SafetyCheckBrowserProxy, SafetyCheckBrowserProxyImpl, SafetyCheckCallbackConstants, SafetyCheckChromeCleanerStatus, SafetyCheckExtensionsStatus, SafetyCheckIconStatus, SafetyCheckParentStatus, SafetyCheckPasswordsStatus, SafetyCheckSafeBrowsingStatus, SafetyCheckUpdatesStatus, SearchRequest, StartupUrlsPageBrowserProxy, StartupUrlsPageBrowserProxyImpl, UpdateStatus, getSearchManager, setSearchManagerForTesting};
