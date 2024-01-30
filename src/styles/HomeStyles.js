import styled from "styled-components";

// className="flex items-center justify-between mt-[30px]"
// export const Nav=styled.nav`
//  display:flex;
//  align-items:center;
//  justify-content:space-between;
//  margin-top:30px;

// `
// export const Contain=styled.div`
//     max-width: 1100px;
//   margin: 0 auto;
//   padding: 0 15px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 100%;

// `
// export const Logo=styled.div`

// `
// export const Navelements=styled.div`
// `
// export const Ul=styled.ul`
// display: flex;
// justify-content: space-between;
// list-style-type: none;
// `

// div className="flex items-center justify-between mt-[30px]"
export const Header1=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:30px;
@media screen and (max-width: 768px){
  display:none;
}
`


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px){
   flex-direction: column;
   margin-bottom:10px;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: 375px){
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
  font-weight: 700;
  line-height: 140%;
  text-transform: capitalize;
  width:67%;
  @media screen and (max-width:768px) {
    font-size: 24px;
    text-align: center;
    width:100%;
  
  }
`;

export const HeroPara = styled.p`
  color: #1B1B1B;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-transform: capitalize;
  opacity: 0.7;
  width:50%;
 margin-left:-130px;
  @media screen and (max-width: 768px){
    text-align: center;
    width:100%;
    margin-left:5px;
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
  margin-left:-470px;
  @media screen and (max-width: 768px){
   margin-left:10px;
  }

`;
// className="flex justify-between items-center m-[30px]"
export const Waves=styled.div`
display:flex;
gap:100px;
padding-left:80px;
@media screen and (max-width: 768px){
  padding-left:0px;
  gap:0px;
}
`
export const Waves1=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
@media screen and (max-width: 768px){
margin-left:5px;
margin:30px 0px;

}
`
// className="w-[21px] h-[32px] m-[10px]"
export const Wavesimg1=styled.img`
width:10%;
height:50%;
@media screen and (max-width: 768px){
  width:50%;
  height:30%;
}

`
// className="text-[#444] text-[18px] font-bold mt-[15px]"
export const Wavesp=styled.p`
color:#444;
font-size:18px;
font-weight:700;
@media screen and (max-width: 768px){
 font-size:12px;
}
`
export const Span=styled.span`
color:#444;
font-size:18px;
font-weight:400;
@media screen and (max-width: 768px){
 font-size:10px;
}
`
export const Span1=styled.span`
color:#444;
font-size:24px;
font-weight:400;
@media screen and (max-width: 768px){
 font-size:12px;
}
`
// className="w-[21px] h-[32px] m-[10px]"
export const Wavesimg=styled.img`
width:10%;
height:50%;
@media screen and (max-width: 768px){
  width:50%;
height:30%;
 }
`
// className="w-[55px] h-[32px] mt-[5px] ml-[15px]"
export const Artimg1=styled.img`
width:20%;
height:40%;
@media screen and (max-width: 768px){
  width:15%;
  height:30%;
  margin-left:5px;
   }
`
// className="w-[55px] h-[32px] m-[10px] mr-[3px]" 
export const Artimg=styled.img`
width:20%;
height:40%;
@media screen and (max-width: 768px){
  width:15%;
  height:30%;
  margin-left:5px;
  
   }
`
// className="text-[#444] text-[24px] font-bold "
export const Artp=styled.p`
color:#444;
font-size:24px;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:12px;
   }
`
export const Smart=styled.img`
width:30%;
height:50%;
margin-left:-20px;
@media screen and (max-width: 768px){
  width:20%;
  height:40%;
   }
`
export const Smartp=styled.p`
color:#444;
font-size:24px;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:12px;
   }
`
// className="w-[32px] h-[32px] mt-[4px] ml-[5px]"
export const Zoo=styled.img`
width:20%;
height:50%;
@media screen and (max-width: 768px){
  width:20%;
  height:40%;
  margin-left:-5px;
   }
`
export const Zoop=styled.p`
color:#444;
font-size:24px;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:12px;
   }
`
// className="w-[23px] h-[29px] m-[15px] mt-[7px]"
export const Kon=styled.img`
width:20%;
height:40%;
@media screen and (max-width: 768px){
  width:20%;
  height:30%;
  margin-left:-5px;
   }
`
export const Konp=styled.p`
color:#444;
font-size:24px;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:10px;
   }
`

// className="bg-[#5245A6] w-[1240px] h-[252px] rounded-[30px] flex justify-between items-center m-[20px]"
export const Box=styled.div`
background-color: #5245A6;
width:80%;
height:80%;
border-radius:30px;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:100px;
margin-top:50px;
padding: 30px 130px;
@media screen and  (max-width:768px){
   display:flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   height:30%;
   width:90%;
   padding: 24px 30px;
   margin-left:10px;

 }
`
// className="text-[#FCFCFC] text-[42px] capitalize font-bold"
export const Boxpara=styled.p`
color:#FCFCFC;
font-size:42px;
text-transform: capitalize;
font-weight:bold;
@media screen and (max-width: 768px){
    font-size:24px;
    text-align:center;
    margin-top:20px;
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
  font-size:16px;
  text-align:center;
}
`
export const BoxT=styled.div`
display:flex;
gap: 30px;
@media screen and (max-width: 768px){
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
 }`

// className="text-[#FCFCFC] text-[42px] captilize font-bold"
export const Boxpara4=styled.p`
color:#FCFCFC;
font-size:42px;
text-transform:capitalize;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:24px;
}
`
export const Boxpara5=styled.p`
color:#FCFCFC;
font-size:42px;
text-transform:capitalize;
font-weight:700;
@media screen and (max-width: 768px){
  font-size:24px;
}
`
// className="w-[114px] h-[15px]"
export const Star=styled.img`
width:80%;
height:15px;
@media screen and (max-width: 768px){
 }
