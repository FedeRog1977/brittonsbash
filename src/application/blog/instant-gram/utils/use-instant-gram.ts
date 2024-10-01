import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { RowTableProps } from '../../../../components';
import { mapEvent } from './map-event';
import { isMobile, useShowElement } from '../../../../utils';
import { emptyEventData } from '../mocks/empty-event-data';
import { MappedEvents, Project } from '../../../../utils/types';

export const useInstantGram = (mappedEventSport: Project[], mappedEvents: MappedEvents) => {
  const location = useLocation();
  const [searchParamsHandler, setSearchParamsHandler] = useState('');

  const { events, mappedEvents: mappedEventsUnpacked } = mappedEvents;
  const sportOnEvent: Project[] = [];

  const [searchField, setSearchField] = useState('');

  const [event, setEvent] = useState(mappedEventsUnpacked[0]);
  const [sport, setSport] = useState<Project[]>([]);
  const [showSport, setShowSport] = useState(false);

  const [eventHandler, setEventHandler] = useState(event);
  const [sportHandler, setSportHandler] = useState(sport);
  const [showSportHandler, setShowSportHandler] = useState(showSport);

  const [is2024, setIs2024] = useState(false);
  const [is2023, setIs2023] = useState(false);
  const [is2022, setIs2022] = useState(false);
  const [is2021, setIs2021] = useState(false);
  const [is2020, setIs2020] = useState(false);

  const { showElement: showSearchList, setShowElement: setShowSearchList } = useShowElement();
  const [eventData, setEventData] = useState(emptyEventData);

  const searchParams = new URLSearchParams(window.location.href);

  useEffect(() => {
    // TODO: move back to URLSearchParams like setter
    // if (searchParams.get('event') === null) {
    if (location.search === '') {
      for (var i in mappedEventSport) {
        if (mappedEventsUnpacked[0]?.names.includes(mappedEventSport[i]?.name)) {
          sportOnEvent.push(mappedEventSport[i]);
          setSport(sportOnEvent);
          setShowSport(true);
        }
      }
    } else {
      for (var i in mappedEventsUnpacked) {
        // TODO: move back to URLSearchParams like setter
        // if (searchParams.get('event') === mappedEventsUnpacked[i]?.id?.toLowerCase()) {
        if (location.search.includes(`${mappedEventsUnpacked[i]?.id?.toLowerCase()}`)) {
          setEvent(mappedEventsUnpacked[i]);
          setSport([] as Project[]);
          setShowSport(false);

          for (var j in mappedEventSport) {
            if (mappedEventsUnpacked[i]?.names.includes(mappedEventSport[j]?.name)) {
              sportOnEvent.push(mappedEventSport[j]);
              setSport(sportOnEvent);
              setShowSport(true);
            }
          }
        }
      }
    }
  }, []);

  const handleInput = (e: any) => {
    setSearchField(e.target.value.toLowerCase());

    for (var i in mappedEventsUnpacked) {
      if (searchField === '') {
        setEventHandler(event);
        setSportHandler(sport);
        setShowSportHandler(showSport);
      } else if (mappedEventsUnpacked[i]?.names.join(' - ').toLowerCase().includes(searchField)) {
        setSearchParamsHandler(mappedEventsUnpacked[i]?.id?.toLowerCase() ?? '');
        setEventHandler(mappedEventsUnpacked[i]);
        setSportHandler([] as Project[]);
        setShowSportHandler(false);

        for (var j in mappedEventSport) {
          if (mappedEventsUnpacked[i]?.names.includes(mappedEventSport[j]?.name)) {
            sportOnEvent.push(mappedEventSport[j]);
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
      searchParams.append('event', searchParamsHandler);

      setEvent(eventHandler);
      setSport(sportHandler);
      setShowSport(showSportHandler);
    }
  };

  const handleSelect = (e: any) => {
    for (var i in mappedEventsUnpacked) {
      if (mappedEventsUnpacked[i]?.names.join(' - ').includes(e.currentTarget.value)) {
        searchParams.append('event', `${mappedEventsUnpacked[i]?.id?.toLowerCase()}`);

        setEvent(mappedEventsUnpacked[i]);
        setSport([] as Project[]);
        setShowSport(false);

        for (var j in mappedEventSport) {
          if (mappedEventsUnpacked[i]?.names.includes(mappedEventSport[j]?.name)) {
            sportOnEvent.push(mappedEventSport[j]);
            setSport(sportOnEvent);
            setShowSport(true);
          }
        }
      }
    }

    setShowSearchList(!showSearchList);
  };

  console.log(
    'FULL_LOCATION::::',
    window.location.href,
    '\nPATHNAME::::',
    location.pathname,
    '\nSEARCH::::',
    location.search,
    '\nSEARCH_PARAMS::::',
    searchParams.get('event')
  );

  const mappedEvent = mapEvent(event, sport, showSport);

  const eventSport: RowTableProps = {
    titleRow: {
      leftItem: 'Statistics',
      rightItem: `${mappedEvent.distance} | ${mappedEvent.elevation} | ${mappedEvent.times}`,
    },
    rows: [
      {
        leftItem: 'Islands',
        rightItem: mappedEvent.islands,
      },
      {
        leftItem: 'Munros',
        rightItem: mappedEvent.munros,
      },
      {
        leftItem: 'Munro Tops',
        rightItem: mappedEvent.munroTops,
      },
      {
        leftItem: 'Corbetts',
        rightItem: mappedEvent.corbetts,
      },
      {
        leftItem: 'Corbett Tops',
        rightItem: mappedEvent.corbettTops,
      },
      {
        leftItem: 'Grahams',
        rightItem: mappedEvent.grahams,
      },
      {
        leftItem: 'SubTwos',
        rightItem: mappedEvent.subTwos,
      },
      {
        leftItem: 'Donalds',
        rightItem: mappedEvent.donalds,
      },
    ],
  };

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

  const { showElement: showDescription, setShowElement: setShowDescription } = useShowElement();
  const { showElement: showMatrix, setShowElement: setShowMatrix } = useShowElement();

  useEffect(() => {
    setShowMatrix(!isMobile() && true);
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
    handleCategory,
    showSearchList,
    eventData,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
    handleInput,
    executeInput,
    handleSelect,
    mappedEvent,
    eventSport,
    handleToggleElements,
    showDescription,
    showMatrix,
  };
};
