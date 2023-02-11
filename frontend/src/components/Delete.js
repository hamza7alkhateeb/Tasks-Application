import axios from "axios";
import { useDispatch } from "react-redux";
import { fetch } from "./Fetch";

function Delete({ id }) {
    const dispatch = useDispatch();

    const handlerDelete = () => {
      try {
        axios
          .delete(`http://127.0.0.1:8000/api/task/${id}/`)
          .then((res) => dispatch(fetch()));
      } catch (err) {
        console.log("error");
      }

      
    };


    return (
      <button className="btn btn-danger m-2" onClick={handlerDelete}>
        Delete
      </button>
    );
}
export default Delete