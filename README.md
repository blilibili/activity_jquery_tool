# activity_jquery_tool
基于jquery的活动页面切换 活动图片面板 按钮插件

使用方法：
引入jquery 然后引入插件
$(domClass).toolButton('changeButton' , 'mouseenter');  (按钮鼠标事件 , 目前只有click 和 enter事件);

domClass的html里写入 data-change属性 : 对应活动图片的面板的父节点

活动图片的节点里img 节点需要是同级的关系
