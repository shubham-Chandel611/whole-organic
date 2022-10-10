const prodConfig = {
  clientId :"582178250221-a1qnl0j75i8t18qbanu68inh0dnki13e.apps.googleusercontent.com",
  appKey :"AIzaSyAUH3p4GCV8-AY5Px_7U1PeONPpOfPzmvc",
  clientSecret : "RragcuZncA0o_ls2vrsO2nnZ",
  fields : "name,email,picture",
  captchSiteKey : "6LeVzfcUAAAAAPvkjNtCZ7o_0v8vAg9pqrRx11Sw",
  captchSecretKey : "6LeVzfcUAAAAAArz22_Ru9fZGn_rPSOFdrxV_3sB",
};

const devConfig = {
  clientId :"582178250221-a1qnl0j75i8t18qbanu68inh0dnki13e.apps.googleusercontent.com",
  appKey :"AIzaSyAUH3p4GCV8-AY5Px_7U1PeONPpOfPzmvc",
  clientSecret : "RragcuZncA0o_ls2vrsO2nnZ",
  fields : "name,email,picture",
  captchSiteKey : "6LeVzfcUAAAAAPvkjNtCZ7o_0v8vAg9pqrRx11Sw",
  captchSecretKey : "6LeVzfcUAAAAAArz22_Ru9fZGn_rPSOFdrxV_3sB",
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
