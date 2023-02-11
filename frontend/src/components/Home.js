import React, {  useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { fetch } from "./Fetch";
import Com from "./Com";
import InCom from "./InCom";





    
function Home() {
 
  const dispatch = useDispatch();
    dispatch(fetch());
     const [stateCompleted, setStateCompleted] = useState(true);

  return (
    <>
      
      <ButtonGroup className="m-1">
        <ToggleButton
          className=""
          type="checkbox"
          variant="outline-primary"
          checked={stateCompleted}
          onClick={(e) =>
            setStateCompleted(true)
          }
        >
          Completed
        </ToggleButton>
        <br />
        <ToggleButton
          className=""
          type="checkbox"
          variant="outline-primary"
          checked={!stateCompleted}
          onClick={(e) =>
            setStateCompleted(false)
          }
        >
          Incompleted
        </ToggleButton>
      </ButtonGroup>
      <br />
          <div >
               {stateCompleted ? <Com /> : <InCom />}
      </div>
    </>
  );
}
export default Home;
