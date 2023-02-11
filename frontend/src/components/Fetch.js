import axios from "axios";

import { setTasks } from "../rtk/slices/task-slice";

export const fetch = () =>dispatch=> {
    axios.get("http://127.0.0.1:8000/api/task/").then((res) => dispatch(setTasks(res.data)));
}