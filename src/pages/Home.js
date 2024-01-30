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

import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  IoIosArrowForward
} from "react-icons/io";
import Tick from "../components/Tick";
import One from "../components/One";
import Two from "../components/Two";
import Four from "../components/Four";
import Three from "../components/Three";
import Five from "../components/Five";
import Svn from "../components/Svn";
import Form1 from "../components/Form";
import { Box, Boxpara, Container, HeroBtn, HeroPara, HeroTitle, InnerContainer, Para,Boxpara1,Boxpara4,Boxpara5,Boxp,Star,Star1,Boxp1,Img3,Waves,Waves1,
  Wavesp,Wavesimg,Container1,Container1p, Container1p1,Container1p2,Pricing,Pricing1,Amazon1,Amazonimg,Line,Amazonp,Flipimg,Para1,One1,One1p,One2p,One3p,Img1, Hline, 
  Time1, Time2, Time1p,Time2p,Time11p,Time22p, Rectangle, Rectangleimg,Rectanglep,Reactangle1p,Reactangle2p,
   Hline1,Tick1,Two1, Two1p, Two2p, Two3p, Hline2,Rectangle2,Reactangle2img,Reactangle3p, Reactangle4p,Time11,
   Time3p,Time4p,Time0,Img2,Img2p,Menuimg,Div1, Div1p,Div2p, Div1img, Div1img1,Test,Textp,Testblox,Menudiv,
  Divpricing,Divservices,Divpricingp,Pp,Ppp,Divpp,Divform,Last,News,Input,Button,Social,Icons,Final,Finalp, Artimg, Zoo, Kon, Smart, Artp, Artimg1, Div2, Div2img, Two11p, Div3, Reactangle5p, Icon, Menu1, Wavesimg1, BoxT, One1C, Divp1, Divp2,Four0, Four1, Four2, Four3, Six, Cryimg, Sixbu, Flipline, Flipp, Six2, Flipbu, Noonimg, Noonline, Noonp, Cryline, Cryp, Noonbu, Crybu, Para2, Para3, Time1img, Div4, ResContent1, ResContent2, Tickp, Tickp1, Hline2div, Hline2div1, Hline2div1p, Hline2div1pp, Rectangle21, Rectangle22, Flex, Flexbu, Flexp, Containerdiv, Div41, Img4, Div5, DIv6p, Div6p, Div6pp, Div51, Menudiv1, Divpricingpp, Formdiv, Formdiv1, Formbu, Contact, Lastp, Smartp, Zoop,Konp, Span, Span1, Timediv} from "../styles/HomeStyles";
import For from "../components/Four";
import Menu from "../components/Menu";
import Menu4 from "../components/Menu";
import Form5 from "../components/Form";
import Accordion from "../components/Accordian";
import Accordion1 from "../components/Accordian";
import Carousel from 'better-react-carousel'
import Coursedata from '../components/Test'
import Test1 from "../components/Test";
import styled from "styled-components";
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

