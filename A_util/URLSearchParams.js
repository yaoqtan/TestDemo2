

const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"
params.set('age',23)
console.log(params)
console.log(params.has("young"))
console.log(params.get("sex"))
console.log(params.get('age'))