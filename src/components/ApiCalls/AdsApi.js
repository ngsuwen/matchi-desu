import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';

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

export default function FetchData({ id }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
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

    // const clickHandler = async () => {
    //     const response = await fetchData();
    //     setData(response);
    // }

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, []);

    const styles = {
        height: '10vw',
        width: '15vw',
        backgroundImage: `url(${data.display_picture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <>
        <Paper style={styles} variant="outlined" square/>
        </>
    );
};


/* <button onClick={clickHandler}>Random</button> */