import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/stocks">Stocks</Link>
              </li>
              <li>
                <Link to="/allocation">Allocation</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
  );
}