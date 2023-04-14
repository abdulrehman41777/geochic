import React from "react";
// import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./../assets/images/img1.jpg";
import img1M from "./../assets/images/img1-m.jpg";
import img2 from "./../assets/images/img2.jpg";
import img2M from "./../assets/images/img2-m.jpg";
import img3 from "./../assets/images/img3.jpg";
import img3M from "./../assets/images/img3-m.jpg";
import img4 from "./../assets/images/img4.jpg";
import img4M from "./../assets/images/img4-m.jpg";
import img5 from "./../assets/images/img5.jpg";
import img5M from "./../assets/images/img5-m.jpg";
import img6 from "./../assets/images/img6.jpg";
import img6M from "./../assets/images/img6-m.jpg";
import img7 from "./../assets/images/quote.svg";
import Header from "../component/Layout/Header";

const MagazinePage = () => {
    return (
        <>
            <Header />
            <div className="magazine_page">
                <div className="herobanner">
                    <div className="overlay"></div>
                    <div className="herobanner_content">
                        <h1>COLLECTOR'S EDITION MAGAZINE</h1>
                        <h2>Bigger, Bolder, More Authentic! A testament to the enduring power of print </h2>
                    </div>
                </div>
                <section className="section1">
                    <Container>
                        <h3 className="text-center mb-0">JOIN THE PRINT<br /> RENAISSANCE</h3>
                        <Row className="section1_row">
                            <Col lg={6}>
                                <img src={img1} alt="" className="img-fluid d_desktop" />
                                <img src={img1M} alt="" className="img-fluid d_mobile" />
                            </Col>
                            <Col lg={6}>
                                <img src={img2} alt="" className="img-fluid d_desktop" />
                                <img src={img2M} alt="" className="img-fluid d_mobile" />
                            </Col>
                            <Col lg={12}>
                                <p className="sub_text">Over the years, Ralph Clermont has published numerous award-winning, critically acclaimed magazines, including: <span className="italic">Rebelle</span>, winner of 50 Most Notable Launches, <span className="italic">Wink</span>, winner of multiple Ozzie Awards for magazine excellence, including Best Cover, Best Design, Best Use of Typography, and a Merit Award from the Society of Publication Designers for photography, <span className="italic">American Business Woman</span>, a stylish alternative to male-dominated business publications, and <span className="italic">Vis.A.Vis</span>.</p>
                            </Col>
                        </Row>

                        <Row className="section2_row">
                            <Col lg={12} className="d_mobile">
                                <p className="sub_text">With NFTs, Clermont and indie publishers are fueling a print renaissance for a passionate audience that doesn’t rely on advertising sales or large circulations. Our stunning, <span className="italic">GEOCHIC</span> Collector's Edition magazine is at the forefront of this trend. It’s a fabulous take on global culture and a compilation of photo essays from our travels and experiences around the world, including Cape town, Sestri Levante, Buenos Aires, Miami, Abaka Bay, Havana, and Santo Domingo. Local models give our fashion editorials an authentic global sensibility and distinctive look. <span className="italic">GEOCHIC</span> Collector’s Edition captures the heat, color, and sensuality of the changing face of fashion. </p>
                            </Col>
                            <Col lg={6}>
                                <img src={img3} alt="" className="img-fluid d_desktop" />
                                <img src={img3M} alt="" className="img-fluid d_mobile" />
                            </Col>
                            <Col lg={6}>
                                <img src={img4} alt="" className="img-fluid d_desktop" />
                                <img src={img4M} alt="" className="img-fluid d_mobile" />
                            </Col>
                            <Col lg={12}>
                                <p className="sub_text d_desktop">With NFTs, Clermont and indie publishers are fueling a print renaissance for a passionate audience that doesn’t rely on advertising sales or large circulations. Our stunning, <span className="italic">GEOCHIC</span> Collector's Edition magazine is at the forefront of this trend. It’s a fabulous take on global culture and a compilation of photo essays from our travels and experiences around the world, including Cape town, Sestri Levante, Buenos Aires, Miami, Abaka Bay, Havana, and Santo Domingo. Local models give our fashion editorials an authentic global sensibility and distinctive look. <span className="italic">GEOCHIC</span> Collector’s Edition captures the heat, color, and sensuality of the changing face of fashion. </p>
                                <p className="sub_text mt_40_mobile"><span className="italic">GEOCHIC</span> magazine is also a celebration of print. In this hectic digital world, we’re told that it’s all about instant gratification, immediacy and mobility; that print is no longer relevant. Fortunately, even the tech-savvy are rediscovering that print has an enduring power, a thud factor that digital just can’t match, a resounding lasting impression that can never be erased.</p>
                            </Col>
                        </Row>
                        <Row className="section3_row">
                            <Col lg={6} className="section3_media">
                                <img src={img5} alt="" className="img-fluid d_desktop" />
                                <img src={img5M} alt="" className="img-fluid d_mobile" />
                                <img src={img6} alt="" className="img-fluid d_desktop mb-0" />
                                <img src={img6M} alt="" className="img-fluid d_mobile" />
                            </Col>
                            <Col lg={6} className="blockquote_wrap">
                                <div className="blockquote">
                                    <img src={img7} alt="" className="img-fluid" />
                                    <p className="p1">A magazine is thus no longer something you just flick through, it’s something you devote time to, read carefully, appreciate its design and craft, and reflect on. It’s something you keep and cherish, reference and reread. It asks you to pause for a moment, smell it, touch it, examine it, and think about it. It offers a nuanced activism that resists the nonstop anxieties of everyday life. From the vision to the editing, the idea to the concept, the design to the ethos, the words to the paper, the image to the ink, and the voice to the community, magazine publishing is becoming one of the most exciting collective art forms of our time.</p>
                                    <div className="text-end">
                                        <img src={img7} alt="" className="img-fluid b2" />
                                    </div>
                                    <div className="auther">
                                        <p className="p2">JEREMY LESLIE</p>
                                        <p className="p3">Magculture Founder</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default MagazinePage