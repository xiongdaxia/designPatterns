let target = {
  name: 'jack',
  age: '20'
};
let handler = {
  get(target, key) {
    if (key === 'avatar') {
      if (!target[key]) {
        return 'www.avatar/img/234123124141_big_64';
      }
    }
    return target[key];
  }
};

let userProxy = new Proxy(target, handler);
console.log(userProxy.avatar);
