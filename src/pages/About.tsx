import { FC } from "react";
import { Helmet } from "react-helmet";

export const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h1 data-testid="page-title">About</h1>
      <p>This is an example application.</p>
      <p>New paragraph 1<</p>
      <p>New paragraph 2</p>
      <p>New paragraph 3</p>
    </>
  );
};
