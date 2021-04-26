export default{getMoble}

//生成随机电话号码
function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189"); 
    var i = parseInt(10 * Math.random()); 
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
    }


