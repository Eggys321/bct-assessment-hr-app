import { Button } from "react-bootstrap";

export default function MyButton({text,variant,...props}) {
  return (
    // <div className="d-flex flex-column-reverse flex-md-row gap-1 w-100">
    //   <Button variant="outline-danger" className="cancel-btn mb-3">Cancel</Button>
    // </div>
      <Button variant={variant}   {...props}>
      {text}
      </Button>
  );
}
