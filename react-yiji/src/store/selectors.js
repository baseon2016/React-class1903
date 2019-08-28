import React from "react";
import { Link } from "react-router-dom";
const dataRemake = onShow => {
  return (
    <ul className="list">
      {onShow.map(ele => {
        return (
          <li key={ele.id} className="item po-r">
            <Link to={`/article-detail/${ele.id}`}>
              <img className="title-img" src={ele.url} alt=""></img>
              <div className="item-func po-a df">
                <span className="iconfont iconshare"></span>
                <div className="df">
                  <span>
                    <span className="iconfont iconxin"></span>
                    {ele.likes}
                  </span>
                  <span>
                    <span className="iconfont iconkanguos"></span>
                    {ele.views}
                  </span>
                  <span>
                    <span className="iconfont iconpinglun"></span>
                    {ele.comments}
                  </span>
                </div>
              </div>
              {ele.deadline === undefined ? (
                ""
              ) : (
                <div className="item-day po-a">
                  {ele.deadline === -1 ? (
                    <span className="over">已结束</span>
                  ) : (
                    <span className="day-info">剩余{ele.deadline}天</span>
                  )}
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
const dataToTags = data => {
  const dataLeft = [];
  const dataRight = [];
  data.forEach((ele, ind) => {
    if (ind % 2) {
      dataRight.push(ele);
    } else {
      dataLeft.push(ele);
    }
  });
  return (
    <div className="splits df">
      <div className="split">
        {dataLeft.map(ele => (
          <div key={ele.id}>
            <img src={ele.url} alt=""></img>
          </div>
        ))}
      </div>
      <div className="split">
        {dataRight.map(ele => (
          <div key={ele.id}>
            <img src={ele.url} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
};
const collectionAll = (collection, mergeData) => {
  return collection.map(ele => mergeData.find(item => item.id === ele));
};
const collectionType = (collection, type) => {
  return collection.filter(ele => ele.type === type);
};
export { dataRemake, dataToTags, collectionType, collectionAll };
