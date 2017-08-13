## 传媒盛典

#### > > 归纳几个让我受益的地方< <

###### 一. common.css

 common.css，顾名思义，就是写一些通用的样式，用通配符写的话，每一个元素都会
 被定义，这样会产生一些麻烦。

 例如，` *{font-family:"Microsoft Yahe"} `,然后所有元素都会添加这样一个样式
 这样意味着，`<div><p>字体</p></div> ` 你给div添加字体样式，将不会应用与p标签
 ，如果你想改变p标签的字体，那么你只能给p标签添加样式


###### 二.使用rem来设置元素的大小和间距

  rem设置的好处不用多说，可以让元素随着跟元素font-size的改变而改变，这样就可以
  用来适应不用的浏览器窗口，用js编写函数，按照一定的比例控制html font-size的
  大小即可控制页面元素的间距大小

###### 三.善用伪元素

   伪元素是一个很强大的功能，可以用来给一些元素添加各种小的周边样式，本次项目
   用伪元素实现hover后背景透明度的改变

###### 四. 绝对定位left top bottom right实现自适应

   给一个元素设置绝对定位,然后将其Left,top,bottom,right都设置为0，这个元素就
   会充满整个屏幕，无论你怎样改变浏览器的宽度。利用这一特点可以实现元素的自适应，
   实现更好的效果，让元素在大页面和小页面都得到充分的展示
###### 五. window.location.search 实现两个页面的互动

   利用window.location.search可以获取链接当中？后的参数部分，在第一个页面a标签
   跳转的链接为index.html?select=photo,当点击a标签时就会跳转到index.html页面，
   利用window.location.search就可以获取到select=photo，然后用split分解获取到
   一些相关的参数来再本页面的脚本使用，就可以实现两个页面的互动，本项目中点击不
   同的板块，跳转的页面相应呈现不同的内容就是利用此原理


[原网站地址](https://www.sky31.com/html/special/2017cmsd/home.html)

[原作者github](https://github.com/LBinin/chuanmeishendian)
