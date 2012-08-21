function push(n) {
  return function(st, r) {
    st.push(n)
  }
}

var zero = push(0),
    one  = push(1),
    two  = push(2)

function add(st, r) {
  st.push(st.pop() + st.pop())
}

function sub(st, r) {
  var b = st.pop(),
      a = st.pop()

  st.push(a - b)
}

function over(st, r) {
  st.push(st[st.length - 2])
}

function rot(st, r) {
  var c = st.pop(),
      b = st.pop(),
      a = st.pop()

  st.push(b, c, a)
}

function end() {
}

function loop(st, r) {
  var i = r.lastIndexOf(end) + 1,
      n = st.pop()

  while(--n)
    run(st, r.slice(i))
}

function run(st, r) {
  while(r.length)
    r.pop()(st, r)
}

function fib(st, r) {
  r.push(end, add, over, over, loop, sub, two, rot, one, zero)
}

function print(st, r) {
  console.log(st.join(" "))
}

run([], [print, fib, push(16)])
