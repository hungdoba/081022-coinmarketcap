import { Exchange } from "../../models";

export const getReferralLink = (exchange: Exchange) => {
  if (exchange.id === "binance") {
    exchange.url = "https://accounts.binance.com/en/register?ref=454752133";
    return exchange;
  } else if (exchange.id === "ftx_spot") {
    exchange.url = "https://ftx.com/jp/referrals#a=150647086";
    return exchange;
  } else if (exchange.id === "okex") {
    exchange.url = "https://www.okx.com/join/62405671";
    return exchange;
  } else if (exchange.id === "gate") {
    exchange.url = "https://www.gate.io/signup/12186243";
    return exchange;
  } else if (exchange.id === "kucoin") {
    exchange.url = "https://www.kucoin.com/ucenter/signup?rcode=rPK541D";
    return exchange;
  } else if (exchange.id === "huobi") {
    exchange.url =
      "https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11343840&invite_code=hrg46223";
    return exchange;
  } else if (exchange.id === "binance_us") {
    exchange.url = "https://accounts.binance.com/en/register?ref=454752133";
    return exchange;
  } else if (exchange.id === "bybit_spot") {
    exchange.url = "https://www.bybit.com/en-US/invite?ref=NYYYWR";
    return exchange;
  } else if (exchange.id === "bitfinex") {
    exchange.url = "https://www.bitfinex.com/sign-up?refcode=UsEH6gOgt";
    return exchange;
  } else if (exchange.id === "ftx_us") {
    exchange.url = "https://ftx.com/jp/referrals#a=150647086";
    return exchange;
  } else if (exchange.id === "mxc") {
    exchange.url = "https://m.mexc.com/auth/signup?inviteCode=1TFLm";
    return exchange;
  } else if (exchange.id === "xt") {
    exchange.url = "https://www.xt.com/register?ref=WZAYUNQ";
    return exchange;
  } else if (exchange.id === "bitmart") {
    exchange.url = "https://www.bitmart.com/register-referral/en?r=YYFm8Q";
    return exchange;
  } else if (exchange.id === "bitrue") {
    exchange.url =
      "https://www.bitrue.com/act/kol/landing?cn=600000&inviteCode=EGWZQGL";
    return exchange;
  } else if (exchange.id === "whitebit") {
    exchange.url =
      "https://whitebit.com/referral/ccbd3451-e3e6-495c-937e-e5508eff6be1";
    return exchange;
  } else if (exchange.id === "aax") {
    exchange.url =
      "https://www.aax.com/invite/sign-up?inviteCode=zpBpvLIn03yVG";
    return exchange;
  } else if (exchange.id === "coinsbit") {
    exchange.url =
      "https://coinsbit.io/referral/6dc91050-ebe7-4696-a653-6933e42559c3";
    return exchange;
  } else if (exchange.id === "lbank") {
    exchange.url = "https://www.lbank.info/invitevip?icode=1FFI2&lange=en-US";
    return exchange;
  } else if (exchange.id === "phemex") {
    exchange.url = "https://phemex.com/register-vt1?referralCode=DEIGB5";
    return exchange;
  } else if (exchange.id === "dextrade") {
    exchange.url = "https://dex-trade.com/refcode/12ydci";
    return exchange;
  } else if (exchange.id === "btse") {
    exchange.url = "https://www.btse.com/en/ref?c=EQHYq1";
    return exchange;
  } else if (exchange.id === "wootrade") {
    exchange.url = "https://referral.woo.org/5CvUcrjBYosWM4TG7";
    return exchange;
  } else if (exchange.id === "bitmax") {
    exchange.url = "https://ascendex.com/en-us/register?inviteCode=U5A8SGLQT";
    return exchange;
  } else if (exchange.id === "exmo") {
    exchange.url = "https://exmo.com/?ref=2151499";
    return exchange;
  } else if (exchange.id === "coinex") {
    exchange.url = "https://www.coinex.com/register?refer_code=x8c57";
    return exchange;
  } else if (exchange.id === "bittrex") {
    exchange.url = "https://bittrex.com/discover/join?referralCode=PPO-JLH-TSQ";
    return exchange;
  } else if (exchange.id === "kickex") {
    exchange.url = "https://ref.kickex.com/jjZGY";
    return exchange;
  } else if (exchange.id === "nominex") {
    exchange.url = "https://nominex.io/?r=347685";
    return exchange;
  } else if (exchange.id === "bingx") {
    exchange.url = "https://bingx.com/invite/HA8ADD";
    return exchange;
  }

  return exchange;
};
