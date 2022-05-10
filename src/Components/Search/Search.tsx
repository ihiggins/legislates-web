//@ts-nocheck
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Styles.module.scss";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";

import { useQuery } from "../../Hooks/useQuery";
import ButtonBase from "@mui/material/ButtonBase";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <ButtonBase className={styles.search} onClick={handleOpen}>
        <SearchIcon />
        <div>Search for a bill</div>
      </ButtonBase>

      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.content}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={query}
            autoFocus={true}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
            autocomplete="off"
            placeholder="Search for a bill"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon className={styles.icon} />
              </InputAdornment>
            }
          />
          <Divider variant="middle" />
          <div className={styles.list}>
            {query.length > 2 && <Items data={query} />}
          </div>
        </div>
      </Modal>
    </div>
  );
}

function Items(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: props.data }),
    };
    (async () => {
      let temp = await fetch(
        `${process.env.REACT_APP_API}/typeahead`,
        requestOptions
      );
      temp = await temp.json();
      setData(temp);
    })();
  }, [props.data]);

  console.log("data", data);
  var comComponents = [];
  if (data.length > 0) {
    for (var i in data) {
      comComponents[i] = <Preview key={i} data={data[i]}></Preview>;
    }
    return <div className="search-view">{comComponents}</div>;
  }
  return null;
}

function Preview(props) {
  console.log(props);
  var handleClick = (event) => {
    window.open(props.data.link, "_blank").focus();
    event.stopPropagation();
  };
  return (
    <div className={styles.card} onMouseDown={handleClick}>
      <div className={styles.title}>{props.data.title}</div>
      <div className={styles.sub}>{props.data.content}</div>
      <div className={styles.time}>{props.data.created_at}</div>
    </div>
  );
}
