export default function Partner() {
  return (
    <div className="modal fade" id="SelectPartner" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header p-3 border-0">
            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
              Select Partner
            </h1> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <ul className="modal-body py-0" style={{ listStyle: "none" }}>
            <li>
              <a href="" className="text-decoration-none d-block d-flex align-items-center text-white">
                <span style={{ fontSize: "2.3rem" }} className="bi bi-person-circle text-success me-3 position-relative"></span>
                <div>
                  <span className="fs-5">Dian 1</span> <br />
                  <small>Last Online: 20.10</small>
                </div>
              </a>
            </li>
            <li className="d-flex justify-content-between">
              <a href="" className="text-decoration-none d-block d-flex align-items-center text-white">
                <span style={{ fontSize: "2.3rem" }} className="bi bi-person-circle text-info me-3 position-relative"></span>
                <div className="d-flex justify-content-between">
                  <div className="me-5">
                    <span className="fs-5">Dian 2</span> <br />
                  </div>
                </div>
              </a>
              <span className="bi bi-dot fs-1 align-self-center text-danger text-end"></span>
            </li>
            <li className="d-flex justify-content-between">
              <a href="" className="text-decoration-none d-block d-flex align-items-center text-white">
                <span style={{ fontSize: "2.3rem" }} className="bi bi-person-circle text-primary me-3 position-relative"></span>
                <div className="d-flex justify-content-between">
                  <div className="me-5">
                    <span className="fs-5">Dian 3</span> <br />
                  </div>
                </div>
              </a>
              <span className="bi bi-dot fs-1 align-self-center text-danger text-end"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
