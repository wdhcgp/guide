import {guide} from './guide.js'
function createCanvas(obj,canvasId){
    let cs=document.createElement('canvas')
    //set fullScreen
    cs.width=window.innerWidth
    cs.height=window.innerHeight
    cs.id=canvasId
    cs.style='position:fixed;top:0;left:0;z-indx:9999'
    if (cs.getContext) {
        let ctx = cs.getContext("2d")
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0,0,cs.width,cs.height);
        guide(obj,ctx)
      } else {
        console.warn('当前浏览器版本不支持canvas绘画')
      }
    //保持canvasId元素唯一
    if(document.getElementById(canvasId)){
      document.getElementById(canvasId).remove()
    }
    document.body.appendChild(cs)
}
export default createCanvas