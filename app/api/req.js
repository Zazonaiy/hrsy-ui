import $ from 'jquery';

const ctxPath = "http://localhost:32588";
function Ajax(type, url, sync, data, suc, err, beforeSend){
    $.ajax({
        type : type,
        url : url,
        sync : sync,
        json : 'reqParam',
        data : data,
        xhrFields : {withCredentials:true},
        beforeSend : beforeSend,
        success : suc,
        error : err
    })
}



/**
 * 
 * @param {*} url 请求地址 
 * @param {*} jsonParam 请求参数
 * param ... 成功回调函数, 失败回调函数, 是否异步, processData, contentType
 */
export const aGet = (url, reqData, syn, suc, err, bef)=>{
    url = ctxPath + url;
    
    const sync = (syn) ? true : false;
    const sucCallBack = (suc!=null) ? suc : null;
    const errCallBack = (err!=null) ? err : null;
    const beforeSend = (bef!=null) ? bef : null;

    Ajax("GET", url, sync, reqData, sucCallBack, errCallBack, beforeSend);
}

export const aPost = (url, reqData, syn, suc, err, bef)=>{
    url = ctxPath + url;
    
    const sync = (syn) ? true : false;
    const sucCallBack = (suc!=null) ? suc : null;
    const errCallBack = (err!=null) ? err : null;
    const beforeSend = (bef!=null) ? bef : null;

    Ajax("POST", url, sync, reqData, sucCallBack, errCallBack, beforeSend);
}

export const aPut = (url, reqData, syn, suc, err, bef)=>{
    url = ctxPath + url;
    
    const sync = (syn) ? true : false;
    const sucCallBack = (suc!=null) ? suc : null;
    const errCallBack = (err!=null) ? err : null;
    const beforeSend = (bef!=null) ? bef : null;

    Ajax("PUT", url, sync, reqData, sucCallBack, errCallBack, beforeSend);

}

export const aDelete = (url, reqData, syn, suc, err, bef)=>{
    url = ctxPath + url;
    
    const sync = (syn) ? true : false;
    const sucCallBack = (suc!=null) ? suc : null;
    const errCallBack = (err!=null) ? err : null;
    const beforeSend = (bef!=null) ? bef : null;

    Ajax("DELETE", url, sync, reqData, sucCallBack, errCallBack, beforeSend);

}