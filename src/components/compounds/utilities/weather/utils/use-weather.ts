import { useState } from 'react';
import { compileHills, toCoords, toFeet } from '../../../../../utils';

export const useWeather = () => {
  const hills = compileHills();

  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function success(position: any) {
        setLat(position.coords.latitude.toFixed(4));
        setLon(position.coords.longitude.toFixed(4));
      },
      function error() {
        setLat(56.6826);
        setLon(5.1023);
      }
    );
    console.log('Hello');
  } else {
    setLat(56.6826);
    setLon(5.1023);
  }

  const { latFormatted, lonFormatted } = toCoords(lat, lon);
  const [latLon, setLatLon] = useState([lat, lon]);

  const [searchField, setSearchField] = useState('');

  const [name, setName] = useState('');
  const [elevation, setElevation] = useState(0);
  const [mark, setMark] = useState('');

  const [titleLocation, setTitleLocation] = useState('Your Location');

  const [title, setTitle] = useState(titleLocation);
  const [subTitle, setSubTitle] = useState(`${latFormatted}, ${lonFormatted}`);
  const [subSubTitle, setSubSubTitle] = useState<string | undefined>(undefined);

  const handleSelect = (e: any) => {
    for (var i in hills.munros) {
      if (
        hills.munros[i].name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        setName(hills.munros[i].name.toLowerCase());
        setLat(hills.munros[i].lat);
        setLon(hills.munros[i].lon);
        setTitleLocation(`${hills.munros[i].name}`);
        setElevation(hills.munros[i].elevation);
        setMark(hills.munros[i].summit);
      }
    }
  };

  const handleInput = (e: any) => {
    setSearchField(e.target.value);

    for (var i in hills.munros) {
      if (searchField === '') {
        setLat(lat);
        setLon(lon);
        setTitleLocation('Your Location');
        setSubTitle(`${latFormatted}, ${lonFormatted}`);
      } else if (
        hills.munros[i].name.toLowerCase().includes(searchField.toLowerCase())
      ) {
        setName(hills.munros[i].name.toLowerCase());
        setLat(hills.munros[i].lat);
        setLon(hills.munros[i].lon);
        setTitleLocation(`${hills.munros[i].name}`);
        setElevation(hills.munros[i].elevation);
        setMark(hills.munros[i].summit);
      }
    }
  };

  const executeInput = () => {
    setTitle(titleLocation);

    if (searchField !== '') {
      setSubTitle(
        `Munro at ${toFeet(elevation)} - ${latFormatted}, ${lonFormatted}`
      );
      setSubSubTitle(mark);
    } else if (!searchField.toLowerCase().includes(name)) {
      setSubTitle(`${latFormatted}, ${lonFormatted}`);
    } else {
      setSubTitle(`${latFormatted}, ${lonFormatted}`);
    }

    setLatLon([lat, lon]);
  };

  return {
    title,
    subTitle,
    subSubTitle,
    latLon,
    handleInput,
    executeInput,
    handleSelect,
  };
};
