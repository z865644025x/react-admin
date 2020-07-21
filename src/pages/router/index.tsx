import React from 'react';
// import { useHistory } from "react-router-dom";
// import "./index.less"
import styles from "./index.module.less";

export const RouterDemo: React.FC = () => {
  // const history = useHistory();
  // console.log(history);
  // let arr: any = history.location.state;
  return (
    <div className={styles.nameColor}>
      {/* <span className="nameColor">{arr.name}</span> */}
      {/* <span>{arr.name}</span> */}
    </div>
  )
}