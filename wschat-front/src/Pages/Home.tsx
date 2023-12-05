import { Helmet } from "react-helmet";
import HomeTopBar from "../Components/HomeTopBar";
import Partner from "../Components/Modal/Partner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>WSChat | Anonymous Realtime Chatting</title>
      </Helmet>
      <HomeTopBar />
      <Partner />
      <div className="container-fluid vh-100 vw-100 d-flex">
        <div className="m-auto text-center rounded-circle p-5" style={{ maxWidth: "400px", minHeight: "100px" }}>
          <h1 className="fs-1 text-primary">Nothing</h1>
          <p>Try to start new Chat</p>
        </div>
        <div className="position-relative">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#SelectPartner"
            className="btn bg-primary position-absolute rounded-circle text-white fs-1 bi bi-chat"
            style={{ bottom: "20px", right: "10px" }}
          ></button>
        </div>
      </div>
    </>
  );
}
