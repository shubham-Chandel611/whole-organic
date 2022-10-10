const prodConfig = {
  appId :"1001009423584123",
  fields : "name,email,picture"
};

const devConfig = {
  appId :"1220021264872777",
  fields : "name,email,picture"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
