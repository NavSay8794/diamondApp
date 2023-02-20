import React from "react";

// const images = [
//   "../assets/diamondImage1.jpg",
//   "../assets/diamondImage2.jpg",
//   "../assets/diamondImage3.jpg",
//   "../assets/marqdiamond1.jpg",
//   "../assets/marqdiamond2.jpg",
//   "../assets/marqdiamond3.jpg",
// ];

let imgurl =
  "https://th.bing.com/th?id=OIP.gPHDRR1m881ZWHiZG4v0EwHaI_&w=226&h=275&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
const Layout = () => {
  return <>

    <br></br>
    <div className="row justify-content-around" style={{marginLeft: "30px"}}>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row justify-content-around" style={{marginLeft: "30px"}}>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="This is diamond" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
  </>;
};

export default Layout;
