import axios from 'axios';

export default axios.create({
     baseURL: "http://ec2-18-220-165-117.us-east-2.compute.amazonaws.com:8081"
});