`
export const Star1=styled.img`
width:80%;
height:15px;
@media screen and (max-width: 768px){
 }
`
// className="text-[#FCFCFC] text-[18px] captilize font-medium opacity-70"
export const Boxp=styled.p`
 color:#FCFCFC;
 font-size:18px;
 text-transform:capitalize;
 font-weight:500;
 opacity:0.7;
 width:50%;
 @media screen and (max-width: 768px){
  font-size:14px;
 }
`
export const Boxp1=styled.p`
 color:#FCFCFC;
 font-size:18px;
 text-transform:capitalize;
 font-weight:500;
 opacity:0.7;
 width:50%;
 @media screen and (max-width: 768px){
  font-size:14px;
  display:flex;
  justify-content:center;
  align-items:center;
 }`

// className="rounded-[60px] bg-[#E5E3F2] justify-center items-center flex ml-[20px] mr-[1140px] py-[-1px] px-[16px] mt-[50px]"
// export const Container1=styled.div`
// border-radius:60px;
// background-color:#E5E3F2;
// justify-content:center;
// align-items:center;
// display:flex;
// margin-left:20px;
// margin-right:1350px;
// padding: -1px 16px;
// margin-top:50px;
// `

// style={{display: "flex", flexDirection: "column", gap: 20, padding:50}}
export const Containerdiv=styled.div`
display: flex;
 flex-direction: column;
  padding-left:40px;
   @media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
   align-items:center;
   justify-content:center;
   padding-left:20px;
   }
`
// className="text-[#5245A6] text-[14px] font-semibold pt-[8px] uppercase text-center"
export const Container1p=styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:7%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
@media screen and (max-width: 768px){
  font-size:10px;
  padding:6px 12px;
width:20%;
 }`


// className="text-[#444] text-[38px] font-bold capitalize ml-[20px] mt-[5px]
export const Container1p1=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
@media screen and (max-width: 768px){
    font-size:24px;
    text-align:center;
    width:100%;
}
`
// className="text-[#444] text-[18px] font-medium capitalize opacity-70 w-[818px] h-[105px] leading-[30px] ml-[20px] "
export const Container1p2=styled.p`
color:#444;
font-size:18px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
width:55%;
height:105px;
line-height:30px;
@media screen and  (max-width:768px){
  font-size:16px;
   width:105%;
   text-align:center;
  margin-bottom:50px;   
}
`
// className="flex ml-[20px] justify-between"
export const Pricing=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;
@media screen and  (max-width:768px){
  flex-direction:column;
  justify-content:flex-start;
  margin-bottom:20px;
}
`
// style={{ color:"#1B1B1B",
//         fontSize:"16px",
//         fontWeight:500,
//         textTransform:'capitalize',
//         opacity: 0.7,
//         lineHeight: "160%",
//         width:"75%"
export const OneC=styled.p`
       color:"#1B1B1B";
        font-size:16px;
         font-weight:500;
        text-Transform:capitalize;
        opacity: 0.7;
        line-height: 160%;
        width:80%;
        @media screen and  (max-width:768px){
          width:92%;
        } 
`
export const One1C=styled.p`
       color:"#1B1B1B";
        font-size:16px;
         font-weight:500;
        text-Transform:capitalize;
        opacity: 0.7;
        line-height: 160%;
        width:75%;
        @media screen and  (max-width:768px){
          width:90%;
        } 
`
// p style={{ color:"#1B1B1B",
//         fontSize:"16px",
//         fontWeight:500,
//         textTransform:'capitalize',
//         opacity: 0.7,
//         lineHeight: "160%",
//         width:"85%"
//         }}
export const ThreeC=styled.p`
color:#1B1B1B;
font-size:16px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
line-height:160%;
width:85%;
@media screen and  (max-width:768px){
  width:90%;
} 
`
// p style={{ color:"#1B1B1B",
//         fontSize:"16px",
//         fontWeight:500,
//         textTransform:'capitalize',
//         opacity: 0.7,
//         lineHeight: "160%",
//         width:"85%"
//         }
export const SvnC=styled.p`
color:#1B1B1B;
font-size:16px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
line-height:160%;
width:85%;
@media screen and  (max-width:768px){
  width:95%;
} `

export const Pricing1=styled.div`
margin-left:150px;
@media screen and  (max-width:768px){
margin-left:0px;  
}
`
// className="rounded-[60px] bg-[#E5E3F2] justify-center items-center flex ml-[680px] mr-[680px] mt-[70px] pt-[5px]"
// className="text-[#5245A6] text-[14px] font-semibold pt-[5px] uppercase text-center"
export const Divservices =styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:7%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
margin-top:70px;
@media screen and  (max-width:768px){
  font-size:10px;
  padding:6px 12px;
  justify-content: center;
align-items: center;
width:20%;
}
`
// className="text-[#444] text-[38px] font-bold text-center capitalize m-[6px]"
export const Divp1=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-align:center;
text-transform:capitalize;
@media screen and  (max-width:768px){
font-size:24px;
width:90%;
}
`
// className="text-[#444] text-[18px] font-normal text-center capitalize opacity-70 leading-[30px] w-full h-[105px]"
export const Divp2=styled.p`
color:#444;
font-size:18px;
font-weight:400;
text-transform:capitalize;
opacity:0.7;
line-height:30px;
width:52%;
height:105px;
text-align:center;
@media screen and  (max-width:768px){
font-size:16px;
width:100%;
}
`
// className="flex justify-evenly items-center"
export const Amazon1=styled.div`
  display:flex;
  justify-content:space-evenly;
 @media screen and (max-width: 768px){
    margin-top:90px;
    flex-direction:column;
   
    
  }
