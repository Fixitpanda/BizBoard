import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container py-3">
      <div>
        <h2>About us</h2>
        <p className="p-3 col-11 py-5">
          Fringilla urna porttitor rhoncus dolor. Cursus euismod quis viverra
          nibh cras pulvinar. Sit amet dictum sit amet justo donec enim. Egestas
          pretium aenean pharetra magna ac. Eget mauris pharetra et ultrices
          neque ornare aenean. Nibh sed pulvinar proin gravida hendrerit lectus
          a. Praesent semper feugiat nibh sed. Lorem ipsum dolor sit amet.
          Malesuada proin libero nunc consequat interdum varius sit amet mattis.
          Augue eget arcu dictum varius duis at consectetur. Aliquet risus
          feugiat in ante metus dictum at tempor. Odio aenean sed adipiscing
          diam donec adipiscing tristique risus nec. Mauris ultrices eros in
          cursus turpis massa tincidunt dui. Amet aliquam id diam maecenas
          ultricies mi eget mauris. Ante in nibh mauris cursus mattis. Aliquam
          sem fringilla ut morbi. Habitant morbi tristique senectus et netus et
          malesuada fames.
        </p>
        <p className="p-3 col-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At
          imperdiet dui accumsan sit amet nulla. Enim nec dui nunc mattis. Fusce
          ut placerat orci nulla pellentesque dignissim enim sit amet. Egestas
          pretium aenean pharetra magna ac placerat vestibulum. Ultrices
          tincidunt arcu non sodales neque sodales ut. Sollicitudin ac orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Eget sit amet
          tellus cras adipiscing enim eu. Adipiscing diam donec adipiscing
          tristique risus nec. Ut faucibus pulvinar elementum integer enim neque
          volutpat ac tincidunt. Ut tellus elementum sagittis vitae et leo. Id
          volutpat lacus laoreet non curabitur gravida arcu ac tortor. Sed
          vulputate odio ut enim blandit volutpat maecenas. Commodo odio aenean
          sed adipiscing diam donec. Viverra maecenas accumsan lacus vel
          facilisis volutpat est velit. Commodo quis imperdiet massa tincidunt
          nunc. Purus in massa tempor nec feugiat nisl pretium fusce id. Nulla
          facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Diam
          volutpat commodo sed egestas. Vestibulum sed arcu non odio euismod
          lacinia at quis risus. Varius vel pharetra vel turpis nunc eget lorem
          dolor. Placerat orci nulla pellentesque dignissim. Tempus imperdiet
          nulla malesuada pellentesque elit eget gravida. Pharetra convallis
          posuere morbi leo urna molestie at elementum. Convallis aenean et
          tortor at risus viverra adipiscing at in. Eu mi bibendum neque
          egestas. Lacus suspendisse faucibus interdum posuere. Natoque
          penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu
          lobortis elementum nibh tellus molestie. Fermentum dui faucibus in
          ornare quam viverra orci sagittis eu. Non diam phasellus vestibulum
          lorem. Vel fringilla est ullamcorper eget nulla facilisi etiam. Ac
          placerat vestibulum lectus mauris ultrices eros. Risus at ultrices mi
          tempus imperdiet. Luctus accumsan tortor posuere ac ut consequat
          semper viverra. Ac turpis egestas integer eget aliquet nibh praesent
          tristique. Dui id ornare arcu odio ut sem nulla pharetra diam.
        </p>

        <div className="text-center">
          <Link to="/" className="btn btn-primary">
            <h5>Check More...</h5>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="py-3">Our Team</h3>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#14595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Connect on LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
