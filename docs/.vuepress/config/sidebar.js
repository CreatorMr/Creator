module.exports = {
  '/sourceCode/': [
    {
      title: '手写源码',   // 必要的
      // collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,
      children: [
        {
          title: 'call、apply、bind',
          path: '/sourceCode/call-apply-bind/'
        },{
          title: 'instanceof',
          path: '/sourceCode/instanceof'
        },{
          title: 'new',
          path: '/sourceCode/new'
        },{
          title: 'map',
          path: '/sourceCode/map'
        },{
          title: 'Object.create',
          path: '/sourceCode/Object.create'
        },{
          title: 'reduce',
          path: '/sourceCode/reduce'
        },{
          title: 'push',
          path: '/sourceCode/push'
        },
        {
          title: 'filter',
          path: '/sourceCode/filter'
        },{
          title: '用reduce实现map功能',
          path: '/sourceCode/用reduce实现map功能'
        }
      ]
    },
  ],
  '/technology/': [
    {
      title: '前端',
      sidebarDepth: 1,
      children: [
        {
          title: 'vue',
          path: '/technology/vue/',
          sidebarDepth: 2,
          children: [
            {
              title: 'mvvm',
              path: '/technology/vue/mvvm'
            },
            {
              title: 'router',
              path: '/technology/vue/router'
            },
            {
              title: 'vuex',
              path: '/technology/vue/vuex'
            }
          ]
        },
        {
          title: 'node',
          path: '/technology/node/',
          sidebarDepth: 2,
          children: [
            {
              title: 'express',
              path: '/technology/node/express'
            },
            {
              title: 'koa',
              path: '/technology/node/koa'
            }
          ]
        },
        {
          title: 'react',
          path: '/technology/react/',
          sidebarDepth: 2,
          children: [
            {
              title: 'router',
              path: '/technology/react/router'
            }
          ]
        },
        {
          title: 'css',
          path: '/technology/css/',
          sidebarDepth: 2,
          children: [
            {
              title: '布局',
              path: '/technology/css/layout'
            }
          ]
        },
        {
          title: 'javascript',
          path: '/technology/javascript/',
          sidebarDepth: 2,
          children: [
            {
              title: 'javascript',
              path: '/technology/javascript/javascript'
            },
            {
              title: 'ES6/ES7语法和原理实现',
              path: '/technology/javascript/ES6&ES7语法和原理实现'
            },
            {
              title: 'Promise',
              path: '/technology/javascript/Promise'
            },
          ]
        },
        {
          title: 'webpack',
          path: '/technology/webpack/',
          sidebarDepth: 2,
          children: [
            {
              title: 'plugins',
              path: '/technology/webpack/plugins'
            },
            {
              title: 'loader',
              path: '/technology/webpack/loader'
            },
          ]
        },
        'npm',
        'tools',
        // // 'performance',
        {
          title: '性能',
          path: '/technology/performance/',
          // sidebarDepth: 2,    
          children: [

          ]
        },
        {
          title: '工程化',
          path: '/technology/engineering/',
          // sidebarDepth: 2,    
          children: [

          ]
        },
        {
          title: '设计模式',
          path: '/technology/designPattern/',
          sidebarDepth: 2,
          children: [
            {
              title: 'single',
              path: '/technology/designPattern/single'
            }
          ]
        }
      ]
    },
    {
      title: '运维',
      sidebarDepth: 1,
      children: [
        {
          title: 'nginx',
          path: '/technology/operation/nginx'
        }, {
          title: 'linux',
          path: '/technology/operation/linux'
        }, {
          title: 'jenkins',
          path: '/technology/operation/jenkins'
        }, {
          title: 'docker',
          path: '/technology/operation/docker'
        },

      ]
    },
    {
      title: '后端',   // 必要的
      sidebarDepth: 1,
      children: [
        'java',
        {
          title: 'spring',
          path: '/technology/spring/',
          sidebarDepth: 2,
          children: [
            {
              title: 'mvc',
              path: '/technology/spring/mvc'
            },
            {
              title: 'boot',
              path: '/technology/spring/boot'
            },
            {
              title: 'cloud',
              path: '/technology/spring/cloud'
            }
          ]
        }
      ]
    },
    {
      title: '数据库',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: 'mysql',
          path: '/technology/database/mysql'
        },
        {
          title: 'mongoDB',
          path: '/technology/database/mongoDB'
        },
        {
          title: 'mybatis',
          path: '/technology/database/mybatis'
        },
        {
          title: 'redis',
          path: '/technology/database/redis'
        }
      ]
    },
    {
      title: '算法',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: '快排',
          path: '/technology/algorithm/quicksort',
          children: []
        },
        {
          title: '冒泡',
          path: '/technology/algorithm/bubbling',
          children: []
        },
      ]
    },
    {
      title: '网络',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: 'http',
          path: '/technology/network/',
          children: []
        }, {
          title: '三次握手',
          path: '/technology/network/three',
          children: []
        },
      ]
    },
    {
      title: '浏览器',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: '缓存',
          path: '/technology/browser/cache',
          children: []
        },
        {
          title: '重绘与回流',
          path: '/technology/browser/repaintReflow',
          children: []
        }
      ]
    }, {
      title: '大数据组件',
      sidebarDepth: 1,
      children: [
        {
          title: 'hive',
          path: '/technology/bigData/hive',
          children: []
        },

      ]
    }
  ],
  '/algorithm/': [
    {
      title: 'LeetCode',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: '1、两数之和',
          path: '/algorithm/LeetCode/1'
        },
        {
          title: '2、两数相加',
          path: '/algorithm/LeetCode/2'
        },
      ]
    }
  ],
  '/interview/': [
    {
      title: '面试题',   // 必要的
      sidebarDepth: 1,
      children: [
        {
          title: '面试题1',
          path: '/interview/call-apply对比'
        },
      ]
    }
  ]
}