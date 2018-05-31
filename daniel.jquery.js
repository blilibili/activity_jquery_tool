(function( $ ){
    /*
        dom 切换面板的dom节点  count 显示当前第几个
    */
    function changeActivityDom(dom , count){
        console.log(dom , count);
        $('.' + dom).children().eq(count).show().siblings().hide();
    }

    /**
     * 初始化操作
     * @type {{changeButton: changeButton}}
     */
    function domInit(dom){

    }
    var methods = {
        changeButton:function(methods='click'){
            var status = true;
            var changeImg = [];
            var historyImg = [];
            var clickNode = 0;
            var self = this;

            if(this.find('img').length <= 1){
                throw new Error('请传节点的父节点');
            }
            var suportEvent = ['click' , 'mouseenter'];
            for(var i = 0;i<suportEvent.length;i++){
                if(suportEvent[i] == methods){
                    var status = false;
                }
            }
            if(status){
                throw new Error('请写jquery支持的鼠标事件');
            }
            this.find('img').each(function(k , v) {
                //存储切换图片路径
                changeImg.push($(v).attr('data-click'));
                historyImg.push($(v).attr('src'));
                $(v).on(methods , function() {
                    clickNode = k;
                    self.find('img').each((key ,val) => {
                        $(val).attr('src' , historyImg[key]);
                    })
                    $(v).attr('src' , changeImg[k]);
                    //切换活动的面板
                    $(v).on('click' , function(){
                        self.attr('data-change') ? changeActivityDom(self.attr('data-change') , clickNode):'';
                    })
                })
            })
            //默认开启第一个
            //this.find('img').eq(0).attr('src' , this.find('img').eq(0).attr('data-click'));
        }
    };

    $.fn.toolButton = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

})( jQuery );
