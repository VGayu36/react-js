import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-danger">
  <div className="container">
    <a className="navbar-brand" href="#"><span className="text-warning">Design</span><span className="text-info">XS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <div>
   <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Workflow</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Testimonials</a>
  </li>
</ul>
   </div>
  </div>
</nav>
    </React.Fragment>
  )
}

export default Navbar