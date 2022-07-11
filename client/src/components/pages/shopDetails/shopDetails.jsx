import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Header from "../../header/Header"
import "./map.css"
import  { PicBaseUrl } from "../../../imageBaseUrl";
import MapIcon from '@mui/icons-material/Map';
import Container from "@mui/material/Container";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IosShareIcon from '@mui/icons-material/IosShare';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { axiosInstance } from "./../../../config";
// import { PicBaseUrl } from "./../../../imageBaseUrl";
import { Context } from "./../../../context/Context";

var BudvistaBanner = PicBaseUrl + "BudvistaBanner.jpg"



export default function ShopDetails(){

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  const[products, setProducts] = useState([])
  const[shop, setShop] = useState([])
  const[recommendedProducts, setRecommendedProducts] = useState([])
  const[events, setEvents] = useState([])
  const[shopOpen, setShopOpen] = useState("Close")
  const [closeTime, setCloseTime] = useState("")

  const location = useLocation()
  const path = (location.pathname.split("/")[2])

  useEffect(() => {
    const getShop = async () => {
      const res = await axiosInstance.get('/shops/' + path)
      setShop(res.data[0])
    };
    getShop()
  },[path])

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axiosInstance.get("/products/recommended/" + path)
      setRecommendedProducts(res.data)
    }
    fetchProduct();
  },[path])

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axiosInstance.get("/products/" + path)
      setProducts(res.data)
    }
    fetchProduct();
  },[path])

  useEffect(()=>{
    const fetchEvent = async () => {
      const res = await axiosInstance.get("/posts/getPostsByUsername/" + path)
      setEvents(res.data)
    }
  //   let newDate = new Date().getDay()
  // if(newDate == 1 && shop.timings[0].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[0].timeTo)
  // }
  // if(newDate == 2 && shop.timings[1].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[1].timeTo)
  // }
  // if(newDate == 3 && shop.timings[2].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[2].timeTo)
  // }
  // if(newDate == 4 && shop.timings[3].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[3].timeTo)
  // }
  // if(newDate == 5 && shop.timings[4].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[4].timeTo)
  // }
  // if(newDate == 6 && shop.timings[5].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[5].timeTo)
  // }
  // if(newDate == 7 && shop.timings[6].shopStatus == "Open"){
  //   setShopOpen("Open")
  //   setCloseTime(shop.timings[6].timeTo)
  // }
    fetchEvent();
  }, [path]);

  return(
    <div>
       <Container>
       <div className="header">
        <img className="headerImg" src={PicBaseUrl + shop.coverPhoto} alt="" />
        
       </div>  

       {/* shop-title */}
       <div className="shop-title">
          <div className="shop-location"> <p><LocationOnIcon/>{shop.address}</p></div>
          <div className="shop-content">
            <h2>{shop.shopTitle}</h2>
            <p>{shop.shopDesc}</p>
         </div> 
          <div className="shop-share"> <p> <IosShareIcon/> Share</p></div>
       </div>

       <div className="recommended-product">
          <div className="postsTitle">
            <h1>Recommended Products</h1>
          </div>

          <div className="recommended-product-inner">
           { recommendedProducts.map((product)=>{
              return(
                
                  <div className="recommended-product-inner-inner">
                  <img src="https://storage.googleapis.com/snackyo/1655886005408pexels-kindel-media-7773110.jpg" />
                </div>
              )
            })}
          </div>
       </div>

       <div className="event-map">
          <div className="postsTitle">
            <h1>Events and Promotion</h1>
          </div>
          <MdChevronLeft
          size={25}
          className="slider-icon iconLeft"
          onClick={slideLeft}
        />

          <div className="promotion-slider"  id="slider">
            {events.map(event=>{
              const date = event.createdAt.split("T")[0]
              return (
                <div className="promotion-slider-inner">
                <div className="promotion-slider-image">
                  <img src={PicBaseUrl + event.photo} />
                </div>
                <div className="promotion-slider-content">
                  <p>{event.title}</p>
                  <p>{date}</p>
                </div>
              </div>
              )
            })}
          </div>


        <MdChevronRight
          size={25}
          className="slider-icon iconRight"
          onClick={slideRight}
        />
       </div>

       <div className="shop-info">
          <div className="postsTitle">
            <h1>Shop Info</h1>
          </div>

          <div className="shop-info-inner">
            <div className="shop-info-info">
              <ul>
                <li><p><AccessTimeIcon /> <span className="open">{shopOpen}</span> : <span className="close"> Close {closeTime}</span></p></li>
                <li><p><LocationOnIcon/> {shop.address}</p></li>
                <li><p><LocalPhoneIcon /> {shop.telephone}</p></li>
              </ul>
            </div>
            <div className="shop-info-map">
              <img src="https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-050_worldmap_neu_ma_1.jpg" />
            </div>
          </div>
       </div>

       <div className="follow-section">
        <div className="follow-section-head">
          <h1>Follow Us</h1>
        </div>
        <div className="follow-section-content">
          <div className="follow-section-image">
              <Link className="insta" to={shop.instagram}><InstagramIcon/></Link>
              <Link  className="face" to={shop.facebook}><FacebookIcon/></Link>
              <Link className="tweet" to={shop.twitter}><TwitterIcon/></Link>
              <Link className="youtube" to={shop.youtube}><YouTubeIcon/></Link>
          </div> 
          <div className="follow-product-btn">
          <Link className="viewMorePosts" to={`/shop/${shop.username}`}>View product</Link>
          </div>
        </div>
       </div>
       </Container>
      


    </div>
  )
}