import { put, delay } from "redux-saga/effects";
import { setLoading } from "./index";

function* showLoader() {
  yield put(setLoading({ isLoading: true }));
}

function* hideLoader() {
  yield put(setLoading({ isLoading: false }));
}

function* showToast(text) {
  yield delay(500);
}

export { showLoader, hideLoader, showToast };
