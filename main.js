function arrToObj(r) {
    return r.reduce(function(a,[key,value]){
        a[key]=value;
        return a;
    },{})
    }
    // Expected results:
    var arr = [
        ['name', 'Sơn Đặng'],
        ['age', 18],
    ];
    var ar = [
        ['name', 'truong'],
        ['age', 20],
    ];
    console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }