window.onload = () => {
    var img = document.querySelectorAll('.out .inner .img');
    var left = document.querySelector('.arrow .left');
    var right = document.querySelector('.arrow .right');
    var button = document.querySelectorAll('.button p');
    var inner = document.querySelector('.inner');
    var index=0;
    var timer=null;
    var description = document.querySelector('#description');

    // 设置一个数组用来储存id
    idArr = ['first','second','right','left','left','left','last']
    descrip = [
        '这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.这是一个优秀的响应式登陆界面的展示，其利用html+css+js的方法实现了注册页面的功能和动画，实现了登录，注册，登录页与注册页动画切换，检查邮箱填写是否正确的功能.',
        '其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。其代码很好的遵循了html搭建框架，css处理样式，js实现响应交互的规则，条例清晰的实现了各项功能与布局。虽然仅有一个注册页但是值得借鉴的地方有很多。',
        'Awwwards 一个收录荣获全球优秀网页设计奖的社区，表彰世界上最优秀网页设计师、开发人员和代理机构的才能和努力，方便来自全球各地的数字设计专业人士寻找灵感、传授知识和经验、相互联系并分享具有建设性和富有尊重的批评。不断在“始终质疑”以及“不断发展”，帮助设计师提升网页设计水平，对最具创新的设计师进行颁奖。由全球业内最具权威的设计师、创意总监、博主和代理机构组成的专家小组评估每天提交至 Awwwards 的网站作品。每年 Awwwards 都会在世界各地具有标志性的城市举办研讨会，从纽约、巴塞罗那或阿姆斯特丹到伦敦、巴黎和洛杉矶。集结了数字设计领域的最优秀代理机构和思想领袖。为了使最佳网站收藏有书籍化， Awwwards 每年都会发布《全球 365 个最佳网站》，这是一本汇集了前一年所有本日网站、本月网站和荣誉提名网站的精装书籍，以永久保存。通过菜单可以获奖、被提名、收藏的优秀网站作品，包含不同国家不同类型的网站，奖项分为年度最佳、荣誉奖、被提名作品等等，不管是 3D、交互、动画、复古等等涵盖所有网页设计的类型。不用担心访问慢，国内访问超快，支持简体中文语言，轻松可以学习到全球优秀的网页设计作品。',
        'Awwwards 一个收录荣获全球优秀网页设计奖的社区，表彰世界上最优秀网页设计师、开发人员和代理机构的才能和努力，方便来自全球各地的数字设计专业人士寻找灵感、传授知识和经验、相互联系并分享具有建设性和富有尊重的批评。不断在“始终质疑”以及“不断发展”，帮助设计师提升网页设计水平，对最具创新的设计师进行颁奖。由全球业内最具权威的设计师、创意总监、博主和代理机构组成的专家小组评估每天提交至 Awwwards 的网站作品。每年 Awwwards 都会在世界各地具有标志性的城市举办研讨会，从纽约、巴塞罗那或阿姆斯特丹到伦敦、巴黎和洛杉矶。集结了数字设计领域的最优秀代理机构和思想领袖。为了使最佳网站收藏有书籍化， Awwwards 每年都会发布《全球 365 个最佳网站》，这是一本汇集了前一年所有本日网站、本月网站和荣誉提名网站的精装书籍，以永久保存。通过菜单可以获奖、被提名、收藏的优秀网站作品，包含不同国家不同类型的网站，奖项分为年度最佳、荣誉奖、被提名作品等等，不管是 3D、交互、动画、复古等等涵盖所有网页设计的类型。不用担心访问慢，国内访问超快，支持简体中文语言，轻松可以学习到全球优秀的网页设计作品。',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.'
    ]
    initialize();

    // 设置一个定时器，让图片轮播
    function start(){
        timer = setInterval(next, 3000);
    }
    // 创建切换图片的函数
    function prev(){
        clearInterval(timer);
        // 切换上一张也就是让数组的最后一个元素变成第一个元素
        idArr.push(idArr.shift());
        initialize();
        if(index<=0){
            index=img.length-1;
        }else{
            index--;
        }
        description.innerHTML=descrip[index];
        clearColor();
        start();
    }
    function next(){
        clearInterval(timer);
        // 切换上一张也就是让数组的最后一个元素变成第一个元素
        idArr.unshift(idArr.pop());
        initialize();
        if(index>=img.length-1){
            index=0;
        }else{
            index++;
        }
        description.innerHTML=descrip[index];
        clearColor();
        start();
    }

    left.addEventListener('click',prev)
    right.addEventListener('click',next)
    inner.addEventListener('mouseover',() => {clearInterval(timer);})
    inner.addEventListener('mouseout',start)

    //给小方块添加点击事件
    for(let i=0;i<button.length;i++){
        button[i].addEventListener('click',() => {
            //在用户点击的时候关闭定时器
            timer = clearInterval(timer);
            //这里需要判断用户点击的小方块与当前图片的索引之差，如果
            //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
            //需要更换之前也就是前面的图片
            if(i > index){
                let len = i-index;
                while(len--){
                    next();
                }
            }else if(i < index){
                let len = index-i;
                while(len--){
                    prev();
                }
            }
        })
    }

    //创建一个函数用来让小方块跟随图片运动
    function clearColor() {
        for (let i = 0; i < button.length; i++) {
            button[i].style.background = "silver";
        }
        //让当前的索引变色
        button[index].style.background = "rgb(20, 134, 187)";
    }
    // 创建一个函数用来初始化图片
    function initialize(){
        for(let i=0;i<img.length;i++){
            img[i].id = idArr[i];
        }
    }

    start(); // 开启定时器
}