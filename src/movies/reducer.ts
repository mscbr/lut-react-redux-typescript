import { EReduxActionTypes } from '../helpers/rootReducer';
import { IReduxGetMoviesAction } from './actions';

export interface IMovie {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IReduxMoviesState {
  movies: IMovie[];
  moviesLoaded: boolean;
}

const initialState: IReduxMoviesState = {
  movies: [],
  moviesLoaded: false
};

export default function(state: IReduxMoviesState = initialState, action: IReduxGetMoviesAction) {
  const { type, data } = action;
  switch (type) {
    case EReduxActionTypes.GET_MOVIES:
      return { ...state, movies: data, moviesLoaded: true };
    default:
      return state;
  }
}
