import {
  unstable_ViewInfinite as View,
  SplitCol,
  SplitLayout,
} from '@vkontakte/vkui'
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'

import { DEFAULT_VIEW_PANELS } from './routes'
import { HomePanel } from './panels/Home'
import { ProductPanel } from './panels/Product'

export default function App() {
  const routeNavigator = useRouteNavigator()
  const { panel: activePanel = DEFAULT_VIEW_PANELS.PRODUCT, panelsHistory } =
    useActiveVkuiLocation()

  return (
    <SplitLayout>
      <SplitCol>
        <View
          history={panelsHistory}
          activePanel={activePanel}
          onSwipeBack={() => {
            routeNavigator.back()
          }}
        >
          <HomePanel id={DEFAULT_VIEW_PANELS.HOME} />
          <ProductPanel id={DEFAULT_VIEW_PANELS.PRODUCT} />
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
