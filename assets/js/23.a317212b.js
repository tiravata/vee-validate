(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{186:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),a("table",[t._m(4),a("tbody",[t._m(5),t._m(6),t._m(7),t._m(8),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dictionary")]),t._m(9),t._m(10),a("td",{staticStyle:{"text-align":"left"}},[t._v("A dictionary to be merged with the internal dictionary. (Check the "),a("router-link",{attrs:{to:"./guide/messages.html"}},[t._v("Error Messages")]),t._v(" and "),a("router-link",{attrs:{to:"./guide/localization.html"}},[t._v("Localization")]),t._v(" sections.)")],1)]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inject")]),t._m(16),t._m(17),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specifies if a validator instance should be injected automatically for all components. (See "),a("router-link",{attrs:{to:"./advanced/#component-injections"}},[t._v("Component Injections")]),t._v(" for more information.)")],1)]),t._m(18),t._m(19),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("validity")]),t._m(20),t._m(21),a("td",{staticStyle:{"text-align":"left"}},[t._v("Set custom validity "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Constraint validation"),a("OutboundLink")],1),t._v(" on native HTML inputs.")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation Config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You may need to configure some options to tweak some of the plugin internals. This is not required, but could cause conflicts. For example, using a property called "),e("code",[this._v("errors")]),this._v(" on your vue instance may cause conflicts. Here is how you would set up the options, along with the default values:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VeeValidate "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  aria"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  classNames"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  classes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  delay"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  errorBagName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'errors'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// change if property conflicts")]),t._v("\n  events"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'input|blur'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fieldsBagName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fields'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  i18n"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// the vue-i18n plugin instance")]),t._v("\n  i18nRootKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'validations'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// the nested key under which the validation messsages will be located")]),t._v("\n  inject"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locale"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'en'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  validity"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Property")]),e("th",{staticStyle:{"text-align":"center"}},[this._v("Type")]),e("th",{staticStyle:{"text-align":"center"}},[this._v("Default")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("aria")]),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("true")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Allows setting "),a("code",[t._v("aria-invalid")]),t._v(" and "),a("code",[t._v("aria-required")]),t._v(" attributes on HTML inputs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("classNames")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("object")])]),e("td",{staticStyle:{"text-align":"center"}}),e("td",{staticStyle:{"text-align":"left"}},[this._v("The classes to be applied depending on the state of the input.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("classes")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Applies automatic classes on HTML inputs being validated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("delay")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("number")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("0")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The default debounce time for all inputs (only affects validations).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("object|null")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("null")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("errorBagName")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'errors'")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The name of the "),e("code",[this._v("ErrorBag")]),this._v(" object that will be injected in each of Vue's instances' data. Used to avoid conflicts with other plugins.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("events")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'input|blur'")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Pipe separated list of the default event names that will be listened to, to trigger validation. If an empty string is provided, it will disable all listeners.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("fieldsBagName")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'fields'")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The name of the Fields (flags) object that will be injected in each of Vue's instances' data.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("i18n")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("VueI18n | null")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("null")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The "),e("code",[this._v("vue-i18n")]),this._v(" instance, if provided will integrate vee-validate with the i18n plugin and will use it to produce the error messages instead of the built in dictionary.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("i18nRootKey")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'validations'")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The key name of the validation messages for each locale.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("locale")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'en'")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("The default language for the validation messages.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("strict")]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])]),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("true")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Validation attempt on non-existant fields will result in an invalid state")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])])}],!1,null,null,null);e.default=s.exports}}]);