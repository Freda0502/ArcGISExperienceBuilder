/** @jsx jsx */
import { React, AllWidgetProps, jsx } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import * as Point from 'esri/geometry/Point'
import { IMConfig } from '../config'

export default class Widget extends React.PureComponent<
  AllWidgetProps<IMConfig>,
  any
> {
  state = {
    jimuMapView: null,
    latitude: '',
    longitude: '',
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      this.setState({
        jimuMapView: jmv,
      })

      jmv.view.on('pointer-move', (evt) => {
        const point: Point = this.state.jimuMapView.view.toMap({
          x: evt.x,
          y: evt.y,
        })
        this.setState({
          latitude: point.latitude.toFixed(3),
          longitude: point.longitude.toFixed(3),
        })
      })
    }
  }

  render() {
    return (
      <div className='widget-starter jimu-widget'>
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
            <JimuMapViewComponent
              // useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              useMapWidgetIds={this.props.useMapWidgetIds}
              onActiveViewChange={this.activeViewChangeHandler}
            />
          )}
        <p>
          Lat/Lon: {this.state.latitude} {this.state.longitude}
        </p>
      </div>
    )
  }
}
