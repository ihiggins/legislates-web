import Nav from "./Components/Nav/Nav";
import SideNav from "./Components/Nav/SideNav";
import RssView from "./Components/List/RssView";
import Layout from "./Components/Layout";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import AllView from "./Components/AllView";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Layout>
        <SideNav />
        <Routes>
          <Route path="/" element={<AllView />} />
          <Route
            path="/president"
            element={
              <RssView
                title="Bills Presented to the President"
                desc="When a piece of legislation that requires the President's signature to become law passes Congress, this feed will alert you that the legislation has been submitted to the President for his or her signature."
                link={`${process.env.REACT_APP_API}/president`}
              />
            }
          />
          <Route
            path="/senate"
            element={
              <RssView
                title="On the Senate Floor Today."
                desc="Legislation brought to the floor of the United States Senate."
                link={`${process.env.REACT_APP_API}/senate`}
              />
            }
          />
          <Route
            path="/house"
            element={
              <RssView
                title="On the House Floor Today."
                desc="Legislation brought to the floor of the United States House of Representatives."
                link={`${process.env.REACT_APP_API}/house`}
              />
            }
          />
          <Route
            path="/commons"
            element={
              <RssView
                title="The House of Commons Bills"
                desc="A list of up of most recent public bills for the current session of The House of Commons"
                link={`${process.env.REACT_APP_API}/commons`}
              />
            }
          />
          <Route
            path="/lords"
            element={
              <RssView
                title="The House of Lords Bills"
                desc="The House of Lords, formally The Right Honourable the Lords Spiritual and Temporal of the United Kingdom of Great Britain and Northern Ireland in Parliament assembled, also known as the House of Peers, is the upper house of the Parliament of the United Kingdom."
                link={`${process.env.REACT_APP_API}/lords`}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
