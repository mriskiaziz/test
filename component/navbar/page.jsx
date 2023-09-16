import React from "react";
import Image from "next/image";
import mypic from "../../public/logo-perusahaan.png";

function NavbarComponen({ pathname = "/" }) {
  const link = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Tentang Kami",
      link: "/tentang-kami",
    },
    {
      name: "Program",
      link: "/program",
    },
    {
      name: "Artikel",
      link: "/artikel",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];

  return (
    <div>
      <nav
        style={{ backgroundColor: "#304093" }}
        className="navbar navbar-expand-lg navbar-dark px-0 px-3-md px-lg-5 "
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fs-6 fw-bold d-flex align-items-center"
            href="#"
            style={{
              letterSpacing: "1px",
              lineHeight: "21px",
              textTransform: "uppercase",
            }}
          >
            <Image src={mypic} width={60} className="me-2" alt="logo" />
            <span>
              Ada <br />
              Tour And Travel
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-6 me-3">
              {link.map((e) => {
                return (
                  <li className="nav-item ms-auto">
                    <a
                      className={`nav-link ${
                        pathname === e.link ? "active" : ""
                      }`}
                      aria-current="page"
                      href={e.link}
                    >
                      {e.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponen;
