export default function Service() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 text-primary mb-4">Our Services</h1>
          <p className="lead text-muted">
            We offer a variety of services to help you achieve your goals and grow your business.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <i className="bi bi-code-slash display-4 text-primary mb-3"></i>
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Build scalable, modern websites and applications that engage your users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <i className="bi bi-palette display-4 text-primary mb-3"></i>
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">
                Stunning and unique designs tailored to your brand and vision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <i className="bi bi-graph-up-arrow display-4 text-primary mb-3"></i>
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">
                We create digital strategies that increase your online presence and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h2 className="text-primary mb-4">Let's Work Together</h2>
          <p className="lead text-muted">
            Reach out to us today and discover how we can help you succeed.
          </p>
          <button className="btn btn-primary btn-lg">Contact Us</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2024 Your Test Anuchat. All rights reserved.</p>
      </footer>
    </div>
  );
}
