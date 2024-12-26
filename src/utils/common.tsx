const MAX_AGE = 122 // apparently this was the age of the longest-lived human
  const ZONE_UPPER_BOUND : Map<number, [number, number]> = new Map([
    [1, [0.5, 0.6]],
    [2, [0.6, 0.7]],
    [3, [0.7, 0.8]],
    [4, [0.8, 0.9]],
    [5, [0.9, 1.0]]
  ])

export const convertTextToInt = (text: string) => {
    try {
        return parseInt(text)
    } catch (error) {
        console.error("You age must be entered as a number")
    }
    return NaN
}


export const calculateMaxHeartRate = (age: number) => {
    if (age < 0) {
        console.error("Age must be more than 0")
        return
    } else if (age > MAX_AGE) {
        console.error("Please enter a reasonable age, I'm not saying you can't do it, but the longest-lived human died at 122 years old!")
        return
    }

    return 220 - age
}

export const calculateZones = (maxHeartRate: number) => {
    const zoneHeartRateMap : Map<number, [number, number]> = new Map()
    ZONE_UPPER_BOUND.forEach((bounds, zone) => {
      const lowerHeartRate = Math.ceil(bounds[0] * maxHeartRate)
      const upperHeartRate = Math.floor(bounds[1] * maxHeartRate)
      zoneHeartRateMap.set(zone, [lowerHeartRate,upperHeartRate])
    })
    return zoneHeartRateMap
}