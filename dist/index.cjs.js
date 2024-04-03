"use strict";var e=require("axios");const t="/api/healthz",r="/api/auth",a="/api/v1/get-support-entrypoint",o="/api/v1/get-support-strategy",i="/api/v1/try-pay-user-operation";exports.auth=t=>e.post(r,{apiKey:t}).then((t=>(t&&t?.token&&t?.expire&&(e.defaults.headers.common.Authorization="Bearer "+t?.token),t))),exports.getSupportEntryPointV1=(t="Network")=>e.get(a,{params:{network:t}}),exports.getSupportStrategyV1=(t="ethereum")=>e.get(o,{params:{network:t}}),exports.health=()=>e.get(t),exports.init=function(t=!0){e.defaults.baseURL=t?"https://EthPaymaster.org":"https://relay-ethpaymaster-pr-20.onrender.com",e.defaults.headers.common["Content-Type"]="application/json",e.interceptors.response.use((function(e){return e?.data||e}),(function(e){return Promise.reject(e.toJSON())}))},exports.tryPayUserOperationV1=t=>e.post(i,{force_strategy_id:t.forceStrategyId,user_operation:{call_data:t.userOperation.callData,call_gas_limit:t.userOperation.callGasLimit,max_priority_fee_per_gas:t.userOperation.maxPriorityFeePerGas,nonce:t.userOperation.nonce,pre_verification_gas:t.userOperation.preVerificationGas,sender:t.userOperation.sender,signature:t.userOperation.signature,verification_gas_limit:t.userOperation.verificationGasLimit,paymaster_and_data:t.userOperation.paymasterAndData}});
