/** @jsx jsx */
import { AllWidgetProps, css, jsx } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { IMConfig } from '../config'

// interface IState {
//   featureServiceUrlInput: string
//   jimuMapView: JimuMapView
// }

import * as FeatureLayer from 'esri/layers/FeatureLayer'

export default function (props: AllWidgetProps<IMConfig>) {
  const [jimuMapView, setJimuMapView] = useState<any>(null)

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)
    }
  }
  const formSubmit = (evt) => {
    evt.preventDefault()
    const layer = new FeatureLayer({
      url:
        'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0',
    })

    // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)
    jimuMapView.view.map.add(layer)
  }

  return (
    <div className='widget-starter jimu-widget'>
      {props.hasOwnProperty('useMapWidgetIds') &&
        props.useMapWidgetIds &&
        props.useMapWidgetIds[0] && (
          <JimuMapViewComponent
            useMapWidgetIds={props.useMapWidgetIds}
            onActiveViewChange={activeViewChangeHandler}
          />
        )}
      <form onSubmit={formSubmit}>
        <div>
          <button>Add Layer</button>
        </div>
      </form>
    </div>
  )
}
