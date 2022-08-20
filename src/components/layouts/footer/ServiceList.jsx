import React from "react";
import ServiceListItem from "./ServiceListItem";
import {
  serviceListDatas1,
  serviceListDatas2,
  serviceListDatas3,
  serviceListDatas4,
  serviceListDatas5,
} from "../../../datas/layouts/footerDatas";

const ServiceList = () => {
  return (
    <div className="flex justtify-between h-3/5">
      <ServiceListItem serviceListDatas={serviceListDatas1} />
      <ServiceListItem serviceListDatas={serviceListDatas2} />
      <ServiceListItem serviceListDatas={serviceListDatas3} />
      <ServiceListItem serviceListDatas={serviceListDatas4} />
      <ServiceListItem serviceListDatas={serviceListDatas5} />
    </div>
  );
};

export default ServiceList;
