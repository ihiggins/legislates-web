import { useEffect, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { useFetch } from "../../Hooks/useRss";
import TimeSeries from "../TimeSeries/TimeSeries";
import Element from "./Element";
var RssView = ({ link, title, desc }: props) => {
  // console.log("LINK", link);
  const rss: any = link.split("/")[3];

  const [error, loading, data] = useFetch(`${process.env.REACT_APP_API}/rss/${rss}`);
  console.log('DATA',data)
  // if (error) return <div>error</div>;
  // if (loading) return <div>loading</div>;

  let twitters: any = {
    lords: "UKHouseofLords",
    senate: "SenateFloor",
    president: "POTUS",
    commons: "HouseofCommons",
    house: "housefloor",
  };

  let usp: any = [];

  let ush = [
    {
      key: "1",
      title:
        "Brown v. Board of Education National Historic Site Expansion Act (04/26/2022 legislative day)",
      content:
        "The Brown v. Board of Education National Historic Site established by section 103(a) of Public Law 102-525 (106 Stat3439) shall be known and designated as the ``Brown v.Board of henyEducation National Historical Park'' The Brown case was joined by 4 other cases relating to school segregation pending before the Supreme Court .",
      link: "https://www.congress.gov/117/bills/s270/BILLS-117s270es.htm",
    },
    {
      key: "2",
      title:
        "Small Business Advocacy Improvements Act of 2022 (04/26/2022 legislative day)",
      content:
        "H R. R. 6454 is reported in House (RHlt; DOC&gt) The bill would clarify the primary functions and duties of the Office of Advocacy of the Small Business Administration .",
      link: "https://www.congress.gov/117/bills/hr6454/BILLS-117hr6454rh.htm",
    },

    {
      key: "3",
      title:
        "One Stop Shop for Small Business Compliance Act of 2021 (04/26/2022 legislative day)",
      content:
        "The Small Business Act may be cited as the ``One Stop Shop for Small Business  Compliance Act of 2021 . The Ombudsman shall maintain a publicly available website that includes hyperlinks to small entity compliance guides described under section 212 of the Small BusinessRegulatory Enforcement Fairness Act of 1996 .",
      link: "https://www.congress.gov/117/bills/hr4877/BILLS-117hr4877rh.htm",
    },

    {
      key: "4",
      title:
        "SCORE for Small Business Act of 2022 (04/26/2022 legislative day)",
      content:
        " H.R. 6450 Reported in House (RHlt; DOC&gt Union Calendar No. 187) H. R. 64 50: To amend Small Business Act to reauthorize the SCORE program .",
      link: "https://www.congress.gov/117/bills/hr6450/BILLS-117hr6450rh.htm",
    },
    {
      key: "5",
      title:
        "Women’s Business Centers Improvement Act of 2022 (04/26/2022 legislative day)",
      content: ` H.R. 6441 Reported in House (RHlt;DOC&gtUnion Calendar No. 188) H. R. 6442: To amend the Small Business Act to improve the women's business centerprogram, and for other purposes . The bill is passed by the House and House of Representatives of the U.S. in Congress assembled . H R 6441: "Women's Business Centers Improvement  (A) for the benefit of small business concernsowned and controlled by women" The bill was passed by a House and the Senate of Representatives on January 20, 2022 .`,
      link: "https://www.congress.gov/117/bills/hr6441/BILLS-117hr6441rh.xml",
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

  let ukl = [
    {
      key: "1",
      title: "Monken Hadley Common Bill",
      content:
        "A Bill to transfer the ownership and management of Monken Hadley Common to Monken Hadley Common Trust and for related purposes.",
      link: "https://bills.parliament.uk/bills/2519",
    },
    {
      key: "2",
      title: "Highgate Cemetery Act",
      content:
        "A Bill to confer powers upon the Friends of Highgate Cemetery Trust to operate, maintain and improve Highgate Cemetery and to extinguish rights of burial and disturb human remains in Highgate Cemetery for the purpose of increasing the space for interments and the improvement of Highgate Cemetery; and for connected purposes.",
      link: "https://bills.parliament.uk/bills/2518",
    },
  ];

  var tempData: any = usp;
  var items = [];

  if (rss === "president") tempData = usp;
  if (rss === "commons") tempData = ukc;
  if (rss === "house") tempData = ush;
  if (rss === "lords") tempData = ukl;

  if (data.length > 0) {
    tempData = data;
  }

  console.log(data, tempData)
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
            dataSource={{ sourceType: "profile", screenName: twitters[rss] }}
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
