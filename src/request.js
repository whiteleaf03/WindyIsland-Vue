import axios from "axios";
import qs from "qs";

export async function getSaySay() {
    let saysay;
    await axios.get('http://localhost:8081/saysay/findAll')
        .then( (response) => {
            saysay = response.data
        });
    return saysay
}

export async function postQuickSaySay(username, useremail, message) {
    let result;
    await axios.post('http://localhost:8081/comment/quickAdd', qs.stringify({
        username: username,
        useremail: useremail,
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
