import React from "react";

export default function Search() {
  return (
    <>
      <label for="city" className="label-city">
        <input type="text" name="city" className="city"></input>
      </label>
      <button className="btn-search">FIND WEATHER</button>
    </>
  );
}
