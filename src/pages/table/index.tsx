import React from 'react';
import { Table } from "antd";

export const TableBox: React.FC = () => {

  interface User {
    key: number;
    name: string;
  }

  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    }
  ];

  const createDataList = (num: number) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push({
        key: i,
        name: 'wang_' + i
      })
    }
    return arr
  }

  const data: User[] = createDataList(30);

  return (
    <Table<User>
      style={{
        padding: 30
      }}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 500 }} />
  )
}