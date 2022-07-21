// import { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/store-context";
import StepFive from "./StepFive.component";
import StepFour from "./StepFour.component";
import StepOne from "./StepOne.component";
import StepThree from "./StepThree.component";
import StepTwo from "./StepTwo.component";
// import StepWrapper from "./StepWrapper.component";

const Steps = () => {
  const {
    state: { openTab },
  } = useContext(StoreContext);
  return (
    <div className="px-4 py-5 flex-auto">
      <div className="tab-content tab-space">
        <div
          className={openTab === 0 ? "block" : "hidden"}
          id={`link${openTab}`}
        >
          <StepOne />
        </div>

        <div
          className={openTab === 1 ? "block" : "hidden"}
          id={`link${openTab}`}
        >
          <StepTwo />
        </div>

        <div
          className={openTab === 2 ? "block" : "hidden"}
          id={`link${openTab}`}
        >
          <StepThree />
        </div>

        <div
          className={openTab === 3 ? "block" : "hidden"}
          id={`link${openTab}`}
        >
          <StepFour />
        </div>

        <div
          className={openTab === 4 ? "block" : "hidden"}
          id={`link${openTab}`}
        >
          <StepFive />
        </div>
      </div>
    </div>
  );
};

export default Steps;
