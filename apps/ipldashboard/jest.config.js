module.exports = {
  name: 'ipldashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ipldashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
