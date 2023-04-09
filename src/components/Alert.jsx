import React from "react";
import { Image } from "react-bootstrap";


const alert = () => {
  return (
    <>
      <div className="imgThumb-container">
        <div className="row">
          <div className="d-flex justify-content-center mb-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/9055/9055398.png"
              width={100}
              height={100}
            />
          </div>
          <div className="d-flex justify-content-center mb-4">
            <h3 className="text-white">Profile User</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default alert;