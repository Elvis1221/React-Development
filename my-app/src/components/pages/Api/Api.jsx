import React, {useCallback, useEffect, useState} from 'react';

import "./api.css";


export const Api = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div className='Api'>
        <PeopleInfo id={value}/>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setVisible(false)}>hide</button>
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const getPeople = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(r => r.json())
    .then(data => data);
};

const useRequest = (request) => {
  const [dataState, setDataState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    setDataState({
      data: null,
      loading: true,
      error: null
    });
    request()
      .then(data => setDataState({
        data,
        loading: false,
        error: null
      }))

  }, [request]);
  return dataState
};

const usePeopleInfo = (id) => {
  const request = useCallback(() => getPeople(id), [id]);
  return useRequest(request)
};
// Component INFORMATION PEOPLE
const PeopleInfo = ({id}) => {
  const {data, loading, error} = usePeopleInfo(id);
  if (error) {
    return <div> Что-то пошло не так =(</div>
  }
  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className='test'>
      <div className='information-people'>
        <span>Порядковый номер: {id} </span>
        <h4>Информация о персонаже:</h4>
        <span>Имя: {data?.name}</span>
        <span>Рост: {data?.height}</span>
        <span>Вес: {data?.mass}</span>
        <span>Цвет волос: {data?.hair_color}</span>
        <span>Цвет кожи: {data?.skin_color}</span>
        <span>Цвет глаз: {data?.eye_color}</span>
        <span>Год рождения: {data?.birth_year}</span>
        <span>Пол:{data?.gender}</span>
      </div>
      <span>Планета :{data?.homeworld}</span>
      <span>
        <h4>Снимался в фильмах:</h4>
        {
          data?.films.map(films => <Films films={films}/>)
        }
      </span>
      <span>{data?.species}</span>
      <span>
        {
          data?.vehicles.map(vehicles => <Vehicles vehicles={vehicles}/>)
        }
      </span>
      <span>
        {
          data?.starships.map(starships => <Starships starships={starships}/>)
        }
      </span>
      <div>
        <span>{data?.created}</span>
        <span>{data?.edited}</span>
      </div>
      <form action={data?.url} target="_blank">
        <button>Переход по ссылке</button>
      </form>
    </div>
  )
};

// Component INFORMATION Films
const Films = ({films}) => {
  return (
    <div>
      <span>{films}</span>
    </div>
  )
};
// Component INFORMATION Vehicles
const Vehicles = ({vehicles}) => {
    return (
    <div>
      <span>{vehicles}</span>
    </div>
  )
};
// Component INFORMATION Starships

const Starships = ({starships}) => {
  return (
    <div>
      <span>{starships}</span>
    </div>
  )
};