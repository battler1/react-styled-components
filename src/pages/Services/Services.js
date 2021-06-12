import React from "react";
import { InfoSection } from "../../components";
import { homeObjThree, homeObjTwo } from "../HomePage/Data";

const Services = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Services;
