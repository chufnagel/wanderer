import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import chroma from "chroma-js";
import subregions from "./subregions";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

const colorScale = chroma
  .scale([
    "b6fbea", "ccccff", "663894"
  ]) // icy teal, pastel lavender, dark purple
  .mode("lch")
  .colors(24);

class GlobalMap extends Component {
  state = {
    subregions: subregions
  };
  render() {
    return (
      <div className="global-map" style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 100,
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={360}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[0, 20]}>
            <Geographies geography={ "world-1.json" }>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    onClick={this.handleClick}
                    style={{
                      default: {
                        fill:
                          colorScale[
                            subregions.indexOf(geography.properties.subregion)
                          ],
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: chroma(
                          colorScale[
                            subregions.indexOf(geography.properties.subregion)
                          ]
                        ).darken(0.5),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      pressed: {
                        fill: chroma(
                          colorScale[
                            subregions.indexOf(geography.properties.subregion)
                          ]
                        ).brighten(0.5),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

GlobalMap.propTypes = {
  // does not currently have any props, but will
  // when we have things in state like activeUser
};

export default GlobalMap;
