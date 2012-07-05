StarlingMXMLSpriteSheet
=======================

JSFL script for Flash CS6 to export Starling sprite sheets into the MXML format.

Latest stable archive with binaries is aviable at:
https://trylogic.ci.cloudbees.com/job/StarlingMXMLSpriteSheet/lastStableBuild/ru.trylogic.starling$mxml-sprite-sheet/artifact/*zip*/archive.zip

Example of generated MXML
=======================

	<?xml version="1.0" encoding="UTF-16"?>
    <MXMLTextureAtlas xmlns:fx="http://ns.adobe.com/mxml/2009" xmlns="http://www.trylogic.ru/starling/mxml">

        <fx:Script><![CDATA[
            import starling.textures.Texture;
        ]]></fx:Script>
        <imageClass>@Embed("atlas.png")</imageClass>

        <MXMLSubTexture name="symbol0000" x="0" y="391" width="329" height="320"/>
        <fx:Script><![CDATA[
            public function get symbol0000() : Texture
            {
                return super.getTexture("symbol0000");
            }
        ]]></fx:Script>
     
        <MXMLSubTexture name="symbol0001" x="0" y="0" width="445" height="391"/>
        <fx:Script><![CDATA[
            public function get symbol0001() : Texture
            {
                return super.getTexture("symbol0001");
            }
        ]]></fx:Script>
    </MXMLTextureAtlas>

Usage
=======================

1. add mxml-sprite-sheet.swc to your project
2. put StarlingMXML.plugin.jfsl to your Flash CS6 SpritesheetExtensions folder
3. when you're ready to export Sprite Sheet, just select Starling MXML as data type.


Maven
=======================

This project is also aviable at maven repo! You can easy depends on it by adding following lines into the pom.xml:

	<dependency>
		<groupId>ru.trylogic.starling</groupId>
		<artifactId>mxml-sprite-sheet</artifactId>
		<version>[1.0.0-SNAPSHOT,]</version>
		<type>swc</type>
	</dependency>

And also don't forget to add my repo:

	<repository>
		<id>trylogic</id>
		<name>Trylogic</name>
		<url>http://repo.trylogic.ru/content/repositories/public/</url>
		<releases>
			<enabled>true</enabled>
			<updatePolicy>daily</updatePolicy>
			<checksumPolicy>warn</checksumPolicy>
		</releases>
		<snapshots>
			<enabled>true</enabled>
			<updatePolicy>daily</updatePolicy>
			<checksumPolicy>warn</checksumPolicy>
		</snapshots>
		<layout>default</layout>
	</repository>