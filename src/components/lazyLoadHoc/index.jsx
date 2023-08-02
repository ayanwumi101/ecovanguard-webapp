import React, { Suspense } from "react";
import Loader from "../loader";
import ErrorBoundary from "../ErrorBoundary";

const withLazyComponent = (LazyComponent) => {
  return (restProps) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LazyComponent {...restProps} />
      </Suspense>
    </ErrorBoundary>
  );
};
export default withLazyComponent;
