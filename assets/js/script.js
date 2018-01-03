(function( $ ) {
    // Data Save
    $( '#integration-form' ).on( 'submit', function( e ) {
        e.preventDefault();

        wp.ajax.send( 'wcct_save_settings', {
            data: $( this ).serialize(),
            success: function( response ) {

                $("#ajax-message")
                    .html('<p><strong>' + response.message + '</strong></p>')
                    .show()
                    .delay(3000)
                    .slideUp('fast');
            },
            error: function(error) {
                alert('something wrong happend');
            }
        });
    });

    // Toggoling the settings
    $( '.slider' ).on( 'click', function() {
        var id = $( this ).attr( 'data-id' );
        var target = $( '#setting-'+id );
        target.stop().toggle('fast');

        var checked = $( '#integration-'+id );

        if ( $( checked ).prop( 'checked') == false ) {
            $( target.find( 'input[type=checkbox]' ) ).removeAttr( 'checked' );
        }
    });

    // Default Settings
    $( '.toogle-seller:checked' ).each( function( index, value ) {
        var id =  $( value ).attr( 'data-id' );
        var target = $( '#setting-'+id );

        $( target ).css( 'display', 'block' );
    } );
})( jQuery );