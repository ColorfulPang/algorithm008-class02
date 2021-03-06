学习笔记

一、怎么学习算法
  - Leetcode 五毒神掌

二、什么是数据结构
  1) 数据结构是指相互之间存在一种或多种特定关系的数据元素的集合
  2) 数据结构研究的是，数据如何在计算机中进行组织和存储，使得我们可以高效的获得数据或者修改数据
  3) 数据结构 + 算法 = 程序

三、数据结构主要包括
  1) 线性结构 (一维结构)
  - (1) 数组
  - (2) 栈
  - (3) 队列
  - (4) 链表
  - (5) 哈希表
  - ...

  2) 树结构 (二维结果)
  - (1) 二叉树
  - (2) 二分搜索树
  - (3) AVL
  - (4) 红黑树
  - (5) Treap
  - (6) Splay
  - (7) 堆
  - (8) Trie
  - (9) 线段树
  - (10) K-D树
  - (11) 并查集
  - (12) 哈夫曼树
  - ...

  3) 图结构
  - (1) 邻接矩阵
  - (2) 邻接表

四、数据结构应用场景
  1) 数据库<br />
    Mysql，用到树结构：
    AVL; 红黑树; Treap; 伸展树；B树；
    哈希表
  2) 操作系统<br />
    - 多任务切换，用到：<br />
    - 系统栈，优先队列：堆<br />
  3) 文件压缩<br />
    - RAR压缩文件、PNG、MP3、PDF、MP4，用到：<br />
    - 哈夫曼树<br />
  4) 通讯录<br />
    - 快速查询，用到：<br />
    - Trie - 前缀树<br />
  5) 寻路算法<br />
    - 图轮算法，用到<br />
    - DFS：使用栈<br />
    - BFS：使用队列<br />

五、什么是数组<br />
  有序的元素序列码成一排进行存放

六、数组的基本使用<br />
  Java中数组是固定长度不变的，构造时就设置好长度<br />

  于是Java中动态数组实现 - ArrayList
  - 1) 建立私有数组
  - 2) 实现对私有数组增删查改等功能
  - 3) 使用泛型，容纳所有类型数据
  - 4) 扩容
    当添加长度超过数组预设长度，生成新的数组(提前添加额外长度)，将原数组元素逐一复制到新数组<br />
   （根据均摊复杂度 - amortized time complexity，resize触发概率比较<br />低）
  - 5) 缩容 - ArrayList并不会自动缩容<br />
    但如果要实现锁容需要注意复杂度震荡

七、高级线性结构 - 跳表
  1) 数组，数据查询O(1)复杂度，数据插入和删除O(n)；<br />
  2) 链表，数据查询O(n)复杂度，数据插入和删除O(1)；<br />
    Java中LinkList默认为双向链表
  3) 为了解决数组和链表的问题，引入调表。增加多级缓存，提升查询效率