(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{196:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"s3fs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s3fs","aria-hidden":"true"}},[s._v("#")]),s._v(" S3FS")]),s._v(" "),e("p",[s._v("安装s3fs")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# yum install epel-release\n# yum install s3fs-fuse\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("生成key")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# chmod -v 600 ~/.passwd-s3fs\n# echo AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY > ~/.passwd-s3fs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("挂载")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# mkdir /aaa\n# s3fs tbucket /aaa -o passwd_file=${HOME}/.passwd-s3fs   -o url=http://s3.caiwu.corp/ -o use_path_request_style \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);