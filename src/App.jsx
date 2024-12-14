import React from "react";
import { Form, Select, DatePicker, Checkbox, Button, Flex } from "antd";
import ProductTable from "./components/ProductTable";
import dayjs from "dayjs";

const App = () => {
  const [form] = Form.useForm();

  return (
    <div className="rounded border border-solid border-gray-300 md:m-5 m-8">
      <div className="p-5 bg-[#FAFBFE] ">
        <h4>Add Sales</h4>
      </div>
      <div className="px-5">
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-x-5 justify-items-start">
            <Form.Item
              label="Customer"
              name="Customer"
              className="sm:w-full w-[300px] md:max-w-[300px]"
            >
              <Select placeholder="Choose" />
            </Form.Item>
            <Form.Item
              label="Order Date"
              name="Order_Date"
              className="sm:w-full w-[300px] md:max-w-[300px]"
              initialValue={dayjs()}
              rules={[
                { required: true, message: "Kindly choose the order date" },
              ]}
            >
              <DatePicker
                format="DD-MMM-YYYY"
                className="sm:w-full w-[300px] md:max-w-[300px]"
              />
            </Form.Item>
            <Form.Item
              label="Sales Person"
              name="Sales_Person"
              className="sm:w-full w-[300px] md:max-w-[300px]"
              rules={[
                { required: true, message: "Kindly choose the sales person" },
              ]}
            >
              <Select placeholder="Choose" />
            </Form.Item>
            <Form.Item
              label="Branch"
              name="Branch"
              className="sm:w-full w-[300px] md:max-w-[300px]"
              rules={[{ required: true, message: "Kindly select the branch" }]}
            >
              <Select placeholder="Choose" />
            </Form.Item>
            <Form.Item
              name="Home_Delivery"
              valuePropName="checked"
              layout="horizontal"
              className="justify-self-start md:self-center"
            >
              <Checkbox>Home Delivery</Checkbox>
            </Form.Item>
          </div>
          <ProductTable />
          <Flex justify="end" gap="large">
            <Form.Item label={null}>
              <Button className="w-28">Reset</Button>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className="w-28">
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </div>
    </div>
  );
};

export default App;
