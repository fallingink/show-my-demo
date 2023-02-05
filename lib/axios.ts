import axios from "axios";

const axiosGet = (url:string)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export {
    axiosGet,
}