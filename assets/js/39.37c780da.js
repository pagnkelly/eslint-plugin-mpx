(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{606:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-html-comment-content-spacing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-html-comment-content-spacing"}},[t._v("#")]),t._v(" vue/html-comment-content-spacing")]),t._v(" "),s("blockquote",[s("p",[t._v("enforce unified spacing in HTML comments")])]),t._v(" "),s("ul",[s("li",[t._v("🔧 The "),s("code",[t._v("--fix")]),t._v(" option on the "),s("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),s("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),s("p",[t._v("This rule will enforce consistency of spacing after the "),s("code",[t._v("\x3c!--")]),t._v(" and before the "),s("code",[t._v("--\x3e")]),t._v(" of comment. It also provides several exceptions for various documentation styles.")]),t._v(" "),s("p",[t._v("Whitespace after the "),s("code",[t._v("\x3c!--")]),t._v(" and before the "),s("code",[t._v("--\x3e")]),t._v(" makes it easier to read text in comments.")]),t._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-comment-content-spacing":["error"]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- comment --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n    comment\n  --\x3e")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--✗ BAD--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--comment--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue/html-comment-content-spacing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exceptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("The first is a string which be either "),s("code",[t._v('"always"')]),t._v(" or "),s("code",[t._v('"never"')]),t._v(". The default is "),s("code",[t._v('"always"')]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"always"')]),t._v(" (default) ... there must be at least one whitespace at after the "),s("code",[t._v("\x3c!--")]),t._v(" and before the "),s("code",[t._v("--\x3e")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"never"')]),t._v(" ... there should be no whitespace at after the "),s("code",[t._v("\x3c!--")]),t._v(" and before the "),s("code",[t._v("--\x3e")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[t._v("This rule can also take a 2nd option, an object with the following key: "),s("code",[t._v('"exceptions"')]),t._v(".")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("code",[t._v('"exceptions"')]),t._v(" value is an array of string patterns which are considered exceptions to the rule.\nPlease note that exceptions are ignored if the first argument is "),s("code",[t._v('"never"')]),t._v(".")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue/html-comment-content-spacing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exceptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" "),s("code",[t._v('"always"')])]),t._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-comment-content-spacing":["error","always"]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--✗ BAD--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"never"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[t._v("#")]),t._v(" "),s("code",[t._v('"never"')])]),t._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-comment-content-spacing":["error","never"]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--✓ GOOD--\x3e")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✗ BAD --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--       comment      --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"always-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always-exceptions"}},[t._v("#")]),t._v(" "),s("code",[t._v('"always", { "exceptions": ["*"] }')])]),t._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-comment-content-spacing":["error","always",{exceptions:["*"]}]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--*******\n    comment\n    *******--\x3e")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--*******✗ BAD*******--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" 👫 Related Rules")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://eslint.org/docs/rules/spaced-comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("spaced-comment"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/html-comment-content-newline.html"}},[t._v("vue/html-comment-content-newline")])],1)]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-comment-content-spacing.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-comment-content-spacing.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);