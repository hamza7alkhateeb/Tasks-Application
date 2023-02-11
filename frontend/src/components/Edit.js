
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetch } from "./Fetch";
function Edit(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [completed, setCompleted] = useState(props.task.completed);
  
  const handleClose = () => {
      setTitle(props.task.title);
      setDescription(props.task.description);
      setCompleted(props.task.completed);
      setShow(false);
  };
    const handleShow = () => setShow(true);

    // const handleDelete = () => {
    //   axios
    //     .delete(`http://localhost:8000/api/tasks/${item.id}/`)
    //     .then((res) => this.refreshList());
    // };
    const handlerSubmit = () => {
        const id=props.task.id
        console.log("now", title, description, completed);
    const body = { title, description, completed };
        
      try {
        axios
          .put(`http://127.0.0.1:8000/api/task/${id}/`, body)
            .then((res) =>dispatch(fetch()));
      } catch (err) {
        console.log("error");
      }
      
      setShow(false);
     };
  return (
    <>
      <Button  variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
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
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
    </>
  );
}


export default Edit
