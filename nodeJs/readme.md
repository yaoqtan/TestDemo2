
mac： ../tman/资料/node.js/视频

http=require('http');

fs=require('fs');

querystring=require('querystring');
url=require('url');

1、node xxx.js
2、http.createServer()
3、fs
4、get
5、post
6、用户注册，登陆
7、模块化：
    系统模块：
    
        Crypto	加密
        Events	事件  
        Net	网络操作
        OS	操作系统信息
        Path	处理文件路径
        Stream	流操作
        Timers	定时器
        ZLIB	压缩
        
    自定义模块：
    包管理器：
    
8、自定义模块

    1.模块组成
    2.npm
        npm init 
        npm publish
        npm --force unpublish
    3.发布自己的模块
            ---------------------
            require——引入其他模块
            exports——输出
            module.exports——批量输出
            
9、express 框架
  
    //1.创建服务
    var server=express();
    
    //2.监听
    server.listen(8080);
    
    //3.处理请求
    server.use('地址', function (req, res){
    });
    3种方法：(接受用户)
    .get('/', function (req, res){});
    .post('/', function (req, res){});
    .use('/', function (req, res){});
    
    express框架：
    
    1.依赖中间件
    2.接收请求
      get/post/use
      get('/地址', function (req, res){});
    3.非破坏式的
      req.url
    4.static用法
      const static=require('express-static');
      server.use(static('./www'));
      
      
      非侵入式
      req
      
      原生：
      res.write();
      res.end();
      
      express：
      *res.send();
      res.write();
      res.end();
      
10、express

    1.数据 GET、POST
    2.中间件：使用，写，链式操作

    链式操作：

    1.GET、POST
      req.query
      
      server.use(bodyParser.urlencoded({limit: }));
      server.use(function (req, res, next){
        req.body
      });
    
    2.链式操作
      server.use(function (req, res, next){});
      server.get('/', function (req, res, next){});
      server.post(function (req, res, next){});
    
      next——下一个步骤
      next();
    
      server.use('/login', function (){
        mysql.query(function (){
          if(有错)
            res.emit('error');
          else
            next();
        });
      });
    
    3.中间件(body-parser)、自己写中间件
      next();
    
      server.use(function (req, res, next){
        var str='';
        req.on('data', function (data){
          str+=data;
        });
        req.on('end', function (){
          req.body=querystring.parse(str);
          next();
        });
      });
11、cookie 、session

    http-无状态的
    cookie、session
    
    cookie：在浏览器保存一些数据，每次请求都会带过来
      *不安全、有限(4K)
    
    session：保存数据，保存在服务端
      *安全、无限
      
      ------------------------------------
      session：基于cookie实现的
        *cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入
      
        隐患：session劫持
        ----------------------------------------------
        
        cookie
        1.读取——cookie-parser
        2.发送——
        
        session
        cookie-session
        
        ---------------------
        cookie-parser
        cookie-encrypter 加密
        
        -----------------
        cookie-session
        
12、模板引擎

    jade-破坏式、侵入式、强依赖
    ejs-温和、非侵入式、弱依赖

13、jade

14、ejs

    ejs——非侵入、非破坏
    
    <%= name %>
    <%= json.arr[0].name %>
    <%= 12+5 %>
    <%= 'asdfasdf' %>
    
15、express:

    1.主体
    2.cookie、session
    3.数据
    4.模板引擎
    body-parser	解析post数据
    multer		解析post文件

