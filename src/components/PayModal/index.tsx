import React, { useState } from 'react';
import { Drawer, Card, InputItem, Button, WhiteSpace } from 'antd-mobile';
import styles from './index.less';

interface Props {
  showPay: boolean;
  onOpenChange: Function;
}

const payFor = () => {
  console.log('payFor'); //sy-log
};

const sidebar = (
  <Card>
    <Card.Header title="付款详情" />
    <Card.Body>
      <InputItem type="phone" placeholder="请输入手机号" />
      <div className="xyCenter">
        <InputItem type="number" maxLength={6} placeholder="请输入6位验证码" />
        <Button>发送验证码</Button>
      </div>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={payFor}>
        立即付款
      </Button>
    </Card.Body>
  </Card>
);

const PayModal: React.FC<Props> = ({ showPay, onOpenChange }) => {
  return (
    <Drawer
      className="my-drawer"
      position="bottom"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{
        color: '#A6A6A6',
        textAlign: 'center',
        paddingTop: 42,
      }}
      sidebar={sidebar}
      open={showPay}
      onOpenChange={onOpenChange}
      children={<div></div>}
    ></Drawer>
  );
};

export default PayModal;