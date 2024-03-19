# guide

## 介绍
web guide,网页指引、提示。页面无滚动条时使用最佳。

## 效果图
![image](https://github.com/wdhcgp/guide-canvas/blob/main/demo/demo.gif)

## Vue中使用
1 下载依赖：
```bash
npm i guide-canvas -S
```
2 在vue文件中使用
```javascript
  import guideCanvas from "guide-canvas";
  mounted() {
    let cc= document.getElementById('cc');
    let stepArr=[
      {
        el: cc,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容aaaaaaaaaa",
          position: [400, 699],
          maxWidth: 200,
        },
        button: {
          message: "下一步",
        },
      },
      {
        el: cc,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容aaaaaaaaaa",
          position: [400, 599],
          maxWidth: 200,
        },
        button: {
          message: "下一步",
        },
      },
      {
        el: cc,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容aaaaaaaaaa",
          position: [400, 499],
          maxWidth: 200,
        },
        button: {
          message: "下一步",
        },
      },
      {
        el: cc,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容aaaaaaaaaa",
          position: [400, 399],
          maxWidth: 200,
        },
        button: {
          message: "完成",
        },
      }
    ]
    guideCanvas(stepArr);
  }
```
## html中使用

```html
<script src="https://github.com/wdhcgp/guide-canvas/blob/main/dist/guideCanvas.min.js"></script>
<script>
    window.onload=()=>{
        let round1=document.getElementsByClassName('round1')[0]
        let rect=document.getElementsByClassName('rect')[0]
        let rect2=document.getElementsByClassName('rect2')[0]
        let stepsArr=[
      {
        el: round1,
        shape:'round',
        text: {
          fontSize: 16,
          message: "内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,",
          position: [810, 200],
          maxWidth: 200,
        }
      },
      {
        el: round1,
        text: {
          fontSize:25,
          lineHeight:30,
          color:'#fff',
          message: "内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,",
          position: [810, 200],
          maxWidth: 200,
        },
        button: {
          fontSize: 26,
          color:'black',
          message: "第一步",
          width: 200,
          height: 70,
        },
      },
      {
        el: rect,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容提示",
          position: [1000, 799],
          maxWidth: 200,
        },
        button: {
          message: "完成",
          position:[1000, 900]
        },
      },
      {
        el: rect2,
        shape:'round',
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,",
          position: [810, 200],
          maxWidth: 200,
        },
        button: {
          fontSize: 16,
          color:'red',
          message: "下一步",
          width: 100,
          height: 70,
        },
      },
      {
        el: rect2,
        text: {
          fontSize: 16,
          color:'red',
          message: "内容内容提示提示提示提示提示提示提示,内容内容提示提示提示提示提示提示提示,",
          position: [810, 200],
          maxWidth: 200,
        },
        button: {
          fontSize: 16,
          color:'red',
          message: "下一步",
          width: 100,
          height: 70,
        },
      },
    ]
    guideCanvas(stepsArr)
    }
</script>
```
## API 说明

| 参数               |        类型         | 默认值              | 是否必填   | 说明                                                |
| ----------------   | :----------------:  | ------------------  | --------   | --------------------------------------------------- |
| el                 |                     |                     | true       | 节点的 DOM 对象                                     |
| shape              |   'rect'||'round'   |     'rect'          | false      |  以透明矩形或者圆形展示DOM 对象                   |
| text.message       |      String         |                     | true       | 节点的 DOM 对象指引的文本                          |
| text.position      |      Arrary         |                     | true       | 文本展示的位置[x,y],以canvas画布坐标系为参考        |
| text.fontSize      |      Number         |    20               | false      | 文本字体大小                                        |
| text.color         |      String         |   'white'           | false      | 文本字体的颜色                                      |
| text.lineHeight    |      Number         |     20              | false      | 文本文字的行高                                     |
| text.maxWidth      |      Number         |     200             | false      | 文本排列的最大宽度，超出宽度会换行                  |
| button.message     |      String         |     '下一步'        | false      | 按钮文字                                             |
| button.fontSize    |      Number         |     15              | false      | 按钮文字大小                                         |
| button.color       |      String         |     'black'         | false      | 按钮文字颜色                                         |
| button.position    |       Arrary        | 文本正下方          | false      | 按钮位置[x,y],以canvas画布坐标系为参考               |
| button.width       |      Number         |     80              | false      | 按钮宽度                                             |
| button.height      |      Number         |     40              | false      | 按钮高度                                              |
  
  

