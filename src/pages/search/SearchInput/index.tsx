import React, { useEffect, useRef, useState } from 'react';
import { Link, history } from 'umi';
import { Card, Button, InputItem } from 'antd-mobile';
import styles from './index.less';

export default function SearchInput() {
  const searchbar = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    // console.log('hahh', focus); //sy-log
    searchbar.current.focus();
  }, []);
  const goHome = () => {
    history.push('/');
  };
  return (
    <Card full className={styles.main}>
      {/* <i className="iconfont icon-sousuo" /> */}
      <Button className={styles.btn} onClick={goHome}>
        宝贝
      </Button>

      <InputItem
        ref={searchbar}
        className={styles.searchBar}
        // placeholder="寻找宝贝"
        maxLength={100}
      />

      <Button className={styles.btn} onClick={goHome}>
        取消
      </Button>

      {/* <SearchBar
        ref={searchbar}
        className={styles.searchBar}
        placeholder="寻找宝贝"
        maxLength={100}
      /> */}
      {/* <SearchBar
        ref={searchbar}
        className={styles.searchBar}
        placeholder="寻找宝贝"
        showCancelButton
        maxLength={100}
      /> */}
    </Card>
  );
}