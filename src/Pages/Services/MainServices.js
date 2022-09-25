import SelectedServices from "./SelectedServices";
import "./style.css";

function Services() {
  return (
    <>
      <div className="bg-dark text-light">
        <div className="container" id="hanging-icons">
          <div className="row py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square flex-shrink-0 me-3">
                <i className="bi bi-pentagon"></i>
              </div>
              <div>
                <h3>Title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="##" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square flex-shrink-0 me-3">
                <i className="bi bi-pentagon"></i>
              </div>
              <div>
                <h3>Title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="##" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square flex-shrink-0 me-3">
                <i className="bi bi-pentagon"></i>
              </div>
              <div>
                <h3>Title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="##" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of top section */}

      <div className="bg-light p-3">
        <div className="services-sizing container">
          <h1 className="pb-2 border-bottom text-color-red">
            Add Your Service
          </h1>
          <SelectedServices />
        </div>
      </div>

      {/* end of middle section */}

      <div className="bg-dark text-light">
        <div className="container px-4 py-5" id="icon-grid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="bi bi-check-lg px-1"></i>{" "}
              <div>
                <h4 className="fw-bold mb-0">Title</h4>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end of bottom section */}
    </>
  );
}

export default Services;
