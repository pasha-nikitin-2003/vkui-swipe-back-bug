import {
  Group,
  Panel,
  PanelHeader,
  Button,
  Div,
  NavIdProps,
} from '@vkontakte/vkui'
import {
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'

export function HomePanel(props: NavIdProps) {
  const routeNavigator = useRouteNavigator()

  return (
    <Panel id={props.id}>
      <PanelHeader>HOME</PanelHeader>
      <Group>
        <Div>
          <Button onClick={() => routeNavigator.push(`/product/0`)}>
            Go to 0 product
          </Button>
        </Div>
      </Group>
    </Panel>
  )
}
