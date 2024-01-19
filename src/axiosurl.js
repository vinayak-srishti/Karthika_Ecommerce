import axios from "axios"

const axiosinstance = axios.create({
    baseurl:"http://localhost:4000", headers:{"Content-Type":"application/json"}

})

export default axiosinstance