`
// className="w-[40px] h-[40px] ml-[130px]" 
export const Amazonimg=styled.img`
width:40px;
height:40px;
@media screen and (max-width: 768px){

}
`
// className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]"
export const Line=styled.div`
width:200px;
height:1px;
background-color:#4444444D;
@media screen and (max-width: 768px){
 
 }
`
// className="text-[#444] text-[24px] font-semibold capitalize ml-[110px]"
export const Amazonp=styled.p`
color:#444;
font-size:24px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){

}
`
// className="w-[40px] h-[40px] ml-[130px]"
export const Flipimg=styled.img`
width:40px;
height:40px;
@media screen and (max-width: 768px){

}
`
// className="w-[200px] h-[1px] ml-[180px] mt-[10px] bg-[#4444444D]" 
export const Flipline=styled.div`
width:200px;
height:1px;
background-color:#4444444D;
@media screen and (max-width: 768px){
 
}
`
// className="text-[#444] text-[24px] font-semibold capitalize ml-[230px]"
export const Flipp=styled.p`
color:#444;
font-size:24px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){
  
 }
`
export const Cryimg=styled.img`
width:40px;
height:40px;
@media screen and (max-width: 768px){

}
`
// className="w-[190px] h-[1px] ml-[60px] mt-[10px] bg-[#4444444D]"
export const Cryline=styled.div`
width:200px;
height:1px;
background-color:#4444444D;
@media screen and (max-width: 768px){

}
`
// className="text-[#444] text-[24px] font-semibold capitalize ml-[120px]"
export const Cryp=styled.p`
color:#444;
font-size:24px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){
  
 }
`
export const Six=styled.p`
font-size:18px;
font-weight:400;
text-transform:capitalize;
opacity:0.7;
text-align:center;
line-height: 30px;
width:230px;
@media screen and (max-width: 768px){
width:280px
 }
`
// className="flex text-[#2699D8] text-[18px] font-semibold capitalize ml-[95px]"
export const Sixbu=styled.button`
display:flex;
color:#2699D8;
font-size:18px;
font-weight:600;
text-transform:capitalize;

@media screen and (max-width: 768px){

   }
`
export const Flipbu=styled.button`
display:flex;
color:#2699D8;
font-size:18px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){
 
   }
`
export const Six2=styled.p`
font-size:18px;
font-weight:400;
text-transform:capitalize;
opacity:0.7;
text-align: center;
line-height: 30px;
width:60%;
@media screen and (max-width: 768px){
  width:70%;   
 }
`
// className="w-[40px] h-[40px] ml-[200px]"
export const Noonimg=styled.img`
width:40px;
height:40px;
@media screen and (max-width: 768px){
  
 }
`
// className="w-[190px] h-[1px] ml-[130px] mt-[10px] bg-[#4444444D]"
export const Noonline=styled.div`
width:200px;
height:1px;
background-color:#4444444D;
@media screen and (max-width: 768px){
 
 }
`
// className="text-[#444] text-[24px] font-semibold capitalize ml-[190px]"
export const Noonp=styled.p`
color:#444;
font-size:24px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){
 
 }
`
export const Noonbu=styled.button`
display:flex;
color:#2699D8;
font-size:18px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){

   }
`
export const Four2=styled.p`
font-size:18px;
font-weight:400;
text-transform:capitalize;
opacity:0.7;
text-align: center;
line-height: 30px;
width:60%;
@media screen and (max-width: 768px){
  width:70%;
 }
`
export const Four3=styled.p`
font-size:18px;
font-weight:400;
text-transform:capitalize;
opacity:0.7;
text-align: center;
line-height: 30px;
width:60%;
@media screen and (max-width: 768px){
  width:70%;
 }
`

export const Crybu=styled.button`
display:flex;
color:#2699D8;
font-size:18px;
font-weight:600;
text-transform:capitalize;
@media screen and (max-width: 768px){
   }
`

// className="text-[#444] text-[38px] font-bold ml-[390px] mt-[70px] text-center capitalize w-[528px]"
export const Para=styled.p`
color:#444;
font-size:38px;
font-weight:bold;
margin-top:70px;
text-align:center;
text-transform: capitalize;
width:60%;
@media screen and (max-width: 768px){
  width: 100%;
    font-size:24px;
  }
`
// className="flex items-center ml-[320px]"
export const Para1=styled.div`
display:flex;
align-items:center;
@media screen and (max-width: 768px){
  flex-direction:column;
  gap:20px;
}
 `
 export const Para2=styled.div`
 display:flex;
 justify-content:space-between;
 @media screen and (max-width: 768px){

 }
 `
//  className="text-[#444] text-[16px] font-medium opacity-70"
export const Para3=styled.p`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
@media screen and (max-width: 768px){
  width:100%;
 }
