import {takeEvery, takeLatest} from 'redux-saga/effects';
import {constant} from '../actionTypes';
import {
  editSaga,
  loginSaga,
  logoutSaga,
  signUpSaga,
} from './AuthenticationSaga';

export default function* root_saga() {
  yield takeEvery(constant.API_LOGIN_LOAD, loginSaga);
  yield takeEvery(constant.API_SIGNUP_LOAD, signUpSaga);
  yield takeEvery(constant.API_EDIT_LOAD, editSaga);
  yield takeEvery('API_LOGOUT_LOAD', logoutSaga);
}
