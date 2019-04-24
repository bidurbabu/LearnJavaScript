const longestPalindrome = (s) => {
    const len = s.length;
    var maxLength= 1;
    var startIndex = 0;
    var map = [];
    for(var i=0;i<len;i++){
        map[i] = [];
        map[i][i] = true;
    }

    for(var i=0;i<len-1;i++){
        if(s[i] === s[i+1]) {
            map[i][i+1] = true;
            maxLength = 2;
            startIndex = i;
        } 
    }

    for(var k=3;k<=len;k++){
        for(var i=0;i<=len-k;i++){
            if(map[i+1][i+k-2] && (s[i] === s[i+k-1])){
                map[i][i+k-1] = true;
                if(k>maxLength) {
                    maxLength = k;
                    startIndex = i;
                }
               
            } 
        }
    }
    return s.substring(startIndex,startIndex+maxLength);
};

const result = longestPalindrome('bbabccbatt');
console.log(result);