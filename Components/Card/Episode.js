import React, { useEffect, useState } from "react";

const Episodes = (props) => {
  let [info, setInfo] = useState([]);
  let {name } = info;  
  let [id]= useState(props.idNum)

  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
    })();
  }, [api]);

  return (
    <> 
      <span className="episode--name">Episode:{id}-<b> {name === "" ? "Unknown" : name}</b></span>
    </>
  );
};

export default Episodes;