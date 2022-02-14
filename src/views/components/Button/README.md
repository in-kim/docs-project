# Button

> osc korea template 버튼을 사용하려면 구성요소 `<osc-button>`을 include 하십쇼.
> osc korea template 버튼은 상황별 크기, 변형, 상태를 지원 합니다..

## Overview

OSC Korea button 구성 요소는 `<osc-button>` component 를 사용하여 `<button>` 요소, `<a>` 요소, 또는
`<router-link>` 구성 요소를 생성한다.

```html
<div>
  <osc-button>Button</osc-button>
  <osc-button variant="danger">Button</osc-button>
  <osc-button variant="success">Button</osc-button>
  <osc-button variant="outline-primary">Button</osc-button>
</div>

<!-- b-button.vue -->
```

## 반환요소 유형

`<osc-button>` 구성요소는 일반적으로 `<button>` 요소를 렌더링 한다.
href prop value가 있다면 `<a>` 요소 를 렌더링 할 수 있다.
`to` prop value가 있다면 `vue-router` `<router-link>` 렌더링 한다.

```html
<div>
  <osc-button>I am a Button</osc-button>
  <osc-button href="#">I am a Link</osc-button>
</div>

<!-- b-button-types.vue -->
```

## Type

button type(`'submit'`, `'reset'`, ....)을 지정 할 수 있습니다.

`type` prop는 `href` 또 `to` props value값이 유효할때 아무런 영향을 미치지 않습니다.

## Sizing

`size` prop 지정을 통해 `lg` 또는 `sm` size를 지정할 수 있습니다.

```html
<b-row>
  <b-col lg="4" class="pb-2"
    ><osc-button size="sm">Small Button</osc-button></b-col
  >
  <b-col lg="4" class="pb-2"><osc-button>Default Button</osc-button></b-col>
  <b-col lg="4" class="pb-2"
    ><osc-button size="lg">Large Button</osc-button></b-col
  >
</b-row>

<!-- osc-button-sizes.vue -->
```

## 상황별 버튼

`variant` prop 설정으로 상황별 버튼을 생성 할 수 있습니다..

기본적으로 `<osc-button>` 은 `secondary` variant 반환합니다..

### variants color 종류

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

```html
<div>
  <b-button variant="primary">Primary</b-button>
  <b-button variant="secondary">Secondary</b-button>
  <b-button variant="success">Success</b-button>
  <b-button variant="danger">Danger</b-button>
  <b-button variant="warning">Warning</b-button>
  <b-button variant="info">Info</b-button>
  <b-button variant="light">Light</b-button>
  <b-button variant="dark">Dark</b-button>
</div>

<!-- b-button-solid.vue -->
```

### 윤곽선 있는 버튼

배경색이 없고 윤곽선만 있는 버튼을 사용하고 싶을때 `outline-*` 커스텀을 이용해 윤곽선만 있는 버튼을 사용할 수 있습니다.
`outline-*` 커스텀을 할 경우 모든 배경이미지와 색상을 제거 합니다. `<b-button>`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`,
`outline-info`, `outline-light` , `outline-dark`.

```html
<div>
  <b-button variant="outline-primary">Primary</b-button>
  <b-button variant="outline-secondary">Secondary</b-button>
  <b-button variant="outline-success">Success</b-button>
  <b-button variant="outline-danger">Danger</b-button>
  <b-button variant="outline-warning">Warning</b-button>
  <b-button variant="outline-info">Info</b-button>
  <b-button variant="outline-light">Light</b-button>
  <b-button variant="outline-dark">Dark</b-button>
</div>

<!-- b-button-outline.vue -->
```

### Link variant

Variant `link` value는 버튼의 패딩과 크기 기본값을 유지하면서 링크 모양의 버튼을 렌더링 한다.

```html
<div>
  <b-button variant="link">Link</b-button>
</div>

<!-- b-button-link.vue -->
```

**Tip:** `text-decoration-none` prop를 추가하여 링크 버튼에 호버 밑줄을 제거 할 수 있다.

## Block level buttons

`block` prop를 지정하여 부모의 영역을 모두 차지하는 블록을 만들 수 있다.

```html
<div>
  <b-button block variant="primary">Block Level Button</b-button>
</div>

