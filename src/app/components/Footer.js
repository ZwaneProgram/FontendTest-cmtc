const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
            <h5 className="text-uppercase text-dark">Footer text</h5>
            <p className="text-dark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
  
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-dark">Footer text</h5>
            <p className="text-dark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
        </div>
      </div>
  
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <span className="text-dark">
          © 2024 Phuwasit:
          <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
