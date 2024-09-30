import {sentryEsbuildPlugin} from "@sentry/esbuild-plugin";

export default [
  sentryEsbuildPlugin({
    debug: true,
    org: 'someorg',
    project: 'someproject',
    authToken: 'some-auth-token',
    sourcemaps: {
      filesToDeleteAfterUpload: ['./dist/**/*.map'],
      assets: ['./dist/**/*.js', './dist/**/*.css', './dist/**/*.map']
    }
  })
];
