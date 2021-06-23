/** @jsx jsx */
import { AllWidgetProps, jsx } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import * as Point from 'esri/geometry/Point'
import { IMConfig } from '../config'

export default function (props: AllWidgetProps<IMConfig>) {
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [jimuMapView, setJimuMapView] = useState<any>(null)

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)

      jmv.view.on('pointer-move', (evt) => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y,
        })
        setLatitude(point.latitude.toFixed(3))
        setLongitude(point.longitude.toFixed(3))
      })
    }
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
      <p>
        Lat/Lon: {latitude} {longitude}
      </p>
    </div>
  )
}
