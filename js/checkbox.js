( function( $ )
{
	function Checkbox( $el )
	{
		var self = this;

		self.$el = $el;
		self.checked = false;
		self.onClick = null;

		self.init = function()
		{
			self.$el.addClass( "checkbox" );
			self.$el.addClass( "checkbox-unchecked" );
			self.$el.addClass( "checkbox-label" );

			self.$el.click( function()
			{
				self.setChecked( !self.checked );
			} );

			self.setChecked( false );
		};

		self.setOnClick = function( onClick )
		{
			self.onClick = onClick;
		};

		self.setChecked = function( checked )
		{
			self.checked = checked;

			if( checked )
			{
				self.$el.removeClass( "checkbox-unchecked" ); 
				self.$el.addClass( "checkbox-checked" ); 
			}
			else
			{
				self.$el.removeClass( "checkbox-checked" ); 
				self.$el.addClass( "checkbox-unchecked" ); 
			}
			
			if( self.onClick != null )
				self.onClick( checked );
		};

		self.isChecked = function()
		{
			return self.checked;
		};
	}

	$.fn.makeCheckbox = function()
	{
		return this.each( function()
		{
			var instance = new Checkbox( $( this ) );
			instance.init();
			$( this ).data( "checkbox-instance", instance );
		} );
	};

	$.fn.getCheckboxes = function()
	{
		var checkboxes = [];

		this.each( function()
		{
			var me = $( this );
			if( me.data( "checkbox-instance" ) !== undefined )
				checkboxes.push( me.data( "checkbox-instance" ) );
		} );

		return checkboxes;
	};
} 
) ( jQuery )