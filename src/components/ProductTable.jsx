import React from "react";
import { Form, InputNumber, Input } from "antd";

const ProductTable = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "Product",
      key: "Product",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
  ];

  return <div>ProductTable</div>;
};

export default ProductTable;
