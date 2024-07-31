// src/store/userSagas.ts
import { call, put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { instance } from '../utils/axiosConfig';
import { SagaIterator } from 'redux-saga';
import { useAppDispatch } from '../redux/store';
import { addToCart, addToLiked, failureData, fetchData } from '../redux/ProductsSlice/ProductsSlice';



function* fetchProductsSaga(): SagaIterator {

  try {
    const { data } = yield call(instance().get, '/cart');
    yield put(addToCart(data));
    yield put((data));
  } catch (error) {
    yield put(failureData(error))
  }
}

function* productsSaga() {
  yield takeLatest(fetchData, fetchProductsSaga)
}

export default productsSaga;
