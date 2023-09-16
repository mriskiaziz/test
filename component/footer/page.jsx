import React from "react";

function FooterComponent() {
  return (
    <div>
      <footer className="text-white text-center text-lg-start bg-dark mt-5">
        <div className="container p-4">
          <div className="row mt-4 justify-content-evenly">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="mb-4">Tentang Kami</h5>
              <hr />
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="mb-4 pb-1">Informasi</h5>
              <hr />
              <p>
                <a href="#!" className="text-light text-decoration-none">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-light text-decoration-none">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" className="text-light text-decoration-none">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" className="text-light text-decoration-none">
                  Bootstrap Angular
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: ADA Tour And Travel
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
