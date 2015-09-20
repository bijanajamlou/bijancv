module.exports = function( grunt ) {

  grunt.registerTask( 'outputlicense', 'This task will run through and parse the acceptable file list', function() {

        var o = this.options( {

          outFile: null,
          acceptable: []
        }),
        licenses = grunt.file.readJSON( '.licenses' ),
        nolicenses = grunt.file.readJSON( '.nolicenses' ),
        titleLicensesNotOK = 'LICENSE NOT IN LIST\n' +
                             '-------------------',
        titleLicensesNone = 'LICENSE NOT DEFINED\n' +
                            '-------------------',
        licensesNotOK = '',
        licensesNone = '',
        out = '';

      for( var library in licenses ) {

        if( nolicenses[ library ] === undefined && 
          o.acceptable.indexOf( licenses[ library ].licenses ) == -1 ) {

          licensesNotOK += '\n' + library + ': ' + licenses[ library ].licenses;
        }
      }

      // check if we should output to a file
      if( o.outFile ) {

        if( licensesNotOK == '' && licensesNone == '' ) {

          out += 'Everything A OK!!!';
        } else {

          for( var library in nolicenses ) {

            licensesNone += '\n' + library + ': ' + nolicenses[ library ].licenses;
          }

          if( licensesNotOK != '' ) {

            out += titleLicensesNotOK + '\n```';
            out += licensesNotOK + '\n```\n\n';
          }

          if( licensesNone ) {

            out += titleLicensesNone + '\n```';
            out += licensesNone + '\n```\n\n';
          }
        }

        grunt.file.write( o.outFile, out );
      }

      // check if we should output all libraries which are not complying to licenses
      if( licensesNotOK != '' && o.warn ) {

        grunt.log.errorlns( 'The following libraries are not cool:\n' +
                            licensesNotOK );
      }
    });
};
