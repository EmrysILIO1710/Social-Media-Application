import React from "react";
import "./Settings.css";
import { Button } from "bootstrap";

const Settings = () => {
  return (
    <div className="setting-box">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "30%", height: "100%" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4">Settings & privacy</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Dark Mode
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              Settings & privacy
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="setting-box2">
      <h3 style={{color: "black", fontFamily:"opensans-bold", marginTop:"20%",}}> Switch To Dark Mode </h3>
        <label class="switch">
            <span class="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
