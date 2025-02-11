import React from 'react';
import { Link } from 'react-router-dom';
// take out mx-2 and replace with bootstrap 5.3
// add a browse more button under each section
//add hover effect
//change section id name

const paintings = [
    { title: "Starry Night", description: "A famous painting by Van Gogh." },
    { title: "Mona Lisa", description: "A masterpiece by Leonardo da Vinci." },
    { title: "The Scream", description: "An iconic painting by Edvard Munch." },
  ];
const photography = [
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
];
const sculpture = [
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
    {title: "Starry Night", description: "A famous painting by Van Gogh."},
]
  const Gallery = () => {
      return (
          <div className="container text-center">
              <h1>Main Gallery</h1>
              <div className="row">
                  <div className="d-flex justify-content-evenly">
                      <div className="mx-2">
                          <Link to="/gallery/category/painting">Painting</Link>
                      </div>
                      <div className="mx-2">
                          <Link to="/gallery/category/photography">Photography</Link>
                      </div>
                      <div className="mx-2">
                          <Link to="/gallery/category/sculpture">Sculpture</Link>
                      </div>
                  </div>
              </div>
              
              <section id="projects" className="container py-4">
                  <h2 className="text-center mb-4">Paintings</h2>
                  <div className="row justify-content-center">
                      {paintings.map((painting, index) => (
                          <div key={index} className="col-md-4">
                              <div className="card text-white bg-dark mb-3 shadow-lg text-center">
                                  <div className="card-body">
                                      <h3 className="card-title">{painting.title}</h3>
                                      <blockquote className="blockquote">
                                          <p className="mb-0">{painting.description}</p>
                                      </blockquote>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/gallery/category/painting" className="btn btn-primary">Browse More</Link>
                </div>
              </section>
            

              <section id="projects" className="container py-4">
                  <h2 className="text-center mb-4">Photography</h2>
                  <div className="row justify-content-center">
                      {photography.map((photography, index) => (
                          <div key={index} className="col-md-4">
                              <div className="card text-white bg-dark mb-3 shadow-lg text-center">
                                  <div className="card-body">
                                      <h3 className="card-title">{photography.title}</h3>
                                      <blockquote className="blockquote">
                                          <p className="mb-0">{photography.description}</p>
                                      </blockquote>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/gallery/category/painting" className="btn btn-primary">Browse More</Link>
                </div>
              </section>


              <section id="projects" className="container py-4">
                  <h2 className="text-center mb-4">Sculpture</h2>
                  <div className="row justify-content-center">
                      {sculpture.map((sculpture, index) => (
                          <div key={index} className="col-md-4">
                              <div className="card text-white bg-dark mb-3 shadow-lg text-center">
                                  <div className="card-body">
                                      <h3 className="card-title">{sculpture.title}</h3>
                                      <blockquote className="blockquote">
                                          <p className="mb-0">{sculpture.description}</p>
                                      </blockquote>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/gallery/category/painting" className="btn btn-primary">Browse More</Link>
                </div>
              </section>
          </div>
      );
  }
  
  export default Gallery;