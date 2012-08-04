StarlingMXMLSpriteSheet
=======================

JSFL script for Flash CS6 to export Starling sprite sheets into the MXML format.
Example of generated MXML
=======================

	<?xml version="1.0" encoding="UTF-16"?>
	<fx:Object xmlns:fx="http://ns.adobe.com/mxml/2009">

		<fx:Script><![CDATA[
			import starling.textures.Texture;
			[Embed("Test.png")]
			private static var ATLAS_IMAGE_CLASS : Class;

			private static const atlasTexture : Texture = Texture.fromBitmap(new ATLAS_IMAGE_CLASS());


			protected const Symbol_space_10000_region : Rectangle = new Rectangle(0,279,286,394);
			protected const Symbol_space_10000_frame : Rectangle = new Rectangle(-75,-43,413,437);
			public function get Symbol_space_10000() : Texture
			{
				return Texture.fromTexture( atlasTexture, Symbol_space_10000_region, Symbol_space_10000_frame );
			}

			protected const Symbol_space_10001_region : Rectangle = new Rectangle(286,279,188,244);
			protected const Symbol_space_10001_frame : Rectangle = new Rectangle(-125,-4,413,437);
			public function get Symbol_space_10001() : Texture
			{
				return Texture.fromTexture( atlasTexture, Symbol_space_10001_region, Symbol_space_10001_frame );
			}

			protected const Symbol_space_10002_region : Rectangle = new Rectangle(0,0,413,279);
			protected const Symbol_space_10002_frame : Rectangle = new Rectangle(0,0,413,437);
			public function get Symbol_space_10002() : Texture
			{
				return Texture.fromTexture( atlasTexture, Symbol_space_10002_region, Symbol_space_10002_frame );
			}

			protected const Symbol_space_20000_region : Rectangle = new Rectangle(0,673,261,175);
			protected const Symbol_space_20000_frame : Rectangle = null;
			public function get Symbol_space_20000() : Texture
			{
				return Texture.fromTexture( atlasTexture, Symbol_space_20000_region, Symbol_space_20000_frame );
			}

			protected const Symbol_space_30000_region : Rectangle = new Rectangle(0,0,0,0);
			protected const Symbol_space_30000_frame : Rectangle = null;
			public function get Symbol_space_30000() : Texture
			{
				return Texture.fromTexture( atlasTexture, Symbol_space_30000_region, Symbol_space_30000_frame );
			}

		]]></fx:Script>
	</fx:Object>


Usage
=======================

1. Put StarlingMXML.plugin.jfsl to your Flash CS6 SpritesheetExtensions folderж
2. When you're ready to export Sprite Sheet, just select Starling MXML as data type;
3. When you need to create texture, just write addChild(new Image(GeneratedAtlas.someTextureName)); , it's easy!