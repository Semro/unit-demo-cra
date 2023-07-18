import { FC } from "react";
import { Helmet } from "react-helmet";

export const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h1 data-testid="page-title">Nope</h1>
      <p>This is an example application.</p>
      {Array(3).fill(0).map((_, i) => <p>New paragraph {i}</p>)}
    </>
  );
};
