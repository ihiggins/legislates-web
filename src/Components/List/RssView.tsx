import { useEffect, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { useFetch } from "../../Hooks/useRss";
import TimeSeries from "../TimeSeries/TimeSeries";
import Element from "./Element";
var RssView = ({ link, title, desc }: props) => {
  const [error, loading, data] = useFetch(link);

  // if (error) return <div>error</div>;
  // if (loading) return <div>loading</div>;

  let tempData: any = [
    {
      key: "1",
      title:
        "H.R.4476(RFS) - DHS Trade and Economic Security Council Act of 2021",
      content:
        "H.R. 4476 established in the Department of Homeland Security (DHS) Trade andEconomic Security Council . Council will provide to the Secretary advice and recommendations on matters of trade and economic security .",
      link: "https://www.govinfo.gov/content/pkg/BILLS-117hr4476rfs/html/BILLS-117hr4476rfs.htm",
    },
  ];

  var items = [];
  for (var i in tempData) {
    items.push(
      <Element
        key={i}
        title={tempData[i].title}
        content={tempData[i].content}
        link={tempData[i].link}
        bullets={tempData[i].news}
      />
    );
  }

  return (
    <div className="rss-view">
      <div className="rss-inner">
        <div className="rss-title">
          <h1 className="rss-header"> {title}</h1>
          <h2 className="rss-desc">{desc}</h2>
        </div>
        <div className="rss-elem">
          {" "}
          <h3 className="sub-header">Feed Activity</h3>
        </div>
        <TimeSeries />

        <div className="rss-elem">
          {" "}
          <h3 className="sub-header">New On the Feed Today</h3>
        </div>

        {items.length === 0 ? <div>Nothing Today.</div> : items}

        {window.innerWidth < 1000 && (
          <div className="rss-elem">
            {" "}
            <h3 className="sub-header">Twitter</h3>
            <div className="rss-twitter">
              <Timeline
                dataSource={{ sourceType: "profile", screenName: "POTUS" }}
                options={{
                  chrome: "noheader, nofooter",
                  theme: "dark",
                  width: "700",
                  height: "600",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {window.innerWidth > 1000 && (
      <div className="rss-twitter">
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "POTUS" }}
          options={{
            chrome: "noheader, nofooter",
            theme: "dark",
            background: "#161719",
            width: "500",
            height: "600",
          }}
        />
      </div> )}
    </div>
  );
};

export default RssView;

interface props {
  link: string;
  title: string;
  desc: string;
}
