// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/geochic-logo.png";
import pdf from "./../../assets/GEOCHIC_litepaper_V8.pdf";
import styles from './header.module.css'

import Headroom from "react-headroom";

const Header = () => {
  // const handleToggle = (e) => {
    // const navMain = $(".navbar-nav");
    // navMain.on("click", "a", null, function () {
    //   navMain.collapse('hide');
    // });
    // const navBarToggle = document.querySelector(".navbar-toggler");
    // const navBarCollapse = document.querySelector(".navbar-collapse");
    // const navBarLink = document.querySelector(".navbar-nav");
    // navBarToggle.classList.add("collapsed");
    // navBarCollapse.classList.remove("show");
    // e.preventDefault();
  // }

  // function debounce(func, wait, immediate) {
  //   var timeout;
  //   return function () {
  //     var context = this,
  //       args = arguments;
  //     var later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 70) ||
  //       currentScrollPos < 10
  //   );

  //   setPrevScrollPos(currentScrollPos);
  // }, 50);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  // const navbarStyles = {
  //   position: "fixed",
  //   // height: "80px",
  //   width: "100%",
  //   // backgroundColor: "rgba(0,0,0,0.8)",
  //   transition: "top 0.35s ease-in-out",
  //   zIndex: "1111",
  // };



  
  const isSticky = (e) => {
    const header = document.querySelector(".header_main");
    const scrollTop = window.scrollY;
    scrollTop >= 110
      ? header.classList.add("sticky_nav")
      : header.classList.remove("sticky_nav");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <>
      <Headroom>
        {/* <div style={{ ...navbarStyles, top: visible ? "0" : "-91px" }}>asdfg</div> */}
        {/* <header
        className="header_wrap"
        style={{ ...navbarStyles, top: visible ? "0px" : "-81px" }}
      > */}
        <header className="header_wrap">
          <Navbar
            bg="white"
            // fixed="top"
            expand="lg"
            collapseOnSelect
            className={`header_main`}
          >
            <Container fluid>
              {/* <Navbar.Brand as={Link} to="/" eventKey="0"> */}
              <Navbar.Brand as={Link} to="/">
                <div className={styles._logogapping}>
                <img src={logo} alt="Logo" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar" />
              <Navbar.Collapse id="basic-navbar">
                <Nav className="ms-auto">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <a className="nav-link" target="_blank" rel="noreferrer" href={pdf}>Litepaper</a>
                  <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                  {/* <NavLink className="nav-link" to="/about">About</NavLink>
                  <NavLink className="nav-link" to="/creators">Creators</NavLink>
                  <NavLink className="nav-link" to="/tokenomics">Tokenomics</NavLink>
                  <NavLink className="nav-link" to="/roadmap">Roadmap</NavLink>
                  <NavLink className="nav-link" to="/MagazinePage">Magazine</NavLink>
                  <NavLink className="nav-link" to="/travel">Travel</NavLink> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Headroom>
    </>
  );
};

export default Header;
