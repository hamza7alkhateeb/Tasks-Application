import { useSelector } from "react-redux";
import Delete from "./Delete";
import Edit from "./Edit";

function Com() {
    const tasks = useSelector(state => state.tasks)
    const value = tasks.map((task) =>task.completed &&(
          <li
            key={task.id}
            className="mt-1 list-group-item d-flex justify-content-between"
          >
            <span className="text-decoration-line-through"> {task.title}</span>
            <span>
              <Edit task={task} />
              <Delete id={task.id} />
            </span>
          </li>
        ));
    return (<>
        {value}
    </>);
}
export default Com;

