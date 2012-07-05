package ru.trylogic.starling.mxml
{

	import flash.geom.Rectangle;

	import mx.core.IMXMLObject;

	import starling.textures.Texture;

	public class MXMLTextureAtlas implements IMXMLObject
	{
		public var subTextures : Vector.<MXMLSubTexture> = new Vector.<MXMLSubTexture>();

		public var imageClass : Class;

		protected var _atlasTexture : Texture;
		protected var _textureRegions : Array = [];
		protected var _textureFrames : Array = [];

		public function get atlasTexture() : Texture
		{
			if ( _atlasTexture == null )
			{
				if ( imageClass == null )
				{
					throw new Error( "You forgot to set imageClass for MXMLTextureAtlas!" );
				}

				_atlasTexture = Texture.fromBitmap( new imageClass() );
			}

			return _atlasTexture;
		}

		public function MXMLTextureAtlas()
		{
		}

		public function initialized( document : Object, id : String ) : void
		{
			_atlasTexture = Texture.fromBitmap( new imageClass() );

			for each( var subTexture : MXMLSubTexture in subTextures )
			{
				var region : Rectangle = new Rectangle( subTexture.x, subTexture.y, subTexture.width, subTexture.height );
				var frame : Rectangle = subTexture.frameWidth > 0 && subTexture.frameHeight > 0 ? new Rectangle( subTexture.frameX, subTexture.frameY, subTexture.frameWidth, subTexture.frameHeight ) : null;

				addRegion( subTexture.name, region, frame );
			}
		}

		public function getTexture( name : String ) : Texture
		{
			var region : Rectangle = _textureRegions[name];

			if ( region == null )
			{
				return null;
			}
			else
			{
				return Texture.fromTexture( _atlasTexture, region, _textureFrames[name] );
			}
		}

		public function getTextures( prefix : String = "" ) : Vector.<Texture>
		{
			var textures : Vector.<Texture> = new <Texture>[];
			var names : Vector.<String> = new <String>[];
			var name : String;

			for ( name in _textureRegions )
			{
				if ( name.indexOf( prefix ) == 0 )
				{
					names.push( name );
				}
			}

			names.sort( Array.CASEINSENSITIVE );

			for each ( name in names )
			{
				textures.push( getTexture( name ) );
			}

			return textures;
		}

		/** Creates a region for a subtexture and gives it a name. */
		public function addRegion( name : String, region : Rectangle, frame : Rectangle = null ) : void
		{
			_textureRegions[name] = region;
			if ( frame )
			{
				_textureFrames[name] = frame;
			}
		}

		/** Removes a region with a certain name. */
		public function removeRegion( name : String ) : void
		{
			delete _textureRegions[name];
		}
	}
}
