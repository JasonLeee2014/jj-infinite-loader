//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'jj-infinite-loader',
  props: {
    busy:Boolean,
    height:{
      type:String,
      default:'50px',
    },
    color:{
      type:String,
      default:'black',
    },
  },
  data: function data() {
    return {
      io:'',
    }
  },
  mounted: function mounted(){
      var this$1 = this;

      //setting
      this.$refs.infiniteloader.style.height = this.height;
      this.$refs.loadericon.style.fill = this.color;

      this.io = new IntersectionObserver(function (items){
          var loader = items[0];
          if (loader.intersectionRatio > 0) {
              this$1.io.unobserve(this$1.$refs.infiniteloader);
              this$1.$emit('load');
          }
      });

      this.io.observe(this.$refs.infiniteloader);
  },
  watch: {
      busy: function busy(val){
          if(!val){
              this.io.observe(this.$refs.infiniteloader);
          } 
      }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { ref: "infiniteloader", staticClass: "jj-infinite-loader" },
    [
      _c(
        "svg",
        {
          ref: "loadericon",
          staticStyle: { "enable-background": "new 0 0 516.727 516.727" },
          attrs: {
            version: "1.1",
            id: "Capa_1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            width: "516.727px",
            height: "516.727px",
            viewBox: "0 0 516.727 516.727",
            "xml:space": "preserve"
          }
        },
        [
          _c("g", [
            _c("path", {
              attrs: {
                d:
                  "M516.727,266.696c-0.665-34.825-8.221-69.54-22.175-101.283c-13.908-31.771-34.094-60.551-58.876-84.333\n      c-24.767-23.8-54.139-42.615-85.929-55.027c-31.773-12.46-65.937-18.412-99.687-17.69c-33.755,0.668-67.36,8.007-98.091,21.539\n      c-30.754,13.488-58.615,33.058-81.632,57.071c-23.033,24.001-41.229,52.452-53.222,83.229C5.077,200.962-0.66,234.013,0.06,266.696\n      c0.67,32.688,7.793,65.182,20.903,94.899c13.067,29.738,32.019,56.681,55.266,78.931c23.234,22.268,50.766,39.846,80.528,51.417\n      c29.749,11.616,61.69,17.136,93.303,16.419c31.62-0.671,63.001-7.58,91.707-20.268c28.724-12.646,54.747-30.979,76.231-53.461\n      c21.503-22.469,38.461-49.08,49.611-77.827c6.79-17.427,11.396-35.624,13.824-54.062c0.649,0.037,1.302,0.063,1.96,0.063\n      c18.409,0,33.333-14.923,33.333-33.333c0-0.936-0.049-1.861-0.124-2.777L516.727,266.696L516.727,266.696z M463.762,355.21\n      c-12.226,27.71-29.94,52.812-51.655,73.532c-21.703,20.732-47.396,37.076-75.127,47.807c-27.724,10.77-57.443,15.859-86.919,15.146\n      c-29.481-0.677-58.644-7.154-85.323-18.997c-26.692-11.806-50.877-28.901-70.83-49.849c-19.968-20.938-35.691-45.711-46.001-72.427\n      c-10.349-26.712-15.223-55.321-14.512-83.728c0.678-28.413,6.941-56.465,18.361-82.131c11.384-25.677,27.863-48.943,48.045-68.13\n      c20.172-19.202,44.026-34.307,69.726-44.195c25.697-9.928,53.195-14.587,80.534-13.877c27.343,0.68,54.286,6.728,78.939,17.726\n      c24.662,10.963,47.008,26.824,65.429,46.241c18.436,19.405,32.922,42.341,42.391,67.025c9.504,24.684,13.948,51.072,13.241,77.342\n      h0.125c-0.076,0.916-0.125,1.841-0.125,2.777c0,17.193,13.018,31.34,29.732,33.137C476.551,320.747,471.184,338.453,463.762,355.21\n      z"
              }
            })
          ])
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-7c3b9b65_0", { source: "\n.jj-infinite-loader[data-v-7c3b9b65] {\n  display: flex;\n  justify-content: center;\n  background-color: transparent;\n}\n.jj-infinite-loader > svg[data-v-7c3b9b65] {\n  align-self: stretch;\n  max-width: 100%;\n  max-height: 100%;\n  animation: spin-data-v-7c3b9b65 1s linear infinite;\n  background-color: transparent;\n}\n@keyframes spin-data-v-7c3b9b65 \n{\n0% {transform: rotate(0deg);\n}\n100% {transform: rotate(360deg);\n}\n}\n", map: {"version":3,"sources":["/Users/zaka/Desktop/vue/jj-infinite-loader/src/jj-infinite-loader.vue"],"names":[],"mappings":";AAsEA;EACA,cAAA;EACA,wBAAA;EACA,8BAAA;CACA;AAEA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mDAAA;EACA,8BAAA;CAEA;AAEA;;AAEA,IAAA,wBAAA;CAAA;AACA,MAAA,0BAAA;CAAA;CACA","file":"jj-infinite-loader.vue","sourcesContent":["<template>\n  <div ref=\"infiniteloader\" class=\"jj-infinite-loader\">\n    <svg ref=\"loadericon\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      width=\"516.727px\" height=\"516.727px\" viewBox=\"0 0 516.727 516.727\" style=\"enable-background:new 0 0 516.727 516.727;\"\n      xml:space=\"preserve\">\n    <g>\n      <path d=\"M516.727,266.696c-0.665-34.825-8.221-69.54-22.175-101.283c-13.908-31.771-34.094-60.551-58.876-84.333\n        c-24.767-23.8-54.139-42.615-85.929-55.027c-31.773-12.46-65.937-18.412-99.687-17.69c-33.755,0.668-67.36,8.007-98.091,21.539\n        c-30.754,13.488-58.615,33.058-81.632,57.071c-23.033,24.001-41.229,52.452-53.222,83.229C5.077,200.962-0.66,234.013,0.06,266.696\n        c0.67,32.688,7.793,65.182,20.903,94.899c13.067,29.738,32.019,56.681,55.266,78.931c23.234,22.268,50.766,39.846,80.528,51.417\n        c29.749,11.616,61.69,17.136,93.303,16.419c31.62-0.671,63.001-7.58,91.707-20.268c28.724-12.646,54.747-30.979,76.231-53.461\n        c21.503-22.469,38.461-49.08,49.611-77.827c6.79-17.427,11.396-35.624,13.824-54.062c0.649,0.037,1.302,0.063,1.96,0.063\n        c18.409,0,33.333-14.923,33.333-33.333c0-0.936-0.049-1.861-0.124-2.777L516.727,266.696L516.727,266.696z M463.762,355.21\n        c-12.226,27.71-29.94,52.812-51.655,73.532c-21.703,20.732-47.396,37.076-75.127,47.807c-27.724,10.77-57.443,15.859-86.919,15.146\n        c-29.481-0.677-58.644-7.154-85.323-18.997c-26.692-11.806-50.877-28.901-70.83-49.849c-19.968-20.938-35.691-45.711-46.001-72.427\n        c-10.349-26.712-15.223-55.321-14.512-83.728c0.678-28.413,6.941-56.465,18.361-82.131c11.384-25.677,27.863-48.943,48.045-68.13\n        c20.172-19.202,44.026-34.307,69.726-44.195c25.697-9.928,53.195-14.587,80.534-13.877c27.343,0.68,54.286,6.728,78.939,17.726\n        c24.662,10.963,47.008,26.824,65.429,46.241c18.436,19.405,32.922,42.341,42.391,67.025c9.504,24.684,13.948,51.072,13.241,77.342\n        h0.125c-0.076,0.916-0.125,1.841-0.125,2.777c0,17.193,13.018,31.34,29.732,33.137C476.551,320.747,471.184,338.453,463.762,355.21\n        z\"/>\n    </g>\n    </svg>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'jj-infinite-loader',\n  props: {\n    busy:Boolean,\n    height:{\n      type:String,\n      default:'50px',\n    },\n    color:{\n      type:String,\n      default:'black',\n    },\n  },\n  data() {\n    return {\n      io:'',\n    }\n  },\n  mounted(){\n      //setting\n      this.$refs.infiniteloader.style.height = this.height\n      this.$refs.loadericon.style.fill = this.color\n\n      this.io = new IntersectionObserver((items)=>{\n          let loader = items[0]\n          if (loader.intersectionRatio > 0) {\n              this.io.unobserve(this.$refs.infiniteloader)\n              this.$emit('load')\n          }\n      },)\n\n      this.io.observe(this.$refs.infiniteloader)\n  },\n  watch: {\n      busy(val){\n          if(!val){\n              this.io.observe(this.$refs.infiniteloader)\n          } \n      }\n  }\n}\n</script>\n\n<style scoped>\n.jj-infinite-loader {\n  display: flex;\n  justify-content: center;\n  background-color: transparent;\n}\n\n.jj-infinite-loader > svg {\n  align-self: stretch;\n  max-width: 100%;\n  max-height: 100%;\n  animation: spin 1s linear  infinite;\n  background-color: transparent;\n  \n}\n\n@keyframes spin \n{\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-7c3b9b65";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zaka/Desktop/vue/jj-infinite-loader/src/jj-infinite-loader.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('JjInfiniteLoader', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
