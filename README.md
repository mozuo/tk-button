## tk-button
install
```shell
npm install tk-button
```

## Quick Start

```js
import tkButton from 'tk-button'

```
in component
```js
components: {
    tkButton
}
```
in template
```js
<tk-button>默认</tk-button>
<tk-button btn="success">成功</tk-button>
<tk-button btn="info">一般信息</tk-button>
<tk-button btn="warning">警告</tk-button>
<tk-button btn="danger">危险</tk-button>
<tk-button btn="danger" :disabled="true">禁用</tk-button>
<h2>图标样式</h2>
<tk-button icon="user-md">默认</tk-button>
<tk-button icon="user-md" btn="success">成功</tk-button>
<tk-button icon="user-md" btn="info">一般信息</tk-button>
<tk-button btn="danger" :loading="true">危险</tk-button>
<h2>尺寸样式</h2>
<tk-button icon="user-md" size="block">默认</tk-button>
<tk-button icon="user-md" btn="success" size="small">成功</tk-button>
<tk-button icon="user-md" btn="info" size="larger">一般信息</tk-button>
<tk-button btn="danger" :loading="true" size="block">危险</tk-button>
```

