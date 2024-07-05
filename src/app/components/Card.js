// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mt-5 mb-5">
      <Head>
        <title>Card Component</title>
      </Head>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="./Card1.jpg" className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <p className="card-text">Card 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="./Card1.jpg" className="card-img-top" alt="Image 2" />
            <div className="card-body">
              <p className="card-text">Card 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="./Card1.jpg" className="card-img-top" alt="Image 3" />
            <div className="card-body">
              <p className="card-text">Card 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
