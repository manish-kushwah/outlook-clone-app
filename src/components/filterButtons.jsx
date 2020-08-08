import React, { Fragment } from "react";

const filterButtons = () => {
  return (
    <Fragment>
      <section className="filter-button">
        <section>
          Filter By : <button className="unread">Unread</button>
          <button className="read">Read</button>
          <button className="favorite">Favorites</button>
        </section>
      </section>
    </Fragment>
  );
};

export default filterButtons;
