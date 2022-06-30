import axios from "axios";

export async function getSaySay() {
    let saysay;
    await axios.get('http://localhost:8081/saysay/findAll')
        .then( (response) => {
            saysay = response.data
        });
    return saysay
}

export async function postQuickSaySay(username, useremail, message) {
    axios.post('http://localhost:8081/comment/quickAdd', {
        username: username,
        useremail: useremail,
        message: message
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
