import axios from "axios";
import qs from "qs";

//查询所有说说
export async function getSaySay() {
    let saysay;
    await axios.get('http://localhost:80/api/saysay/findAll')
        .then( (response) => {
            saysay = response.data
        });
    return saysay
}

//快捷评论
export async function postQuickSaySay(username, email, message) {
    let result;
    await axios.post('http://localhost:80/api/comment/quickAdd', qs.stringify({
        username: username,
        email: email,
        message: message
    }))
        .then((response) => {
            console.log(response);
            result = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    return result;
}

//查询所有评论
export async function getComment() {
    let comments;
    await axios.get('http://localhost:80/api/comment/findAll')
        .then( (response) => {
            comments = response.data
            console.log(comments)
        });
    return comments
}
