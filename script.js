$(function () {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": { 
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1000 * 3,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };
    
    var reset = function reset() {
        if ($(this).scrollTop() > 90) {
            $(this).off("scroll");
          fx()
        }
    };
    
    $(window).on("scroll", reset);
});