# Copy Folder Relative Path

在 Cursor 资源管理器中选中文件夹,按 `Shift+Alt+C` 复制其相对路径(相对于当前工作区根目录)。

## 安装(免编译,源码直接运行)

把整个 `copy-folder-relative-path` 文件夹复制到 Cursor 的扩展目录:

- Windows: `%USERPROFILE%\.cursor\extensions\copy-folder-relative-path`
- macOS / Linux: `~/.cursor/extensions/copy-folder-relative-path`

例如 Windows 下完整路径应该是:

```
C:\Users\<你的用户名>\.cursor\extensions\copy-folder-relative-path\
    package.json
    extension.js
    README.md
```

然后**完全重启 Cursor**(不是 reload window,是退出再打开),插件就会自动加载。

## 使用

1. 在左侧资源管理器中点选一个文件夹
2. 按 `Shift+Alt+C`
3. 相对路径已经在剪贴板里了(同时状态栏会有提示)

也可以在文件夹上右键 → `Copy Folder Relative Path`。

## 说明

- 多选时会用换行分隔多个路径
- 路径分隔符统一使用 `/`(跨平台一致)
- 快捷键只在资源管理器聚焦且选中的是文件夹时触发,不会和编辑器内的快捷键冲突
