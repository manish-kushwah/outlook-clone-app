import React, { Fragment } from "react";

const emailBody = () => {
  return (
    <Fragment>
      <section className="email-body li-body">
        <div className="avatar">F</div>
        <div>
          <header>Subject</header>
          <span>date time</span>
          <br />
          <br />
          <span>email body</span>
        </div>
      </section>
    </Fragment>
  );
};

export default emailBody;
