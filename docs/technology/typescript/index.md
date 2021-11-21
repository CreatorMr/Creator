### 强类型语言的优势

- 错误更早暴露
- 代码更智能，编码更准确
- 重构更牢靠
- 减少不必要的类型判断


### flow 

类型检查器

类型注解

flow 通过添加类型注解来检查
yarn add flow-bin 
yarn flow init 生成 .flowconfig


移除类型注解

- yarn add flow-remove-types 使用 yarn flow-remove-types  src --d dist
- babel 插件形式  @babel/core @babel/cli @babel/preset-flow


flow-language support vscode 插件