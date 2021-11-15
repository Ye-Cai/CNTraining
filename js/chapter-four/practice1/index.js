import AWS from "./constant"
import getURL from "./utils"

const url = getURL(AWS.ADDRESS, AWS.PORT, AWS.PATH)
const region = AWS.REGION

export default {url, region}