import React, { Component } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Tooltip from "@material-ui/core/Tooltip";
import chroma from "chroma-js";
import continents from "./continents";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

const continentColors = [
  chroma("F4C8D9"), // queen pink // Asia
  chroma("BCFF93"), // mint green // Africa
  chroma("DBCBF4"), // pale lavender // North America
  chroma("79E0C8"), // pearl aqua // South America
  chroma("9BE6F1"), // winter wizard (icy blue) // Antarctica
  chroma("9BBEFF"), // baby blue eyes // Europe
  chroma("FFEBBC"), // lemon meringue // Oceania
  chroma("FFEBBC") // white // black // Seven seas (open oceans)
];
class GlobalMap extends Component {
  state = {
    continents,
    selectedCountry: ""
  };

  changeSelectedCountry = c => {
    this.setState({
      selectedCountry: c
    });
  };

  render() {
    return (
      <div className="global-map" style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 110,
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={360}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <Geographies geography={"world-1.json"}>
            {(geographies, projection) =>
              geographies.map((geography, i) => (
                <Tooltip
                  key={geographies[i]}
                  id="tooltip-country"
                  title={geography.properties.name}
                  placement="top-start"
                  onOpen={e => this.changeSelectedCountry(e)}
                  onClose={() => this.changeSelectedCountry(null)}
                >
                  <Geography
                    geography={geography}
                    projection={projection}
                    onClick={e => this.handleClick(e)}
                    style={{
                      default: {
                        fill:
                          continentColors[
                            continents.indexOf(geography.properties.continent)
                          ],
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: continentColors[
                          continents.indexOf(geography.properties.continent)
                        ]
                          .brighten(0.5)
                          .saturate(0.3),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      pressed: {
                        fill: continentColors[
                          continents.indexOf(geography.properties.continent)
                        ]
                          .darken()
                          .saturate(0.5),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      }
                    }}
                  />
                </Tooltip>
              ))
            }
          </Geographies>
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
