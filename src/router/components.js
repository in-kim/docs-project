import { DOMAIN_TITLE } from "@/.env";

export const components = [
  {
    path: "layout",
    name: "layout",
    component: () => import("@/views/components/Layout/Layout.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | Layout`,
    },
  },
  {
    path: "button",
    name: "button",
    component: () => import("@/views/components/Button/Button.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | button`,
    },
  },
  {
    path: "table",
    name: "table",
    component: () => import("@/views/components/Table/Table.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | table`,
    },
  },
  {
    path: "grid",
    name: "grid",
    component: () => import("@/views/components/Grid/Grid.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | grid`,
    },
  },
  {
    path: "calendar",
    name: "calendar",
    component: () => import("@/views/components/Calendar/Calendar.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | calendar`,
    },
  },
  {
    path: "form",
    name: "form",
    component: () => import("@/views/components/Form/Form.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | form`,
    },
  },
  {
    path: "form-group",
    name: "form-group",
    component: () => import("@/views/components/Form/Group/Group.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | Form Group`,
    },
  },
  {
    path: "form-input",
    name: "form-input",
    component: () => import("@/views/components/Form/Input/Input.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | Form Input`,
    },
  },
  {
    path: "form-radio",
    name: "form-radio",
    meta: {
      title: `${DOMAIN_TITLE} | Form Radio`,
    },
    component: () => import("@/views/components/Form/Radio/Radio.vue"),
  },
  {
    path: "form-checkbox",
    name: "form-checkbox",
    meta: {
      title: `${DOMAIN_TITLE} | Form Checkbox`,
    },
    component: () => import("@/views/components/Form/Checkbox/Checkbox.vue"),
  },
  {
    path: "form-select",
    name: "form-select",
    meta: {
      title: `${DOMAIN_TITLE} | Form select`,
    },
    component: () => import("@/views/components/Form/Select/Select.vue"),
  },
  {
    path: "form-textarea",
    name: "form-textarea",
    meta: {
      title: `${DOMAIN_TITLE} | Form Textarea`,
    },
    component: () => import("@/views/components/Form/Textarea/Textarea.vue"),
  },
  {
    path: "form-datepicker",
    name: "form-datepicker",
    meta: {
      title: `${DOMAIN_TITLE} | Form Datepicker`,
    },
    component: () =>
      import("@/views/components/Form/Datepicker/Datepicker.vue"),
  },
  {
    path: "tabs",
    name: "tabs",
    meta: {
      title: `${DOMAIN_TITLE} | tabs`,
    },
    component: () => import("@/views/components/Tabs/Tabs.vue"),
  },
  {
    path: "tooltip",
    name: "tooltip",
    component: () => import("@/views/components/Tooltip/Tooltip.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | tooltip`,
    },
  },
  {
    path: "toast",
    name: "toast",
    component: () => import("@/views/components/Toast/Toast.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | toast`,
    },
  },
];
