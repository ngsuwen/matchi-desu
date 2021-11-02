import React, { useState, useEffect } from "react";

const fetchData = async () => {
    try {
        const response = await fetch('https://api.waifu.pics/nsfw/waifu');
        const data = await response.json();
        console.log(data)
        return data.url;
    } catch (err) {
        console.log(err);
    }
};

const Ads = () => {
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
        <div>
            <div><img style={{height: '50vw'}} src={data}/></div>
            <button onClick={clickHandler}>Random</button>
        </div>
    );
};

export default Ads;