`
// //  className="rounded-[60px] bg-[#E5E3F2] justify-center items-center mt-[70px] ml-[30px] mr-[1090px] p-[1px]"
// export const One1=styled.div`
// background-color:#E5E3F2;
// border-radius:60px;
// justify-content:center;
// align-items:center;
// margin-right:1340px;
// margin-top:70px;
// margin-left:30px;
// @media screen and (max-width: 768px){
//     margin-right:220px;
//     margin-left:20px;
// }
// `
// className="bg-[red] pt-[50px] mt-[70px] mb-[50px] pb-[100px] flex justify-evenly"
export const Div4=styled.div`
background-color:#F7F7F7;
margin-top:100px;
margin-bottom:70px;
padding-top:50px;
padding-bottom:50px;
display:flex;
width:100%;
padding-left:40px;
@media screen and (max-width: 768px){
  flex-direction:column;
  width:100%;
  padding-left:10px;
}
`
export const Div41=styled.div`

@media screen and (max-width: 768px){
 display:flex;
 flex-direction:column;
 gap:10;
 align-items:center;
 justify-content:center;
}
`
// className="text-[#5245A6] text-center uppercase text-[14px] pt-[9px] font-semibold"
export const One1p=styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:20%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
@media screen and (max-width: 768px){
  font-size:10px;
  width:30%;
  padding:6px 12px;
   }
`
// className="text-[#444] text-[38px] ml-[20px] font-bold capitalize"
export const One2p=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
  font-size:24px;
  text-align:center;
  width:80%;
  margin-bottom:20px;
}
`
// className="text-[#444] text-[18px] ml-[20px] font-medium capitalize opacity-70"
export const One3p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
text-transform:capitalize;
opacity:0.7;
width:72%;
@media screen and (max-width: 768px){
  font-size:16px;
  width:100%;
  text-align:center;
  font-weight:400;
}
` 
// className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]"
export const Hline=styled.div`
width:490px;
height:1px;
background-color:#00000033;
@media screen and (max-width: 768px){
  width:350px;
}
`
// className="flex mt-[30px]">
export const Time1=styled.div`
display:flex;
margin-top:30px;
@media screen and (max-width: 768px){
flex-direction:column;
gap:20px;
align-items:center;
justify-content:center;
}
`
export const Timediv=styled.div`
@media screen and (max-width: 768px){
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20;
}

`
// className="w-[64px] h-[64px] ml-[50px]"
export const Time1img=styled.img`
width:64px;
height:64px;
@media screen and (max-width: 768px){
  display:flex;
  align-items:center;
  justify-content:center;
 }
`
// className="text-[#444] text-[18px] font-medium ml-[20px]"
export const Time11p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
@media screen and (max-width: 768px){

}
`

// className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize"
export const Time1p=styled.div`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
text-align:center;
}
`
// export const Time2=styled.div`

// @media screen and (max-width: 768px){
  
//  }
// `

export const Time22p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
@media screen and (max-width: 768px){
 
}
`
// className="text-[#444] text-[16px] font-medium opacity-70 leading-[30px] ml-[20px] capitalize"
export const Time2p=styled.div`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
  text-align:center;
}
`
// className="w-[632px] h-[505px] rounded-[30px] mt-[-230px]"
export const Img1=styled.img`
 width:100%;
 height:100%;
 border-radius:30px;
 padding-right:150px;
 @media screen and (max-width: 768px){
  width:100%;
height:120%;
margin-top:30px;
padding-right:20px;

 }
`
// className="flex"
export const Rectangle=styled.div`
display:flex;
margin-bottom:40px;
   @media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10;
   }
`
// className="w-[608px] h-[663px] rounded-[30px] ml-[40px]"
export const Rectangleimg=styled.img`
width:75%;
height:90%;
border-radius:30px;
@media screen and (max-width: 768px){
  width:100%;
height:130%;

}
`

export const ResContent2 = styled.div`
  @media screen and (max-width: 768px){
    order: 2;
  }
`;

export const ResContent1 = styled.div`
  @media screen and (max-width: 768px){
    order: 1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10;
  }
`;
// className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[50px] mr-[400px] 
// mt-[30px] rounded-[60px] py-[8px] px-[12px]"
export const Rectanglep=styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:25%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
@media screen and (max-width: 768px){
  font-size:10px;
  width:25%;
  padding:6px 12px;
   }
`
// className="text-[#444] text-[38px] font-bold capitalize ml-[50px]"
export const Reactangle1p=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
width:70%;
@media screen and (max-width: 768px){
  font-size:24px;
  text-align:center;
  width:80%;
  margin-bottom:20px;
}
`
// className="text-[#444] text-[18px] font-medium opacity-70 leading-[30px] capitalize ml-[50px]"
export const Reactangle2p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:capitalize;
width:70%;
@media screen and (max-width: 768px){
  font-size:16px;
  width:95%;
  text-align:center;
  font-weight:400;
}
`
// className="h-[1px] w-[505px] bg-[#00000033] ml-[38px] mt-[10px]"
export const Hline1=styled.div`
width:505px;
height:1px;
background-color:#00000033;
margin-top:10px;
@media screen and (max-width: 768px){
  width:350px;
}
`
// style={{ width: "24px", height: "24px", marginTop: 18 }}
export const Tick0=styled.img`
width:24px;
height:24px;
margin-top:18px;
@media screen and (max-width: 768px){
  width:20px;
  height:20px;
}
`
// className="flex mt-[30px] ml-[50px]"
export const Tick1=styled.div`
display:flex;
@media screen and (max-width: 768px){
 flex-direction:column;
}
`

