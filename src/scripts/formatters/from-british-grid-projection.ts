import proj4 from 'proj4'

export function fromBritishGridProjection(coords: any) {
    const coordsFormatted: any = proj4(
        'EPSG:27700',
        'EPSG:4326',
        coords
    ).reverse()

    console.log('X:', coordsFormatted[0], 'Y:', coordsFormatted[1])
    return coordsFormatted
}
