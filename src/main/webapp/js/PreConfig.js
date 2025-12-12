/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.DRAWIO_PUBLIC_BUILD = true;
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math4/es5';
window.DRAWIO_CONFIG = { // 更多配置请参考网址 https://www.drawio.com/doc/faq/configure-diagram-editor
    "libraries": [
        {
            "title": { "main": "二研科技图库" },
            "entries": [
                {
                    "id": "myImageUnit",
                    "title": { "main": "二研科技图库" },
                    "desc": { "main": "二研科技图库" },
                    "libs": [
                        {
                            "title": { "main": "二研科技图库" },
                            "url": window.urls?.fileApp + "/config/svg/imageUnit/eryan.xml",
                            "tags": "二研科技图库"
                        }
                    ]
                }
            ]
        }
    ],
    "defaultLibraries": "myImageUnit",
    // 节点默认样式（矩形、圆形、图标等），在浅色模式下生效
    "defaultVertexStyle": {
        "fillColor": "transparent",      // 填充透明色
        "strokeColor": "#FF0000",    // 边框红色
        "fontColor": "#FF0000",      // 文本红色
        "gradientColor": "none"      // 避免渐变颜色覆盖红色
    },

    // 连线默认样式，在浅色模式下生效
    "defaultEdgeStyle": {
        "strokeColor": "#FF0000",     // 线条红色
        "fontColor": "#FF0000",       // 文字红色（如果在线上）
        "edgeStyle": "orthogonalEdgeStyle",
        "rounded": "0",
        "jettySize": "auto",
        "orthogonalLoop": "1"
    },
    "ui": "dark", // 启用暗黑模式
    "expandLibraries": true,
    "eryan_customConfig": { //不属于官方的配置放到这里来
        "excludeColorInDark": ["#FF0000"], //在黑暗模式下不需要变色的颜色列表，格式为十六进制颜色，如 #FF0000
    }
}


//下面是url params配置，可以查看 https://www.drawio.com/doc/faq/supported-url-parameters 了解更多参数
urlParams['sync'] = 'manual';
urlParams['lang'] = 'zh'; // 设置语言为中文
urlParams["grid"] = 0;  // 不显示网格
urlParams['dark'] = 1;  // 启用暗黑模式
urlParams['ui'] = 'min'; // 使用简化的用户界面
urlParams["drafts"] = 0; // 不启用草稿功能
urlParams["splash"] = 0; // 不显示启动画面

window.FilePath = window.urls?.fileApp + "/"; // 指定要加载文件的默认路径
