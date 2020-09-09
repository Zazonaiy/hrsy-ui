import $ from 'jquery';

/**
 * 
 * @param {*} url 请求地址 
 * @param {*} jsonParam 请求参数
 * param ... 成功回调函数, 失败回调函数, 是否异步, processData, contentType
 */
const aGet = (url, jsonParam)=>{
    let len = arguments.length;
    
    if (len < 2 || len > 4){
        return false
    }
    const sucCallBack = (len>2&&arguments[2]) ? arguments[2] : null;
    const errCallBack = (len==4&&arguments[3]) ? arguments[3] : null;

    if (sucCallBack && errCallBack){
        const sync = arguments[4] ? true : false;
        const proData = arguments[5] ? arguments[5] : false;
        const contData = arguments[6] ? aruments[6] : false;
        $.ajax(
            type : "get",
            url : url,
            processData : false,
            contentType : false,
            async : true,
            data : jsonParam,
            success : sucCallBack,
            error : errCallBack,
        );
        return true;
    }else if (sucCallBack) {
        $.get(url, jsonParam, sucCallBack);
        return true;
    }else {
        return false;
    }
}