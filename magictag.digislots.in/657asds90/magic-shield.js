'use strict';
let _ClienturiOnlyFront = window.location.href;
        const _Clienturl = new URL(_ClienturiOnlyFront.html);

            //         if (!window.sessionStorage.getItem('passcode')) {
            //             window.sessionStorage.setItem('passcode', false);
            //         }
            //     function SubmitHandle(e){
            //         e.preventDefault()
            //     var pass = document.getElementById("passcodef12");
            //     if (pass.value === 'R1fNOc') {
            //         window.sessionStorage.setItem('passcode', true);
            //     }
            // }
            // document.querySelector("html").setAttribute('oncontextmenu', "return false");
            // window.addEventListener("keydown",(e)=>{
            //     if (e.keyCode=="123" || e.keyCode=="67" || e.keyCode=="73" || e.keyCode=="74") {
            //     if (window.sessionStorage.getItem('passcode') == 'true') {
            //         alert("You are now verified");
            //         document.querySelector("html").setAttribute('oncontextmenu', "return true")
            //     }else{
            //     const getf12Pass= document.createElement("form");
            //     document.querySelector("body").append(getf12Pass);
            //     getf12Pass.innerHTML = "<input type='text' id='passcodef12' placeholder='Enter Passcode' style='width:100%;height:100%' />";
            //     getf12Pass.setAttribute("style","position:fixed;bottom:0px;right:0px;background:#fff;font-size:10px;border:solid 1px;z-index:+999999999999999999");
            //     getf12Pass.onsubmit = (e)=>SubmitHandle(e);
            //     return e.preventDefault();
            //     }
            //     // }else if (e.keyCode=="67" || e.keyCode=="73" || e.keyCode=="74") {
            //     // return e.preventDefault();
            //     }
            // })


        function fetchData(bySite) {
            fetch('https://generat-script.digislots.in/api/get-multi-ads-for-client/'+bySite, {
              method: 'post',
            //   mode:'no-cors',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => {
                if (response.ok) {
                //   console.log('API has data');
                  console.log('%cNew MagicTag Activated!', 'color: #5e8eff; font-size: 30px;text-shadow: 1px 1px 1px yellow');
                } else {
                    // console.error('No data Found.');
                }
                return response.json();
              })
              .then((data)=>{
                const DataDiv = document.createElement("div");
                  DataDiv.id = 'magicbidml';
                  DataDiv.setAttribute('ad-tag',data.map((items)=>{
                        return items.Google_Tag_ID;
                    }));
                  DataDiv.setAttribute('page-url',data[0].Site_Url);
                  DataDiv.setAttribute('act-ad',data.map((items)=>{
                        return items.adtype;
                    }));
                  DataDiv.setAttribute('hidden', '');
                  DataDiv.setAttribute('rewardedAnchorClass', data.map((items)=>{
                        return items.aTagclassHierarchy;
                    }));
                  document.querySelector('body').append(DataDiv);
                //   console.log(DataDiv);
                  window.sessionStorage.setItem('fetchComplete', 'True')
                  if (window.sessionStorage.getItem('fetchComplete')) {
                      const activeAds = document.getElementById("magicbidml");
                      activeAds.getAttribute('act-ad').split(',').map((i)=>{
                          i === 'Floater'? Sidead(i) : false;
                          i === 'Popup'? Popad(i) : false;
                        //   i === 'ivt'? Ivt(i) : false;
                          i === 'Rewarded'? RewardedAd(i) : false;
                          i === 'BottomSticky'? bottomsitcky(i) : false;
                        });
                        }
                    // }
              })
              .catch((error) => {
                console.error('Network error:', error);
              })
        }
        
        fetchData(_Clienturl.host);


        // side ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //=======================================================================================================================================
        function Sidead(i) {
            const createElementSide = document.createElement("div");
        document.querySelector("body").append(createElementSide);
        createElementSide.setAttribute("id", "ad-side");
        createElementSide.innerHTML = '<style id="stylefs"></style><div class="fixed-width-s"><div id="close-popup-s"> <span class="close-btn-s"><img width="15" src="../digislots.in/gadscript/657asds90/cross.png"/></span> <span class="ourPowerOf-s"></span></div> <div id="magicbidfloaterad"> </div> </div>';
        document.getElementById("magicbidfloaterad").setAttribute("style", "padding: 10px 8px 10px 8px; border-radius: 2px; overflow: hidden;}");
        document.querySelector(".close-btn-s").setAttribute("style", "width: auto;height: auto; color: #00c2ff;text-align: center;cursor:pointer");
        document.getElementById("stylefs").innerHTML = ".slide-left{left: 0.5% !important;}.slide-left-close{left: -350% !important;}@media(max-width:459px){#magicbidfloaterad{max-width:auto;max-height:auto}}";
        document.querySelector(".fixed-width-s").setAttribute("style", "background-color: #ffffff;border-radius: 8px; padding: 5px;  box-shadow: 0px 10px 20px 0px rgba(128, 128, 128, 0.645);");
        document.getElementById("close-popup-s").setAttribute("style", "width: 100%;display: flex;flex-direction: row-reverse;justify-content: space-between;align-items: center;color: gray; font-family: helvetica, sans-sarif; border: solid #9a9a9a 0px; border-width:0px 0px 1px 0px");
        document.getElementById("ad-side").setAttribute("style", "display: flex;width: auto;height: auto;position: fixed;bottom: 18%;left: -45%;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;box-sizing:border-box; z-index: +999999999999999999999999999; transition: 1s !important;");

        var adfloater = document.getElementById("ad-side");
        // Ads
        const _adSizeBy_deviceWidth =  window.innerWidth>400 ? [300, 250] : [300, 50];
        const gettag = document.getElementById("magicbidml").getAttribute("ad-tag").split(',');
        const getSite = document.getElementById("magicbidml").getAttribute("page-url");
        const activeAd = document.getElementById("magicbidml").getAttribute('act-ad').split(',');
        const magicSideid = document.getElementById('magicbidfloaterad');

        activeAd.map((adty, index)=>{
            if(adty===i){
                console.log(adty, index);
                gettag.map((tag, indexOftag)=>{
                    if (indexOftag===index) {
                        // console.log(tag);
                        // console.log(getSite, gettag);
                        // let realSize = JSON.parse(getSize)
                        
                        window.googletag = window.googletag || { cmd: [] };
                        googletag.cmd.push(function () {
                            var slotS = googletag.defineSlot(tag, _adSizeBy_deviceWidth, "magicbidfloaterad").addService(googletag.pubads());
                            googletag.pubads().set("page_url", getSite);
                            googletag.enableServices();
                            googletag.display(magicSideid)

                            // Listen for the 'slotRenderEnded' event
                            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                                if (event.slot == slotS) {
                                    if (event.isEmpty) {
                                        console.log('Floater Ad slot is empty. No ad was loaded.');
                                        adfloater.style.display = "none";
                                        adfloater.innerHTML = '';
                                        adfloater.setAttribute("id", "ad-closed");
                                    } else {
                                        console.log("Event is Empty : " + event.isEmpty);
                                        console.log('Floater Ad slot has been rendered. Ad loaded successfully.');
                                    }
                                }
                            });
                        });
                    }
                })
            }
            })

         window.addEventListener("scroll", function () {
            if (window.pageYOffset >= 500) {
                //  if (googletag.cmd.push(function() {
                //     googletag.display(magicSideid)
                // }))
                // {
                        const fixedD = document.querySelector(".fixed-width-s");
                        fixedD ? fixedD.style.display = "block" : false;
                        const OurPower = document.querySelector(".ourPowerOf-s");
                        OurPower ? OurPower.innerHTML = "Powered By <span style='color:#206cd7'><a style='text-decoration:none;color:#206cd7' href='https://www.magicbid.ai/?utm_source=Promotion&amp;utm_medium=Banner&amp;utm_campaign=Popup_Ad'>Magicbid.ai</a></span>" : false;
                        if (document.getElementById("ad-side")) {
                            document.getElementById("ad-side").setAttribute("style", "display: flex;width: auto;height: auto;position: fixed;bottom: 18%;left: -35%;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;box-sizing:border-box; z-index: +999999999999999999999999999; transition: 1s !important;");
                            setTimeout(() => {
                                document.getElementById("ad-side").classList.add("slide-left");
                            }, 500);
                        }
                    
                // }else{
                //     console.log("ad-not-loaded");
                //     adfloater.style.display = "none";
                //     adfloater.setAttribute("id", "ad-closed");        
                // };   
            } else {
            }
        });
        document.querySelector(".close-btn-s").addEventListener("click", function () {
            document.getElementById("ad-side").classList.remove("slide-left");
            setTimeout(() => {
                adfloater.style.display = "none";
                adfloater.setAttribute("id", "ad-closed");
            }, 500);
        })
    }
    // +++++++++++++++++++++++++++++++++++++++================================================================+++++++++++++++++++++++++++++++++=
    
    // Pop ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //=======================================================================================================================================
    function Popad(i) {
        const createElementPop = document.createElement("div");
        createElementPop.setAttribute("id", "ad-popup");
        document.querySelector("body").append(createElementPop);
        createElementPop.innerHTML = '<style id="style"></style><div class="fixed-width"><div id="close-popup"> <span class="close-btn"><img width="15" src="../digislots.in/gadscript/657asds90/cross.png"/></span> <span class="ourPowerOf"></span></div> <div id="magicbidpopupad"> </div> </div>';
        document.getElementById("style").innerHTML = "@media(max-width:459px){.fixed-width{width: 100%;min-width: auto !important;padding: 0% !important;}#close-popup{width: auto !important;min-width: auto !important;height: auto !important;padding: 10px !important;}#ad-popup{ padding: 10px}#magicbidpopupad{display: flex;justify-content: center;flex-direction: column;flex-wrap: wrap;align-content: center;align-items: center;} #magicbidpopupad>div{display: flex !important;flex-direction: row;flex-wrap: wrap;align-content: center;justify-content: center;align-items: center;}}";
        document.querySelector(".fixed-width").setAttribute("style", "min-width: 316px;min-height: 350px; background-color: #ffffff;border-radius: 4px; padding: 10px;");
        document.getElementById("close-popup").setAttribute("style", "width: 100%;min-width:270px;height: 40px;padding: 10px 0px;display: flex;flex-direction: row;justify-content: space-between;align-items: center;color: gray; font-family: helvetica, sans-sarif; border: solid #9a9a9a 0px; border-width:0px 0px 1px 0px");
        document.getElementById("magicbidpopupad").setAttribute("style", "padding: 10px 8px 10px 8px; box-shadow: 0px 10px 20px 0px rgba(128, 128, 128, 0.645); border-radius: 2px; overflow: hidden;}");
        document.querySelector(".close-btn").setAttribute("style", "width: auto;height: auto; color: #00c2ff;text-align: center;cursor:pointer");
        document.getElementById("ad-popup").setAttribute("style", "width: 100%;height: 100vh;position: fixed;top:-100%;left: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;background-color: #0000008f;box-sizing:border-box; z-index: +999999999999999999999999999");
        var adpop = document.getElementById("ad-popup");
        // Ads
        const gettag = document.getElementById("magicbidml").getAttribute("ad-tag").split(',');
        const getSite = document.getElementById("magicbidml").getAttribute("page-url");
        const activeAd = document.getElementById("magicbidml").getAttribute('act-ad').split(',');
        // const getSize = document.getElementById("magicbidml").getAttribute("size");
        // let realSize = JSON.parse(getSize)
        const magicPopid = document.getElementById('magicbidpopupad');

        activeAd.map((adty, index)=>{
            if(adty===i){
                console.log(adty, index);
                gettag.map((tag, indexOftag)=>{
                    if (indexOftag===index) {
                        // console.log(tag);

        window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(function () {
            var slot = googletag.defineSlot(tag, [[336, 280], [250, 250], [300, 250]], "magicbidpopupad").addService(googletag.pubads());
            googletag.pubads().set("page_url", getSite);
            googletag.enableServices();
            googletag.display(magicPopid)

            // Listen for the 'slotRenderEnded' event
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                if (event.slot == slot) {
                    if (event.isEmpty) {
                        console.log('Popup Ad slot is empty. No ad was loaded.');
                        adpop.style.display = "none";
                        adpop.innerHTML = '';
                        adpop.setAttribute("id", "ad-closed");
                    } else {
                        console.log("Event is Empty : " + event.isEmpty);
                        console.log('Popup Ad slot has been rendered. Ad loaded successfully.');
                    }
                }
            });
        });
    }
                })
            }
            })
        window.addEventListener("scroll", function () {
            if (window.pageYOffset >= 200) {
                // if (googletag.cmd.push(function() {
                //     googletag.display(magicPopid)
                // })) {
                    const fixedD = document.querySelector(".fixed-width");
                        fixedD ? fixedD.style.display = "block" : false;
                        const OurPower = document.querySelector(".ourPowerOf");
                        OurPower ? OurPower.innerHTML = "Powered By <span style='color:#206cd7'><a style='text-decoration:none;color:#206cd7' href='https://www.magicbid.ai/?utm_source=Promotion&amp;utm_medium=Banner&amp;utm_campaign=Popup_Ad'>Magicbid.ai</a></span>" : false;
                        if (document.getElementById("ad-popup")) {
                            document.getElementById("ad-popup").setAttribute("style", "width: 100%;height: 100vh;position: fixed;top: 0;left: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;background-color: #0000008f;box-sizing:border-box; z-index: +999999999999999999999999999");
                        }
                // } else {
                //     console.log("ad-not-loaded");
                //     adpop.style.display = "none";
                //     adpop.setAttribute("id", "ad-closed");
                // }
            }
        });

        document.getElementById("close-popup").addEventListener("click", function () {
            adpop.style.display = "none";
            adpop.innerHTML = '';
            adpop.setAttribute("id", "ad-closed");
        })
    }

    // IVT tag ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //=======================================================================================================================================
    function Ivt(pa) {
        const gettag = document.getElementById("magicbidml").getAttribute("ad-tag").split(',');
        const getSite = document.getElementById("magicbidml").getAttribute("page-url");
        const activeAd = document.getElementById("magicbidml").getAttribute('act-ad').split(',');
        activeAd.map((adty, index)=>{
            if(adty===pa){
                console.log(adty, index);
                gettag.map((tag, indexOftag)=>{
                    if (indexOftag===index) {
                            function bqswitch(bqprms){  	var _bqs = String(bqprms[0]);  	switch(_bqs) {  		case "0":  break;  		case "1":  break;  		case "2": break;  		case "3": break;  		case "-1": break;  	}  }
                            var ivtScript = document.createElement('script');
                            document.querySelector("body").append(ivtScript);
                            // console.log(ivtScript);
                            ivtScript.id = "_ctbase";
                            ivtScript.src = "../cdn.spxl.ink/js/spb.minf552.js?ak=340684507b1d7686c57607cbb906de34605ae9c5&amp;dg=0&amp;ci=1&amp;gv=5&amp;s1="+tag+"&s2=S2MA CRO&s3=S3MACRO&s4=S4MACRO&s5=S5MACRO&s6=S6MACRO&s7=S7MACRO&s8=S8MACRO&s9=S9MA CRO&s10=S10MACRO&s11=S11MACRO&s12=S12MACRO&s13=S13MACRO&s14=S14MACRO&s15=S15M ACRO&s16=S16MACRO&s17=S17MACRO&s18=S18MACRO&s19=S19MACRO&s20=S20MACRO";
                    }
                })
            }
            })
    }

    // Rewarded ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //=======================================================================================================================================
    function RewardedAd(ra) {
    const rewadredAdDivTag = document.createElement("div");
    rewadredAdDivTag.id = 'magicbid-rewadredAd';
    rewadredAdDivTag.innerHTML = '<style id="styleRewared"></style><div class="fixed-width-rewrd"><img width="120" height="120" src="../reports.magicbid.ai/img/cloud-computing.png"><span style="font-size: 29px; font-family: inherit; text-align: center;">Unlock a free download by watching an ad</span><div id="magicbidrewardedad"><p style="width: 100%;height: 18px; margin: 0px; text-align: end;color: #ffdb00">Ad</p><button id="downloadReward" style="padding: 16px 25px; background-image: linear-gradient(#ffdb00, #ffdb00, #776c18 103% );border-radius: 50px;color: #255d9c; font-size: 26px;font-weight: 700; border: none; box-shadow: 2px 4px 10px 2px #17191b;">Free Download</button></div><span id="close-rewarded-ad" style="text-align: center;text-decoration: underline;color: #8592ff;cursor: pointer;font-size: 20px;">Close</span><span class="ourPowerOf"></span></div>'
    document.querySelector("body").append(rewadredAdDivTag);

    document.getElementById("styleRewared").innerHTML = "@media(max-width:459px){.fixed-width-rewrd{width: 100%;}#close-rewarded-ad{min-width: 100%;padding: 0px 10px;}}";
    document.querySelector(".fixed-width-rewrd").setAttribute("style","width: 300px;min-height: 400px; display: none;flex-direction: column !important;align-content: center;justify-content: center;align-items: center;gap:24px;background-color: #0a144e;color:#fff;border-radius: 20px; padding:44px 10px; border: solid 2px #fff");
    document.getElementById("magicbidrewardedad").setAttribute("style", "border-radius: 2px;");
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ++++++++++++++++++++++++++ Get a tag from website +++++++++++++++++++++++++
    const gettag = document.getElementById("magicbidml").getAttribute("ad-tag").split(',');
    const AciveRewardedCheck = document.getElementById("magicbidml").getAttribute("rewardedAnchorClass").split(',');
        const getSite = document.getElementById("magicbidml").getAttribute("page-url");
        const activeAd = document.getElementById("magicbidml").getAttribute('act-ad').split(',');
        activeAd.map((adty, index)=>{
            if(adty===ra){
                console.log(adty, index);
                gettag.map((tag, indexOftag)=>{
                    if (indexOftag===index) {
                        AciveRewardedCheck.map((actR, indexOfRewardedClass)=>{
                            if (indexOfRewardedClass===index) {
                                // console.log(actR);
    setTimeout(()=>{
    const getad = document.querySelectorAll(actR);
    console.log('selected ancher tags :', getad);
    getad.forEach(elem => {
    elem.addEventListener("click", function(e){
        e.preventDefault();
        // alert("youclicked");
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        document.querySelector(".fixed-width-rewrd").style.display = "flex";
        document.querySelector(".ourPowerOf").innerHTML = "Powered By <span style='color:#66d4ff'>Magicbid.ai</span>";
        if (document.getElementById("magicbid-rewadredAd")) { 
            document.getElementById("magicbid-rewadredAd").setAttribute("style", "width: 100%;height: 100vh;position: fixed;top: 0;left: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;background-color: #0000008f;box-sizing:border-box; z-index: +999999999999999999999999999; overflow:hidden;");
        }
        document.getElementById("close-rewarded-ad").addEventListener("click", function () {
            const rcls = document.getElementById("magicbid-rewadredAd");
            if (rcls) { 
                rcls.style.display = "none";
            }
        })
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        const alink = elem.getAttribute('href');
            const dBtn = document.getElementById("downloadReward");
            if (dBtn) {
                dBtn.addEventListener("click", ()=>{getrewardad(alink)})            
            }
            // e.stopPropagation();
        })
    })
        const getrewardad = (alink)=>{
            console.log("Loading Ads");
            // Google Ad +++++++++++++++++++++++++++++++++++++++++++++++++++++++
            googletag = window.googletag || {cmd: []};
            googletag.cmd.push(() => {
            const rewardedSlot = googletag.defineOutOfPageSlot(tag, googletag.enums.OutOfPageFormat.REWARDED)
            .addService(googletag.pubads());
            googletag.enableServices();
            googletag.pubads().addEventListener('rewardedSlotReady',
            function(evt) {
            //    alert("Watch an ad to kickstart your download and enjoy the app with our thanks. 🌟");
            evt.makeRewardedVisible();
            });
            googletag.pubads().addEventListener('rewardedSlotGranted',
            function(evt) {
            //   alert('granted! ' + JSON.stringify(evt.payload),
            window.location.href = alink || '/';
            // );
            });
            googletag.pubads().addEventListener('rewardedSlotClosed',
            function(evt) {
            googletag.destroySlots([rewardedSlot]);
            document.getElementById("magicbid-rewadredAd").style.display = "none";
            });
            googletag.display(rewardedSlot);
            });
        // Google Ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
            }
        }, 1000)
    }
                        })

    }
                })
            }
            })
    }
