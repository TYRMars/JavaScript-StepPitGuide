var foo = 1;
function bar() {
    foo = 10;
    return;
    function foo() {

    }
}
bar();
alert(foo);