---
tags: 
- mongoDB
- 数据库 
date: 2020-04-07
categories: 
- "后端"
---
# mongodb

MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。

### 什么是NoSQL?
NoSQL，指的是非关系型的数据库。NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。

NoSQL用于超大规模数据的存储。（例如谷歌或Facebook每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。


### NoSQl
非关系型数据库

* 关系型数据库遵循ACID规则
  * A（Atomicity） 原子性
    事务里的操作 要不全部做完，要么都不做。事务的成功条件就是全部操作都成功，只要其中一个失败，整个事务就失败，需要回滚。
  * C（Consistency）一致性 
    数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束
    例如现有完整性约束a+b=10，如果一个事务改变了a，那么必须得改变b，使得事务结束后依然满足a+b=10，否则事务失败。
  * I（Isolation）独立性
    所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。
  * D（Durability）持久性
    持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失
### 何为分布式系统
  分布式系统由多台计算机和通信的软件组件通过计算机网络连接（本地网络或广域网）组成。
  * 具有高度的内聚性和透明性

  * 可靠性  
  * 可扩展性
  * 资源共享
  * 灵活性
  * 更快的速度
  * 开放系统
  * 更高性能

* 缺点
  * 故障排除
  * 软件
  * 网路 (基础设施问题，传输问题，高负载，信息丢失)
  * 安全性 (开放和共享)

RDBMS vs NoSQL
* RDBMS
  - 高度组织化结构化数据
  - 结构化查询语言（SQL） (SQL)
  - 数据和关系都存储在单独的表中。
  - 数据操纵语言，数据定义语言
  - 严格的一致性
  - 基础事务
* NoSQL
  - 代表着不仅仅是SQL
  - 没有声明性查询语言
  - 没有预定义的模式
  - 键 - 值对存储，列存储，文档存储，图形数据库
  - 最终一致性，而非ACID属性
  - 非结构化和不可预知的数据
  - CAP定理
  - 高性能，高可用性和可伸缩性

### MongoDB

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

```
{
  name: 'name',
  age: 26,
  status: 'A',
  groups: ['news', 'sports]
}
```
### MongoDB 的特点：
* MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。
* 你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。
* 你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。
* 如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。
* Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。
* MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。
* Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。
* Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。
* Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。
* GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。
* MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。
* MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
* MongoDB安装简单。

管理工具 robomongo


|  SQL术语/概念	| MongoDB术语/概念	   | 解释/说明                        |
|  ----        | ----               | ----                            |
| database     | database           | 数据库                           |
| table        | collection         | 数据库表/集合                     |
| row          | document           | 数据记录行/文档                    |
| column       | field              | 数据字段/域                       |
| index        | index              | 索引                             |
|table joins   |	                  | 表连接,MongoDB不支持              |
|primary key   |	primary key	      | 主键,MongoDB自动将_id字段设置为主键 |


 RDBMS 与 MongoDB 对应的术语：

| RDBMS	| MongoDB| 
|  ----        | ----               | 
| 数据库| 	数据库| 
| 表格| 	集合| 
| 行	| 文档| 
| 列	| 字段| 
| 表联合| 	嵌入文档| 
| 主键	| 主键 (MongoDB 提供了 key 为 _id )| 



| 集合命名空间	| 描述               |
|  ----       | ----               | 
| dbname.system.namespaces	| 列出所有名字空间。
| dbname.system.indexes	| 列出所有索引。
| dbname.system.profile	| 包含数据库概要(profile)信息。
| dbname.system.users	| 列出所有可访问数据库的用户。
| dbname.local.sources	| 包含复制对端（slave）的服务器信息和状态。

*几种重要的数据类型
  * ObjectId 12bytes 
    - 前 4 个字节表示创建 unix 时间戳,格林尼治时间 UTC 时间，比北京时间晚了 8 个小时
    - 接下来的 3 个字节是机器标识码
    - 紧接的两个字节由进程 id 组成 PID
    - 最后三个字节是随机数