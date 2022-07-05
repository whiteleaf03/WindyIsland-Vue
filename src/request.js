import axios from "axios";
import qs from "qs";

//查询所有说说
export async function getSaysay() {
    let saysay;
    await axios.get('/api/saysay/findAll')
        .then( (response) => {
            saysay = response.data
        });
    return saysay
}

//快捷评论
export async function postQuickSaySay(username, email, message) {
    let result;
    await axios.post('/api/comment/quickAdd', qs.stringify({
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
    await axios.get('/api/comment/findAll')
        .then( (response) => {
            comments = response.data
            console.log(comments)
        });
    return comments
}

//登录
export async function adminLogin(username, password) {
    let result;
    await axios.post('/api/user/login', qs.stringify({
        username: username,
        password: password
    }))
        .then((response) => {
            result = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    return result;
}
