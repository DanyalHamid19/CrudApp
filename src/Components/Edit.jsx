// Edit.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Edit = ({
  show,
  handleClose,
  handleSave,
  editingEmployee,
  setEditingEmployee,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={editingEmployee ? editingEmployee.name : ""}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter age"
              value={editingEmployee ? editingEmployee.age : ""}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  age: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            handleSave({
              name: editingEmployee.name,
              age: editingEmployee.age,
            })
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Edit;
