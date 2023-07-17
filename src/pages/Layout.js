import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav className="container navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                {/* <Link className="nav-link active text-bg-dark" aria-current="page" to="/">Navbar</Link> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active text-bg-dark" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-bg-dark" to="/rick&morty">Rick & Morty</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-bg-dark" to="/team">Team Members</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <main>
            
        </main>
      <Outlet />
    </>
  )
};

export default Layout;