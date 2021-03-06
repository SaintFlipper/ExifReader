function RD(rec,num) {
    return (rec << 8) + num;
}

const DatasetId = {
	// Record number 1
	MODEL_VERSION : RD (1,0),
	DESTINATION : RD (1,5),
	FILE_FORMAT : RD (1,20),
	FILE_FORMAT_VERSION : RD (1,22),
	SERVICE_IDENTIFIER : RD (1,30),
	ENVELOPE_NUMBER : RD (1,40),
	PRODUCT_ID : RD (1,50),
	ENVELOPE_PRIORITY : RD (1,60),
	DATE_SENT : RD (1,70),
	TIME_SENT : RD (1,80),
	CODED_CHARACTER_SET : RD (1,90),

	// Record number 2
	RECORD2_VERSION : RD (2,0),
	OBJECT_NAME : RD (2,5),
	EDIT_STATUS : RD (2,7),
	URGENCY : RD (2,10),
	CATEGORY : RD (2,15),
	SUPPLEMENTAL_CATEGORY : RD (2,20),
	FIXTURE_IDENTIFIER : RD (2,22),
	KEYWORDS : RD (2,25),
	RELEASE_DATE : RD (2,30),
	RELEASE_TIME : RD (2,35),
	SPECIAL_INSTRUCTIONS : RD (2,40),
	REFERENCE_SERVICE : RD (2,45),
	REFERENCE_DATE : RD (2,47),
	REFERENCE_NUMBER : RD (2,50),
	DATE_CREATED : RD (2,55),
	TIME_CREATED : RD (2,60),
	ORIGINATING_PROGRAM : RD (2,65),
	PROGRAM_VERSION : RD (2,70),
	OBJECT_CYCLE : RD (2,75),
	BYLINE : RD (2,80),
	BYLINE_TITLE : RD (2,85),
	CITY : RD (2,90),
	PROVINCE_STATE : RD (2,95),
	COUNTRY_CODE : RD (2,100),
	COUNTRY_NAME : RD (2,101),
	ORIGINAL_TX_REFERENCE : RD (2,103),
	HEADLINE : RD (2,105),
	CREDIT : RD (2,110),
	SOURCE : RD (2,115),
	COPYRIGHT : RD (2,116),
	CAPTION : RD (2,120),
	CAPTION_WRITER : RD (2,122),
	IMAGE_TYPE : RD (2,130),
	LANGUAGE_IDENTIFIER : RD (2,135),

	// Record number 3
	RECORD3_VERSION : RD (3,0),
	PICTURE_NUMBER : RD (3,10),
	PIXELS_PER_LINE : RD (3,20),
	NUMBER_OF_LINES : RD (3,30),
	PIXEL_SIZE_IN_SCAN_DIR : RD (3,40),
	PIXEL_SIZE_PERP_SCAN_DIR : RD (3,50),
	SUPPLEMENT_TYPE : RD (3,55),
	COLOUR_REPRESENTATION : RD (3,60),
	INTERCHANGE_COLOUR_SPACE : RD (3,64),
	COLOUR_SEQUENCE : RD (3,65),
	COLOUR_CALIBRATION_TABLE : RD (3,70),
	LOOKUP_TABLE : RD (3,80),
	NUMBER_OF_INDEX_ENTRIES : RD (3,84),
	COLOUR_PALETTE : RD (3,85),
	NUMBER_OF_BITS_PER_SAMPLE : RD (3,86),
	SAMPLING_STRUCTURE : RD (3,90),
	SCANNING_DIRECTION : RD (3,100),
	IMAGE_ROTATION : RD (3,102),
	DATA_COMPRESSION_METHOD : RD (3,110),
	QUANTISATION_METHOD : RD (3,120),
	END_POINTS : RD (3,125),
	EXCURSION_TOLERANCE : RD (3,130),
	BITS_PER_COMPONENT : RD (3,135),
	MAXIMUM_DENSITY : RD (3,140),

	// Record number 7
	SIZE_MODE : RD (7,10),
	MAX_SUBFILE_SIZE : RD (7,20),
	OBJECT_SIZE_ANNOUNCED : RD (7,90),
	MAXIMUM_OBJECT_SIZE : RD (7,95),

	// Record number 8
	SUBFILE : RD (8,10),

	// Record number 9
	CONFIRMED_OBJECT_SIZE : RD (9,10)
};
