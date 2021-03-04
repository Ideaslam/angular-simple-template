// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  multivendor: {
    baseUrl: "https://mvmapi.webkul.com",
  },

  shopify: {
    baseUrl: "https://f34b9a06a8e55bb4d2c53ba085cbae17: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@mahalatkom.myshopify.com/admin/api/2020-10",
  },

  raheem: {
    key: "ec37586c507caad424106c5c304ef5",
    baseUrl: "https://demodashboardapi.shipsy.in/api/customer/integration/consignment/softdata"
  },


  api: {
    baseUrl: 'http://localhost:5200',
    secret: 'sk_test_a7d262c3-15fd-4564-8aca-9e45ed879f57',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
