(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "html, body, div, span, applet, object, button, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\n/* make sure to set some focus styles for accessibility */\n\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\n/* a:focus {\n    outline: thin dotted;\n} */\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"wedding-dance\";\n  src: url('wedding-dance.eot');\n  src: url('wedding-dance.eot') format(\"opentype\"), url('wedding-dance.woff2') format(\"woff2\"), url('wedding-dance.woff') format(\"woff\"), url('wedding-dance.ttf') format(\"truetype\"), url('wedding-dance.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n.icon {\n  display: inline-block;\n  font: normal normal normal 1em/1 \"wedding-dance\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: inherit;\n}\n\n.icon-photos::before {\n  content: \"\\ea02\";\n}\n\n.icon-form::before {\n  content: \"\\ea03\";\n}\n\n.icon-coffee::before {\n  content: \"\\ea04\";\n}\n\n.icon-door::before {\n  content: \"\\ea05\";\n}\n\n.icon-coaches::before {\n  content: \"\\ea06\";\n}\n\n.icon-star::before {\n  content: \"\\ea07\";\n}\n\n.icon-fun::before {\n  content: \"\\ea08\";\n}\n\n.icon-happy::before {\n  content: \"\\ea09\";\n}\n\n.icon-back {\n  transform: scaleX(-1);\n}\n\n.icon-back::before {\n  content: \"\\ea0c\";\n}\n\n.icon-forward::before {\n  content: \"\\ea0c\";\n}\n\n.icon-arrow::before {\n  content: \"\\ea0d\";\n}\n\n/*============ COMMON ============*/\n\nhtml {\n  scroll-behavior: smooth;\n  scroll-padding-top: 12vh;\n}\n\n@media only screen and (max-width: 1120px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  html {\n    font-size: 13px;\n  }\n}\n\nbody {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n}\n\n@media only screen and (max-width: 760px) {\n  body.fixed {\n    overflow: hidden;\n  }\n}\n\nsection {\n  margin-bottom: 10vh;\n}\n\n.base-section {\n  padding: 0 calc(50% - 648px);\n}\n\n@media only screen and (max-width: 1400px) {\n  .base-section {\n    padding: 0 calc(50% - 540px);\n  }\n}\n\n@media only screen and (max-width: 1120px) {\n  .base-section {\n    padding: 0 calc(50% - 482px);\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .base-section {\n    padding: 0 calc(50% - 369px);\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .base-section {\n    padding: 0 15px;\n  }\n}\n\n.base-btn, .btn-accent, .btn-main {\n  background-color: transparent;\n  padding: 0.5rem 3rem;\n  border-radius: 3px;\n  transition: all 0.3s linear;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.base-heading-xl {\n  font-size: 4.5rem;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 960px) {\n  .base-heading-xl {\n    font-size: 48px;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .base-heading-xl {\n    font-size: 36px;\n  }\n}\n\n.base-heading, .section-heading {\n  font-size: 2.25rem;\n  font-weight: bold;\n}\n\n.base-heading-sm {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 1080px) {\n  .base-heading-sm {\n    font-size: 18px;\n  }\n}\n\n.base-text, .section-description {\n  line-height: 1.5rem;\n}\n\n.base-card {\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0px 4px 30px rgba(207, 207, 207, 0.25);\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.btn-main {\n  border: 2px solid #000000;\n  color: #000000;\n}\n\n.btn-main:hover {\n  color: white;\n  background-color: #000000;\n}\n\n.btn-accent {\n  border: 2px solid #FF699F;\n  color: #FF699F;\n}\n\n.btn-accent:hover {\n  color: white;\n  background-color: #FF699F;\n}\n\n.section-heading {\n  margin-bottom: 2%;\n}\n\n@media only screen and (max-width: 760px) {\n  .section-heading {\n    margin-bottom: 4%;\n  }\n}\n\n.section-description {\n  max-width: 670px;\n  margin-bottom: 4%;\n}\n\n@media only screen and (max-width: 760px) {\n  .section-description {\n    margin-bottom: 7%;\n  }\n}\n\n.blurred {\n  opacity: 0.5;\n}\n\n/*============ FLEX GRID ============*/\n\n.d-flex {\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-around {\n  justify-content: space-around;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.align-start {\n  align-items: flex-start;\n}\n\n.align-end {\n  align-items: flex-end;\n}\n\n/*============ SLICK ============*/\n\n.slick-track {\n  display: flex;\n}\n\n.slick-slide {\n  height: auto;\n}\n\n.slick-dots {\n  display: flex;\n  justify-content: center;\n}\n\n.slick-dots li {\n  margin-right: 4px;\n}\n\n.slick-dots button {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  color: transparent;\n  width: 6px;\n  height: 6px;\n}\n\n.slick-dots .slick-active button {\n  background-color: #FF699F;\n}", "",{"version":3,"sources":["C:\\git\\wedding-angular/src\\scss\\_reset.scss","styles.scss","C:\\git\\wedding-angular/src\\scss\\_icons.scss","C:\\git\\wedding-angular/src\\styles.scss","C:\\git\\wedding-angular/src\\scss\\_vars.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["html, body, div, span, applet, object, button, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n    vertical-align: baseline;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\n/* a:focus {\r\n    outline: thin dotted;\r\n} */\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    outline: none;\r\n  }","html, body, div, span, applet, object, button, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n/* a:focus {\n    outline: thin dotted;\n} */\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"wedding-dance\";\n  src: url(\"assets/fonts/wedding-dance.eot\");\n  src: url(\"assets/fonts/wedding-dance.eot\") format(\"opentype\"), url(\"assets/fonts/wedding-dance.woff2\") format(\"woff2\"), url(\"assets/fonts/wedding-dance.woff\") format(\"woff\"), url(\"assets/fonts/wedding-dance.ttf\") format(\"truetype\"), url(\"assets/fonts/wedding-dance.svg\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.icon {\n  display: inline-block;\n  font: normal normal normal 1em/1 \"wedding-dance\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: inherit;\n}\n\n.icon-photos::before {\n  content: \"\\ea02\";\n}\n\n.icon-form::before {\n  content: \"\\ea03\";\n}\n\n.icon-coffee::before {\n  content: \"\\ea04\";\n}\n\n.icon-door::before {\n  content: \"\\ea05\";\n}\n\n.icon-coaches::before {\n  content: \"\\ea06\";\n}\n\n.icon-star::before {\n  content: \"\\ea07\";\n}\n\n.icon-fun::before {\n  content: \"\\ea08\";\n}\n\n.icon-happy::before {\n  content: \"\\ea09\";\n}\n\n.icon-back {\n  transform: scaleX(-1);\n}\n.icon-back::before {\n  content: \"\\ea0c\";\n}\n\n.icon-forward::before {\n  content: \"\\ea0c\";\n}\n\n.icon-arrow::before {\n  content: \"\\ea0d\";\n}\n\n/*============ COMMON ============*/\nhtml {\n  scroll-behavior: smooth;\n  scroll-padding-top: 12vh;\n}\n@media only screen and (max-width: 1120px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 400px) {\n  html {\n    font-size: 13px;\n  }\n}\n\nbody {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n}\n@media only screen and (max-width: 760px) {\n  body.fixed {\n    overflow: hidden;\n  }\n}\n\nsection {\n  margin-bottom: 10vh;\n}\n\n.base-section {\n  padding: 0 calc(50% - 648px);\n}\n@media only screen and (max-width: 1400px) {\n  .base-section {\n    padding: 0 calc(50% - 540px);\n  }\n}\n@media only screen and (max-width: 1120px) {\n  .base-section {\n    padding: 0 calc(50% - 482px);\n  }\n}\n@media only screen and (max-width: 960px) {\n  .base-section {\n    padding: 0 calc(50% - 369px);\n  }\n}\n@media only screen and (max-width: 760px) {\n  .base-section {\n    padding: 0 15px;\n  }\n}\n\n.base-btn, .btn-accent, .btn-main {\n  background-color: transparent;\n  padding: 0.5rem 3rem;\n  border-radius: 3px;\n  transition: all 0.3s linear;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.base-heading-xl {\n  font-size: 4.5rem;\n  font-weight: bold;\n}\n@media only screen and (max-width: 960px) {\n  .base-heading-xl {\n    font-size: 48px;\n  }\n}\n@media only screen and (max-width: 760px) {\n  .base-heading-xl {\n    font-size: 36px;\n  }\n}\n\n.base-heading, .section-heading {\n  font-size: 2.25rem;\n  font-weight: bold;\n}\n\n.base-heading-sm {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n@media only screen and (max-width: 1080px) {\n  .base-heading-sm {\n    font-size: 18px;\n  }\n}\n\n.base-text, .section-description {\n  line-height: 1.5rem;\n}\n\n.base-card {\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0px 4px 30px rgba(207, 207, 207, 0.25);\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.btn-main {\n  border: 2px solid #000000;\n  color: #000000;\n}\n.btn-main:hover {\n  color: white;\n  background-color: #000000;\n}\n\n.btn-accent {\n  border: 2px solid #FF699F;\n  color: #FF699F;\n}\n.btn-accent:hover {\n  color: white;\n  background-color: #FF699F;\n}\n\n.section-heading {\n  margin-bottom: 2%;\n}\n@media only screen and (max-width: 760px) {\n  .section-heading {\n    margin-bottom: 4%;\n  }\n}\n\n.section-description {\n  max-width: 670px;\n  margin-bottom: 4%;\n}\n@media only screen and (max-width: 760px) {\n  .section-description {\n    margin-bottom: 7%;\n  }\n}\n\n.blurred {\n  opacity: 0.5;\n}\n\n/*============ FLEX GRID ============*/\n.d-flex {\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-around {\n  justify-content: space-around;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.align-start {\n  align-items: flex-start;\n}\n\n.align-end {\n  align-items: flex-end;\n}\n\n/*============ SLICK ============*/\n.slick-track {\n  display: flex;\n}\n\n.slick-slide {\n  height: auto;\n}\n\n.slick-dots {\n  display: flex;\n  justify-content: center;\n}\n.slick-dots li {\n  margin-right: 4px;\n}\n.slick-dots button {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  color: transparent;\n  width: 6px;\n  height: 6px;\n}\n.slick-dots .slick-active button {\n  background-color: #FF699F;\n}","@font-face {\n  font-family: \"wedding-dance\";\n  src: url(\"assets/fonts/wedding-dance.eot\");\n  src: url(\"assets/fonts/wedding-dance.eot\") format(\"opentype\"),\n    url(\"assets/fonts/wedding-dance.woff2\") format(\"woff2\"),\n    url(\"assets/fonts/wedding-dance.woff\") format(\"woff\"),\n    url(\"assets/fonts/wedding-dance.ttf\") format(\"truetype\"),\n    url(\"assets/fonts/wedding-dance.svg\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n.icon {\n  display: inline-block;\n  font: normal normal normal 1em/1 \"wedding-dance\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: inherit;\n}\n\n@function unicode($str) {\n  @return unquote('\"\\\\#{$str}\"');\n}\n\n$icon-photos: unicode(ea02);\n$icon-form: unicode(ea03);\n$icon-coffee: unicode(ea04);\n$icon-door: unicode(ea05);\n$icon-coaches: unicode(ea06);\n$icon-star: unicode(ea07);\n$icon-fun: unicode(ea08);\n$icon-happy: unicode(ea09);\n$icon-back: unicode(ea0b);\n$icon-forward: unicode(ea0c);\n$icon-arrow: unicode(ea0d);\n\n.icon-photos::before {\n  content: $icon-photos;\n}\n\n.icon-form::before {\n  content: $icon-form;\n}\n\n.icon-coffee::before {\n  content: $icon-coffee;\n}\n\n.icon-door::before {\n  content: $icon-door;\n}\n\n.icon-coaches::before {\n  content: $icon-coaches;\n}\n\n.icon-star::before {\n  content: $icon-star;\n}\n\n.icon-fun::before {\n  content: $icon-fun;\n}\n\n.icon-happy::before {\n  content: $icon-happy;\n}\n\n.icon-back {\n  transform: scaleX(-1);\n  &::before {\n    content: $icon-forward;\n  }\n}\n\n.icon-forward::before {\n  content: $icon-forward;\n}\n\n.icon-arrow::before {\n  content: $icon-arrow;\n}\n","@import 'reset';\n@import 'vars';\n@import 'icons';\n\n\n/*============ COMMON ============*/\nhtml {\n  scroll-behavior: smooth;\n  scroll-padding-top: 12vh;\n  @media only screen and (max-width: 1120px) {\n    font-size: 14px;\n  }\n  @media only screen and (max-width: 400px) {\n    font-size: 13px;\n  }\n}\n\nbody {\n  font-family: $font-family-main;\n  @media only screen and (max-width: $media-mob) {\n    &.fixed {\n      overflow: hidden;\n    }\n  }\n}\n\nsection {\n  margin-bottom: 10vh;\n}\n\n.base-section {\n  padding: 0 calc(50% - 648px);\n  @media only screen and (max-width: 1400px) {\n    padding: 0 calc(50% - 540px);\n  }\n  @media only screen and (max-width: 1120px) {\n    padding: 0 calc(50% - 482px);\n  }\n  @media only screen and (max-width: 960px) {\n    padding: 0 calc(50% - 369px);\n  }\n  @media only screen and (max-width: $media-mob) {\n    padding: 0 15px;\n  }\n}\n\n.base-btn {\n  background-color: transparent;\n  padding: 0.5rem 3rem;\n  border-radius: 3px;\n  transition: all 0.3s linear;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.base-heading-xl {\n  font-size: 4.5rem;\n  font-weight: bold;\n  @media only screen and (max-width: 960px) {\n    font-size: 48px;\n  }\n  @media only screen and (max-width: $media-mob) {\n    font-size: 36px;\n  }\n}\n\n.base-heading {\n  font-size: 2.25rem;\n  font-weight: bold;\n}\n\n.base-heading-sm {\n  font-size: 1.5rem;\n  font-weight: bold;\n  @media only screen and (max-width: 1080px) {\n    font-size: 18px;\n  }\n}\n\n.base-text {\n  line-height: 1.5rem;\n}\n\n.base-card {\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0px 4px 30px rgba(207, 207, 207, 0.25);\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.btn-main {\n  @extend .base-btn;\n  border: 2px solid $color-main;\n  color: $color-main;\n  &:hover {\n    color: white;\n    background-color: $color-main;\n  }\n}\n\n.btn-accent {\n  @extend .base-btn;\n  border: 2px solid $color-accent;\n  color: $color-accent;\n  &:hover {\n    color: white;\n    background-color: $color-accent;\n  }\n}\n\n.section-heading {\n  @extend .base-heading;\n  margin-bottom: 2%;\n  @media only screen and (max-width: $media-mob) {\n    margin-bottom: 4%;\n  }\n}\n\n.section-description {\n  @extend .base-text;\n  max-width: 670px;\n  margin-bottom: 4%;\n  @media only screen and (max-width: $media-mob) {\n    margin-bottom: 7%;\n  }\n}\n\n.blurred {\n  opacity: 0.5;\n}\n\n/*============ FLEX GRID ============*/\n\n.d-flex {\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-around {\n  justify-content: space-around;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.align-start {\n  align-items: flex-start;\n}\n\n.align-end {\n  align-items: flex-end;\n}\n\n/*============ SLICK ============*/\n\n.slick-track {\n  display: flex;\n}\n\n.slick-slide {\n  height: auto;\n}\n\n.slick-dots {\n  display: flex;\n  justify-content: center;\n  & li {\n    margin-right: 4px;\n  }\n  & button {\n    background-color: transparent;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 50%;\n    color: transparent;\n    width: 6px;\n    height: 6px;\n  }\n  & .slick-active {\n    & button {\n      background-color: $color-accent;\n    }\n  }\n}\n","$color-main: #000000;\n$color-accent: #FF699F;\n\n$font-family-main: \"Montserrat\", Arial, Helvetica, sans-serif;\n$font-family-alt: \"Roboto\", Arial, Helvetica, sans-serif;\n\n$media-mob: 760px;\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\wedding-angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map