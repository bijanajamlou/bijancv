module.exports = function( grunt ) {

	grunt.registerTask( 'cleanlicense', 'delete the license files generated', function() {

		// delete the licenses file
		grunt.file.delete( '.licenses' );
		grunt.file.delete( '.nolicenses' );
	});
};