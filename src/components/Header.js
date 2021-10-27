import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Flex>
      <Link to="/" className="nav nav-pills nav-link" aria-current="page">
              Home
            </Link>
      </Flex>
      <header className="bg-light">
        <div className="row d-flex justify-content-center text-center ms-auto">
          <div className=" col-sm-4 col-lg-auto nav-item">
            {" "}
            
          </div>
          <div className="text-nowrap col-sm-4 col-lg-auto nav-item">
            {" "}
            <Link
              to="/about"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              About us
            </Link>
          </div>
          <div className="nav-item dropdown col-sm-4 col-lg-auto">
            <Link
              class="nav-link dropdown-toggle "
              data-bs-toggle="dropdown"
              to="/units"
              role="button"
              aria-expanded="false"
            >
              Units
            </Link>
            <ul class="dropdown-menu text-wrap">
              <li>
                <Link class="dropdown-item" to="/">
                  Daarul Hadeethis Salafiyyah
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Albaniy Science International Academy
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Sheikh Albaniy College of Higher Islamic Studies
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Daaru Ibn Katheer &amp; Orphanage Unit
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  ICT and Capacity Building
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4 col-lg-auto  nav-item">
            {" "}
            <Link
              to="/management"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              Management
            </Link>
          </div>
          <div className=" col-sm-4 col-lg-auto   nav-item">
            {" "}
            <Link
              to="/portal"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              Portal
            </Link>
          </div>
          <div className="text-nowrap col-sm-4  col-lg-auto  nav-item">
            {" "}
            <Link
              to="/e-learning"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              E-learning
            </Link>
          </div>
          <div className=" col-sm-4  col-lg-auto   nav-item">
            {" "}
            <Link to="/" className="nav nav-pills nav-link" aria-current="page">
              Apply
            </Link>
          </div>
          <div className=" col-sm-4  col-lg-auto   nav-item">
            {" "}
            <Link
              to="/fees"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              Fees
            </Link>
          </div>
          <div className=" col-sm-4  col-lg-auto   nav-item">
            {" "}
            <Link
              to="/contact"
              className="nav nav-pills nav-link"
              aria-current="page"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
