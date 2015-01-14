'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('Activerecord: False', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        activerecord: false
      })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      '.editorconfig',
      'README',
      'Guardfile'
    ]);
  });

  it('creates Gemfile', function () {
    assert.file([
      'Gemfile'
    ]);
  });

  it('Gemfile doesn\'t include ActiveRecord', function () {
    assert.noFileContent('Gemfile', /gem \'activerecord\'/);
  });

  it('creates service.rb', function () {
    assert.file([
      'service.rb'
    ]);
  });

  it('creates app base', function () {
    assert.file([
      'config.ru',
      'Rakefile',
      'app',
      'app/api',
      'app/models',
      'app/mappers',
      'app/api/example.rb',
      'app/models/example.rb',
      'app/mappers/example.rb',
    ]);
  });

  it('creates app config', function () {
    assert.file([
      'config/environment.rb',
    ]);
  });

  it('creates app spec', function () {
    assert.file([
      'spec',
      'spec/spec_helper.rb',
      'spec/example_spec.rb',
    ]);
  });

  it('doesn\'t create app DB base', function () {
    assert.noFile([
      'db',
    ]);
  });

  it('doesn\'t create database.yml', function () {
    assert.noFile('config/database.yml');
  });

});

// describe('Activerecord: true, DBMS: postgres', function () {
//   before(function (done) {
//     helpers.run(path.join(__dirname, '../app'))
//     .inDir(path.join(os.tmpdir(), './temp-test'))
//     .withOptions({ 'skip-install': true })
//     .withPrompt({
//       activerecord: true,
//       dbms: 'postgres'
//     })
//     .on('end', done);
//   });
//
//   it('Gemfile does include ActiveRecord', function () {
//     assert.fileContent('Gemfile', /gem \'activerecord\'/);
//   });
//
//   it('Gemfile does include pg', function () {
//     assert.fileContent('Gemfile', /gem \'pg\'/);
//   });
//
// });