const StyledCarousel = styled(Carousel)`
  display: flex;
  grid-template-columns: 4fr; /* Single column for mobile devices */
  align-items:centre;
  justify-content:centre;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns for tablets and larger */
  }
`;

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

  const Coursedata = [
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Adam Smith",
      title2:"General Manager",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Sara",
      title2:"Assistant Manager",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Andriya",
      title2:"General Reporter",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Adam Zamba",
      title2:"Manager",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Adam Smith",
      title2:"General Manager",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Sara",
      title2:"Assistant Manager",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Andriya",
      title2:"General Reporter",
      img1:ellipse2,
    },
    {
     
      img: vector2,
      title:"Lorem ipsum dolor sit amet consectetur.Cursus mauris nisi elementum adipiscing fringilla  nunc praesent. Lorem nunc dignissim maecenas nec at nulla.",
      title1:"Adam Zamba",
      title2:"Manager",
      img1:ellipse2,
    },
  ]

  return (
    <>
      <Header />
      <div style={{display: "flex", alignItems: "center", justifyContent: "center",  flexDirection: "column", width: "100%"}}>
      <Container>
        <InnerContainer>
          <HeroTitle>
            Monitor and track Real-time
            online price insights.
          </HeroTitle>
          <HeroPara>
            At Metrix IQ, we specialize in monitoring tools that overcome 
            manual price-tracking processesacross multiple online
            platforms.
          </HeroPara>
          <HeroBtn
          >
            Get free Trial
          </HeroBtn>
        </InnerContainer>
        <div>
          <img src={rect} className="w-[100%] h-[100%] rounded-[12px] "></img>
        </div>
      </Container>

    <Waves1>
      <Waves>
        <div className="flex">
          <Wavesimg1 src={vector}  />
          <Wavesp>
            WAVES
            <Span>
              MARATHON
            </Span>
          </Wavesp>
        </div>
        <div className="flex">
          <Artimg1 src={group46}  />
          <Artp>ArtVenue</Artp>
        </div>
        <div className="flex">
          <Smart src={group45} />
          <Smartp>
            Smart
            <Span1>Finder</Span1>
          </Smartp>
        </div>
        <div  className="flex">
          <Zoo src={vector1}/>
          <Zoop>Zoomerr</Zoop>
        </div>
        <div className="flex">
          <Kon src={group47} />
          <Konp>kontrastr</Konp>
        </div>
      </Waves>

      <Waves>
        <div className="flex">
          <Wavesimg src={vector}  />
          <Wavesp>
            WAVES
            <Span>
              MARATHON
            </Span>
          </Wavesp>
        </div>
        <div className="flex">
          <Artimg src={group46}  />
          <Artp>
            ArtVenue
          </Artp>
        </div>
        <div className="flex">
          <Smart src={group45} />
          <Smartp>
            Smart
            <Span1>Finder</Span1>
          </Smartp>
        </div>
        <div className="flex">
          <Zoo src={vector1} />
          <Zoop>Zoomerr</Zoop>
        </div>
        <div className="flex">
          <Kon src={group47}  />
          <Konp>kontrastr</Konp>
        </div>
      </Waves>
      </Waves1>


      <Box>
        <div>
          <Boxpara>
            Lorem ipsum dolor sit amet consectetur.
          </Boxpara>
          <Boxpara1>
            Lorem ipsum dolor sit amet consectetur. Lorem consectetur.
          </Boxpara1>
        </div>
        <BoxT>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"}}>
          <Boxpara4>4.9</Boxpara4>
          <Star src={star}/>
          <Boxp>
            Lorem Ipsum
          </Boxp>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"}}>
          <Boxpara5>4.8</Boxpara5>
          <Star1 src={star}/>
          <Boxp1>
            Lorem ipsum
          </Boxp1>
        </div></BoxT>
      </Box>

    <Containerdiv>
        <Container1p>
          features
        </Container1p>
      
      <Container1p1>
        Lorem ipsum dolor sit amet consectetur
      </Container1p1>
      < Container1p2>
        Lorem ipsum dolor sit amet consectetur. Iaculis sed imperdiet viverra
        iaculis morbi euismod vel sollicitudin tortor. Sed vitae vulputate
        maecenas mollis massa integer pretium sed. Sit in nulla imperdiet tempor
        ipsum.
      </ Container1p2>

      <Pricing>
        <div>
          <img src={dollar} className="w-[64px] h-[64px]" />
          <Two>Dynamic Market Pricing</Two>
          <One>
            In the e-commerce world, prices are subject to
             constant fluctuations due to factors like demand, supply,
            competition, and seasonality. Keeping track&nbsp; of these changes
            and adjusting prices accordingly can be an arduous and
            time-consuming process.
          </One>
        </div>
        <div>
          <img src={com} className="w-[64px] h-[64px]" />
          <Two>Competitive Pricing</Two>
          <One1C>
            Staying competitive is essential, and Metrics IQ
            addresses the challenge of regularly monitoring and adjusting prices
            to ensure they align with or undercut competitors. This is
            especially crucial for industries with high levels of price
            sensitivity.
          </One1C>
        </div>
        <div>
          <img src={data} className="w-[64px] h-[64px]" />
          <Two>Data Analysis and Insights</Two>
          <Three>
            Metrics IQ leverages data analytics and algorithms to provide
            businesses with valuable insights into pricing strategies. It can
            analyze historical data, competitor pricing, and market trends to
            make informed recommendations.
          </Three>
        </div>
      </Pricing>
      <Pricing>
        <div>
          <img src={time} className="w-[64px] h-[64px]"/>
          <Two>Time Efficiency</Two>
          <Five>
            Manually adjusting prices across a vast product catalog is
            time-consuming and prone to errors. Metrics IQ automates this
            process, saving retailers time and ensuring consistency.
          </Five>
        </div>
        <Pricing1>
          <img src={error} className="w-[64px] h-[64px]" />
          <Two>Pricing Errors</Two>
          <Five>
            Human errors in pricing can result in revenue losses or customer
            dissatisfaction. Metrics IQ reduces the risk of such errors by
            relying on algorithms and data analysis.
          </Five>
        </Pricing1>
        <Pricing1>
          <img src={customer} className="w-[64px] h-[64px]" />
          <Two>Customer Experience</Two>
          <Svn>
            Consistently offering competitive prices contributes to an improved
            customer experience. It helps in building trust and brand loyalty,
            as customers are more likely to return to retailers that
            consistently offer fair prices
          </Svn>
        </Pricing1>
      </Pricing>
   </Containerdiv>

    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10}}>
      <Divservices>
           Services
       </Divservices>
      <Divp1>
        Pricing Tracking for Various E-commerce Sites
      </Divp1>
      <Divp2 >
        Are you a great shopper looking for the best deals or a business owner
        seeking to analyze
        market competitiveness? Metrics IQ, the ultimate automatic online
        price tracker tool, has got
       
        you covered!
      </Divp2>

      <Amazon1>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
          <Amazonimg src={Amazon} />
          <Line />
          <Amazonp>
            Amazon
          </Amazonp>
          <Six>
            Effortlessly track Amazon  prices with accurate 
            historical data.
          </Six>
          <div className="flex">
          <Sixbu >
            View More &nbsp;
            
          </Sixbu>
          <p className="mt-[8px] text-[#2699D8]">
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
          <Flipimg src={flipkart}  />
          <Flipline/>
          <Flipp >
            Flipkart
          </Flipp>
          <Six2>
            Stay updated on Flipkart prices
           with comprehensive price 
            history.
          </Six2>
          <div className="flex">
          <Flipbu >
            View More &nbsp;
            
          </Flipbu>
          <p className="mt-[8px] text-[#2699D8]">
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
          <Noonimg src={noon}  />
          <Noonline />
          <Noonp >
            Noon
          </Noonp>
          <Four2>
            Stay updated on Noon prices
           with comprehensive price
             history.
          </Four2>
          <div className="flex">
          <Noonbu >
            View More &nbsp;
            
          </Noonbu>
          <p className="mt-[8px] text-[#2699D8]">
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
          <Cryimg src={fc}  />
          <Cryline />
          <Cryp>
            FirstCry
          </Cryp>
          <Four3>
            Stay updated on FirstCry prices
            with comprehensive price
             history.
          </Four3>
          <div className="flex">
          <Crybu >
            View More &nbsp;
            
          </Crybu>
          <p className="mt-[8px] text-[#2699D8]">
              <BsArrowRight />
            </p>
          </div>
        </div>
      </Amazon1>
    </div>

      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20}}>
      <Para>
        Lorem ipsum dolor sit amet consectetur dolor sit
      </Para>

      <Para1>
        <Para2>
        <div className="rounded-[8px] bg-[#FFF] px-[20px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">120%</p>
          <Para3>
            Lorem ipsum
          </Para3>
        </div>
        <div className="rounded-[8px] bg-[#FFF] px-[20px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">430+</p>
          <Para3>
            Lorem ipsum
          </Para3>
        </div></Para2>
        <Para2>
        <div className="rounded-[8px] bg-[#FFF] px-[20px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold  text-center ">85+</p>
          <Para3>
            Lorem ipsum
          </Para3>
        </div>
        <div className="rounded-[8px] bg-[#FFF] px-[20px] mr-[20px] shadow-md">
          <p className="text-[#444] text-[28px] font-bold text-center">99%</p>
          <Para3>
            Lorem ipsum
          </Para3>
        </div></Para2>
      </Para1>
      </div>


    <Div4>
      <Div41>
          <One1p>Lorem ipsum</One1p>
        
        <One2p>
          Lorem ipsum dolor sit amet consectetur
        </One2p>
        <One3p>
          Lorem ipsum dolor sit amet consectetur. Iaculis sed 
          imperdiet viverra iaculis morbi mollis massa integer pretium
         sed.Sit in nulla imperdiet tempor ipsum.
        </One3p>
        <Hline/>
        <Time1>
          <Timediv>
            <Time1img src={time} />
            <Time11p>
              Lorem&nbsp;Ipsum
            </Time11p>
            <Time1p>
              Lorem ipsum dolor sit amet consectetur. Iaculis sed viverra
               pretium sed.
            </Time1p>
          </Timediv>
          <Timediv>
            <img src={time} className="w-[64px] h-[64px]" />
            <Time22p>
              Lorem&nbsp;Ipsum
            </Time22p>
            <Time2p>
              Lorem ipsum dolor sit amet consectetur. Iaculis sed viverra
              pretium sed.
            </Time2p>
          </Timediv>
        </Time1>
      </Div41>
      <div>
            <Img1
              src={Reactangle2}/>
      </div>
    </Div4>

      <Rectangle>
        <ResContent2>
          <Rectangleimg
            src={Reactangle}/>
        </ResContent2>

        <ResContent1>
          <Rectanglep>
             Lorem Ipsum
          </Rectanglep>
          <Reactangle1p>
            Lorem ipsum dolor sit
            amet consectetur Viverra,
            Imperdiet.
          </Reactangle1p>
          <Reactangle2p>
            Lorem ipsum dolor sit amet consectetur. Iaculis sed
            imperdiet viverra iaculis morbi euismod vel sollicitudin
            tortor Sed vitae.
          </Reactangle2p>
          <Hline1/>
          <Tick1>
            <div className="flex gap-5">
            <Tick/>
            <Tickp>Lorem ipsum dolor sit</Tickp>
            </div>
            <div className="flex gap-5">
            <Tick/>
            <Tickp1>Lorem ipsum dolor sit</Tickp1>
            </div>
          </Tick1>
           
          <Tick1>
          <div className="flex gap-5">
            <Tick/>
         
            <Tickp>Lorem ipsum dolor sit</Tickp>
            </div>
            <div className="flex gap-5">
            <Tick/>
         
            <Tickp1>Lorem ipsum dolor sit</Tickp1>
            </div>
          </Tick1>
          <Tick1>
          <div className="flex gap-5">
            <Tick/>
           
            <Tickp>Lorem ipsum dolor sit</Tickp>
            </div>
            <div className="flex gap-5">
            <Tick />
          
            <Tickp1>Lorem ipsum dolor sit</Tickp1>
            </div>
          </Tick1>
        </ResContent1>
      </Rectangle>

      {/* <div className="bg-[F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px] "> */}
    <Div3>
      <Div41>
          <Two1>
            Lorem ipsum
          </Two1>
        
        <Two11p>
          Lorem ipsum dolor sit amet consectetur
        </Two11p>
        <Two2p>
          Lorem ipsum dolor sit amet consectetur. Iaculis sed
          imperdiet viverra iaculis morbi mollis massa integer pretium
          sed.Sit in nulla imperdiet tempor ipsum.
        </Two2p>
        <Hline2/>
        <Hline2div>
          <Hline2div1>
               <Hline2div1pp >
                  25%</Hline2div1pp>
               <Hline2div1p >
                  Lorem Ipsum</Hline2div1p>
                
          </Hline2div1>
          <Hline2div1>
                <Hline2div1pp >
                  1.7X</Hline2div1pp>
               <Hline2div1p >
                  Lorem Ipsum</Hline2div1p>
          </Hline2div1>
        </Hline2div>
      </Div41>
        <div>
          <Div2img
          src={Reactangle2}
         
        /></div>
    </Div3>

      <Rectangle2>
        <Rectangle22>
          <Reactangle2img
            src={Reactangle1}/>
        </Rectangle22>

        <Rectangle21>
          <Reactangle3p>
            Lorem Ipsum
          </Reactangle3p>
          <Reactangle4p>
            Lorem ipsum dolor sit 
            amet consectetur
          </Reactangle4p>
          <Reactangle5p>
            Lorem ipsum dolor sit amet consectetur. Iaculis sed 
            imperdiet viverra iaculis morbi mollis massa integer pretium 
            sed. Sit in nulla imperdiet tempor ipsum.
          </Reactangle5p>

          <Time0>
            <Timediv>
              <img
                src={time}
                className="w-[64px] h-[64px] mb-[5px]"
              />
              <p className="text-[#444] text-[18px] font-medium ">
                Lorem Ipsum
              </p>
              <Time3p>
                Lorem ipsum dolor sit amet consectetur. Iaculis sed
                viverra pretium sed.
              </Time3p>
            </Timediv>
            <Timediv>
              <Img2
                src={time}/>
              <Img2p>
                Lorem Ipsum
              </Img2p>
              <Time4p>
                Lorem ipsum dolor sit amet consectetur. Iaculis sed 
                viverra pretium sed.
              </Time4p>
            </Timediv>
          </Time0>
        </Rectangle21>
      </Rectangle2>

      <Div2>
        <Div41>
            <Two1>Lorem ipsum</Two1>
            <Two11p>Lorem ipsum dolor sit amet consectetur</Two11p>
            <Two3p>
          Lorem ipsum dolor sit amet consectetur. Iaculis sed 
          imperdiet viverra iaculis morbi mollis massa integer pretium
          sed. Sit in nulla imperdiet tempor ipsum.
            </Two3p>
           <Hline2 />  

            <Menu4/>
            <Menu4/>
            <Menu4/>
        </Div41>
        <div>
          <Div2img
          src={Reactangle2}
          
        />
        </div>
      </Div2>

      <Div1>
        <div style={{paddingRight: 80}}>
          <Div1p>
            Lorem Ipsum Dolor Sit Amet Consectetur
          </Div1p>
          <Div2p>
            Lorem ipsum dolor sit amet consectetur. Iaculis sed 
            imperdiet viverra iaculis morbi mollis massa integer pretium 
            sed. Sit in nulla imperdiet tempor ipsum.
          </Div2p>
          <Flex>
            <Flexbu>
              Get Started
              <IoIosArrowForward />
              </Flexbu>
           </Flex>

           {/* <div style={{display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 30}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 10, height: "100%", width: "100%", padding: 10}}>
            Get Started
            <IoIosArrowForward />
            </div>
           </div> */}
            {/* <Flexp >
              <IoIosArrowForward />
            </Flexp> */}
         
        </div>
        <Img4 >

          <Div1img
            src={Reactangle12440}
          />
          <Div1img1
            src={Reactangle12440}
          />
       </Img4>
      </Div1>

      {/* <div className="bg-[#F7F7F7] pt-[1px] mt-[50px] mb-[70px] pb-[35px]"> */}
      <Div5>
      <Div41>
        <Test>Testimonials</Test>
       

        <Textp>
          Lorem ipsum dolor sit amet consectetur  
          {/* <Icon>
       
           <FontAwesomeIcon icon={faCircleChevronLeft} />

            <p className="mt-[-10px] ml-[10px]">
            <FontAwesomeIcon icon={faCircleChevronRight} />
            </p>
          </Icon> */}
         </Textp>
     </Div41>
         {/* <StyledCarousel> */}
         <Carousel cols={4} rows={1} gap={10} loop >
            {Coursedata.map((item, index) => (
          <Carousel.Item key={index}>
          <Test1 title={item.title} src={item.img} title1={item.title1} title2={item.title2} src1={item.img1}/>
         </Carousel.Item>
        ))}
         </Carousel>
      </Div5>

   <Div2>
      <Div41>
        <Div6p>
        Lorem Ipsum Dolor Sit Amet
      </Div6p>
      <Div6pp >
        Lorem ipsum dolor sit amet ipsum dolor sit amet
      </Div6pp>
      <Menudiv1>
        <div>
         <Accordion1/>
         <Accordion1/>
         <Accordion1/>
         <Accordion1/>
         </div>
         <div>
         <Accordion1/>
         <Accordion1/>
         <Accordion1/>
         <Accordion1/>
         </div>
      </Menudiv1>

      {/* <Menudiv>
        <Menu1>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
          />
        </Menu1>
        <Menu1>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
          />
        </Menu1>
      </Menudiv> */}
           

        </Div41>
    </Div2>


  <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10}}>
      <Divpricing>
        PRICING
      </Divpricing>
      <Divpricingpp>
        Pricing for Metrix IQ
      </Divpricingpp>
      <Divpricingp >
        Lorem ipsum dolor sit amet consectetur. Iaculis sed imperdiet viverra
        iaculis morbi euismod vel sollicitudin tortor. Sed vitae vulputate maecenas mollis massa integer
        pretium sed. Sit in nulla imperdiet tempor ipsum.
      </Divpricingp>

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
      </div>

    <Divpp>
        <div>
          <Pp>
            Lorem ipsum dolor sit
             amet consectetur
          </Pp>
          <Ppp>
            Lorem ipsum dolor sit amet consectetur. Iaculis sed
            imperdiet viverra iaculis morbi mollis massa integer pretium
            sed.Sit in nulla imperdiet tempor ipsum.
          </Ppp>
        </div>
      <Divform>
          <Form>
            {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Formdiv>
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
                
                  }}
                />
              </Formdiv>
              <Formdiv1>
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
                  
                  }}
                />
              </Formdiv1>
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
          <Formbu>
            Get A Call back
          </Formbu>
        </Divform>
      </Divpp>

