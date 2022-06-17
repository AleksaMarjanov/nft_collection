// import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Audio } from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <div>
//       <Audio height="100" width="100" color="red" ariaLabel="Loading..." />
//     </div>
//   );
// };

// export default Loader;

import React from "react";
import { GooeyLoader1 } from "react-loaders-kit";
import Typed from "react-typed";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 150,
    duration: 2,
    colors: ["#60c657", "#35aae2"],
  };

  return (
    <div className="loader">
      <GooeyLoader1 {...loaderProps} />
      <Typed
        className="loader-text"
        strings={["Mining..."]}
        typeSpeed={60}
        backSpeed={0}
      />
    </div>
  );
}

export default Loader;
