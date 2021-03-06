﻿function getPluginInfo(lang) {
	pluginInfo = new Object();
	pluginInfo.id = "Sparrow v2-Starling-MXML";
	pluginInfo.name = "Starling MXML";
	pluginInfo.ext = "mxml";
	pluginInfo.capabilities = new Object();
	pluginInfo.capabilities.canRotate = false;
	pluginInfo.capabilities.canTrim = true;
	pluginInfo.capabilities.canShapePad = true;
	pluginInfo.capabilities.canBorderPad = true;
	pluginInfo.capabilities.canStackDuplicateFrames = true;

	return pluginInfo;
}

function beginExport(meta) {
	var s = '<?xml version="1.0" encoding="UTF-16"?>\n';
	s += '<fx:Object xmlns:fx="http://ns.adobe.com/mxml/2009">\n\n';


	s += '\t<fx:Script><![CDATA[\n';
		s += '\t\timport starling.textures.Texture;\n';
		s += '\t\t[Embed("' + meta.image + '")]\n';
		s += '\t\tprivate static var ATLAS_IMAGE_CLASS : Class;\n\n';
		s += '\t\tprivate static const atlasTexture : Texture = Texture.fromBitmap(new ATLAS_IMAGE_CLASS());\n\n\n';

	return s;
}

function frameExport(frame) {
	var s = '';

	if(frame.frameNumber == 0 && 0)
	{
		s += '\t<!-- ' + frame.symbolName + ' -->\n';
		/* I'm thinking about how to re-implement it:)
		s += '\t\tpublic function get animated_' + frame.symbolName.replace(/\./g, '_dot_').replace(/\-/g, '_dash_').replace(/\s/g, '_space_') + '() : Vector.<Texture>\n';
		s += '\t\t{\n';
		s += '\t\t\treturn super.getTextures("' + frame.symbolName + '");\n';
		s += '\t\t}\n';
		*/
	}


	var frameName = frame.id.replace(/\./g, '_dot_').replace(/\-/g, '_dash_').replace(/\s/g, '_space_');
	s += '\t\tprotected static const ' + frameName + '_region : Rectangle = new Rectangle(' + [frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h].join(',') + ');\n';
	
	s += '\t\tprotected static const ' + frameName + '_frame : Rectangle = ';
	if (	frame.sourceSize != null &&
			frame.offsetInSource != null &&
			(frame.sourceSize.w > 0 && frame.sourceSize.h > 0) &&
			(
				frame.offsetInSource.x != 0 ||
				frame.offsetInSource.y != 0 ||
				frame.frame.w != frame.sourceSize.w ||
				frame.frame.h != frame.sourceSize.h
			)
		) {
		var srcofsx = 0 - frame.offsetInSource.x;
		var srcofsy = 0 - frame.offsetInSource.y;
		s += 'new Rectangle(' + [srcofsx, srcofsy, frame.sourceSize.w, frame.sourceSize.h].join(',') + ')';
	} else {
		s += 'null';
	}
	s += ';\n';
	
	s += '\t\tpublic static function get ' + frameName + '() : Texture\n';
	s += '\t\t{\n';
	s += '\t\t\treturn Texture.fromTexture( atlasTexture, ' + frameName + '_region, ' + frameName + '_frame );\n';
	s += '\t\t}\n\n';

	return  s;
}

function endExport(meta) {
	var s =  '\t]]></fx:Script>\n';
	
	s += '</fx:Object>\n';
	return s;
}
