import { ref, getCurrentInstance } from 'vue'
import { GetCookies,SetCookies } from '@/utils/setCookies'
export default function useTurn(){
    let {proxy} = getCurrentInstance();
    let wxcode,redirect_uri,link,openId,ua;
    const isWechatBrowser =(appid,callback)=>{
        openId = GetCookies('openId');
        if(openId) return false;
        ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger' || typeof WeixinJSBridge !== "undefined"){
            wxcode = callback('code')
            if(!wxcode){
                redirect_uri = encodeURIComponent(window.location.href)
                link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid.value}&redirect_uri=`+redirect_uri+'&response_type=code&scope=snsapi_base&state=#wechat_redirect&connect_redirect=1'
                window.location.replace(link)
            }else{
                let query = {
                    code:wxcode
                }
                console.log('wxcod3',wxcode);
                proxy.$http.post(proxy.$server.getWechatOpenId,query).then(res=>{
                    if (res.status == 200) {
                        if (res.data.status==200) { 
                            // SetCookies('openId', res.data.content.openId); 
                            localStorage.setItem('openId',res.data.content.openId);
                        }                       
                    }
                    console.log('wxcode进了',res);
                }).catch(()=>{
                    console.log('获取信息错误。');
                })           
            }
        }
    }
    const iswxs=()=>{
        let iswx;
        const ua = window.navigator.userAgent.toLowerCase(),UA = navigator.userAgent;
        if(ua.match(/MicroMessenger/i) == 'micromessenger' || typeof WeixinJSBridge !== "undefined"){
            iswx = true;
        }else if (ua.match(/QQ/i) == "qq" &&  ua.match(/MQQbrowser/i)!='mqqbrowser'){
            iswx = false;
        }
        return iswx;
    }
    return {
        isWechatBrowser,
        iswxs
    }
}
//isWechatBrowser