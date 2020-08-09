import React, { Fragment, useState, useEffect } from "react";

const emailBody = () => {
  const [email, setEmail] = useState({});

  useEffect(() => {
    (async function () {
      const data = await fetch(
        "https://ll.bhagirathsingh.vercel.app/api/email?id=1"
      ).then((res) => res.json());

      setEmail(data);
    })();
  }, []);

  return (
    <Fragment>
      <section className="email-body li-body" style={{ display: "none" }}>
        <div className="avatar">F</div>
        <div>
          <header>Subject</header>
          <span>date time</span>
          <br />
          <br />
          <span id={email.id} className="email-body-text">
            {email.body}
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default emailBody;
