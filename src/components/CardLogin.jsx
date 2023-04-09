import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { apiProfile} from "../api/apiProfile";


const CardComponent = () => {
  const [profileDetail, setProfileDetail] = useState("");

  useEffect(() => {
    apiProfile().then((results) => {
      setProfileDetail(results);
    });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card-container text-center d-flex justify-content-center align-items-center">
          <Row className="gap-5">
            <Col xs={12}>
              <Card.Title>Username</Card.Title>
              <Card.Text className="text-muted">
                {profileDetail.username}
              </Card.Text>
            </Col>
            <Col xs={12}>
              <Card.Title>Account Name</Card.Title>
              <Card.Text className="text-muted">{profileDetail.name}</Card.Text>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CardComponent;