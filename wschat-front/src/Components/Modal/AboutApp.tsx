export default function AboutApp() {
  return (
    <div className="modal fade" id="AboutAppModal" tabIndex={-1} aria-labelledby="aboutAppModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              About App
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <i className="bi bi-chat-quote m-auto d-block text-success" style={{ fontSize: "2.5rem" }}></i>
            </div>
            <h1 className="fs-2 text-center text-success">WSChat</h1>
            <p className="fs-6 text-center">Anonymous Realtime Instant Messaging.</p>
            <div className="px-4 mx-auto">
              <a href="https://github.com/dianudi/wschat" className="text-decoration-none me-2" title="WSChat on Github">
                <i className="bi bi-github fs-1"></i>
              </a>
              <a href="https://" className="text-decoration-none" title="Donate to WSChat Service">
                <i className="bi bi-currency-dollar fs-1"></i>
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <small>Client Version: 1.0.0</small>
              <small>Server Version: 1.0.0</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
