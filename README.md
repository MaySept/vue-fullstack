# vue-fullstack
这是一个NodeJs fullstack项目, 使用 `express`, `mongodb`, `passport`, `vue`, `vue-router`, `vuex`等.

## Feature
- 单独的后端和前端开发
- 可配置
- Restfull api

## Before dev
1. 安装 `mongodb` 遵循 [official manual](https://docs.mongodb.com/manual/installation/). 推荐使用 [MongoChef](3t.io/mongochef/) 数据库客户端.
2. NodeJs 安装.

## Dev step
1. 打开终端运行 `npm install`
2. 运行 `npm run server`, 如果不存在数据库和 `User` 这将初始化
3. 运行 `npm run mock` 启动mock服务（默认端口号 7878）
4. 打开另一个终端和运行 `npm run client`, 你可以把两个命令一起运行 `npm run dev`
5. 打开浏览器 `localhost:9001` (默认端口 9001)

## Custom theme
1. 安装相关的工具 `npm install element-theme -g`
2. 构建主题 `et -c welian-variables.css`

## Build
Run `npm run build`

## App structure
```
├─client               # frontend source folder
│  ├─build             # frontend dev scripts
│  ├─src               # frontend src
│  │  ├─assets
│  │  │  ├─css
│  │  │  ├─fonts
│  │  │  └─images
│  │  ├─components     # vue components
│  │  ├─filters        # vue filters
│  │  ├─http           # vue-resource configuration
│  │  ├─locale         # vue-i18n configuration
│  │  ├─mixins         # mixins
│  │  ├─router         # vue-router configuration
│  │  ├─socket         # socket.io configuration
│  │  ├─storage        # web storage api
│  │  ├─store          # vuex store
│  │  │  └─modules
│  │  └─view           # app pages
│  │     └─auth
│  └─static            # static folder
├─mock                 # mock server folder
│  ├─ajax              # mock data
│  └─socket
└─server               # backend server folder
    ├─api              # backend api list
    │  ├─thing
    │  └─user
    ├─auth             # user auth logical
    │  └─local
    ├─components       # server components
    │  └─errors
    ├─config           # server configs, contains express socket.io, etc.
    └─views            # server servered pages
```

## Configuration
Most of the configuration is concentrated in the `config.js` file, and most of them have explicit comments, you need to take a look at it first.

Here is some important/frequently-used configuration:
- `frontend.port` port that frontend server listens at
- `backend.port` port that backend server listen at
- `backend.secrets.session` secret for session, important when you deploy your app, make sure it's complex enough
- `backend.mongo.uri` change this if your mongodb uri is not matched
- `backend.serverFrontend` whether to server the frontend code. If set to `true` the express server servers the frontend code, otherwise you may need a http server like nginx to server frontend code and there is a nginx configuration at `nginx.example.conf` (default true)

## Environment variable
When you deploy your app to you cloud server, it's easy to config you app with `environment variable`, here is the supported:
- `APP_port` or `PORT`: set to `backend.port`
- `APP_HOST` or `APP_IP` or `HOST` or `IP`: set to `backend.ip`
- `MONGODB_URI` or `MONGOHQ_URI`: set to `backend.mongo.uri`
- `SECRET`: set to `backend.secrets.session`

## License
Under [MIT license](./LICENSE)
