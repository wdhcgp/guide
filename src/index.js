import createCanvas from './canvas.js'
import {getButtonL} from './guide.js'
let allCount=null
let canvasId='canvasGuide'
let reversedArray=null
function guideCanvas(arr){
    if(arr.length==0){
        return
    }
    allCount=arr.length
    reversedArray = arr.slice().reverse()
    createCanvas(reversedArray[allCount-1],canvasId)
    document.addEventListener('click',dClick)
}
function dClick(e){
    let {clientX,clientY}=e
    let{ startX,endX,startY,endY} =getButtonL
    if(clientX<=endX && startX<=clientX && startY<=clientY && clientY<=endY){
            allCount--
            if(allCount>0){
                    createCanvas(reversedArray[allCount-1],canvasId)
            }else{
                document.removeEventListener('click',dClick)
                allCount=null
                reversedArray=null
                if(document.getElementById(canvasId)){
                    document.getElementById(canvasId).remove()
                }
            }
    }
}
export default guideCanvas
