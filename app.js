const _initRun = function () {

    _initLang();

    $(document).ready(function () {
        var pathname = window.location.pathname.replace('/zh-cn', '').replace('/zh-tw', '').replace('/en-us', '');
        if (router[pathname]) {
            router[pathname]();
        }
    });

    //语言切换
    $('#language-switch').change(function () {
        var current = $(this).attr("current");
        var value = $(this).val();
        location.href = "/" + value + "/" + (current == 'index' ? '' : current);
    });
};

_initRun();

var a = 123;

var b = 345;

// new commint .....
