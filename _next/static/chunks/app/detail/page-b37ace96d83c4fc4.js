(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{65423:function(e,t,n){Promise.resolve().then(n.bind(n,19721)),Promise.resolve().then(n.bind(n,87654))},87654:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(57437),i=n(2265),s=n(20703),r=n(18785),l=n(24793),d=n(12165),u=n(62177),o=n(59574),c=n(57377),p=n(88552),m=n(44523),y=n(60508),x=n(89539),h=n.n(x),b=n(78589);n(49334),n(25566).env.NEXT_PUBLIC_OKLINK_KEY;let g={abi:[{inputs:[{internalType:"address payable",name:"_platformAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"startingPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_startTime",type:"uint256"},{indexed:!1,internalType:"address",name:"nftAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"AuctionCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"HighestBidIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ReserveAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardDistributed",type:"event"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"startingPrice",type:"uint256"},{internalType:"uint256",name:"currentHighestBid",type:"uint256"},{internalType:"address",name:"currentHighestBidder",type:"address"},{internalType:"bool",name:"ended",type:"bool"},{internalType:"uint256",name:"totalBidAmount",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"},{internalType:"uint256",name:"bitAmount",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"}],name:"cancelAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startingPrice",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],name:"createAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextAuctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"pendingReturns",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"platformAddress",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"reserve",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],address:"0x1600c3aC7c86B332DB54A7d783F4e0250353E48F"},f={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"finalPrice",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionFailed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reservePrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startTime",type:"uint256"},{indexed:!1,internalType:"address",name:"nftAddress",type:"address"}],name:"AuctionStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"FEE_PERCENTAGE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"auctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address payable",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"finalizeAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"getCurrentPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"}],name:"startAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],address:"0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8"},T={abi:[{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},v=()=>{let{data:e,error:t,writeContract:n,isError:a,isPending:i,isSuccess:s,failureReason:r}=(0,b.S)();return{createBritish:e=>{n({...g,functionName:"createAuction",args:e})},createDutch:e=>{n({...f,functionName:"startAuction",args:e})},bidBritish:(e,t)=>{n({...g,functionName:"bid",args:t,value:e})},bidDutch:(e,t)=>{n({...f,functionName:"bid",args:t,value:e})},cancelBritish:e=>{n({...g,functionName:"cancelAuction",args:e})},cancelDutch:e=>{n({...f,functionName:"finalizeAuction",args:e})},error:t,isError:a,isPending:i,isSuccess:s,data:e,failureReason:r,approveNft:l=>(n({...T,functionName:"approve",args:l}),{data:e,error:t,isError:a,isPending:i,isSuccess:s,failureReason:r})}},j=()=>{let{data:e,error:t,writeContract:n,isError:a,isPending:i,isSuccess:s,failureReason:r}=(0,b.S)();return{approveNft2:(e,t)=>{n({...T,address:e,functionName:"approve",args:t})},data:e,error:t,isError:a,isPending:i,isSuccess:s,failureReason:r}};var N=n(39617),A=n(69908),w=n(52926),I=n(60989),C=(e,t)=>{let n=(0,N.N)({contracts:[{...g,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]},{...f,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]}]}),{isOnAuctionBritish:a,isOnAuctionDutch:s}=(0,i.useMemo)(()=>{let e=!1,t=!1;return n.isSuccess&&(e=n.data[0].result,t=n.data[1].result),{isOnAuctionBritish:e,isOnAuctionDutch:t}},[n]),r=(0,A.u)({...g,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)],query:{enabled:!!a}}),l=(0,A.u)({...f,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)],query:{enabled:!!s}});(0,i.useEffect)(()=>{console.log("拍卖信息：",n),console.log("111：",r),console.log("222：",l)},[n,r,l]);let{auctionIdBritis:d,auctionIdDutch:u}=(0,i.useMemo)(()=>({auctionIdBritis:r.data,auctionIdDutch:l.data}),[r,l]),o=(0,A.u)({...g,functionName:"auctions",args:[d],query:{enabled:!!d}}),c=(0,A.u)({...f,functionName:"auctions",args:[u],query:{enabled:!!u}}),{auctionsInfoBritis:p,auctionsInfoDutch:m}=(0,i.useMemo)(()=>{let e={},t={isActive:!1};if(o.data){let[t,n,a,i,s,r,l,d,u,c,p]=o.data;e={seller:t,nftAddress:n,nftTokenId:a,startingPrice:(0,w.d)(i),currentHighestBid:(0,w.d)(s),currentHighestBidder:r,ended:l,totalBidAmount:(0,w.d)(d),startTime:(0,I.b)(u,0),endTime:(0,I.b)(c,0),interval:(0,I.b)(p,0)}}if(c.data){let[e,n,a,i,s,r,l,d,u,o,p]=c.data;t={seller:e,nftAddress:n,nftTokenId:(0,I.b)(a,0),startingPrice:(0,w.d)(i),reservePrice:(0,w.d)(s),startTime:(0,I.b)(r,0),endTime:(0,I.b)(l,0),price_decay_interval:(0,I.b)(d,0),price_decay_amount:(0,w.d)(u),reserve_duration:(0,I.b)(o,0),isActive:p}}return{auctionsInfoBritis:e,auctionsInfoDutch:t}},[o,c]),y=(0,A.u)({...f,functionName:"balances",args:[t],query:{enabled:!!t}}),x=(0,i.useMemo)(()=>{let e="0";return y.isSuccess&&(e=(0,w.d)(y.data)),e},[y]),h=(0,A.u)({...f,functionName:"getCurrentPrice",args:[e.auctionId],query:{enabled:s&&m.isActive}}),b=(0,i.useMemo)(()=>{let e=0;return h.isSuccess&&(e=h.data||0),e},[h]);return{isOnAuctionBritish:a,isOnAuctionDutch:s,auctionsInfoBritis:p,auctionsInfoDutch:m,auctionIdBritis:d,auctionIdDutch:u,isOnAuction:n,balances:x,getCurrentPrice:h,currentPrice:b,isGetAuctionStatus:n.isFetched}},S=n(75504),M=n(39296),k=n(13694),_=n(86343);let P=i.memo(e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:i,auctionsInfoDutch:s}=e;return t||n?t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Final Price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:"N/A"})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Starting Price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:i.startingPrice})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Start Time:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*i.startTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Deadline:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*i.endTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Auction Type:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:"British"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Final Price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:"N/A"})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Starting Price:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.startingPrice," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Floor Price:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.reservePrice," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Price Decay Interval:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.price_decay_interval," ","s"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Price Decay Amount:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.price_decay_amount," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Reserve Duration:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.reserve_duration," ","s"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Start Time:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*s.startTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Deadline:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*s.endTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Auction Type:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:"Dutch"})]})]}):null}),E=i.memo(e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:i,auctionsInfoDutch:s}=e;return t||n?t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full mb-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{iconAttr:{width:35,height:35}})}),(0,a.jsx)(r.xu,{className:"flex-1 overflow-hidden",children:(0,a.jsxs)(r.xu,{className:"text-gray-700",children:["Starting Price:"," ",i.startingPrice," ","ETH"]})})]}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("div",{className:"bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-indigo-600",children:[" ",i.currentHighestBid," ","ETH"]}),(0,a.jsx)("div",{children:"Lowest"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",i.totalBidAmount," ","ETH"]}),(0,a.jsx)("div",{children:"Markup"})]})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)(r.xv,{size:"4",className:" text-lg",children:"Best Bid"}),(0,a.jsx)(r.xv,{as:"p",size:"2",className:"text-gray-500",children:"Top Price From"}),(0,a.jsx)(r.xv,{as:"p",size:"1",className:"text-gray-700",children:i.currentHighestBidder}),(0,a.jsxs)(r.xv,{as:"p",className:"text-blue-600 ",children:[i.currentHighestBid," ","ETH"]})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full mb-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{iconAttr:{width:35,height:35}})}),(0,a.jsx)(r.xu,{className:"flex-1 overflow-hidden",children:(0,a.jsxs)(r.xu,{className:"text-gray-700",children:["Start Pirce:"," ",s.startingPrice," ","ETH"]})})]}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-indigo-600",children:[" ",s.startingPrice," ","ETH"]}),(0,a.jsx)("div",{children:"current"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",s.price_decay_amount," ","ETH"]}),(0,a.jsx)("div",{children:"Decay Amount"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",s.price_decay_interval," ","ETH"]}),(0,a.jsx)("div",{children:"Decay Interval"})]})]})]}):null});var B=()=>{let e=d.Z.getLocalStorage("currentNFT"),[t,n]=(0,i.useState)("Info"),[l,x]=(0,i.useState)(!0),[b,T]=(0,i.useState)("british"),[N,A]=(0,i.useState)(""),[w,B]=(0,i.useState)(""),[D,H]=(0,i.useState)(""),[Y,O]=(0,i.useState)(""),[z,F]=(0,i.useState)(""),[V,L]=(0,i.useState)(""),[Q,q]=(0,i.useState)(""),[Z,G]=(0,i.useState)(""),[R,U]=(0,i.useState)(!1),[K,$]=i.useState((0,y.Aj)(h()().format())),{approveNft2:J,data:W,error:X,isSuccess:ee,isError:et,isPending:en}=j(),{isOnAuction:ea,isOnAuctionBritish:ei,isOnAuctionDutch:es,auctionsInfoBritis:er,auctionIdBritis:el,auctionIdDutch:ed,auctionsInfoDutch:eu,balances:eo,getCurrentPrice:ec,currentPrice:ep,isGetAuctionStatus:em}=C(e,(0,M.m)().address),ey=()=>{ea.refetch()};(0,k.G)({...g,eventName:"AuctionCancelled",onLogs(e){console.log("AuctionCancelled!",e),ey()}}),(0,k.G)({...f,eventName:"AuctionFailed",onLogs(e){console.log("AuctionFailed!",e),ey()}}),(0,k.G)({...g,eventName:"AuctionCreated",onLogs(e){console.log("AuctionCreated!",e),ey()}}),(0,k.G)({...f,eventName:"AuctionStarted",onLogs(e){console.log("AuctionStarted!",e),ey()}});let{createBritish:ex,createDutch:eh,bidBritish:eb,bidDutch:eg,cancelBritish:ef,cancelDutch:eT,isError:ev,isPending:ej,isSuccess:eN,data:eA,error:ew,failureReason:eI,approveNft:eC}=v();(0,i.useEffect)(()=>{em&&x(!1)},[em]),(0,i.useEffect)(()=>{console.log("error====>",null==ew?void 0:ew.message),(null==ew?void 0:ew.message)?G(ew.shortMessage||(null==ew?void 0:ew.message)):eN&&U(!1)},[ev,ej,eN,ew,eI]),(0,i.useEffect)(()=>{var e,t;console.log("error====>",null===(e=ec.error)||void 0===e?void 0:e.message),ec.isError&&(null===(t=ec.error)||void 0===t?void 0:t.message)?G(ec.error.shortMessage):eN&&U(!1)},[ec.isError,ec.error,eN]),(0,i.useEffect)(()=>{console.log("授权失败：",null==X?void 0:X.message)},[X]),(0,i.useEffect)(()=>{if(ee){console.log("授权成功："),G("");let t=h()(K.toDate()).unix();"british"===b?ex([(0,_.f)(N),Number(t),e.contractAddress,Number(e.tokenId),Number(z)]):eh([e.contractAddress,Number(e.tokenId),(0,_.f)(N),(0,_.f)(D),Number(t),Number(V),(0,_.f)(Q),Number(Y)])}},[ee]);let eS=async()=>{(ed||el)&&(G(""),ei?eb((0,_.f)(w),[(0,I.b)(el,0),(0,_.f)(w)]):es&&eg((0,I.b)(ep,0),[(0,I.b)(ed,0)]))};(0,i.useEffect)(()=>{G("")},[b]);let eM=async()=>{ej||(G(""),"british"===b?J(e.contractAddress,[g.address,e.tokenId]):J(e.contractAddress,[f.address,e.tokenId]))},ek=async()=>{ei?await ef([el]):es&&await eT([ed])},e_=(0,i.useMemo)(()=>({isOnAuctionBritish:ei,isOnAuctionDutch:es,auctionsInfoBritis:er,auctionsInfoDutch:eu}),[ei,es,er,eu]);return(0,a.jsxs)("div",{className:"flex w-full h-[93vh] ",children:[(0,a.jsx)("div",{className:"w-[70%] flex justify-center items-center",children:(0,a.jsx)("div",{className:"p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer",children:(0,a.jsx)(s.default,{src:e.img,width:400,height:400,alt:"Picture of the author",className:"rounded-lg "})})}),(0,a.jsx)("div",{className:"w-[30%] h-[96.5%] my-[1%]  hover:shadow-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-5",children:(0,a.jsxs)(r.mQ.Root,{defaultValue:"Info",value:t,className:"w-full",onValueChange:e=>{n(e)},children:[(0,a.jsxs)(r.mQ.List,{className:"flex space-x-2",children:[(0,a.jsx)(r.mQ.Trigger,{value:"Info",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Info"}),!e.isOwner&&(0,a.jsx)(r.mQ.Trigger,{value:"Bid",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Bid"}),(0,a.jsx)(r.mQ.Trigger,{value:"Auction",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Auction"})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)(r.mQ.Content,{value:"Info",children:(0,a.jsxs)("div",{className:"text-gray-900 py-3",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-2",children:e.name}),(0,a.jsx)(r.xv,{size:"2",className:"font-bold mb-2 text-gray-500",as:"p",children:e.description}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Collect Type:"," ",e.tags.map(e=>(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:e},e))]})]})}),(0,a.jsx)(r.mQ.Content,{value:"Bid",children:l?(0,a.jsx)(r.$j,{size:"3",className:"mx-auto my-auto"}):(0,a.jsxs)(a.Fragment,{children:[" ",ei&&(0,a.jsx)(o.Y,{label:"Please enter your Bid Price",value:w,onValueChange:B}),(0,a.jsxs)(r.xv,{children:[" ","Your Balance:",(0,a.jsxs)(r.cK,{children:[eo,"ETH"]})]}),Z&&(0,a.jsx)(r.xu,{className:"text-[#dc2626] my-2",children:Z}),eN&&(0,a.jsx)(r.xu,{className:"text-[green] my-2",children:"Successful Bid"}),(0,a.jsxs)(r.zx,{onClick:()=>eS(),style:{width:"100%",marginTop:"1rem"},className:(0,S.Z)(ej&&"!bg-[#ccc]"),children:[ej&&(0,a.jsx)(r.$j,{className:"mr-2"}),(0,a.jsx)(r.xu,{children:"Confirm"})]})]})}),(0,a.jsx)(r.mQ.Content,{value:"Auction",children:l?(0,a.jsx)(r.$j,{size:"3",className:"mx-auto my-auto"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P,{...e_}),(0,a.jsx)(E,{...e_}),e.isOwner&&(ei||es?(0,a.jsxs)(r.zx,{onClick:()=>ek(),className:(0,S.Z)(ej&&"!bg-[#ccc]"),style:{width:"100%",marginBottom:"1rem"},children:[ej&&(0,a.jsx)(r.$j,{className:"mr-2"})," ","Cancel Auction"]}):(0,a.jsxs)(r.Vq.Root,{open:R,onOpenChange:U,children:[(0,a.jsx)(r.Vq.Trigger,{children:(0,a.jsx)(r.zx,{style:{width:"100%",marginBottom:"1rem"},children:"Auction"})}),(0,a.jsxs)(r.Vq.Content,{maxWidth:"380px",minHeight:"600px",children:[(0,a.jsxs)(r.kC,{justify:"between",align:"center",className:"mb-2",children:[(0,a.jsx)("span",{className:"font-bold text-lg",children:e.name}),(0,a.jsx)(r.Vq.Close,{children:(0,a.jsx)(u.ypG,{className:"cursor-pointer"})})]}),(0,a.jsxs)(c.n,{fullWidth:!0,size:"md","aria-label":"Tabs form",selectedKey:b,onSelectionChange:T,children:[(0,a.jsxs)(p.r,{title:"British",children:[(0,a.jsx)(o.Y,{label:"start price",value:N,onValueChange:A}),(0,a.jsx)(m.N,{granularity:"second",label:"start time",className:"mt-3",value:K,onChange:$}),(0,a.jsx)(o.Y,{label:"interval",className:"mt-3",value:z,onValueChange:F,description:"In seconds"})]},"british"),(0,a.jsxs)(p.r,{title:"Dutch",children:[(0,a.jsx)(o.Y,{label:"start price",value:N,onValueChange:A}),(0,a.jsx)(o.Y,{value:D,onValueChange:H,label:"floor price",className:"mt-3"}),(0,a.jsx)(o.Y,{label:"reserve duration",value:Y,onValueChange:O,className:"mt-3",description:"In seconds"}),(0,a.jsx)(m.N,{granularity:"second",label:"start time",className:"mt-3",value:K,onChange:$}),(0,a.jsx)(o.Y,{value:V,onValueChange:L,label:"decay interval",className:"mt-3"}),(0,a.jsx)(o.Y,{value:Q,onValueChange:q,label:"decay amount",className:"mt-3"})]},"dutch")]}),Z&&(0,a.jsx)(r.xu,{className:"text-[#dc2626] my-2",children:Z}),(0,a.jsxs)(r.kC,{justify:"center",align:"center",onClick:()=>eM(),className:(0,S.Z)("w-full bg-blue-700 rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer",(ej||en)&&"!bg-[#ccc]"),children:[(ej||en)&&(0,a.jsx)(r.$j,{className:"mr-2"}),(0,a.jsx)(r.xu,{children:"Submit Auction"})]})]})]}))]})})]})]})})]})}},24793:function(e,t,n){"use strict";var a=n(57437);n(2265);var i=n(12178),s=n(62177);t.Z=e=>(0,a.jsx)("div",{className:"flex gap-5 ",...e,children:(0,a.jsx)(i.fC,{className:"bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle",children:(0,a.jsx)(i.NY,{className:"text-violet11 leading-1 flex h-full w-full items-center justify-center  text-[15px] font-medium",children:(0,a.jsx)(s.Tk0,{width:null==e?void 0:e.iconAttr.width,height:null==e?void 0:e.iconAttr.height})})})})},12165:function(e,t){"use strict";class n{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let a=new Date;a.setTime(a.getTime()+864e5*n);let i="expires=".concat(a.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(i,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),n=document.cookie.split(";");for(let e=0;e<n.length;e++){let a=n[e];for(;" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=n}},function(e){e.O(0,[8310,643,9198,4912,4433,2971,8069,1744],function(){return e(e.s=65423)}),_N_E=e.O()}]);