import './HeartzoneTable.css'
import { useContext, useEffect, useState } from "react";
import { calculateMaxHeartRate, calculateZones } from "../utils/common";
import AgeContext from "../contexts/AgeContext";

function HeartZoneTable() {
    const {age} = useContext(AgeContext);
    const [heartRateZones, setHeartRateZones] = useState<Map<number, [number, number]>>(new Map())
    
    useEffect(() => {
        console.log("age changed to " + age)
        const maxHeartRate = calculateMaxHeartRate(age)
        if (maxHeartRate) {
          console.log("calculating zones")
          const heartRateZones = calculateZones(maxHeartRate)
          setHeartRateZones(heartRateZones)
          console.log(heartRateZones)
        }
      }, [age]);

    if (heartRateZones.size === 0) {
        return <></>;
    } else {
        return (
            <div className="zoneDataTableContainer">
                <table className="zoneDataTable">
                    <thead>
                        <tr className="zoneDataTableRow">
                        <th>Zone</th>
                        <th>BPM Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Array.from(heartRateZones).map(([zone, range]) => {
                            return (
                            <tr className="zoneDataTableRow">
                                <td>{zone}</td>
                                <td>{range[0]}-{range[1]}</td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default HeartZoneTable