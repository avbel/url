define(function () {
    return {
        qualifyUrl: function(url) {
            var a = document.createElement('a');
            a.href = url;
            return a.href;
        }
    };
});