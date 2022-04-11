import React from "react";
import "./Table.scss";

export default function Table({ name }) {
  return (
    <table className="Table">
      <th className="TableHead">
        <span className="TableHeadName">{name}</span>
        <span className="TableHeadButton">Buy New</span>
      </th>
      <tr className="TableRow">
        <span className="TableRowLeft">name</span>
        <span className="TableRowRight">
          <span className="TableRowRightOne">one</span>
          <span className="TableRowRightTwo">12%</span>
        </span>
      </tr>
      <tr className="TableRow">
        <span className="TableRowLeft">name</span>
        <span className="TableRowRight">
          <span className="TableRowRightOne">one</span>
          <span className="TableRowRightTwo">12%</span>
        </span>
      </tr>
      <tr className="TableRow">
        <span className="TableRowLeft">name</span>
        <span className="TableRowRight">
          <span className="TableRowRightOne">one</span>
          <span className="TableRowRightTwo">12%</span>
        </span>
      </tr>
      <tr className="TableRow">
        <span className="TableRowLeft">name</span>
        <span className="TableRowRight">
          <span className="TableRowRightOne">one</span>
          <span className="TableRowRightTwo">12%</span>
        </span>
      </tr>
      <tr className="TableRow">
        <span className="TableRowLeft">name</span>
        <span className="TableRowRight">
          <span className="TableRowRightOne">one</span>
          <span className="TableRowRightTwo">12%</span>
        </span>
      </tr>
    </table>
  );
}
