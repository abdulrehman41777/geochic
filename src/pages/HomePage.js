import React, { useState, useEffect, useRef } from "react";
// import React, { useState, useEffect } from "react";
import pdf from "./../assets/GEOCHIC_litepaper_V6.pdf";
import ReactPlayer from "react-player";
// import Vimeo from "@u-wave/react-vimeo";
// import ReactTypingEffect from "react-typing-effect";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { SectionTitleh2, SectionTitleh3 } from "../component/SectionTitle";
import { useWindowSize } from "../component/useWindowSize";


import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "./../assets/images/FIRSTWEBIMAGE.jpg";
import img2 from "./../assets/images/NFT-IMAGE.jpg";
// import img3 from './../assets/images/TRAVELIMAGE.jpg;'
import img4 from "./../assets/images/TOKEN-IMAGE.jpg";
import img5 from "./../assets/images/ADRIANA-LIMA-COVER.jpg";
import img6 from "./../assets/images/miami-cover-mobile.png";
import img7 from "./../assets/images/creators-1.jpg";
import img8 from "./../assets/images/fans-06.jpg";
import img9 from "./../assets/images/cheetah-retouched.jpg";
import vdo1 from "./../assets/media/3182798643.mp4";
import vdo1b from "./../assets/media/3182798643.webm";
import flowimg from "./../assets/images/gc-flow-img.svg";
import flowimgmob from "./../assets/images/gc-flow-img-mob.svg";

import Typewriter from "typewriter-effect";
import Header from "../component/Layout/Header";

