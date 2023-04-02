import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
} from "react-simple-maps";

//https://www.react-simple-maps.io/examples/zoom-pan/

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

export interface MapChartProps {
  setSelectedLocation: (e: string) => void;
}

export const MapChartWrapper = ({ setSelectedLocation }: MapChartProps) => {
  return (
    <div>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup
          center={[-91.862, 46.844]}
          zoom={3}
          onMoveStart={({ coordinates, zoom }) => {
            console.log(coordinates, zoom);
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[-78.667, 43.8944]}
            dx={-20}
            dy={-30}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.25,
              strokeLinecap: "round",
            }}
          >
            <text
              className="cursor-pointer"
              onClick={() => setSelectedLocation("Toronto")}
              x="-1"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={5}
            >
              {"Toronto"}
            </text>
          </Annotation>
          <Marker coordinates={[-78.667, 43.8944]}>
            <circle r={1} fill="#FF5533" />
          </Marker>

          <Annotation
            subject={[-79.667, 43.1944]}
            dx={-20}
            dy={-10}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.25,
              strokeLinecap: "round",
            }}
          >
            <text
              className="cursor-pointer"
              x="-1"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={5}
              onClick={() => setSelectedLocation("Hamilton")}
            >
              {"Hamilton"}
            </text>
          </Annotation>
          <Marker coordinates={[-122.2827, 49.1944]}>
            <circle r={1} fill="#FF5533" />
          </Marker>
          <Annotation
            subject={[-122.2827, 49.1944]}
            dx={-20}
            dy={-10}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.25,
              strokeLinecap: "round",
            }}
          >
            <text
              className="cursor-pointer"
              x="-1"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={5}
              onClick={() => setSelectedLocation("Vancouver")}
            >
              {"Vancouver"}
            </text>
          </Annotation>
          <Marker coordinates={[-73.967, 41.1944]}>
            <circle r={1} fill="#FF5533" />
          </Marker>
          <Annotation
            subject={[-73.967, 41.1944]}
            dx={-20}
            dy={-5}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.25,
              strokeLinecap: "round",
            }}
          >
            <text
              className="cursor-pointer"
              x="-1"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={5}
              onClick={() => setSelectedLocation("New York City")}
            >
              {"New York City"}
            </text>
          </Annotation>
          <Marker coordinates={[-80.167, 26.1944]}>
            <circle r={1} fill="#FF5533" />
          </Marker>
          <Annotation
            subject={[-79.967, 26.1944]}
            dx={-20}
            dy={-5}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.25,
              strokeLinecap: "round",
            }}
          >
            <text
              className="cursor-pointer"
              x="-1"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={5}
              onClick={() => setSelectedLocation("Miami")}
            >
              {"Miami"}
            </text>
          </Annotation>
          <Marker coordinates={[-79.667, 43.1944]}>
            <circle r={1} fill="#FF5533" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChartWrapper;
