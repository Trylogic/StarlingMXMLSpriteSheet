function getPluginInfo(lang) {
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
	s += '<MXMLTextureAtlas xmlns:fx="http://ns.adobe.com/mxml/2009" xmlns="http://www.trylogic.ru/starling/mxml">\n\n';


	s += '\t<fx:Script><![CDATA[\n';
	s += '\t\timport starling.textures.Texture;\n';
	s += '\t]]></fx:Script>\n';
	s += '\t<imageClass>@Embed("' + meta.image + '")</imageClass>\n\n';

	return s;
}

function frameExport(frame) {
	var s = '\t<MXMLSubTexture name="' + frame.id + '" x="' + frame.frame.x + '" y="' + frame.frame.y + '" width="' + frame.frame.w + '" height="' + frame.frame.h;
	if (frame.offsetInSource.x != 0 || frame.offsetInSource.y != 0 || frame.frame.w != frame.sourceSize.w || frame.frame.h != frame.sourceSize.h) {
		var srcofsx = 0 - frame.offsetInSource.x;
		var srcofsy = 0 - frame.offsetInSource.y;
		s += '" frameX="' + srcofsx + '" frameY="' + srcofsy + '" frameWidth="' + frame.sourceSize.w + '" frameHeight="' + frame.sourceSize.h;
	}
	s += '"/>\n';

	s += '\t<fx:Script><![CDATA[\n';
	s += '\t\tpublic function get ' + frame.id.replace(/\./g, '_dot_').replace(/\-/g, '_dash_').replace(/\s/g, '_space_') + '() : Texture\n';
	s += '\t\t{\n';
	s += '\t\t\treturn super.getTexture("' + frame.id + '");\n';
	s += '\t\t}\n';
	s += '\t]]></fx:Script>\n\n';

	return  s;
}

function endExport(meta) {
	return '</MXMLTextureAtlas>\n';
}
