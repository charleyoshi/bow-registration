import React, { useEffect, useState } from "react";
import { TopNavbar } from "../../components/layout/TopNavbar";
import "./Enquire.css";
import { useOutletContext } from "react-router-dom";
import InquiryForm from "../../components/input/form/InquiryForm";

export default function Enquire(props) {
    const contexts = useOutletContext();
    var sendEnquiry

    if (props.sendEnquiry == null){
        sendEnquiry = contexts[8]
    } else {
        sendEnquiry = props.sendEnquiry
    }


    return (
        <>
            <br /><br /><br /><br /><br /><br />
            <InquiryForm sendEnquiry={sendEnquiry} />
            <br /> <br /><br /><br /> <br /><br />
        </>
    );
}
