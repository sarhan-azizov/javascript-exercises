<script>
  function fib(c) {
    let a = 0;
    let b = 1;
    let res = '';

    for (let i = 0; i < c; i++) {
      let c = a + b;

      a = b;
      b = c;

      res += c + ' ';

    }

    return res;
  }
  console.log(fib(7));
</script>
<!--
a = 0
b = 1
c = 1

a = 1
b = 1
c = 2

a = 1
b = 2
c = 3

a = 2
b = 3
c = 5

a = 3
b = 5
c = 8
-->

//0 1,2,3,5,8,13,21

