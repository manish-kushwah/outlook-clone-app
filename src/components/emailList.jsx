import React, { Fragment, useState, useEffect } from "react";
import { getEmailList } from "../api";

const emailList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { list } = await getEmailList();
      setData(list);
    })();
  }, []);

  const listItem = data.map((email) => (
    <li key={email.id} className="li-body">
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

  if (!data.length) {
    return "loading...";
  }

  return (
    <Fragment>
      <section className="email-list">
        <ul>{listItem}</ul>
      </section>
    </Fragment>
  );
};

export default emailList;
