import React, { useState, useEffect } from "react";
import TinderProfileCard from './ProfileCard';

//this is a function to generate proxyURL
const getProxyURL = (endPoint) =>
    `https://shrill-cloud-4f83.wenjie-teo.workers.dev/${endPoint}?ga_proxy=`;

//this is the api base URL
const apiBaseURL = "mywaifulist.moe";

//anything after base url

const options = {
    method: "GET",
    headers: { "x-requested-with": "XMLHttpRequest" },
};

const fetchData = async () => {
  let dataArray=[]
  for (let i=0;i<8;i++){
    try {
        let id = 25 * Math.floor(Math.random() * 860)
        const apiEndPoint = `api/waifu/${id}`;

        const URL = getProxyURL(apiEndPoint) + apiBaseURL;
        const response = await fetch(URL, options);
        const data = await response.json();
        dataArray.push(data.data);
      } catch (err) {
        console.log(err);
      }
    }
  return dataArray;
};

export default function ProfileCard() {
  const [newList, setNewList] = useState(false)
  const [dataLength, setDataLength] = useState()
  const [data, setData] = useState([]);

  useEffect(() => {
      const getData = async () => {
          const response = await fetchData();
          setData(response);
          setDataLength(response.length)
      };
      getData();
  }, [newList]);

  return (
    <TinderProfileCard data={data} dataLength={dataLength} setDataLength={setDataLength} newList={newList} setNewList={setNewList} />
  );
}