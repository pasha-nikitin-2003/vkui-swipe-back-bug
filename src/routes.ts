import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "home",
  PRODUCT: "product",
};

const panels = [
  createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
  createPanel(DEFAULT_VIEW_PANELS.PRODUCT, "/product/:id", [], ["id"]),
];

const views = [createView(DEFAULT_VIEW, panels)];

export const routes = RoutesConfig.create([createRoot(DEFAULT_ROOT, views)]);

export const router = createHashRouter(routes.getRoutes());