16、express 整合

    express  模板引擎
    
    consolidate-适配
    
    -------------------------------
    
    模板引擎：适配
    1.consolidate
    
    consolidate=require
    
    server.set('view engine', 'html');
    server.set('views', '模板文件目录');
    server.engine('html', consolidate.ejs);
    
    server.get('/', function (req, res){
    	res.render('模板文件', 数据);
    });
    -------------------------------
    
    route-路由：
    把不同的目录，对应到不同的模块
    
    xxxx.com/aaa/		mod1
    xxxx.com/news/	mod_news
    	post			news_post
    	list			news_list
    	content		news_content
    xxxx.com/user/		mod_users
    
    -------------------------------
    
    server.get();
    server.use()
    server.post()
    
    Router——迷你server
    router.get();
    router.post();
    router.use();
    
    -------------------
    Router——拆
    /user/....		mod_user
    /item/....		mod_item
    
    //1.创建router
    var router=express.Router();
    
    //2.把router添加到server
    server.use('/user', router);
    
    //3.router内部
    router.get('/1.html')
    router.post('/2.html')
    
    ----------------
    
    consolidate
    
    server.set('view engine', 'html');
    server.set('views', '模板目录');
    server.engine('html', consolidate.ejs);
    
    server.use(function (req, res){
    	res.render('模板文件', 数据);
    });
    
    -------------------------------
    
    Router——子服务
    
    var router1=express.Router();
    server.use('/user', router1);
    
    var r=express.Router();
    router1.use('/user_mod', r);
    router1.use('/user_reg', function (){});
    http://www.xxxx.com/user/user_mod
    http://www.xxxx.com/user/user_reg
    http://www.xxxx.com/user/user_login
    
    var router2=express.Router();
    server.use('/news', router2);
    http://www.xxxx.com/news/list
    http://www.xxxx.com/news/post
    http://www.xxxx.com/news/content
    
    var router3=express.Router();
    server.use('/item', router3);
    http://www.xxxx.com/item/buy
    http://www.xxxx.com/item/mod
    http://www.xxxx.com/item/del
    
    --------------------------------
    
17.1、数据库

    数据 - 数据库
    
    关系型数据库：
    MySQL、Oracle、SQLServer、Access、db2、fox pro
    
    MySQL：
    免费、中小网站
    优点：性能非常不错
    缺点：集群、容灾稍微弱一些
    
    Oracle：
    挺贵、大型应用、金融级
    优点：性能非常不错、集群、容灾非常强
    缺点：挺贵
    
    文件型：
    sqlite、mongodb
    
    空间型：
    
    -----------------------------------
    
    Server端：
    数据存在
    
    Client端：
    管理工具、Node
    
    ------------------------------------
    
    Server安装
    
    ------------------------------------
    
    数据基本概念：
    两种单位：
    1.库：文件夹-用来管理，本身没法存数据
    2.表：文件-存数据的
    
    表-Excel：
    行-一条数据
    列(字段、域)-一个数据项
    
    --------------------------------------
    
    用户名
    密码
    
    主键：唯一、性能高
        唯一标识符
    
    ------------------------------------
    
    server：
    client：
        Navicat-管理工具
        NodeJS-程序
    
    ---------------------------------------
    
    库-管理，存不了数据
    表-存数据
    字段-列
    行-一条数据
    
18、数据库
    
    NodeJS不支持MySQL
    
    npm
    
    服务端：
    客户端：
        node的mysql模块
    
    1.连接
    2.查询
    
    SQL=>Structured Query Language(结构化查询语句)
    
    SQL：
    4大查询语句——增删改查
    
    增-INSERT
    INSERT INTO 表 (字段列表) VALUES(值列表)
    INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES(0, 'blue2', '987654');
    
    删-DELETE
    
    改-UPDATE
    
    查-SELECT
    SELECT 什么 FROM 表
    SELECT * FROM `user_table`;
    
    SQL标准写法：
    1.关键字大写
    2.库、表、字段需要加上``
    
    ---------------------------------------
    
    1.下载mysql模块(client)
    2.连接
        var db=mysql.createConnection(host, port, user, password, database)	//?
    3.查询
        db.query(SQL, (err, data)=>{})
    4.SQL语句
        增删改查
    
    --------------------
    
19、数据字典——数据定出来
    
    1.banner(banner_table)
        ID
        title		标题		varchar(32)
        sub_title	副标题		varchar(16)
        src		图片地址	varchar(64)
    
    2.文章(article_table)
        ID
        author		作者		varchar(16)
        author_src	作者头像	varchar(64)
        title		标题		varchar(32)
        post_time	发布时间(s)	int
        content		内容		text
        n_like		赞		int
    
    3.用户(user_table)
        ID
        username	用户名		varchar(32)
        password	密码		varchar(32)
        src		头像		varchar(64)


20、node 连接数据库