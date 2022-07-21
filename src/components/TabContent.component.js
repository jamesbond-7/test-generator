import Steps from "./Steps.component";

const TabContent = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="px-4 py-5 flex-auto">
        <div className="tab-content tab-space">
          <Steps />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
