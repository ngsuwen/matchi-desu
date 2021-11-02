import React, { useState, useEffect } from "react";

//this is a function to generate proxyURL
const getProxyURL = (endPoint) =>
    `https://shrill-cloud-4f83.wenjie-teo.workers.dev/${endPoint}?ga_proxy=`;

//this is the api base URL
const apiBaseURL = "mywaifulist.moe";
const arrList = [3163] //9617, 17005
//anything after base url

const options = {
    method: "GET",
    headers: { "x-requested-with": "XMLHttpRequest" },
};

const fetchData = async () => {
    try {
        let id = arrList[Math.floor(Math.random() * arrList.length)]
        const apiEndPoint = `api/waifu/${id}`;

        const URL = getProxyURL(apiEndPoint) + apiBaseURL;
        const response = await fetch(URL, options);
        const data = await response.json();
        console.log(data.data);
        return data.data;
    } catch (err) {
        console.log(err);
    }
};

const FetchData = () => {
    const [data, setData] = useState([]);

    const clickHandler = async () => {
        const response = await fetchData();
        setData(response);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, []);

    return (
        <>
            <div>
                <h1>{data.name}</h1>
                <div><img style={{ height: '50vw' }} src={data.display_picture} /></div>
                <button onClick={clickHandler}>Random</button>
            </div>
        </>
    );
};

export default FetchData;