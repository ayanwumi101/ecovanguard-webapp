import React, { Suspense } from "react";
import Loader from "../loader";

const withLazyComponent = (LazyComponent) => {
  return (restProps) => (
      <Suspense fallback={<Loader />}>
        <LazyComponent {...restProps} />
      </Suspense>
  );
};
export default withLazyComponent;
