import axios from "axios";

export function getUser() {
    let result = 1;
    axios.get('http://localhost:8081/user/findAll')
        .then(function (response) {
            result = response.data;
            //数据
            console.log(result)
            return response.data
        });
    //1
    console.log(result)
}

function addUser(username, password, useremail) {
    axios.post('http://localhost:8081/user/add', {
        username: username,
        password: password,
        useremail: useremail
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getComment() {
    axios.get('http://localhost:8081/comment/findAll')
        .then(function (response) {
            console.log(response.data[0]);
        });
}
function getSaySay() {
    axios.get('http://localhost:8081/saysay/findAll')
        .then(function (response) {
            console.log(response.data[0]);
        });
}
