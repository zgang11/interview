const VERSION_COMPARE_MAP = new Map([
    ["basicFun", {
        name: '基础功能',
        functions: [{
                function: '浏览器基础功能',
                details: ['导航管理', "书签管理", '下载管理', "主页设置", '历史记录管理', "搜索引擎设置", '网页翻译', "鼠标手势", "浏览器快捷键", "字体设置等"],
                hasBasicVer: true,
                hasProVer: true,
            }, {
                function: '支持Blink/IE双内核',
                details: ['信创环境支持Blink内核', "Windows环境支持", 'Blink/IE双内核'],
                hasBasicVer: true,
                hasProVer: true,
                hasStar: true
            },
            {
                function: '支持运行Flash Player插件',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: 'NPAPI/PPAPI插件管理',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: 'USBkey驱动管理',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: '可信网站管理',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: 'RSA证书管理',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: '代理服务器设置',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: '网站云安全/下载云安全',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: '沙箱防护',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
            {
                function: '适配Windows、macOS、国产操作系统',
                details: [],
                hasBasicVer: true,
                hasProVer: true
            },
        ]
    }],
    ["nationalSecretFun", {
        name: '国密功能',
        functions: [{
            function: '支持国密SSl通信',
            details: ['包括SM2/SM3/SM4加密'],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '国密根证书管理',
            details: [],
            hasBasicVer: false,
            hasProVer: true,
            hasStar: true
        }, {
            function: '支持国密/RSA算法USBkey单双向认证',
            details: [],
            hasBasicVer: false,
            hasProVer: true
        }]
    }],
    ["nationalSecretFun", {
        name: "统一纳管",
        functions: [{
                function: 'Windows、MacOS、信创终端浏览器统一纳管详情',
                details: ['禁止保存网页', '禁止上传', '文件上传查毒等'],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '个性化水印设置',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '禁止截屏、禁止下载、禁止打印等',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '浏览器首页统一设置',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '浏览器导航统一设置',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '客户端静默升级（全量/增量模式）',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            },
            {
                function: '内核自动切换',
                details: ["此功能支持统一设置访问业务系统时优先使用的浏览器内核，以更好适配业务系统"],
                hasBasicVer: false,
                hasProVer: true
            }, {
                function: '企业公告下发',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            },
            {
                function: '插件/扩展部署',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            },
            {
                function: '企业公告下发',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            },
            {
                function: '国密/RSA根证书管理',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            },
            {
                function: 'USBkey驱动统一管理',
                details: [],
                hasBasicVer: false,
                hasProVer: true
            }
        ]
    }],
    ["otherFun", {
        name: "其它功能",
        functions: [{
            function: '应用数据分析',
            details: ['连接到管控平台的浏览器客户端应用访问数据统计'],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '应用适配性检测',
            details: [],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '远程浏览',
            details: ["在信创终端直接访问基于IE浏览器开发的业务系统，直接免除业务系统改造成本"],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '安全环境检测',
            details: ["对浏览器当前运行环境进行风险评估；并进行整体的病毒查杀，保障业务系统运行安全"],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '资源重载',
            details: ["快速完成业务系统资源替换，免除业务系统改造"],
            hasBasicVer: false,
            hasProVer: true
        }]
    }],
    ["deployFun", {
        name: '部署方式',
        functions: [{
            function: '私有化部署',
            details: [],
            hasBasicVer: false,
            hasProVer: true
        }]
    }],
    ["serviceFun", {
        name: '服务',
        functions: [{
            function: '业务系统迁移专家咨询服务',
            details: [],
            hasBasicVer: false,
            hasProVer: true
        }, {
            function: '7*24小时专家远程或现场进行技术支持服务',
            details: [],
            hasBasicVer: false,
            hasProVer: true
        }]
    }],
])

const hasFuncImg = '<div class="has-func-cls"><img style="width: 16px; height: 13px;" src="./icons/bigo.png"></img></div>'
const notHasFuncImg = '<div class="not-has-func-cls"><img style="width: 16px; height: 13px;" src="./icons/error.png"></img></div>'
const showStarIcon = '<img class="show-star-icon-cls" style="width: 17px; height: 17px; margin-right: 4px;" src="./icons/star.png"></img>'
const hasDetails = '<img style="width: 13px; height: 13px; margin-left: 4px;" src="./icons/details.png"></img>'

var TOOL_TIPS_ID = "toolTipsId";

function $(id) {
    // eslint-disable-next-line no-restricted-properties
    return document.getElementById(id);
}


window.onload = function () {
    drawTable()

    addTooltips()

    // 监听页面滑动
    pageScrollListener()
}

function pageScrollListener() {
    const top_bar = $('top-bar')
    const el = $('header-bar')
    const el_height = el.offsetHeight
    const el_offsetTop = el.offsetTop
    window.onscroll = (e) => {
        const scroll_top = document.documentElement.scrollTop || document.body.scrollTop
        if (scroll_top >= (el_height + el_offsetTop - 40)) {
            top_bar.style.display = 'block'
        } else {
            top_bar.style.display = 'none'
        }
    }
}

function addTooltips() {
    let tooltip = document.getElementsByClassName('tooltip')
    for (let i = 0; i < tooltip.length; ++i) {
        tooltip[i].addEventListener('mouseover', function (e) {
            showToolTips(tooltip[i], e)
        })
        tooltip[i].addEventListener('mouseout', function (e) {
            const element = document.getElementById("tooltip-box")
            element && document.body.removeChild(element)
        })
    }
}


function showToolTips(element, target) {
    let tooltipBox = document.createElement('div')
    tooltipBox.id = 'tooltip-box'
    let tips = target.currentTarget.dataset.value
    tooltipBox.appendChild(createTipDom(tips))


    tooltipBox.style.display = 'block';
    var left = target.clientX + document.documentElement.scrollLeft
    var top = target.clientY + document.documentElement.scrollTop;
    //当浏览器窗口缩小时不让提示框超出浏览器
    // if(left + tooltipBox.offsetWidth > document.body.clientWidth){
    //     var demoLeft = demo.offsetLeft;
    //     left = document.body.clientWidth - tooltipBox.offsetWidth - demoLeft;
    //     if(left < 0)
    //     left = 0;
    // }
    tooltipBox.style.left = left + 'px';
    tooltipBox.style.top = top + 'px';
    document.body.appendChild(tooltipBox)
}

function createTipDom(tips) {
    let dom = document.createElement('div')
    let tipsArr = JSON.parse(tips) || []
    tipsArr.forEach(item => {
        let div1 = document.createElement('div')
        div1.textContent = item
        dom.appendChild(div1)
    })
    return dom
}

function drawTable() {
    try {
        const table = $('verCompareTable')
        let dom = document.createDocumentFragment()
        for (let [key, value] of VERSION_COMPARE_MAP.entries()) {
            for (let [idx, func] of value.functions.entries()) {
                let tr = document.createElement('tr')
                // 设置表格第一列
                if (idx === 0) {
                    let td0 = document.createElement('td')
                    td0.setAttribute('rowspan', value.functions.length)
                    td0.className = 'rowSpan-class'
                    td0.textContent = value.name
                    tr.appendChild(td0)
                }
                // 设置表格第二列
                let td1 = document.createElement('td')
                let td1_dom = ''
                td1.textContent = func.function
                td1.className = 'funcs-special-cls'
                if (func.hasStar) {
                    td1_dom = showStarIcon
                }
                td1_dom += func.function
                if (func.details.length) {
                    let value = JSON.stringify(func.details)
                    td1_dom += `<div class="tooltip" data-value=${value}>` + hasDetails + '</div>'
                }
                td1.innerHTML = td1_dom
                // 设置表格第三列
                let td2 = document.createElement('td')
                td2.innerHTML = '<div>' + func.hasProVer ? hasFuncImg : notHasFuncImg + '</div>'
                td2.className = "border-special-cls"
                let td3 = document.createElement('td')
                td3.innerHTML = func.hasBasicVer ? hasFuncImg : notHasFuncImg
                if (idx !== 0) {
                    td1.style.borderTop = 'none'
                    td1.style.borderBottom = 'none'
                    td2.style.borderTop = 'none'
                    td2.style.borderBottom = 'none'
                    td3.style.borderTop = 'none'
                    td3.style.borderBottom = 'none'
                } else {
                    td1.style.borderBottom = 'none'
                    td2.style.borderBottom = 'none'
                    td3.style.borderBottom = 'none'
                }
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                dom.appendChild(tr)
            }

        }
        table.appendChild(dom)
    } catch (e) {
        throw e
    }

}