const HomePage = () => {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const vidRef = useRef();

  const [isHide, setIsHide] = useState(true);
  setTimeout(() => setIsHide(false), 100);

  const [isHide2, setIsHide2] = useState(true);
  setTimeout(() => setIsHide2(false), 2000);

  const { width } = useWindowSize();

  // useEffect(() => {
  //   vidRef.current.play();
  // }, []);

  // document.addEventListener("DOMContentLoaded", function () {
  //   setTimeout(function () { AOS.init(); }, 700);
  // });



  useEffect(() => {
    AOS.init();
    //  setTimeout(() =>  AOS.init(), 100);
    AOS.refresh();
  }, []);


  return (
    <>
      <Header />
      <section className="hero-banner">
        {!isHide ? <>
          <div
            className="animbelt_1"
          // className="anim_belt_1"
          // data-aos="belt_anim1"
          // data-aos-easing="ease-in"
          // data-aos-duration="1000"
          // data-aos-delay="200"
          ></div>
          <div
            className="animbelt_2"
          // className="anim_belt_2"
          // data-aos="belt_anim2"
          // data-aos-easing="ease-in"
          // data-aos-duration="650"
          // data-aos-delay="800"
          ></div></>
          : null}

        <div className="content">
          <div className="title">GEOCHIC</div>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: [
                  "A fresh, new, decentralized content platform",
                  "that celebrates global style, beauty and culture",
                  "We bridge the worlds of fashion and culture with",
                  "the ever–expanding universe of crypto and NFTs",
                  "A new token with practical real-world applications",
                  "and NFTs with unique membership experiences",
                  "Peers vote to reward tokens for completed projects",
                  "and peers vote to support funding proposed projects",
                  "A platform for creators who lack resources",
                  "and relationships but have great stories to tell",
                  "We help indie filmmakers, publishers, photographers",
                  "artists and videographers, get their projects funded",
                  "Integrating the disruptive power of crypto",
                  "with the global reach of fashion, beauty and culture",
                  "Passionate storytellers from all over the world know",
                  "that true creativity must reflect a global perspective",
                  "Here, value is not determined by eyeballs",
                  "but rather what your peers think about your work",
                  "We fund beautiful, compelling indie films, documentaries,",
                  "videos and magazines that promote cultural diversity",
                  "Capitalize on a rapidly changing global market where",
                  "demand for diverse content is greater than ever before",
                  "Quality content that unites people are rewarded and",
                  "there's opportunities for new voices to be heard and seen",
                  "A home for like-minded creators from all over the world",
                  "who share our love and passion for fashion and culture",
                  "Supporters buy NFTs in projects that appeal to them and",
                  "become directly involved as investors and co-owners",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />
            {/* <ReactTypingEffect
              speed={48}
              eraseSpeed={20}
              eraseDelay={2000}
              typingDelay={1000}
              text={[
                "A fresh, new, decentralized content platform",
                "that celebrates global style, beauty and culture",
                "We bridge the worlds of fashion and culture with",
                "the ever–expanding universe of crypto and NFTs",
                "A new token with practical real-world applications",
                "and NFTs with unique membership experiences",
                "Peers vote to reward tokens for completed projects",
                "and peers vote to support funding proposed projects",
                "A platform for creators who lack resources",
                "and relationships but have great stories to tell",
                "We help indie filmmakers, publishers, photographers",
                "artists and videographers, get their projects funded",
                "Integrating the disruptive power of crypto",
                "with the global reach of fashion, beauty and culture",
                "Passionate storytellers from all over the world know",
                "that true creativity must reflect a global perspective",
                "Here, value is not determined by eyeballs",
                "but rather what your peers think about your work",
                "We fund beautiful, compelling indie films, documentaries,",
                "videos and magazines that promote cultural diversity",
                "Capitalize on a rapidly changing global market where",
                "demand for diverse content is greater than ever before",
                "Quality content that unites people are rewarded and",
                "there's opportunities for new voices to be heard and seen",
                "A home for like-minded creators from all over the world",
                "who share our love and passion for fashion and culture",
                "Supporters buy NFTs in projects that appeal to them and",
                "become directly involved as investors and co-owners",
              ]} 
            />*/}
          </div>
        </div>
        {/* <div className="video_wrapper">
          <Vimeo video="689469260" loop muted controls={false} />
        </div> */}
        {/* autoplay responsive */}
        <div className="bg_video_wrap"
        // data-aos="vdo_anim"
        // data-aos-duration="800"
        // data-aos-delay="5000"
        >
          {/* <video
            src={vdo1}
            loop
            muted
            autoPlay
            ref={vidRef}
            preload=
            "auto"
          /> */}
          {/* <video src={vdo1} loop muted autoPlay ref={vidRef} preload="auto" /> */}
          {!isHide2 ?
            <video
              width="100%"
              height="100%"
              loop
              muted
              autoPlay
              ref={vidRef}
              playsInline
              className="vdo_anim"
            >
              <source src={vdo1} type="video/mp4" />
              <source src={vdo1b} type="video/webm" />
              <source
                src={require("./../assets/media/3182798643.mp4")}
                type="video/ogg"
              />
            </video>
            : null}


          {/* <ReactPlayer
            url={vdo1}
            className="react-player"
            // playing
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            playing={true}
          /> */}
        </div>
      </section>
      <section className="sec_section sec_one">
        <Container>
          <SectionTitleh2
            className="afterBorder pb-2 pb-xl-5 mb-5 mb-xl-0 px-2 px-md-0"
            title="A practical, credible blockchain solution for funding creative projects that celebrate global style, beauty and culture"
            text="A democratic platform for indie filmmakers, publishers, videographers, artists and photographers who lack the resources and relationships to secure adequate funding but have great stories to tell in a uniquely personal way; a home for passionate storytellers from all over the world who believe that true creativity must reflect a global perspective in order to be valid in today’s reality."
          />
        </Container>
        <img src={img1} alt="Geochic-pic" className="mt-xl-5 sec_section_img" />
      </section>
      <section className="image_content_section">
        <Container fluid className="ps-lg-0">
          <SectionTitleh3
            className="afterBorder"
            title="GEOCHIC’s Lead Investor concept is a game changer for content creators"
            text=""
          />
          <Row className="pb-5 gc_flow_img">
            <h3 className="title-lg text-uppercase text-center mb-5 pb-2">How It Works</h3>
            <Col className="inner">
            {width > 991 && <img src={flowimg} alt="Geochic" className="flow_img1" />}
            {width <= 991 && <img src={flowimgmob} alt="Geochic" className="flow_img2" />}
            </Col>
          </Row>
          <Row className="align-items-stretch mt-xl-5">
            <Col xl={7} className="image_col px-0">
              <img src={img7} alt="Geochic-pic" className="home_img2" />
            </Col>
            <Col
              xl={5}
              className="d-flex justify-content=-center align-items-center px-xl-5"
            >
              <div className="sectionBoxh2 px-1 px-xl-4 px-xxl-5">
                <div className="sectitle">CREATORS</div>
                <div className="secsubtitle">GEOCHIC leverages blockchain technology to function as the lead investor for creative
                  projects approved by our community. If you’re a filmmaker, publisher, videographer or artist, you can now get
                  your project funded by a like-minded, supportive investor community; a disruptive model that will break the
                  monopoly of big media conglomerates and make room for smaller content creators.</div>
                <a className="btn btn-yellow mt-4" target="_blank" rel="noreferrer" href={pdf}>Get Funded</a>
              </div>
              {/* <SectionTitleh2
                linkbtn={true}
                linktext="Get Funded"
                link="/static/media/geochic_litepaper_v5.fa206feec0ef6ea29cc4.pdf"
                className="px-1 px-xl-4 px-xxl-5"
                title="CREATORS"
                text="GEOCHIC leverages blockchain technology to function as the lead investor for creative projects approved by our community. If you’re a filmmaker, publisher, videographer or artist, you can now get your project funded by a like-minded, supportive investor community; a disruptive model that will break the monopoly of big media conglomerates and make room for smaller content creators."
              /> */}
            </Col>
          </Row>
          <Row className="align-items-stretch flex-md-row-reverse">
            <Col xl={6} className="image_col px-0">
              <img src={img8} alt="Geochic-pic" className="fans_img" />
            </Col>
            <Col
              xl={6}
              className="d-flex justify-content-center align-items-center px-3 px-xl-5"
            >
              <div className="sectionBoxh2 px-xl-4 px-xxl-5">
                <div className="sectitle">FANS AND SUPPORTERS</div>
                <div className="secsubtitle">You’re empowered to support projects that really matter to you, whether aesthetically, emotionally, culturally or intellectually. GEOCHIC enables you to purchase NFTs and become co-owners in exciting, innovative and cutting-edge indie films, documentaries or magazines and share in their success. You can also vote for projects you’d like to see funded.</div><a className="btn btn-yellow mt-4"
                    target="_blank" rel="noreferrer" href={pdf}>Become Co-Owners</a>
              </div>
              {/* <SectionTitleh2
                linkbtn={true}
                linktext="Become Co-Owners"
                link="/litepaper"
                className="px-xl-4 px-xxl-5"
                title="FANS &amp; SUPPORTERS"
                text="Fans are empowered to make their voices heard and to put their money behind what really matters to them! GEOCHIC enables fans to purchase NFTs representing their favorite films, documentaries or magazines as co-owners and share in the success. Fans can also vote for the projects they’d like to see get funded or vote for best indie film, documentary, video, magazine, etc."
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="image_content_section nfts_sec">
        <Container fluid className="ps-xl-0">
          <Row className="align-items-stretch">
            <Col xl={7} className="image_col px-0">
              <img src={img4} alt="Geochic-pic" className="home_img3" />
            </Col>
            <Col
              xl={5}
              className="d-flex justify-content=-center align-items-center px-xl-5"
            >
              <div className="sectionBoxh2 px-1 px-xl-4 px-xxl-5">
                <div className="sectitle">GEOCHIC TOKEN</div>
                <div className="secsubtitle">High-profile scandals and bankruptcies along with highly speculative tokens propped up by celebrities and influencers without solid use cases have tarnished the reputation and credibility of cryptocurrencies. GEOCHIC leverages blockchain technology through tokenization of assets and content for practical real-world applications and long-term viability.</div>
                <a className="btn btn-yellow mt-4" target="_blank" rel="noreferrer" href={pdf}>The Breakdown</a>
              </div>
              {/* <SectionTitleh2
                linkbtn={true}
                linktext="The Breakdown"
                link="/litepaper"
                className="px-1 px-xl-4 px-xxl-5"
                title="GEOCHIC TOKEN"
                text="The increasing popularity of cryptocurrencies have resulted in a proliferation of highly speculative tokens propped up by celebrities and influencers without solid fundamentals and use cases. We leverage blockchain technologies through tokenization of assets and content for practical real-world applications and long term traction, viability and growth."
              /> */}
            </Col>
          </Row>
          <Row className="align-items-stretch flex-md-row-reverse">
            <Col xl={6} className="image_col px-0">
              <img src={img2} alt="Geochic-pic" className="nfts_img" />
            </Col>
            <Col
              xl={6}
              className="d-flex justify-content-center align-items-center px-xl-5"
            >
              <div className="sectionBoxh2 px-1 px-xl-4 px-xxl-5">
                <div className="sectitle">GEOCHIC NFTs</div>
                <div className="secsubtitle">GEOCHIC NFTs offer fans ownership opportunities that have traditionally been available
                  only to major studios, streaming platforms, publishing companies, etc. Imagine the sense of pride of ownership
                  for a fan who is a co-owner of a film rather than a person who pays a streaming platform a subscription fee to
                  watch films which they have no ownership stake in. Our NFTs empower our fans and foster a personal and emotional
                  connection, similarly to collectors of vinyl music, blu-ray movie collections, comic books, art and photography
                  books, etc.</div>
                <a className="btn btn-yellow mt-4" target="_blank" rel="noreferrer" href={pdf}>Fund your favorite projects</a>
              </div>
              {/* <SectionTitleh2
                linkbtn={true}
                linktext="Fund your favorite projects"
                link="/litepaper"
                className="px-1 px-xl-4 px-xxl-5"
                title="GEOCHIC NFTs"
                text="GEOCHIC NFTs offer fans ownership opportunities that have traditionally been available only to major studios, streaming platforms, publishing companies, etc. Imagine the sense of pride of ownership for a fan who is a co-owner of a film rather than a person who pays a streaming platform a subscription fee to watch films which they have no ownership stake in. Our NFTs empower our fans and foster a personal and emotional connection, similarly to collectors of vinyl music, blu-ray movie collections, comic books, art and photography books, etc."
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="travel_section">
        <Container>
          <SectionTitleh3
            linkbtn={true}
            linktext="Watch More Videos"
            link="/travel"
            className="afterBorder px-2 px-md-0"
            title="GEOCHIC TRAVEL SERIES"
            text="Experience the thrill of globe-hopping in this chic travel series that celebrates global style, beauty and culture. NFTs allow you to capitalize on the demand for global cinema or hang out with our crew and models in Cape Town, Naples, Rio de Janeiro, Beirut, Medellin, Hanoi, Mumbai, Kingston, Bangkok."
          />
        </Container>
        <Container fluid className="px-0 mt-xl-5">
          <div className="travel_content">
            <img src={img9} alt="Geochic-pic" className="travel_img" />
            <div className="travel_content_block">
              <div
                className="travel_line"
                data-aos="line_anim1"
                data-aos-duration="1000"
                data-aos-delay="1000"
              // data-aos-offset="50"
              ></div>
              <div className="title_wrapper">
                <h3
                  className="title mb-0"
                  data-aos="title_anim1"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                // data-aos-offset="50"
                >
                  GEOCHIC
                </h3>
              </div>

              <small
                className="d-block"
                data-aos="subtitle_anim1"
                data-aos-duration="1200"
                data-aos-delay="1000"
              // data-aos-offset="100"
              >
                Watch Cape Town episode
              </small>
              <span
                className="d-block btn_play"
                data-aos="btn_anim1"
                data-aos-duration="1000"
                data-aos-delay="1000"
              // data-aos-offset="50"
              >
                <Button
                  variant=""
                  onClick={handleShow}
                  // onClick={() => setOpenVideo(true)}
                  className="icon_play mx-auto mt-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                  </svg>
                </Button>
                <div className="play_btn_text">
                  <span>P</span>
                  <span>L</span>
                  <span>A</span>
                  <span>Y</span>
                  <span>&nbsp;</span>
                  <span>V</span>
                  <span>I</span>
                  <span>D</span>
                  <span>E</span>
                  <span>O</span>
                </div>
              </span>
            </div>
          </div>
          <div className="text-center d_desktop">
            <a className="btn btn-yellow mt-5 mx-auto w-auto" href="/travel">Watch More Videos</a>
          </div>

        </Container>
      </section>

      <section className="bottom_section">
        <Container>
          <SectionTitleh3
            className="afterBorder"
            // linkbtn={true}
            // linktext="Join The Print Renaissance"
            // link="/"
            title="GEOCHIC COLLECTOR’S EDITION MAGAZINE"
            text="Let’s use NFTs to fuel a print renaissance for a passionate audience that don’t rely on advertising sales or large circulations. GEOCHIC Collector’s Edition magazine is a stunning compilation of photo essays from our travels and experiences around the world. Bigger, bolder, more authentic! A testament to the enduring power of print."
          />
        </Container>
        <Container fluid className="px-0 magazine_img">
          <img src={img5} alt="Geochic-pic" className="desktop_img" />
          <img src={img6} alt="Geochic-pic" className="h-630px mobile_img" />
        </Container>

      </section>
      <Container>
        <Row className="pt-0 pt-xl-5 pb-5 pb-lg-5 text-center">
          {/* <SectionTitleh3
            linkbtn={true}
            linktext="Join The Print Renaissance"
            link="/"
          /> */}
          <a className="btn btn-yellow mt-0 mt-xl-4 mb-4 mx-auto w-auto" href="/magazine">Join The Print Renaissance</a>
        </Row>
      </Container>

      {/* <Modal isOpen={openVideo} close={() => setOpenVideo(false)}>
            <ReactPlayer
              className="react-player"
              url={"https://www.youtube.com/watch?reload=9&v=NS16qolACpo"}
              width="100%"
              height="100%"
              playing
              muted
            />
          </Modal> */}

      <Modal centered show={show} onHide={handleClose} className="vdo_modal">
        <Modal.Header closeButton className="p-0 border-0">
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/NS16qolACpo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <div className="transition_div"></div>
          <div className="transition_div2"></div>
          <div className="transition_div3"></div>
          <div className="transition_div4"></div>
          {/* <ReactPlayer
            url={"https://www.youtube.com/watch?reload=9&v=NS16qolACpo"}
            className="react-player"
            width="100%"
            // controls={true}
            playing
            muted
            // playsInline
          /> */}
          <ReactPlayer
            url={"https://www.youtube.com/watch?reload=9&v=NS16qolACpo"}
            className="react-player"
            width="100%"
            controls
            playing
            muted
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default HomePage;
