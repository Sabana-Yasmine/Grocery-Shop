import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Acccount' , '2', <DesktopOutlined />),
  //getItem('Categories', '3', <ContainerOutlined />),
  getItem('Categories', 'sub1', <MailOutlined />, [
    getItem('Fruits', '5'),
    getItem('Vegetables', '6'),
    getItem('Provisions', '7'),
    getItem('Dairy', '8'),
  ]),
  getItem('Beauty Store', 'sub2', <AppstoreOutlined />, [
    getItem('Face', '9'),
    getItem('Body', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Wishlist', '13', <PieChartOutlined />),
  getItem('Cart' , '14', <DesktopOutlined />),
  getItem('Offers', '15', <PieChartOutlined />),
  getItem('Help' , '16', <DesktopOutlined />),
  getItem('settings', '17', <PieChartOutlined />),
  getItem('Logout' , '18', <DesktopOutlined />),


];
const Dash = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Dash;