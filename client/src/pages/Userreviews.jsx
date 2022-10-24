import { Fragment } from "react";
import List from "./ownPosts/List";

const Userreviews = ({ setAuth }) => {
  return (
    <Fragment>
      <List setAuth={setAuth} />
    </Fragment>
  );
};

export default Userreviews;
