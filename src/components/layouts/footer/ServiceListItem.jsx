import React from "react";
import { Link } from "react-router-dom";

const ServiceListItem = ({ serviceListDatas }) => {
  return (
    <div className="w-1/5 h-full p-4">
      <div className="mt-8 mb-6 text-white">{serviceListDatas.title}</div>
      {serviceListDatas.content.map((serviceListData, index) => (
        <li key={index} className="text-sm my-2" style={{ color: "#929a9d" }}>
          <Link to="!#">{serviceListData}</Link>
        </li>
      ))}
    </div>
  );
};

export default ServiceListItem;
