import React from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Layout/Header";
import phone from "./../assets/images/icon-phone.svg";
import email from "./../assets/images/icon-email.svg";
import person from "./../assets/images/icon-person.svg";


const ContactPage = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="contact_page_wrap">
                    <h1 className="mb-4 mb-lg-5">Contact Us Info</h1>
                    <div className="contact_page">
                        <h3 className="mb-4 mb-lg-5">Under Construction</h3>
                        <div className="data_row">
                            <img src={person} alt="" />
                            <div className="data_row_detail">
                                <small>Contact</small>
                                <p>Ralph Clermont</p>
                            </div>
                        </div>
                        <div className="data_row">
                            <img src={email} alt="" />
                            <div className="data_row_detail">
                                <small>Email</small>
                                <p>geochicmag@gmail.com</p>
                            </div>
                        </div>
                        <div className="data_row">
                            <img src={phone} alt="" />
                            <div className="data_row_detail mt-0">
                                <small>Phone</small>
                                <p>(786) 253-5150</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ContactPage