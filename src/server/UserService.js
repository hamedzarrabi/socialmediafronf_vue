import axios from 'axios';
export class UserService {
    static serverURL = `http://localhost:8080`;

    static login(user) {
        let dataURL = `${this.serverURL}/user/login`;
        return axios.post(dataURL, user , { withCredentials: true });
    }

    static getAllUsers() {
        let dataURL = `${this.serverURL}/user/findAll`;
        console.log(dataURL);
        return axios.get(dataURL);
    }
    static getUser(username) {
        let dataURL = `${this.serverURL}/user/${username}`;
        return axios.get(dataURL);
    }
    static findUsername(username) {
        let dataURL = `${this.serverURL}/user/findByUsername/${username}`;
        return axios.get(dataURL);
    }
    static register(user) {
        let dataURL = `${this.serverURL}/user/register`;
        return axios.post(dataURL, user)

    }
    static update(user, userId) {
        let dataURL = `${this.serverURL}/user/update/${userId}`;
        return axios.put(dataURL, user);
    }
    static uploadPhoto(photo) {
        let dataURL = `${this.serverURL}/user/photo/upload`;
        return axios.post(dataURL, photo);
    }
    static delete(userId) {
        let dataURL = `${this.serverURL}/user/update/${userId}`;
        return axios.delete(dataURL);
    }
    static changePassword(username) {
        let dataURL = `${this.serverURL}/user/changePassword`;
        return axios.post(dataURL, username);
    }
        static resetPassword(email) {
        let dataURL = `${this.serverURL}/user/resetPassword/${email}`;
        return axios.post(dataURL);
    }

    static logout() {
         localStorage.removeItem("accessToken");
    }


}