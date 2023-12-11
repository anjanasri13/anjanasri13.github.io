import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 35px;
  @media screen and (max-width: 768px){
    margin-left: 0;
    flex-direction: column;
    display: flex;
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const HeroTitle = styled.p`
  color: #1B1B1B;
  font-size: 42px;
  font-weight: bold;
  line-height: 140%;
  text-transform: captilize;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const HeroPara = styled.p`
  color: #1B1B1B;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-transform: captilize;
  opacity: 0.7;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`;

export const HeroBtn = styled.button`
  border: none;
  border-radius: 108px;
  padding: 15px 22px;
  background-color: #5245A6;
  color: white;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;
// className="bg-[#5245A6] w-[1240px] h-[252px] rounded-[30px] flex justify-between items-center m-[20px]"
export const Box=styled.div`
background-color: #5245A6;
width:1240px;
height:252px;
border-radius:30px;
display:flex;
justify-content:space-between;
align-items:center;
margin:20px;
@media screen and (max-width: 768px){
    display:flex;
   flex-direction:column;
   height:510px;
   width:95%;
  }
`
// className="text-[#FCFCFC] text-[42px] capitalize font-bold"
export const Boxpara=styled.p`
color:#FCFCFC;
font-size:42px;
text-transform: capitalize;
font-weight:bold;
@media screen and (max-width: 768px){
    font-size:32px;
    text-align:center;
}
`
// className="text-[#FCFCFC] text-[18px] capitalize font-medium opacity-70"
export const Boxpara1=styled.p`
color:#FCFCFC;
font-size:18px;
text-transform: capitalize;
font-weight:500;
opacity:0.7;
@media screen and (max-width: 768px){
    font-size:18px;
    text-align:center;
}
`
// className="text-[#FCFCFC] text-[42px] captilize font-bold"
export const Boxpara4=styled.p`
color:#FCFCFC;
font-size:42px;
text-transform:capitalize;
font-weight:700;
@media screen and (max-width: 768px){
    text-align:center;
}
`
// className="rounded-[60px] bg-[#E5E3F2] justify-center items-center flex ml-[20px] mr-[1140px] py-[-1px] px-[16px] mt-[50px]"
export const Container1=styled.div`
border-radius:60px;
background-color:#E5E3F2;
justify-content:center;
align-items:center;
display:flex;
margin-left:20px;
margin-right:1140px;
padding: -1px 16px;
margin-top:50px;
`
// className="text-[#5245A6] text-[14px] font-semibold pt-[8px] uppercase text-center"
export const Container1p=styled.p`
border-radius:60px;
background-color:#E5E3F2;
color:#5245A6;
font-size:14px;
font-weight:600;
padding-top:8px;
text-transform:uppercase;
align-items:center;
@media screen and (max-width: 768px){
    margin-left:70px;
    padding:4px 8px;
   
    }
`

// className="text-[#444] text-[38px] font-bold capitalize ml-[20px] mt-[5px]
export const Container1p1=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
margin-left:20px;
margin-top:5px;
@media screen and (max-width: 768px){
    font-size:32px;
    align-items:center;
}
`
// className="text-[#444] text-[18px] font-medium capitalize opacity-70 w-[818px] h-[105px] leading-[30px] ml-[20px] "
export const Container1p2=styled.p`
color:#444;
font-size:18px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
margin-left:20px;
width:818px;
height:105px;
line-height:30px;

@media screen and (max-width: 768px){
    align-items:center;
    width:380px;
    margin-bottom:90px;
}
`
// className="flex justify-evenly items-center"
export const Amazon1=styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  @media screen and (max-width: 768px){
    margin-top:90px;
  }
`
// className="text-[#444] text-[38px] font-bold ml-[390px] mt-[70px] text-center capitalize w-[528px]"
export const Para=styled.p`
color:#444;
font-size:38px;
font-weight:bold;
margin-top:70px;
margin-left:390px;
text-align: center;
text-transform: capitalize;
width:528px;
@media screen and (max-width: 768px){
    font-size:32px;
    margin-left:10px;
    width:100%;
  }
`
// className="flex items-center ml-[320px]"
export const Para1=styled.div`
display:flex;
align-items:center;
margin-left:320px;
@media screen and (max-width: 768px){
  gap:10px;
  margin-left:30px;
  display:flex;
  flex-direction:column;
}
 `
//  className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[70px] ml-[30px] mr-[1090px] p-[1px]"
export const One1=styled.div`
background-color:#E5E3F2;
border-radius:60px;
justify-content:center;
align-items:center;
margin-right:1090px;
margin-top:70px;
margin-left:30px;
@media screen and (max-width: 768px){
    margin-left:19px;
    margin-right:230px;
}
`
// className="text-[#5245A6] text-center uppercase text-[14px] pt-[9px] font-semibold"
export const One1p=styled.p`
color:#5245A6;
align-items:center;
text-transform:uppercase;
font-size:14px;
padding-top:9px;
padding-left:20px;
padding-bottom:9px;
font-weight:600;
`
// className="text-[#444] text-[38px] ml-[20px] font-bold capitalize"
export const One2p=styled.p`
color:#444;
font-size:38px;
margin-left:20px;
font-weight:700;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:32px;
  width:100%;
  margin-bottom:40px;
}
`
// className="text-[#444] text-[18px] ml-[20px] font-medium capitalize opacity-70"
export const One3p=styled.p`
color:#444;
font-size:18px;
margin-left:20px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
width:40%;
@media screen and (max-width: 768px){
  width:100%;
  align-items:center;
}
` 
// className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]"
export const Hline=styled.div`
width:490px;
height:1px;
background-color:#00000033;
margin-left:20px;
margin-top:10px;
@media screen and (max-width: 768px){
  width:360px;
}
`
// className="flex mt-[30px]">
export const Time1=styled.div`
display:flex;
margin-top:30px;
@media screen and (max-width: 768px){
 margin-left:10px;
}
`
// className="text-[#444] text-[18px] font-medium ml-[20px]"
export const Time11p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
margin-left:20px;
@media screen and (max-width: 768px){
  text-align:center;
}
`

// className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize"
export const Time1p=styled.div`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
margin-left:20px;
text-transform:capitalize;
width:70%;
@media screen and (max-width: 768px){
width:125%;
}
`
export const Time2=styled.div`
@media screen and (max-width: 768px){
  margin-left:65px;
 }
`

export const Time22p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
margin-left:20px;
@media screen and (max-width: 768px){
  text-align:center;
}
`
// className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize"
export const Time2p=styled.div`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
margin-left:20px;
text-transform:capitalize;
width:70%;
@media screen and (max-width: 768px){
width:130%;
}
`
// className="w-[632px] h-[505px] rounded-[30px] mt-[-230px]"
export const Img1=styled.img`
 width:632px;
 height:505px;
 border-radius:30px;
 margin-top:-230px;
 @media screen and (max-width: 768px){
  margin-top:270px;
  margin-left:-330px;
  height:450px;
 }
`
// className="flex"
export const Rectangle=styled.div`
display:flex;
@media screen and (max-width: 768px){
display:flex;
flex-direction:column;
}
`
// className="w-[608px] h-[663px] rounded-[30px] ml-[40px]"
export const Rectangleimg=styled.img`
width:658px;
height:663px;
border-radius:30px;
margin-left:40px;
@media screen and (max-width: 768px){
margin-left:10px;
height:450px;
}
`
// className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[50px] mr-[400px] 
// mt-[30px] rounded-[60px] py-[8px] px-[12px]"
export const Rectanglep=styled.p`
color:#5245A6;
font-size:14px;
font-weight:600;
text-transform:uppercase;
background-color:#E5E3F2;
border-radius:60px;
margin-left:70px;
margin-right:590px;
margin-top:30px;
padding:8px 12px;
@media screen and (max-width: 768px){
padding:8px 16px;
margin-right:245px;
margin-left:17px;
}
`
// className="text-[#444] text-[38px] font-bold capitalize ml-[50px]"
export const Reactangle1p=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
margin-left:70px;
width:60%;
@media screen and (max-width: 768px){
  font-size:32px;
  width:100%;
  margin-left:20px;
}
`
// className="text-[#444] text-[18px] font-medium opacity-70 leading-[30px] capitalize ml-[50px]"
export const Reactangle2p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
opacity:0.7;
line-height:30px;
margin-left:70px;
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
width:90%;
margin-left:20px;
}
`
// className="h-[1px] w-[505px] bg-[#00000033] ml-[38px] mt-[10px]"
export const Hline1=styled.div`
width:505px;
height:1px;
background-color:#00000033;
margin-left:58px;
margin-top:10px;
@media screen and (max-width: 768px){
  width:350px;
  margin-left:20px;
}
`
// className="flex mt-[30px] ml-[50px]"
export const Tick1=styled.div`
display:flex;
margin-left:70px;
@media screen and (max-width: 768px){
  margin-left:25px;
}
`
// className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[90px] ml-[30px] mr-[1090px] pt-[1px]"
export const Two1=styled.div`
background-color:#E5E3F2;
border-radius:60px;
justify-content:center;
align-items:center;
margin-right:1090px;
margin-top:90px;
margin-left:30px;
padding-top:1px;
@media screen and (max-width: 768px){
   margin-right:230px;
   margin-left:19px;
}
`
// className="text-[#5245A6] text-center uppercase text-[14px] py-[5px] font-semibold "
export const Two1p=styled.p`
color:#5245A6;
align-items;center;
text-transform:uppercase;
font-size:14px;
padding:5px 20px;
font-weight:600;
`
// className="text-[#444] text-[38px] ml-[20px] font-bold capitalize"
export const Two2p=styled.p`
color:#444;
font-size:38px;
margin-left:20px;
font-weight:700;
text-transform:capitalize;
width:40%;
@media screen and (max-width: 768px){
font-size:32px;
width:100%;
}
`
// className="text-[#444] text-[18px] ml-[20px] font-medium leading-[30px] opacity-70 capitalize"
export const Two3p=styled.p`
color:#444;
font-size:18px;
margin-left:20px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
line-height:30px;
width:40%;
@media screen and (max-width: 768px){
  width:100%;
  align-items:center;
}
`
// className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]"
export const Hline2=styled.div`
width:505px;
height:1px;
background-color:#00000033;
margin-left:20px;
margin-top:10px;
@media screen and (max-width: 768px){
   width:350px;
   margin-left:20px;

}
`
// className="flex"
export const Rectangle2=styled.div`
display:flex;
@media screen and (max-width: 768px){
display:flex;
flex-direction:column;
}
`
// className="w-[580px] h-[473px] ml-[40px] rounded-[30px]"
export const Reactangle2img=styled.img`
width:750px;
height:473px;
border-radius:30px;
margin-left:40px;
@media screen and (max-width: 768px){
margin-left:10px;
height:450px;
margin-top:-120px;
}
`
// className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[59px] mr-[400px] 
//           mt-[10px] rounded-[60px] py-[9px] px-[30px]"
export const Reactangle3p=styled.p`
color:#5245A6;
font-size:14px;
font-weight:600;
text-transform:uppercase;
background-color:#E5E3F2;
border-radius:60px;
margin-left:65px;
margin-right:570px;
margin-top:30px;
padding-left:30px;
padding-top:5px;
padding-bottom:5px;
@media screen and (max-width: 768px){
padding:8px 16px;
margin-right:245px;
margin-left:17px;
}
`
// className="text-[#444] text-[38px] font-bold capitalize ml-[59px] mt-[10px]"
export const Reactangle4p=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
margin-left:70px;
margin-top:10px;
width:60%;
@media screen and (max-width: 768px){
  font-size:32px;
  width:100%;
  margin-left:20px;
}
`
export const Time0=styled.div`
display:flex;
margin-top:30px;
margin-left:20px;
justify-content:space-between;
@media screen and (max-width: 768px){
margin-left:-25px;
}
`
// className="flex mt-[30px]"
export const Time11=styled.div`
display:flex;
margin-top:30px;
margin-left:30px;
@media screen and (max-width: 768px){
margin-left:-20px;
}
`
// className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] capitalize ml-[59px]"
export const Time3p=styled.p`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:30px;
margin-left:59px;
width:50%;
@media screen and (max-width: 768px){
width:80%;
}
`
export const Time4p=styled.p`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:30px;
width:60%;
@media screen and (max-width: 768px){
width:85%;
margin-left:30px;
margin-top:20px;
}
`
// className="w-[64px] h-[64px]  mb-[5px]  "
export const Img2=styled.img`
width:64px;
height:64px;
margin-botton:5px;
@media screen and (max-width: 768px){
margin-left:30px;
}
`
// className="text-[#444] text-[18px] font-medium "
export const Img2p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
@media screen and (max-width: 768px){
  margin-left:30px;
  }
`
// className="w-[632px] h-[505px] rounded-[30px] ml-[580px] mt-[-420px]"
export const Menuimg=styled.img`
width:632px;
height:505px;
border-radius:30px;
margin-left:580px;
margin-top:-420px;
@media screen and (max-width: 768px){
  margin-top:50px;
  margin-left:10px;
`