// className="mr-[30px] mt-[15px]"
export const Tickp=styled.p`
font-size:16px;
font-weight:500;
text-transform:capitalize;
margin-right:30px;
margin-top:15px;
@media screen and (max-width: 768px){
  font-size:16px;
  width:100%;
}
`
// className="mt-[15px]"
export const Tickp1=styled.p`
font-size:16px;
font-weight:500;
margin-top:15px;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:16px;
 width:100%;
}

`
// className="flex justify-between mt-[50px] mb-[70px]"
export const Div2=styled.div`
background-color:#F7F7F7;
margin-bottom:70px;
padding-top:50px;
padding-bottom:50px;
display:flex;
padding-left:40px;
width:100%;
@media screen and (max-width: 768px){
  flex-direction:column;
  padding-left:10px;
}
`
// bg-[#F7F7F7] pt-[50px] mt-[70px] mb-[70px] pb-[50px] flex justify-evenly
export const Div3=styled.div`
background-color:#F7F7F7;
margin-bottom:70px;
padding-top:50px;
padding-bottom:50px;
display:flex;
padding-left:40px;
@media screen and (max-width: 768px){
  flex-direction:column;
  padding-left:10px;
}
`
// className="text-[#5245A6] w-[25%] text-center uppercase text-[14px] py-[5px] px-[10px] font-semibold bg-[#E5E3F2] rounded-[60px]"
export const Two1=styled.div`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:20%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
@media screen and (max-width: 768px){
  font-size:10px;
  width:30%;
  padding:6px 12px;
  margin-bottom:10px;
   }
`
// className="text-[#444] w-[70%] text-[38px] ml-[20px] font-bold capitalize"
export const Two1p=styled.p`
color:#444;
width:60%;
font-size:38px;
font-weight:700;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:32px;
  width:105%;
  margin-left:5px;
}
`

export const Two11p=styled.p`
color:#444;
width:60%;
font-size:38px;
font-weight:700;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:24px;
  text-align:center;
  width:80%;
  margin-bottom:20px;
}
`
// className="text-[#444] text-[18px] w-[70%] ml-[20px] font-medium leading-[30px] opacity-70 capitalize"
export const Two2p=styled.p`
 color:#444;
 font-size:18px;
 width:72%;
 font-weight:500;
 line-height:30px;
 opacity:0.7;
 text-transform:capitalize;
 @media screen and (max-width: 768px){
  font-size:16px;
  width:100%;
  text-align:center;
  font-weight:400;
 }
`
// className="text-[#444] text-[18px] ml-[20px] font-medium leading-[30px] opacity-70 capitalize"
export const Two3p=styled.p`
color:#444;
font-size:18px;
width:71%;
font-weight:500;
line-height:30px;
opacity:0.7;
text-transform:capitalize;
@media screen and (max-width: 768px){
 font-size:16px;
 width:100%;
 text-align:center;
 font-weight:400;
}
`
export const Menudiv1=styled.div`
display:flex;
padding-left:150px;
@media screen and (max-width:768px){
  flex-direction:column;
  width:100%;
  padding-left:0px;
}
`
// className="w-[70%] mt-[20px] bg-[#F7F7F7] border-none"
export const Menu2=styled.div`
width:70%;
margin-top:20px;
background-color:#F7F7F7;
border-style:none;

@media screen and (max-width: 768px){
  width: auto;
  padding-left:10px;
}
`
// className="h-[1px] w-[490px] bg-[#00000033] ml-[20px] mt-[10px]"
export const Hline2=styled.div`
width:545px;
height:1px;
background-color:#00000033;
margin-top:10px;
@media screen and (max-width: 768px){
   width:350px;
}
`
export const Hline2div=styled.div`
@media screen and (max-width:768px){
  display:flex;
  justify-content:center;
  align-items:center;
  gap:30px;
}
`
export const Hline2div1=styled.div`
display:flex;
@media screen and (max-width:768px){
}`

// className="text-[#444] text-[28px] ml-[50px] mt-[20px] font-bold"
export const Hline2div1pp=styled.p`
color:#444;
font-size:28px;
font-weight:700;
padding-top:20px;
@media screen and (max-width:768px){
  font-size:20px;
}`
// className="text-[16px] font-medium opacity-70 mt-[30px] pl-[10px]"
export const Hline2div1p=styled.p`
font-size:16px;
font-weight:500;
opacity:0.7;
margin-top:30px;
padding-left:20px;
@media screen and (max-width:768px){
  margin-top:25px;
  padding-left:10px;
  width:100%;
}`

