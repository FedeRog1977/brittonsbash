import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  compileEvent,
  compileEvents,
  compileEventSports,
  EventProps,
  ProjectProps,
  useScreenWidth,
  useShowElement,
} from '../../../../../utils';
import { emptyEventData } from '../mocks/empty-event-data';

export const useInstantGram = () => {
  const location = useLocation();
  const [url, setUrl] = useState('');
  const [searchParamsHandler, setSearchParamsHandler] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const { events, eventsParsed } = compileEvents();
  const allSport = compileEventSports();
  const sportOnEvent: ProjectProps[] = [];

  const [searchField, setSearchField] = useState('');

  const [event, setEvent] = useState(eventsParsed[0]);
  const [sport, setSport] = useState<ProjectProps[]>([]);
  const [showSport, setShowSport] = useState(false);

  const [eventHandler, setEventHandler] = useState(event);
  const [sportHandler, setSportHandler] = useState(sport);
  const [showSportHandler, setShowSportHandler] = useState(showSport);

  const [is2024, setIs2024] = useState(false);
  const [is2023, setIs2023] = useState(false);
  const [is2022, setIs2022] = useState(false);
  const [is2021, setIs2021] = useState(false);
  const [is2020, setIs2020] = useState(false);

  const { showElement: showSearchList, setShowElement: setShowSearchList } =
    useShowElement();
  const [eventData, setEventData] = useState(emptyEventData);

  console.log(eventData);

  useEffect(() => {
    if (location.search === '') {
      for (var i in allSport) {
        if (eventsParsed[0].names.includes(allSport[i].name)) {
          sportOnEvent.push(allSport[i]);
          setSport(sportOnEvent);
          setShowSport(true);
        }
      }
    } else {
      setUrl(`${location.pathname}${location.search}`);

      for (var i in eventsParsed) {
        if (location.search === `?${eventsParsed[i].id?.toLowerCase()}=`) {
          setEvent(eventsParsed[i]);
          setSport([] as ProjectProps[]);
          setShowSport(false);

          for (var j in allSport) {
            if (eventsParsed[i].names.includes(allSport[j].name)) {
              sportOnEvent.push(allSport[j]);
              setSport(sportOnEvent);
              setShowSport(true);
            }
          }
        }
      }
    }
  }, [searchParams]);

  const handleInput = (e: any) => {
    setSearchField(e.target.value.toLowerCase());

    for (var i in eventsParsed) {
      if (searchField === '') {
        setEventHandler(event);
        setSportHandler(sport);
        setShowSportHandler(showSport);
      } else if (
        eventsParsed[i].names.join(' - ').toLowerCase().includes(searchField)
      ) {
        setSearchParamsHandler(eventsParsed[i].id?.toLowerCase() ?? '');

        setEventHandler(eventsParsed[i]);
        setSportHandler([] as ProjectProps[]);
        setShowSportHandler(false);

        for (var j in allSport) {
          if (eventsParsed[i].names.includes(allSport[j].name)) {
            sportOnEvent.push(allSport[j]);
            setSportHandler(sportOnEvent);
            setShowSportHandler(true);
          }
        }
      }
    }
  };

  const executeInput = () => {
    if (searchField === '') {
      setEvent(event);
      setSport(sport);
      setShowSport(showSport);
    } else {
      setSearchParams(searchParamsHandler);
      setEvent(eventHandler);
      setSport(sportHandler);
      setShowSport(showSportHandler);
    }
  };

  const handleSelect = (e: any) => {
    for (var i in eventsParsed) {
      if (eventsParsed[i].names.join(' - ').includes(e.currentTarget.value)) {
        setEvent(eventsParsed[i]);
        setSport([] as ProjectProps[]);
        setShowSport(false);

        const search = `?${eventsParsed[i].id?.toLowerCase()}=`;
        setUrl(`${location.pathname}${search}`);
        setSearchParams(eventsParsed[i].id?.toLowerCase());

        for (var j in allSport) {
          if (eventsParsed[i].names.includes(allSport[j].name)) {
            sportOnEvent.push(allSport[j]);
            setSport(sportOnEvent);
            setShowSport(true);
          }
        }
      }
    }
  };

  const refactoredEvent = compileEvent({ event, sport, showSport });

  const handleCategory = (value: string) => {
    if (value === '2024') {
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
      setShowSearchList(!showSearchList);
      setEventData(events[2024]);
    }
    if (value === '2023') {
      setIs2024(false);
      setIs2023(true);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
      setShowSearchList(!showSearchList);
      setEventData(events[2023]);
    }
    if (value === '2022') {
      setIs2024(false);
      setIs2023(false);
      setIs2022(true);
      setIs2021(false);
      setIs2020(false);
      setShowSearchList(!showSearchList);
      setEventData(events[2022]);
    }
    if (value === '2021') {
      setIs2024(false);
      setIs2023(false);
      setIs2022(false);
      setIs2021(true);
      setIs2020(false);
      setShowSearchList(!showSearchList);
      setEventData(events[2021]);
    }
    if (value === '2020') {
      setIs2024(false);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(true);
      setShowSearchList(!showSearchList);
      setEventData(events[2020]);
    }
  };

  const { isMobile } = useScreenWidth();

  const { showElement: showDescription, setShowElement: setShowDescription } =
    useShowElement();
  const { showElement: showMatrix, setShowElement: setShowMatrix } =
    useShowElement();

  useEffect(() => {
    setShowMatrix(!isMobile && true);
  }, []);

  const handleToggleElements = (value: string) => {
    if (value === 'description') {
      setShowDescription(!showDescription);
    }
    if (value === 'matrix') {
      setShowMatrix(!showMatrix);
    }
    // Modal cannot be handled here
  };

  return {
    url,
    handleCategory,
    showSearchList,
    eventData,
    handleInput,
    executeInput,
    handleSelect,
    refactoredEvent,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
    handleToggleElements,
    showDescription,
    showMatrix,
  };
};
