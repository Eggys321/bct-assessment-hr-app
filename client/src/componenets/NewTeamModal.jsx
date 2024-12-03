import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../styles/NewTeamModal.css";

const NewTeamModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="new-team-wrapper"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span> Create New Department</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Department Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" autoFocus />
            </Form.Group>
            {/* assign persons */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Dept Manager</Form.Label>
              <Form.Select id="" className="new-team-wrapper-select">
                <option disabled selected>
                  Select
                </option>
                <option>Product</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Dept Members</Form.Label>
              <Form.Select id="" className="new-team-wrapper-select">
                <option disabled selected>
                  Select
                </option>
                <option>Product</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex flex-column-reverse flex-md-row gap-3 w-100">
              <Button variant="outline-danger" className="cancel-btn mb-2">
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="save-and-continue-btn"
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewTeamModal;
