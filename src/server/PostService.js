import axios from 'axios';
import {da} from "vuetify/locale";
export class PostService {
    
    static serverURL = `http://localhost:8080`;
    
    static createPost (post, userId) {
        let dataURL = `${this.serverURL}/post/createPost/${userId}`;
        return axios.post(dataURL, post);
    }

    static getAllPost() {
        let dataURL = `${this.serverURL}/post/findAll`;
        // console.log(dataURL);
        return axios.get(dataURL);
    }

    static countPosts(userId) {
        let dataURL = `${this.serverURL}/post/count/${userId}`
        console.log(dataURL);
        return axios.get(dataURL);
    }

}