import React from "react";

const List = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((r) => (
        <div key={r.PhoneNumber}>
          <a href={r.Website}>{r.name}</a>
          <br />
          {r.PhoneNumber}
          <br />
          {r.Address.formattedAddress}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default List;
