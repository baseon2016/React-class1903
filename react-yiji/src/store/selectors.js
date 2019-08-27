import React from "react";
const dataRemake = onShow => {
  return (
    <ul className="list">
      {onShow.map(ele => {
        return (
          <li key={ele.id} className="item po-r">
            <img src={ele.url} alt=""></img>
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
          </li>
        );
      })}
    </ul>
  );
};
export { dataRemake };
