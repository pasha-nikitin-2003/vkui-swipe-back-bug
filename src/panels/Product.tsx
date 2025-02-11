import {
  Group,
  Panel,
  PanelHeader,
  Button,
  Div,
  ButtonGroup,
  SimpleCell,
  NavIdProps,
} from '@vkontakte/vkui'
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

import { DEFAULT_VIEW_PANELS } from '../routes'
import { useEffect, useState } from 'react'

export function ProductPanel(props: NavIdProps) {
  const [disabled, setDisabled] = useState(true)
  const params = useParams<'id'>({ panel: DEFAULT_VIEW_PANELS.PRODUCT })
  const routeNavigator = useRouteNavigator()
  const next = parseInt(params?.id ?? '0') + 1

  useEffect(() => {
    setDisabled(false)
  }, [params?.id])

  return (
    <Panel id={props.id}>
      <PanelHeader>Product</PanelHeader>
      <Group>
        <SimpleCell>{JSON.stringify(params)}</SimpleCell>
        <Div>
          <ButtonGroup>
            <Button mode='secondary' onClick={() => routeNavigator.back()}>
              Back
            </Button>
            <Button
              disabled={disabled}
              onClick={() => {
                setDisabled(true)
                routeNavigator.push(`/product/${next}`)
              }}
            >
              Go to next product
            </Button>
          </ButtonGroup>
        </Div>
      </Group>
    </Panel>
  )
}
