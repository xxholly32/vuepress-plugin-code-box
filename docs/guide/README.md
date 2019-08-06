# 介绍

## 背景

vuepress 很多代码展示需要做一个显示和代码分层，在一些 api 中特别用的到，比如 [ant-design](https://ant.design/index-cn) [element-ui](https://element.eleme.cn/#/) 等

## 安装

```js
yarn add vuepress-plugin-code-box
```

:::warning
现在暂时无法和 @vuepress/plugin-medium-zoom 共同使用
:::

## 使用

`config.js` 中配置

```js
module.exports = {
  plugins: ["vuepress-plugin-code-box"]
};
```

## 演示

<code-box title="标题" description="这是一个按钮的`说明`">
  <button v-on:click="count++">You clicked me {{ count }} times.</button>

</code-box>

```vue
<button v-on:click="count++">You clicked me {{ count }} times.</button>
```

````html
<code-box title="标题" description="这是`描述`">
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</code-box>

```vue
<button v-on:click="count++">You clicked me {{ count }} times.</button>
```
````

## todo

- 兼容 @vuepress/plugin-medium-zoom
- 动画效果优化
- 测试用例

<script>
export default{
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
