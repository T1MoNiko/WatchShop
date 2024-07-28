// src/store/userSagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './userSlice';
import { instance } from '../utils/axiosConfig';
import { SagaIterator } from 'redux-saga';
import { useAppDispatch } from '../redux/store';
import { addToCart, addToLiked } from '../redux/CartSlice/ProductsSlice';

const dispatch = useAppDispatch()

function* fetchUserSaga(): SagaIterator {
  try {
    const response = yield call(instance().get, '/cart');
    yield put(dispatch(addToCart()));
  } catch (err) {
    yield ;
  }
}

function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}

export default userSaga;
