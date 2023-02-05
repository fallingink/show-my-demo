// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, content) => {
    try {
        const heroObj = {
            title:"demo效果展示",
            valArr: ["集中记录所学各种demo效果", "目前已有两种效果", "1.时钟", "2.小车沿路线走"],
            nextTip:"下滑查看"
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ data: heroObj }),
            // // more keys you can return:
            // headers: { Access-Control-Allow-Origin: "https://showmydemo.org/" },
            "Access-Control-Allow-Origin":"https://showmydemo.org/"
            // isBase64Encoded: true,
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = {
    handler
}
