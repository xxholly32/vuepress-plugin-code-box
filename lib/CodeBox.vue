<template>
  <section class="code-box">
    <section class="code-box-demo">
      <slot></slot>
    </section>
    <section class="code-box-meta">
      <div class="code-box-title">{{title}}</div>
      <div class="code-box-desc" v-html="desc"></div>
      <div class="code-box-action">
        <span class="code-box-expand">
          <img
            src="./image/code-not-open.svg"
            v-show="!showCode"
            @click="changeCode"
            alt="expand code"
          />
          <img
            src="./image/code-open.svg"
            v-show="showCode"
            @click="changeCode"
            title="收起代码"
            alt="collpse code"
          />
        </span>
      </div>
    </section>

    <transition name="slide-fade">
      <section class="code-box-highlight" v-show="showCode" ref="highlight">
        <div class="code-box-actions"></div>
      </section>
    </transition>
  </section>
</template>

<script>
import MarkdownIt from "markdown-it";
import hljs from "highlightjs";

import "highlightjs/styles/monokai-sublime.css";

const md = new MarkdownIt({
  html: true,
  typegrapher: true,
  highlight: function(str) {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code>${
        hljs.highlight(lang, str, true).value
      }</code></pre>`;
    }
    return "";
  }
});

export default {
  name: "CodeBox",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      desc: "",
      showCode: false
    };
  },
  methods: {
    changeCode() {
      this.showCode = !this.showCode;
    }
  },
  mounted() {
    this.desc = md.render(this.description);
    let $code = this.$el.nextSibling;
    $code = $code.innerHTML ? $code : $code.nextSibling;
    this.$refs.highlight.appendChild($code);
  }
};
</script>


<style lang='stylus'>
.slide-fade-enter-active {
  translateY: 10px;
  transform: translateY(0px);
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.code-box {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 16px 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-image: initial;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease 0s;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .code-box-demo {
    padding: 24px 24px 40px;
    border-bottom: 1px solid rgb(235, 237, 240);
    color: reba(0, 0, 0, 0.65);
  }

  .code-box-meta {
    position: relative;
    padding: 18px 32px 10px 32px;
    border-radius: 0 0 4px 4px;
    font-size: 14px;
    transition: background-color 0.4s ease 0s;

    .code-box-title {
      position: absolute;
      top: -12px;
      font-weight: bold;
      padding: 1px 8px;
      margin-left: -8px;
      background: rgb(255, 255, 255);
      border-radius: 2px 2px 0 0;
      color: rgb(119, 119, 119);
      transition: background-color 0.4s ease 0s;
    }

    .code-box-desc {
      width: 94%;
      min-height: 24px;
      margin: 0;

      p {
        margin: 0;
        line-height: 2;
      }

      code {
        padding: 0.2rem 0.4rem;
        background-color: #fbe5e1;
        border: radius 4px;
        color: #c0341d;
      }
    }

    .code-box-action {
      width: 100%;
      text-align: center;

      img {
        cursor: pointer;
        width: 16px;
        height: 16px;
      }
    }
  }

  pre {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
}
</style>
