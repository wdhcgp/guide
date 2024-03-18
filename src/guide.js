let getButtonL
let eleRect
let shape
let elRadius
function clearArea(ctx) {
    let space = 3
    if (shape == 'round') {//擦除圆形
        let roundX = eleRect.x + eleRect.width / 2,
            roundY = eleRect.y + eleRect.height / 2,
            roundR;
        if (eleRect.width == eleRect.height && elRadius >= 45) {
            roundR = (eleRect.height / 2) + 2 * space
        } else {
            roundR = Math.sqrt(Math.pow((eleRect.width / 2), 2) + Math.pow((eleRect.height / 2), 2)) + space;
        }
        reactClearRound(roundX, roundY, roundR, ctx)
    } else {//擦除矩形
        ctx.clearRect((eleRect.x - space), (eleRect.y - space), (eleRect.width + 2 * space), (eleRect.height + 2 * space))
    }
}
function reactClearRound(x, y, r, cxt) {
    let step = 1
    clearRound(x, y, r)
    function clearRound(x, y, roundR) {
        let clearWidth = roundR - step,
            clearHeight = Math.sqrt(roundR * roundR - clearWidth * clearWidth),
            rectX = x - clearWidth,
            rectY = y - clearHeight;
        let rectWidth = 2 * clearWidth,
            rectHeight = 2 * clearHeight;
        if (step <= roundR) {
            cxt.clearRect(rectX, rectY, rectWidth, rectHeight)
            step += 1
            clearRound(x, y, roundR)
        }
    }
}


function drawTextAndButton(ctx, text, button) {
    let { fontSize = 20, color = 'white', message, position, maxWidth = 200, lineHeight = 20 } = text,
        { fontSize: butFs = 15, color: butColor = 'black', message: butMsg='下一步', position: butP = [], width = 80, height = 40 } = button;
    let words = message.split(''),
        y = position[1],
        line = '';
    ctx.font = `${fontSize}px Arial`
    ctx.fillStyle = color
    for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + '',
            testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth && i > 0) {
            ctx.fillText(line, position[0], y)
            line = words[i] + ''
            y += lineHeight
        } else {
            line = testLine
        }
    }
    ctx.fillText(line, position[0], y)
    let strokeX = position[0] - 15,
        strokeY = position[1] - fontSize - 15,
        strokeWidth = line == message ? ctx.measureText(line).width + 30 : maxWidth + 30,
        strokeHeight = y - position[1] + fontSize + 35;
    ctx.strokeStyle = '#fff';
    ctx.setLineDash([10, 10]);
    ctx.strokeRect(strokeX, strokeY, strokeWidth, strokeHeight);
    ctx.setLineDash([]);
    // 画按钮
    ctx.fillStyle = '#fff';
    ctx.font = `${butFs}px Arial`
    ctx.textAlign = 'center';
    ctx.textBaseline = "middle";
    if (butP.length == 0) {//没传按钮的位置,按钮设置在虚线矩形正下方
        let bY = strokeY + strokeHeight + 20,
            bX = strokeX + strokeWidth / 2 - width / 2;
        ctx.fillRect(bX, bY, width, height);
        ctx.fillStyle = butColor;
        ctx.fillText(butMsg, bX + width / 2, bY + height / 2);
        // 记录按钮位置
        getButtonL = {
            startX: bX,
            endX: bX + width,
            startY: bY,
            endY: bY + height
        }
    } else {//传入了按钮的位置
        ctx.fillRect(...butP, width, height);
        ctx.fillStyle = butColor;
        ctx.fillText(butMsg, butP[0] + width / 2, butP[1] + height / 2);
        // 记录按钮位置
        getButtonL = {
            startX: butP[0],
            endX: butP[0] + width,
            startY: butP[1],
            endY: butP[1] + height
        }
    }
    let dashedReact = {
        sx: strokeX,
        w: strokeWidth,
        sy: strokeY,
        h: strokeHeight,
    }
    drawDashedLine(ctx, dashedReact)
}
function drawDashedLine(ctx, dashedReact) {
    let fromX = eleRect.x + eleRect.width / 2,
        fromY = eleRect.y + eleRect.height / 2;
    let { sx: strokeX, w: strokeWidth, sy: strokeY, h: strokeHeight } = dashedReact
    let referY = strokeY + strokeHeight / 2,
        referX = strokeX + strokeWidth / 2,
        toX = 0, toY = 0;
    if (fromY > referY) {
        if (fromX > referX) {
            toX = strokeX + strokeWidth
            toY = strokeY + strokeHeight
        } else {
            toX = strokeX
            toY = strokeY + strokeHeight
        }
    } else if (fromY < referY) {
        if (fromX > referX) {
            toX = strokeX + strokeWidth
            toY = strokeY
        } else {
            toX = strokeX
            toY = strokeY
        }
    } else {  //eleRect中心点和‘虚线矩形’中心点在同一水平上
        if (fromX > referX) {
            toX = strokeX + strokeWidth
            toY = strokeY + strokeHeight
        } else {
            toX = strokeX
            toY = strokeY
        }
    }
    ctx.setLineDash([20, 5]); // 设置虚线样式，参数为一个数组，表示实线和空白的长度
    ctx.beginPath();
    ctx.moveTo(fromX, fromY); // 设置起始点
    ctx.lineTo(toX, toY); // 设置终点
    ctx.stroke(); // 绘制虚线
    clearArea(ctx)
}
function guide(obj, ctx) {
    let { el, text, button={} } = obj
    try {
        elRadius = parseInt(getComputedStyle(el).getPropertyValue('border-radius'))
    } finally {
        shape = obj.shape ? obj.shape : 'rect'
        eleRect = el.getBoundingClientRect()
        drawTextAndButton(ctx, text, button)
    }
}
export {
    guide,
    getButtonL
}