// className="w-[80%] h-[90%] rounded-[30px] "
export const Div2img=styled.img`
width:100%;
height:100%;
border-radius:30px;
padding-right:150px;
@media screen and (max-width: 768px){
width:100%;
height:120%;
margin-top:30px;
padding-right:20px;
}
`
// className="w-[632px] h-[505px] rounded-[30px] ml-[680px] mt-[-350px]"
export const Img3=styled.img`
width:100%;
height:90%;
margin-right:80px;
border-radius:30px;
margin-top:40px;
@media screen and (max-width: 768px){

}
`
// className="flex"
export const Rectangle2=styled.div`
display:flex;
margin-top:50px;
margin-bottom:50px;
justify-content:center;
align-items:center;
gap:50px;
@media screen and (max-width: 768px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10;
}
`
export const Rectangle22=styled.div`
@media screen and (max-width: 768px){
  order: 2;

}
`
export const Rectangle21=styled.div`
@media screen and (max-width: 768px){
  order: 1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10;
}
}
`
// className="w-[580px] h-[473px] ml-[40px] rounded-[30px]"
export const Reactangle2img=styled.img`
width:100%;
height:90%;
border-radius:30px;
@media screen and (max-width: 768px){
height:100%;
}
`
// className="text-[#5245A6] text-[14px] font-semibold uppercase bg-[#E5E3F2] ml-[59px] mr-[400px] 
//           mt-[10px] rounded-[60px] py-[9px] px-[30px]"
export const Reactangle3p=styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:20%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
margin-top:20px;
@media screen and (max-width: 768px){
  font-size:10px;
  width:25%;
  padding:6px 12px;
   }

`
// className="text-[#444] text-[38px] font-bold capitalize ml-[59px] mt-[10px]"
export const Reactangle4p=styled.p`
color:#444;
font-size:38px;
font-weight:700;
text-transform:capitalize;
margin-top:10px;
width:60%;
@media screen and (max-width: 768px){
  font-size:24px;
  text-align:center;
  width:80%;
  margin-bottom:20px;
}
`
export const Reactangle5p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:capitalize;
width:68%;
@media screen and (max-width: 768px){
  font-size:18px;
  width:100%;
  text-align:center;
  font-weight:400;
}
`
export const Time0=styled.div`
display:flex;
margin-top:30px;
justify-content:space-between;
@media screen and (max-width: 768px){
  margin-left:10px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
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
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
text-align:center;
}
`
export const Time4p=styled.p`
color:#444;
font-size:16px;
font-weight:500;
opacity:0.7;
line-height:30px;
text-transform:capitalize;
width:60%;
@media screen and (max-width: 768px){
  text-align:center;
}
`
// className="w-[64px] h-[64px]  mb-[5px]  "
export const Img2=styled.img`
width:64px;
height:64px;
margin-botton:5px;
@media screen and (max-width: 768px){
margin:0px 5px;
}
`
// className="text-[#444] text-[18px] font-medium "
export const Img2p=styled.p`
color:#444;
font-size:18px;
font-weight:500;
@media screen and (max-width: 768px){
 
  }
`
// className="w-[632px] h-[505px] rounded-[30px] ml-[580px] mt-[-420px]"
export const Menuimg=styled.img`
width:632px;
height:505px;
border-radius:30px;
margin-left:680px;
margin-top:-420px;
@media screen and (max-width: 768px){
  margin-top:50px;
  margin-left:10px;
}
`

// className="flex justify-between bg-[#5245A6] rounded-[14px] ml-[50px] mr-[50px] pb-[30px]"
export const Div1=styled.div`
display:flex;
background-color:#5245A6;
border-radius:14px;
padding: 30px 100px;
align-items: center;
justify-content: space-between;
width:auto;
height:80%;
margin-left: 10%;
margin-right: 10%;
@media screen and (max-width: 768px){
  flex-direction:column;
  width:100%;
  padding: 100px;
  align-items: center;
  justify-content: center;
  height:100%;
  padding: 24px 30px;
  margin-left:10%;
  width:95%;
 
}
`
// className="text-[#FFFFFF] text-[38px] font-bold ml-[40px] pt-[40px]"
export const Div1p=styled.p`
color:#FFFFFF;
font-size:38px;
font-weight:700;
width:100%;
@media screen and (max-width: 768px){
  text-align:center;
  font-size:24px;
  width:130%;
 }
`
// className="text-[#FFFFFF] text-[16px] font-medium ml-[40px] opacity-70 capitalize"
export const Div2p=styled.p`
 color:#FFFFFF;
 font-size:16px;
 font-weight:500;
 text-transform:capitalize;
 opacity:0.7;
 width:100%;
 @media screen and (max-width: 768px){
  font-weight:400;
  text-align:center;
  width:140%;
 }
`
// div className="flex"
export const Flex=styled.div`
display:inline-flex;
align-items:center;
justify-content:center;
background-color:white;
border-radius:30px;
border-style:none;
@media screen and (max-width: 768px){
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin-left:90px;
}
`
// button className="text-[18px] bg-[white] font-medium rounded-[130px] border-none py-[10px] px-[35px] ml-[40px]"
export const Flexbu=styled.p`
display:flex;
align-items:center;
justify-content:center;
gap:10px;
height:50%;
width:100%;
padding:0px 10px;
padding-top:10px;
margin-top:5px;
font-size:18px;
font-weight:500;
text-align:center;
@media screen and (max-width: 768px){
  font-size:16px;
  font-weight:400;
 
}
`
// className="ml-[-25px] mt-[20px]"
// export const Flexp=styled.p`
// margin-left:-30px;
// margin-top:17px;
// @media screen and (max-width: 768px){
// margin-left:-25px;
// }
// `
// className="w-[307px] h-[310px] pt-[40px]"
// style= {{  justifyContent: "start", flexDirection: "row", display: "flex", alignItems: "start", gap: 30, marginRight: "-6.9%"}}
export const Img4=styled.div`
justify-content:start;
display:flex;
align-items:start;
gap:30px;
margin-right:-6.9%;
@media screen and (max-width: 768px){
  margin-top:20px;
  margin-right:0%;
}
`
export const Div1img=styled.img`
width:60%;
height:60%;
@media screen and (max-width: 768px){

}
`
// className="w-[236px] h-[244px] pt-[40px]"
export const Div1img1=styled.img`
 width:40%;
 height:40%;
 @media screen and (max-width: 768px){

}
`
export const Div5=styled.div`
background-color:#F7F7F7;
margin-top:100px;
margin-bottom:70px;
padding-top:50px;
padding-bottom:70px;
padding-left:50px;
@media screen and (max-width: 768px){
  flex-direction:column;
  width:100%;
  margin-left:-20px;
  padding-left:10px;
}
`
// className="rounded-[60px] bg-[#E5E3F2] pb-[1px] justify-center items-center mt-[90px] ml-[40px] mr-[1350px] className="text-[#5245A6] text-center uppercase text-[14px] pt-[9px] font-semibold""
export const Test=styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:10%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
@media screen and (max-width: 768px){
  font-size:10px;
  width:30%;
  padding:6px 12px;
  margin-bottom:10px;
   }
