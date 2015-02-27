'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.red('Grape::API') + ' generator'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'activerecord',
      message: 'Would you like ActiveRecord?',
      default: false
    },
    {
      type: 'list',
      name: 'dbms',
      message: 'Which DBMS would you like to use?',
      choices: ['postgres', 'mysql', 'sqlite'],
      default: 'sqlite',
      when: function (response) {
        return response.activerecord == true;
      }
    }];

    this.prompt(prompts, function (props) {
      this.activerecord = props.activerecord;
      this.dbms = props.dbms;

      switch (this.dbms) {
        case 'sqlite':
          this.dbms_gem = 'sqlite3'
          this.dbms_adapter = 'sqlite3'

          this.dev_database = 'db/development.sqlite3';
          this.test_database = 'db/test.sqlite3';
          this.prod_database = 'db/production.sqlite3';

          break;
        case 'postgres':
          this.dbms_gem = 'pg'
          this.dbms_adapter = 'postgresql'

          this.dev_database = 'service_dev';
          this.test_database = 'service_test';
          this.prod_database = 'service';

          break;
        case 'mysql':
          this.dbms_gem = 'mysql2'
          this.dbms_adapter = 'mysql2'

          this.dev_database = 'service_dev';
          this.test_database = 'service_test';
          this.prod_database = 'service';

          break;
      }

      done();
    }.bind(this));
  },

  writing: {
    app_base: function () {
      this.template('_config.ru','config.ru');
      this.template('_service.rb','service.rb');
      this.template('_Rakefile', 'Rakefile');

      this.mkdir('app');
      this.mkdir('app/models');
      this.mkdir('app/api');
      this.mkdir('app/mappers');

      this.copy('app/mappers/example.rb');
      this.template('app/api/_example.rb','app/api/example.rb');
      this.template('app/models/_example.rb','app/models/example.rb');
    },

    gemfile: function () {
      this.template('_Gemfile', 'Gemfile');
    },

    app_config: function () {
      this.mkdir('config');
      this.copy('config/environment.rb');
      if (this.activerecord == true) {
        this.template('config/_database.yml', 'config/database.yml');
      }
    },

    app_db_base: function () {
      if (this.activerecord) {
        this.mkdir('db');
        this.copy('db/seeds.rb');
      }
    },

    app_spec: function () {
      this.mkdir('spec');
      this.copy('spec/spec_helper.rb');
      this.copy('spec/example_spec.rb');
    },

    projectfiles: function () {
      this.copy('README');
      this.copy('Guardfile');
      this.copy('editorconfig','.editorconfig');
    }
  },

  install: function () {
    // this.installDependencies({
    //   skipInstall: this.options['skip-install']
    // });
    if (!this.options['skip-install']) {
      this.spawnCommand('bundle', ['install', '--quiet']);
    };
  }
});
