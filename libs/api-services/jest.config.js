module.exports = {
  name: 'api-services',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/api-services',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
