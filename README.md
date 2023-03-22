# 📊 啊哈周报生成器
[English version](./README-en_US.md)
啊哈周报生成器是一款使用 OpenAI 和 Next.js 构建的周报生成工具。它可以帮助你轻松快速的创建出让领导满意的的周报文件，提高工作效率。

## 优势

- 基于人工智能：释放 GPT-3.5 的强大功能，几秒钟内编写任何内容。；
- 易于使用： 周报如此简单，您只需单击几下即可完成。
- 无需编码：不需要您编写代码，只需要简单几步，就能自动生成 周报；
- 支持多种格式：支持多种格式，可以自由定制，满足您的需求；


## 使用

1. 填写周报简要信息；
2. 生成周报;

## 快速开始

1. 克隆本仓库

```
git clone https://github.com/Ninglz/aha-zhoubao
```

2. 安装依赖

```
cd aha-zhoubao
npm install
```

3. 配置环境变量

在根目录下拷贝`.env.local.bak`修改为 `.env` 文件，并完善以下内容：

```
OPENAI_API_KEY=your_openai_api_key
```

4. 运行程序

```
npm run dev
```

5. 打开浏览器，访问 [http://localhost:3000](http://localhost:3000)

## 贡献

如果您发现了 bug，或者想为本项目贡献代码，请提一个 issue 或者提交一个 PR。

## 许可证

本项目使用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。