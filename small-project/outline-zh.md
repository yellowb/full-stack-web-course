# MEAN课程小项目 - AMC（订餐系统）需求说明

## 1. 引言

### 1.1. 目的
为了让同学们巩固MEAN stack知识点，增强动手能力，所以在授课结束后安排一个以小组为单位完成的小项目。请同学们根据下述需求完成设计-编程工作。

### 1.2. 项目综述
需求与Java课程的AMC订餐系统类似，以MEAN作为技术栈，实现包含管理员、商家、顾客3种角色的C2C订餐系统。具体功能会在下面罗列。

### 1.3. 功能结构
![](https://github.com/yellowb/full-stack-web-course/blob/master/small-project/module.png?raw=true)

## 2. A(Admin)
### 2.1. 审核商家注册申请 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)

每一个新注册的商家都需要填写商家信息，提交之后系统会提示管理员对新的商家注册申请进行审核，管理员需要检查商家填写的信息。审核动作和审核状态有如下几种：

| 管理员动作 | 审核状态变成 | 商家状态 |描述  |
| ------------ | ------------ | ------------ | ------------ |
| N/A | 有待审核 | 未激活 |商家刚刚提交注册申请后，审核的初始状态，表示还没有管理员处理过这条审核 |
| 通过 | 审核通过 | 正常 | 管理员批准商家的注册申请，审核流程结束，商家状态变成正常 |
| 驳回 | 驳回请求 | 未激活 | 管理员不批准商家的注册申请，系统需要提示商家修改信息，商家修改信息并提交后，审核的状态变成**有待审核**，管理员可以再次对其审核 |

审核请求的状态转移图:

![](https://github.com/yellowb/full-stack-web-course/blob/master/small-project/review_diagram.png?raw=true)

**商家状态**参考[Reference 1 商家状态](#merchant-flow)

### 2.2. 改变商家的状态 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
管理员可以随时改变**已经通过注册审核的**商家的状态，操作有如下几种：

| 管理员动作 | 商家状态变成 |描述  |
| ------------ | ------------ | ------------ |
| 拉黑 | 拉黑 | 被拉黑的商家与其商品无法被搜索到，商家除了登录系统和查看商家信息外不能做任何其它动作 |
| 拉白 | 正常 | 商家正常状态 |

### 2.3. 处理投诉
管理员可以查看顾客发过来的投诉

### <a name="advertising"> 2.4. 广告位管理 </a>
管理员审核商家发来的申请，同一时间点最多允许六个推荐菜品广告，当申请广告位的申请超过6个时，通过（你自己确定）的逻辑，自动或手动选出6个。

### 2.5. 管理员账号的初始化 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
系统允许存在一个或多个管理员

## 3. M(Merchant)
### 3.1. 商家注册 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
商家注册时需要填写以下信息，提交后系统向管理员发送注册审核请求，等待管理员处理

| 属性 | 描述 |
| ------------ | ------------ |
| 登录id | 英文、数字、下划线的组合 |
| 登录密码 | 英文、数字、下划线的组合 |
| 商家名称 | 不多于30个字符 |
| 商家地址 |  |
| 商家头像 | 图片 |
| 身份证图片| 图片 |

### 3.2. 商家登录 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
检查登录id与登录密码是否匹配，并根据商家状态确定登录后的操作权限：

| 商家状态 | 操作权限 |
| ------------ | ------------ |
| 拉黑 | 登录后除了查看自己的信息外不可以进行任何其它操作 |
| 未激活 | 可以修改注册申请信息 |
| 正常 | 可以使用任何功能 |

**商家状态**参考[Reference 1 商家状态](#merchant-flow)

### 3.3. 商家登出 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
你懂的

### 3.4. 添加/删除/修改/查看菜品 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
增加，删除，修改，查看商家自己的菜单。每一个菜品应包括以下属性：

| 属性 | 描述 |
| ------------ | ------------ |
| 菜品名称 | 不多于30个字符 |
| 菜品价格 |  |
| 菜品种类 |  |
| 菜品图片 |  |
| 顾客评论 |  |

### 3.5. 处理订单 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
当用户下单之后，商家接到订单信息，可以自行选择如下操作：

| 商家动作 | 订单状态变成 |描述  |
| ------------ | ------------ | ------------ |
| 商家拒接 | 商家拒接 | 订单取消 |
| 商家接单 | 商家接单 | 商家接受订单并开始准备菜品 |
| 开始配送 | 正在配送 | 商家开始配送菜品 |

**订单状态**参考[Reference 2 订单状态](#order-flow)

### 3.6. 菜品广告位申请
商家菜品管理中，添加推荐菜品功能，商家向管理员提交申请，并等待审核结果。申请通过后菜品会被推荐到首页的滚动广告中。参考：[2.4. 广告位管理](#advertising)

### <a name="merchant-flow"> Reference 1 商家状态 </a>
![](https://github.com/yellowb/full-stack-web-course/blob/master/small-project/merchant_diagram.png?raw=true)

### <a name="order-flow"> Reference 2 订单状态 </a>
![](https://github.com/yellowb/full-stack-web-course/blob/master/small-project/order_diagram.png?raw=true)

## 4. C(Customer)
### 4.1. 顾客注册 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
顾客注册时需要填写以下信息，不需要被审核

| 属性 | 描述 |
| ------------ | ------------ |
| 登录id | 英文、数字、下划线的组合 |
| 登录密码 | 英文、数字、下划线的组合 |
| 用户昵称 | 不多于30个字符 |
| 手机号码 | 需检查是否合法手机号码 |
| 头像 | 图片 |
| 收货地址 | 可以多个，至少一个 |

### 4.2. 查看商家列表 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
顾客可以查看所有商家的列表，或根据菜品类型进行筛选，只查看拥有特定菜品类型的商家

### 4.3. 查看商家菜品列表 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
顾客可以查看某个商家下的所有菜品，或根据菜品类型进行筛选，只查看某种特定类型的菜品

### 4.4. 购物车功能 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
购物车信息不入库，当用户进入一个新的商家并添加菜品到购物车时，将原本购物车中菜品删除，并给予友好提示

### 4.5. 下单功能 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
用户点击购物车中的确认下单按钮，弹出提示框，提示用户确认收货地址等信息，点击确认按钮，则生成订单

### 4.6. 查看订单状态 ![](https://placehold.it/20/f03c15/000000?text=+) (必做)
订单有6个状态：等待商家接单，商家拒接，商家接单，正在配送，订单完成, 订单取消. **订单状态**参考[Reference 2 订单状态](#order-flow)

用户只有在等待商家接单时可取消订单，其他状态都不能取消订单
在完成配送之后，用户可手动确认订单完成，否则系统将在一段时间之后自动确认订单

### 4.7. 订单评论功能
在确认订单之后，用户可评价订单，包括星级与评论，一个订单只可评论一次

### 4.8. 用户投诉功能
当用户在某个商家下过订单并且订单已完成，若用户不满意商家，则可点击商家首页的投诉按钮，填写投诉内容进行投诉

### 4.9. 查看菜品评论
顾客可以查看某个菜品下过往订单顾客对这个菜品的星级和评论。

### 4.10. 首页广告
以轮播方式展现推荐的商家菜品，广告最多数量为6个。参考：[2.4. 广告位管理](#advertising)

### 4.11. 顾客添加收货地址
用户可以添加收货地址，可以有多个。




