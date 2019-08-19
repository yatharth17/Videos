import axios from 'axios'
const KEY="AIzaSyD_HTEoNSZtZnPPXhi3N0am1zg3AXuoP3g"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/search",
    params :{
        part:'snippet',
        maxResults:5,
        key:KEY
    }


})