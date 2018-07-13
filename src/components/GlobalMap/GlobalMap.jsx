import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Tooltip from "@material-ui/core/Tooltip";
import chroma from "chroma-js";
import continents from "./continents";
import { LOCATION_PROFILE } from "../../constants";

const continentColors = [
  chroma("F4C8D9"), // queen pink // Asia
  chroma("B1E590"), // granny smith apple // Africa
  chroma("DBCBF4"), // pale lavender // North America
  chroma("79E0C8"), // pearl aqua // South America
  chroma("9BE6F1"), // winter wizard (icy blue) // Antarctica
  chroma("9BBEFF"), // baby blue eyes // Europe
  chroma("FFE575"), // yellow // Oceania
  chroma("FFF") // white // Seven seas (open oceans)
];
const GlobalMap = props => {
  const {
    setHeader,
    changeSelectedLocation,
    getPointsOfInterest,
    getAttractions,
    getLocationBasicInfo,
    getVisitedCount,
    getFaveCount,
    getAlbumPhotos,
    userId,
    friendsId
  } = props;
  return (
    <div
      className="global-map"
      style={{
        width: "100%",
        maxWidth: 1000,
        marginLeft: "130px",
        margin: "auto",
        textAlign: "center"
      }}
    >
      <ComposableMap
        projectionConfig={{
          scale: 110,
          rotation: [-11, 0, 0]
        }}
        width={1000}
        height={360}
        style={{
          width: "100%",
          height: "auto"
        }}
      >
        <Geographies geography="world-1.json">
          {(geographies, projection) =>
            geographies.map(geography => (
              <Tooltip
                key={geography.properties.name}
                id="tooltip-country"
                title={geography.properties.name}
                placement="top-start"
              >
                <Link to="/search">
                  <Geography
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill:
                          continentColors[
                            continents.indexOf(geography.properties.continent)
                          ],
                        stroke: "rgba(81, 59, 114, 1)",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: continentColors[
                          continents.indexOf(geography.properties.continent)
                        ]
                          .brighten(0.6)
                          .saturate(0.2),
                        stroke: "rgba(81, 59, 114, 1)",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      pressed: {
                        fill: continentColors[
                          continents.indexOf(geography.properties.continent)
                        ].luminance(0.5, "hsl"),
                        stroke: "rgba(81, 59, 114, 1)",
                        strokeWidth: 0.75,
                        outline: "none"
                      }
                    }}
                    onClick={() => {
                      setHeader(LOCATION_PROFILE);
                      changeSelectedLocation(geography.properties.name);
                      getLocationBasicInfo(geography.properties.name);
                      getPointsOfInterest(geography.properties.name);
                      getAttractions(geography.properties.name);
                      getVisitedCount(geography.properties.name);
                      getFaveCount(geography.properties.name);
                      getAlbumPhotos(
                        friendsId.concat(userId),
                        geography.properties.name
                      );
                    }}
                  />
                </Link>
              </Tooltip>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

GlobalMap.propTypes = {
  setHeader: PropTypes.func.isRequired,
  changeSelectedLocation: PropTypes.func.isRequired,
  getPointsOfInterest: PropTypes.func.isRequired,
  getAttractions: PropTypes.func.isRequired,
  getLocationBasicInfo: PropTypes.func.isRequired,
  getVisitedCount: PropTypes.func.isRequired,
  getFaveCount: PropTypes.func.isRequired,
  getAlbumPhotos: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  friendsId: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GlobalMap;