`

// className="text-[#444] text-[38px] ml-[40px] font-bold capitalize flex"
export const Textp=styled.p`
 color:#444;
 font-size:38px;
 font-weight:700;
 text-transform:capitalize;
 width:100%;
 display:flex;
 @media screen and (max-width:768px){
  font-size:24px;
  width:80%;
  text-align:center;
  align-items:center;
  justify-content:center;
 }
`

// className="ml-[1100px] mt-[-50px] flex"
export const Icon=styled.p`
margin-left:1100px;
margin-top:-50px;
display:flex;
@media screen and (max-width: 768px){
  display:none;

}
`
//  className="flex p-[50px] items-start gap-[20px] ml-[50px]" 
// export const Testblox=styled.div`
// display:flex;
// padding:50px;
// gap:20px;
// width:100%;
// height:100px;
// @media screen and (max-width: 768px){
//  flex-direction:column;
//  margin-left:10px;
//  width:100%;
// }
//`
export const Testdiv=styled.div`
border-radius:16px;
backgroud-color:#FFF;
width:80%;
height:100%;
padding:10px 10px;
box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15), inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15);
@media screen and (max-width: 768px){
  margin-left:25px;
  width:100%;
  height:100%;
}
`

// p className="text-[16px] text-[#444] font-medium ml-[20px] leading-[30px] opacity-70"
export const Testp=styled.p`
font-size:16px;
color:#444;
font-weight:500;
marginleft:20px;
line-height:30px;
opacity:0.7;
@media screen and (max-width: 768px){

}
`
export const Div51=styled.div`

@media screen and (max-width: 768px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10;

}
`
// p className="text-[#1B1B1B] text-[38px] font-bold ml-[50px]">
export const Div6p=styled.p`
color:#1B1B1B;
font-size:38px;
font-weight:700;
display:flex;
@media screen and (max-width: 768px){
  font-size:24px;
}
`
// className="text-[#49454F] text-[18px] font-medium capitalize ml-[50px]"
export const Div6pp=styled.p`
color:#49454F;
font-size:18px;
font-weight:500;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:16px;
  width:100%;
}`

// className="flex justify-evenly"
export const Menudiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
@media screen and (max-width: 768px){
 flex-direction:column;
 
}
`
// className="w-[576px] mt-[20px] bg-[#F7F7F7] border-none rounded-[20px]"
export const Menu1=styled.div`
width:100%;
margin-top:20px;
background-color:#F7F7F7;
border-style:none;
border-radius:20px;
display:flex;
align-items:center;
@media screen and (max-width: 768px){
 width:100%;
 }
