import { Link } from "react-router-dom";
import AboutApp from "./Modal/AboutApp";
import PrivacyPolicy from "./Modal/PrivacyPolicy";

export default function HomeTopBar() {
  return (
    <>
      <AboutApp />
      <PrivacyPolicy />
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to={"/"}>
            <i className="bi bi-chat-quote fs-4"></i> <span className="my-auto">WSChat</span>{" "}
          </Link>
          <div className="dropdown position-relative">
            <button className="btn btn-transparent" type="button" title="Enable Notification">
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-transparent" type="button" title="Dark Mode">
              <i className="bi bi-moon"></i>
            </button>
            <button className="btn btn-transparent" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul className="dropdown-menu" style={{ left: "-70px", top: "46px" }}>
              <li>
                <a className="dropdown-item d-block" style={{ minWidth: "200px" }} href="#">
                  <i className="bi bi-person"></i> Change Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item d-block" style={{ minWidth: "200px" }} href="#">
                  <i className="bi bi-arrow-clockwise"></i> Reset &amp; Renew ChatID
                </a>
              </li>
              <li>
                <button type="button" className="dropdown-item d-block" style={{ minWidth: "200px" }} data-bs-toggle="modal" data-bs-target="#PrivacyPolicy">
                  <i className="bi bi-shield-lock"></i> Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#AboutAppModal">
                  <i className="bi bi-bookmark"></i> About App
                </button>
              </li>
              <li className="d-flex border-top mt-1 pt-1">
                <small className="mx-auto">Chat ID: 8998923489</small>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
