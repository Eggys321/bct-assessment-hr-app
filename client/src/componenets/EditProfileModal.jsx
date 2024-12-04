import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import toast from 'react-hot-toast';

const EditProfileModal = (props) => {
    const [firstName,setFirstName] = useState(props.selectedEmployee?.firstName);
    const [lastName, setLastName] = useState(props.selectedEmployee?.lastName);
    const [maritalStatus,setMaritalStatus] = useState(props.selectedEmployee?.maritalStatus);
    const token = localStorage.getItem("hr-token");
    const updateProfile = async(e,employeeId)=>{
        e.preventDefault()
        try {
            const req = await axios.patch(`https://bct-assessment-hr-app.onrender.com/api/employee/${employeeId}`,{
                firstName,
                lastName,maritalStatus
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(req.data.success){
                toast.success(req.data.message)
            }
            console.log(req.data.message);
            
        } catch (error) {
            
        }
    }
  return (
    <>
     <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        className="new-team-wrapper"  
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span> Edit Profile</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => updateProfile(e, props.selectedEmployee._id)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" autoFocus value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" autoFocus value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Gender</Form.Label>
              <Form.Select id="" className="new-team-wrapper-select" value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}>
                <option disabled selected>
                  Select
                </option>
                <option value="single">single</option>
                <option value="married">married</option>
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
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EditProfileModal