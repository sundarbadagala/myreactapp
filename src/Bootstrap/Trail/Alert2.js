import React, {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'


function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <div>
        <Alert show={show} variant="danger">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-primary">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
    );
  }
  
  export default AlertDismissible