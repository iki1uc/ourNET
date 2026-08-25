function bindRAW(source, target){
    const out = [];
    for(let i=0;i<source.length;i++){
        out.push({
            from: source[i],
            to: target[i % target.length]
        });
    }
    return out;
}
