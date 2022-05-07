import HomeElement from "./List/HomeElement";
import { useFetch } from "../Hooks/useRss";

const AllView = () => {
  return (
    <div className="rss-view">
      <div className="rss-inner">
        <div className="rss-title">
          <h1 className="rss-header">Legislative News</h1>
        </div>

        <RssViewSingle
          link={`${process.env.REACT_APP_API}/news/president`}
          title="US President"
          desc="News about the US President."
          redir="/president"
        />
        <RssViewSingle
          link={`${process.env.REACT_APP_API}/news/senate`}
          title="US Senate"
          desc="News about the US Senate."
          redir="/senate"
        />
        <RssViewSingle
          link={`${process.env.REACT_APP_API}/news/house`}
          title="US House"
          desc="News about the US House"
          redir="/house"
        />

        <RssViewSingle
          link={`${process.env.REACT_APP_API}/news/commons`}
          title="UK House of Commons"
          desc="The UK public elects 650 Members of Parliament (MPs) to represent their interests and concerns in the House of Commons."
          redir="/commons"
        />
        <RssViewSingle
          link={`${process.env.REACT_APP_API}/news/lords`}
          title="UK House of Lords"
          desc="The House of Lords is the second chamber of UK Parliament."
          redir="/lords"
        />
      </div>
    </div>
  );
};

var RssViewSingle = ({ link, title, desc, redir }: props) => {
  const [error, loading, data] = useFetch(link);

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  var bullets = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].title !== "") {
      bullets.push({
        pub: data[i].pub,
        title: data[i].title,
        url: data[i].url,
      });
    }
  }

  return (
    <HomeElement title={title} content={desc} link={redir} bullets={bullets} />
  );
};

interface props {
  link: string;
  title: string;
  desc: string;
  redir: string;
}

export default AllView;