`
// className="rounded-[60px] bg-[#5245A626] pb-[1px] justify-center items-center mt-[90px] ml-[710px] mr-[700px]  className="text-[#5245A6] text-[14px] font-semibold ml-[25px] pt-[8px]""
export const Divpricing =styled.p`
background-color:#E5E3F2;
border-radius:60px;
color:#5245A6;
width:8%;
text-transform:uppercase;
text-align:center;
font-size:14px;
padding:8px 16px;
font-weight:600;
margin-top:80px;
@media screen and (max-width: 768px){
  font-size:10px;
  padding:6px 12px;
  width:20%;
}`
// className="text-[#444] text-[18px] font-medium capitalize text-center ml-[350px] w-[55%] leading-[30px] opacity-70"
export const Divpricingp=styled.p`
color:#444;
font-size:18px;
font-weight:500;
text-transform:capitalize;
text-align:center;
width:55%;
opacity:0.7;
line-height:30px;
@media screen and (max-width: 768px){
  font-size:16px;
  width:100%;
`
// p className="text-[40px] font-bold capitalize "
export const  Divpricingpp=styled.p`
font-size:40px;
font-weight:700;
text-transform:capitalize;
@media screen and (max-width: 768px){
  font-size:24px;
}
`
// className="rounded-[10px] ml-[50px] mr-[50px] mt-[60px] bg-[#FFF] flex "
export const Divpp=styled.div`
display:flex;
border-radius:20px;
width:90%;
margin-top:60px;
background-color:#FFF;
padding: 30px;
@media screen and (max-width: 768px){
  flex-direction:column;
  width:95%;
  padding:0px;
  margin-left:10px;
}

`
// className="text-[#1B1B1B] text-[38px] font-bold pt-[90px] pl-[40px] capitalize leading-[140%]"
export const Pp=styled.p`
color:#1B1B1B;
font-size:38px;
font-weight:700;
padding-top:90px;
padding-left:40px;
text-transform:capitalize;
line-height:140%;
width:60%;
@media screen and (max-width: 768px){
  padding-top:50px;
  text-align:center;
  font-size:24px;
  width:90%;
  padding-left:0px;
}
`
// className="text-[#1B1B1B] text-[18px] font-medium  pl-[40px] capitalize leading-[30px] opacity-70"
export const Ppp=styled.p`
color:#1B1B1B;
font-size:18px;
font-weight:500;
padding-left:40px;
text-transform:capitalize;
line-height:30px;
opacity:0.7;
width:70%;
@media screen and (max-width: 768px){
  text-align:center;
  font-size:16px;
  font-weight:500;
   width:95%;
   padding-left:10px;
}
`
// className="ml-[200px] mt-[20px] mb-[50px]"
export const Divform=styled.div`
margin-top:20px;
margin-bottom:50px;
width:50%;
@media screen and (max-width: 768px){
  width:90%;
 margin-left:20px;
  }
`
// div className="flex mt-[60px] "
export const Formdiv=styled.div`
display:flex;
margin-top:60px;
gap:10px;
@media screen and (max-width: 768px){
 flex-direction:column;
 margin-top:20px;
 gap:10px;
}
`
export const Formdiv1=styled.div`
display:flex;
margin-top:20px;
gap:10px;
@media screen and (max-width: 768px){
 flex-direction:column;
 gap:10px;
}
`
export const Form1=styled.div`
border-style:none;
background-color:#F5F5F5;
border-radius:12px;
`
// button className="bg-[#5245A6] text-[white] rounded-[15px] border-none py-[8px] px-[135px] ml-[15px]"
export const Formbu=styled.button`
background-color:#5245A6;
color:white;
border-radius:12px;
border-style:none;
width:100%;
height:15%;
text-transform:uppercase;
@media screen and (max-width: 768px){
  text-align:center;
  padding:14px 16px;
  border-radius:8px;
}
`
// className="bg-[#5245A6] mt-[60px] flex pb-[20px]"
export const Last =styled.div`
background-color:#5245A6;
margin-top:60px;
display:flex;
padding-left:50px;
padding-right:70px;
padding-bottom:50px;
justify-content:space-between;
@media screen and (max-width: 768px){
 flex-direction:column;
 padding-left:10px;
}
`
// p className="text-[#FFF] text-[20px] font-semibold mt-[20px]"
export const Contact=styled.p`
color:#FFF;
font-size:20px;
font-weight:600;
margin-top:20px;
@media screen and (max-width: 768px){
  font-size:18px;
}
`
// className="text-[#FFF] text-[20px] font-semibold ml-[450px] mt-[50px]"
export const News=styled.p`
color:#FFF;
font-size:20px;
font-weight:600;
margin-top:50px;
font-variant: all-small-caps;
@media screen and (max-width: 768px){
  font-size:18px;
}
`
// className="outline-none border-none bg-[#F5F5F5] rounded-[64px] ml-[450px] py-[8px] px-[13px]"
export const Input=styled.input`
 background-color:#F5F5F5;
 border-radius:64px;
 padding:8px 13px;
 border-style:none;
 outline-style:none;
 @media screen and (max-width: 768px){

  }
`
// className="border-none bg-[#F5F5F5] rounded-[64px] py-[8px] px-[13px]"
export const Button=styled.button`
 border-style:none;
 background-color:#F5F5F5;
 border-radius:64px;
 padding:8px 13px;
 @media screen and (max-width: 768px){
  margin-top:20px;
 
  }
`
// className="text-[#FFF] text-[20px] font-semibold ml-[450px] mt-[50px]"
export const Social=styled.p`
color:#FFF;
font-size:20px;
font-weight:600;
margin-top:30px;
font-variant: all-small-caps;
@media screen and (max-width: 768px){
  font-size:18px;
  }
`
// className="w-[40px] h-[40px] ml-[450px]"
export const Icons=styled.img`
width:40px;
height:40px;
@media screen and (max-width: 768px){
  width:30px;
  height:30px;
  }
`

// className="flex justify-between bg-[#6358AF] "
export const Final=styled.div`
 display:flex;
 justify-content:space-between;
 background-color:#6358AF;
 @media screen and (max-width: 768px){
    flex-direction:column;
  }
`
// className="text-[#FFF] text-[14px] font-normal leading-[22px] mt-[20px] mr-[180px]"
export const Finalp=styled.p`
color:#FFF;
font-size:14px;
font-weight:400;
line-height:22px;
margin-top:20px;
padding-right:40px;
@media screen and (max-width: 768px){
display:none;
}
`
// className="text-[#FFF] text-[14px] font-normal leading-[22px] mt-[20px] ml-[100px]"
export const Lastp=styled.p`
color:#FFF;
font-size:14px;
font-weight:400;
line-height:22px;
margin-top:20px;
padding-left:50px;
@media screen and (max-width: 768px){
  font-size:12px;
  text-align:center;
  padding-left:10px;
}
`