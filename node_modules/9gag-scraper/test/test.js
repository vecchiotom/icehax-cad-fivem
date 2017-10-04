var should = require('chai').should(),
    gagScraper = require('../lib/9gag-scraper.js'),
    expect = require('chai').expect,
    assert = require('chai').assert;

describe('9GAG Scraping', function () {

    it('Should return a valid random 9GAG post', function (done) {
        this.timeout(10000);
        new gagScraper().getRandom(function (error, data) {

            try {
                expect(data).to.be.an('object');
                assert.isDefined(data);
                assert.isNotNull(data);
                assert.isObject(data);
                assert.property(data, 'id');
                assert.property(data, 'url');
                assert.property(data, 'title');
                assert.property(data, 'image');
                assert.isDefined(data.image);
                assert.isNotNull(data.image);
                done();
            } catch (e) {
                done(e);
            }

        });

    });

    it('Should return valid 9GAG posts (hot)', function (done) {
        this.timeout(5000);
        new gagScraper("hot").getGags(function (error, data) {

            try {
                expect(data).to.be.an('object');
                assert.isDefined(data);
                assert.isNotNull(data);
                assert.isObject(data);
                assert.isDefined(data.count);
                assert.isNotNull(data.count);
                assert.isAbove(data.count, 0);
                assert.isDefined(data.gags);
                assert.isNotNull(data.gags);
                assert.isArray(data.gags);
                assert.property(data.gags[0], 'id');
                assert.property(data.gags[0], 'url');
                assert.property(data.gags[0], 'title');
                assert.property(data.gags[0], 'image');
                done();
            } catch (e) {
                done(e);
            }

        });

    });

    it('Should return valid 9GAG posts (meme)', function (done) {
        this.timeout(5000);
        new gagScraper("meme").getGags(function (error, data) {

            try {
                expect(data).to.be.an('object');
                assert.isDefined(data);
                assert.isNotNull(data);
                assert.isObject(data);
                assert.isDefined(data.count);
                assert.isNotNull(data.count);
                assert.isAbove(data.count, 0);
                assert.isDefined(data.gags);
                assert.isNotNull(data.gags);
                assert.isArray(data.gags);
                assert.property(data.gags[0], 'id');
                assert.property(data.gags[0], 'url');
                assert.property(data.gags[0], 'title');
                assert.property(data.gags[0], 'image');
                done();
            } catch (e) {
                done(e);
            }

        });

    });

    it('Should return valid 9GAG posts (trending)', function (done) {
        this.timeout(5000);
        new gagScraper("trending").getGags(function (error, data) {

            try {
                expect(data).to.be.an('object');
                assert.isDefined(data);
                assert.isNotNull(data);
                assert.isObject(data);
                assert.isDefined(data.count);
                assert.isNotNull(data.count);
                assert.isAbove(data.count, 0);
                assert.isDefined(data.gags);
                assert.isNotNull(data.gags);
                assert.isArray(data.gags);
                assert.property(data.gags[0], 'id');
                assert.property(data.gags[0], 'url');
                assert.property(data.gags[0], 'title');
                assert.property(data.gags[0], 'image');
                done();
            } catch (e) {
                done(e);
            }

        });

    });

    it('Should return valid 9GAG posts from hot section if no params passed in', function (done) {
        this.timeout(5000);
        new gagScraper().getGags(function (error, data) {

            try {
                expect(data).to.be.an('object');
                assert.isDefined(data);
                assert.isNotNull(data);
                assert.isObject(data);
                assert.isDefined(data.count);
                assert.isNotNull(data.count);
                assert.isAbove(data.count, 0);
                assert.isDefined(data.gags);
                assert.isNotNull(data.gags);
                assert.isArray(data.gags);
                assert.property(data.gags[0], 'id');
                assert.property(data.gags[0], 'url');
                assert.property(data.gags[0], 'title');
                assert.property(data.gags[0], 'image');
                done();
            } catch (e) {
                done(e);
            }

        });

    });

});