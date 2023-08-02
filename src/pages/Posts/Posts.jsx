import React, { useEffect, useState } from "react";
import client from "../../client";
import Post from "../Post/Post";
import styles from "./styles.module.css";
import RelatedPost from "../RelatedPost/RelatedPost";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import { MdMyLocation, MdCloud, MdOutlineCloud } from "react-icons/md";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Image, Flex, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Avatar } from '@chakra-ui/react'
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setLat("unable to get your location");
        }
      );
    } else {
      alert("sorry not granted");
    }
  };

  const integer1 = Number(lat).toFixed(2);
  const integer2 = Number(long).toFixed(2);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${integer1}&lon=${integer2}&appid=aa13bf4cbd2119a5691c63c39974705e`;

  const getWeather = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getLocation();
    getWeather();
    client
      .fetch(
        `*[_type == 'post']{
            title,
            slug,
            body,
            publishedAt,
            mainImage{
                asset -> {
                    _id,
                    url
                },
                alt
            },
            "authorName": author -> name,
            "authorImage": author -> image.asset -> url,
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  const date = new Date().toDateString();
  console.log(weatherData);
  const { main, coord, weather, wind, sys, timezone } = weatherData;
  // console.log(post.body.substr(0,30));
  return (
    <div className={styles.container}>
      <h2>Latest Posts</h2>
      <p>{date}</p>

      <div className={styles.sub_container}>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
          {post.map((post, index) => {
            return (
              <>
                <Card w='330px' my='8'>
                  <CardBody>
                    <Image
                      src={post.mainImage.asset.url}
                      h='180px'
                      w='100%'
                      objectFit='cover'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='2'>
                      <Text size='md' letterSpacing='0px' fontWeight='bold' color='black'>{post.title}</Text>
                      <Text color='black'>
                        <Text>{post.title}.........</Text>
                      </Text>
                      <Flex alignItems='center' gap={4}>
                        <Avatar src={post.authorImage} size='md' />
                        <Text fontWeight='bold'>{post.authorName}</Text>
                      </Flex>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Link to={`/blog/${post.slug.current}`}>
                        <Button variant='solid' colorScheme='blue' size='sm'>
                          Read more
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </Box>

        {/* <div>
          {main && (
            <div className={styles.weather}>
              <div className={styles.heading}>
                <h4>Your local weather</h4>
                <span>
                  <MdMyLocation />
                </span>
              </div>
              <div className={styles.line}></div>

              <div className="content">
                <div className={styles.column}>
                  <div>
                    <div>
                      <MdOutlineCloud className={styles.cloud} />
                    </div>
                    <p id={styles.weather_text}>
                      {weather[0].main && weather[0].main}
                    </p>
                  </div>

                  <div className={styles.temp}>
                    {main.temp && parseFloat(main.temp).toFixed(1)}K
                  </div>
                </div>

                <div className={styles.coords}>
                  Your Coordinates
                  <p>Latitude: {integer1}</p>
                  <p>Longitude: {integer2}</p>
                  <p>Timezone: {timezone && timezone}</p>
                  <p>
                    <strong>Country: {sys.country}</strong>
                  </p>
                </div>

                <div className={styles.coords}>
                  Weather Details
                  <p>Relative Humidity: {main.humidity}</p>
                  <p>Pressure: {main.pressure}</p>
                  <p>Maximum Temp: {main.temp_max}</p>
                  <p>Minimum Temp: {main.temp_min}</p>
                  <p>Weather: {weather[0].description}</p>
                  <p>Wind Speed: {wind.speed}</p>
                  <p>Wind Direction: {wind.deg} Degrees</p>
                </div>
              </div>
            </div>
          )}
        </div> */}

      </div>
    </div>
  );
};

export default Posts;
