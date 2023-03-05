import stringWidth from "string-width";

import slugify from "slugify";
import axios from "axios";


import { getUsers}  from "./app.js";

try {
    getUsers(8)
    
} catch (e) {
    console.log(e)
}