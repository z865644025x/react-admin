import React from 'react';
import styles from "./index.module.less";

export const RouterDemo: React.FC = (props) => {
  console.log(props);
  return (
    <div className={styles.nameColor}>
      routerDom
      {props.children}
    </div>
  )
}