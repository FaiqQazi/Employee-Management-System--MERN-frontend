import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addreport(props) {
  const [show, setShow] = useState();
  const [title, settitle] = useState(props.title);
  const [description, setdescription] = useState(props.description);
  const [report, setreport] = useState(props.report);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const host='http://localhost:5001'
  const editNote = async (id, title, description, report) => {
    // TODO API KEY
    const response = await fetch(`${host}/api/tasks/updatetask/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem ('token')

        },
        body: JSON.stringify({title, description, report})
    });
    
}
const handleclick = async () => {
  // Call the API to update the task's report
  console.log("add report hears u")
  await editNote(props.id, title, description, report);

  // Update the tasks with the new report
  await props.updatetasks(props.id, title, description, report);

  // Close the modal after the updates are complete
  handleClose();
};

const useEffect=()=>
{

    props.updatetasks(props.id,title,description,report);
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Give Report
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" value={title} onChange={(e)=>
            {
                settitle(e.target.value)
            }} controlId="AddreportForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
               
               
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3"  value={description} onChange={(e)=>
            {
                setdescription(e.target.value)
            }}controlId="AddreportForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
               
               
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"  value={report} onChange={(e)=>
                {
                    setreport(e.target.value)
                }}
              controlId="AddreportForm.ControlTextarea1"
            >
              <Form.Label>Report</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclick}>
            Submit Report
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addreport;