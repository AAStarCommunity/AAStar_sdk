"use strict";var e=require("axios");const t="/api/healthz",r="/api/auth",a="/api/v1/get-support-entrypoint",i="/api/v1/get-support-strategy",o="/api/v1/try-pay-user-operation";exports.auth=t=>e.post(r,{apiKey:t}).then((t=>{t?.data?.token&&t?.data?.expire&&(e.defaults.headers.common.Authorization="Bearer "+t?.data?.token)})),exports.getSupportEntryPointV1=(t="Network")=>e.get(a,{params:{network:t}}),exports.getSupportStrategyV1=(t="ethereum")=>e.get(i,{params:{network:t}}),exports.health=()=>e.get(t),exports.init=function(t=!0){e.defaults.baseURL=t?"https://EthPaymaster.org":"https://relay-ethpaymaster-pr-20.onrender.com",e.interceptors.response.use((function(e){return e?.data||e}),(function(e){return Promise.reject(e)}))},exports.tryPayUserOperationV1=t=>e.post(o,{force_strategy_id:t.forceStrategyId,user_operation:{call_data:t.userOperation.callData,call_gas_limit:t.userOperation.callGasLimit,max_priority_fee_per_gas:t.userOperation.maxPriorityFeePerGas,nonce:t.userOperation.nonce,pre_verification_gas:t.userOperation.preVerificationGas,sender:t.userOperation.sender,signature:t.userOperation.signature,verification_gas_limit:t.userOperation.verificationGasLimit,paymaster_and_data:t.userOperation.paymasterAndData}});
