import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions'

// var payloadCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

// createAction部分逻辑

// var actionCreator = function actionCreator() {
//   var payload = finalPayloadCreator.apply(undefined, arguments);
//   var action = { type: type };

//   if (payload instanceof Error) {
//     action.error = true;
//   }

//   if (payload !== undefined) {
//     action.payload = payload;
//   }

//   if (hasMeta) {
//     action.meta = metaCreator.apply(undefined, arguments);
//   }

//   return action;
// };


export const asyncInc = createAction(ASYNC_INCREMENT, (args) => {
  console.log('--test args--')
  console.log(args)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data:[1,2],result:'success'})
    }, 1000)
  })
})