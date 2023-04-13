import React from "react";
// import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import playIconDark from "./../assets/images/play-icon-dark.png";
import playIconWhite from "./../assets/images/play-icon-white.png";
import pauseIconDark from "./../assets/images/pause-icon-dark.png";
import pauseIconWhite from "./../assets/images/pause-icon-white.png";
// import ReactPlayer from "react-player";
import ReUsableReactPlayer from "../component/ReUsableReactPlayer";
import Header from "../component/Layout/Header";

const TravelPage = () => {

    return (
        <>
            <Header />
            <div className="travel_page">
                <div className="herobanner">
                    <div className="overlay"></div>
                    <div className="herobanner_content">
                        <h1>TRAVEL SERIES &amp; VIDEOS</h1>
                        <h2>Celebrate global style, beauty and culture.</h2>
                    </div>
                </div>
                <Container>
                    <section className="section1">
                        <h3 className="text-center">GEOCHIC TRAVEL SERIES &amp;<br /> VIDEOS</h3>
                        <div className="sub_text">
                            <p className="mb-4">Experience the thrill of globe-hopping in this chic travel series that celebrates global style, beauty and culture. Fractional NFTs allow our fans to become co-owners, co-hosts or Executive Producers of our episodes. Fall in love with Cape Town, Naples, Beirut, Cap-Haitien, Medellin, Rio de Janeiro, Hanoi, Paris, Brooklyn, New Orleans, London, Mumbai, Kingston, Berlin, Rome…</p>
                            <p className="mb-0">Ralph Clermont reimagines the travel documentary in a fresh, sleek, format that brings together all the unifying elements of global culture – fashion, music, food, art, design, etc. with the aesthetics and sensibility that have garnered GEOCHIC so many fans. Dazzling cinematography, music from local musicians and fabulous local models wearing traditional clothing imbue GEOCHIC with a style, authenticity, and sex appeal that attracts a much broader, trendier audience than typical travel shows.
                            </p>
                        </div>
                    </section>
                    <section className="full_video_wrap">
                        <ReUsableReactPlayer url={"https://www.youtube.com/watch?reload=9&v=NS16qolACpo"} className="video1_poster" playIcon={playIconWhite} pauseIcon={pauseIconWhite} iconClass="play_icon" />
                    </section>
                    <div className="sub_text">
                        <p>Each episode shines a spotlight on the most interesting local musicians, chefs, artists, designers, celebrities, influencers and activists to give you a true flavor of what life is like in the most exciting destinations around the world. GEOCHIC offers a bold, new perspective on arts and culture, media and entertainment, politics and social issues.</p>
                        <p className="bold_italic">Our viewers have responded so eloquently, “GEOCHIC is all the cool stuff.” “It’s the secret sauce.” “It’s next-level! A city should pay to produce this for their PR.” “GEOCHIC doesn’t need to rely on a celebrity host, a wannabe celebrity host, or senseless antics to engage the audience, your programming speaks for itself.”</p>
                    </div>
                </Container>
                <section className="video_row_wrap container-fluid">
                    <Row>
                        <Col lg={6} className="p-0">
                            <div className="video1_wrap">
                                <ReUsableReactPlayer url={"https://vimeo.com/127718773"} className="video2_poster" playIcon={playIconDark} pauseIcon={pauseIconDark} iconClass="play_icon_top_right" />
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="video2_wrap">
                                <ReUsableReactPlayer url={"https://vimeo.com/139592122"} className="video3_poster" playIcon={playIconWhite} pauseIcon={pauseIconWhite} iconClass="play_icon_top_right" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} className="offset-lg-1">
                            <div className="comming_soon">
                                <h3>COMING SOON IN 2023</h3>
                                <div className="sub_text text-start">
                                    Instead of the typical documentary format featuring a host conducting interviews, GEOCHIC will produce actual travel movies starring local actors. We'll mix fashion, music, food and art with romance, drama, comedy and adventure to provide an authentic local perspective that take our viewers on exhilarating journeys, introduce them to heartfelt experiences and tell them stories never before told.
                                </div>
                            </div>
                        </Col>
                    </Row>

                </section>
            </div>
        </>
    )
}

export default TravelPage