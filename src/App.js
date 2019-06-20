import React from 'react';
import { Tabs, Layout } from 'antd';

import 'antd/dist/antd.css';

import Users from './components/Users';

const { TabPane } = Tabs;
const { Content } = Layout;

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <Content style={{ padding: 40 }}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Simulator" key="1">
          <Users />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default App;
