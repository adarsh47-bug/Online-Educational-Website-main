import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";

const navLinks = [
  {
    display: "Home",
    url: "home",
    tag: "home",
  },
  {
    display: "Courses",
    url: "courses",
    tag: "school",
  },
  {
    display: "Blog",
    url: "blog",
    tag: "article",
  },
  {
    display: "About",
    url: "about",
    tag: "info",
  },
  {
    display: "Register",
    url: "register",
    tag: "person",
  },
  {
    display: "Login",
    url: "login",
    tag: "login",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div className="mx-5">
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> getSkills.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url} className="link-st">{item.display}
                      <span class="material-icons px-2">{item.tag}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
