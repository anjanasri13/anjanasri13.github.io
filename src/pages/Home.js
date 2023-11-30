import React, { useState } from "react";
import Header from "../components/Header";
import "../assets/css/Home.css";
import "../assets/css/App1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rect from "../assets/img/Rectangle.png";
import vector from "../assets/img/Vector.png";
import group46 from "../assets/img/Group 46.png";
import group45 from "../assets/img/Group 45.png";
import vector1 from "../assets/img/Vector1.png";
import group47 from "../assets/img/Group 47.png";
import star from "../assets/img/star.png";
import dollar from "../assets/img/dollar.png";
import com from "../assets/img/com.png";
import data from "../assets/img/data.png";
import time from "../assets/img/time.png";
import error from "../assets/img/error.png";
import customer from "../assets/img/customer.png";
import Amazon from "../assets/img/Amazon.png";
import flipkart from "../assets/img/Flipkart.png";
import noon from "../assets/img/noon.png";
import fc from "../assets/img/Fc.png";
import { BsArrowRight } from "react-icons/bs";
import Reactangle from "../assets/img/Rectangle 12426.png";
import tick from "../assets/img/tick.png";
import Reactangle1 from "../assets/img/Rectangle 1.png";
import Reactangle2 from "../assets/img/Rectangle 2.png";
import Reactangle12440 from "../assets/img/Rectangle 12440.png";
import vector2 from "../assets/img/Vector2.png";
import ellipse2 from "../assets/img/Ellipse 2.png";
import last from "../assets/img/last.png";
import facebook from "../assets/img/facebook.png";
import linkedin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Form from "react-bootstrap/Form";
import {
  IoIosArrowForward,
  IoIosArrowDropleft,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Tick from "../components/Tick";
import One from "../components/One";
import Two from "../components/Two";
import Four from "../components/Four";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub1", [
    getItem(
      "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
      "1"
    ),
  ]),
  getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub2", [
    getItem(
      "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
      "5"
    ),
  ]),
  getItem("Lorem Ipsum Dolor Sit Amet Consectetur.", "sub3", [
    getItem(
      "Lorem Ipsum Dolor Sit Amet Consectetur.Iaculis Sed Viverra Pretium Sed.",
      "5"
    ),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

export default function Home() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="flex items-center justify-center md:justify-between mt-[50px] mb-[50px] ml-[35px]">
        <div>
          <p className="text-[#1B1B1B] text-[42px] font-bold leading-[140%] captilize ">
            Monitor and track Real-time
            <br />
            online price insights.
          </p>
          <p className="text-[#1B1B1B] text-[16px] font-medium leading-[30px] captilize opacity-70">
            At Metrix IQ, we specialize in monitoring tools that overcome <br />
            manual price-tracking processesacross multiple online
            <br /> platforms.
          </p>
          <button
            className="border-[none] rounded-[108px] bg-[#5245A6] text-[#FFF] capitalize text-[14px] font-semibold
          inline-flex py-[15px] px-[22px] items-center justify-center gap-[10px]"
          >
            Get free Trial
          </button>
        </div>
        <div>
          <img src={rect} className="w-[639px] h-[405px] rounded-[12px] "></img>
        </div>
      </div>

      <div className="flex justify-between items-center m-[30px]">
        <div className="flex">
          <img src={vector} className="w-[21px] h-[32px] m-[10px]" />
          <p className="text-[#444] text-[18px] font-bold mt-[15px]">
            WAVES
            <span className="text-[#444] text-[18px] font-normal">
              MARATHON
            </span>
          </p>
        </div>
        <div className="flex">
          <img src={group46} className="w-[55px] h-[32px] mt-[5px] ml-[15px]" />
          &emsp;
          <p className="text-[#444] text-[24px] font-bold ">ArtVenue</p>
        </div>
        <div className="flex">
          <img src={group45} className="w-[55px] h-[32px] m-[10px]" />
          <p className="text-[#444] text-[24px] font-bold ">
            Smart
            <span className="text-[#444] text-[24px] font-medium">Finder</span>
          </p>
        </div>
        <div className="flex">
          <img src={vector1} className="w-[32px] h-[32px] mt-[2px]" />
          &nbsp;
          <p className="text-[#444] text-[24px] font-bold ">Zoomerr</p>
        </div>
        <div className="flex">
          <img src={group47} className="w-[23px] h-[29px] m-[15px] mt-[7px]" />
          <p className="text-[#444] text-[24px] font-bold ">kontrastr</p>
        </div>
      </div>

      <div className="flex justify-between items-center m-[30px]">
        <div className="flex">
          <img src={vector} className="w-[21px] h-[32px] m-[10px]" />
          <p className="text-[#444] text-[18px] font-bold mt-[15px]">
            WAVES
            <span className="text-[#444] text-[18px] font-normal">
              MARATHON
            </span>
          </p>
        </div>
        <div className="flex">
          <img src={group46} className="w-[55px] h-[32px] m-[10px]" />
          &nbsp;
          <p className="text-[#444] text-[24px] font-bold mt-[3px] ">
            ArtVenue
          </p>
        </div>
        <div className="flex">
          <img src={group45} className="w-[55px] h-[32px] m-[10px] mr-[3px]" />
          &nbsp;
          <p className="text-[#444] text-[24px] font-bold ">
            Smart
            <span className="text-[#444] text-[24px] font-medium">Finder</span>
          </p>
        </div>
        <div className="flex">
          <img src={vector1} className="w-[32px] h-[32px] mt-[4px] ml-[5px]" />
          &nbsp;
          <p className="text-[#444] text-[24px] font-bold">Zoomerr</p>
        </div>
        <div className="flex">
          <img src={group47} className="w-[23px] h-[29px] m-[15px] mt-[7px]" />
          <p className="text-[#444] text-[24px] font-bold ">kontrastr</p>
        </div>
      </div>

      <div className="bg-[#5245A6] w-[1240px] h-[252px] rounded-[30px] flex justify-between items-center m-[20px]">
        <div className="pl-[20px]" style={{ paddingLeft: "20px" }}>
          <p className="text-[#FCFCFC] text-[42px] capitalize font-bold">
            Lorem ipsum dolor sit amet consectetur.{" "}
          </p>
          <p className="text-[#FCFCFC] text-[18px] capitalize font-medium opacity-70">
            Lorem ipsum dolor sit amet consectetur. Lorem consectetur.
          </p>
        </div>
        <div>
          <p className="text-[#FCFCFC] text-[42px] captilize font-bold">4.9</p>
          <img src={star} className="w-[114px] h-[15px]" />
          <p className="text-[#FCFCFC] text-[18px] captilize font-medium opacity-70">
            Lorem Ipsum
          </p>
        </div>
        <div className="pr-[20px]">
          <p className="text-[#FCFCFC] text-[42px] font-bold">4.7</p>
          <img src={star} className="w-[114px] h-[15px]" />
          <p className="text-[#FCFCFC] text-[18px] captilize font-medium opacity-70">
            Lorem ipsum
          </p>
        </div>
      </div>

      <div
        className="rounded-[60px] bg-[#E5E3F2] justify-center items-center flex ml-[20px] 
      mr-[1140px] py-[-1px] px-[16px] mt-[50px]"
      >
        <p className="text-[#5245A6] text-[14px] font-semibold pt-[8px] uppercase text-center">
          features
        </p>
      </div>

      <p className="text-[#444] text-[38px] font-bold capitalize ml-[20px] mt-[5px]">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <p className="text-[#444] text-[18px] font-medium capitalize opacity-70 w-[818px] h-[105px] leading-[30px] ml-[20px] ">
        Lorem ipsum dolor sit amet consectetur. Iaculis sed imperdiet viverra
        iaculis morbi euismod vel sollicitudin tortor. Sed vitae vulputate
        maecenas mollis massa integer pretium sed. Sit in nulla imperdiet tempor
        ipsum.
      </p>

      <div className="flex ml-[20px] justify-between">
        <div>
          <img src={dollar} className="w-[64px] h-[64px]" />
          <Two>Dynamic Market Pricing</Two>
          <One>
            In the e-commerce world, prices are subject to
            <br /> constant fluctuations due to factors like demand, supply,
            competition, and seasonality. Keeping track&nbsp; of these changes
            and adjusting prices accordingly can be an arduous and
            time-consuming process.
          </One>
        </div>
        <div>
          <img src={com} className="w-[64px] h-[64px]" />
          <Two>Competitive Pricing</Two>
          <One>
            Staying competitive is essential, and Metrics IQ <br />
            addresses the challenge of regularly monitoring and adjusting prices
            to ensure they align with or undercut competitors. This is
            especially crucial for industries with high levels of price
            sensitivity.
          </One>
        </div>
        <div>
          <img src={data} className="w-[64px] h-[64px]" />
          <Two>Data Analysis and Insights</Two>
          <One>
            Metrics IQ leverages data analytics and algorithms to provide
            businesses with valuable insights into pricing strategies. It can
            analyze historical data, competitor pricing, and market trends to
            make informed recommendations.
          </One>
        </div>
      </div>
      <div className="flex ml-[20px] justify-evenly mt-[20px]">
        <div>
          <img src={time} className="w-[64px] h-[64px]" />
          <Two>Time Efficiency</Two>
          <One>
            Manually adjusting prices across a vast product catalog is
            time-consuming and prone to errors. Metrics IQ automates this
            process, saving retailers time and ensuring consistency.
          </One>
        </div>
        <div className="ml-[50px]">
          <img src={error} className="w-[64px] h-[64px]" />
          <Two>Pricing Errors</Two>
          <One>
            Human errors in pricing can result in revenue losses or customer
            dissatisfaction. Metrics IQ reduces the risk of such errors by
            relying on algorithms and data analysis.
          </One>
        </div>
        <div className="ml-[70px]">
          <img src={customer} className="w-[64px] h-[64px]" />
          <Two>Customer Experience</Two>
          <One>
            Consistently offering competitive prices contributes to an improved
            customer experience. It helps in building trust and brand loyalty,
            as customers are more likely to return to retailers that
            consistently offer fair prices
          </One>
        </div>
      </div>
      <div className="rounded-[60px] bg-[#E5E3F2] justify-center items-center flex ml-[580px] mr-[580px] mt-[70px]">
        <p className="text-[#5245A6] text-[14px] font-semibold pt-[5px] uppercase text-center">
          Services
        </p>
      </div>
      <p className="text-[#444] text-[38px] font-bold text-center capitalize m-[6px]">
        Pricing Tracking for Various E-commerce Sites
      </p>
      <p className="text-[#444] text-[18px] font-normal text-center capitalize opacity-70 leading-[30px] w-full h-[105px]">
        Are you a great shopper looking for the best deals or a business owner
        seeking to analyze
        <br /> market competitiveness? Metrics IQ, the ultimate automatic online
        price tracker tool, has got
        <br />
        you covered!
      </p>

      <div className="flex justify-evenly items-center">
        <div>
          <img src={Amazon} className="w-[40px] h-[40px] ml-[130px]" />
          <div className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]" />
          <p className="text-[#444] text-[24px] font-semibold capitalize ml-[110px]">
            Amazon
          </p>
          <Four>
            Effortlessly track Amazon <br /> prices with accurate <br />
            historical data.
          </Four>
          <button className="flex text-[#2699D8] text-[18px] font-semibold capitalize ml-[110px]">
            View More &nbsp;
            <span className="mt-[8px] ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={flipkart} className="w-[40px] h-[40px] ml-[130px]" />
          <div className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]" />
          <p className="text-[#444] text-[24px] font-semibold capitalize ml-[110px]">
            Flipkart
          </p>
          <Four>
            Stay updated on Flipkart prices
            <br /> with comprehensive price <br />
            history.
          </Four>
          <button className="flex text-[#2699D8] text-[18px] font-semibold capitalize ml-[110px]">
            View More &nbsp;{" "}
            <span className="mt-[8px] ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={noon} className="w-[40px] h-[40px] ml-[130px]" />
          <div className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]" />
          <p className="text-[#444] text-[24px] font-semibold capitalize ml-[120px]">
            Noon
          </p>
          <Four>
            Stay updated on Noon prices
            <br /> with comprehensive price
            <br /> history.
          </Four>
          <button className="flex text-[#2699D8] text-[18px] font-semibold capitalize ml-[110px]">
            View More &nbsp;{" "}
            <span className="mt-[8px] ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={fc} className="w-[40px] h-[40px] ml-[130px]" />
          <div className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]" />
          <p className="text-[#444] text-[24px] font-semibold capitalize ml-[120px]">
            FirstCry
          </p>
          <Four>
            Stay updated on FirstCry prices <br />
            with comprehensive price
            <br /> history.
          </Four>
          <button className="flex text-[#2699D8] text-[18px] font-semibold capitalize ml-[110px]">
            View More &nbsp;
            <span className="mt-[8px]">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <p className="text-[#444] text-[38px] font-bold ml-[390px] mt-[70px] text-center capitalize w-[528px]">
        Lorem ipsum dolor sit amet consectetur dolor sit
      </p>

      <div className="flex items-center ml-[320px]">
        <div className="rounded-[8px] bg-[#FFF] px-[30px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">120%</p>
          <p className="text-[#444] text-[16px] font-medium opacity-70">
            Lorem ipsum
          </p>
        </div>
        <div className="rounded-[8px] bg-[#FFF] px-[30px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">430+</p>
          <p className="text-[#444] text-[16px] font-medium opacity-70">
            Lorem ipsum
          </p>
        </div>
        <div className="rounded-[8px] bg-[#FFF] px-[30px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold  text-center ">75+</p>
          <p className="text-[#444] text-[16px] font-medium opacity-70">
            Lorem ipsum
          </p>
        </div>
        <div className="rounded-[8px] bg-[#FFF] px-[30px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">99%</p>
          <p className="text-[#444] text-[16px] font-medium opacity-70">
            Lorem ipsum
          </p>
        </div>
      </div>

      <div className="bg-[#F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px]">
        <div className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[70px] ml-[30px] mr-[1090px] p-[1px]">
          <p className="text-[#5245A6] text-center uppercase text-[14px] pt-[9px] font-semibold">
            Lorem ipsum
          </p>
        </div>
        <p className="text-[#444] text-[38px] ml-[20px] font-bold capitalize">
          Lorem ipsum dolor sit
          <br /> amet consectetur
        </p>
        <p className="text-[#444] text-[18px] ml-[20px] font-medium capitalize opacity-70">
          Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
          imperdiet viverra iaculis morbi mollis massa integer pretium
          <br />
          sed.Sit in nulla imperdiet tempor ipsum.
        </p>
        <div className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]" />
        <div className="flex mt-[30px]">
          <div>
            <img src={time} className="w-[64px] h-[64px] ml-[20px]" />
            <p className="text-[#444] text-[18px] font-medium ml-[20px]">
              Lorem Ipsum
            </p>
            <p className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize">
              Lorem ipsum dolor sit amet consectetur. Iaculis sed viverra
              <br /> pretium sed.
            </p>
          </div>
          <div>
            <img src={time} className="w-[64px] h-[64px] ml-[20px]" />
            <p className="text-[#444] text-[18px] font-medium ml-[20px]">
              Lorem Ipsum
            </p>
            <p className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize">
              Lorem ipsum dolor sit amet consectetur. Iaculis sed viverra
              <br /> pretium sed.
            </p>
          </div>

          <img
            src={rect}
            className="w-[632px] h-[505px] rounded-[30px] mt-[-230px]"
          />
        </div>
      </div>

      <div className="flex">
        <div>
          <img
            src={Reactangle}
            className="w-[608px] h-[663px] rounded-[30px] ml-[40px]"
          />
        </div>

        <div>
          <p
            className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[50px] mr-[400px] 
          mt-[30px] rounded-[60px] py-[8px] px-[12px]"
          >
            Lorem Ipsum
          </p>
          <p className="text-[#444] text-[38px] font-bold capitalize ml-[50px]">
            Lorem ipsum dolor sit <br />
            amet consectetur Viverra,
            <br />
            Imperdiet.
          </p>
          <p className="text-[#444] text-[18px] font-medium opacity-70 leading-[30px] capitalize ml-[50px]">
            Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
            imperdiet viverra iaculis morbi euismod vel sollicitudin
            <br /> tortor Sed vitae.
          </p>
          <div className="h-[1px] w-[505px] bg-[#00000033] ml-[38px] mt-[10px]" />
          <div className="flex mt-[30px] ml-[50px]">
            <Tick src={tick} />
            &emsp;
            <p className="mr-[30px] mt-[15px]">Lorem ipsum dolor sit</p>
            <Tick src={tick} />
            &emsp;
            <p className="mt-[15px]">Lorem ipsum dolor sit</p>
          </div>
          <div className="flex ml-[50px]">
            <Tick src={tick} />
            &emsp;
            <p className="mr-[30px] mt-[15px]">Lorem ipsum dolor sit</p>
            <Tick src={tick} />
            &emsp;
            <p className="mt-[15px]">Lorem ipsum dolor sit</p>
          </div>
          <div className="flex ml-[50px]">
            <Tick src={tick} />
            &emsp;
            <p className="mr-[30px] mt-[15px]">Lorem ipsum dolor sit</p>
            <Tick src={tick} />
            &emsp;
            <p className="mt-[15px]">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>

      <div className="bg-[F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px]">
        <div className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[90px] ml-[30px] mr-[1090px] pt-[1px]">
          <p className="text-[#5245A6] text-center uppercase text-[14px] py-[5px] font-semibold ">
            Lorem ipsum
          </p>
        </div>
        <p className="text-[#444] text-[38px] ml-[20px] font-bold capitalize">
          Lorem ipsum dolor sit
          <br /> amet consectetur
        </p>
        <p className="text-[#444] text-[18px] ml-[20px] font-medium leading-[30px] opacity-70 capitalize">
          Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
          imperdiet viverra iaculis morbi mollis massa integer pretium
          <br />
          sed. Sit in nulla imperdiet tempor ipsum.
        </p>
        <div className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]" />
        <p className="text-[#444] text-[28px] ml-[20px] mt-[20px] font-bold">
          25%{" "}
          <span className="text-[16px] font-medium opacity-70">
            Lorem Ipsum
          </span>
        </p>
        <p className="text-[#444] text-[28px] ml-[20px]  font-bold">
          1.7X{" "}
          <span className="text-[16px] font-medium opacity-70">
            Lorem Ipsum
          </span>
        </p>
        <img
          src={rect}
          className="w-[632px] h-[505px] rounded-[30px] ml-[580px] mt-[-350px]"
        />
      </div>

      <div className="flex">
        <div>
          <img
            src={Reactangle1}
            className="w-[580px] h-[473px] ml-[40px] rounded-[30px]"
          />
        </div>

        <div>
          <p
            className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[59px] mr-[400px] 
          mt-[10px] rounded-[60px] py-[9px] px-[30px]"
          >
            Lorem Ipsum
          </p>
          <p className="text-[#444] text-[38px] font-bold capitalize ml-[59px] mt-[10px]">
            Lorem ipsum dolor sit <br />
            amet consectetur{" "}
          </p>
          <p className="text-[#444] text-[18px] font-medium opacity-70 leading-[30px] capitalize ml-[59px]">
            Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
            imperdiet viverra iaculis morbi mollis massa integer pretium <br />
            sed. Sit in nulla imperdiet tempor ipsum.
          </p>

          <div className="flex mt-[30px]">
            <div>
              <img
                src={time}
                className="w-[64px] h-[64px] ml-[60px] mb-[5px]"
              />
              <p className="text-[#444] text-[18px] font-medium ml-[63px]">
                Lorem Ipsum
              </p>
              <p className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] capitalize ml-[59px]">
                Lorem ipsum dolor sit amet <br /> consectetur. Iaculis sed
                viverra
                <br /> pretium sed.
              </p>
            </div>
            <div>
              <img
                src={time}
                className="w-[64px] h-[64px] ml-[30px] mb-[5px]"
              />
              <p className="text-[#444] text-[18px] font-medium ml-[30px]">
                Lorem Ipsum
              </p>
              <p className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] capitalize ml-[30px]">
                {" "}
                Lorem ipsum dolor sit amet <br />
                consectetur. Iaculis sed viverra
                <br /> pretium sed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px]">
        <div className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[90px] ml-[30px] mr-[1090px] p-[1px]">
          <p className="text-[#5245A6] text-center uppercase text-[14px] pt-[8px] font-semibold">
            Lorem ipsum
          </p>
        </div>
        <p className="text-[#444] text-[38px] ml-[20px] font-bold capitalize">
          Lorem ipsum dolor sit
          <br /> amet consectetur
        </p>
        <p className="text-[#444] text-[18px] ml-[20px] font-medium capitalize opacity-70">
          Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
          imperdiet viverra iaculis morbi mollis massa integer pretium
          <br />
          sed. Sit in nulla imperdiet tempor ipsum.
        </p>
        <div className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]" />
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          className="w-[496px] mt-[20px] bg-[#F7F7F7] border-none"
          items={items}
        />
        <img
          src={Reactangle2}
          className="w-[632px] h-[505px] roundeed-[30px] ml-[580px] mt-[-420px]"
        />
      </div>

      <div className="flex justify-between bg-[#5245A6] rounded-[14px] ml-[50px] mr-[50px] pb-[30px]">
        <div>
          <p className="text-[#FFFFFF] text-[38px] font-bold ml-[40px] pt-[40px]">
            {" "}
            Lorem Ipsum Dolor Sit Amet <br /> Consectetur
          </p>
          <p className="text-[#FFFFFF] text-[16px] font-medium ml-[40px] opacity-70 capitalize">
            Lorem ipsum dolor sit amet consectetur. Iaculis sed <br />
            imperdiet viverra iaculis morbi mollis massa integer pretium <br />
            sed. Sit in nulla imperdiet tempor ipsum.
          </p>
          <div className="flex">
            <button className="text-[18px] bg-[white] font-medium rounded-[130px] border-none py-[10px] px-[35px] ml-[40px]">
              Get Started{" "}
            </button>
            <p className="ml-[-25px] mt-[20px]">
              <IoIosArrowForward />
            </p>
          </div>
        </div>

        <div>
          <img
            src={Reactangle12440}
            className="w-[307px] h-[310px] pt-[40px]"
          />
        </div>
        <div>
          <img
            src={Reactangle12440}
            className="w-[236px] h-[244px] pt-[40px]"
          />
        </div>
      </div>

      <div className="bg-[#F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px]">
        <div className="rounded-[60px] bg-[#E5E3F2] pb-[1px] justify-center items-center mt-[90px] ml-[40px] mr-[1090px]">
          <p className="text-[#5245A6] text-center uppercase text-[14px] pt-[9px] font-semibold">
            Testimonials
          </p>
        </div>
        <p className="text-[#444] text-[38px] ml-[40px] font-bold capitalize flex">
          Lorem ipsum dolor sit
          <br /> amet consectetur{" "}
          <p className="ml-[550px] mt-[20px] flex">
            <IoIosArrowDropleft />

            <p>
              <IoIosArrowDroprightCircle />
            </p>
          </p>
        </p>
        <div className="flex p-[30px] items-start gap-[16px] ml-[20px]">
          <div className="rounded-[16px] bg-[#FFF] pr-[15px] shadow-md">
            <img
              className="w-[20px] h-[19px] mt-[20px] ml-[20px]"
              src={vector2}
            />
            <p className="text-[16px] text-[#444] font-medium ml-[20px] leading-[30px] opacity-70">
              Lorem ipsum dolor sit amet
              <br />
              consectetur.Cursus mauris nisi
              <br />
              elementum adipiscing fringilla
              <br /> nunc praesent. Lorem nunc
              <br />
              dignissim maecenas nec at nulla.
            </p>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] rounded-[40px] ml-[20px]"
                src={ellipse2}
              />
              &emsp;
              <p className="text-[16px] text-[#444] mt-[3px] font-medium">
                Adam Smith
              </p>
            </div>
            <p className="text-[14px] text-[#444] mt-[-20px] ml-[75px] font-medium opacity-70">
              General Manager
            </p>
          </div>

          <div className="rounded-[16px] bg-[#FFF] pr-[15px] shadow-md">
            <img
              className="w-[20px] h-[19px] mt-[20px] ml-[20px]"
              src={vector2}
            />
            <p className="text-[16px] text-[#444] font-medium ml-[20px] leading-[30px] opacity-70">
              Lorem ipsum dolor sit amet
              <br />
              consectetur.Cursus mauris nisi
              <br />
              elementum adipiscing fringilla
              <br /> nunc praesent. Lorem nunc
              <br />
              dignissim maecenas nec at nulla.
            </p>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] rounded-[40px] mt-[5px] ml-[20px]"
                src={ellipse2}
              />
              &emsp;
              <p className="text-[16px] text-[#444] mt-[3px] font-semibold">
                Sara
              </p>
            </div>
            <p className="text-[14px] text-[#444] font-medium ml-[73px] mt-[-20px] opacity-70">
              Assistant Manager
            </p>
          </div>

          <div className="rounded-[16px] bg-[#FFF] pr-[15px] shadow-md">
            <img
              className="w-[20px] h-[19px] mt-[20px] ml-[20px]"
              src={vector2}
            />
            <p className="text-[16px] text-[#444] font-medium ml-[20px] leading-[30px] opacity-70">
              Lorem ipsum dolor sit amet
              <br />
              consectetur.Cursus mauris nisi
              <br />
              elementum adipiscing fringilla
              <br /> nunc praesent. Lorem nunc
              <br />
              dignissim maecenas nec at nulla.
            </p>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] rounded-[40px] ml-[20px]"
                src={ellipse2}
              />
              &emsp;
              <p className="text-[16px] text-[#444] mt-[3px] font-semibold">
                Andriya
              </p>
            </div>
            <p className="text-[14px] text-[#444] font-medium ml-[75px] mt-[-20px] opacity-70">
              General Reporter
            </p>
          </div>

          <div className="rounded-[16px] bg-[#FFF] pr-[15px] shadow-md">
            <img
              className="w-[20px] h-[19px] mt-[20px] ml-[20px]"
              src={vector2}
            />
            <p className="text-[16px] text-[#444] font-medium ml-[20px] leading-[30px] opacity-70">
              Lorem ipsum dolor sit amet
              <br />
              consectetur.Cursus mauris nisi
              <br />
              elementum adipiscing fringilla
              <br /> nunc praesent. Lorem nunc
              <br />
              dignissim maecenas nec at nulla.
            </p>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] rounded-[40px] ml-[20px]"
                src={ellipse2}
              />
              &emsp;
              <p className="text-[16px] text-[#444] mt-[3px] font-medium">
                Adam Zamba
              </p>
            </div>
            <p className="text-[14px] text-[#444] font-medium ml-[75px] mt-[-20px] opacity-70">
              Manager
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#1B1B1B] text-[38px] font-bold ml-[40px]">
        Lorem Ipsum Dolor Sit Amet
      </p>
      <p className="text-[#49454F] text-[18px] font-medium capitalize ml-[40px]">
        Lorem ipsum dolor sit amet ipsum dolor sit amet
      </p>
      <div className="flex justify-evenly">
        <div>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            className="w-[576px] mt-[20px] bg-[#F7F7F7] border-none rounded-[20px]"
            items={items}
          />
        </div>
        <div>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            className="w-[576px] mt-[20px] bg-[#F7F7F7] border-none rounded-[20px]"
            items={items}
          />
        </div>
      </div>

      <div className="rounded-[60px] bg-[#5245A626] pb-[1px] justify-center items-center mt-[90px] ml-[580px] mr-[580px]">
        <p className="text-[#5245A6] text-[14px] font-semibold ml-[23px] pt-[8px]">
          PRICING
        </p>
      </div>
      <p className="text-[40px] font-bold capitalize text-center">
        Pricing for Metrix IQ
      </p>
      <p className="text-[#444] text-[18px] font-medium capitalize text-center leading-[30px] opacity-70">
        Lorem ipsum dolor sit amet consectetur. Iaculis sed imperdiet viverra
        iaculis morbi euismod ve
        <br />
        sollicitudin tortor. Sed vitae vulputate maecenas mollis massa integer
        pretium sed. Sit in nulla
        <br />
        imperdiet tempor ipsum.
      </p>

      <div>
        {" "}
        {/* https://richreact.com/react-examples/bs4-light-our-pricing-page#code-editor1 */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.css"
          rel="stylesheet"
        />
        <div class="container">
          <div class="row justify-content-center text-center">
            {/* <div class="col-lg-12">
                <h2 class="font-weight-light">Our Pricing</h2>
                <p class="text-muted mt-4 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
            </div> */}
          </div>
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="bg-white mt-3 price-box">
                <div class="pricing-name text-center">
                  <h4 class="mb-0">Professional</h4>
                </div>
                <div class="plan-price text-center mt-4">
                  <h1 class="text-custom font-weight-normal mb-0">
                    $99<span>/ For 56 days</span>
                  </h1>
                </div>
                <div className="h-[1px] bg-[#444444] mt-[15px] mb-[-25px]" />
                <div class="price-features mt-5">
                  <p className="text-[#444] text-[20px] font-semibold">
                    What's Include?
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> ​Unlimited Competitors! ​{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Excel Reports{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Price Position Comparison
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Worldwide Site/Currency
                    &emsp;&emsp;&emsp;Coverage{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Marketplace Price Tracking{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Price History
                  </p>
                </div>
                <div class="text-center mt-5">
                  <a
                    href="#/"
                    class="btn btn-custom"
                    className="text-[#5245A6] hover:text-[#5245A6] py-[5px] px-[40px] rounded-[108px] border-soild border-[1px] no-underline	 hover:no-underline"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bg-white mt-3 price-box">
                <div class="pricing-name text-center">
                  <h4 class="mb-0">Premium</h4>
                </div>
                <div class="plan-price text-center mt-4">
                  <h1 class="text-custom font-weight-normal mb-0">
                    $178<span>/ For 56 days</span>
                  </h1>
                </div>
                <div className="h-[1px] bg-[#444444] mt-[15px] mb-[-25px]" />
                <div class="price-features mt-5">
                  <p className="text-[#444] text-[20px] font-semibold">
                    What's Include?
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> ​Unlimited Competitors!
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Excel Reports{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Price Position Comparison{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Worldwide Site/Currency
                    &emsp;&emsp;&emsp;Coverage
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Marketplace Price Tracking{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Price History
                  </p>
                </div>
                <div class="text-center mt-5">
                  <a
                    href="#/"
                    class="btn btn-custom"
                    className="text-white hover:text-white rounded-[108px] bg-[#5245A6] py-[5px] px-[40px]  no-underline hover:no-underline"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bg-white mt-3 price-box">
                <div class="pricing-name text-center">
                  <h4 class="mb-0">Platinum</h4>
                </div>
                <div class="plan-price text-center mt-4">
                  <h1 class="text-custom font-weight-normal mb-0">
                    $252<span>/ For 56 days</span>
                  </h1>
                </div>
                <div className="h-[1px] bg-[#444444] mt-[15px] mb-[-25px]" />
                <div class="price-features mt-5">
                  <p className="text-[#444] text-[20px] font-semibold">
                    What's Include?
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> ​Unlimited Competitors!
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Excel Reports{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i>Price Position Comparison{" "}
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i>Worldwide Site/Currency
                    &emsp;&emsp;&emsp; Coverage
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Marketplace Price Tracking
                  </p>
                  <p>
                    <i class="mdi mdi-check"></i> Price History
                  </p>
                </div>
                <div class="text-center mt-5">
                  <a
                    href="#/"
                    class="btn btn-custom"
                    className="text-[#5245A6] hover:text-[#5245A6] py-[5px] px-[40px] rounded-[108px] border-solid border-[1px] no-underline hover:no-underline"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[10px] ml-[50px] mr-[50px] mt-[60px] bg-[#FFF] flex ">
        <div>
          <p className="text-[#1B1B1B] text-[38px] font-bold pt-[90px] pl-[40px] capitalize leading-[140%]">
            Lorem ipsum dolor sit
            <br /> amet consectetur
          </p>
          <p className="text-[#1B1B1B] text-[18px] font-medium  pl-[40px] capitalize leading-[30px] opacity-70">
            Lorem ipsum dolor sit amet consectetur. Iaculis sed
            <br /> imperdiet viverra iaculis morbi mollis massa integer pretium
            <br />
            sed.Sit in nulla imperdiet tempor ipsum.
          </p>
        </div>
        <div className="ml-[40px] mt-[20px] mb-[50px]">
          <Form>
            {" "}
            {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="flex mt-[60px] ">
                <Form.Control
                  style={{
                    borderStyle: "none",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                  }}
                  type="text"
                  placeholder="First Name"
                />
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  style={{
                    borderStyle: "none",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                    marginLeft: 30,
                  }}
                />
              </div>
              <div className="flex mt-[20px]">
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  style={{
                    borderStyle: "none",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                  }}
                />
                <Form.Control
                  type="number"
                  placeholder="Contact Number"
                  style={{
                    borderStyle: "none",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                    marginLeft: 30,
                  }}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                style={{
                  borderStyle: "none",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "12px",
                }}
              />
            </Form.Group>
          </Form>
          <button className="bg-[#5245A6] text-[white] rounded-[15px] border-none py-[8px] px-[170px]">
            Get A CALL back
          </button>
        </div>
      </div>

      <div className="bg-[#5245A6] mt-[60px] flex pb-[20px]">
        <div>
          <img src={last} className="w-[227px] h-[49px] mt-[50px] ml-[50px]" />
          <p className="text-[#FFF] text-[20px] font-semibold ml-[50px] mt-[20px]">
            CONTACT DETAILS :
          </p>
          <p className="text-[#FFF] text-[18px] font-medium ml-[50px] mt-[20px] ">
            Phone: &emsp;
            <span className="font-normal">+044 2222 4444 </span>
          </p>
          <p className="text-[#FFF] text-[18px] font-medium ml-[50px] mt-[20px]">
            Email: &emsp;
            <span className="font-normal">matrixIQ@thebox.com </span>
          </p>
        </div>

        <div>
          <p className="text-[#FFF] text-[20px] font-semibold ml-[400px] mt-[50px]">
            Newsletter:
          </p>
          <input
            type="email"
            placeholder="Your email here"
            className="outline-none border-none bg-[#F5F5F5] rounded-[64px] ml-[400px] py-[8px] px-[13px]"
          />
          &emsp;
          <button className="border-none bg-[#F5F5F5] rounded-[64px] py-[8px] px-[13px]">
            Get Free Trial
          </button>
          <p className="text-[#FFF] text-[20px] font-semibold ml-[400px] mt-[50px]">
            Social:
          </p>
          <div className="flex">
            <img src={facebook} className="w-[40px] h-[40px] ml-[400px]" />
            &emsp;
            <img src={linkedin} className="w-[40px] h-[40px]" />
            &emsp;
            <img src={twitter} className="w-[40px] h-[40px] " />
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-[#6358AF] ">
        <p className="text-[#FFF] text-[14px] font-normal leading-[22px] mt-[20px] ml-[50px]">
          ©2023. Metrics IQ. All Rights Reserved.
        </p>
        <p className="text-[#FFF] text-[14px] font-normal leading-[22px] mt-[20px] mr-[180px]">
          Privacy Policy Terms Of Service Cancellation & Refund Policy
        </p>
      </div>
    </>
  );
}
