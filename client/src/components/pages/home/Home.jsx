import { useState, useEffect } from "react";
import Categories from "../../categories/Categories";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Shops from "../../shops/Shops";
import "./home.css";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import { axiosInstance } from "../../../config";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [shops, setShops] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts/getposts/limitation");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axiosInstance.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  },[search]);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await axiosInstance.get("/shops/getshops/limitations")
      setShops(res.data)
    }
    fetchShops()
  },[])

  return (
    <>
      <Header />
      <div className="home">
        <Categories categories={categories} />
        <Container>
            <div className="selectTitle"><h1>Discover  SCANQ</h1>
            </div>
          <div className="homeSelect">
            <div className="selectLeft">
              <img
                src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <div className="selectLeftText">
              <p>What is Scanq</p>
              <Link to={'/about'}>
              <button className="homebtn">Discover more</button>
              </Link>
              </div>
            </div>
            <div className="selectRight">
              <img
                src="https://images.pexels.com/photos/8963884/pexels-photo-8963884.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div className="selectRightText">
                <p>Know more about QR menu</p>
                <Link to='/menus'>
                <button className="homebtn">Checkout our menu</button>
                </Link>
                </div>
            </div>
          </div>
        </Container>
        <Container className="postsBody">
        <div className="postsTitle">
        <h1>Latest Events</h1>
        </div>
        <Posts posts={posts} />
        <div className="viewMore"><Link className="viewMorePosts" to='/Events'>More Events</Link></div>
        </Container>
        <Container className="shopsBody">
        <div className="shopsTitle">
        <h1>Checkout Menu</h1>
        </div>
        <Shops Shops={shops} />
        <div className="viewMore"><Link className="viewMoreShops" to='/Menus'>More Restaurants</Link></div>
        </Container>
      </div>

      <Footer/>
    </>
  );
}