import React, { useState, useEffect } from "react";

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
    try {
        let id = 25 * Math.floor(Math.random() * 860)
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

export default function FetchData ({name, description}) {
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
            {data ? 
            <div>
                <img onClick={clickHandler} style={{ width: '15vw' }} src={data.display_picture} alt='img' />
            </div> : ""}
        </>
    );
};

