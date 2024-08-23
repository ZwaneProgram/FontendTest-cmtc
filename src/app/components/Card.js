import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light">
            <div className="position-relative">
              <Image
                src="/Card1.jpg" 
                alt="Card Image 1"
                layout="responsive"
                width={500}
                height={300}
                className="card-img-top"
                objectFit="cover"
              />
              <div className="position-absolute top-0 start-0 p-3 text-white bg-dark bg-opacity-50">
                <h5 className="card-title">Card Title 1</h5>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Discover the features of Card 1, designed to bring you the best experience.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light">
            <div className="position-relative">
              <Image
                src="/Card1.jpg" // Adjust path as needed
                alt="Card Image 2"
                layout="responsive"
                width={500}
                height={300}
                className="card-img-top"
                objectFit="cover"
              />
              <div className="position-absolute top-0 start-0 p-3 text-white bg-dark bg-opacity-50">
                <h5 className="card-title">Card Title 2</h5>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Explore Card 2s features and benefits. Click the link to find out more about what we can offer you.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light">
            <div className="position-relative">
              <Image
                src="/Card1.jpg" // Adjust path as needed
                alt="Card Image 3"
                layout="responsive"
                width={500}
                height={300}
                className="card-img-top"
                objectFit="cover"
              />
              <div className="position-absolute top-0 start-0 p-3 text-white bg-dark bg-opacity-50">
                <h5 className="card-title">Card Title 3</h5>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Card 3 offers outstanding features that you wont want to miss. Discover all the details here.</p>
              <a href="#" className="btn btn-primary">Find Out More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
