import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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

export default function ActionAreaCard() {

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
    <Card sx={{ width: '15vw', maxHeight: '35vw', margin: '0.5em'}} onClick={clickHandler}>
      <CardActionArea>
        <CardMedia
          component='img'
          image={data?data.display_picture:''} 
          alt='img'
          style={{ width: '15vw' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?data.name:'Ad here'}
          </Typography>
          <div style={{overflow: "hidden"}}>
          <Typography variant="body2" color="text.secondary">
            {data?data.description:'Ad here'}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}