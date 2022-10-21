import * as Redux from "redux";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

declare module "redux" {
  export interface Store {
    sagaTask: Return<typeof sagaMiddleware.run>;
  }

  export interface AnyAction {
    type: string;
    payload?: any;
  }
}
