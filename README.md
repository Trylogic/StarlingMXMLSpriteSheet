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
		<imageClass>@Embed("Test.png")</imageClass>
	
		<!-- Symbol 1 -->
		<fx:Script><![CDATA[
			public function get animated_Symbol_space_1() : Vector.<Texture>
			{
				return super.getTextures("Symbol 1");
			}
		]]></fx:Script>
	
		<MXMLSubTexture name="Symbol 10000" x="0" y="279" width="286" height="394" frameX="-75" frameY="-43" frameWidth="413" frameHeight="437"/>
		<fx:Script><![CDATA[
			public function get Symbol_space_10000() : Texture
			{
				return super.getTexture("Symbol 10000");
			}
		]]></fx:Script>
	
		<MXMLSubTexture name="Symbol 10001" x="286" y="279" width="188" height="244" frameX="-125" frameY="-4" frameWidth="413" frameHeight="437"/>
		<fx:Script><![CDATA[
			public function get Symbol_space_10001() : Texture
			{
				return super.getTexture("Symbol 10001");
			}
		]]></fx:Script>
	
		<MXMLSubTexture name="Symbol 10002" x="0" y="0" width="413" height="279" frameX="0" frameY="0" frameWidth="413" frameHeight="437"/>
		<fx:Script><![CDATA[
			public function get Symbol_space_10002() : Texture
			{
				return super.getTexture("Symbol 10002");
			}
		]]></fx:Script>
	
		<!-- Symbol 2 -->
		<fx:Script><![CDATA[
			public function get animated_Symbol_space_2() : Vector.<Texture>
			{
				return super.getTextures("Symbol 2");
			}
		]]></fx:Script>
	
		<MXMLSubTexture name="Symbol 20000" x="0" y="673" width="261" height="175"/>
		<fx:Script><![CDATA[
			public function get Symbol_space_20000() : Texture
			{
				return super.getTexture("Symbol 20000");
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