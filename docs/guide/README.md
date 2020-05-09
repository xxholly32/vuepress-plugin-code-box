# 介绍

## 背景

vuepress 很多代码展示需要做一个显示和代码分层，在一些 ui component 项目中药显示 api 特别用的到，比如 [ant-design](https://ant.design/index-cn) [element-ui](https://element.eleme.cn/#/) 等

![](https://dss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin_zoom/120.jpg)

## 安装

```js
yarn add vuepress-plugin-code-box
```

:::warning
现在暂时无法和 @vuepress/plugin-medium-zoom 共同使用
:::

## 示例

`config.js` 中配置

```js
module.exports = {
  plugins: ["vuepress-plugin-code-box"]
};
```

## 使用

### 配合 vue component 使用

<code-box title="标题" description="这是一个按钮的`说明`">
  <button v-on:click="count++">You clicked me {{ count }} times.</button>

</code-box>

```vue
<button v-on:click="count++">You clicked me {{ count }} times.</button>
```

具体代码:

````html
<code-box title="标题" description="这是一个按钮的`说明`">
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</code-box>

```vue
<button v-on:click="count++">You clicked me {{ count }} times.</button>
```
````

:::tip
这里会默认隐藏第一个代码演示的```内容
:::

### 纯代码展示

<code-box>
  <p>这里如果只放描述性的代码也可以</p>
  <p>但只能用纯粹的html</p>
</code-box>

```html
<code-box>
  <p>这里如果只放描述性的代码也可以</p>
  <p>但只能用纯粹的html</p>
</code-box>
```

具体代码:

````html
<code-box>
  <p>这里如果只放描述性的代码也可以</p>
  <p>但只能用纯粹的html</p>
</code-box>

```html
<code-box>
  <p>这里如果只放描述性的代码也可以</p>
  <p>但只能用纯粹的html</p>
</code-box>
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