<!-- b-button-block.vue -->
```

## Pill style

둥근형태의 버튼을 만들고 싶다면 `pill` prop를 지정하면 된다.

```html
<div>
  <b-button pill>Button</b-button>
  <b-button pill variant="primary">Button</b-button>
  <b-button pill variant="outline-secondary">Button</b-button>
  <b-button pill variant="success">Button</b-button>
  <b-button pill variant="outline-danger">Button</b-button>
  <b-button pill variant="info">Button</b-button>
</div>

<!-- b-button-pill.vue -->
```

## Squared style

정사각형의 버튼을 만들고 싶다면 `squared` prop를 지정하면 된다.

```html
<div>
  <b-button squared>Button</b-button>
  <b-button squared variant="primary">Button</b-button>
  <b-button squared variant="outline-secondary">Button</b-button>
  <b-button squared variant="success">Button</b-button>
  <b-button squared variant="outline-danger">Button</b-button>
  <b-button squared variant="info">Button</b-button>
</div>

<!-- b-button-square.vue -->
```

## Disabled state

disabled 상태를 원한다면 `disabled` prop 설정하면 된다.
`<a>` 요소와 `<router-link>` 요소에서도 `disabled`로 렌더링 한다.

```html
<div>
  <b-button disabled size="lg" variant="primary">Disabled</b-button>
  <b-button disabled size="lg">Also Disabled</b-button>
</div>

<!-- b-button-disabled.vue -->
```

## Pressed state and toggling

prop `pressed` ture를 지정하게 되면 버튼을 눌렀을 때 배경이 지정 됩니다.

`pressed` prop

- `true`: `.active` class 클래스를 설정하고 `aria-pressed="true"` 속성을 추가한다.
- `false`: `.active` class 클래스를 지우고 `aria-pressed="false"` 속성을 추가한다.
- `null`: (default) `.active` 클래스와 `aria-pressed` 속성이 설정되지 않습니다.

활성 상태와 비활성 상태간에 전환할 수 있는 버튼을 만드려면 `.sync` prop를 사용하면 된다.

```html
<template>
  <div>
    <h5>Pressed and un-pressed state</h5>
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>

    <h5 class="mt-3">Toggleable Button</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p>Pressed State: <strong>{{ myToggle }}</strong></p>

    <h5>In a button group</h5>
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="primary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Pressed States: <strong>{{ btnStates }}</strong></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myToggle: false,
        buttons: [
          { caption: "Toggle 1", state: true },
          { caption: "Toggle 2", state: false },
          { caption: "Toggle 3", state: true },
          { caption: "Toggle 4", state: false },
        ],
      };
    },
    computed: {
      btnStates() {
        return this.buttons.map((btn) => btn.state);
      },
    },
  };
</script>

<!-- b-pressed.vue -->
```

## Properties

| Property       | Type               | Default     | Description                                                                                                                                                                                                        |
| -------------- | ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`       | `Boolean`          | `false`     | When set to `true`, places the component in the active state with active styling                                                                                                                                   |
| `active-class` | `String`           | ` `         | <router-link> prop: Configure the active CSS class applied when the link is active. Typically you will want to set this to class name 'active'                                                                     |
| `block`        | `Boolean`          | `false`     | Renders a 100% width button (expands to the width of its parent container)                                                                                                                                         |
| `disabled`     | `Boolean`          | `false`     | When set to `true`, disables the component's functionality and places it in a disabled state                                                                                                                       |
| `href`         | `String`           | ` `         | <b-link> prop: Denotes the target URL of the link for standard a links                                                                                                                                             |
| `pill`         | `Boolean`          | `false`     | Boolean false Renders the button with the pill style appearance when set to 'true'                                                                                                                                 |
| `rel`          | `String`           | `null`      | String null <b-link> prop: Sets the `rel` attribute on the rendered link                                                                                                                                           |
| `target`       | `String`           | `_self`     | <b-link> prop: Sets the `target` attribute on the rendered link                                                                                                                                                    |
| `size`         | `String`           | ` `         | Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'                                                                                                                                          |
| `squared`      | `Boolean`          | `false`     | Renders the button with non-rounded corners when set to 'true'                                                                                                                                                     |
| `to`           | `Object or String` | `100%`      | <router-link> prop: Denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a Location descriptor object |
| `type`         | `String`           | `button`    | The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'                                                                                                                    |
| `variant`      | `String`           | `secondary` | Applies one of the Bootstrap theme color variants to the component                                                                                                                                                 |

## Event

| Event   | Arguments                 | Description                              |
| ------- | ------------------------- | ---------------------------------------- |
| `click` | Native click event object | Emitted when non-disabled button clicked |
