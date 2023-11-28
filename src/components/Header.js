import React from "react";
import Logo from "../assets/img/img1.png";
import User from "../assets/img/User.png";
import { Link, NavLink } from "react-router-dom";
import "@fontsource/raleway";
import "../assets/css/Home.css";

export default function Header() {
  return (
    <div className="hidden items-center justify-between mt-[30px] md:flex">
      <div>
        <img src={Logo} className="w-[227px] h-[49px] ml-[35px]"></img>
      </div>
      <div className="flex items-center justify-evenly text-[#333] text-[16px] font-medium capitalize Raleway w-4/5">
        <NavLink style={(({isActive})=>
        {return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}})} to="/">
          Home
        </NavLink>
        <NavLink style={(({isActive})=>
        {return isActive?{color:'red',textDecoration:'none'}:{color:'black'}})} to="">
          Solutions
        </NavLink>
        <NavLink style={(({isActive})=>
        {return isActive?{color:'red',textDecoration:'none'}:{color:'black'}})} to="">
          About Us
        </NavLink>
        <NavLink style={(({isActive})=>
        {return isActive?{color:'red',textDecoration:'none'}:{color:'black'}})}to="">
          Pricing
        </NavLink>
        <NavLink style={(({isActive})=>
        {return isActive?{color:'red',textDecoration:'none'}:{color:'black'}})} to="">
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center justify-center bg-[#5245A6] rounded-[108px] py-[12px] px-[22px] gap-[5px]">
        <img src={User} className="w-[24px] h-[24px]"></img>
        <button className="text-[#FFF] bg-[#5245A6] border-none text-[14px] font-semibold capitalize Raleway ">
          Login
        </button>
      </div>
    </div>
  );
}