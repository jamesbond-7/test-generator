import { useContext } from "react";
import { actionTypes, StoreContext } from "../context/store-context";

const TabLinks = () => {
  const numTabs = [...Array(5).keys()];
  const { state, dispatch } = useContext(StoreContext);
  return (
    <ul
      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
      role="tablist"
    >
      {numTabs.map((el) => (
        <li key={el} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (state.openTab === el
                ? "text-white bg-teal-600"
                : "text-teal-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: actionTypes.SET_OPEN_TAB,
                payload: el,
              });
            }}
            data-toggle="tab"
            href={`#link${el}`}
            role="tablist"
          >
            <i className="fas fa-space-shuttle text-base mr-1"></i> Tab
            {el + 1}
          </a>
        </li>
      ))}
      ;
    </ul>
  );
};

export default TabLinks;
