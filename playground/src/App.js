import React, { Component } from "react";
import "./App.css";
// import ResponsiveBar from "./components/ResponsiveBar/ResponsiveBar";
import { ResponsiveBar } from '@nivo/bar'

class App extends Component {
  state = {
    data: [
      {
        country: "AD",
        "hot dog": 207,
        
        burger: 137,
       
        sandwich: 56,
        
        kebab: 190,
      
        fries: 165,
      
        donut: 127
      
      },
      {
        country: "AE",
        "hot dog": 146,
      
        burger: 52,
      
        sandwich: 149,
        
        kebab: 168,
      
        fries: 173,
       
        donut: 107
        
      },
      {
        country: "AF",
        "hot dog": 420,
        
        burger: 168,
      
        sandwich: 43,
       
        kebab: 60,
      
        fries: 177,
        
        donut: 154
       
      },
      {
        country: "AG",
        "hot dog": 130,
       
        burger: 164,
      
        sandwich: 126,
        
        kebab: 2,
       
        fries: 157,
        
        donut: 58,
        
      },
      {
        country: "AI",
        "hot dog": 43,
       
        burger: 121,
        
        sandwich: 85,
       
        kebab: 1,
       
        fries: 154,
       
        donut: 105
       
      },
      {
        country: "AL",
        "hot dog": 197,
        
        burger: 117,
        
        sandwich: 142,
       
        kebab: 6,
        
        fries: 53,
        
        donut: 175
        
      },
      {
        country: "AM",
        "hot dog": 173,
        
        burger: 166,
    
        sandwich: 190,
       
        kebab: 183,
       
        fries: 186,
        
        donut: 56,
        
      },
      {
        country: "Kenya",
        "hot dog": 143,
        
        burger: 100,
    
        sandwich: 190,
       
        kebab: 183,
       
        fries: 186,
        
        donut: 56,
        
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <p>This is my react app</p>
        <ResponsiveBar
        data={this.state.data}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colors="nivo"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        // fill={[
        //     {
        //         "match": {
        //             "id": "fries"
        //         },
        //         "id": "dots"
        //     },
        //     {
        //         "match": {
        //             "id": "sandwich"
        //         },
        //         "id": "lines"
        //     }
        // ]}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": 32
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    );
  }
}

export default App;
