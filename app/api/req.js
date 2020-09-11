import $ from 'jquery';

/**
 * 
 * @param {*} url 请求地址 
 * @param {*} jsonParam 请求参数
 * param ... 成功回调函数, 失败回调函数, 是否异步, processData, contentType
 */
export const aGet = (url, jsonParam)=>{
    let len = arguments.length;
    
    if (len < 2){
        return false
    }
    const sucCallBack = (len>2&&arguments[2]) ? arguments[2] : null;
    const errCallBack = (len>3&&arguments[3]) ? arguments[3] : null;

    if (sucCallBack && errCallBack){
        const sync = arguments[4] ? true : false;
        const proData = arguments[5] ? arguments[5] : false;
        const contData = arguments[6] ? arguments[6] : false;
        $.ajax({
            type : "get",
            url : url,
            processData : contData,
            contentType : proData,
            async : sync,
            data : jsonParam,
            success : sucCallBack,
            error : errCallBack,
        });
        return true;
    }else if (sucCallBack) {
        $.get(url, jsonParam, sucCallBack);
        return true;
    }else {
        return false;
    }
}

export const aPost = (url, jsonParam)=>{
    let len = arguments.length;

    if (len < 2){
        return false
    }
    const sucCallBack = (len>2&&arguments[2]) ? arguments[2] : null;
    const errCallBack = (len>3&&arguments[3]) ? arguments[3] : null;

    if (sucCallBack && errCallBack){
        const sync = arguments[4] ? true : false;
        const proData = arguments[5] ? arguments[5] : false;
        const contData = arguments[6] ? arguments[6] : false;
        $.ajax({
            type : "post",
            url : url,
            processData : contData,
            contentType : proData,
            async : sync,
            data : jsonParam,
            success : sucCallBack,
            error : errCallBack,
        });
        return true;
    }else if (sucCallBack) {
        $.post(url, jsonParam, sucCallBack);
        return true;
    }else {
        return false;
    }
}

export const aPut = (url, jsonParam)=>{
    let len = arguments.length;
    if (len < 2){
        return false
    }

    const sucCallBack = (len>2&&arguments[2]) ? arguments[2] : null;
    const errCallBack = (len>3&&arguments[3]) ? arguments[3] : null;
    const sync = (len>4&&arguments[4]) ? true : false;
    $.ajax({
        type : "put",
        url : url,
        data : jsonParam,
        async : sync,
        success : sucCallBack,
        error : errCallBack
    })

}

export const aDelete = (url, jsonParam)=>{
    let len = arguments.length;
    if (len < 2){
        return false;
    }

    const sucCallBack = (len>2&&arguments[2]) ? arguments[2] : null;
    const errCallBack = (len>3&&arguments[3]) ? arguments[3] : null;
    const sync = (len>4&&arguments[4]) ? true : false;
    $.ajax({
        type : "delete",
        url : url,
        data : jsonParam,
        async : sync,
        success : sucCallBack,
        error : errCallBack
    })

}