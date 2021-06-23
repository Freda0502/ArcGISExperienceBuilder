/** @jsx jsx */
import { jsx } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { JimuMapViewSelector } from 'jimu-ui/advanced/setting-components'
import { IMConfig } from '../config'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    })
  }

  return (
    <div className='widget-setting-demo'>
      <JimuMapViewSelector
        useMapWidgetIds={props.useMapWidgetIds}
        onSelect={onMapWidgetSelected}
      />
    </div>
  )
}
