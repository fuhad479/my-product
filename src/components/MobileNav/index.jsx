import { useEffect } from "react";

import { Link } from "react-router-dom";

import Button from "src/components/Button";

import "./index.scss";

export default function MobileNav({ open, setOpen }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <aside className="mobile-nav-wrapper">
      <nav className="mobile-nav">
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link onClick={() => setOpen(!open)} to="/">
              Product
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link onClick={() => setOpen(!open)} to="customers">
              Customers
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link onClick={() => setOpen(!open)} to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link onClick={() => setOpen(!open)} to="/resources">
              Resources
            </Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <Button size="small" variant="filled">
          Sign in
        </Button>
        <Button size="small" variant="filled">
          Sign up
        </Button>
      </div>
    </aside>
  );
}
