/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from "antd";

export const Home: React.FC = () => {
  return (
    <div>
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Shou
      </Card>
    </div>
  )
}