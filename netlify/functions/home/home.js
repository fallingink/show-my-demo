// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, content) => {
    try {
        const homeObj = {
            clock: {
                imgalt: "clock",
                title: "时钟效果展示",
                valArr: ["采用css结合js实现", "时钟的指针采用css动画实现"],
                nextTip: "下滑继续",
                demoType: "clock"
            },
            car: {
                imgalt: "car",
                title: "小车沿路线走效果展示",
                valArr: ["采用svg技术与css3", "小车的移动采用css动画实现"],
                nextTip: "结束",
                demoType: "car"
            }
        }
        const res = {
            statusCode: 200,
            body: JSON.stringify({ data: homeObj }),
            headers: { "Access-Control-Allow-Origin": "https://showmydemo.org" },
        }
        return res;
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify({ data: homeObj }),
        //     // // more keys you can return:
        //     // headers: { "Access-Control-Allow-Origin": "https://showmydemo.org/" },
        //     // isBase64Encoded: true,
        // }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = {
    handler
}
