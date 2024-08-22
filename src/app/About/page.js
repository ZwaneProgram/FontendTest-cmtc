export default function About() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 text-primary mb-4">About Our Journey</h1>
          <p className="lead text-muted">
            From humble beginnings to a team of innovators, we continue to push
            boundaries and make an impact.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="row mb-5">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member 1"
          />
          <h5 className="card-title">Phuwasit Wantaya</h5>
          <p className="card-text">CEO & Founder</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member 2"
          />
          <h5 className="card-title">Phuwasit Wantaya</h5>
          <p className="card-text">Lead Developer</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member 3"
          />
          <h5 className="card-title">Phuwasit Wantaya</h5>
          <p className="card-text">Head of Design</p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="text-primary mb-4">What We Do</h2>
          <p className="text-muted">
            We specialize in providing cutting-edge solutions that span across
            various industries. Whether it’s technology, design, or strategy,
            we’ve got it covered.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">
                We create highly scalable and maintainable applications tailored
                to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Design</h5>
              <p className="card-text">
                Our design team creates stunning visuals that
                provide seamless user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">
                Our expert consultants help guide businesses towards innovation
                and success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="text-primary mb-4">What People Say</h2>
          <p className="text-muted">
            Hear from our clients who have experienced the impact of our work.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "This company transformed our digital strategy. The team's
              dedication and creativity made all the difference."
            </p>
            <footer className="fw-bold">- Client A</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "Their attention to detail and focus on delivering high-quality
              results impressed us."
            </p>
            <footer className="fw-bold">- Client B</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "We couldn’t have asked for a better partnership in driving our
              business forward."
            </p>
            <footer className="fw-bold">- Client C</footer>
          </blockquote>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2024 Your Test Anuchat. All rights reserved.</p>
      </footer>
    </div>
  );
}
