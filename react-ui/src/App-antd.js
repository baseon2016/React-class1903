import React from "react";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";
import { Button, DatePicker, Skeleton } from "antd";
import { ConfigProvider } from "antd";
import { Pagination } from "antd";
import enUS from "antd/es/locale/en_US";
import koKR from "antd/es/locale/ko_KR";
function App() {
  const myConfig = {
    autoInsertSpaceInButton: true,
    locale: { koKR }
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  var loading = true;
  // const showSkeleton = () => {
  //   loading: true;
  //   setTimeout(() => {
  //     loading: false;
  //   }, 3000);
  // };
  return (
    <ConfigProvider {...myConfig}>
      <div className="App">
        <h1>UI 插件测试</h1>
        <Button type="primary">按钮</Button>
      </div>
      <DatePicker onChange={onChange} />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={100}
        // pageSize={5}
      />

      <div className="article">
        <Skeleton loading={loading} active avatar paragraph={{ rows: 10 }}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          </div>
        </Skeleton>
        <Button disabled={loading}>Show Skeleton</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
