

/*
* 类型判断
* 只有引用数据类型（Array，Function，Object）被精准判断，
* 其他（数值Number，布尔值Boolean，字符串String）字面值不能被instanceof精准判断。
* */

let TypeUtils = {}


/*
	这样判断就可以排除 false 和0的情况
*/
TypeUtils.isRealNull = function(obj){
	if(obj === null || obj === undefined){
		return true
	}
	return false
}

/*
	判断是否是空
		undefined
		null
		""
*/
TypeUtils.isAllNull = function(obj){
	if(obj === null || obj === undefined || obj === ""){
		return true
	}
	return false
}

TypeUtils.isNumber = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === Number)
};
TypeUtils.isString = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === String)
};
TypeUtils.isBool = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === Boolean)
};
TypeUtils.isFunction = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === Function)
};
TypeUtils.isObj = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === Object)
};

//========================== 下面用于判断Array相关 ================================

TypeUtils.isArray = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    return (obj.constructor === Array)
};

TypeUtils.isNotEmptyArray = function(obj){
	if(obj === null || obj === undefined){
		return false
	}
    if(obj.constructor === Array){
		return obj.length > 0
	}else{
		return false
	}
};


TypeUtils.isEmptyArray = function(obj){
	if(obj === null || obj === undefined){
		return true
	}
    if(obj.constructor === Array){
		return obj.length === 0
	}else{
		return true
	}
};

/*
	判断obj是否是类型 targetObj
*/
TypeUtils.isType = function(obj,tarType){
	if(obj === null || obj === undefined){
		return false
	}
	return obj instanceof tarType
};

export default TypeUtils;





