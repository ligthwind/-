# Photo Site

这是一个可以直接上传到 GitHub Pages 的静态网页模板。

## 当前人物

- 李一帆：`people/person-1.html`
- 杨汝：`people/person-2.html`
- 黄凯君：`people/person-3.html`

首页 `index.html` 会显示这三个人的入口卡片。

## 本地预览

双击 `index.html` 即可预览首页。也可以打开下面这些人物页面：

```text
people/person-1.html
people/person-2.html
people/person-3.html
```

## 照片分组

照片按人物分文件夹：

```text
photos/
  section-1/   李一帆
    1.jpg
    2.jpg
    3.jpg
  section-2/   杨汝
    1.jpg
    2.jpg
    3.jpg
  section-3/   黄凯君
    1.jpg
    2.jpg
    3.jpg
```

## 替换视频

视频也按人物分文件夹：

```text
videos/
  section-1/
    your-video.mp4
    poster.svg
```

把你的 MP4 放到对应人物文件夹里，并命名为 `your-video.mp4`。

## 新增人物

后续要新增人物时：

1. 复制一个 `people/person-3.html`，改名成 `people/person-4.html`
2. 新建 `photos/section-4` 和 `videos/section-4`
3. 把页面里的 `section-3` 改成 `section-4`
4. 把名字、简介和照片说明改成新人物
5. 在 `index.html` 里新增一张人物入口卡片

## 上传 GitHub

把 `photo-site` 文件夹里的所有内容上传到仓库根目录：

- `index.html`
- `people`
- `photos`
- `videos`
- `style.css`
- `gallery.js`
- `README.md`

然后在仓库 Settings -> Pages 里开启 GitHub Pages。
