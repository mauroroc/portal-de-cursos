import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PortalTitle ({ children, buttonText, buttonLink }) {
  return (
    <div className="mt-4 d-sm-flex align-items-center">
      <h1 className="mb-0">{children}</h1>
      {buttonText && buttonLink && (
        <Button className="ms-sm-3"size="sm" as={Link} to={buttonLink}>{buttonText}</Button>
      )}
      
    </div>    
  )
}