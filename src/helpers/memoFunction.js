export const memo =function (callback) {
    let cache={};
    return async function(text){
        if(!cache[text]){
            cache[text]=await callback(text);
        }
        return cache[text];
    }
};
