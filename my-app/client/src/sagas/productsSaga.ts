// src/store/userSagas.ts
import { call, put, take, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { instance } from '../utils/axiosConfig';
import { SagaIterator } from 'redux-saga';
import { useAppDispatch } from '../redux/store';
import { addToCart, addToLiked, addToProducts, failureCartData, failureLikedData, failureProductsData, fetchData } from '../redux/ProductsSlice/ProductsSlice';



function* fetchCartDataSaga(): SagaIterator {
  try {
    const cart = yield call(instance().get, 'products/cart');
    yield put(addToCart(cart.data));
  } catch (err) {
    yield put(failureCartData({status: 500, message: "Ошибка получения данных корзины с сервера"})) 
  }
}

function* fetchLikedDataSaga(): SagaIterator {
  try {
    const liked = yield call(instance().get, 'products/liked');
    yield put(addToLiked(liked.data));
  } catch (err) {
    yield put(failureLikedData({status: 500, message: "Ошибка получения данных понравившихся товаро с сервера"})) 
  }
}

function* fetchProductsDataSaga(): SagaIterator {
  try {
    const catalogProducts = yield call(instance().get, 'products');
    yield put(addToProducts(catalogProducts.data));
  } catch (err) {
    yield put(failureProductsData({status: 500, message: "Ошибка получения данных корзины с сервера"})) 
  }
}

function* fetchFullData() {
  yield all([
     call(fetchCartDataSaga),
     call(fetchLikedDataSaga),
     call(fetchProductsDataSaga)
  ])
}

function* productsSaga() {
  yield takeLatest(fetchData, fetchFullData)
}

export default productsSaga;