</div>
     

      <Last>
        <div>
          <img src={last} className="w-[227px] h-[49px] mt-[50px] " />
          <Contact>
            CONTACT DETAILS :
          </Contact>
          <p className="text-[#FFF] text-[18px] font-medium  mt-[20px] uppercase ">
            Phone : &nbsp;
            <span className="font-normal">+044 2222 4444 </span>
          </p>
          <p className="text-[#FFF] text-[18px] font-medium  mt-[20px] uppercase">
            Email : &nbsp;
            <span className="font-normal">matrixIQ@thebox.com </span>
          </p>
        </div>

        <div>
          <News>
            Newsletter:
          </News>
          <Input
            type="email"
            placeholder="Your email here"
           
          />
          &emsp;
          <Button>
            Get Free Trial
          </Button>
          <Social>
            Social:
          </Social>
          <div className="flex">
            <Icons src={facebook}/>
            &emsp;
            <Icons src={linkedin} />
            &emsp;
            <Icons src={twitter} />
          </div>
        </div>
      </Last>

      <Final>
        <Lastp>
          ©2023. Metrics IQ. All Rights Reserved.
        </Lastp>
        <Finalp >
          Privacy Policy Terms Of Service Cancellation & Refund Policy
        </Finalp>
      </Final>
    </>
  );
}
