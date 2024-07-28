// import { takeLatest, fork, call, put } from 'redux-saga/effects';
// import { instance } from '../utils/axiosConfig';

// function* fetchUser(action) {
//   try {
//     const user = yield call(instance(), action.payload.id);
//     yield put(fetchUserSuccess(user));
//   } catch (error) {
//     yield put(fetchUserFailure(error.message));
//   }
// }

// function* watchFetchUser() {
//   yield takeLatest('FETCH_USER', function* (action) {
//     // 使用 fork 在后台启动一个新的 fetchUser 任务
//     yield fork(fetchUser, action);
//   });
// }

// function* rootSaga() {
//   yield fork(watchFetchUser);
// }