import { useEffect, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { useFetch } from "../../Hooks/useRss";
import TimeSeries from "../TimeSeries/TimeSeries";
import Element from "./Element";
var RssView = ({ link, title, desc }: props) => {
  console.log("LINK",link)
  const [error, loading, data] = useFetch(link);

  console.log(data)
  // if (error) return <div>error</div>;
  // if (loading) return <div>loading</div>;

  const rss:any = link.split("/")[3];

  let twitters:any = {
    lords: "UKHouseofLords",
    senate: "SenateFloor",
    president: "POTUS",
    commons: "HouseofCommons",
    house: "housefloor",
  };

  let usp = [
    {
      key: "1",
      title:
        "H.R.4476(RFS) - DHS Trade and Economic Security Council Act of 2021",
      content:
        "H.R. 4476 established in the Department of Homeland Security (DHS) Trade andEconomic Security Council . Council will provide to the Secretary advice and recommendations on matters of trade and economic security .",
      link: "https://www.govinfo.gov/content/pkg/BILLS-117hr4476rfs/html/BILLS-117hr4476rfs.htm",
    },
  ];

  let ukc = [
    {
      key: "1",
      title: "Police, Crime, Sentencing and Courts Bill",
      content:
        "A Bill to make provision about the police and other emergency workers; to make provision about collaboration between authorities to prevent and reduce serious violence; to make provision about offensive weapons homicide reviews; to make provision for new offences and for the modification of existing offences; to make provision about the powers of the police and other authorities for the purposes of preventing, detecting, investigating or prosecuting crime or investigating other matters; to make provision about the maintenance of public order; to make provision about the removal, storage and disposal of vehicles; to make provision in connection with driving offences; to make provision about cautions; to make provision about bail and remand; to make provision about sentencing, detention, release, management and rehabilitation of offenders; to make provision about secure 16 to 19 Academies; to make provision for and in connection with procedures before courts and tribunals; and for connected purposes.",
      link: "https://bills.parliament.uk/bills/2839",
    },
    {
      key: "1",
      title: "Judicial Review and Courts Bill",
      content:
        "A Bill to Make provision about the provision that may be made by, and the effects of, quashing orders; to make provision restricting judicial review of certain decisions of the Upper Tribunal; to make provision about the use of written and electronic procedures in courts and tribunals; to make other provision about procedure in, and the organisation of, courts and tribunals; and for connected purposes.",
      link: "https://www.govinfo.gov/content/pkg/BILLS-117hr4476rfs/html/BILLS-117hr4476rfs.htm",
    },
  ];

  var tempData: any = usp;
  var items = [];

  console.log(link.split("/")[4]);

  if (link === "president") tempData = usp;
  if (link === "commons") tempData = ukc;

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
                dataSource={{
                  sourceType: "profile",
                  screenName: twitters[rss],
                }}
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
            dataSource={{ sourceType: "profile", screenName: twitters[rss]}}
            options={{
              chrome: "noheader, nofooter",
              theme: "dark",
              background: "#161719",
              width: "500",
              height: "600",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RssView;

interface props {
  link: string;
  title: string;
  desc: string;
}
