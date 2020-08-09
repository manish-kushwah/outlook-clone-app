import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmails } from "../state/actions/dashboardActions";

const emailList = (props) => {
  useEffect(() => {
    props.fetchEmails();
  }, []);

  if (!props.emails) {
    return "loading...";
  }

  const openCopleteMail = () => {
    const element = document.getElementsByClassName("email-body");
    if (element[0].style.display != "none") {
      element[0].style.display = "none";
    } else {
      element[0].style.display = "";
    }
  };

  const listItem = props.emails.list.map((email) => (
    <li key={email.id} className="li-body" onClick={openCopleteMail}>
      <div className="avatar">F</div>
      <div className="mailer-info">
        <span>From : {email.from.name}</span>
        <br />
        <span>Subject : {email.subject}</span>
        <br />
        <span>{email.short_description}</span>
        <br />
        <span>{new Date(email.date).toLocaleString().slice(0, 28)}</span>
      </div>
    </li>
  ));

  return (
    <Fragment>
      <section className="email-list">
        <ul>{listItem}</ul>
      </section>
    </Fragment>
  );
};

export default connect((state) => ({ emails: state.emails.items }), {
  fetchEmails,
})(emailList);
