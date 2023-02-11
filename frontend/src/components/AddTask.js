
import axios from "axios";
import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetch } from "./Fetch";
function AddTask() {

    const dispatch = useDispatch();
    dispatch(fetch());
    const [show, setShow] = useState(false);
    const [title,setTitle]=useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false);
    
    const handleClose = () => {
        setShow(false);
        setTitle('');
        setDescription("");
        setCompleted(false);
    };
    const handleShow = () => setShow(true);
    const handlerSubmit = () => {
        const body = { title, description, completed };
        try {
            axios
              .post("http://127.0.0.1:8000/api/task/", body)
              .then((res) => console.log(res.data));
        } catch (err) {
            console.log('error');
        }
        
        setTitle("");
        setDescription("");
        setCompleted(false);
        setShow(false);
        dispatch(fetch());
    };
    return (
      <div className=" mt-3 mb-1">
        <Button className="" variant="warning" onClick={handleShow}>
          Add New Task
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AddTask</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="write title ..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Completed</Form.Label>
                <Form.Check
                  checked={completed}
                  value={completed}
                  onChange={(e) => setCompleted(!completed)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlerSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
export default AddTask;
