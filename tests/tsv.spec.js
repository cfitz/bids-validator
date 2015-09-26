var assert   = require('assert');
var validate = require('../index');

describe('TSV', function(){

	it('should not allow contiguous spaces', function () {
		var tsv = 'value-one\tvalue-two  value-three';
		validate.TSV(tsv, false, function (errors) {
			assert(errors && errors.length > 0);
		});
	});

	it('should not allow different length rows', function () {
		var tsv = 'header-one\theader-two\theader-three\n' +
				  'value-one\tvalue-two\n' +
				  'value-one\tvalue-two\tvalue-three';
		validate.TSV(tsv, false, function (errors) {
			assert(errors && errors.length > 0);
		});
	});

	it('require events files to have "onset" and "duration" columns', function () {
		var tsv = 'header-one\theader-two\t4eader-three\n' +
				  'value-one\tvalue-two\tvalue-three';
		validate.TSV(tsv, true, function (errors) {
			assert(errors && errors.length > 0);
		});
	});

});