// Bottom Sticky ad ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=======================================================================================================================================
    
    function bottomsitcky(bs) {
            const gettag = document.getElementById("magicbidml").getAttribute("ad-tag").split(',');
            const getSite = document.getElementById("magicbidml").getAttribute("page-url");
            const activeAd = document.getElementById("magicbidml").getAttribute('act-ad').split(',');
            activeAd.map((adty, index) => {
                if (adty === bs) {
                    console.log(adty, index);
                    gettag.map((tag, indexOftag) => {
                        if (indexOftag === index) {

                            window.googletag = window.googletag || { cmd: [] };
                            googletag.cmd.push(function () {
                                var REFRESH_KEY = 'refresh';
                                var REFRESH_VALUE = 'true';
                                var mapping = googletag.sizeMapping().
                                    addSize([800, 90], [728, 90]).
                                    addSize([0, 0], [320, 50]).
                                    build();
                                googletag.defineSlot(tag, [728, 90], 'div-gpt-ad-1707470517687-0').setTargeting(REFRESH_KEY, REFRESH_VALUE).defineSizeMapping(mapping).addService(googletag.pubads());
                                var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;

                                googletag.pubads().addEventListener('impressionViewable', function (event) {
                                    var slot = event.slot;
                                    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
                                        setTimeout(function () {
                                            googletag.pubads().refresh([slot]);
                                        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
                                    }
                                });
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                            });

                            const mbscss = document.createElement('link');
                            mbscss.rel = 'stylesheet';
                            mbscss.href = "../magictag.digislots.in/657asds90/mbscss.css";
                            document.head.appendChild(mbscss);
                            const maind = document.createElement("div");
                            maind.id = "btmstickyadbymb-v1";
                            document.querySelector("body").appendChild(maind);
                            maind.innerHTML = "<div id='div-gpt-ad-1707470517687-0'></div>"
                            setTimeout(() => {
                                googletag.cmd.push(function () { googletag.display('div-gpt-ad-1707470517687-0'); });
                                const pbyd = document.createElement("div");
                                maind.appendChild(pbyd);
                                pbyd.id = "mbbtmstckad";
                                pbyd.innerHTML = "<img id='_cls-x' src='https://magictag.digislots.in/657asds90/crosssvg.svg' style='width:12px;height:12px'><span style='width:90px;font-family: Poppins, sans-serif;'><a href='https://magicbid.ai/'>Magicbid</a></span>"
                                document.body.addEventListener('click', function (event) { if (event.target.id === '_cls-x') { document.getElementById('btmstickyadbymb-v1').style.display = "none"; } });
                            }, 2000)
                        }
                    })
                }
            })
        }
    
const analys = document.createElement('div');
        analys.id = "MagicShield_1x1";
        window.addEventListener('load', () => {
        document.querySelector("body").append(analys);
            function bqswitch(bqprms){  	var _bqs = String(bqprms[0]);  	switch(_bqs) {  		case "0":  break;  		case "1":  break;  		case "2": break;  		case "3": break;  		case "-1": break;  	}  }
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
            googletag.defineSlot('/23066991296/MagicShield_1x1', [1, 1], 'MagicShield_1x1').addService(googletag.pubads());
            googletag.enableServices();
            googletag.display('MagicShield_1x1');
            });
})

// window.addEventListener('load',()=>{
    
//       googletag = window.googletag || {cmd: []};
//       googletag.cmd.push(() => {
//       const rewardedSlot = googletag.defineOutOfPageSlot('22872169051/MB_DOWNLOAD_REW', googletag.enums.OutOfPageFormat.REWARDED)
//       .addService(googletag.pubads());
//       googletag.enableServices();
//       googletag.pubads().addEventListener('rewardedSlotReady',
//       function(evt) {
//          if (confirm('want to see a rewarded ad?')) {
//           evt.makeRewardedVisible();

//          } else {
// 	   evt.makeRewardedVisible();
//           //googletag.destroySlots([rewardedSlot]);

//          }

//       });

//       googletag.pubads().addEventListener('rewardedSlotGranted',
//       function(evt) {

//          alert('granted! ' + JSON.stringify(evt.payload));

//       });

//       googletag.pubads().addEventListener('rewardedSlotClosed',
//       function(evt) {

//          alert('Closed by the user!');
//          //googletag.destroySlots([rewardedSlot]);

//       });

//       googletag.display(rewardedSlot);

//      });

// })
