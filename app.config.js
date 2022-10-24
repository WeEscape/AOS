module.exports = ({ config }) => {
  if (process.env.APP_ENV === 'production') {
    console.log('config1', config);
    console.log('APP_ENV1', process.env.APP_ENV);
    return {
      ...config,

      extra: {
        apiUrl: process.env.API_URL,
        eas: {
          projectId: '8c6e9c7d-cd83-4f3a-88a0-9f7571a13f42',
        },
      },
    };
  } else if (process.env.APP_ENV === 'development') {
    console.log('config2', config);
    console.log('APP_ENV3', process.env.APP_ENV);
    return {
      ...config,
      extra: {
        apiUrl: process.env.API_URL,
        eas: {
          projectId: '8c6e9c7d-cd83-4f3a-88a0-9f7571a13f42',
        },
      },
    };
  } else {
    // console.log('config3', config);
    // console.log('APP_ENV3', process.env.APP_ENV);
    return {
      ...config,
    };
  }
};
